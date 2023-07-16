import Image from "next/image";
import SelectList from "./SelectList";
import Container from "@/components/ui/Container";

import blob from "@/assets/images/blob.webp";
import grid from "@/assets/images/grid.webp";


const Benefits = () => {
  return (
    <Container className="mt-28 flex justify-center items-center">
        <div className="grid grid-cols-1 auto-rows-min sm:grid-cols-2 lg:grid-rows-4 gap-4 max-w-7xl w-full">
            <div className=" w-full h-full py-6 rounded-md sm:col-span-2 lg:col-span-1 ">
                <div className="flex flex-col w-full h-full justify-center items-center lg:items-start ">
                    <p className="text-sm font-semibold text-stone-600 uppercase mb-4">DESIGN WITH BENEFITS</p>
                    <h1 className="text-primary text-3xl text-center lg:text-start">
                        We handle the magic.
                        <p className="font-noir">
                            You run the show.
                        </p>
                    </h1>
                </div>
            </div>
            <div className="bg-[#151514] h-full w-full rounded-md p-6 xl:p-10 row-span-2 lg:row-span-3 lg:col-span-1 sm:row-span-2 sm:col-span-2 sm:col-start-1">
                    <div className="flex w-full h-full flex-col justify-between">
                        <div className="flex w-full h-2/3 relative justify-center items-start">
                            <Image
                                src={blob}
                                alt="Blob"
                                width={400}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full h-1/3 pt-8 flex flex-col justify-between xl:text-lg max-w-md">
                            <p className="text-stone-300">
                                Review and approve each design with ease using Figma's benefits. Anytime, anywhere.
                            </p>
                            <p className="xl:text-sm text-xs text-stone-600 font-semibold uppercase">
                                Powered by Figma
                            </p>
                        </div>
                    </div>

            </div>
            <div className="bg-[#151514] rounded-md p-6 xl:p-10 row-span-1 md:row-span-2 lg:col-start-2 lg:row-start-1">
                <div className="flex flex-col justify-between h-full w-full gap-6">
                    <div className="flex flex-col gap-2">
                        <SelectList text="App Navigation" />
                        <SelectList text="App Navigation" />
                        <SelectList text="App Navigation" />
                    </div>

                        <p className="xl:text-lg text-stone-300 max-w-md">
                            Submit and manage unlimited design requests using Trello. Receive your design within 3 days.
                        </p>
                        <p className="xl:text-sm text-xs text-stone-600 font-semibold uppercase">
                            Powered by Trello
                        </p>

                </div>
            </div>
            <div className="bg-[#151514] rounded-md p-6 row-span-1 md:row-span-2 relative group">
                <div className="flex flex-col justify-around gap-6 relative w-full h-full">
                    <div className="flex flex-col gap-2 w-full mt-20">
                        <div className="h-6 w-[30%] bg-[#DCE0A7] rounded-sm"/>
                        <div className="h-6 w-[60%] bg-[#424240] rounded-sm"/>
                        <div className="h-6 w-full bg-[#2B2B2A] rounded-sm"/>
                    </div>
                    <p className="xl:text-lg text-stone-300 max-w-md">
                        With over a decade of design experience. We deliver design so fast that it will blow your mind.
                    </p>
                    <div className="absolute inset-0 flex gap-2 group-hover:left-3 group-hover:-top-1 transition-all duration-700">
                        <div className="h-full w-[1px] overflow-hidden" style={{background:'linear-gradient(180deg,#eaff00 0%,rgba(234,255,0,0) 100%)'}}/>
                        <div>
                            <h1 className="px-3 py-1 bg-accent/10 text-accent rounded truncate">2x faster than the agency next door</h1>
                        </div>

                    </div>
                </div>
                <Image
                    src={grid}
                    alt="Grid"
                    fill
                    className="object-cover absolute"
                />
            </div>
        </div>
    </Container>
  )
}

export default Benefits;
