"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">

        {/* Left Section with Text and Animation */}
        <motion.div
          className="flex justify-center items-center h-[600px] bg-[#faf8ed]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center px-4 md:px-12">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Beauty blooms with Skincare.
            </motion.h1>
            <motion.p
              className="text-xl text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Nourish your skin, hair, lips, and body with our premium skincare products designed to enhance your natural beauty and boost your confidence.
            </motion.p>
            <motion.button
              className="bg-black hover:bg-gray-950 mt-8 text-white font-bold py-3 px-12 rounded-[44px] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section with Two Images Side by Side and Animations */}
        <div className="flex justify-between items-center h-[600px] px-8 md:px-12 py-8 bg-[#b9937b]">
          
          {/* First Image with Animation */}
          <motion.div
            className="relative w-full md:w-1/2 h-[400px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/hero1.avif" 
              alt="First Image"
              layout="fill"
              objectFit="cover"
              className="border-4 border-black rounded-lg shadow-lg"
            />
          </motion.div>
          
          {/* Second Image with Animation */}
          <motion.div
            className="relative w-full md:w-1/2 h-[400px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/heroooo.jpeg" 
              alt="Second Image"
              layout="fill"
              objectFit="cover"
              className="border-4 border-black rounded-lg shadow-lg" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;