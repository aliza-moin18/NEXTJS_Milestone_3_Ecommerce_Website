import React from 'react';
import Image from 'next/image';  // Import next/image

// Define Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: string;
}

// Define Props Interface for CardItem
interface CardItemProps {
  product: Product;                    // Product type for the `product` prop
  removeFromCart: (productId: string) => void;  // Function to remove a product from cart
  increaseQuantity: (productId: string) => void;  // Function to increase quantity of the product
  decreaseQuantity: (productId: string) => void;  // Function to decrease quantity of the product
}

const CardItem: React.FC<CardItemProps> = ({
  product,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div>
      {/* Replace <img> with Next.js <Image> component */}
      <Image 
        src={product.image} 
        alt={product.name} 
        width={100} 
        height={100} 
        layout="intrinsic" // Ensures the image maintains aspect ratio
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => increaseQuantity(product.id)}>+</button>
      <button onClick={() => decreaseQuantity(product.id)}>-</button>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CardItem;