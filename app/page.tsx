import Banner from './components/Banner';
import Container from './components/Container';
import PopularCategoriesPost from './components/PopularCategoriesPost';
import ListingStudy from './components/listings/ListingStudy';

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
      <ListingStudy />
      <PopularCategoriesPost />
    </Container>
  );
};

export default Home;
