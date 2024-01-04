// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ClientOnly from '@/app/components/ClientOnly';
import { getRecruitmentPost } from '@/app/lib/getRecruitmentPost';

// import { getServerSession } from 'next-auth';
import RecruitmentsClient from './RecruitmentsClient';

type TParams = {
  postId?: string;
};

const RecruitmentsDetailPage = async ({ params }: { params: TParams }) => {
  // TODO: 게시글 정보 받아오는 함수
  const post = await getRecruitmentPost(params.postId);
  // TODO: 현재 유저 정보 받아오는 곳
  //   const session = await getServerSession(authOptions);
  return (
    <ClientOnly>
      <RecruitmentsClient post={post} />
    </ClientOnly>
  );
};

export default RecruitmentsDetailPage;
