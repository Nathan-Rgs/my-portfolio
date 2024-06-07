import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link href="#home" className="nav-link-mobile" onClick={closeNav}>
          Home
        </Link>
        <Link href="#about" className="nav-link-mobile" onClick={closeNav}>
          About
        </Link>
        <Link href="#services" className="nav-link-mobile" onClick={closeNav}>
          Services
        </Link>
        <Link href="#skills" className="nav-link-mobile" onClick={closeNav}>
          Skills
        </Link>
        <Link href="#experience" className="nav-link-mobile" onClick={closeNav}>
          Experience
        </Link>
        <Link href="#projects" className="nav-link-mobile" onClick={closeNav}>
          Projects
        </Link>
        <Link href="#education" className="nav-link-mobile" onClick={closeNav}>
          Education
        </Link>
        <Link href="#contact" className="nav-link-mobile" onClick={closeNav}>
          Contact
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] text-blue-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
