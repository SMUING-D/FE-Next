import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Nunito } from 'next/font/google';

import { authOptions } from './api/auth/[...nextauth]/route';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import RQProvider from './components/providers/RQProvider';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMUING',
  description: 'SMUING에 오신것을 환영합니다.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log('루트다라라라라라라', session);
  return (
    <html lang="ko">
      <body className={`${font.className} dark:bg-medium`}>
        <ClientOnly>
          <RQProvider>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar />
            <div className="pb-20 pt-28">{children}</div>
          </RQProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
