import { create } from 'zustand';

export type GradientBackground = {
  type: 'gradient';
  from: string;
  to: string;
  direction: string;
};

export type SolidBackground = {
  type: 'solid';
  color: string;
};

export type BackgroundConfig = GradientBackground | SolidBackground;

export interface CodeSnapState {
  code: string;
  language: string;
  theme: string;
  fontSize: number;
  padding: number;
  background: BackgroundConfig;
  showLineNumbers: boolean;
  title: string;

  setCode: (code: string) => void;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  setPadding: (padding: number) => void;
  setBackground: (background: BackgroundConfig) => void;
  setShowLineNumbers: (show: boolean) => void;
  setTitle: (title: string) => void;
}

const DEFAULT_CODE = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 피보나치 수열 출력
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}`;

export const useStore = create<CodeSnapState>((set) => ({
  code: DEFAULT_CODE,
  language: 'javascript',
  theme: 'atom-one-dark',
  fontSize: 14,
  padding: 32,
  background: {
    type: 'gradient',
    from: '#667eea',
    to: '#764ba2',
    direction: '135deg',
  },
  showLineNumbers: true,
  title: '',

  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
  setTheme: (theme) => set({ theme }),
  setFontSize: (fontSize) => set({ fontSize }),
  setPadding: (padding) => set({ padding }),
  setBackground: (background) => set({ background }),
  setShowLineNumbers: (show) => set({ showLineNumbers: show }),
  setTitle: (title) => set({ title }),
}));
