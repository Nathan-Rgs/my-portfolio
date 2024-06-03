import Image from "next/image";

interface Props {
  image: string;
  name: string;
  role: string;
  location_date: string;
  description: string;
}

const Companies = ({
  image,
  name,
  role,
  location_date,
  description,
}: Props) => {
  return (
    <div className="flex flex-col text-center justify-center bg-gray-700 h-full w-full py-10 rounded-lg">
      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        objectFit="contain"
        className="mx-auto rounded-lg"
      />
      <h1 className="text-[25px] text-slate-300 mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-slate-300 opacity-75  ">{role}</p>
      <p className="text-[16px] text-slate-300 opacity-75 mb-[1.4rem]">
        {location_date}
      </p>
      <p className="text-[14px] text-slate-300 opacity-50 mb-[1.4rem] w-[90%] md:w-[50%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Companies;
