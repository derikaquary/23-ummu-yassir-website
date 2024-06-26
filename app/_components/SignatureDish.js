import Image from "next/image";
import food1 from "@/public/food1.png";
import food2 from "@/public/food2.png";
import food3 from "@/public/food3.png";

function SignatureDish() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-6 my-3 mx-3">
      <div className="font-bold text-4xl text-center sm:text-start">
        Our main dish
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="bg-red-400 h-[100px]"></div>
        <div className="bg-blue-400 h-[100px]"></div>
        <div className="bg-green-400 h-[100px]"></div>
      </div>
    </div>
  );
}

export default SignatureDish;

/* <div className="grid gap-4 sm:grid-cols-3">
          <div className="relative min-h-[100px]">
            <Image
              src={food1}
              placeholder="blur"
              fill
              quality={100}
              alt="nasi liwet"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[100px]">
            <Image
              src={food2}
              fill
              placeholder="blur"
              quality={100}
              alt="nasi liwet"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[100px]">
            <Image
              src={food3}
              fill
              placeholder="blur"
              quality={100}
              alt="nasi liwet"
              className="object-cover"
            />
          </div>
        </div> */
