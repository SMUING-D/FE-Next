import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMUING',
  description: 'SMUING에 오신것을 환영합니다.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${font.className} dark:bg-medium`}>
        <Navbar />
        <ToasterProvider />
        <RegisterModal />

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
