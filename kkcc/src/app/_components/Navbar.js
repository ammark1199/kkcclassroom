"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  BellIcon,
  UserCircleIcon,
  Bars3Icon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";

export default function Navbar({ onMenuToggle }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] mr-2"
            onClick={onMenuToggle}
          >
            <Bars3Icon className="w-5 h-5 text-[#FF637A]" />
          </button>
          <Link href="/" className="flex items-center">
            <Image 
              src="/KKC_Logo.png" 
              alt="KKC Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/shop" className="hidden md:block text-sm font-medium text-[#FF637A] hover:text-[#e04d65] transition">
            Shop
          </Link>
          <Link href="/donate" className="text-sm font-medium text-[#FF637A] hover:text-[#e04d65] transition">
            Donate
          </Link>
          
          <Link href="/shop" className="md:hidden text-gray-600 hover:text-black">
            <ShoppingBagIcon className="w-6 h-6" />
          </Link>
          
          <button className="text-gray-600 hover:text-black">
            <BellIcon className="w-6 h-6" />
          </button>
          
          <Link href="/account/profile" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#FF637A] flex items-center justify-center text-white font-medium">
              <UserCircleIcon className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}