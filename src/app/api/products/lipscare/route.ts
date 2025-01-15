import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Lip Balm',
      price: 8.99,
      description: 'Hydrating lip balm for dry lips.',
      image: '/lips/balm.jpeg',
      category: 'lips',
    },
    {
      id: 2,
      name: 'Lipstick',
      price: 14.99,
      description: 'Long-lasting matte lipstick.',
      image: '/lips/lipstick.jpg',
      category: 'lips',
    },
    {
      id: 3,
      name: 'Lip Scrub',
      price: 12.99,
      description: 'Exfoliating lip scrub for smooth lips.',
      image: '/lips/scrub.jpeg',
      category: 'lips',
    },
    {
      id: 4,
      name: 'Lip Gloss',
      price: 10.49,
      description: 'Shiny lip gloss for a perfect finish.',
      image: '/lips/gloss.jpeg',
      category: 'lips',
    },
    {
      id: 5,
      name: 'Tinted Lip Balm',
      price: 9.99,
      description: 'Moisturizing tinted lip balm.',
      image: '/lips/tinted.jpeg',
      category: 'lips',
    },
    {
      id: 6,
      name: 'Matte Lipstick',
      price: 16.49,
      description: 'Long-wear matte lipstick in various shades.',
      image: '/lips/matte.jpeg',
      category: 'lips',
    },
    {
      id: 7,
      name: 'Lip Serum',
      price: 18.99,
      description: 'Nourishing lip serum for hydration.',
      image: '/lips/serum.jpeg',
      category: 'lips',
    },
    {
      id: 8,
      name: 'Lip Mask',
      price: 15.99,
      description: 'Overnight lip mask for soft, smooth lips.',
      image: '/lips/mask.jpeg',
      category: 'lips',
    },
    {
      id: 9,
      name: 'Lip Plumper',
      price: 19.49,
      description: 'Lip plumper for fuller lips.',
      image: '/lips/plumper.png',
      category: 'lips',
    },
    {
      id: 10,
      name: 'Exfoliating Lip Balm',
      price: 13.99,
      description: 'Lip balm with exfoliating properties.',
      image: '/lips/scrublips.webp',
      category: 'lips',
    },
    {
      id: 11,
      name: 'Lip Treatment',
      price: 22.99,
      description: 'Lip treatment for deep nourishment.',
      image: '/lips/treatment.jpeg',
      category: 'lips',
    },
    {
      id: 12,
      name: 'Hydrating Lip Cream',
      price: 17.99,
      description: 'Hydrating lip cream for ultimate smoothness.',
      image: '/lips/hydra.jpeg',
      category: 'lips',
    },
  ];

  return NextResponse.json(products);
}
