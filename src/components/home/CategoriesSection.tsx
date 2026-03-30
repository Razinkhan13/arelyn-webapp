import Link from 'next/link'

const categories = [
  {
    name: 'Sarees',
    subtitle: 'Timeless elegance',
    href: `/shop?category=${encodeURIComponent('Sarees')}`,
    bg: 'from-brand-rose/20 to-brand-blush',
    accent: 'text-brand-rose',
    emoji: '🥻',
  },
  {
    name: 'Kurtis',
    subtitle: 'Modern comfort',
    href: `/shop?category=${encodeURIComponent('Kurtis')}`,
    bg: 'from-brand-gold/20 to-brand-cream',
    accent: 'text-brand-gold',
    emoji: '👗',
  },
  {
    name: 'Salwar Kameez',
    subtitle: 'Classic appeal',
    href: `/shop?category=${encodeURIComponent('Salwar Kameez')}`,
    bg: 'from-brand-sage/20 to-white',
    accent: 'text-brand-sage',
    emoji: '✨',
  },
  {
    name: 'Lehengas',
    subtitle: 'Bridal & festive',
    href: `/shop?category=${encodeURIComponent('Lehengas')}`,
    bg: 'from-purple-100 to-brand-blush',
    accent: 'text-purple-600',
    emoji: '💜',
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-rose font-medium text-sm uppercase tracking-[0.2em] mb-2">
            Browse By Category
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Shop Your Style
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div
                className={`aspect-[3/4] bg-gradient-to-br ${cat.bg} flex flex-col items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]`}
              >
                <span className="text-5xl">{cat.emoji}</span>
                <div className="text-center px-3">
                  <p className={`font-heading text-lg font-bold ${cat.accent}`}>{cat.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-brand-rose/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/0 group-hover:bg-white/90 transition-all duration-300">
                <span className="block text-center text-brand-rose text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
