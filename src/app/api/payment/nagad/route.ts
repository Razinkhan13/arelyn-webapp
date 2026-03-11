import { NextRequest, NextResponse } from 'next/server'
import { initiatePayment, verifyPayment } from '@/lib/nagad'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, orderId, amount, paymentRefId } = body

    const baseUrl = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    switch (action) {
      case 'initiate': {
        const result = await initiatePayment(
          orderId,
          amount,
          `${baseUrl}/payment/nagad/callback`
        )
        return NextResponse.json(result)
      }
      case 'verify': {
        const result = await verifyPayment(paymentRefId)
        return NextResponse.json(result)
      }
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Nagad payment error:', error)
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 })
  }
}
