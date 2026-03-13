'use client'

import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import CartItemComponent from './CartItem'
import Link from 'next/link'
import { X, ShoppingBag } from 'lucide-react'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, total } = useCartStore()
  const cartTotal = total()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="font-heading text-lg font-bold text-brand-dark">
              Shopping Bag ({items.length})
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Your bag is empty</p>
                <p className="text-gray-400 text-sm mt-1">Start shopping to add items</p>
              </div>
            ) : (
              items.map((item, i) => (
                <CartItemComponent key={`${item.product.id}-${item.size}-${item.color}-${i}`} item={item} />
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-100 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-brand-dark">Subtotal</span>
                <span className="font-bold text-brand-dark text-lg">{formatPrice(cartTotal)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full py-3 bg-brand-rose text-white text-center font-medium rounded-md hover:bg-brand-rose/90 transition-all"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="block w-full py-3 border border-gray-200 text-brand-dark text-center font-medium rounded-md hover:bg-gray-50 transition-all"
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
