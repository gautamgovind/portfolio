"use client"
import { workData } from '@/components/lib/assets'
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineReadMore } from "react-icons/md";
import { motion } from "framer-motion";
import Link from 'next/link';
import ImageWithFallback from './lib/image-with-fallback';


const Work = () => {

  return (
    <motion.section id='work-section' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h2 className='text-center md:text-5xl text-4xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            My Experience
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.3}}
        >
            and my journey goes here...
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-3  gap-5 dark:text-black"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            {workData.map(({title, description, bgImage, link, alt},index)=>{
                return(
                    <motion.div 
                        key={index} 
                        className='border border-gray-600 bg-white rounded-lg relative cursor-pointer group overflow-hidden flex flex-col' 
                        whileHover={{scale:1.05}}
                        transition={{duration: 0.3}}  
                    >
                        {/* Image Section */}
                    <div className="relative w-full min-h-20 border-b-gray-100">
                        <ImageWithFallback src={bgImage} alt={alt} classname="object-cover object-center" fill />
                    </div>
    
                        {/* Content Section */}
                        <div className="flex-1 p-5 flex justify-between items-center">
                            <div>
                                <h2 className="font-semibold">{title}</h2>
                                <p className="text-sm text-gray-700">{description}</p>
                            </div>
                            <div className="border rounded-full flex items-center justify-center border-black w-9 aspect-square shadow-[2px_2px_0_#000] group-hover:bg-gray-400 transition">
                                <Link href={link} aria-label={`go to my journey's ${alt} section`}><BsFillSendFill /></Link>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>

        <Link href="/my-journey" aria-label='go to my journey to read about education and experience in details'>
            <motion.div 
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 my-20 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHoveer'
                initial={{opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{duration: 0.5, delay: 0.7}}
            >
                Show more <MdOutlineReadMore />
            </motion.div>
        </Link>
    </motion.section>
  )
}

export default Work