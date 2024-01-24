import { Listing } from '@/app/types';
import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import StarButton from '../StarButton';

type ListingGridProps = {
  data: Listing;
};

const ListingGrid: React.FC<ListingGridProps> = ({ data }) => {
  const router = useRouter();
  const date = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }
    return `${format(data.createdAt, 'yyyy년/MM월/dd일')}`;
  }, [data.createdAt]);

  return (
    <div
      onClick={() => router.push(`/post/${data.postId}`)}
      className="w-[230px] col-span-1 cursor-pointer shadow-md p-2 rounded-xl border-[1px] border-gray-100"
    >
      <div
        className="
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-lg
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
          // 추후 구조 변경하면서 수정 예정!
          src={data.Images[0].link}
          alt={`${data.title}이미지`}
        />
        <div className="absolute top-3 right-3">
          <StarButton />
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="font-semibold text-md text-neutral-800 truncate">{data.title}</div>
        <div className="font-normal text-sm text-neutral-500 truncate">{data.content}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-light text-xs text-neutral-500 mt-2">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingGrid;
