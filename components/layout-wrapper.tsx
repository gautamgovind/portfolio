"use client"

import { usePathname } from "next/navigation"
import Footer from "./footer";
import AsideContent from "./aside-content";

const LayoutWrapper = ({children}:{children:React.ReactNode}) => {
    const pathname = usePathname();
    const isHome = pathname === "/";

  return (
    <div className="flex w-full flex-col md:flex-row lg:flex-row justify-between pt-28">
      {isHome && (
        <aside className="hidden md:block w-full md:w-60 lg:w-80 border-r-[0.6px] border-dotted border-lightHover shadow-sm bg-opacity-50 bg-white dark:text-white dark:border-0 dark:border-white/50 dark:bg-black relative">
          <AsideContent />
        </aside>
      )}
      <div className="flex-1">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWrapper