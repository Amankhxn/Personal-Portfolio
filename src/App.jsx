import gsap from "gsap"
import Navbar from "./Layout/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Testimonial from "./sections/Testimonial"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden ">
        <Navbar />
        <main className="grid gap-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonial />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
