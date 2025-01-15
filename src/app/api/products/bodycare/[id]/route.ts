// app/api/products/body/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); 

  const products = [
    {
      id: 1,
      name: 'Body Lotion',
      price: 12.99,
      description: 'Moisturizing body lotion for dry skin.',
      image: '/images/product7.jpg',
      category: 'body',
    },
    {
      id: 2,
      name: 'Body Scrub',
      price: 18.99,
      description: 'Exfoliating scrub for soft skin.',
      image: '/images/product8.jpg',
      category: 'body',
    },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id.toString() === id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}