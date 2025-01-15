import React from 'react';
import { Product } from '@/app/types/types';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      name: product.name, 
      price: product.price,
      quantity: 1,
      id: product.id,
    };
    addToCart(cartItem);
  };

  // Function to handle Buy Now functionality
  const handleBuyNow = () => {
    const cartItem = {
      name: product.name,  
      price: product.price,
      quantity: 1,
      id: product.id,
    };
    addToCart(cartItem);

    window.location.href = '/checkout';
  };

  return (
    <motion.div
      className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col space-y-6"  // Increased space-y for more gap between sections
      whileHover={{ scale: 1.05 }} // Scale on hover
      initial={{ opacity: 0 }} // Initial opacity before animation
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 0.5 }} // Animation duration
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }} // Start with invisible and slightly moved down
        transition={{ duration: 0.5 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-72 object-cover rounded-md"
        />
      </motion.div>

      <div className="flex-1 flex flex-col space-y-6">  {/* Increased space-y for more gap between elements */}
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>

        <div className="flex justify-between items-center gap-6">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <div className="flex gap-6"> {/* Increased gap between buttons */}
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="bg-[#b08463] text-white py-2 px-6 rounded-md hover:bg-[#b06e46] transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};