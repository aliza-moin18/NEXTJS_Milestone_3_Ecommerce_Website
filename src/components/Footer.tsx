"use client";

import Link from "next/link"; 
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#b08463] text-white py-10">
      <div className="container mx-auto px-4">

      {/* Grid Layout with 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Column 1: Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#b9937b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#b9937b] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#b9937b] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#b9937b] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">1234 Street Address, City</p>
            <p className="mb-2">Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

        {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-6">
              {/* LinkedIn */}
              <Link href="https://linkedin.com" passHref target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-white transition-colors" />
              </Link>
              {/* GitHub */}
              <Link href="https://github.com" passHref target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-white transition-colors" />
              </Link>
              {/* Twitter */}
              <Link href="https://twitter.com" passHref target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

        {/* Column 4: Subscribe Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md text-gray-800 focus:outline-none"
                required
              />
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#a38462] font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2025 GlowVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;