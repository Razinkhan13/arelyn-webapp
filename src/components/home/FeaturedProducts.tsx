import { sampleProducts } from '@/lib/products'
import ProductCard from '@/components/shop/ProductCard'
import Link from 'next/link'

export default function FeaturedProducts() {
  const featured = sampleProducts.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-rose font-medium text-sm uppercase tracking-[0.2em] mb-2">
            Curated For You
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Featured Collection
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-rose text-brand-rose font-medium rounded-md hover:bg-brand-rose hover:text-white transition-all duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
