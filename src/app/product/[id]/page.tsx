import { notFound } from 'next/navigation'
import { sampleProducts } from '@/lib/products'
import ProductPageClient from '@/components/product/ProductPageClient'

export function generateStaticParams() {
  return sampleProducts.map((product) => ({ id: product.id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = sampleProducts.find((p) => p.id === params.id)

  if (!product) {
    return notFound()
  }

  return <ProductPageClient product={product} relatedProducts={sampleProducts} />
}
