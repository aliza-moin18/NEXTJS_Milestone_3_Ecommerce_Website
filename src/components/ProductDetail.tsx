// // components/ProductDetail.js

// import Image from 'next/image';

// const ProductDetail = ({ product, addToCart }) => {
//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex flex-col md:flex-row items-center space-x-6">
//         {/* Replace <img> with <Image> component from Next.js */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={320} // Specify width
//           height={320} // Specify height
//           className="object-cover rounded-lg"
//         />
//         <div className="mt-6 md:mt-0">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-xl font-bold mt-4">${product.price}</p>
//           <button
//             onClick={() => addToCart(product)}
//             className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



import Image from 'next/image';

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

// Define the Props interface for ProductDetail
interface ProductDetailProps {
  product: Product;                    // `product` should be of type `Product`
  addToCart: (product: Product) => void;  // `addToCart` function accepts a `Product` and returns `void`
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, addToCart }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center space-x-6">
        {/* Replace <img> with <Image> component from Next.js */}
        <Image
          src={product.image}
          alt={product.name}
          width={320} // Specify width
          height={320} // Specify height
          className="object-cover rounded-lg"
        />
        <div className="mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-bold mt-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
