"use client";

import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '../types/types'; 

const BodyPage = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Use Product[] instead of any[]
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products/bodycare');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 mt-10 mb-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Body Care Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BodyPage;