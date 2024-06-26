import Image from "next/image";
import food1 from "@/public/food1.png";
import food2 from "@/public/food2.png";
import food3 from "@/public/food3.png";
import SignatureItems from "./SignatureItems";

function SignatureDish() {
  const foodItems = [
    { src: food1, name: "lalapan" },
    { src: food2, name: "sop buntut" },
    { src: food3, name: "Nasi goreng" },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-6 my-3 mx-3">
      <div className="font-bold text-4xl text-center sm:text-start">
        Our main dish
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {foodItems.map((foodItem, index) => (
          <SignatureItems foodItem={foodItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SignatureDish;
