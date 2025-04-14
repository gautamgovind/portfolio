"use client"
import React from 'react';

import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { fadeIn } from '@/framerMotion/variant';
import Image from 'next/image';
import { timeline } from '@/assets/assets';

 
const Journey = () => {
  return (
    <div className=" flexmax-full mx-[10%] px-4">
        <motion.div
            variants={fadeIn("top", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
        >
            <div className="flex flex-col items-center mt-[100px]">
                <h2 className="text-6xl mb-10">Projects</h2>
                <p className="text-lg text-center">
                    I have worked on a variety of web development projects, ranging from
                    responsive websites for small businesses to full-stack applications and
                    complex front-end interfaces.
                </p>
            </div>
        </motion.div>

        <div className='flex flex-col gap-20 mx-auto my-12'>
            {timeline.map(({ name, year, align, image, link, description, location }, index)=>(
                <motion.div
                    key={index}
                    variants={fadeIn("top", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
                    align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    } justify-end sm:flex-col`}
                >
                    <div>
                    <h2 className="md:text-3xl sm:text-2xl">{name}</h2>
                    <h2
                        className={`text-xl font-thin font-special sm:text-center ${
                        align === "left" ? "md:text-right" : "md:text-left"
                        }`}
                    >
                        {year}
                    </h2>
                    <div className="flex py-2 text-lg"><IoLocationOutline size={25} /><span>{location}</span> </div>
                    <p>{description}</p>
                    <a
                        href={link}
                        className={`text-lg flex gap-2 items-center hover:font-bold transition-all duration-500 cursor-pointer sm:justify-self-center ${
                        align === "left" ? "md:justify-self-end" : "md:justify-self-start"
                        }`}
                    >
                        View <BsFillArrowUpRightCircleFill />
                    </a>
                    </div>
                    <div className="max-w-[40%] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
                    <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
                    <div className="bg-darkBrown"><Image src={image} alt="website image" className="w-full h-full" /></div>
                    </div>
                </motion.div>
            ))}
        </div>

    </div>
    
  )
}

export default Journey