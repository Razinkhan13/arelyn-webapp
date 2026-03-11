import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-blush via-white to-brand-cream min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-brand-rose font-medium text-sm uppercase tracking-[0.2em] mb-4">
            New Collection 2026
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-brand-dark leading-tight mb-6">
            Elegance
            <br />
            <span className="text-brand-rose">Redefined</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover our curated collection of beautiful fashion pieces designed for the modern Bangladeshi woman. From traditional sarees to contemporary kurtis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-rose text-white font-medium rounded-md hover:bg-brand-rose/90 transition-all duration-200"
            >
              Shop Now
            </Link>
            <Link
              href="/shop?category=new"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-dark text-brand-dark font-medium rounded-md hover:bg-brand-dark hover:text-white transition-all duration-200"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
