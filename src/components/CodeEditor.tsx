'use client';

import { useStore } from '@/store/useStore';
import { LANGUAGES } from '@/lib/constants';

export default function CodeEditor() {
  const { code, language, setCode, setLanguage } = useStore();

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
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="w-full h-64 bg-[#1e1e2e] border border-gray-700 rounded-xl p-4 font-mono text-sm text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent scrollbar-thin placeholder-gray-600"
        placeholder="여기에 코드를 입력하세요..."
      />
    </div>
  );
}
