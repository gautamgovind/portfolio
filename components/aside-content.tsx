

"use client"
import {motion} from 'framer-motion'

const NavLinks = [
    { href: "#introduction", label: "Introduction" },
    { href: "#about-section", label: "About Me" },
    { href: "#service-section", label: "What do I do" },
    { href: "#work-section", label: "My Work" },
    { href: "#contact-section", label: "Contact Me" }
]

const AsideContent = () => {
  return (
    <div className="p-5  flex justify-center relative">
        <ul className='sm:static md:fixed top-40 flex flex-col flex-wrap  py-5 px-5 font-semibold font-Josefin'>
            {NavLinks.map(({href, label},index)=>(
                <motion.li key={index} className='py-3'
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