import Image from 'next/image'
import Flash1 from '../../../public/assets/blog4.jpeg'
import Flash2 from '../../../public/assets/blog3.jpeg'
import Flash3 from '../../../public/assets/blog2.jpeg'
import Flash4 from '../../../public/assets/blog1.jpeg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { HiStar } from "react-icons/hi2"

export default function Arrivals() {
    return (
        <Carousel className='p-4 my-2 max-w-screen-xl mx-auto'>
            <h2 className="text-center py-8 text-[48px] text- font-bold leading-[48px] tracking-[4%]">
               New Arrivals
            </h2>
            <CarouselContent>
                <CarouselItem className="mx-auto basis-2/1 ">
                    <div className="w-[272px] h-[252px] flex ">
                        <Image src={Flash1} alt='ProductDetails' width={150} height={150}
                            className='w-[272px] h-[252px] rounded-xl' />
                    </div>
                    <div className="w-[140px] h-[94px]">
                        <div className="w-[201px] h-[24px] my-4">
                            <p className="text-base leading-6 font-medium">
                            T-shirt with Tape Details
                            </p>
                        </div>
                        <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                            <div className="flex">
                                <span className="w-[37px] h-[24px] text-maincolor flex ">$120</span>
                               
                            </div>
                            <div className="flex">
                                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                </span>
                                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                    (4.5/5)
                                </span>
                            </div>
                        </div>
                    </div>

                </CarouselItem>
                <CarouselItem className="mx-auto basis-2/1 ">
                    <div className="w-[272px] h-[252px] flex ">
                        <Image src={Flash2} alt='ProductDetails' width={150} height={150}
                            className='w-[272px] h-[252px] rounded-xl' />
                    </div>
                    <div className="w-[140px] h-[84px]">
                        <div className="w-[201px] h-[24px] my-4">
                            <p className="text-base leading-6 font-medium">
                            Skinny Fit Jeans
                            </p>
                        </div>
                        <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                            <div className="flex">
                                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$208</span>
                                <del className="pl-4 text-[#7D8184]">$260</del>
                            </div>
                            <div className="flex space-x-4">
                                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                </span>
                                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                    (3.5/5)
                                </span>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="mx-auto basis-2/1 ">
                    <div className="w-[272px] h-[252px] flex ">
                        <Image src={Flash3} alt='ProductDetails' width={150} height={150}
                            className='w-[272px] h-[252px] rounded-xl' />
                    </div>
                    <div className="w-[140px] h-[84px]">
                        <div className="w-[201px] h-[24px] my-4">
                            <p className="text-base leading-6 font-medium">
                            Chechered Shirt
                            </p>
                        </div>
                        <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                            <div className="flex">
                                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$180</span>
                            </div>
                            <div className="flex space-x-4">
                                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                </span>
                                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                    (4.5/5)
                                </span>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="mx-auto basis-2/1 ">
                    <div className="w-[272px] h-[252px] flex ">
                        <Image src={Flash4} alt='ProductDetails' width={150} height={150}
                            className='w-[272px] h-[252px] rounded-xl' />
                    </div>
                    <div className="w-[140px] h-[84px]">
                        <div className="w-[201px] h-[24px] my-4">
                            <p className="text-base leading-6 font-medium">
                            Sleeve Striped T-shirt
                            </p>
                        </div>
                        <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                            <div className="flex">
                                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$112</span>
                                <del className="pl-4 text-[#7D8184]">$160</del>
                            </div>
                            <div className="flex space-x-4">
                                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                </span>
                                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                    (4.5/5)
                                </span>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="mx-auto basis-2/1 ">
                    <div className="w-[272px] h-[252px] flex ">
                        <Image src={Flash1} alt='ProductDetails' width={150} height={150}
                            className='w-[272px] h-[252px] rounded-xl' />
                    </div>
                    <div className="w-[140px] h-[84px]">
                        <div className="w-[201px] h-[24px] my-4">
                            <p className="text-base leading-6 font-medium">
                            T-shirt with Tape Details
                            </p>
                        </div>
                        <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                            <div className="flex">
                                <span className="w-[37px] h-[24px] text-maincolor flex ">$186</span>
                                <del className="pl-4 text-[#7D8184]">$232</del>
                            </div>
                            <div className="flex">
                                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                    <HiStar className="w-[20px] h-[20px]" />
                                </span>
                                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                    (5.0/5)
                                </span>
                            </div>
                        </div>
                    </div>

                </CarouselItem>
            </CarouselContent>
            <div className="py-10 relative items-center text-center">
                <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse">Shop Now</button>
            </div>
        </Carousel >
    )
}