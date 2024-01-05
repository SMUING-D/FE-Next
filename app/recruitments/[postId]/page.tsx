import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ClientOnly from '@/app/components/ClientOnly';
import { getRecruitmentPost } from '@/app/lib/getRecruitmentPost';
import { getServerSession } from 'next-auth';

import RecruitmentsClient from './RecruitmentsClient';

type TParams = {
  postId?: string;
};

const RecruitmentsDetailPage = async ({ params }: { params: TParams }) => {
  const post = await getRecruitmentPost(params.postId as string);
  const currentUser = await getServerSession(authOptions);
  // TODO: const comments = await getPostComment(params.postId as string)

  return (
    <ClientOnly>
      <RecruitmentsClient post={post} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default RecruitmentsDetailPage;
