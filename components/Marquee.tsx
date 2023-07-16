'use client'

import Image from "next/image";
import colognex from "@/assets/images/colognex.webp";
import fuelees from "@/assets/images/fuelees.webp";
import saintLaurent from "@/assets/images/saint-laurent.webp";
import sugarBaby from "@/assets/images/sugar-baby.webp";
import superRare from "@/assets/images/super-rare.webp";
import thePossessed from "@/assets/images/the-possessed.webp";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="flex select-none w-full relative overflow-hidden mb-16">

            <motion.div
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration:20,
                    repeatType:"loop",
                    ease:"linear",
                    times:[1,1,0]
                }}
            >
                <div className="flex-shrink-0 w-full flex justify-center items-center whitespace-nowrap gap-12 pl-12">

                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={colognex} alt="MUM Studio" width={170} height={170} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={fuelees} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={saintLaurent} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={sugarBaby} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={superRare} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={thePossessed} alt="MUM Studio" width={120} height={120} className="object-contain"/>
                        </div>
                     </div>
                </div>
            </motion.div>
            <motion.div
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration:20,
                    repeatType:"loop",
                    ease:"linear",
                    times:[1,1,0]
                }}
            >
                <div className="flex-shrink-0 w-full flex justify-center items-center whitespace-nowrap gap-12 pl-12">

                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={colognex} alt="MUM Studio" width={170} height={170} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={fuelees} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={saintLaurent} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={sugarBaby} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={superRare} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={thePossessed} alt="MUM Studio" width={120} height={120} className="object-contain"/>
                        </div>
                     </div>
                </div>
            </motion.div>
            <motion.div
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration:20,
                    repeatType:"loop",
                    ease:"linear",
                    times:[1,1,0]
                }}
            >
                <div className="flex-shrink-0 w-full flex justify-center items-center whitespace-nowrap gap-12 pl-12">

                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={colognex} alt="MUM Studio" width={170} height={170} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={fuelees} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={saintLaurent} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={sugarBaby} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={superRare} alt="MUM Studio" width={140} height={140} className="object-contain"/>
                        </div>
                     </div>
                     <div className="grid grid-cols-fluid ">
                        <div className="flex justify-center items-center">
                            <Image src={thePossessed} alt="MUM Studio" width={120} height={120} className="object-contain"/>
                        </div>
                     </div>
                </div>
            </motion.div>



            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#0C0C0D] bg-fixed opacity-60"></div>

        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(to right, rgba(13, 13, 14,1) 0%, transparent 5%, transparent 95% ,rgba(13, 13, 14,1) 100%)'}}></div>
    </div>
  )
}

export default Marquee;
