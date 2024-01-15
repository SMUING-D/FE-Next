import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Container from './components/Container';
import ListingContainer from './components/listings/ListingContainer';
import { getFilteredPosts } from './lib/getFilteredPosts';

type HomeProps = {
  searchParams?: {
    category?: string;
    info?: '' | 'on';
    search?: string;
  };
};

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const queryClient = new QueryClient();
  const category = searchParams?.category || '';
  const info = searchParams?.info || '';
  const search = searchParams?.search || '';

  console.log(info, search);

  // 서버에서 불러온 데이터를 클라이언트의 리액트 쿼리가 물려받음.(하이드레이트)
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', category, info, search],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(category, info, search, { pageParam }), // searchParams 전달
    // 커서 값
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

export default Home;
