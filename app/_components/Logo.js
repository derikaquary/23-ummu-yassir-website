import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center gap-1">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="logo of ummu yasir restaurant"
        quality={100}
      />
      <span className="text-primary-900 flex-wrap font-semibold">WUY</span>
    </Link>
  );
}

export default Logo;
