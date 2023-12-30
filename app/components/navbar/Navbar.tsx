import Categories from '../Categories';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="dark:bg-dark fixed bg-white w-full z-100 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="dark:text-white flex flex-row items-center justify-between gap-3 md:gap-3">
            <Logo />
            <Search />
            <ThemeToggle />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
