import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeSnap - 코드를 아름다운 이미지로 변환',
  description: '코드 스니펫을 SNS 공유용 아름다운 이미지로 변환하는 도구',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
