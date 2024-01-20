import Banner from './components/Banner';
import Container from './components/Container';

type HomeProps = {
  searchParams?: {
    category?: string;
    info?: '' | 'on';
    search?: string;
  };
};

const Home: React.FC<HomeProps> = async () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Home;
