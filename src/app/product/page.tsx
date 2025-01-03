'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/lib/db";
import { FaRegHeart, FaHeart } from "react-icons/fa";

async function ProductData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductData();
      setProducts(data);
    };
    fetchProducts();

    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (productId: number) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId) // Remove from favorites
      : [...favorites, productId]; // Add to favorites

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <main className="container mx-auto px-6 py-12 bg-gradient-to-br from-teal-50 to-pink-100">
      <h1 className="text-4xl font-bold text-teal-800 mb-10 text-center font-sans">
        Our Skin Care Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
          >
            {/* Product Image */}
            <div className="relative mb-6">
              <Image
                src={product.src}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold text-teal-900">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-orange-600 font-bold text-lg">
                ₹{product.price.toFixed(2)} {/* Assuming INR for Skin Care */}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="text-teal-600 hover:text-teal-800 font-semibold"
              >
                View Details
              </Link>
            </div>

            {/* Favorite Button with Heart Icon */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-4 right-4"
              aria-label="Toggle Favorite"
            >
              {favorites.includes(product.id) ? (
                <FaHeart className="w-8 h-8 text-red-500" /> // Filled Heart
              ) : (
                <FaRegHeart className="w-8 h-8 text-gray-400 hover:text-red-500" /> // Outlined Heart
              )}
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}