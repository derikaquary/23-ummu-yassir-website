import Image from "next/image";
import liwet from "@/public/liwet.png";

function MainCompTwo() {
  return (
    <div className="hidden sm:block sm:h-[400px] h-[250px] grid items-center justify-center relative">
      <div className="sm:absolute sm:w-[145%] sm:h-[145%] ">
        <Image
          src={liwet}
          fill
          placeholder="blur"
          quality={100}
          alt="nasi liwet"
          className="object-scale-down sm:object-contain sm:translate-x-[-136px]"
        />
      </div>
    </div>
  );
}

export default MainCompTwo;
