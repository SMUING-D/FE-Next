'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEventHandler } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    const searchValue = e.currentTarget.search.value;
    console.log(e.currentTarget.search.value);

    if (!searchValue) {
      router.replace(`?category=${newSearchParams.get('category') || ''}`);
    } else {
      newSearchParams.set('search', searchValue);
      router.replace(`?${newSearchParams.toString()}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-3/4 border-[2px] p-2 rounded-full shadow-sm max-w-3xl">
      <div className="flex flex-row items-center justify-center ">
        <input
          className="w-full p-1 bg-transparent"
          placeholder="검색어를 입력해주세요"
          name="search"
          type="search"
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-full text-white cursor-pointer">
          <BiSearch size={18} />
        </button>
      </div>
    </form>
  );
};

export default Search;
