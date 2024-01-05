'use client';

import { getPreviewPosts } from '@/app/lib/getPreviewPosts';
import { Listing } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

import PostPreview from './PostPreview';

const ListingPosts = ({ category }: { category: string }) => {
  const { data: previewPosts } = useQuery<Listing[]>({
    queryKey: ['previewPosts'],
    queryFn: () => getPreviewPosts()
  });

  const filteredPosts = previewPosts
    ?.filter((postData) => category === postData.category)
    .slice(0, 5);
  let hotPostsData;

  if (category === 'HOT') {
    hotPostsData = previewPosts?.sort((a, b) => (b?.likes || 0) - (a?.likes || 0));
    hotPostsData = hotPostsData?.slice(0, 5);
    return (
      <div className="flex flex-col p-2  gap-5">
        {hotPostsData?.map((postData) => <PostPreview key={postData.postId} data={postData} />)}
      </div>
    );
  }

  return (
    <div className="flex flex-col p-2  gap-5">
      {filteredPosts?.map((postData) => <PostPreview key={postData.postId} data={postData} />)}
    </div>
  );
};

export default ListingPosts;
