'use client'

import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import CartItemComponent from '@/components/cart/CartItem'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ShoppingBag, ArrowLeft } from 'lucide-react'

export default function CartPage() {
  const { items, total, clearCart } = useCartStore()
  const cartTotal = total()
  const shipping = cartTotal > 3000 ? 0 : 120

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-heading text-3xl font-bold text-brand-dark mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg font-medium mb-2">Your cart is empty</p>
            <p className="text-gray-400 mb-6">Looks like you haven&apos;t added anything yet</p>
            <Link href="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{items.length} item{items.length !== 1 ? 's' : ''}</span>
                <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-600 transition-colors">
                  Clear all
                </button>
              </div>
              <div>
                {items.map((item, i) => (
                  <CartItemComponent key={`${item.product.id}-${item.size}-${item.color}-${i}`} item={item} />
                ))}
              </div>
              <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-brand-rose hover:text-brand-rose/80 mt-4 transition-colors">
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>
            </div>

            <div className="bg-brand-cream rounded-xl p-6 h-fit">
              <h3 className="font-semibold text-brand-dark mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">Free shipping on orders over ৳3,000</p>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-brand-dark text-base">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal + shipping)}</span>
                </div>
              </div>
              <Link href="/checkout" className="block mt-6">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
