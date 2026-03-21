import type { BackgroundConfig } from '@/store/useStore';

export const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'c', label: 'C' },
  { value: 'csharp', label: 'C#' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'php', label: 'PHP' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'sql', label: 'SQL' },
  { value: 'bash', label: 'Bash' },
  { value: 'json', label: 'JSON' },
  { value: 'yaml', label: 'YAML' },
  { value: 'markdown', label: 'Markdown' },
];

export const THEMES = [
  { value: 'atom-one-dark', label: 'Atom One Dark' },
  { value: 'monokai', label: 'Monokai' },
  { value: 'dracula', label: 'Dracula' },
  { value: 'github-dark', label: 'GitHub Dark' },
  { value: 'vs2015', label: 'VS 2015' },
  { value: 'nord', label: 'Nord' },
  { value: 'tokyo-night-dark', label: 'Tokyo Night' },
  { value: 'night-owl', label: 'Night Owl' },
];

export const BACKGROUNDS: { label: string; value: BackgroundConfig }[] = [
  {
    label: '바이올렛',
    value: { type: 'gradient', from: '#667eea', to: '#764ba2', direction: '135deg' },
  },
  {
    label: '선셋',
    value: { type: 'gradient', from: '#f093fb', to: '#f5576c', direction: '135deg' },
  },
  {
    label: '오션',
    value: { type: 'gradient', from: '#4facfe', to: '#00f2fe', direction: '135deg' },
  },
  {
    label: '민트',
    value: { type: 'gradient', from: '#43e97b', to: '#38f9d7', direction: '135deg' },
  },
  {
    label: '피치',
    value: { type: 'gradient', from: '#ffecd2', to: '#fcb69f', direction: '135deg' },
  },
  {
    label: '나이트',
    value: { type: 'gradient', from: '#0c3483', to: '#a2b6df', direction: '135deg' },
  },
  {
    label: '코랄',
    value: { type: 'gradient', from: '#ff9a9e', to: '#fecfef', direction: '135deg' },
  },
  {
    label: '다크',
    value: { type: 'solid', color: '#1a1a2e' },
  },
  {
    label: '미드나잇',
    value: { type: 'solid', color: '#0d1117' },
  },
  {
    label: '투명',
    value: { type: 'solid', color: 'transparent' },
  },
];

export const FONT_SIZES = [12, 13, 14, 15, 16, 18, 20];
export const PADDINGS = [16, 24, 32, 48, 64];
