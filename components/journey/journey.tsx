"use client"

import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { fadeIn } from '@/framerMotion/variant';
import { timeline } from '@/components/lib/assets';
import ImageWithFallback from '../lib/image-with-fallback';


const Journey = () => {
  return (
    <div className="flexmax-full mx-[10%] px-4">
        <motion.div
            variants={fadeIn("top", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
        >
            <div className="flex flex-col items-center mt-[100px]" id='experience-page'>
                <h2 className="text-6xl mb-10">Experience</h2>
                <p className="text-lg text-center">
                    I have worked on a variety of web development projects, ranging from
                    responsive websites for small businesses to full-stack applications and
                    complex front-end interfaces.
                </p>
            </div>
        </motion.div>

        <div className='flex flex-col gap-20 mx-auto my-12'>
            {timeline.map(({ name, year, id, align, image, myimage, link, description, location }, index)=>(
                <motion.div
                    key={index+id}
                    id={id}
                    variants={fadeIn("top", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
                    align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    } justify-end sm:flex-col`}
                >
                    <div className="w-full md:w-[60%] flex flex-col justify-center">
                        <h2 className="md:text-3xl sm:text-2xl">{name}</h2>
                        <h2 className="text-md font-thin font-special py-2">
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
                    <div className="w-full md:w-[40%] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
                        {/* <div className="w-full h-full bg-cyan opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div> */}
                        <div className="bg-darkBrown">
                            <ImageWithFallback 
                                src={image} 
                                alt=""
                                height={200}
                                width={400}
                                loading="eager"
                                classname="object-cover w-full h-[200px]"
                            />
                            <hr/>
                            <ImageWithFallback 
                                src={myimage} 
                                alt={`${name} team`} 
                                height={400}
                                width={400}
                                loading="eager"
                                classname='w-full h-[400px] object-cover'
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

    </div>
    
  )
}

export default Journey