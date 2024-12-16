import heroImage from '../../../public/assets/hero1.jpeg'
import Counter from '../../app/counter'
import './style.css'
import Image from "next/image";



function Hero() {
    return (
        <section className="grid px-2 grid-cols-2 mx-auto w-full max-w-screen-xl bg-image py-24 my-2 ">
            <div>
                <div>
                    <h3 className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
                </div>
                <p className=" text-[14px] lg:text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <div className="py-10">
                  <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse">Shop Now</button>
                </div>
                <Image src={heroImage} alt="Hero Image" className=" justify-center  w-[400px] h-[448px] md:hidden" />
                <div className="my-8 gap-3 grid-cols-2  grid sm:grid-cols-3 items-center justify-center ">
                    <div >
                        <Counter target={200} />
                        <span className="text-sm text-gray-400">International Brands
                        </span>
                    </div>
                    <div className="counter-container">
                        <Counter target={200} />
                        <span className="text-sm text-gray-400">High-Quality Products</span>
                    </div>
                    <div className="counter-container">
                        <Counter target={3000} />
                        <span className="text-sm text-gray-400">Happy Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;