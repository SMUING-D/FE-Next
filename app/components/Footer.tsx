import React from 'react';

import { FOOTER_MENU } from '../constants/menu';

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
