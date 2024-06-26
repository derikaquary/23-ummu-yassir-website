import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex flex-col items-center justify-center">
      <ul className="grid sm:grid-cols-4 sm:gap-3 justify-center items-center sm:text-xl">
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
