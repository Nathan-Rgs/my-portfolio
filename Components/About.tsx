import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const About = () => {
  const handleCVButtonClick = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=10JEztLoneHLFCCIErFHcLddg7jjngdzK";
  };

  return (
    <div className="bg-[#121121] pb-[3rem] pt-[2rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            About me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] mb:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-blue-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Learning to write programs stretches your mind, and helps you
              think better, creates a way of thinking about things that I think
              is helpful in all domains
              <span className="text-slate-60000 font-bold"> - Bill Gates</span>
            </p>
          </div>
          <button
            onClick={handleCVButtonClick}
            className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-full h-auto relative">
          <Image
            src="/images/me/armsCrossed.png"
            alt="user"
            layout="responsive"
            width={500}
            height={500}
            objectFit="contain"
            className="relative z-[11] rounded-md"
          />
          <div className="absolute w-full h-full z-[10] bg-[#60a5fa] top-[-2rem] right-[-2rem] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
