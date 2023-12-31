'use client';

import { useSearchParams } from 'next/navigation';
import { Hourglass } from 'react-loader-spinner';

import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import List from './components/List';
import RQProvider from './components/providers/RQProvider';
import { useLists } from './hooks/useLists';

const Home = () => {
  const params = useSearchParams();
  const category = params.get('category');
  const { data: listings, isLoading, error } = useLists(category);

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <RQProvider>
        <Container>
          <section className="dark:text-white pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {isLoading ? (
              <div className="flex items-center justify-center h-[60vh]">
                <Hourglass
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={['#306cce', '#72a1ed']}
                />
              </div>
            ) : (
              <List />
            )}
          </section>
        </Container>
      </RQProvider>
    </ClientOnly>
  );
};

export default Home;
