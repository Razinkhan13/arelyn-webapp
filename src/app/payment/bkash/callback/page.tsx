'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Spinner from '@/components/ui/Spinner'

function BkashCallbackContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'processing' | 'success' | 'failed'>('processing')

  useEffect(() => {
    const paymentID = searchParams.get('paymentID')
    const statusParam = searchParams.get('status')

    if (statusParam === 'success' && paymentID) {
      fetch('/api/payment/bkash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'execute', paymentID }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.transactionStatus === 'Completed') {
            setStatus('success')
            router.push(`/success?orderId=${data.merchantInvoiceNumber || 'N/A'}&method=bkash`)
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
            <p className="text-gray-600 font-medium">Processing your bKash payment...</p>
            <p className="text-gray-400 text-sm mt-1">Please wait, do not close this page</p>
          </>
        )}
        {status === 'failed' && (
          <div className="bg-white rounded-xl p-8 shadow-sm max-w-md">
            <p className="text-red-500 text-lg font-medium mb-2">Payment Failed</p>
            <p className="text-gray-500 text-sm mb-4">Something went wrong with your bKash payment. Please try again.</p>
            <a href="/checkout" className="text-brand-rose hover:underline text-sm">← Return to Checkout</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BkashCallbackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Spinner /></div>}>
      <BkashCallbackContent />
    </Suspense>
  )
}
