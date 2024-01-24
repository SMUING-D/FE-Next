import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Container from '../components/Container';
import ListingContainer from '../components/listings/ListingContainer';
import { getFilteredPosts } from '../lib/getFilteredPosts';

type HomeProps = {
  params: {
    category: string;
  };
};

const CategoryDetailPage: React.FC<HomeProps> = async ({ params }) => {
  const { category } = params;

  const queryClient = new QueryClient();
  const college = category;

  // 서버에서 불러온 데이터를 클라이언트의 리액트 쿼리가 물려받음.(하이드레이트)
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', college, 'info'],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(college, { pageParam, listType: 'info' }), // searchParams, listType 전달
    // 커서 값
    initialPageParam: 0
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', college, 'study'],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(college, { pageParam, listType: 'study' }),
    initialPageParam: 0
  });

  // hydrate라는 것은 서버에서 온 데이터를 클라이언트에서 그대로, 물려받는 것 이다.
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container>
        <ListingContainer />
      </Container>
    </HydrationBoundary>
  );
};

export default CategoryDetailPage;
