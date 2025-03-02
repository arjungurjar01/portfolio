import React from 'react'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si' ;
import { motion } from 'motion/react'
import { animate } from 'motion';

const iconVariants =(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
  
function Technologies() {
  return (
    <section id="skills" className='border-b border-neutral-900 pb-4'>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-[#9D98E6] mx-auto mb-20 lg:mb-10 "></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed expertise in various frontend technologies and tools.
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
       
        <div className='flex flex-wrap items-center justify-center mt-8 gap-4'>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Line className='text-5xl text-amber-600'/>
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiCss3Line className='text-5xl rounded-md bg-blue-500'/>
            </motion.div>

            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptLine className='text-5xl text-yellow-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssLine className='text-5xl text-cyan-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-5xl text-green-500'/>
            </motion.div>
           
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-5xl text-green-500'/>
            </motion.div>
        </div>     
        </div>   

       
    </section>
  )
}

export default Technologies