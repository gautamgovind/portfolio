"use client"
import { fadeIn } from "@/framerMotion/variant";
import { motion } from "framer-motion";
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
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiSass } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCypress } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { DiScrum } from "react-icons/di";

import { IconType } from "react-icons";
import Roles from "../roles/roles";

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
    {
        skill: "NodeJS",
        icon: FaNodeJs,
    },
    {
        skill: "GraphQl",
        icon: GrGraphQl,
    },
    {
        skill: "SASS",
        icon: SiSass,
    },
    {
        skill: "Jquery",
        icon: SiJquery,
    },
    {
        skill: "Bootstrap",
        icon: BsBootstrapFill,
    },
    {
        skill: "Azure",
        icon: VscAzure,
    },
    {
        skill: "GIT",
        icon: FaGitAlt,
    },
    {
        skill: "Github",
        icon: FaGithub,
    },
    {
        skill: "Cypress",
        icon: SiCypress,
    },
    {
        skill: "Jest",
        icon: SiJest,
    },
    {
        skill: "Webpack",
        icon: SiWebpack,
    },
    {
        skill: "Vite",
        icon: SiVite,
    },
    {
        skill: "Agile scrum",
        icon: DiScrum,
    },
];


const Skills = () => {
  return (
    <div id="skills" className="px-[10%]">
      <div className=" mx-auto overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
            <div className="flex flex-col items-center mt-[100px]">
                <h2 className="text-6xl text-orange mb-10">My Skills</h2>
                <p className="text-lg text-center">
                Over the years, I’ve had the opportunity to work with a wide range of  technologies and tools, all depending on what my clients needed at the time. 
                Lately, I’ve been living and breathing React, TypeScript, Node, Next.js, and a few other favorites. 
                But let’s be real, this list is just the tip of the iceberg—there’s plenty more lurking on my LinkedIn and resume if you’re curious. 
                The bottom line? I’m always up for trying new tools, exploring the latest trends, and taking on fresh challenges. Who knows, 
                the next cool tech might be just around the corner!
                </p>
            </div>
        </motion.div>

        <div className="">
          <MobileSkillView myskills={skills} />
        </div>
        <div className="border-t border-gray-400">
            <Roles />
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
