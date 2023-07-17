'use client'

import Image from "next/image";
import { Menu, Zap } from "lucide-react";

import logo from "@/assets/images/logo.webp";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";
import Button from "@/components/ui/Button";
import { HashLink } from "react-router-hash-link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    <div className="fixed w-full inset-x-0 z-50">
        <div className="w-full relative">
            <Container className="py-4 flex justify-between items-center absolute inset-x-0 bg-background/20 backdrop-blur ">
                <HashLink smooth to={'#hero'}>
                    <Image
                        src={logo}
                        alt="MUM Studio"
                        width={80}
                        height={80}
                    />
                </HashLink>
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
                    <Sheet>
                        <SheetTrigger>
                            <Button secondary>
                                <Menu size={20}/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="border-none">
                            <SheetClose asChild>
                        <div className="flex flex-col mt-10 space-y-8 items-center">
                                {menus.map((menu) => (
                                    <NavLink key={menu.id} label={menu.label} id={menu.id}/>
                                ))}
                                <Button>
                                    Get Started
                                    <Zap size={18}/>
                                </Button>
                        </div>
                            </SheetClose>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar;
