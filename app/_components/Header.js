import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className=" px-8 pt-5 pb-2">
      <div className="bg-secondary-400/50 flex justify-between items-center sm:max-w-7xl mx-auto px-3 py-3 rounded-md">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
