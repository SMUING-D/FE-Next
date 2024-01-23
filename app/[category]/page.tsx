import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { headers } from 'next/headers';

import Container from '../components/Container';
import ListingContainerTest from '../components/listings/ListingContainerTest';
import { getFilteredPosts } from '../lib/getFilteredPosts';

type HomeProps = {
  college: string;
};

const CategoryDetailPage: React.FC<HomeProps> = async () => {
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || '';
  console.log('headerPathname: ', headerPathname);
  const queryClient = new QueryClient();
  const college = 'coe';

  // 서버에서 불러온 데이터를 클라이언트의 리액트 쿼리가 물려받음.(하이드레이트)
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', college],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(college, { pageParam }), // searchParams 전달
    // 커서 값
    initialPageParam: 0
  });

  // hydrate라는 것은 서버에서 온 데이터를 클라이언트에서 그대로, 물려받는 것 이다.
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container>
        <ListingContainerTest />
      </Container>
    </HydrationBoundary>
  );
};

export default CategoryDetailPage;
