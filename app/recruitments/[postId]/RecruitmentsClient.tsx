import Container from '@/app/components/Container';
import ListingHeader from '@/app/components/listings/ListingHeader';
import ListingInfo from '@/app/components/listings/ListingInfo';
import { Post, User } from '@/app/types';
import React from 'react';

type RecruitmentsClientProps = {
  post: Post;
  currentUser: {
    user?: User;
  };
};

const RecruitmentsClient: React.FC<RecruitmentsClientProps> = ({ post, currentUser }) => {
  console.log(currentUser);
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
            {/* post.user 정보를 받아서 정보재구성 */}
            <ListingInfo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-6">
            <div className="font-bold flex flex-col gap-4">
              <div>모집인원 {post.memberCount}명</div>
              <div>난이도 상 | 중 | 하 </div>
              <div>어떤 정보 담을지 고민해봅시다.</div>
            </div>
            <div className="font-bold">댓글 컴포넌트</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecruitmentsClient;
