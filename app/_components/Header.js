import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-auto px-8 py-5 border-b border-primary-300">
      <div className="flex justify-between sm:text-xl items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
