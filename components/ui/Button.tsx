'use client'

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    secondary?: boolean
}



const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    className,
    disabled,
    secondary,
    type = "button",
    ...props
}, ref) => {

const [isHovered, setIsHovered] = useState(false)
const repeatCount = isHovered ? 0 : Infinity;
const duration = isHovered ? 0.5 : 4;

const variantGradient ={
    hover:{
        background:'radial-gradient(50% 50% at 50% 100%,rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)'
    },
    looping:{
        background: ['radial-gradient(25% 50% at 50% 100% , rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)','radial-gradient(25% 50% at 0% 50%, rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)' ,'radial-gradient(25% 50% at 50% 0%, rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)','radial-gradient(25% 50% at 100% 50%, rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)','radial-gradient(25% 50% at 50% 100%, rgba(235, 255, 0, 1), rgba(235, 255, 0, 0) 100%)'],
    }
}
const variantGradientSecondary ={
    hover:{
        background:'radial-gradient(50% 50% at 50% 100%,rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)'
    },
    looping:{
        background: ['radial-gradient(25% 50% at 50% 100% , rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)','radial-gradient(25% 50% at 0% 50%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)' ,'radial-gradient(25% 50% at 50% 0%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)','radial-gradient(25% 50% at 100% 50%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)','radial-gradient(25% 50% at 50% 100%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%)']
    }
}


// const x = useMotionValue(50)
// const y = useMotionValue(100)

// useAnimationFrame((t) => {
//     const angle = (t / 4000) * Math.PI * 2;
//     const radius = 50;
//     const xValue = Math.cos(angle) * radius;
//     const yValue = Math.sin(angle) * radius;
//     x.set(xValue);
//     y.set(yValue);

// });

// const newY = useTransform(y, [-50, 50], [0, 100]);
// const newX = useTransform(x, [-50, 50], [0, 100]);


    const glow =
        <motion.div className='absolute inset-[1px] z-[0] rounded blur'
                variants={secondary ? variantGradientSecondary : variantGradient}
                animate={isHovered? 'hover' : 'looping'}
                transition={{
                    repeat: repeatCount,
                    duration: duration,
                    ease: 'linear',
                    easings:'easeInOut'
                }}
        />

    const stroke =
        <motion.div className='absolute inset-[1px] z-[0] rounded'
                variants={secondary ? variantGradientSecondary : variantGradient}
                animate={isHovered? 'hover' : 'looping'}
                transition={{
                    repeat: repeatCount,
                    duration: duration,
                    ease: 'linear',
                    easings:'easeInOut'
                }}

        />

    const fillColor = !secondary ? "bg-[#191A10]" : "bg-[#181819]"
    const textColor = !secondary ? "text-[#AAB804]" : "text-primary"

    const fill = <div className={`absolute rounded inset-[2px] z-[0] ${fillColor}`} />

    return(

            <AnimatePresence >
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    disabled={disabled}
                    type={type}
                    ref={ref}
                    {...props}
                    className={cn(
                        `
                            flex
                            flex-nowrap
                            w-auto
                            rounded
                            px-4
                            py-3
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            font-semibold
                            trasition
                            relative
                            overflow-visible
                            transistion-all
                            ${fillColor}
                            ${textColor}
                        `,
                        className,
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {glow}
                    {stroke}
                    {fill}
                    <div className='z-[1] flex flex-nowrap gap-2 items-center'>{children}</div>
                </button>
            </AnimatePresence>
    )
})

export default Button
