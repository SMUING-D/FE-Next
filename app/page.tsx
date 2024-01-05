import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Container from './components/Container';
import Heading from './components/Heading';
import ListingCard from './components/listings/ListingCard';
import PreviewPostsView from './components/post/PreviewPostsView';
import { getFilteredPosts } from './lib/getFilteredPosts';
import { getPreviewPosts } from './lib/getPreviewPosts';

type HomeProps = {
  searchParams?: {
    category?: string;
  };
};

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const queryClient = new QueryClient();
  const category = searchParams?.category || '';

  // 서버에서 불러온 데이터를 클라이언트의 리액트 쿼리가 물려받음.(하이드레이트)
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', category],
    queryFn: ({ pageParam = 1 }) => getFilteredPosts(category, { pageParam }), // searchParams 전달
    // 커서 값
    initialPageParam: 0
  });

  await queryClient.prefetchQuery({
    queryKey: ['previewPosts'],
    queryFn: () => getPreviewPosts()
  });

  // hydrate라는 것은 서버에서 온 데이터를 클라이언트에서 그대로, 물려받는 것 이다.
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Container>
        <div className="p-20 flex flex-col items-center justify-center">
          {category === '' && (
            <div className="py-10">
              <Heading title="취업정보 교류글" subtitle="취업 정보 교류" center />
              <PreviewPostsView />
            </div>
          )}
          <Heading title="프로젝트/스터디 모집글" subtitle="취업 정보 교류" center />
          <ListingCard />
        </div>
      </Container>
    </HydrationBoundary>
  );
};

export default Home;
