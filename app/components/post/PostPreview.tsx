'use client';

import { Listing } from '@/app/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

type PostPreviewProps = {
  data: Listing;
};

const PostPreview: React.FC<PostPreviewProps> = ({ data }) => {
  const router = useRouter();

  const date = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }

    return `${format(data.createdAt, 'yyyy년 MM월 dd일')}`;
  }, [data.createdAt]);

  return (
    <div className="rounded-lg p-2 hover:bg-slate-300 hover:dark:bg-slate-500 transition cursor-pointer">
      <div
        className="flex flex-col "
        onClick={() => {
          router.push(`/post/${data.postId}`);
        }}
      >
        <div className="font-regular dark:text-neutral-400 text-sm truncate">{data.title}</div>
        <div className="font-light text-xs dark:text-blue-400 text-neutral-600 truncate mt-1">
          {date}
        </div>
        <div className="border-b-2 border-slate-50 dark:border-blue-300 mt-2"></div>
      </div>
    </div>
  );
};

export default PostPreview;
