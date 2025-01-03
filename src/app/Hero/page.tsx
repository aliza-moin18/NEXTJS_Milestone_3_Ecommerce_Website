"use client";

import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative h-screen">

      
      {/* Grid Layout with Main Background Image and Small Images Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Background Image */}
        <div className="relative w-full h-full">
          <Image 
            src="/heroo.jpeg" // Path to the image inside the 'public' folder
            alt="Hero Image 1"
            layout="fill" // Ensures the image takes up the full div
            objectFit="cover" // Makes the image cover the entire div
            className="opacity-90 ml-3" // Optional: Adjust opacity if you need it
          />
        </div>

        {/* Right Side with Two Images in the Same Row */}
        <div className="flex flex-col justify-center items-start space-y-4 px-4 md:px-12 py-8">
          {/* Row with Two Images */}
          <div className="flex w-full justify-between space-x-4">
            {/* First Image */}
            <div className="relative w-1/2 h-[200px]"> {/* Reduced height */}
              <Image 
                src="/hero6.jpeg" // Path to the first small image
                alt="Small Image 1"
                layout="fill"
                objectFit="cover"
                className="border-4 border-black rounded-lg" // Black border and rounded corners
              />
            </div>
            {/* Second Image */}
            <div className="relative w-1/2 h-[200px]"> {/* Reduced height */}
              <Image 
                src="/hero6.jpeg" // Path to the second small image
                alt="Small Image 2"
                layout="fill"
                objectFit="cover"
                className="border-4 border-black rounded-lg" // Black border and rounded corners
              />
            </div>
          </div>

          {/* Hero Text Below Images */}
          <div className="text-center mt-6 bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your Skin, Our Passion
            </h1>
            <p className="text-lg text-white mb-6">Discover our range of natural skincare products.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

