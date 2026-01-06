

const experiences = [
  // {
  //   period: "2024 – Present",
  //   role: "Frontend Developer",
  //   company: "Personal Projects / Freelance",
  //   description:
  //     "Building modern, responsive web applications using React.js and Tailwind CSS. Focused on UI performance, component reusability, and clean code practices. Implemented authentication, cart logic, and API integration for multiple projects.",
  //   technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Firebase"],
  //   current: true,
  // },
  {
    period: "2024 - 2025",
    role: "Frontend Developer Intern",
    company: "Crissfood",
    description:
      "Worked on real-world frontend features including responsive layouts, form handling, and API consumption. Collaborated with backend team to integrate dynamic data and improve UI/UX across the application.",
    technologies: ["React", "JavaScript", "CSS", "Bootstrap", "Git"],
    current: false,
  },
  {
    period: "2023",
    role: "Web Developer Intern",
    company: "TechnoHacks",
    description:
      "Developed multiple web interfaces from design to deployment. Gained hands-on experience with component-based development, debugging, and performance optimization.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "2020 – 2024",
    role: "Computer Engineering Student",
    company: "Bachelor of Engineering",
    description:
      "Completed academic projects focused on web development and software engineering principles. Built multiple frontend applications including an e-commerce platform and management tools.",
    technologies: ["Java", "C++", "JavaScript", "React"],
    current: false,
  }
];



const Experience = () => {



  return (
    <section id='experience' className='spaceMaker pt-28 grid gap-10'>

      <div className="content grid gap-3 text-center">
        <p className='text-primary font-semibold'>CAREER JOURNEY</p>
        <p><span className='text-primary font-semibold text-4xl lg:text-5xl glow-text'>Experiences that</span> <span className='text-4xl lg:text-5xl text-foreground italic '>speaks Volume.</span></p>
        <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laboriosam.</p>
      </div>

      <div className="relative  exp-area" >
        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2" />

        <div className="space-y-12 ">
          {experiences.map((exp, idx) => (

            <div key={idx} className='exp-card relative grid md:grid-cols-2 gap-8 animate-fade-in'>
              <div className='absolute left-0  -translate-x-1/3  md:left-1/2   w-3 h-3 bg-primary rounded-full ring-4 ring-background '></div>

              <div className={`pl-8  md:pl-0  ${idx % 2 === 0 ? "md:pr-16 md:text-right " : "md:col-start-2 md:pl-16"} `}>
                <div className='glass p-6 rounded-2xl border-primary/30 hover:border-primary/60 transition duration-500'>
                  <span className='text-sm text-primary font-medium'>{exp.period}</span>
                  <h3 className='text-xl font-semibold mt-2 '>{exp.role}</h3>
                  <p className='text-muted-foreground '>{exp.company}</p>
                  <p className='text-sm text-muted-foreground mt-4'>{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`} >
                    {exp.technologies.map((tech, techIndx) => (
                      <span key={techIndx} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          )
          )}
        </div>


      </div>

    </section>
  )
}

export default Experience
