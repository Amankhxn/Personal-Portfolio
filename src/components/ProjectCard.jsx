import React from 'react'

import { FiArrowUpRight } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";

const ProjectCard = ({ card }) => {

    const { title, description, image, tags, link, github } = card;
    return (
        <div className="projectCard  cursor-pointer rounded-2xl glass  ">
            <div className='overflow-hidden h-65  '>

                <img src={image} className=' w-full h-70 object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110' alt="project" />
            </div>

            <div className="projectDesc px-6 py-8 grid gap-2">
                <h1 className='text-2xl font-semibold text-primary'>{title}</h1>
                <p className='text-muted-foreground'>{description}</p>

                <div className='flex justify-between items-center flex-wrap gap-4'>


                    <div className="tags flex gap-4">

                        {
                            tags.map((tag, index) => <div key={index} className="tag bg-muted px-2 py-1 rounded-full cursor-pointer text-sm">
                                <p>{tag} </p>
                            </div>)
                        }

                    </div>

                    <div className="links flex gap-4 ">
                        <a href={link} target='_blank'> <FiArrowUpRight size={28} className='cursor-pointer hover:bg-muted transition-all duration-300   rounded-full' /> </a>
                        <a href={github} target='_blank'> <GrGithub size={28} className='cursor-pointer  hover:bg-muted transition-all duration-300   rounded-full' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
