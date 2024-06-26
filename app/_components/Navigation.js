import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex flex-col items-center justify-center">
      <ul className="grid sm:grid-cols-4 sm:gap-3 justify-center items-center sm:text-xl">
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/menu">About</Link>
        </li>
        <li>
          <Link href="/menu">Account</Link>
        </li>
        <li>
          <Link href="/menu">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
