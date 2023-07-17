import Container from "@/components/ui/Container";
import bgCard from "@/assets/images/bg-card.webp";

import { ArrowRight, Calendar, Loader } from "lucide-react";
import Image from "next/image";

const Plans = () => {
  return (
    <Container id="plans" className="pt-20 mt-16 bg-[#12120E] rounded-md pb-16  flex justify-center">
        <div className="max-w-7xl w-full ">
            <div className="flex w-full flex-col items-center">
                <p className="text-sm font-semibold text-stone-600 uppercase mb-2 md:mb-4 text-center lg:text-start">
                    LEVEL UP YOUR PRODUCT DESIGN
                </p>
                <h1 className="text-primary text-3xl text-center lg:text-start">
                    Get started with our <span className="font-noir">memberships.</span>
                </h1>
                <h4 className="mt-4 text-sm text-green-300 flex items-center gap-2">
                    <Loader className="text-accent" size={15} />
                    2 spots available this month
                </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-min mt-10">
                <div className="bg-[#1D1D19] rounded p-6 lg:p-8">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold ">
                            Monthly
                        </h1>
                        <p className="text-stone-300 leading-tight text-sm xl:text-base">
                            For projects under 3 months.<br/>
                            Pause or cancel anytime.
                        </p>
                    </div>
                    <div className="flex w-full flex-nowrap gap-3 justify-between mt-6 items-center">
                        <h1 className="text-2xl font-bold ">
                            $4,499/m
                        </h1>
                        <div className="h-[1px] w-full bg-stone-800"/>
                        <p className="text-stone-300 text-sm whitespace-nowrap">Paid monthly</p>
                    </div>
                    <div className="flex justify-between items-center text-accent mt-10 rounded px-4 py-3 bg-[#282918] hover:bg-[#303217] transition-color duration-500 cursor-pointer">
                        <h1>Get Started</h1>
                        <ArrowRight size={20} />
                    </div>
                    <div className="h-[1px] w-full my-8 bg-stone-800"/>
                    <div>
                        <h1 className="font-semibold mb-4">
                            What&apos;s included
                        </h1>
                        <ul className="flex flex-col gap-2 text-sm xl:text-base">
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>High-end UX/UI</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Unlimited requests</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Unlimited projects</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Easy creadit card payments</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Pause or cancel anytime</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#1D1D19] rounded p-6 lg:p-8">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold ">
                            Quarterly
                        </h1>
                        <p className="text-stone-300 leading-tight text-sm xl:text-base">
                            For 3+ months projects.<br/>
                            Save $500 per month.
                        </p>
                    </div>
                    <div className="flex w-full flex-nowrap gap-3 justify-between mt-6 items-center">
                        <h1 className="text-2xl font-bold ">
                            $3,999/m
                        </h1>
                        <div className="h-[1px] w-full bg-stone-800"/>
                        <p className="text-stone-300 text-sm whitespace-nowrap">Paid monthly</p>
                    </div>
                    <div className="flex justify-between items-center text-accent mt-10 rounded px-4 py-3 bg-[#282918] hover:bg-[#303217] transition-color duration-500 cursor-pointer">
                        <h1>Get Started</h1>
                        <ArrowRight size={20} />
                    </div>
                    <div className="h-[1px] w-full my-8 bg-stone-800"/>
                    <div>
                        <h1 className="font-semibold mb-4">
                            What&apos;s included
                        </h1>
                        <ul className="flex flex-col gap-2 text-sm xl:text-base">
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>High-end UX/UI</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Unlimited requests</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Unlimited projects</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="text-xs">✦</span>
                                <p>Easy creadit card payments</p>
                            </li>
                            <li className="flex gap-3 items-center text-green-300">
                                <span className="text-xs">✦</span>
                                <p>High-end marketing visuals <span className="p-1 ml-2 bg-[#282918] text-[10px] rounded uppercase bg-">new</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-2 xl:col-span-1 relative rounded h-[350px] md:h-[135px] xl:h-full">
                    <div className="w-full h-full absolute z-[1] rounded p-6 lg:p-8 flex flex-col md:flex-row justify-end md:justify-between md:items-center xl:justify-end xl:flex-col gap-6">
                        <div>
                            <h1 className="text-2xl font-bold ">
                                Wondering if it&apos;s right for you?
                            </h1>
                            <p className="text-stone-300 leading-tight mt-2 text-sm xl:text-base max-w-xs">
                                Learn more about how MUM Studio works and how it can benefit you.
                            </p>
                        </div>
                        <div className="rounded flex justify-center items-center gap-2 bg-[#282918]/50 hover:bg-[#282918]/90 transition duration-500 xl:w-full px-4 py-3 cursor-pointer whitespace-nowrap">
                            <h1>
                                Book a 10-min call
                            </h1>
                            <Calendar size={16} />
                        </div>
                    </div>
                    <Image
                        src={bgCard}
                        alt="background card"
                        fill
                        className="absolute inset-0 object-cover rounded "
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Plans;
