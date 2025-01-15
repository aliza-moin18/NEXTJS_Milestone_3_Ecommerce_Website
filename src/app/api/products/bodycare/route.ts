// app/api/products/body/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Body Lotion',
      price: 12.99,
      description: 'Moisturizing body lotion for dry skin.',
      image: '/Body/lotion.jpeg',
      category: 'body',
    },
    {
      id: 2,
      name: 'Body Scrub',
      price: 18.99,
      description: 'Exfoliating scrub for soft skin.',
      image: '/Body/scrub.jpeg',
      category: 'body',
    },
    {
      id: 3,
      name: 'Scented Body Cream',
      price: 24.99,
      description: 'Rich body cream with a soothing scent.',
      image: '/Body/smelling.png',
      category: 'body',
    },
    {
      id: 4,
      name: 'Body Butter',
      price: 22.99,
      description: 'Ultra-moisturizing butter for soft, smooth skin.',
      image: '/Body/butter.jpeg',
      category: 'body',
    },
    {
      id: 5,
      name: 'Hand Cream',
      price: 8.99,
      description: 'Nourishing hand cream for dry hands.',
      image: '/Body/hand.jpeg',
      category: 'body',
    },
    {
      id: 6,
      name: 'Foot Cream',
      price: 10.99,
      description: 'Moisturizing foot cream for cracked heels.',
      image: '/Body/foot.jpeg',
      category: 'body',
    },
    {
      id: 7,
      name: 'Exfoliating Glove',
      price: 6.99,
      description: 'Body exfoliation glove for smooth skin.',
      image: '/Body/gloves.jpeg',
      category: 'body',
    },
    {
      id: 8,
      name: 'Body Lotion',
      price: 12.99,
      description: 'Moisturizing body lotion for dry skin.',
      image: '/Body/body-lotion.jpeg',
      category: 'body',
    },
    {
      id: 9,
      name: 'Tanning Oil',
      price: 15.99,
      description: 'Enhances natural tan with a golden glow.',
      image: '/Body/oil.jpeg',
      category: 'body',
    },
    {
      id: 10,
      name: 'Shower Gel',
      price: 9.99,
      description: 'Refreshing body wash for all skin types.',
      image: '/Body/gel.webp',
      category: 'body',
    },
    {
      id: 10,
      name: 'Shower Gel',
      price: 9.99,
      description: 'Refreshing body wash for all skin types.',
      image: '/Body/shower.jpeg',
      category: 'body',
    },
    {
      id: 12,
      name: 'Body Oil',
      price: 17.99,
      description: 'Luxurious body oil for hydrated skin.',
      image: '/Body/body oil.webp',
      category: 'body',
    },
  ];

  return NextResponse.json(products);
}