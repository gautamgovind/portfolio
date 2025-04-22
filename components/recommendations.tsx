"use client"

import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import { SliderImages } from './lib/assets';
import Carousel from "./lib/carousel";

const Recommendations = () => {
  return (
    <motion.section id='recommendations-section' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h2 className='text-center md:text-5xl text-4xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            Recommendations
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-3xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            People I’ve worked with have things to say — most of them nice — just snapshots from the full reviews. To read the complete feedback, head over to my  
            <a href="https://www.linkedin.com/in/gautamgovind/#recommendations" target='_blank' className='font-semibold inline-flex items-center'
                aria-label="Go to Gautam's linkedin profile, link will open in new tab"
            > 
                <span className='inline-flex px-1'> LinkedIn profile.</span> <RxOpenInNewWindow className='inline-block' />
            </a>
        </motion.p>

        <motion.section aria-label="Recommendation carousel" className="w-full my-10 aspect-auto relative"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            <Carousel imageUrls={SliderImages} />
        </motion.section>
    </motion.section>
  )
}

export default Recommendations