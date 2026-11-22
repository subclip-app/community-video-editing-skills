// Ported from Subclip src/main/user-skills/skill-scan.ts, checked 2026-11-23.
// Detection patterns and severities match the desktop scanner.
export const SCRIPT_EXTENSIONS = /\.(?:py|sh|bash|zsh|ps1|bat|cmd|js|mjs|cjs|ts|tsx|jsx|rb|pl|php|go|rs|lua|applescript)$/iu;

const EXTERNAL_PROVIDERS = [
  'fal.ai', 'fal_client', 'replicate.com', 'replicate api', 'replicate_api_token', 'higgsfield', 'atlas cloud', 'atlascloud', 'elevenlabs', 'openai', 'runwayml', 'runway ml', 'kling',
  'seedance', 'seedream', 'minimax', 'stability.ai', 'midjourney', 'heygen', 'synthesia', 'luma ai', 'lumalabs', 'pika labs', 'suno', 'udio',
  'xai', 'grok', 'gemini', 'veo', 'imagen', 'ideogram', 'leonardo.ai', 'krea', 'hedra', 'd-id', 'together.ai', 'openrouter', 'deepgram', 'assemblyai',
];

const RULES = [
  {
    code: 'prompt-injection', severity: 'danger', instructionsOnly: true,
    pattern: /\b(?:ignore|disregard|forget|override)\b[^.\n]{0,40}\b(?:previous|prior|above|earlier|all|any|other|system|developer)\b[^.\n]{0,30}\b(?:instructions?|rules?|prompts?|guidelines?|skills?)\b/iu,
    message: 'Tells the agent to ignore other instructions.',
  },
  {
    code: 'prompt-injection', severity: 'danger', instructionsOnly: true,
    pattern: /\b(?:do not|don't|never)\s+(?:tell|inform|mention|show|ask)\s+(?:this\s+to\s+)?(?:the\s+)?(?:user|creator|human)\b|\bwithout\s+(?:asking|telling|informing|notifying)\s+(?:the\s+)?(?:user|creator|human)\b/iu,
    message: 'Tells the agent to act without the user knowing.',
  },
  {
    code: 'prompt-injection', severity: 'danger', instructionsOnly: true,
    pattern: /\b(?:you are now|new system prompt|act as (?:an? )?(?:unrestricted|jailbroken)|developer mode|jailbreak|reveal (?:your|the) system prompt)\b/iu,
    message: 'Tries to change the agent’s role or reveal its instructions.',
  },
  {
    code: 'prompt-injection', severity: 'danger', instructionsOnly: true,
    pattern: /\b(?:disable|turn off|bypass|skip)\b[^.\n]{0,30}\b(?:approval|confirmation|safety|guardrails?|credit checks?|telemetry|permission prompts?)\b/iu,
    message: 'Tells the agent to switch off approvals or safety checks.',
  },
  {
    code: 'exfiltration', severity: 'danger',
    pattern: /(?:~\/\.ssh|id_rsa|id_ed25519|\.aws\/credentials|\/etc\/passwd|keychain|login\.keychain|Local State|Cookies\.binarycookies|\.netrc|wallet\.dat)/iu,
    message: 'Reads credentials or private system files.',
  },
  {
    code: 'exfiltration', severity: 'danger',
    pattern: /\b(?:upload|send|post|forward|exfiltrate|report|sync)\b[^.\n]{0,60}\b(?:projects?|transcripts?|files?|media|tokens?|keys?|cookies|credentials|env(?:ironment)?|history|emails?)\b[^.\n]{0,60}https?:\/\//iu,
    message: 'Sends project data or secrets to an outside address.',
  },
  {
    code: 'exfiltration', severity: 'danger',
    pattern: /\b(?:webhook\.site|requestbin|pipedream\.net|ngrok\.(?:io|app)|burpcollaborator|interact\.sh|discord(?:app)?\.com\/api\/webhooks|hooks\.slack\.com|api\.telegram\.org\/bot)/iu,
    message: 'Mentions a data collection endpoint (webhook or tunnel).',
  },
  {
    code: 'exfiltration', severity: 'warning',
    pattern: /\b(?:printenv|os\.environ|process\.env|getenv)\b[^\n]{0,80}\b(?:requests\.post|fetch\(|curl|axios|urllib)/iu,
    message: 'Reads environment variables close to a network call.',
  },
  {
    code: 'remote-code', severity: 'warning',
    pattern: /\b(?:curl|wget|iwr|irm|Invoke-WebRequest)\b[^\n|]{0,200}\|\s*(?:sudo\s+)?(?:ba|z)?sh\b|\|\s*iex\b/iu,
    message: 'Downloads and runs a remote script.',
  },
  {
    code: 'remote-code', severity: 'info', instructionsOnly: true,
    pattern: /\b(?:pip3? install|npm (?:install|i) -g|brew install|apt(?:-get)? install|cargo install|go install)\b/iu,
    message: 'Asks to install software. Subclip never runs these commands for a skill.',
  },
  {
    code: 'api-key', severity: 'warning',
    pattern: /\b[A-Z][A-Z0-9]*_(?:API_)?(?:KEY|TOKEN|SECRET)\b|\b(?:api[ _-]?key|access[ _-]?token|bearer token)\b/u,
    message: 'Needs an API key. Subclip uses its own tools first and never asks for keys in chat.',
  },
  {
    code: 'html-injection', severity: 'warning', instructionsOnly: true,
    pattern: /<script\b|javascript:|onerror\s*=|onload\s*=|<iframe\b/iu,
    message: 'Has script or iframe markup inside the instructions.',
  },
  {
    code: 'hidden-text', severity: 'warning',
    pattern: /[​-‏‪-‮⁠-⁤﻿\u{E0000}-\u{E007F}]/u,
    message: 'Has invisible characters that can hide instructions.',
  },
  {
    code: 'hidden-text', severity: 'warning', instructionsOnly: true,
    pattern: /<!--[^>]{0,400}\b(?:agent|assistant|claude|instruction|ignore|must|always|never)\b[^>]{0,400}-->/iu,
    message: 'Has instructions hidden in an HTML comment.',
  },
];

const INSTRUCTION_FILE = /\.(?:md|mdx|markdown|txt)$/iu;

function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i += 1) if (text.charCodeAt(i) === 10) line += 1;
  return line;
}

