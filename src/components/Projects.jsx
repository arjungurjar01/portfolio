import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:flex lg:flex-col lg:items-center">
      <h2 className="mt-10 mb-2 text-center text-4xl">Projects</h2>
      <div className="w-20 h-1 bg-[#9D98E6] mx-auto mb-20 lg:mb-10 "></div>
      <div className="flex flex-col sm: md:items-center">
        {PROJECTS.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row md:justify-center lg:justify-center lg:gap-8 sm:items-center md:w-[80%]  lg:w-5xl mb-8   p-4  border border-gray-600 rounded-md"
          >
            <div className="w-full md:w-1/2 lg:w-1/2 md:ml-0 sm:ml-12 mb-4 lg:mb-0">
              <img className="rounded-md " src={item.image} alt={item.title} />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {item.title}{" "}
                <span className="bg-[#9D98E6] text-black rounded-md p-1 ml-2 text-sm font-medium">
                  <a
                    href={item.link}
                    target="_blank"
                    rel='rel="noopener noreferrer"'
                  >
                    Link
                  </a>
                </span>
                <span className="bg-[#9D98E6] text-black rounded-md p-1 ml-2 text-sm font-medium">
                <a
                    href={item.code}
                    target="_blank"
                    rel='rel="noopener noreferrer"'
                  >
                    Code
                  </a>
                </span>
              </h3>
              <p className="mb-2 text-neutral-400">{item.description}</p>
              <p className="flex flex-wrap ">
                {item.technologies.map((technology, index) => (
                  <span
                    className=" mr-2 mt-2 bg-neutral-900 text-gray-400 text-sm font-medium rounded-md p-1"
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
