import {
  ArrowDownTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/16/solid"
import Image from "next/image"
import Particle from "./Particle"
import TextEffect from "./TextEffect"

const Hero = () => {
  const handleContactButtonClick = () => {
    window.open("https://wa.me/5515997411076", "_blank")
  }

  const handleCVButtonClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1czCuP7hg740EeK8e_DSE12Xe61DFhIX5/view?usp=sharing"
  }

  return (
    <div
      id="home"
      className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[5vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;m <span className="text-blue-400">NATHAN!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Detail-oriented Full Stack Developer with a solid background in
            Computer Engineering and international experience as a software
            developer in Germany. Skilled in building scalable web applications
            using JavaScript, TypeScript, Node.js, and modern front-end
            frameworks. Seeking to contribute to a product-driven team focused
            on innovation, quality, and real-world impact.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              id="download_cv_hero"
              onClick={handleCVButtonClick}
              className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              id="get_in_touch_hero"
              className="flex items-center space-x-3"
              onClick={handleContactButtonClick}
            >
              <p className="text-[20px] font-semibold text-white hover:text-blue-400">
                Get in touch!
              </p>
              <ChatBubbleOvalLeftEllipsisIcon className="w-[2.5rem] h-[2.5rem] hover:text-blue-400 transition-all duration-200 text-[#55e6a5] rounded-md" />
            </button>
          </div>
        </div>
        <div className="w-[500px] ml-20 hidden relative lg:flex items-center rounded-full h-[500px] ">
          <Image
            src="/images/me/professionalPhoto.jpeg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
