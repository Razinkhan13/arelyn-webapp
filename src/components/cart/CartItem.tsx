'use client'

import { CartItem as CartItemType } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

export default function CartItemComponent({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100">
      <div className="w-20 h-24 bg-brand-cream rounded-lg flex items-center justify-center flex-shrink-0">
        <ShoppingBag size={24} className="text-brand-rose/30" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-brand-dark truncate">{item.product.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">
          {item.size} · {item.color}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-rose hover:text-brand-rose transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-rose hover:text-brand-rose transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-brand-dark">
              {formatPrice(item.product.price * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.product.id, item.size, item.color)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
