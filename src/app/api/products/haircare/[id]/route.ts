// app/api/products/hair/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // Get the product ID from URL

  const products = [
    {
      id: 1,
      name: 'Shampoo',
      price: 19.99,
      description: 'A nourishing shampoo for healthy hair.',
      image: '/images/product1.jpg',
      category: 'hair',
    },
    {
      id: 2,
      name: 'Conditioner',
      price: 15.99,
      description: 'Conditioner for smooth and shiny hair.',
      image: '/images/product2.jpg',
      category: 'hair',
    },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id.toString() === id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}