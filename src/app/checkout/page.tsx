'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cart'
import { formatPrice, generateOrderId } from '@/lib/utils'
import { CustomerInfo, PaymentMethod } from '@/types'
import PaymentSelector from '@/components/checkout/PaymentSelector'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCartStore()
  const cartTotal = total()
  const shipping = cartTotal > 3000 ? 0 : 120
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bkash')
  const [loading, setLoading] = useState(false)
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Sylhet',
    area: '',
    note: '',
  })

  const updateCustomer = (field: keyof CustomerInfo, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const orderId = generateOrderId()

    try {
      if (paymentMethod === 'bkash') {
        const res = await fetch('/api/payment/bkash', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'create',
            orderId,
            amount: cartTotal + shipping,
          }),
        })
        const data = await res.json()
        if (data.bkashURL) {
          window.location.href = data.bkashURL
          return
        }
      } else if (paymentMethod === 'nagad') {
        const res = await fetch('/api/payment/nagad', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'initiate',
            orderId,
            amount: cartTotal + shipping,
          }),
        })
        const data = await res.json()
        if (data.callURL) {
          window.location.href = data.callURL
          return
        }
      }

      // COD or fallback
      clearCart()
      router.push(`/success?orderId=${orderId}&method=${paymentMethod}`)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
        <ShoppingBag size={64} className="text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg font-medium mb-2">Your cart is empty</p>
        <Link href="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-dark mb-6 transition-colors">
          <ArrowLeft size={16} />
          Back to Cart
        </Link>

        <h1 className="font-heading text-3xl font-bold text-brand-dark mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-brand-dark mb-4">Delivery Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customer.name}
                      onChange={(e) => updateCustomer('name', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={customer.phone}
                      onChange={(e) => updateCustomer('phone', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="01XXX-XXXXXX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={customer.email}
                      onChange={(e) => updateCustomer('email', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                    <textarea
                      required
                      value={customer.address}
                      onChange={(e) => updateCustomer('address', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="House, Road, Area"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <select
                      required
                      value={customer.city}
                      onChange={(e) => updateCustomer('city', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                    >
                      <option value="Sylhet">Sylhet</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                    <input
                      type="text"
                      value={customer.area}
                      onChange={(e) => updateCustomer('area', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="Area/Locality"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Order Note</label>
                    <textarea
                      value={customer.note}
                      onChange={(e) => updateCustomer('note', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                      placeholder="Any special instructions..."
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <PaymentSelector selected={paymentMethod} onSelect={setPaymentMethod} />
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-brand-dark mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate mr-2">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="text-brand-dark font-medium flex-shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-brand-dark text-base">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal + shipping)}</span>
                  </div>
                </div>
                <Button type="submit" className="w-full mt-6" size="lg" disabled={loading}>
                  {loading ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order' : `Pay with ${paymentMethod === 'bkash' ? 'bKash' : 'Nagad'}`}
                </Button>
                <p className="text-xs text-gray-400 text-center mt-3">
                  By placing an order, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
