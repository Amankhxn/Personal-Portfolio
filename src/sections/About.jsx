import React, { useEffect, useLayoutEffect } from 'react'
import Card from '../components/Card';
import { FaCode } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';


const cards = [
  {
    icon: <FaCode size={26} className="text-primary" />,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code that remains readable, reliable, and easy to extend over time."
  },
  {
    icon: <IoRocket size={26} className="text-primary" />,
    title: "High Performance",
    desc: "Building fast, optimized applications with smooth user experience and efficient resource usage."
  },
  {
    icon: <FaUserGroup size={26} className="text-primary" />,
    title: "Collaboration",
    desc: "Working closely with designers, developers, and stakeholders to deliver high-quality products together."
  },
  {
    icon: <FaLightbulb size={26} className="text-primary" />,
    title: "Problem Solving",
    desc: "Turning complex challenges into simple, elegant solutions through thoughtful engineering."
  }
];


const About = () => {

  // useGSAP(() => {
  //   gsap.from('.leftAbout', {
  //     y: 100,
  //     opacity: 0,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: ".leftAbout",
  //       start: "top 50%",
  //       end: "bottom 50%",
  //       markers: true,

  //     }
  //   })
  // }, [])


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".leftAbout",
        start: "top 95%",
      }
    });

    tl.from(".leftAbout > *", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15
    });

    tl.fromTo(".cardArea .card",
      { opacity: 0, scale: 0.5, ease: "back.out(1.7)", },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.in",
        stagger: 0.2
      },
      ">"
    );

  }, []);

  // useGSAP(() => {
  //   gsap.from('.cardArea > .card', {
  //     scale: 0.6,
  //     opacity: 0,
  //     duration: 0.5,
  //     ease: "back.out(1.7)",
  //     stagger: 0.6
  //   }
  //   )
  // }, [])


  return (
    <section id='about' className='spaceMaker pt-28  grid grid-cols-1  lg:grid-cols-2 gap-8'>
      <div className="leftAbout flex flex-col gap-4">

        <p className='text-primary'>ABOUT ME</p>

        <p>
          <span className='text-primary font-semibold text-4xl lg:text-5xl glow-text '>Building the Future, </span>
          <span className='text-4xl lg:text-5xl text-foreground italic '>one component at a time.  </span>
        </p>

        <div className="info text-muted-foreground text-md flex flex-col gap-3">
          <p>
            Hi, I’m Aman — a frontend developer with a background in Computer Engineering from SKN Sinhgad Institute of Technology and Science, Pune University (CGPA: 7.9).
          </p>

          <p>
            I began my journey as a Web Developer Intern at TechnoHacks, working with HTML, CSS, and JavaScript, and later completed a one-year internship as a Junior Frontend Developer using React, Tailwind CSS, Bootstrap, GSAP, and basic Firebase.
          </p>

          <p>
            I enjoy building modern, user-friendly web applications with a strong focus on clean code, performance, and great user experience.
          </p>
        </div>

        <div className="highlight glass-strong px-4 py-2 rounded-2xl border-primary/50">
          <p>"My mission is to create digital Experience that are not just functional, but truly delighful - products that users love to use and developers love to maintain."</p>
        </div>
      </div>

      <div className="rightAbout  flex justify-center items-center">
        <div className="cardArea grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-2 gap-4 ">

          {cards.map((details, idx) => <Card key={idx} icon={details.icon}
            title={details.title}
            desc={details.desc}
          />)}

        </div>
      </div>
    </section>
  )
}

export default About
