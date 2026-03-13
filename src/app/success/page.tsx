'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CheckCircle, Package, Phone } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || 'N/A'
  const method = searchParams.get('method') || 'cod'

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center py-20">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-brand-sage" />
          </div>

          <h1 className="font-heading text-3xl font-bold text-brand-dark mb-2">
            Order Confirmed! 🎉
          </h1>
          <p className="text-gray-500 mb-6">
            Thank you for shopping with ARELYN
          </p>

          <div className="bg-brand-cream rounded-lg p-4 mb-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Order ID</span>
              <span className="font-mono font-medium text-brand-dark">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Payment</span>
              <span className="font-medium text-brand-dark capitalize">{method === 'cod' ? 'Cash on Delivery' : method}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="font-medium text-brand-sage">
                {method === 'cod' ? 'Confirmed' : 'Payment Received'}
              </span>
            </div>
          </div>

          <div className="space-y-3 text-left mb-6">
            <div className="flex items-start gap-3">
              <Package size={18} className="text-brand-rose mt-0.5" />
              <div>
                <p className="text-sm font-medium text-brand-dark">Delivery Timeline</p>
                <p className="text-xs text-gray-500">Sylhet: 1-2 days · Outside Sylhet: 3-5 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-brand-rose mt-0.5" />
              <div>
                <p className="text-sm font-medium text-brand-dark">Need Help?</p>
                <p className="text-xs text-gray-500">Message us on Facebook or call us anytime</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/shop" className="block">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
            <Link href="/" className="block text-sm text-gray-500 hover:text-brand-dark transition-colors">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  )
}
