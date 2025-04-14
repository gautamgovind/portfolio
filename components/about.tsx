"use client"
import { assetsImages, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id='about-section' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1, delay: 0.2}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity: 0, y:-20 }} 
            whileInView={{ opacity: 1, y:0 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            Introduction
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{opacity: 0, y:-20 }} 
            whileInView={{ opacity: 1, y:0 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            About Me
        </motion.h2>

        <motion.div className='flex flex-col md:flex-row justify-between gap-6 pt-10'
            initial={{opacity: 0,}} 
            whileInView={{ opacity: 1}} 
            transition={{duration: 0.8}}
        >
            <motion.div className='w-full md:w-1/2 rounded-3xl text-center'
                initial={{opacity: 0, scale:0.9 }} 
                whileInView={{ opacity: 1, scale:1 }} 
                transition={{duration: 0.6}}
            >
                <Image src={assetsImages.gautamImg} alt='gautam' priority className='w-full rounded-3xl' />
            </motion.div>

            <div className="w-full md:w-1/2 flex items-center">
            <p className='mb-10 max-w-2xl font-Ovo'>
                    Hi, I’m a frontend developer and accessibility consultant with over 10 years of experience crafting fast, user-friendly websites that drive real impact. 
                    I&apos;ve worked across industries like eCommerce, telecom, healthcare, and insurance—translating complex challenges into clean, accessible solutions. 
                    I specialize in React and modern web technologies, enjoy leading teams, and thrive in collaborative environments where learning and knowledge-sharing are part of the culture.
                </p>
            </div>

        </motion.div>

        <motion.div className='flex w-full flex-col lg:flex-row items-center lg:items-start pt-10'
            initial={{opacity: 0,}} 
            whileInView={{ opacity: 1}} 
            transition={{duration: 0.8}}
        >
            <motion.div className="flex-1 px-5"
                initial={{opacity: 0 }} 
                whileInView={{ opacity: 1}} 
                transition={{duration: 0.6}}
            >
                <motion.ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '
                    initial={{opacity: 0 }} 
                    whileInView={{ opacity: 1}} 
                    transition={{duration: 0.8, delay: 1}}
                >
                    {infoList.map(({ title, description},index)=>(
                        <motion.li key={index} 
                            whileInView={{ scale: 1.05 }} 
                            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHoveer/50'
                        >
                          
                            <h3 className='my-4 font-semibold text-gra-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 
                    className='my-6 text-gray-700 font-Ovo dark:text-white'
                    initial={{opacity: 0, y:20 }} 
                    whileInView={{ opacity: 1, y:0 }} 
                    transition={{duration: 1.3, delay: 0.3}}
                >
                        Tools I use
                </motion.h4>

                {/* <motion.ul className='flex items-center gap-3 sm:gap-5'
                    initial={{opacity: 0}} 
                    whileInView={{ opacity: 1}} 
                    transition={{duration: 1.5, delay: 0.6}}
                >
                    {toosData.map((item:string | StaticImageData,index:number)=>(
                        <motion.li key={`index${index}`} 
                            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-b-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                            whileHover={{scale: 1.05}}
                        >
                            <Image src={item} alt='tool' className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul> */}

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About