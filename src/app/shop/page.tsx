"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Products } from "@/lib/db";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]); // State for storing products
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    // Fetching data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Set products data
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once when component mounts

  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid rounded-full border-teal-400 border-t-transparent" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-50 to-pink-100 min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-pink-500 text-white p-12 shadow-2xl relative">
        <h1 className="text-5xl font-extrabold text-center font-sans">Shop</h1>
        <p className="text-center mt-4 font-mono text-lg">
          Discover our best skin care products
        </p>
      </header>

      <main className="p-8">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "All"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-teal-600"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Face Care"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-teal-600"
            }`}
            onClick={() => setSelectedCategory("Face Care")}
          >
            Face Care
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Body Care"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-teal-600"
            }`}
            onClick={() => setSelectedCategory("Body Care")}
          >
            Body Care
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Hair Care"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-teal-600"
            }`}
            onClick={() => setSelectedCategory("Hair Care")}
          >
            Hair Care
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Tools"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-teal-600"
            }`}
            onClick={() => setSelectedCategory("Tools")}
          >
            Tools
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-teal-800">{product.name}</h3>
              <p className="text-orange-600 mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;