"use client";

import Link from "next/link";
import Image from "next/image";  
import { motion } from "framer-motion";  // Import Framer Motion
import HeroSection from './Hero/page';
import AboutSection from './about/page';

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <div className="container mx-auto p-1 mt-40 mb-40">
        <motion.h1
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Holistic Beauty Care
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Hair Category */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 1.1 }}   // Scale up more on tap (click)
          >
            <Link href="/hair">
              <div className="border p-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/haircare.jpg"
                  alt="Hair Care"
                  width={300}
                  height={200}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Hair Care</h3>
              </div>
            </Link>
          </motion.div>

          {/* Face Category */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 1.1 }}   // Scale up more on tap (click)
          >
            <Link href="/face">
              <div className="border p-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/herosec.jpeg"
                  alt="Face Care"
                  width={300}
                  height={200}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Face Care</h3>
              </div>
            </Link>
          </motion.div>

          {/* Lips Category */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 1.1 }}   // Scale up more on tap (click)
          >
            <Link href="/lips">
              <div className="border p-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/lipscare.jpg"
                  alt="Lips Care"
                  width={300}
                  height={200}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Lips Care</h3>
              </div>
            </Link>
          </motion.div>

          {/* Body Category */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 1.1 }}   // Scale up more on tap (click)
          >
            <Link href="/body">
              <div className="border p-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <Image
                  src="/bodycare.jpeg"
                  alt="Body Care"
                  width={300}
                  height={500}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Body Care</h3>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <AboutSection />
    </>
  );
};

export default Homepage;