import { Product } from '@/types'
import ProductCard from '@/components/shop/ProductCard'

export default function RelatedProducts({ products, currentId }: { products: Product[]; currentId: string }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-brand-dark mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
