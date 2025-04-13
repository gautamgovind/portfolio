"use client"
import { fadeIn } from "@/framerMotion/variant";
import { motion } from "framer-motion";
import MySkills from "./my-skills";
import Image from "next/image";
import { assetsImages } from "@/assets/assets";
import MobileSkillView from "./mobile-skill-view";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxAccessibility } from "react-icons/rx";

import { IconType } from "react-icons";

export type SkillType = {
    skill: string,
    icon: IconType
}
const skills: SkillType[] = [
    {
        skill: "ReactJS",
        icon: FaReact,
    },
    {
        skill: "Redux",
        icon: SiRedux,
    },
    {
        skill: "NextJS",
        icon: SiNextdotjs,
    },
    {
        skill: "Accessibility",
        icon: RxAccessibility
    },
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3Alt,
    },
    {
        skill: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        skill: "TypeScript",
        icon: SiTypescript,
    },
    {
        skill: "TailwindCSS",
        icon: RiTailwindCssFill,
    },
];


const Skills = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
            <div className="flex flex-col items-center mt-[100px]">
                <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
                <p className="text-lg text-center">
                    I not only work with these technologies but excellent in using them with
                    best practices to deliver high-quality results, I have been working with
                    all these skills to build my portfolio projects
                </p>
            </div>
        </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <MySkills myskills={skills} />
        </div>

        <div className="sm:block lg:hidden">
          <MobileSkillView myskills={skills} />
        </div>
        
      </div>

      <div className="border-y-2 border-lightGrey relative ">
        <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
        <Image 
            src={assetsImages.subSkills}
            alt="subSkills image"
        />
        </div>
    </div>
  );
};

export default Skills;
