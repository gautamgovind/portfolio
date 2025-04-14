
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { SkillType } from "./skill";

type Props = {
    myskills:SkillType[]
}

const MySkills = ({myskills}:Props) => {
  return (
    <div>
      <h2>Primary Skills</h2>
      <div className="flex items-center justify-center relative gap-2 max-w-full mx-auto">
        {myskills.map((item:SkillType, index: number) => {
          return (
            <motion.div
              variants={fadeIn("up", Number(`0.${index}`))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            > 
              <div className="hover:-translate-y-10 transition-all duration-500">
                  <div className="flex flex-col items-center gap-2 relative">
                      <div className="bg-white text-cyan w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-darkCyan">
                          <item.icon />
                      </div>
                      <p className="text-white font-bold">{item.skill}</p>
                  </div>
                  <div className="w-[100px] bg-cyan absolute top-[50px] -z-10"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
