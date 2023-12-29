'use client';

import Container from './components/Container';
import List from './components/List';
import RQProvider from './components/providers/RQProvider';

const Home = () => {
  return (
    <RQProvider>
      <Container>
        <section className="dark:text-white">
          <List />
        </section>
      </Container>
    </RQProvider>
  );
};

export default Home;
