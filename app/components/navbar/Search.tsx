'use client';

import { useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [userInput, setUserInput] = useState(''); //eslint-disable-line no-unused-vars

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }, []);

  return (
    <div className="md:w-2/4 border-[1px] p-2 rounded-full shadow-sm">
      <div className="flex flex-row items-center justify-center ">
        <input
          className="w-full p-1 bg-transparent"
          placeholder="검색어를 입력해주세요"
          onChange={handleChangeInput}
        />
        <div className="p-2 bg-blue-500 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
