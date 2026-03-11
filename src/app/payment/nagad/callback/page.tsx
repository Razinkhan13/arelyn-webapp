'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Spinner from '@/components/ui/Spinner'

function NagadCallbackContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'processing' | 'success' | 'failed'>('processing')

  useEffect(() => {
    const paymentRefId = searchParams.get('payment_ref_id')

    if (paymentRefId) {
      fetch('/api/payment/nagad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify', paymentRefId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'Success') {
            setStatus('success')
            router.push(`/success?orderId=${data.orderId || 'N/A'}&method=nagad`)
          } else {
            setStatus('failed')
          }
        })
        .catch(() => setStatus('failed'))
    } else {
      setStatus('failed')
    }
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center">
        {status === 'processing' && (
          <>
            <Spinner className="mb-4" />
            <p className="text-gray-600 font-medium">Processing your Nagad payment...</p>
            <p className="text-gray-400 text-sm mt-1">Please wait, do not close this page</p>
          </>
        )}
        {status === 'failed' && (
          <div className="bg-white rounded-xl p-8 shadow-sm max-w-md">
            <p className="text-red-500 text-lg font-medium mb-2">Payment Failed</p>
            <p className="text-gray-500 text-sm mb-4">Something went wrong with your Nagad payment. Please try again.</p>
            <a href="/checkout" className="text-brand-rose hover:underline text-sm">← Return to Checkout</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function NagadCallbackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Spinner /></div>}>
      <NagadCallbackContent />
    </Suspense>
  )
}
