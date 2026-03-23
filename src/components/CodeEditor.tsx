'use client';

import { useState, useCallback } from 'react';
import { useStore } from '@/store/useStore';
import { LANGUAGES } from '@/lib/constants';

const EXT_TO_LANGUAGE: Record<string, string> = {
  js: 'javascript',
  jsx: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  java: 'java',
  cpp: 'cpp',
  cc: 'cpp',
  cxx: 'cpp',
  c: 'c',
  h: 'c',
  cs: 'csharp',
  go: 'go',
  rs: 'rust',
  swift: 'swift',
  kt: 'kotlin',
  kts: 'kotlin',
  rb: 'ruby',
  php: 'php',
  html: 'html',
  htm: 'html',
  css: 'css',
  scss: 'css',
  sql: 'sql',
  sh: 'bash',
  bash: 'bash',
  zsh: 'bash',
  json: 'json',
  yaml: 'yaml',
  yml: 'yaml',
  md: 'markdown',
  markdown: 'markdown',
};

export default function CodeEditor() {
  const { code, language, setCode, setLanguage } = useStore();
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
      const detectedLang = EXT_TO_LANGUAGE[ext];
      if (detectedLang) {
        setLanguage(detectedLang);
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode((e.target?.result as string) ?? '');
      };
      reader.readAsText(file);
    },
    [setCode, setLanguage]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
          코드 입력
        </h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1e1e2e] border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-xl transition-all ${
          isDragging
            ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-[#13131f]'
            : ''
        }`}
      >
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className={`w-full h-64 bg-[#1e1e2e] border rounded-xl p-4 font-mono text-sm text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent scrollbar-thin placeholder-gray-600 transition-all ${
            isDragging ? 'border-purple-400 opacity-60' : 'border-gray-700'
          }`}
          placeholder="여기에 코드를 입력하세요..."
        />
        {isDragging && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-purple-900/30 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-300 mb-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className="text-purple-200 text-sm font-medium">파일을 놓으세요</p>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 text-center">
        코드 파일을 드래그 앤 드롭하면 자동으로 불러옵니다
      </p>
    </div>
  );
}
