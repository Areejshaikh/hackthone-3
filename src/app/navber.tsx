
'use client'
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CiHeart, CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

// Navber Array
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Man's Clothes",
    href: "/product",
    description: "In attractive and spectacular colors and designs.",
  },
  {
    title: "Woman's Clothes",
    href: "/product",
    description: "Ladies, your style and tastes are important to us.",
  },
  {
    title: "Kid's Clothes",
    href: "/product",
    description: "For all ages, with happy and beautiful colors.",
  },
  {
    title: "Bags And Shoes",
    href: "/product",
    description: "Suitable for men, women and all tastes and styles.",
  },
];

export function Navber() {
  // State
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 bg-white flex mx-auto max-w-screen-xl w-full items-center justify-between py-5 md:py-6">
    
      <span className="md:pl-0 pl-8 text-2xl font-extrabold tracking-wider">
        SHOP.CO
      </span>

      {/* Mobile Menu Icon */}
      <button
        className="absolute w-6 h-6 sm:w-8 sm:h-8 md:hidden font-extrabold left-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>

      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        }  text-center fixed
             md:block  md:static top-12 left-0 w-full 
             md:w-auto bg-gray-300 md:bg-transparent 
             shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            {/* Shop Link */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* On Sale */}
            <NavigationMenuItem>
              <Link href="/product">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  On sale
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* New Arrivals */}
            <NavigationMenuItem>
              <Link href="/product">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  New Arrivals
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Brands */}
            <NavigationMenuItem>
              <Link href="/product">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Brands
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Search and Icons */}
      <div className="md:flex items-center space-x-6">
                    {/* Search Bar for Desktop */}
                    <div className="hidden md:block relative w-[243px]">
                        <CiSearch className="w-6 h-6 absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-gray-400" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className={`rounded-full pl-12 w-full h-10 bg-gray-200 placeholder:text-sm text-sm`}
                        />
                    </div>
                    {/* Icons */}
                    <div className="flex space-x-4">
                        <CiSearch className="md:hidden w-6 h-6 text-gray-700 cursor-pointer" />
                       <Link href={'/product'}> <CiHeart className="w-6 h-6 text-gray-700 cursor-pointer" /></Link>
                        <Link href={'/shopping-cart'}>
                        <AiOutlineShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" /></Link>
                    </div>
                </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props },) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={"/product"}
          className={cn(
            "fixed block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
