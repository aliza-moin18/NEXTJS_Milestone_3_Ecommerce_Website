"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md rounded-[60px] m-2">
      <div className="container mx-auto flex items-center justify-between p-3">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Centered Navbar Links */}
        <nav className="flex-1 flex justify-center font-bold text-xl gap-20"> {/* Increased gap here */}
          <Link href="/" className="hover:text-[#b9937b] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#b9937b] transition-colors">About</Link>
          <Link href="/shop" className="hover:text-[#b9937b] transition-colors">Shop</Link>
          <Link href="/product" className="hover:text-[#b9937b] transition-colors">Product</Link>
          <Link href="/login" className="hover:text-[#b9937b] transition-colors">Login</Link>
        </nav>
      </div>

      {/* Mobile Menu (only shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black p-4 space-y-4">
          <Link href="/" className="text-lg hover:text-[#48cfad]">Home</Link>
          <Link href="/about" className="text-lg hover:text-[#48cfad]">About</Link>
          <Link href="/shop" className="text-lg hover:text-[#48cfad]">Shop</Link>
          <Link href="/product" className="text-lg hover:text-[#48cfad]">Product</Link>
          <Link href="/login" className="text-lg hover:text-[#48cfad]">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
