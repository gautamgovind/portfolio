import { roles } from '@/components/lib/assets'
import { fadeIn } from '@/framerMotion/variant'
import { motion } from 'framer-motion'
import { Image } from "@imagekit/next";

const Roles = () => {
  return (
    <div>
         <motion.div
            variants={fadeIn("top", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
        >
            <div className="flex flex-col items-center mt-[100px]" id='roles'>
                <h2 className="text-6xl mb-10">Roles</h2>
                <p className="text-lg text-center">
                    Differnt roles
                </p>
            </div>
        </motion.div>
        <div className='flex flex-col gap-20 mx-auto my-12'>
            {roles.map(({ role, tools, id, align, image, description }, index)=>(
                <motion.div
                    key={index+id}
                    id={id}
                    variants={fadeIn("top", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
                    align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    } justify-end sm:flex-col`}
                >
                    <div className="w-full md:w-[60%] flex flex-col justify-center">
                        <h2 className="md:text-3xl sm:text-2xl">{role}</h2>
                        <h2
                            className="text-md font-thin font-special py-2"
                        >
                            {tools}
                        </h2>
                        <p>{description}</p>
                    </div>
                    <div className="w-full md:w-[40%] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
                        <div className="bg-darkBrown">
                            <Image
                                src={image}
                                alt="Next.js logo"
                                width={400}
                                height={200}
                                
                            /> 
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Roles