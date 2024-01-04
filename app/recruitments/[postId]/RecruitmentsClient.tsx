import Container from '@/app/components/Container';
import ListingHeader from '@/app/components/listings/ListingHeader';
import React from 'react';

const RecruitmentsClient = ({ post }) => {
  console.log(post);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHeader
            title={post.title}
            id={post.id}
            imageSrc={post.imageSrc}
            category={post.category}
          />
          <div className="grid grid-cols-1 mt-6">
            <div className="text-2xl">{post.description}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-6">
            <div className="font-bold">모집인원 {post.memberCount}명</div>
            <div className="font-bold">댓글</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecruitmentsClient;
