'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-brand-cream rounded-xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blush to-brand-cream">
          <div className="text-center">
            <ShoppingBag size={80} className="mx-auto text-brand-rose/20 mb-3" />
            <span className="text-brand-dark/30 font-heading text-lg">{name}</span>
          </div>
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-20 h-20 rounded-lg bg-brand-cream flex items-center justify-center border-2 transition-colors ${
                selectedIndex === i ? 'border-brand-rose' : 'border-transparent'
              }`}
            >
              <ShoppingBag size={20} className="text-brand-rose/30" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
