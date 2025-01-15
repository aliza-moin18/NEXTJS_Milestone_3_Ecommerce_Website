// app/api/products/face/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // Get the product ID from URL

  const products = [
    {
      id: 1,
      name: 'Face Cream',
      price: 25.99,
      description: 'Hydrating face cream for dry skin.',
      image: '/images/product3.jpg',
      category: 'face',
    },
    {
      id: 2,
      name: 'Face Wash',
      price: 12.99,
      description: 'Gentle face wash for sensitive skin.',
      image: '/images/product4.jpg',
      category: 'face',
    },
    {
     id: 3,
     name: 'Face Cream',
     price: 25.99,
     description: 'Hydrating face cream for dry skin.',
     image: '/images/product3.jpg',
     category: 'face',
   },
   {
     id: 4,
     name: 'Face Wash',
     price: 12.99,
     description: 'Gentle face wash for sensitive skin.',
     image: '/images/product4.jpg',
     category: 'face',
   },
   {
     id: 5,
     name: 'Face Cream',
     price: 25.99,
     description: 'Hydrating face cream for dry skin.',
     image: '/images/product3.jpg',
     category: 'face',
   },
   {
     id: 6,
     name: 'Face Wash',
     price: 12.99,
     description: 'Gentle face wash for sensitive skin.',
     image: '/images/product4.jpg',
     category: 'face',
   },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id.toString() === id);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}