function excerptAt(text, index) {
  const start = text.lastIndexOf('\n', index) + 1;
  const end = text.indexOf('\n', index);
  return text.slice(start, end === -1 ? undefined : end).trim().slice(0, 160);
}

export function readSkillFrontmatter(markdown) {
  const block = /^﻿?---\r?\n([\s\S]*?)\r?\n---/u.exec(markdown)?.[1];
  if (!block) return { name: '', description: '', hasFrontmatter: false };
  const field = (key) => {
    const lines = block.split(/\r?\n/u);
    const index = lines.findIndex((line) => new RegExp(`^${key}:`, 'u').test(line));
    if (index < 0) return '';
    let value = lines[index].slice(key.length + 1).trim();
    // YAML block scalars (description: > or |) continue on indented lines.
    if (/^[>|][-+]?$/u.test(value) || value === '') {
      const continuation = [];
      for (let i = index + 1; i < lines.length && /^\s+\S/u.test(lines[i]); i += 1) continuation.push(lines[i].trim());
      value = continuation.join(' ');
    }
    return value.replace(/^(['"])([\s\S]*)\1$/u, '$2').trim();
  };
  return { name: field('name'), description: field('description'), hasFrontmatter: true };
}

/** Flags for one skill folder. skippedFiles counts files left out by the size limits. */
export function scanSkillFiles(files, skippedFiles = 0) {
  const flags = [];
  const seen = new Set();
  const add = (flag) => {
    const key = `${flag.code}:${flag.message}`;
    if (seen.has(key)) return;
    seen.add(key);
    flags.push(flag);
  };
  const skillMd = files.find((file) => /(^|\/)SKILL\.md$/iu.test(file.path));
  if (!skillMd || !readSkillFrontmatter(skillMd.text).hasFrontmatter) {
    add({ code: 'missing-frontmatter', severity: 'info', message: 'SKILL.md has no name/description header; Subclip used the folder name.' });
  }
  const scripts = files.filter((file) => SCRIPT_EXTENSIONS.test(file.path));
  if (scripts.length) {
    add({ code: 'scripts', severity: 'info', message: `Contains ${scripts.length} script file${scripts.length === 1 ? '' : 's'}. Subclip keeps them as reading material only and never runs them.` });
  }
  const providers = new Set();
  for (const file of files) {
    const instructions = INSTRUCTION_FILE.test(file.path) || !/\.[a-z0-9]+$/iu.test(file.path);
    const lower = file.text.toLowerCase();
    for (const provider of EXTERNAL_PROVIDERS) {
      const index = lower.search(new RegExp(`(?<![a-z0-9])${provider.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![a-z0-9])`, 'u'));
      if (index >= 0) providers.add(provider);
    }
    for (const rule of RULES) {
      if (rule.instructionsOnly && !instructions) continue;
      const match = rule.pattern.exec(file.text);
      if (!match) continue;
      add({ code: rule.code, severity: rule.severity, message: rule.message, file: file.path, line: lineOf(file.text, match.index), excerpt: excerptAt(file.text, match.index) });
    }
  }
  if (providers.size) {
    add({
      code: 'external-provider', severity: 'warning',
      message: `Uses outside AI services (${[...providers].slice(0, 8).join(', ')}). Subclip uses its own tools for these unless you ask for that service.`,
    });
  }
  if (skippedFiles > 0) {
    add({ code: 'files-skipped', severity: 'info', message: `${skippedFiles} large, binary or extra file${skippedFiles === 1 ? ' was' : 's were'} not installed.` });
  }
  const order = { danger: 0, warning: 1, info: 2 };
  return flags.sort((left, right) => order[left.severity] - order[right.severity]);
}


