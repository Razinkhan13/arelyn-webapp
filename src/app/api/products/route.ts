import { NextResponse } from 'next/server'
import { sampleProducts } from '@/lib/products'

export async function GET() {
  return NextResponse.json({ products: sampleProducts })
}
