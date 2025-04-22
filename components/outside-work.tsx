"use client"

import { motion } from "framer-motion";
import { AwSliderImages } from './lib/assets';
import Carousel from "./lib/carousel";

const OutsideWork = () => {
  return (
    <motion.section id='outsidework-section' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h2 className='text-center md:text-5xl text-4xl font-Ovo'
            initial={{y:-20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            Outside Work
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-3xl font-Ovo'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.6, delay: 0.7}}
        >
            I’m not just the kind of person who makes work fun—I’m even more fun when there’s no Wi-Fi and a parachute involved. Outside the office, 
            you’ll find me chasing thrills through skydiving, paragliding, scuba diving, rafting, and bungee jumping (yes, willingly). 
            Like many, I love to travel—new places, new cultures, new foods… and occasionally getting lost on purpose. 
            It&apos;s my favorite way to learn, grow, and collect stories that start with “So there was this one time….
        </motion.p>

        <motion.section aria-label="Recommendation carousel" className="w-full my-10 aspect-auto relative"
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 1, delay: 0.3}}
        >
            <Carousel imageUrls={AwSliderImages} />
        </motion.section>
    </motion.section>
  )
}

export default OutsideWork