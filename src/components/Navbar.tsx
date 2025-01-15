"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItemsInCart = cart?.reduce(
    (total: number, item: CartItem) => total + item.quantity, 
    0
  ) || 0;

  return (
    <header className="bg-white shadow-sm p-2 rounded-[44px] m-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Left side: Search input (Visible on larger screens only) */}
        <div className="flex items-center gap-2 flex-1 relative hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="input-text bg-[#faf7ed] border-none pl-[40px] rounded-[5px] bg-transparent text-black text-[18px] font-outfit h-[30px] w-[250px] focus:outline-none custom-underline"
          />
          <FaSearch className="absolute left-2 text-black text-2xl" />
        </div>

        {/* Centered Logo */}
        <h1 className="text-3xl md:text-5xl text-[#b9937b] text-center flex-1 mx-2 mr-80">GlowVibe</h1>

        {/* Right side: Icons (Shopping, Wishlist, Login) */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/cart">
            <div className="relative">
              <FaShoppingCart
                size={40}
                className="text-black p-2 hover:text-[#b9937b] transition-colors duration-300"
              />
              {totalItemsInCart > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </div>
          </Link>
          <Link href="/">
            <FaRegHeart
              size={40}
              className="text-black p-2 hover:text-[#b9937b] transition-colors duration-300"
            />
          </Link>
          <Link href="/login">
            <FaUserCircle
              size={40}
              className="text-black p-2 hover:text-[#b9937b] transition-colors duration-300"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (only shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/cart">
            <FaShoppingCart
              size={42}
              className="text-[#b9937b] p-2 hover:text-[#48cfad] transition-colors duration-300"
            />
          </Link>
          <Link href="/">
            <FaRegHeart
              size={42}
              className="text-black p-2 hover:text-[#48cfad] transition-colors duration-300"
            />
          </Link>
          <Link href="/login">
            <FaUserCircle
              size={42}
              className="text-black p-2 hover:text-[#48cfad] transition-colors duration-300"
            />
          </Link>

          {/* Search Input for Mobile */}
          <div className="mt-4 w-full relative">
            <input
              type="text"
              placeholder="Search..."
              className="input-text border-none pl-[40px] rounded-[5px] bg-transparent text-blaxk text-[18px] font-outfit w-full focus:outline-none custom-underline"
            />
            <FaSearch className="absolute left-2 text-[#66FCF1] text-2xl" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
