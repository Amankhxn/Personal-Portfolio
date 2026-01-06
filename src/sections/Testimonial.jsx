import React, { useState } from 'react'
import { MdOutlineFormatQuote } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {

  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length
    )
  }


  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }


  const testimonials = [
  {
    quote:
      "Aman is highly dedicated and detail-oriented. During his internship, he consistently delivered clean, responsive UI components and showed strong ownership of his tasks.",
    author: "Rohit Mehta",
    role: "Frontend Lead, Crissfood",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Working with Aman was smooth and productive. He quickly understood requirements and transformed designs into functional, user-friendly interfaces.",
    author: "Neha Sharma",
    role: "Project Manager, TechnoHacks",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Aman has a strong foundation in React and frontend development. His problem-solving mindset and consistency in delivery make him a dependable developer.",
    author: "Arjun Verma",
    role: "Senior Developer, Internship Mentor",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Aman’s ability to balance clean UI with solid logic is impressive. He communicates clearly, adapts quickly, and always pushes for high-quality results.",
    author: "Priya Nair",
    role: "Product Designer, Freelance Collaborator",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
  },
];


  return (
    <section id='testimonial' className='spaceMaker pt-28 flex justify-center items-center flex-col gap-10 '>
      <div className="content grid gap-3 text-center ">
        <p className='text-primary font-semibold'>WHAT PEOPLE SAY </p>
        <p><span className='text-primary font-semibold text-4xl lg:text-5xl glow-text'>Kind words form </span> <span className='text-4xl lg:text-5xl text-foreground italic '>Amazing people.</span></p>
      </div>


      <div className='max-w-4xl  '>
        <div className='relative '>

          <div className='glass p-6 rounded-3xl glow-border grid '>

            <div className='absolute top-0 -translate-y-1/2 w-12 h-12 flex justify-center items-center bg-primary rounded-full p-1'>
              <MdOutlineFormatQuote size={35} className='text-foreground' />
            </div>

            <div className='grid gap-4'>

              <blockquote className='text-md md:text-xl font-medium leading-relaxed pt-4'>"{testimonials[activeIdx].quote}"</blockquote>

              <div className='flex items-center gap-4'>

                <div>
                  <img src={testimonials[activeIdx].avatar} alt={testimonials[activeIdx].author} className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/25' />
                </div>

                <div className='flex flex-col'>
                  <div className='font-semibold'>{testimonials[activeIdx].author}</div>
                  <div className='text-muted-foreground'>{testimonials[activeIdx].role}</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* testimnial navigation */}

        <div className='flex justify-center items-center gap-4  mt-8 '>
          <button className='p-2 glass rounded-full hover:bg-primary/10 hover:text-primary/90 transition-all duration-200 ' onClick={previous}><FaChevronLeft /></button>


          <div className='flex gap-2'>
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setActiveIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
            ))}
          </div>

          <button className='p-2 glass rounded-full hover:bg-primary/10 hover:text-primary/90 transition duration-200 ' onClick={next}><FaChevronRight /></button>

        </div>

      </div>
    </section>
  )
}

export default Testimonial
