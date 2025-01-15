"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 space-y-12">
        
        {/* Centered Text with Animation */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Discover the Perfect Skincare for Every Part of You
          </h2>
          <p className="text-lg text-gray-600">
            Our skincare range is carefully crafted for all your needs. From nourishing face serums to hydrating body lotions, each product is designed to enhance your natural beauty and leave you feeling rejuvenated.
          </p>
          <p className="text-lg text-gray-600">
            We believe that skincare should be personal and tailored to each area of your body. Thats why weve curated products for your face, body, lips, and hair to make sure every inch of you glows.
          </p>
          <div className="mt-6">
            <motion.button
              className="bg-black hover:bg-gray-950 text-white py-3 px-6 rounded-lg shadow-md transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Explore Our Collection
            </motion.button>
          </div>
        </motion.div>

        {/* Centered Image with Animation */}
        <motion.div
          className="relative w-full max-w-[600px] h-[300px] rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/about.jpeg"  
            alt="Skincare Product"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Detailed Sections for Face, Body, Lips, Hair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Face Section */}
          <motion.div
            className="space-y-4 p-8 bg-[#f0e6d6] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-black">Face Care</h3>
            <p className="text-lg text-gray-600">
              Your face deserves the best! Our facial skincare range includes soothing cleansers, nourishing serums, and rejuvenating masks to keep your skin glowing, hydrated, and youthful.
            </p>
          </motion.div>

          {/* Body Section */}
          <motion.div
            className="space-y-4 p-8 bg-[#f0e6d6] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-black">Body Care</h3>
            <p className="text-lg text-gray-600">
              Pamper your body with our body lotions, scrubs, and oils designed to hydrate and improve skin elasticity. Perfect for daily use, our body care products will leave your skin smooth and nourished all day long.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Lips Section */}
          <motion.div
            className="space-y-4 p-8 bg-[#f0e6d6] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-black">Lip Care</h3>
            <p className="text-lg text-gray-600">
              Keep your lips soft and kissable with our lip balms and scrubs. Packed with nourishing ingredients, our lip care products protect and restore your lips, making them irresistibly smooth.
            </p>
          </motion.div>

          {/* Hair Section */}
          <motion.div
            className="space-y-4 p-8 bg-[#f0e6d6] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-black">Hair Care</h3>
            <p className="text-lg text-gray-600">
              Our hair care line offers everything you need to keep your hair healthy and shiny. From moisturizing shampoos to hydrating hair masks, we’ve got you covered for smooth, beautiful, and nourished hair.
            </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;