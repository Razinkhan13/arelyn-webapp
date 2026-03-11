'use client'

import { useState, useMemo } from 'react'
import { sampleProducts } from '@/lib/products'
import ProductGrid from '@/components/shop/ProductGrid'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { SlidersHorizontal } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  const categories = useMemo(() => {
    return [...new Set(sampleProducts.map((p) => p.category))]
  }, [])

  const filtered = useMemo(() => {
    let products = [...sampleProducts]
    if (selectedCategory) {
      products = products.filter((p) => p.category === selectedCategory)
    }
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        products.sort((a, b) => b.price - a.price)
        break
      case 'newest':
      default:
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
    return products
  }, [selectedCategory, sortBy])

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-brand-dark">Shop All</h1>
          <p className="text-gray-500 mt-2">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand-dark transition-colors lg:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-rose"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-56 flex-shrink-0`}>
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  )
}
