'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

type CategoryBoxProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();
  // 쿼리로직
  const handleClick = useCallback(() => {
    let currentQuery = {};
    console.log(qs.parse(params.toString()));

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    };

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
      ${selected ? 'border-b-blue-400' : 'border-transparent'}
      ${selected ? 'text-blue-400' : 'text-neutral-500'}`}
    >
      <Icon size={26} className="cursor-pointer" />
      <div className="font-medium text-[0.7rem] ">{label}</div>
    </div>
  );
};

export default CategoryBox;
