
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { SkillType } from "./skill";

type Props = {
    myskills:SkillType[]
}

const MobileSkillView = ({myskills}:Props) => {
    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 py-10">
        {myskills.map((item: SkillType, index:number) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="flex flex-col items-center py-2"
            >
              <item.icon className="text-7xl text-darkBrown dark:text-white" />
              <p className="text-center mt-4">{item.skill}</p>
            </motion.div>
          );
        })}
      </div>
    );
  };

  export default MobileSkillView;