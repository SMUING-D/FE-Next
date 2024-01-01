import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Container from './components/Container';
import ListingCard from './components/listings/ListingCard';
import { getFilteredPosts } from './lib/getFilteredPosts';

type HomeProps = {
  searchParams?: {
    category?: string;
  };
};

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const queryClient = new QueryClient();
  const category = searchParams?.category || '';

  // 서버에서 불러온 데이터를 클라이언트의 리액트 쿼리가 물려받음.(하이드레이트)
  await queryClient.prefetchQuery({
    queryKey: ['posts', category],
    queryFn: () => getFilteredPosts(category) // searchParams 전달
  });

  // hydrate라는 것은 서버에서 온 데이터를 클라이언트에서 그대로, 물려받는 것 이다.
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container>
        <ListingCard />
      </Container>
    </HydrationBoundary>
  );
};

export default Home;
