import { useRef, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

import './App.css'

function App() {
  const homeRef = useRef(null);
const aboutRef = useRef(null);
const projectRef = useRef(null);



  return (
    <div className='overflow-x-hidden text-neutral-300 antialised slec selection:bg-cyan-300 selection:text-cyan-900 '> 
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      
      <div className='container mx-auto px-8 lg:px-44'>
      <Toaster position="top-center" reverseOrder={false} />
      <div ref={homeRef} >
     <NavBar/>
     <Hero/>
     </div>

     <div ref={aboutRef} className='my-10'>
      <About/>
     </div>

     <div>
      <Technologies/>
     </div>

     <div ref={projectRef}>
      <Projects/>
     </div>
      <Contact/>
      </div>
      <Footer homeRef={homeRef} projectRef={projectRef} aboutRef={aboutRef} />
      
    </div>
  )
}

export default App
