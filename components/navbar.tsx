"use client"
import Link from 'next/link';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";


type NavBarProps = object;

const NavBar = forwardRef<HTMLDivElement, NavBarProps>((_props, ref) => {
    const sideMenuRef = useRef<HTMLDivElement>(null);
 
    // Expose the ref to parent
    useImperativeHandle(ref, () => sideMenuRef.current as HTMLDivElement);

    const closeMobileMenu = ()=>{
        if(sideMenuRef.current) sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

  return (
    <nav>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Outfit shadow-sm bg-opacity-50 bg-white  dark:text-white dark:border dark:border-white/50 dark:bg-transparent`}>
            <li><Link href="/" className=''>Home</Link></li>
            {/* prefetch only work in production, not in dev */}
            <li><Link href="/my-journey" prefetch={true}>My Journey</Link></li> 
            <li><Link href="/my-work" prefetch={true}>My Work</Link></li>
            <li><Link href="/#contact-section">Contact Me</Link></li>
        </ul>

        {/* ----Mobile Menu---- */}
        <div ref={sideMenuRef} onClick={closeMobileMenu} className='flex md:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500 dark:bg-darkHoveer dark:text-white'>
            <button className='absolute right-6 top-6' aria-label='close the menu'>
                <RxCross2  size='2rem'/>
            </button>
            <ul className='flex flex-col gap-4 py-20 px-20 z-55'>
                <li><Link href="/" className=''>Home</Link></li>
                <li><Link href="/my-journey" prefetch={true}>My Journey</Link></li>
                <li><Link href="/my-work" prefetch={true}>My Work</Link></li>
                <li><Link href="/#contact-section">Contact Me</Link></li>
            </ul>
        </div>
    </nav>
  )
});

NavBar.displayName = 'NavBar';
export default NavBar