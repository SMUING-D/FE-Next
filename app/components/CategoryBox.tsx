'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

type CategoryBoxProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
  alias: string;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected, alias }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(alias);
  }, [router, alias]);

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
