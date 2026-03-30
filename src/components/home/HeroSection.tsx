import Link from 'next/link'

const highlights = ['Sarees', 'Kurtis', 'Lehengas', 'Salwar Kameez']

export default function HeroSection() {
  return (
    <section className="relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-16">
          {/* Text side */}
          <div className="relative z-10 order-2 lg:order-1">
            <span className="inline-block bg-brand-rose/10 text-brand-rose font-semibold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              New Collection — 2026
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] mb-6">
              Elegance
              <br />
              <span className="text-brand-rose italic">Redefined</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-lg">
              Discover our curated collection of beautiful fashion pieces designed for the modern
              Bangladeshi woman — from timeless sarees to contemporary kurtis.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((cat) => (
                <Link
                  key={cat}
                  href={`/shop?category=${encodeURIComponent(cat)}`}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-brand-dark/20 text-brand-dark hover:border-brand-rose hover:text-brand-rose transition-colors duration-200"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-rose text-white font-semibold rounded-full hover:bg-brand-rose/90 transition-all duration-200 shadow-lg shadow-brand-rose/30"
              >
                Shop Now
              </Link>
              <Link
                href="/shop?category=new"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-brand-dark text-brand-dark font-semibold rounded-full hover:bg-brand-dark hover:text-white transition-all duration-200"
              >
                New Arrivals
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-brand-dark/10">
              <div>
                <p className="font-heading font-bold text-2xl text-brand-dark">5,000+</p>
                <p className="text-gray-500 text-xs">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-brand-dark/10" />
              <div>
                <p className="font-heading font-bold text-2xl text-brand-dark">500+</p>
                <p className="text-gray-500 text-xs">Styles Available</p>
              </div>
              <div className="h-8 w-px bg-brand-dark/10" />
              <div>
                <p className="font-heading font-bold text-2xl text-brand-dark">4.9★</p>
                <p className="text-gray-500 text-xs">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-rose/10 via-brand-blush to-brand-gold/10 rounded-3xl" />

              {/* Main visual card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-rose/20 to-brand-blush aspect-[3/4] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-heading text-6xl font-bold text-brand-rose/20 mb-4">
                    ARELYN
                  </p>
                  <p className="text-brand-dark/50 text-sm">Fashion Collection 2026</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-brand-rose text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                Up to 30% Off
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white text-brand-dark text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg border border-brand-cream">
                🚚 Free Delivery ৳2,000+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
