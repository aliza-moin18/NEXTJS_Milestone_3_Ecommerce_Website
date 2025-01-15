// app/api/products/lips/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // Get the product ID from URL

  const products = [
    {
      id: 1,
      name: 'Lip Balm',
      price: 8.99,
      description: 'Hydrating lip balm for dry lips.',
      image: '/images/product5.jpg',
      category: 'lips',
    },
    {
      id: 2,
      name: 'Lipstick',
      price: 14.99,
      description: 'Long-lasting matte lipstick.',
      image: '/images/product6.jpg',
      category: 'lips',
    },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id.toString() === id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}