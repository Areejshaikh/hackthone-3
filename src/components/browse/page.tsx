import Image from 'next/image'
import FrameImage1 from '../../../public/assets/style-1.jpeg'
import FrameImage2 from '../../../public/assets/style-2.jpeg'
import FrameImage3 from '../../../public/assets/style-3.jpeg'
import FrameImage4 from '../../../public/assets/style-4.jpeg'


export default function Browse() {
    return (
        <section className="max-w-screen-xl w-full  mx-auto bg-[#F2F0F1] rounded-3xl">
            <h2 className="text-[32px] py-8 font-extrabold text-center uppercase">
                Browse By Dress Style
            </h2>
            <div className="sm:grid-cols-2 grid ">
                {/* 1 */}
                <div className="sm:p-4">
                    <Image src={FrameImage1} alt='FrameImage1' width={1000}
                        className="h-[150px] w-full md:h-full rounded-3xl bg-white" />
                </div>
                {/* 2 */}
                <div className="p-4">
                    <Image src={FrameImage2} alt='FrameImage1' width={1000}
                        className="h-[150px] w-full md:h-full rounded-3xl bg-white" />
                </div>
                {/* 3 */}

                <div className="p-4">
                    <Image src={FrameImage3} alt='FrameImage1' width={1000}
                        className="h-[150px] w-full md:h-full rounded-3xl bg-white" />
                </div>
                {/* 4 */}
                <div className="p-4">
                    <Image src={FrameImage4} alt='FrameImage1' width={1000}
                        className="h-[150px] w-full md:h-full rounded-3xl bg-white" />
                </div>



            </div>
        </section>
    );
}