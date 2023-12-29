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
          <section className="dark:text-white">
            <List />
          </section>
        </Container>
      </RQProvider>
    </ClientOnly>
  );
};

export default Home;
