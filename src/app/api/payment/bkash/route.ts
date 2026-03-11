import { NextRequest, NextResponse } from 'next/server'
import { createPayment, executePayment, queryPayment } from '@/lib/bkash'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, orderId, amount, paymentID } = body

    const baseUrl = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    switch (action) {
      case 'create': {
        const result = await createPayment(
          amount,
          orderId,
          `${baseUrl}/payment/bkash/callback`
        )
        return NextResponse.json(result)
      }
      case 'execute': {
        const result = await executePayment(paymentID)
        return NextResponse.json(result)
      }
      case 'query': {
        const result = await queryPayment(paymentID)
        return NextResponse.json(result)
      }
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('bKash payment error:', error)
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 })
  }
}
