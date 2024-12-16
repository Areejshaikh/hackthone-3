import { HiStar } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function OurCustomer() {
    return (
        <section className="mx-auto max-w-screen-xl rounded-3xl">
            <div className=" flex justify-between">
                {/* Heading and Timer */}
                
                    <h2 className="uppercase  text-[20px]  md:text-[44px] lg:w-[654px] w-[250px] font-extrabold leading-[48px] tracking-[4%]">
                        Our Happy Customerse
                    </h2>

                    <div className="flex">
                        <button className="rounded-md font-medium">
                        <FaArrowLeft /></button>
                        <button className="rounded-md font-medium">
                       
                        <FaArrowRight />
                        </button>
                    </div>

                
                {/* Button */}
            </div>


            <div className="md:flex  mx-auto  flex-col-1 justify-around md:flex-col-3 flex-row max-w-screen-xl rounded-3xl">
                <div className="w-[320px] rounded-2xl  h-[250px] bg-[#F2F0F1] p-2 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>Sarah M.</p>
                    <p>I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.</p>
                </div>
                {/* 2 */}
                <div className="w-[320px] rounded-2xl  h-[250px] bg-[#F2F0F1] p-2 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>Alex K.</p>
                    <p>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable catering to a variety of tastes and occasions.</p>
                </div>
                {/* 3 */}
                <div className="w-[320px] rounded-2xl  h-[250px] bg-[#F2F0F1] p-2 my-8 md:space-y-2">
                    <div className="flex">
                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                            <HiStar className="w-[20px] h-[20px]" />
                        </span>

                    </div>
                    <p>James L.</p>
                    <p>As someone who always on the lookout for unique fashion pieces, I &apos; m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
                </div>

            </div>


        </section>
    )
}