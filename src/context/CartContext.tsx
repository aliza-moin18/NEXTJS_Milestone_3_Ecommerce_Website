"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Cart Item type
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Cart Context Type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

// Create context with initial value as undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add to cart functionality
  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // If exists, increase the quantity
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If item does not exist, add it to the cart
      return [...prevCart, item];
    });
  };

  // Remove from cart functionality
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Update quantity of a specific item in the cart
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; // Don't allow quantity to be less than 1
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
