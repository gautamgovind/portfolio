"use client"

import { IoMoonOutline } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { useThemeContext } from "./hooks/useThemeContext";
import { useEffect } from "react";
import { ThemeType } from "./context/theme-context";

const ThemeToggle = () => {
  const {isDarkMode, setIsDarkMode} = useThemeContext();

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme") as ThemeType | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(storedTheme) setIsDarkMode(storedTheme);
    else setIsDarkMode(prefersDark ? "dark": "light");
  },[setIsDarkMode]);

  useEffect(()=>{
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDarkMode);
    localStorage.setItem("theme", isDarkMode);
    
  },[isDarkMode])
  
  return (
    <button onClick={()=>setIsDarkMode((prev) => (prev === "dark" ? "light" : "dark"))}>
      {isDarkMode === 'dark' ? (
          <IoMoonOutline className='size-6 text-orange-300' />
          ): <MdWbSunny className='size-7 text-sky-950' />
      }
        <span className='sr-only'>Toggle Theme</span>
    </button>
  )
}

export default ThemeToggle