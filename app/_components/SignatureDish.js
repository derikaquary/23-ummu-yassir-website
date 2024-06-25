import Image from "next/image";
import food1 from "@/public/food1.png";
import food2 from "@/public/food2.png";
import food3 from "@/public/food3.png";

function SignatureDish() {
  return (
    <>
      <div className="bg-blue-400 grid grid-cols-[1fr_1fr_1fr] h-[10rem] w-[42rem]">
        <div className="relative">
          <Image
            src={food1}
            placeholder="blur"
            fill
            quality={100}
            alt="nasi liwet"
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={food2}
            fill
            placeholder="blur"
            quality={100}
            alt="nasi liwet"
            className="object-cover sm:onject-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={food3}
            fill
            placeholder="blur"
            quality={100}
            alt="nasi liwet"
            className="object-cover sm:onject-cover"
          />
        </div>
      </div>
      <div className="bg-red-400 hidden">grid 2</div>
    </>
  );
}

export default SignatureDish;
