"use client"
import { assetsImages } from '@/components/lib/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import ThemeToggle from './theme-toggle';
import { useThemeContext } from './hooks/useThemeContext';
import NavBar from './navbar';
import Link from 'next/link';

const Header = () => {
    const {isDarkMode} = useThemeContext();
    const sideMenuRef = useRef<HTMLDivElement>(null);
    const openMobileMenu = ()=>{
        if(sideMenuRef.current) sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

  return (
    
        <header className={`w-full fixed px-5 lg:px-8 xl:px-[8%] h-28 py-4 flex items-center justify-between z-50 bg-gradient-to-r from-gray-50 to-gray-200 via-gray-100 dark:bg-gradient-to-tl dark:from-[#020024] dark:to-[#181819] dark:via-darkTheme dark:shadow-white/20`}>
            <Link href='/' aria-label='go to home'>
                <Image src={isDarkMode === 'dark' ? assetsImages.gautamFeLogo: assetsImages.gautamLogo} alt='Gautam Govind Frontend Developer and Accessibility Consultant logo' priority={true} className='w-28 cursor-pointer mr-14 rounded-full border dark:border-gray-800' />
            </Link>

           <NavBar ref={sideMenuRef} />

            <div className='flex items-center gap-4'>
                <ThemeToggle />

                <Link href="/#contact-section" 
                    className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
                    aria-label='go to contact section'
                >
                    Contact <LuArrowDownRight />
                </Link>

                <button className='block md:hidden ml-3' aria-expanded={false} onClick={openMobileMenu}>
                    <RiMenu3Line size='1.5rem' />
                </button>
            </div>     
        </header>
    
  )
}

export default Header