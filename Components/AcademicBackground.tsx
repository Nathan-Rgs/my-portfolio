import { AcademicCapIcon, ClockIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const AcademicProfile = () => {
  return (
    <div
      id="education"
      className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]"
    >
      <h1 className="heading">
        Academic <span className="text-blue-400">background</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div
          data-aos="fade-up"
          className="hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => window.open("https://facens.br", "_blank")}
        >
          <div className="w-full relative h-[20rem] flex justify-center items-center">
            <Image
              src="/images/academic/facens.png"
              alt="facens"
              width={250}
              height={250}
              className="object-cover w-full"
            />
          </div>
          <div className="w-11/12 text-center mx-auto bg-[#09101a] relative p-8 mt-[-4rem]">
            <div className="w-fit px-8 py-4 bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-lg mx-auto">
              Facens
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3 min-w-32">
                <AcademicCapIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Computer Engineering</p>
              </div>
              <div className="flex items-center space-x-3 min-w-32">
                <ClockIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">01/01/2020, Currently</p>
              </div>
            </div>
            {/* <p className="text-white">Description</p> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => window.open("https://www.sp.senai.br", "_blank")}
        >
          <div className="w-full relative h-[20rem] flex justify-center items-center">
            <Image
              src="/images/academic/senai.png"
              alt="senai"
              width={250}
              height={250}
              className="object-cover w-full"
            />
          </div>
          <div className="w-11/12 text-center mx-auto bg-[#09101a] relative p-8 mt-[-4rem]">
            <div className="w-fit px-8 py-4 bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-lg mx-auto">
              Senai
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3 min-w-32">
                <AcademicCapIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Mechatronic Technician</p>
              </div>
              <div className="flex items-center space-x-3 min-w-32">
                <ClockIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">01/01/2018, 31/12/2019</p>
              </div>
            </div>
            {/* <p className="text-white">Description</p> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => window.open("shttps://www.wizard.com.br", "_blank")}
        >
          <div className="w-full relative h-[20rem] flex justify-center items-center">
            <Image
              src="/images/academic/wizard.png"
              alt="sesi"
              width={250}
              height={250}
              className="object-cover w-full"
            />
          </div>
          <div className="w-11/12 text-center mx-auto bg-[#09101a] relative p-8 mt-[-4rem]">
            <div className="w-fit px-8 py-4 bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-lg mx-auto">
              Wizard
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3 min-w-32">
                <AcademicCapIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">English</p>
              </div>
              <div className="flex items-center space-x-3 min-w-32">
                <ClockIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">6 years</p>
              </div>
            </div>
            {/* <p className="text-white">Description</p> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => window.open("https://www.sesisp.org.br", "_blank")}
        >
          <div className="w-full relative h-[20rem] flex justify-center items-center">
            <Image
              src="/images/academic/sesi.png"
              alt="sesi"
              width={250}
              height={250}
              className="object-cover w-full"
            />
          </div>
          <div className="w-11/12 text-center mx-auto bg-[#09101a] relative p-8 mt-[-4rem]">
            <div className="w-fit px-8 py-4 bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-lg mx-auto">
              Sesi
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3 min-w-32">
                <AcademicCapIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">High School</p>
              </div>
              <div className="flex items-center space-x-3 min-w-32">
                <ClockIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">01/01/2017, 31/12/2019</p>
              </div>
            </div>
            {/* <p className="text-white">Description</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProfile;
