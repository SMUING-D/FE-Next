'use client';

import RQProvider from './components/RQProvider';
import List from './components/List';

const Home = () => {
  return (
    <RQProvider>
      <List />
    </RQProvider>
  );
};

export default Home;
