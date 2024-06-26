import Image from "next/image";

function MenuItem({ foodItem }) {
  const { src, name } = foodItem;
  return (
    <div className=" h-[400px] rounded-3xl bg-primary-500/30 shadow grid place-items-center">
      <div className="relative flex justify-center h-[160px] w-[160px]">
        <Image
          src={src}
          placeholder="blur"
          layout="fill"
          alt={name}
          className="object-contain"
        />
      </div>
      <div className="bg-white/30 mx-2 rounded-lg px-1 shadow-md">
        <p>{name}</p>
        <p>ingredients:</p>
        <p>rice, chilie, sugar, coconut milk</p>
        <p>Price: 15$</p>
      </div>
      <button className="bg-secondary-400 mx-auto my-2 w-[7rem] rounded-lg h-[3rem]">
        Order Now
      </button>
    </div>
  );
}

export default MenuItem;
