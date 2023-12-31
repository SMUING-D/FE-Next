'use client';

import { Listing } from '@/app/types';
import { format } from 'date-fns';
import Image from 'next/image';
import { useMemo } from 'react';

import StarButton from '../StarButton';

type ListingCardProps = {
  data: Listing;
};

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  // const router = useRouter();
  const date = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }

    return `${format(data.createdAt, 'yyyy년/MM월/dd일')}`;
  }, [data.createdAt]);
  return (
    <div onClick={() => {}} className="col-span-1 cursor-pointer group">
      <div
        className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
      >
        <Image
          fill
          className="  
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition"
          src={data?.imageSrc as string}
          alt={`${data.title}이미지`}
        />
        <div className="absolute top-3 right-3">
          <StarButton />
        </div>
      </div>
      <div className="font-semibold text-lg truncate">{data.title}</div>
      <div className="font-light text-neutral-500 truncate">{data.description}</div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">{date}</div>
      </div>
    </div>
  );
};

export default ListingCard;
