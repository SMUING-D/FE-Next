'use client';

import { useSearchParams } from 'next/navigation';

import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import Loader from './components/Loader';
import ListingCard from './components/listings/ListingCard';
import RQProvider from './components/providers/RQProvider';
import { useLists } from './hooks/useLists';

const Home = () => {
  const params = useSearchParams();
  const category = params.get('category');
  const { data: listings, isLoading, error } = useLists(category);
  console.log(listings);

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <RQProvider>
        <Container>
          {isLoading ? (
            <Loader />
          ) : (
            <section className="dark:text-white pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {listings.map((listing) => {
                return <ListingCard key={listing.id} data={listing} />;
              })}
            </section>
          )}
        </Container>
      </RQProvider>
    </ClientOnly>
  );
};

export default Home;
