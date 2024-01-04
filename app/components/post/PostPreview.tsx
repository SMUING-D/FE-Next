'use client';

import { Post } from '@/app/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

type PostPreviewProps = {
  data: Post;
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
    <div
      className="flex flex-col"
      onClick={() => {
        router.push(`/post/${data.id}`);
      }}
    >
      <div className="font-regular text-neutral-500 text-sm truncate">{data.title}</div>
      <div className="font-light text-xs text-neutral-300 truncate mt-1">{date}</div>
      <div className="border-b-2 border-slate-50 mt-2"></div>
    </div>
  );
};

export default PostPreview;
