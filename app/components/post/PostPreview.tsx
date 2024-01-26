'use client';

import { JOBLIST, STUDYLIST } from '@/app/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

type PostPreviewProps = {
  data: STUDYLIST | JOBLIST;
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
    <div className="mb-3 rounded-lg p-4 hover:bg-slate-300 hover:dark:bg-slate-500 transition cursor-pointer shadow-sm border-[1px] border-gray-100">
      <div
        className="flex flex-col"
        onClick={() => {
          router.push(`/post/${data.id}`);
        }}
      >
        <div className="font-semibold text-md text-stone-800 dark:text-neutral-200 truncate">
          {data.title}
        </div>
        <div className="font-normal text-sm text-stone-500 dark:text-neutral-200 truncate mt-2">
          {data.content}
        </div>
        <div className="font-light text-xs dark:text-blue-400 text-neutral-600 truncate mt-3">
          {date}
        </div>
        <div className="border-b-2 border-slate-50 dark:border-blue-300 mt-2" />
      </div>
    </div>
  );
};

export default PostPreview;
