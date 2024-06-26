import Image from "next/image";
import liwet from "@/public/liwet.png";
import MainCompOne from "./_components/MainCompOne";
import MainCompTwo from "./_components/MainCompTwo";
import SignatureDish from "./_components/SignatureDish";

function Page() {
  return (
    <div className="text-primary-900 grid sm:grid-cols-2 gap-3 items-center">
      <MainCompOne />
      <MainCompTwo />
      <SignatureDish />
    </div>
  );
}

export default Page;
