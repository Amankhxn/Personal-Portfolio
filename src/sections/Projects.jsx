import React from 'react'

import ProjectCard from '../components/ProjectCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const projects = [
  {
    title: "Shopify Store",
    description: "Developed a full-featured clothing e-commerce platform with Firebase authentication and interactive shopping experience",
    image: '/projects/Shopify.png',
    tags: ["React", "Tailwind", "FireBase"],
    link: 'https://ecommerce-shopify-seven.vercel.app/',
    github: 'https://github.com/Amankhxn/Ecommerce-Shopify.git'
  },
  {
    title: "Pokémon explorer",
    description: "Developed a Pokémon explorer application featuring dynamic search and live data from PokéAPI. ",
    image: '/projects/project2.png',
    tags: ["React", "Tailwind", "axios"],
    link: 'https://pokemon-explorer-xi-ashy.vercel.app/',
    github: 'https://github.com/Amankhxn/Pokemon-Explorer.git'
  },
  {
    title: "World AtLast",
    description: "Built a World Atlas web application that allows users to explore countries with population, currency, and capital details using dynamic routing, search, and filtering.",
    image: '/projects/project3.png',
    tags: ["React", "Tailwind", "React-router-dom", "Dynamic routing"],
    link: 'https://world-atlast-five.vercel.app/',
    github: 'https://github.com/Amankhxn/World-Atlast.git'
  },
  {
    title: "Shopify Store",
    description: "A clothing E-commerse Web application with firebase authentication",
    image: '/projects/project1.png',
    tags: ["React", "Tailwind", "FireBase"],
    link: '#',
    github: '#'
  },

  // {
  //   title: "Shopify Store",
  //   description: "A clothing E-commerse Web application with firebase authentication",
  //   image: '/projects/project1.png',
  //   tags: ["React", "Tailwind", "FireBase"],
  //   link: '#',
  //   github: '#'
  // },
  // {
  //   title: "Shopify Store",
  //   description: "A clothing E-commerse Web application with firebase authentication",
  //   image: '/projects/project1.png',
  //   tags: ["React", "Tailwind", "FireBase"],
  //   link: '#',
  //   github: '#'
  // },

]


const Projects = () => {

  useGSAP(() => {
    gsap.fromTo(".projectArea .projectCard",
      { opacity: 0, scale: 0.5, ease: "back.out(1.7)", },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".projectArea",
          start: "top 70%",
          toggleActions: "play none none none",
        }
      },
      ">"
    );
  }, [])

  return (
    <section id='project' className='pt-28'>
      <div className="features  text-center spaceMaker flex flex-col gap-4">
        <p className='text-primary font-semibold '>FEATURED WORK</p>

        <h1 className='text-5xl'><span className='text-primary font-bold'>Project that </span> <span className='text-foreground italic'> make an impact</span></h1>
        <p className='text-muted-foreground text-lg '>A selection of my recent work, from complex web applicatio to innovative tools that solve real-world problems.</p>
      </div>

      <div className="projectArea mt-10 spaceMaker grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-start ">

        {projects.map((card, idx) => <ProjectCard key={idx} card={card} />)}


      </div>
    </section>
  )
}

export default Projects
