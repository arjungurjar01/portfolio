import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className=" px-4 mb-12 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center text-bold text-2xl">
        Portfolio
      </div>
      <div className="flex gap-4 items-center justify-center m-8 text-sm font-normal">
        <a
          href="/arjun_resume.pdf"
          download='Arjun_Gurjar.pdf'
        >
          <button className="px-3 py-1 bg-[#9D98E6] text-black rounded-md hover:bg-[#837ec9] cursor-pointer transition-shadow">
            Download CV
          </button>
        </a>
        <a
          className="cursor-pointer text-2xl"
          href="https://github.com/arjungurjar01"
          target="_black"
          rel="noopener noreferrer"

        >
          <FaGithub />
        </a>
        <a
          className="cursor-pointer text-2xl"
          href="https://www.linkedin.com/in/arjungurjar/"
          target="_black"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
