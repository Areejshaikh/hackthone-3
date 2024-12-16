import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Babge12 from "../../../public/assets/Badge.jpeg";
import Babge13 from "../../../public/assets/Badge (1).jpeg";
import Babge14 from "../../../public/assets/Badge (2).jpeg";
import Babge15 from "../../../public/assets/Badge (3).jpeg";
import Babge16 from "../../../public/assets/Badge (4).jpeg";
import Link from "next/link";


export default function Footer() {
  return (
    <footer>
<div className="max-w-screen-xl  grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16  max-w-frame mx-auto bg-black rounded-[20px]">
            <div className="">
                <p className="text-white font-extrabold text-[44px] text-center sm:text-left">
                    STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </p>
            </div>
            <div className="flex justify-center items-center p-4">
                <div className="flex flex-col items-center space-y-4 ">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="px-4 py-2 rounded-lg border-2 border-gray-300 "
                    />
                    <button
                        className="px-4 py-2 rounded-lg border-2 text-white"
                    >Subscribe To news Letter</button>
                </div>
            </div>
        </div>
        {/* <SubFooter/> */}
      <div className="max-w-screen-xl w-full mx-auto bg-[#e0dcde] flex justify-center items-center py-4 sm:py-16 px-4 sm:px-2">
        <div className=" flex flex-col justify-center md:flex-row space-y-10 md:space-y-0 mx-auto">

          {/* First div */}
          <div className="w-full md:w-1/5 text-textColor space-y-6                ">
            <p className="text-3xl md:text-2xl font-bold tracking-wider">Shop .Co</p>
            <p className="leading-[24px] text-[15px] md:text-base">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex justify-start space-x-4 ">
             <Link href={''} className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
             <RiFacebookLine className="absolute left-2 top-2" />
             </Link>
             <Link href={''} className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
             <CiTwitter className="absolute left-2 top-2" />
             </Link>
             <Link href={''} className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
             <FaInstagram className="absolute left-2 top-2" />
             </Link>
             <Link href={''} className="relative bg-white hover:bg-black hover:text-white  h-8 w-8 transition-all rounded-full border border-black/20 text-gray-400">
             <FaLinkedinIn className="absolute left-2 top-2" />
             </Link>
              
            </div>
          </div>
          <div className="grid sm:space-x-12 sm:grid-cols-4 grid-cols-2 gap-6 md:">
            {/* Second div */}
            <div className="w-full  sm:w-[136px] text-textColor space-y-6 sm:ml-0 md:ml-20">
              <h2 className="text-lg md:text-xl font-bold">COMPANY</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base tracking-[2px]">About</p>
                <p className="text-sm md:text-base">Features</p>
                <p className="text-sm md:text-base">Works</p>
                <p className="text-sm md:text-base">Career</p>
              </div>
            </div>

            {/* Third div */}
            <div className="w-full  md:w-[136px] text-textColor space-y-6">
              <h2 className="text-lg md:text-xl font-bold">Account</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Customer Support</p>
                <p className="text-sm md:text-base  sm:w-auto md:w-[133px]">Delivery Details</p>
                <p className="text-sm md:text-sm sm:w-auto md:w-[133px]">Terms & Conditions</p>
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Privacy Policy</p>
              </div>
            </div>

            {/* Fourth div */}
            <div className="w-full  md:w-[136px] text-textColor space-y-6 ">
              <h2 className="text-lg md:text-xl font-bold">FAQ</h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-sm md:text-base">Account</p>
                <p className="text-sm md:text-base sm:w-auto md:w-[133px]">Manage Deliveries</p>
                <p className="text-sm md:text-base">Orders</p>
                <p className="text-sm md:text-base">Payments</p>
              </div>
            </div>

            {/* Fifth div */}
            <div className="w-full md:w-[136px] text-textColor space-y-6 animate__animated animate__fadeIn animate__delay-4s">
              <h2 className="text-lg md:text-xl font-bold">Resources</h2>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">Free eBooks</p>
              <p className="text-sm md:text-sm text-[11px] font-medium sm:w-auto md:w-[133px]">Development Tutorial</p>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">How to - Blog</p>
              <p className="text-sm md:text-base font-medium sm:w-auto md:w-[133px]">Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[1px] w-full max-w-screen-xl bg-[#5e5b5d]"></div>

      <div className="mx-auto w-full bg-[#e0dcde] max-w-screen-xl ">
        <div className="mx-auto bg-[#e0dcde] py-4 px-5 flex flex-col sm:justify-between  sm:flex-row">
          <p className="text-gray-500 text-base text-center sm:text-left">
          Areej-Zaheer © Made by Areej Zaheer, Designed by
          </p>
          <span className="max-w-screen-xl  flex  sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center  bg-[#e0dcde]  text-sm">
            <Image src={Babge12} alt="Babge1" className="rounded-xl" />
            <Image src={Babge13} alt="Babge1" className="rounded-xl" />
            <Image src={Babge14} alt="Babge1" className="rounded-xl" />
            <Image src={Babge15} alt="Babge1" className="rounded-xl" />
            <Image src={Babge16} alt="Babge1" className="rounded-xl" />
          </span>
        </div>
      </div>
    </footer>

  );
}
