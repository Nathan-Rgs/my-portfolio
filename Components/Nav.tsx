import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB<span className="text-blue-300">DEV</span>
        </h1>
        <Link href="#home" className="nav-link">
          Home
        </Link>
        <Link href="#about" className="nav-link">
          About
        </Link>
        <Link href="#services" className="nav-link">
          Services
        </Link>
        <Link href="#skills" className="nav-link">
          Skills
        </Link>
        <Link href="#experience" className="nav-link">
          Experience
        </Link>
        <Link href="#projects" className="nav-link">
          Projects
        </Link>
        <Link href="#education" className="nav-link">
          Education
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
