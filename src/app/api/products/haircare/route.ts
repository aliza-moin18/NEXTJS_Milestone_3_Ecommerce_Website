// app/api/products/hair/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Shampoo',
      price: 19.99,
      description: 'A nourishing shampoo for healthy hair.',
      image: '/Hair/Shampoo.jpeg',
      category: 'hair',
    },
    {
      id: 2,
      name: 'Conditioner',
      price: 15.99,
      description: 'Conditioner for smooth and shiny hair.',
      image: '/Hair/conditioner.jpeg',
      category: 'hair',
    },
    {
      id: 3,
      name: 'Hair Serum',
      price: 24.99,
      description: 'Adds shine and reduces frizz.',
      image: '/Hair/Hair-serum.jpeg',
      category: 'hair',
    },
    {
      id: 4,
      name: 'Hair Oil',
      price: 18.99,
      description: 'Nourishes and strengthens hair roots.',
      image: '/Hair/oil.jpeg',
      category: 'hair',
    },
    {
      id: 5,
      name: 'Leave-In Conditioner',
      price: 22.99,
      description: 'Lightweight conditioner for detangling.',
      image: '/Hair/leave in.jpeg',
      category: 'hair',
    },
    {
      id: 6,
      name: 'Deep Conditioning Treatment',
      price: 29.99,
      description: 'Revitalizes and repairs damaged hair.',
      image: '/Hair/deep.jpeg',
      category: 'hair',
    },
    {
      id: 7,
      name: 'Hair Mask',
      price: 32.99,
      description: 'Intensive treatment for smooth, hydrated hair.',
      image: '/Hair/mask.jpeg',
      category: 'hair',
    },
    {
      id: 8,
      name: 'Anti-Hair Loss Shampoo',
      price: 27.99,
      description: 'Strengthens and reduces hair fall.',
      image: '/Hair/shapoo.jpeg',
      category: 'hair',
    },
    {
      id: 9,
      name: 'Color Protect Shampoo',
      price: 23.99,
      description: 'Preserves color and prevents fading.',
      image: '/Hair/color.jpeg',
      category: 'hair',
    },
    {
      id: 10,
      name: 'Volumizing Mousse',
      price: 14.99,
      description: 'Adds volume and lift to flat hair.',
      image: '/Hair/volume.jpeg',
      category: 'hair',
    },
    {
      id: 11,
      name: 'Hair Growth Serum',
      price: 39.99,
      description: 'Stimulates hair growth and nourishes follicles.',
      image: '/Hair/growth.webp',
      category: 'hair',
    },
    {
      id: 12,
      name: 'Smoothing Hair Cream',
      price: 21.99,
      description: 'Smoothens and controls frizz for sleek hair.',
      image: '/Hair/cream.webp',
      category: 'hair',
    },
  ];

  return NextResponse.json(products);
}