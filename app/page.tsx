'use client';

import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import List from './components/List';
import RQProvider from './components/providers/RQProvider';

const Home = () => {
  return (
    <ClientOnly>
      <RQProvider>
        <Container>
          <section className="dark:text-white pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <List />
          </section>
        </Container>
      </RQProvider>
    </ClientOnly>
  );
};

export default Home;
