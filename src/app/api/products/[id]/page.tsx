// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Products } from '@/lib/db'; 

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; // Get product ID from URL
  const productData = Products.filter((item: { id: string; }) => item.id === id);

  if (productData.length === 0) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(productData[0]); // Return the first match
}
