import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row gap-3 sm:gap-16 sm:items-center text-primary-100 font-semibold">
        <li>
          <Link href="/menu">menu</Link>
        </li>
        <li>
          <Link href="/account">account</Link>
        </li>
        <li>
          <Link href="/">home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
