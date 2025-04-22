"use client"
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = useState("");
    
    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append("access_key", "7ccc01ec-0aa7-4990-9c0c-880ad8c77274");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <motion.div id='contact-section' 
        className='w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-r from-gray-50 to-gray-300 via-gray-200 dark:bg-gradient-to-r dark:from-[#2A2A2A] dark:to-[#181819] dark:via-[#474343]'
        initial={{opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{duration: 1}}
    >
        <motion.h4 
            initial={{y: -20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.4}}
            className='text-center mb-2 text-lg font-Ovo'
        >
            Connect with me
        </motion.h4>
        <motion.h2 
            className='text-center md:text-5xl text-4xl font-Ovo'
            initial={{y: -20, opacity: 0 }} 
            whileInView={{ y:0, opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.4}}
        >
            Get in touch
        </motion.h2>
        <motion.p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.5}}
        >
            I&apos;d love to hear from you! If you have any query, comments, or feedback please feel free to use the below form to submit your response.
        </motion.p>

        <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
            initial={{opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{duration: 0.5, delay: 0.7}}
        >
            <div className='grid md:grid-cols-2 grid-template-columns gap-6 mt-10 mb-8 '>
                <label htmlFor="name" className="hidden">enter your name</label>
                <motion.input 
                    type="text" name='name' id='name'
                    placeholder='Enter your name' required 
                    className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHoveer/30 dark:border-white/90' 
                    initial={{x: -50, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{duration: 0.5, delay: 1}}
                />
                <label htmlFor="email" className="hidden">enter your name</label>
                <motion.input 
                    type="email" name='email' id='email'
                    placeholder='Enter your email' required 
                    className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHoveer/30 dark:border-white/90'  
                    initial={{x: -50, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{duration: 0.6, delay: 1.1}}
                />
            </div>
            <label htmlFor="message" className="hidden">enter your name</label>
            <motion.textarea rows={6} name='message' id='message'
                placeholder='Enter your message' required  
                className='w-full p-4 mb-6 border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHoveer/30 dark:border-white/90'
                initial={{y: 100, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{duration: 0.5, delay: 1}}    
            />
            
            <motion.button type='submit' 
                className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHoveer'
                transition={{duration: 0.5, delay: 1}}
                whileHover={{scale: 1.05}}
            >
                Submit <FaArrowRight />
            </motion.button>

            <p className='mt-4'  aria-live='assertive'>
                {result}
            </p>

            {/* <motion.div className="grid mt-10 mb-8 "
                initial={{y: 100, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{duration: 0.5, delay: 1}}  
            >
                 
                <iframe src="https://copilotstudio.microsoft.com/environments/Default-02b6749b-5ce0-4853-bd5c-a05f9bd9dd3a/bots/crbbc_nexerOnboardingAssistant/webchat?__version__=2 " style={{ width: '100%', height: '500px', backgroundColor: 'blue', display: 'flex',  }}></iframe>
            </motion.div>
             */}
        </motion.form>
    </motion.div>
  )
}

export default Contact