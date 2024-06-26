import Image from "next/image";

function SignatureItems({ foodItem }) {
  const { src, name } = foodItem;
  return (
    <div className="grid ">
      <div className=" bg-primary-400/30 h-[220px] sm:h-[120px] relative rounded-lg">
        <div>
          <Image
            src={src}
            fill
            placeholder="blur"
            quality={100}
            alt="nasi liwet"
            className="object-cover"
          />
        </div>
      </div>
      <div className="font-extrabold">{name}</div>
    </div>
  );
}

export default SignatureItems;
