'use client';

import RQProvider from './components/RQProvider';
import List from './components/List';

const Home = () => {
  return (
    <RQProvider>
      <List />
      <h3>husky</h3>
    </RQProvider>
  );
};

export default Home;
