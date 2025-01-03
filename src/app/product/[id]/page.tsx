// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useCart } from '@/context/CartContext'; 
// import { useRouter } from 'next/navigation';
// import { products } from '@/lib/db'; 

// export default function ProductDetailPage({ params }: { params: { id: number } }) {
//   const [product, setProduct] = useState<product | null>(null);
//   const { addToCart } = useCart();
//   const router = useRouter();

//   // Fetching product details from API
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`/api/products/${params.id}`);
//         if (!response.ok) throw new Error("Failed to fetch product");
//         const data = await response.json();
        
//         console.log('Fetched product:', data);
//         setProduct(data); // Update state with the fetched product data
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProduct(null);
//       }
//     };

//     fetchProduct();
//   }, [params.id]);

//   if (!product) {
//     return <Loading />;  // Show loading until product is fetched
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//       image: product.src,  // Assuming `src` is the image URL
//     });
//     router.push('/cart');  // Redirect to the cart after adding the product
//   };

//   return (
//     <main className="container mx-auto p-6 bg-gradient-to-br from-teal-100 to-orange-100 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
//         <div className="relative">
//           {/* Product Image */}
//           <Image
//             src={product.src} // Image URL
//             alt={product.name}
//             width={600}
//             height={400}
//             className="w-full h-64 object-cover rounded-t-lg"
//           />
//         </div>
        
//         <div className="p-6">
//           <h1 className="text-3xl font-semibold text-teal-800 mb-3">{product.name}</h1>
//           <p className="text-gray-600 mb-4">{product.description}</p>
//           <p className="text-orange-600 text-2xl font-semibold mb-6">
//             Rs. {product.price.toFixed(2)} {/* Assuming price is in your local currency */}
//           </p>
          
//           <div className="flex justify-between items-center mb-4">
//             {/* Product quantity input (optional) */}
//             <label className="text-lg text-gray-700">Quantity:</label>
//             <input
//               type="number"
//               defaultValue={1}
//               min={1}
//               className="w-14 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
//             />
//           </div>

//           {/* Add to Cart button */}
//           <button
//             onClick={handleAddToCart}
//             className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext'; 
import { useRouter } from 'next/navigation';
// Import the correct Product type
import { Products } from '@/lib/db';  

export default function ProductDetailPage({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null); // Fixed Type
  const { addToCart } = useCart();
  const router = useRouter();

  // Fetching product details from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        
        console.log('Fetched product:', data);
        setProduct(data); // Update state with the fetched product data
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <Loading />;  // Show loading until product is fetched
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.src,  // Assuming `src` is the image URL
    });
    router.push('/cart');  // Redirect to the cart after adding the product
  };

  return (
    <main className="container mx-auto p-6 bg-gradient-to-br from-teal-100 to-orange-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        <div className="relative">
          {/* Product Image */}
          <Image
            src={product.src} // Image URL
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-teal-800 mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-orange-600 text-2xl font-semibold mb-6">
            Rs. {product.price.toFixed(2)} {/* Assuming price is in your local currency */}
          </p>
          
          <div className="flex justify-between items-center mb-4">
            {/* Product quantity input (optional) */}
            <label className="text-lg text-gray-700">Quantity:</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-14 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
