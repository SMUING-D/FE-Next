import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import ClientOnly from './components/ClientOnly';
import Footer from './components/Footer';
import LoginModal from './components/modals/LoginModal';
import PasswordFindModal from './components/modals/PasswordFindModal';
import RegisterModal from './components/modals/RegisterModal';
import WriteModal from './components/modals/WriteModal';
import Navbar from './components/navbar/Navbar';
import { MSWComponent } from './components/providers/MSWProvider';
import RQProvider from './components/providers/RQProvider';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMUING',
  description: 'SMUING에 오신것을 환영합니다.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${font.className} dark:bg-medium dark:text-slate-100`}>
        <ClientOnly>
          <RQProvider>
            <MSWComponent />
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <PasswordFindModal />
            <WriteModal />
            <Navbar />
            <div className="pb-20 pt-28">{children}</div>
            <Footer />
          </RQProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
