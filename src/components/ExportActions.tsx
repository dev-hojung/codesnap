'use client';

import { useState } from 'react';
import { toPng, toSvg } from 'html-to-image';

export default function ExportActions() {
  const [exporting, setExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  const getPreviewElement = () => {
    return document.getElementById('code-preview');
  };

  const handleDownload = async () => {
    const element = getPreviewElement();
    if (!element) return;

    setExporting(true);
    try {
      const dataUrl = await toPng(element, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement('a');
      link.download = `codesnap-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('이미지 내보내기 실패:', err);
    } finally {
      setExporting(false);
    }
  };

  const handleDownloadSvg = async () => {
    const element = getPreviewElement();
    if (!element) return;

    setExporting(true);
    try {
      const dataUrl = await toSvg(element, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement('a');
      link.download = 'codesnap.svg';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('SVG 내보내기 실패:', err);
    } finally {
      setExporting(false);
    }
  };

  const handleCopy = async () => {
    const element = getPreviewElement();
    if (!element) return;

    setExporting(true);
    try {
      const dataUrl = await toPng(element, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob,
        }),
      ]);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleDownload}
        disabled={exporting}
        className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white font-medium py-2.5 px-4 rounded-xl transition-all text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {exporting ? '내보내는 중...' : 'PNG 다운로드'}
      </button>
      <button
        onClick={handleDownloadSvg}
        disabled={exporting}
        className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:opacity-50 text-white font-medium py-2.5 px-4 rounded-xl transition-all text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {exporting ? '내보내는 중...' : 'SVG 다운로드'}
      </button>
      <button
        onClick={handleCopy}
        disabled={exporting}
        className="flex-1 flex items-center justify-center gap-2 bg-[#1e1e2e] hover:bg-[#2a2a3e] disabled:opacity-50 text-gray-200 font-medium py-2.5 px-4 rounded-xl border border-gray-700 transition-all text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? '복사 완료!' : '클립보드 복사'}
      </button>
    </div>
  );
}
