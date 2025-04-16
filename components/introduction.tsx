"use client"
import React from 'react'
import { assetsImages } from '@/components/lib/assets'
import Image from 'next/image'

import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";



const Introduction = () => {
  return (
    <div id='introduction' className='w-11/!2 pt-2 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4'>
        <motion.div
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
            <Image
                src={assetsImages.author}
                alt='Gautam'
                className='rounded-full w-32'
                priority={true}
            />
        </motion.div>
        <motion.h3 initial={{ y: -20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.3}}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        >
            Hi! I&apos;m Gautam Govind 
        </motion.h3>
        <motion.h1 
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
            initial={{ y: -30, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{duration: 0.8, delay: 0.5}}
        >
            Fontend Developer based in Gothenburg, Sweden
        </motion.h1>
        <motion.p className='max-w-2xl mx-auto font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            I am a FE developer and accessibility consutatnt
        </motion.p>
        <div className='flex flex-col md:flex-row items-center gap-4 mt-4'>
            <motion.a 
                href="#contact-section" 
                className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent'
                initial={{ y: 30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{duration: 0.6, delay: 1}}
            >
                Contact Me <FaArrowRight />
            </motion.a>
            <motion.a 
                href="/GautamGovind.pdf" 
                download 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'
                initial={{ y: 30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{duration: 0.6, delay: 1.2}}
            >
                My Resume <BsDownload />
            </motion.a>
        </div>
    </div>
  )
}

export default Introduction