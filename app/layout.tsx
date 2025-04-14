import type { Metadata } from "next";
import { Outfit, Ovo, Josefin_Sans, Nunito } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/components/context/theme-context";
import Header from "@/components/header";
import LayoutWrapper from "@/components/layout-wrapper";

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
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
