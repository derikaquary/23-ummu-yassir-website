import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative h-[73px] aspect-square ">
      <Image
        src={logo}
        layout="fill"
        placeholder="blur"
        alt="Logo UMY"
        className="object-cover"
      />
    </div>
  );
}

export default Logo;
