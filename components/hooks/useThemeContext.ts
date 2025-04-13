import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export function useThemeContext() {
    const context = useContext(ThemeContext);
    
    if(!context) {
        throw new Error("must be used within a ThemeProvider")
    }

    return context
}