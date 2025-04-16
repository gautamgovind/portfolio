"use client"
import { serviceData, serviceDataType } from '@/components/lib/assets'
import React from 'react'
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";
import Link from 'next/link';

const Services = () => {
  return (
    <motion.div id='service-section' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            What I offer
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            My Roles
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
             Started my journey as an Accessibility Consultant, which grounded me in building inclusive, user-first web experiences. Over the years, 
             I’ve grown through roles like Junior Interactive Developer, Frontend Developer, and Frontend Lead—each shaping my technical skills and leadership. 
             Today, as a Senior Frontend Developer, I focus on crafting accessible, high-quality solutions that make a real impact on users and businesses alike.
        </motion.p>

        <motion.div className="grid md:grid-cols-3 grid-template-columns auto-rows-auto gap-6 my-10"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            {serviceData.map(({icon, title, description, link}:serviceDataType , index)=>{
                const Icon = icon;
                return (
                    <motion.div key={index} 
                        className='border border-gray-400 rounded-lg p-8 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHoveer dark:hover:shadow-white'
                        whileHover={{scale: 1.05}}
                    >
                        <div className="flex justify-center"><Icon size={30} /></div>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                        <Link href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <MdOutlineReadMore size={20}/> </Link>
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default Services