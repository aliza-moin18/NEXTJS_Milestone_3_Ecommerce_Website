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

        {/* Centered Navbar Links (Desktop) */}
        <nav className="hidden md:flex flex-1 justify-center font-bold text-xl gap-16">
          <Link href="/" className="hover:text-[#b9937b] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#b9937b] transition-colors">About</Link>
          <Link href="/checkout" className="hover:text-[#b9937b] transition-colors">Shop</Link>
          <Link href="/hair" className="hover:text-[#b9937b] transition-colors">Hair</Link>
          <Link href="/face" className="hover:text-[#b9937b] transition-colors">Face</Link>
          <Link href="/lips" className="hover:text-[#b9937b] transition-colors">Lips</Link>
          <Link href="/body" className="hover:text-[#b9937b] transition-colors">Body</Link>
          <Link href="/login" className="hover:text-[#b9937b] transition-colors">Login</Link>
        </nav>
      </div>

      {/* Mobile Menu (only shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black text-white p-4 space-y-4">
          <Link href="/" className="hover:text-[#b9937b] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#b9937b] transition-colors">About</Link>
          <Link href="/checkout" className="hover:text-[#b9937b] transition-colors">Shop</Link>
          <Link href="/hair" className="hover:text-[#b9937b] transition-colors">Hair</Link>
          <Link href="/face" className="hover:text-[#b9937b] transition-colors">Face</Link>
          <Link href="/lips" className="hover:text-[#b9937b] transition-colors">Lips</Link>
          <Link href="/body" className="hover:text-[#b9937b] transition-colors">Body</Link>
          <Link href="/login" className="hover:text-[#b9937b] transition-colors">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;