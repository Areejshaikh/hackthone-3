import { CiShoppingCart } from "react-icons/ci";

const ShoppingCart = () => {
  return (
    <div className="max-w-screen-xl h-[500px] pt-44 my-8 bg-slate-100 mx-auto text-center" >
      <CiShoppingCart className="mx-auto text-5xl  text-gray-500" />
      <h2>Your Shopping Cart is Empty!</h2>
      <div className="py-2  items-center text-center">
        <button className="w-full md:w-52 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse">Shop Now</button>
      </div>
    </div>
  )
}

export default ShoppingCart