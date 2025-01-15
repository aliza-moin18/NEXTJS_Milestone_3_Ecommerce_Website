"use client";  // Mark this component as a client component

import { useCart } from '@/context/CartContext'; // Import the CartContext to manage cart state
import { FaShoppingCart } from 'react-icons/fa'; // Shopping cart icon
import Link from 'next/link';

const CartSidebar = () => {
  const { cart } = useCart(); // Get the cart items from the context

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <div className="relative">
        {/* Cart Icon with Badge */}
        <FaShoppingCart size={30} className="text-gray-700" />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>

      {/* Cart Sidebar Dropdown */}
      {cart.length > 0 && (
        <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-md w-64 p-4">
          <h3 className="font-semibold text-lg">Your Cart</h3>
          <div className="mt-2 space-y-2">
            {/* List Cart Items */}
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between items-center text-sm">
                <span>{product.name}</span>
                {/* Ensure price is a number before calling toFixed */}
                <span>${product.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          {/* Link to Checkout Page */}
          <div className="mt-4">
            <Link href="/checkout">
              <a className="block text-center bg-blue-500 text-white py-2 rounded-md">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;