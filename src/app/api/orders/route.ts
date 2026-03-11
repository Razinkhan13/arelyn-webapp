import { NextRequest, NextResponse } from 'next/server'

// In production, orders would be stored in Supabase
const orders: Record<string, unknown>[] = []

export async function GET() {
  return NextResponse.json({ orders })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const order = {
    id: body.orderId,
    ...body,
    createdAt: new Date().toISOString(),
  }
  orders.push(order)
  return NextResponse.json({ success: true, order })
}
