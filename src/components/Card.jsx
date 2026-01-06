import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'




const Card = ({ icon, title, desc }) => {

  


    return (
        <div className="card hover:border-primary/30  transition-all duration-300 border-2 px-4 py-3 flex flex-col gap-2 glass rounded-2xl">
            <div className='bg-muted rounded-xl p-2 w-11 flex justify-center items-center'> {icon} </div>
            <p className='text-lg font-semibold'>{title} </p>
            <p className='text-muted-foreground text-sm '>{desc}</p>
        </div>
    )
}

export default Card
