import SignatureItems from "./SignatureItems";
import { foodItems } from "@/app/data/foodItems";

function SignatureDish() {
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
