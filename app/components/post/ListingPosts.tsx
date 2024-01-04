'use client';

import { Listing } from '@/app/types';

import PostPreview from './PostPreview';

const testData: Listing[] = [
  {
    id: 4,
    title: '스타트업 경험 공유 모임',
    category: '경영경제대학',
    createdAt: new Date().toString(), //어차피 나중에 문자열로 오것지,,..
    description: '스타트업 창업 경험을 나누는 자리입니다. 함께 나누어봐요!',
    memberCount: 6,
    imageSrc:
      'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
//게시글 미리보기 컴포넌트 나열

const ListingPosts = () => {
  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {testData?.map((postData) => {
        return <PostPreview key={postData.id} data={postData} />;
      })}
    </div>
  );
};

export default ListingPosts;
