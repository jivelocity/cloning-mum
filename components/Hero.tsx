'use client'

import Container from "@/components/ui/Container";
import Button from "./ui/Button";
import { Calendar, List } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <AnimatePresence>
        <Container id="hero">
           <section className="flex flex-col gap-12 md:gap-14 justify-center items-center w-full min-h-fit pt-40 mb-16">
                <div className="flex flex-col justify-center items-center gap-6 md:gap-12">
                    <h1 className="text-center text-5xl md:text-7xl">
                        The creative agency
                        <p className="font-noir text-5xl md:text-7xl"> of your visionary idea</p>
                    </h1>
                    <p className="md:text-xl text-lg text-stone-300 text-center">Premium design subscription for ambitious startups </p>
                </div>
                <div className="flex gap-6 md:gap-12 flex-col sm:flex-row w-4/5 sm:w-auto justify-center">
                    <Button secondary className="flex justify-center">
                        Book a call
                        <Calendar size={16} />
                    </Button>
                    <Button className="flex justify-center">
                        Discover plans
                        <List size={16} />
                    </Button>
                </div>
            </section>
        </Container>
    </AnimatePresence>
  )
}

export default Hero;
