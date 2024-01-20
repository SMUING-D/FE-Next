import React from 'react';

const FOOTER_MENU = [
  { id: 1, name: '서비스 소개', href: '#' },
  { id: 2, name: '개인정보 처리 방침', href: '#' },
  { id: 3, name: '이용 약관', href: '#' },
  { id: 4, name: '이메일 문의', href: 'mailto:dydals3440@gmail.com' }
];

const Footer = () => {
  return (
    <footer className="bg-white w-full rounded-lg shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a href="https://smuing.com/" className="mx-2 hover:underline">
            SMUING
          </a>
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {FOOTER_MENU.map(({ id, href, name }) => {
            return (
              <li key={id}>
                <a href={href} className="p-2 rounded-lg hover:bg-slate-200  me-4 md:me-6">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
