'use client';

import { useStore } from '@/store/useStore';
import { THEMES, BACKGROUNDS, FONT_SIZES, PADDINGS } from '@/lib/constants';

export default function CustomizePanel() {
  const {
    theme,
    fontSize,
    padding,
    background,
    showLineNumbers,
    title,
    setTheme,
    setFontSize,
    setPadding,
    setBackground,
    setShowLineNumbers,
    setTitle,
  } = useStore();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
        커스터마이징
      </h2>

      {/* 제목 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-400">창 제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="파일명 또는 제목..."
          className="bg-[#1e1e2e] border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* 테마 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-400">테마</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-[#1e1e2e] border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {THEMES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* 배경 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-400">배경</label>
        <div className="grid grid-cols-5 gap-2">
          {BACKGROUNDS.map((bg) => {
            const style =
              bg.value.type === 'gradient'
                ? {
                    background: `linear-gradient(${bg.value.direction}, ${bg.value.from}, ${bg.value.to})`,
                  }
                : {
                    background:
                      bg.value.color === 'transparent'
                        ? 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 12px 12px'
                        : bg.value.color,
                  };

            const isSelected = JSON.stringify(bg.value) === JSON.stringify(background);

            return (
              <button
                key={bg.label}
                onClick={() => setBackground(bg.value)}
                title={bg.label}
                className={`w-full aspect-square rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-purple-400 scale-110 shadow-lg shadow-purple-500/30'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                style={style}
              />
            );
          })}
        </div>
      </div>

      {/* 폰트 크기 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-400">폰트 크기</label>
        <div className="flex gap-1.5 flex-wrap">
          {FONT_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${
                fontSize === size
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#1e1e2e] text-gray-400 border border-gray-700 hover:border-gray-500'
              }`}
            >
              {size}px
            </button>
          ))}
        </div>
      </div>

      {/* 패딩 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-400">패딩</label>
        <div className="flex gap-1.5 flex-wrap">
          {PADDINGS.map((p) => (
            <button
              key={p}
              onClick={() => setPadding(p)}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${
                padding === p
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#1e1e2e] text-gray-400 border border-gray-700 hover:border-gray-500'
              }`}
            >
              {p}px
            </button>
          ))}
        </div>
      </div>

      {/* 라인 넘버 */}
      <div className="flex items-center justify-between">
        <label className="text-xs text-gray-400">줄 번호 표시</label>
        <button
          onClick={() => setShowLineNumbers(!showLineNumbers)}
          className={`relative w-10 h-5 rounded-full transition-colors ${
            showLineNumbers ? 'bg-purple-600' : 'bg-gray-700'
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              showLineNumbers ? 'left-5' : 'left-0.5'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
