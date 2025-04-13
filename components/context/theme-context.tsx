"use client";

import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type ThemeType = "light" | "dark";
export type ThemeContextType = {
  isDarkMode: ThemeType;
  setIsDarkMode: Dispatch<SetStateAction<ThemeType>>;
};

// Provide a default fallback value or leave it undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export default function ThemeContextProvider({children}:{children: React.ReactNode}) {
    const [isDarkMode, setIsDarkMode] = useState<ThemeType>('light');
    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
      );
}
