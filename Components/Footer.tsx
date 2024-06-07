import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div
          className="flex items-center space-x-6 hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/sorocaba/data=!4m2!3m1!1s0x94c58abceb48f503:0x947f99ac59d0781b?sa=X&ved=1t:155783&ictx=111",
              "_blank"
            )
          }
        >
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Sorocaba, Brazil
            </p>
          </div>
        </div>
        <div
          className="flex items-center space-x-6 hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => window.open("https://wa.me/5515997411076", "_blank")}
        >
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Phone
            </h1>
            <p className="text-[17px] w-full text-white opacity-60">
              +55 (15) 99741-1076
            </p>
          </div>
        </div>
        <div
          className="flex items-center space-x-6 hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => (window.location.href = "mailto:nathan.rgs@gmail.com")}
        >
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Mail Me
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              nathan.rgs@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          Nathan Roberto | All rights Reserved
        </div>
        <div className="flex items-centers space-x-10">
          <p className="text-[18px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[18px] text-white opacity-20">Provacy Policy</p>
          <p className="text-[18px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
