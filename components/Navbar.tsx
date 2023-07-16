'use client'

import Image from "next/image";
import { Menu, Zap } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import logo from "@/assets/images/logo.webp";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";
import Button from "@/components/ui/Button";

const menus = [
    {
        id:'benefits',
        label:'Benefits',
    },
    {
        id:'recent-projects',
        label:'Recent Projects',
    },
    {
        id:'plans',
        label:'Plans',
    },
    {
        id:'faq',
        label:'FAQ',
    }
]

const Navbar = () => {
  return (
    <AnimatePresence>
        <Container className="py-4 flex justify-between items-center">
            <Image
                src={logo}
                alt="MUM Studio"
                width={80}
                height={80}
            />
            <div className="space-x-12 items-center hidden md:flex ">
                {menus.map((menu) => (
                    <NavLink key={menu.id} label={menu.label} id={menu.id}/>
                ))}
                <Button>
                    Get Started
                    <Zap size={18}/>
                </Button>
            </div>
            <div className="flex md:hidden">
                <Button secondary>
                    <Menu size={20}/>
                </Button>
            </div>
        </Container>
    </AnimatePresence>
  )
}

export default Navbar;
