import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer({homeRef,aboutRef,projectRef}) {
  

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div className="border-b border-neutral-900 bg-[#9D98E6] text-black w-full py-4 h-64 ">
      <div className="flex flex-col items-center gap-8 mt-14">
        <div className="flex gap-4 font-medium">
          <h3 className="cursor-pointer" onClick={() => scrollToSection(homeRef)}>Home</h3>
          <h3 className="cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</h3>
          <h3 className="cursor-pointer" onClick={() => scrollToSection(projectRef)}>Projects</h3>
        </div>

        <div className="flex gap-4 text-2xl ">
          <a
            className="cursor-pointer"
            href="https://github.com/arjungurjar01"
            target="_black"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/arjungurjar/"
            target="_black"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </div>

        <div>
          <p className="text-sm font-light">© All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
