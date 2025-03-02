import React from "react";
import profile from "../assets/arjunbg1.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:ml-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Arjun Gurjar
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
            text-4xl tracking-tight text-transparent "
            >
              Frontend Engineer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        {/* photo */}
        <div className="w-full lg:w-1/2  lg:p-4 ">
          <div className="flex justify-center lg:w-full ml-10  ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className=" bg-[#9D98E6] rounded-lg overflow-hidden m-0 p-0"
            >
              <img
                className="w-full p-6 shadow-[inset_1px_1px_33px_10px_rgba(0.2,0.2,0.3,0.51),0px_15px_2px_0px_rgba(0,0,0,0.41)] object-cover block "
                src={profile}
                alt="profile"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
