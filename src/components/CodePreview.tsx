'use client';

import { useRef, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import { useStore } from '@/store/useStore';

export default function CodePreview() {
  const previewRef = useRef<HTMLDivElement>(null);
  const { code, language, theme, fontSize, padding, background, showLineNumbers, title } =
    useStore();
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    try {
      const result = hljs.highlight(code, { language });
      setHighlightedCode(result.value);
    } catch {
      const result = hljs.highlightAuto(code);
      setHighlightedCode(result.value);
    }
  }, [code, language]);

  const bgStyle =
    background.type === 'gradient'
      ? {
          background: `linear-gradient(${background.direction}, ${background.from}, ${background.to})`,
        }
      : {
          background:
            background.color === 'transparent'
              ? 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px'
              : background.color,
        };

  const lines = code.split('\n');

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
        미리보기
      </h2>
      <div
        ref={previewRef}
        id="code-preview"
        className="rounded-xl overflow-hidden"
        style={{ ...bgStyle, padding: `${padding}px` }}
      >
        <link
          rel="stylesheet"
          href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/${theme}.min.css`}
        />
        <div className="rounded-xl overflow-hidden shadow-2xl">
          {/* 윈도우 타이틀바 */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e] border-b border-gray-800">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            {title && (
              <span className="text-xs text-gray-500 ml-2 font-mono">{title}</span>
            )}
          </div>

          {/* 코드 영역 */}
          <div className="overflow-auto scrollbar-thin" style={{ fontSize: `${fontSize}px` }}>
            <table className="w-full border-collapse">
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i} className="leading-relaxed">
                    {showLineNumbers && (
                      <td className="text-right pr-4 pl-4 select-none text-gray-600 align-top w-[1%] whitespace-nowrap">
                        {i + 1}
                      </td>
                    )}
                    <td className={`${showLineNumbers ? 'pr-4' : 'px-4'} py-0`}>
                      <pre className="m-0 p-0">
                        <code
                          className={`hljs language-${language}`}
                          style={{ background: 'transparent', padding: 0 }}
                          dangerouslySetInnerHTML={{
                            __html:
                              highlightedCode.split('\n')[i] ||
                              (line === '' ? '\u00A0' : line),
                          }}
                        />
                      </pre>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-3 bg-[#1e1e2e]" />
        </div>
      </div>
    </div>
  );
}
