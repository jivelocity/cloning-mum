import Image from "next/image";

import card1 from "@/assets/images/works/card1.webp";
import card2 from "@/assets/images/works/card2.webp";
import card3 from "@/assets/images/works/card3.webp";
import card4 from "@/assets/images/works/card4.webp";


const ImageMarquee = () => {
  return (

        <div className="flex justify-center gap-4 overflow-hidden">
            <div className=" relative min-h-[200px] min-w-[260px] md:w-[430px] md:h-[300px] lg:w-[410px] lg:h-[364px] bg-white rounded">
                <Image
                    src={card1}
                    alt="MUM Studio"
                    fill
                    className="absolute object-cover rounded"
                />
            </div>
            <div className=" relative min-h-[200px] min-w-[260px] md:w-[430px] md:h-[300px] lg:w-[410px] lg:h-[364px] bg-white rounded">
                <Image
                    src={card2}
                    alt="MUM Studio"
                    fill
                    className="absolute object-cover rounded"
                />
            </div>
            <div className=" relative min-h-[200px] min-w-[260px] md:w-[430px] md:h-[300px] lg:w-[410px] lg:h-[364px] bg-white rounded">
                <Image
                    src={card3}
                    alt="MUM Studio"
                    fill
                    className="absolute object-cover rounded"
                />
            </div>
            <div className=" relative min-h-[200px] min-w-[260px] md:w-[430px] md:h-[300px] lg:w-[410px] lg:h-[364px] bg-white rounded">
                <Image
                    src={card4}
                    alt="MUM Studio"
                    fill
                    className="absolute object-cover rounded"
                />
            </div>

        </div>


  )
}

export default ImageMarquee;
