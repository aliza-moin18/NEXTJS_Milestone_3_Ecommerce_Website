// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { Products } from '@/lib/db'; 

export async function GET() {
  // Return all products as JSON
  return NextResponse.json(Products);
}
