import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const navlinks = [
        { href: "#about", label: "About" },
        { href: "#project", label: "Projects" },
        { href: '#experience', label: 'Experience' },
        { href: '#testimonial', label: 'Testimonial' },
    ]
    return (
        <header className={`fixed top-0 left-0 ${isScrolled ? "glass-strong" : "bg-transparent"} transition-all duration-200  flex flex-col justify-center items-center z-30   w-full `}>

            <nav className='navbar  flex justify-between items-center px-2 py-4 w-[85%]'>

                <a href="#"><img src='/logo.png' alt="logo" className='h-15' /></a>

                <div className="navlinks hidden md:flex">
                    <ul className='flex px-1 py-1 text-sm glass rounded-full gap-4'>
                        {
                            navlinks.map((link, index) => <a href={link.href} key={index}><li  className='px-3 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-surface cursor-pointer rounded-full' onClick={() => setIsMobile(false)}> {link.label} </li> </a>)
                        }
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <a href="#contact">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>

                <button className='md:hidden p-2 text-foreground cursor-pointer ' onClick={() => setIsMobile((prev) => !prev)}>
                    {isMobile ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}

                </button>





            </nav>

            {
                isMobile && <div className="md:hidden w-full glass-strong animate-fade-in py-4 px-6 z-30">
                    <ul className='flex flex-col px-1 py-4 text-md  rounded gap-4 '>
                        {
                            navlinks.map((link, index) =><a href={link.href} key={index}> <li  className='px-3 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-surface cursor-pointer rounded-full' onClick={() => setIsMobile(false)}> {link.label} </li> </a>)
                        }
                    </ul>

                    <div>
                        <a href="#contact" onClick={() => setIsMobile(false)}>
                            <Button size="sm">Contact Me</Button>
                        </a>
                    </div>
                </div>
            }



        </header>


    )
}

export default Navbar
