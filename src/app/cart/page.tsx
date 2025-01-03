'use client';

import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useCart(); // Make sure updateQuantity function is added in your context

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to checkout.');
    } else {
      router.push('/checkout'); // Redirect to checkout page
    }
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Don't allow less than 1
    updateQuantity(id, newQuantity); // Function to update quantity in context
  };

  return (
    <main className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-800 font-sans drop-shadow-md">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-12">
          <div className="flex justify-center items-center flex-col">
            <ShoppingCart size={80} className="text-gray-400 mb-4" />
            <p>Your cart is empty</p>
            <Link href="/products">
              <Button className="mt-4 bg-blue-700 text-white hover:bg-blue-800 rounded-md">Shop</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-4 sm:grid-cols-5 text-center font-medium bg-[#d4e4ff] py-3 rounded-t-lg">
              <div className="col-span-2 sm:col-span-2 text-left px-2">Product</div>
              <div className="hidden sm:block">Price</div>
              <div className="hidden sm:block">Quantity</div>
              <div className="flex justify-between items-center px-2 sm:block">Subtotal</div>
            </div>

            {/* Loop through cart items dynamically */}
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-4 sm:grid-cols-5 items-center py-4">
                <div className="col-span-2 sm:col-span-2 flex items-center gap-4 px-2">
                  <Image
                    src={item.image} // Dynamic product image URL
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <p className="font-medium text-[#333333] text-sm sm:text-base">{item.name}</p>
                </div>
                <div className="text-center text-sm sm:text-base text-[#555555] hidden sm:block">
                  Rs. {item.price.toFixed(2)}
                </div>
                <div className="text-center hidden sm:block">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="w-14 h-8 text-center border rounded-md"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                <div className="flex justify-between items-center px-2 text-sm sm:text-base font-medium text-[#333333]">
                  <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                  <button className="text-[#c23535] ml-2" onClick={() => handleRemove(item.id)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-2/5 p-6 bg-[#d4e4ff] rounded-xl">
            <h2 className="text-lg text-center md:text-[24px] font-semibold mb-4 text-black">Cart Totals</h2>
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm sm:text-base font-bold text-black">Subtotal</p>
              <p className="text-md sm:text-base font-semibold text-gray-800">
                Rs. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-base sm:text-lg font-bold text-gray-800">Total</p>
              <p className="text-[16px] md:text-[20px] font-semibold text-[#3467d5]">
                Rs. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              className="w-full py-3 bg-gray-950 hover:bg-gray-800 text-white text-[18px] md:text-[20px] rounded-xl "
            >
              Check Out
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;