'use client';

import CodeEditor from '@/components/CodeEditor';
import CodePreview from '@/components/CodePreview';
import CustomizePanel from '@/components/CustomizePanel';
import ExportActions from '@/components/ExportActions';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* 헤더 */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CodeSnap</h1>
            <p className="text-xs text-gray-500">코드를 아름다운 이미지로 변환</p>
          </div>
        </div>
      </header>

      {/* 메인 레이아웃 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 좌측: 입력 + 설정 */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-5">
            <CodeEditor />
          </div>
          <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-5">
            <CustomizePanel />
          </div>
          <ExportActions />
        </div>

        {/* 우측: 미리보기 */}
        <div className="lg:col-span-8">
          <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-5 sticky top-8">
            <CodePreview />
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="max-w-7xl mx-auto mt-12 text-center text-xs text-gray-600">
        <p>CodeSnap - 외부 API 없이 브라우저에서 동작합니다</p>
      </footer>
    </main>
  );
}
