'use client'

import { useState } from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Image from "next/image";


import bwImage from "@/assets/images/works/bw-work1.webp";
import leftImageWork1 from "@/assets/images/works/work2.webp";
import mdImageWork1 from "@/assets/images/works/card4.webp";

import mdImageWork2 from "@/assets/images/works/possessedImage3.webp";
import possessedImage5 from "@/assets/images/works/possessedImage5.webp";
import possessedImage4 from "@/assets/images/works/possessedImage4.webp";

import mdImageWork3 from "@/assets/images/works/card1.webp";
import SLImage4 from "@/assets/images/works/SLImage4.webp";
import SLImage5 from "@/assets/images/works/SLImage5.webp";

import colagnexImage from "@/assets/images/works/colagnexImage.webp";

const works = [
    {
        id: 1,
        title: "SuperRare",
        subTitle: "NFT Gallery",
        gridOne: './videos/work1.webm',
        gridTwo:'./videos/videoVerticalWork1.webm',
        gridThree: mdImageWork1,
        gridFour: leftImageWork1,
        gridFive: bwImage,
    },
    {
        id: 2,
        title: "The Possessed",
        subTitle: "NFT Collectibles",
        gridOne: './videos/work2.webm',
        gridTwo:'./videos/videoVerticalWork2.webm',
        gridThree: mdImageWork2,
        gridFour: possessedImage4,
        gridFive: possessedImage5,
    },
    {
        id: 3,
        title: "Saint Laurent",
        subTitle: "Digital Showroom",
        gridOne: './videos/work3.webm',
        gridTwo:'./videos/videoVerticalWork3.webm',
        gridThree: mdImageWork3,
        gridFour: SLImage4,
        gridFive: SLImage5,
    },
    {
        id: 4,
        title: "Colagne X",
        subTitle: "Web3 Perfume",
        gridOne: './videos/work4.webm',
        gridTwo:'./videos/videoVerticalWork4.webm',
        gridThree: mdImageWork1,
        gridFour: colagnexImage,
        gridFive: colagnexImage,
    }

]

const Works = () => {

  const [activeTab, setActiveTab] = useState(works[0].id);
  const activeWork = works.find((work) => work.id === activeTab);

  return (
    <Container id="recent-projects" className="mt-20 flex justify-center items-center w-full">
        <div className="w-full max-w-7xl">
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center w-full">
                <div className="flex flex-col w-full lg:w-1/3">
                    <p className="text-sm font-semibold text-stone-600 uppercase mb-2 md:mb-4 text-center lg:text-start">latest project</p>
                    <h1 className="text-primary text-3xl text-center lg:text-start">Check our <span className="font-noir">recent work</span></h1>
                </div>

                <div className="mt-6 gap-4 xl:gap-4 lg:mt-0 w-full lg:w-2/3 grid grid-cols-2 grid-rows-2 md:flex md:justify-center lg:justify-end">
                    {works.map((work,id) => (
                        <div key={id} onClick={() => setActiveTab(work.id)} className={
                            `flex items-center flex-col relative md:border-none p-2 rounded cursor-pointer`
                        }>
                            {activeTab === work.id &&
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        className="text-accent absolute -top-2"
                                        initial={{opacity:0, scale:0, rotate:180}}
                                        animate={{opacity:1, scale:[1,1.3,.8,1], rotate:0}}
                                        exit={{opacity:0, scale:0, rotate:-180}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <Sparkle size={20}/>
                                    </motion.div>
                                </AnimatePresence>
                            }
                            <div className="flex flex-col p-2 rounded items-center">
                                <div className="text-xs font-bold text-stone-600 uppercase tracking-widest">{work.subTitle}</div>
                                <motion.div className={cn(
                                    `text-xl font-semibold tracking-tight transition`,
                                    activeTab === work.id ? "text-accent" : "text-stone-600"
                                    )}>{work.title}</motion.div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div
                className="flex justify-center items-center w-full h-full mt-6 md:mt-10 "
            >
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-9 md:grid-rows-5 w-full gap-4 ">
                    <div className=" relative col-span-2 row-span-2 md:col-span-6 md:row-span-3 rounded h-[244px] md:h-[424px]">
                        <video autoPlay loop muted src={activeWork?.gridOne} className="rounded absolute w-full h-full object-cover" ></video>
                    </div>
                    <div className="hidden md:col-span-3 md:row-span-5 rounded md:grid md:grid-rows-2 gap-4">
                        <div className="hidden md:inline rounded relative lg:row-span-2">
                            <video autoPlay loop muted preload={'auto'} src={activeWork?.gridTwo} itemType="video/webm" className="rounded absolute w-full h-full object-cover xl:object-left object-center">
                            </video>
                        </div>
                        <div className="relative hidden md:inline lg:hidden rounded">
                            <Image
                                src={activeWork!.gridThree}
                                alt="Picture of work"
                                fill
                                placeholder="blur"
                                className="object-cover rounded absolute"
                            />
                        </div>
                    </div>
                    <div className=" relative md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-4 rounded">
                        <Image
                            src={activeWork!.gridFour}
                            alt="Picture of work"
                            fill
                            placeholder="blur"
                            className="object-cover rounded absolute"
                        />
                    </div>
                    <div className="relative md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-4 rounded">
                        <Image
                            src={activeWork!.gridFive}
                            alt="Picture of work"
                            fill
                            placeholder="blur"
                            className="object-cover rounded absolute"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Works;
