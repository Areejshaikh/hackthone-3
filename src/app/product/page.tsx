import pic1 from '../../../public/assets/pic13.png'
import pic2 from '../../../public/assets/pic14.png'
import pic3 from '../../../public/assets/pic15.png'
import pic4 from '../../../public/assets/blog4.jpeg'
import pic5 from '../../../public/assets/blog3.jpeg'
import pic6 from '../../../public/assets/blog2.jpeg'
import pic7 from '../../../public/assets/blog1.jpeg'
import pic8 from '../../../public/assets/pic5.webp'
import pic9 from '../../../public/assets/pic6.webp'
import { MdOutlineChecklistRtl } from "react-icons/md";
import { HiChevronRight, HiStar } from "react-icons/hi";
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import './style.css'
type Iproduct = {
  id: string;
  name: string;
  image: StaticImageData; // assuming pic1 is a string representing the image URL or file path
  price: string;
  originalPrice: string;
  rating: number;
};
export default async function Products() {


  const products:Iproduct[] = [
    {
      id: '1',
      name: "Vertical Striped Shirt",
      image: pic1,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id: '2',
      name: "Vertical Striped Shirt",
      image: pic2,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 3',
      name: "Vertical Striped Shirt",
      image: pic3,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id: '4',
      name: "Vertical Striped Shirt",
      image: pic4,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 5',
      name: "Vertical Striped Shirt",
      image: pic5,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 6',
      name: "Vertical Striped Shirt",
      image: pic6,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 7',
      name: "Vertical Striped Shirt",
      image: pic7,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 8',
      name: "Vertical Striped Shirt",
      image: pic8,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
    {
      id:' 9',
      name: "Vertical Striped Shirt",
      image: pic9,
      price: "$186",
      originalPrice: "$232",
      rating: 5.0,
    },
  ];

  return (
    <div className="max-w-screen-xl py-24 justify-center flex md:space-x-5 items-start">
      <div>
        <div className="hidden py-4 text-gray-800 md:flex justify-left text-center">
          <Link className="text-sm" href="/">Home</Link>
          <span className="px-4  text-xl">

            <HiChevronRight /> </span>
          <Link className="text-sm" href="/">Shop</Link>
        </div>
        <div className="hidden md:block min-w-[300px]  max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <div className="flex mx-auto justify-between text-center items-center">
            <h4 className="font-bold text-lg">Filters</h4>
            <MdOutlineChecklistRtl className="font-bold text-2xl" />
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          <div className="text-black/30 space-y-4">
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>T-shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Shorts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>Hoodie</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'}>jeans</Link>
              <HiChevronRight />
            </div>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          <div className="flex mx-auto justify-between text-center items-center">
            <Link href={'/'} className="text-xl font-semibold">Prices</Link>
            <HiChevronRight />
          </div>
          <div className=" min-w-[30px] min-h-2 rounded-xl max-w-[295px] border border-black/10"></div>

          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Colors */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Colors</Link>
              <HiChevronRight />
            </div>
            <button className="w-10 h-10 border ml-4 bg-red-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-blue-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-green-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-yellow-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-gray-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-indigo-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-purple-800 rounded-full"></button>
            <button className="w-10 h-10 border ml-4 bg-pink-800 rounded-full"></button>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Size */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Size</Link>
              <HiChevronRight />
            </div>
            <div>
              <button className="w-full md:w-28  my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">XX-Small</button>
              <button className="w-full md:w-28  my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">X-Small</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">small</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Medium</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">X-Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">XX-Large</button>
              <button className="w-full md:w-28   my-2 inline-block text-center bg-black/20 text-sm  hover:text-white px-6 py-2 rounded-full hover:bg-black">Xl</button>
            </div>
          </div>
          <div className=" min-w-[30px]  max-w-[295px] border border-black/10"></div>
          {/* Dress Style */}
          <div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={'/'} className="text-xl font-semibold">Dress Style</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>T-shirts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Shorts</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Hoodie</Link>
              <HiChevronRight />
            </div>
            <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Shirts</Link>
              <HiChevronRight />
            </div> <div className="flex mx-auto justify-between text-center items-center">
              <Link href={"/product/products"}>Jeans</Link>
              <HiChevronRight />
            </div>
          </div>
          {/* Button */}
          <div className="py-10 relative items-center text-center">
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse">Apply Filter</button>
          </div>

        </div>

      </div>

      {/* <RightSide */}

      <div className="grid mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-cols-1 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`} className="xl:w-[280px] xl:h-[280px] md:w-[200px] md:h-[200px] sm:w-[210px] sm:h-[220px] w-[220px] rounded-2xl bg-red-500">
              <Image src={product.image} alt={product.name} width={1000} height={1000}
                className="rounded-md w-full object-contain hover:scale-110 transition-all duration-500" />
            </Link>
            <div className="w-[140px] h-[94px]">
              <div className="w-[201px] h-[24px] my-4">
                <p className="text-base leading-6 font-medium">{product.name}</p>
              </div>
              <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                <div className="flex">
                  <span className="w-[37px] h-[24px] text-maincolor flex">{product.price}</span>
                  <del className="pl-4 text-[#7D8184]">{product.originalPrice}</del>
                </div>
                <div className="flex">
                  <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="w-[20px] h-[20px]" />
                    ))}
                  </span>
                  <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                    ({product.rating}/5)
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}