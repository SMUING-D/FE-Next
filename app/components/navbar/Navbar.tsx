import Categories from '../Categories';
import Container from '../Container';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="dark:bg-dark fixed bg-white w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="dark:text-white flex flex-row items-center justify-between gap-3 md:gap-3">
            <Logo />
            <div className="flex items-center gap-5">
              <ThemeToggle />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
