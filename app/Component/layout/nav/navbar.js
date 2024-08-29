'use client'
import React, { useContext } from "react";
import Image from "next/image";
import { Search,ShoppingCart,User  } from "lucide-react";
import { querycategoriesContext } from "../../context";

const Navbar = () => {
  const { query,setQuery } = useContext(querycategoriesContext);
  return (
    <nav className="bg-white border-gray-200 border-b-2 p-5 h-20 w-full z-20 fixed">
      <div className="flex items-center pl-12 w-full">
        <div className="w-3/12 items-center hidden md:flex" id="one">
        <a href="">              <Image
              className=""
              src="/assets/image/shoe.png"
              width={40}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
              alt="Picture of the author"
            /></a>
         <a href=""><span> Wi-PShop</span>  </a>
        </div>
        <div className="w-4/6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search..."
              value={query}
              maxLength={50}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-2/6 flex justify-end">
          <div><ShoppingCart size={25}/></div>
          <div className="pl-6"><User size={25}/></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
