import Link from 'next/link'
import { Instagram } from 'lucide-react'

const looks = [
  {
    id: 1,
    tag: '@nadia_style',
    caption: 'Silk Elegance Saree in Red 🌹',
    href: '/product/1',
    bg: 'from-brand-rose/30 to-brand-blush',
    label: 'Shop This Look',
  },
  {
    id: 2,
    tag: '@fatima.fashion',
    caption: 'Embroidered Salwar Kameez 💕',
    href: '/product/2',
    bg: 'from-brand-gold/30 to-brand-cream',
    label: 'Shop This Look',
  },
  {
    id: 3,
    tag: '@sadia.ootd',
    caption: 'Designer Kurti Collection 🌸',
    href: '/product/3',
    bg: 'from-brand-sage/20 to-white',
    label: 'Shop This Look',
  },
  {
    id: 4,
    tag: '@erin.style',
    caption: 'Bridal Lehenga Choli ✨',
    href: '/product/6',
    bg: 'from-purple-100 to-brand-blush',
    label: 'Shop This Look',
  },
]

export default function ShopTheLookSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-brand-rose mb-2">
            <Instagram size={18} />
            <p className="font-medium text-sm uppercase tracking-[0.2em]">@arelyn.official</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Shop the Look
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Real customers, real style. Tag us on Instagram to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {looks.map((look) => (
            <Link key={look.id} href={look.href} className="group block">
              <div className={`relative aspect-square bg-gradient-to-br ${look.bg} rounded-xl overflow-hidden`}>
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Instagram size={28} className="text-brand-dark/30 mb-2" />
                  <p className="text-xs font-medium text-brand-dark/50">{look.tag}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-all duration-300 rounded-xl" />
                <div className="absolute inset-0 flex flex-col items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 text-brand-rose rounded-full p-1.5 self-end">
                    <Instagram size={14} />
                  </div>
                  <div className="w-full">
                    <p className="text-white text-xs font-medium leading-tight mb-1.5">{look.caption}</p>
                    <span className="inline-block bg-brand-rose text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {look.label}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-rose hover:text-brand-rose/80 font-medium transition-colors"
          >
            <Instagram size={16} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
