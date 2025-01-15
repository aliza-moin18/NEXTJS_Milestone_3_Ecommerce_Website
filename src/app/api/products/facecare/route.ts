// app/api/products/face/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'Glycolic Acid Face Wash',
      price: 10.23,
      description: 'Gel Based Glycolic Face wash helps cleanse away dirt and excessive oils.',
      image: '/Face/facewash.webp',
      category: 'face',
    }, 
    {
     id: 2,
     name: 'Sunblock',
     price: 7.24,
     description: 'Sun protector',
     image: '/Face/Sunblock.webp',
     category: 'face',
   },
   {
     id: 3,
     name: 'Face Cream',
     price: 12.99,
     description: 'Gentle face wash for sensitive skin.',
     image: '/Face/cream.jpeg',
     category: 'face',
   },
   {
     id: 4,
     name: 'Suncreen',
     price: 12.99,
     description:'Shields skin from harmful UV rays.',
     image: '/Face/sunscreen.jpeg',
     category: 'face',
   },
   {
     id: 5,
     name: 'Serums',
     price: 12.99,
     description:'Hydrates and nourishes skin deeply',
     image: '/Face/Serums.jpeg',
     category: 'face',
   },
    {
      id: 6,
      name: 'Foaming Gel Cleanser',
      price: 14.01,
      description: 'Gentle cleanser for sensitive skin.',
      image: '/Face/Cleanser.webp',
      category: 'face',
    },
   {
     id: 7,
     name: 'Sunscreen',
     price: 12.99,
     description: 'Prevents sunburn, protects skin daily.',
     image: '/Face/Sunscreenn.webp',
     category: 'face',
   },
    {
     id: 8,
     name: 'Brighten Me Up - Face Wash',
     price: 25.99,
     description: 'Brighten Me Up Face Wash with Alpha Arbutin & Vitamin E.',
     image: '/Face/brightenfacewash.webp',
     category: 'face',
   },
   {
     id: 9,
     name: 'Face Serums',
     price: 15.04,
     description: 'Targets wrinkles and fine lines.',
     image: '/Face/Serum.jpg',
     category: 'face',
   },
   {
     id: 10,
     name: 'Moisturizing Cream',
     price: 12.99,
     description:'Hydrates, firms, and brightens complexion.',
     image: '/Face/Bright-Beauty-cream.webp',
     category: 'face',
   },
   {
     id: 11,
     name: 'Brightening face cream',
     price: 26.00,
     description: 'Smoothens and nourishes skin deeply.',
     image: '/Face/luxury_moisturizers.webp',
     category: 'face',
   },
   {
     id: 12,
     name: 'Brightening face Serum',
     price: 9.05,
     description: 'Gentle face wash for sensitive skin.',
     image: '/Face/serum2.jpeg',
     category: 'face',
   },
  ];

  return NextResponse.json(products);
}