'use client'

import Link from 'next/link'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-cream rounded-lg overflow-hidden mb-3">
          {/* Placeholder product visual */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blush to-brand-cream">
            <div className="text-center">
              <ShoppingBag size={48} className="mx-auto text-brand-rose/30 mb-2" />
              <span className="text-sm text-brand-dark/40 font-medium">{product.category}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-all duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && <Badge variant="new">New</Badge>}
            {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
          </div>

          {/* Quick add */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="bg-white rounded-md py-2.5 text-center text-sm font-medium text-brand-dark shadow-lg">
              View Product
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-brand-dark group-hover:text-brand-rose transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-semibold text-brand-dark">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <div className="flex gap-1.5 mt-2">
            {product.colors.slice(0, 3).map((color) => (
              <span key={color} className="text-xs text-gray-500">{color}</span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-400">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
