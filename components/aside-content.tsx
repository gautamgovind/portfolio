
"use client"

import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';

const NavLinks = [
    { href: "#introduction", label: "Introduction" },
    { href: "#about-section", label: "About Me" },
    { href: "#service-section", label: "My Roles" },
    { href: "#work-section", label: "My Experience" },
    { href: "#recommendations-section", label: "Recommendations" },
    { href: "#contact-section", label: "Contact Me" }
]

const AsideContent = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(()=>{
        const sectionIds = NavLinks.map((link) => link.href.replace("#", ""));
        const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        const handleScroll = ()=>{
            const scrollPosition = window.scrollY + window.innerHeight/2;

            let currentSection = "";
            for(const section of sections){
                const { offsetTop, offsetHeight } = section;
                if(scrollPosition >= offsetTop && scrollPosition < (offsetTop + offsetHeight)) {
                    currentSection = `#${section.id}`;
                    break;
                }
            }

            if(currentSection && currentSection!== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Trigger on first load
        setTimeout(handleScroll, 0);

        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[activeSection]);

  return (
    <div className="p-5  flex justify-center relative">
        <ul className='sm:static md:fixed top-40 flex flex-col flex-wrap  py-5 px-5 font-Josefin'>
            {NavLinks.map(({href, label},index)=>(
                <motion.li key={index} 
                    className={`py-3 transition-colors duration-300 ${
                        activeSection === href
                        ? "text-blue-950 font-bold shadow-darkBrown dark:text-white dark:shadow-white" 
                        : ""
                    }`}      
                    whileHover={{scale: 1.1}}
                >
                    <a href={href} className=''>{label}</a>
                </motion.li>
            ))}
        </ul> 
    </div>
  )
}

export default AsideContent