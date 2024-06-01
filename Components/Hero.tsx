import {
  ArrowDownTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Particle from "./Particle";
import TextEffect from "./TextEffect";

interface Props {}

const Hero = ({}: Props) => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;m <span className="text-blue-400">NATHAN!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Computer Engineering student with a solid academic base and valuable
            international experience as a software developer in Germany,
            I&apos;m always looking for new opportunities and experiences!
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-3">
              <p className="text-[20px] font-semibold text-white">
                Get in touch!
              </p>
              <ChatBubbleOvalLeftEllipsisIcon className="w-[2.5rem] h-[2.5rem] hover:text-blue-400 transition-all duration-200 text-[#55e6a5] rounded-md" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px] ">
          <Image
            src="/images/me/hiVrNoBg.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
