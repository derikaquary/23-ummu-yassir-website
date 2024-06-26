import { foodItems } from "@/app/data/foodItems";
import MenuItem from "../_components/MenuItem";

function Page() {
  return (
    <div className="grid sm:grid-cols-4 px-4 py-4 gap-7">
      {foodItems.map((item, index) => (
        <MenuItem foodItem={item} key={index} />
      ))}
    </div>
  );
}

export default Page;
