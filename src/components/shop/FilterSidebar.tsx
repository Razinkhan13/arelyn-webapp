'use client'

interface FilterSidebarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              selectedCategory === '' ? 'text-brand-rose font-medium' : 'text-gray-600 hover:text-brand-dark'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat ? 'text-brand-rose font-medium' : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-3">
          Size
        </h3>
        <div className="flex flex-wrap gap-2">
          {['S', 'M', 'L', 'XL', 'Free Size'].map((size) => (
            <span
              key={size}
              className="px-3 py-1 text-xs border border-gray-200 rounded-full text-gray-600 hover:border-brand-rose hover:text-brand-rose cursor-pointer transition-colors"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
