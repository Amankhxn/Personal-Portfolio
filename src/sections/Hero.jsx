import React from 'react'
import { BsDot } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import Button from '../components/Button';
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


// max-sm:h-250 md:h-280 lg:h-screen

const Hero = () => {
  return (
    <div className='relative  min-h-svh flex  items-center overflow-hidden '>

      <div className='absolute inset-0 '>
        <img src="/hero-bg.jpg" alt="heroImage" className='w-full h-full object-cover opacity-40' />
      </div>


      <div className='absolute inset-0 pointer-events-none '>
        {[...Array(45)].map((_, i) => <div key={i} className=' absolute h-1.5 w-1.5 rounded-full  opacity-60' style={{ background: '#20B2A6', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite` }} />)}
      </div>

      <div className='heroSection relative z-20  spaceMaker py-18  flex flex-col justify-between gap-12 items-center md:flex-row '>

        <div className="leftHero  flex flex-col gap-4  max-w-full md:max-w-[50%] ">
          <p className='text-primary text-xs w-65 flex gap-1 md:w-75 justify-center items-center glass  md:text-sm px-3 py-1 rounded-full  animate-fade-in animation-delay-100 animate-pulse '><BsDot size={28} className='animate-pulse' /> Software Engineer - React Specialist</p>

          <div>
            <h1 className='font-bold text-5xl md:text-5xl lg:text-6xl animate-fade-in animation-delay-400 '>Creafting <span className='text-primary glow-text'>digital</span>  experience with  <span className='italic font-medium'>precision</span></h1>
          </div>

          <p className='text-sm lg:text-md text-muted-foreground max-w-lg animate-fade-in animation-delay-500'>I’m a passionate Frontend Developer skilled in HTML, CSS, Tailwind, GSAP, and React.js, focused on building modern, responsive, high-performance user interfaces with engaging experiences.</p>

          <div className="btns flex gap-4 animate-fade-in animation-delay-600">
            <a href="#contact">
              <Button classname='w-36 text-xs md:w-40  lg:w-50 md:text-sm shadow-lg shadow-primary' >
                Contact me  <GoArrowRight size={28} className='w-5 h-5' />
              </Button>
            </a>

            <Button classname='w-36 text-xs  md:w-40 lg:w-50 md:text-sm bg-surface shadow-md shadow-foreground transition-all duration-300'> <FaDownload /> Download CV</Button>
          </div>

          <div className='flex  py-2 px-4 gap-4 animate-fade-in animation-delay-800 '>
            <p className='text-muted-foreground'>Follow Me : </p>
            <div className='flex gap-4 '>
              <a href="https://github.com/Amankhxn" target='_blank'><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/aman-khan-160b35263/" target='_blank'> <FaLinkedin size={24} /></a> 
            </div>
          </div>


        </div>


        <div className="rightHero lg:w-[50%] flex justify-center items-center ">

          <div className="profile relative">

            <img src="/profile2.jpeg" className='h-112.5 max-sm:h-90  md:h-85 lg:h-100 profileImg  animate-fade-in rounded-3xl animation-delay-800 shadow-lg shadow-primary/25' alt="Profile" />

            <div className='absolute top-0 left-0 -translate-y-1/2 text-sm max-sm:text-sm  -translate-x-1/3 glass rounded-2xl px-2 py-1'>
              <p>1+</p>
              <p>Year Exp</p>
            </div>

            <div className='absolute bottom-0 right-0 text-sm translate-y-1/2   translate-x-1/6 max-sm:translate-x-1/6 glass rounded-2xl px-2 py-1'>
              <p className=' flex justify-center max-sm:gap-1 max-sm:text-sm  items-center gap-2 animate-pulse  '> <BsDot className='text-green-500 ' size={34} /> Available for work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
