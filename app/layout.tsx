import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import ClientOnly from './components/ClientOnly';
import Footer from './components/Footer';
import JobWriteModal from './components/modals/JobWriteModal';
import LoginModal from './components/modals/LoginModal';
import PasswordFindModal from './components/modals/PasswordFindModal';
import RegisterModal from './components/modals/RegisterModal';
import StudyWriteModal from './components/modals/StudyWriteModal';
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
      <meta name="viewport" content="width=device-width" />
      <meta name="viewport" content="user-scalable=0;" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <body className={`${font.className} dark:bg-medium dark:text-slate-100`}>
        <ClientOnly>
          <RQProvider>
            <MSWComponent />
            <ToasterProvider />
            <div id="portal">
              <RegisterModal />
              <LoginModal />
              <PasswordFindModal />
              <StudyWriteModal />
              <JobWriteModal />
            </div>
            <Navbar />
            <div className="flex flex-col h-[100dvh]">
              <div className="pb-20 pt-28 flex-1">{children}</div>
              <Footer />
            </div>
          </RQProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
