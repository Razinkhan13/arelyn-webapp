'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { sampleProducts } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import ProductGallery from '@/components/product/ProductGallery'
import SizeGuide from '@/components/product/SizeGuide'
import RelatedProducts from '@/components/product/RelatedProducts'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Toast from '@/components/ui/Toast'
import { ShoppingBag, Heart, Truck, Shield, RotateCcw } from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const product = sampleProducts.find((p) => p.id === params.id)
  const addItem = useCartStore((s) => s.addItem)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [showToast, setShowToast] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    )
  }

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return
    addItem(product, selectedSize, selectedColor)
    setShowToast(true)
  }

  return (
    <>
      {showToast && (
        <Toast message="Added to cart!" type="success" onClose={() => setShowToast(false)} />
      )}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} name={product.name} />

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex gap-2 mb-2">
                  {product.isNew && <Badge variant="new">New</Badge>}
                  {discount > 0 && <Badge variant="sale">-{discount}% Off</Badge>}
                </div>
                <h1 className="font-heading text-3xl font-bold text-brand-dark">{product.name}</h1>
                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-brand-dark">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <span className="text-lg text-gray-400 line-through">{formatPrice(product.compareAtPrice)}</span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm text-brand-dark">Size</h3>
                  <SizeGuide />
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm rounded-md border-2 transition-all ${
                        selectedSize === size
                          ? 'border-brand-rose bg-brand-rose text-white'
                          : 'border-gray-200 text-gray-700 hover:border-brand-rose'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="font-semibold text-sm text-brand-dark mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-sm rounded-md border-2 transition-all ${
                        selectedColor === color
                          ? 'border-brand-rose bg-brand-rose text-white'
                          : 'border-gray-200 text-gray-700 hover:border-brand-rose'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                  size="lg"
                  className="flex-1"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart size={18} />
                </Button>
              </div>

              {!selectedSize && !selectedColor && (
                <p className="text-sm text-gray-400">Please select a size and color</p>
              )}

              {/* Features */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck size={16} className="text-brand-sage" />
                  <span>Free delivery in Sylhet · ৳60-120 outside Sylhet</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield size={16} className="text-brand-sage" />
                  <span>100% authentic products</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RotateCcw size={16} className="text-brand-sage" />
                  <span>Easy returns within 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={sampleProducts} currentId={product.id} />
      </div>
    </>
  )
}
