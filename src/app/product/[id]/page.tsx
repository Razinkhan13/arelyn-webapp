import { notFound } from 'next/navigation'
import { sampleProducts } from '@/lib/products'
import ProductPageClient from '@/components/product/ProductPageClient'

export function generateStaticParams() {
  return sampleProducts.map((product) => ({ id: product.id }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = sampleProducts.find((p) => p.id === id)

  if (!product) {
    return notFound()
  }

  return <ProductPageClient product={product} relatedProducts={sampleProducts} />
}
