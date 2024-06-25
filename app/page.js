import Image from "next/image";
import liwet from "@/public/liwet.png";
import SignatureDish from "./_components/SignatureDish";

function Page() {
  return (
    <div className="bg-yellow-400 text-primary-900 grid sm:grid-cols-2 gap-3 items-center">
      <div className=" bg-purple-400 px-3 py-2 flex flex-col gap-3 ">
        <span className="text-5xl sm:text-7xl font-extrabold">Order Your</span>
        <span className="text-3xl sm:text-5xl font-light">Favorite Foods</span>
        <span className="text-sm sm:font-normal font-semibold sm:text-2xl ">
          Experience the authentic flavors of Indonesia with our fresh and
          delectable cuisine
        </span>
      </div>
      <div className="bg-green-400 sm:h-[400px] h-[200px] grid items-center justify-center relative">
        <div className="sm:absolute sm:w-[150%] sm:h-[150%] ">
          <Image
            src={liwet}
            fill
            placeholder="blur"
            quality={100}
            alt="nasi liwet"
            className="object-scale-down sm:object-contain sm:translate-x-[-120px]"
          />
        </div>
      </div>
      <SignatureDish />
    </div>
  );
}

export default Page;
