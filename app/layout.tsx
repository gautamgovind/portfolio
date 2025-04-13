import type { Metadata } from "next";
import { Outfit, Ovo, Josefin_Sans, Nunito } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/components/context/theme-context";
import Header from "@/components/header";
import AsideContent from "@/components/aside-content";
import Footer from "@/components/footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

const JosefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"]
});

const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Gautam Govind",
  description: "Frontend Developer and accessibility consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth" >
      <body
        className={`${OutfitFont.className} ${OvoFont.className} ${JosefinFont.className} ${NunitoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <ThemeContextProvider>
        <Header />
        <div className='flex w-full flex-col md:flex-row lg:flex-row justify-between pt-28'>
          <aside className="hidden md:block w-full md:w-60 lg:w-80 border-r-[0.6px] border-dotted border-lightHover shadow-sm bg-opacity-50 bg-white  dark:text-white dark:border-0 dark:border-white/50 dark:bg-black relative">
            <AsideContent />
          </aside>
          <div className="flex-1">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        
        </ThemeContextProvider>
      </body>
    </html>
  );
}
