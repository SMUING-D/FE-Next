'use client';

import { getPreviewPosts } from '@/app/lib/getPreviewPosts';
import { Post } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

import PostPreview from './PostPreview';

//게시글 미리보기 컴포넌트 나열
const ListingPosts = () => {
  const { data: previewPosts } = useQuery<Post[]>({
    queryKey: ['PreviewPosts'],
    queryFn: () => getPreviewPosts()
  });

  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {previewPosts?.map((postData) => {
        return <PostPreview key={postData.id} data={postData} />;
      })}
    </div>
  );
};

export default ListingPosts;
