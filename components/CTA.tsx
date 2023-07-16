import Image from "next/image";
import { Loader, Zap } from "lucide-react";

import bg from "@/assets/images/bgCTA1.jpg";
import logo from "@/assets/images/logo.webp";
import Button from "@/components/ui/Button";
import Marquee from "@/components/Marquee";

const CTA = () => {
  return (
    <div className="relative w-full h-[570px] overflow-hidden">
        <div className="w-full h-full absolute z-[1] flex flex-col items-center justify-center">
            <h1 className="text-primary text-3xl text-center mb-10">
                    Your unique idea.<br/>
                <span className="font-noir">
                    Unlimited requests.
                </span>
            </h1>

            <Button>
                Get Started
                <Zap size={18}/>
            </Button>
            <h4 className="mt-4 text-sm text-green-300 flex items-center gap-2 mb-12">
                <Loader className="text-accent" size={15} />
                2 spots available this month
            </h4>
            <Marquee/>
            <div className="flex flex-col justify-center items-center gap-6">
                <Image
                    src={logo}
                    alt="MUM Studio"
                    width={55}
                    height={55}
                />
                <p className="text-xs text-stone-500">©2023 MUM Studio. All rights reserved. <span className="text-primary ml-1">Privacy Policy</span></p>
            </div>
        </div>
        <div className=" absolute inset-0 z-[1] h-[2px] w-full overflow-hidden" style={{background:'radial-gradient(30.9% 150% at 50% 100%,#eaff00 0%,hsl(65,100%,10%) 100%)', boxShadow:'0 4px 24px #e6ff00'}}/>
       <Image
            src={bg}
            alt="background"
            fill
            quality={100}
            className=" object-cover md:object-fill object-center absolute"
       />
    </div>
  )
}

export default CTA;
