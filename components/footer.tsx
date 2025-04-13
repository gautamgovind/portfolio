"use client"
import { assetsImages } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoMdMail } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { useThemeContext } from './hooks/useThemeContext';


const Footer = () => {
    const {isDarkMode} = useThemeContext();
  return (
    <footer className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode=== 'dark' ? assetsImages.gautamFeLogo: assetsImages.gautamLogo} alt='' className='w-28 mx-auto mb-2 border dark:border-gray-800 rounded-full' />
            <div className='flex items-center gap-2 mx-auto w-max'>
                <IoMdMail size={20}/> gautam.govind04@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@ 2025 Gautam Govind. All rights reserved. </p>
            <ul className='flex items-center justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/gautamgovind"><ImGithub /></a>
                </li>
                <li className='px-5'>
                    <a target='_blank' href="https://www.linkedin.com/in/gautamgovind/"><GrLinkedin /></a>
                </li>
                <li>
                    <a target='_blank' href=""><IoLogoYoutube /></a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer