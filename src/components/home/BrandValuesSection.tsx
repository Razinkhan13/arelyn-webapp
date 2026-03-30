import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react'

const values = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free shipping on orders over ৳2,000 across Bangladesh.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentic Quality',
    description: 'Every piece is carefully selected and quality-checked before dispatch.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '7-day hassle-free return and exchange policy on all orders.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our friendly team is always here to help you via WhatsApp or chat.',
  },
]

export default function BrandValuesSection() {
  return (
    <section className="py-16 bg-white border-y border-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center">
                <Icon size={24} className="text-brand-rose" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-base">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
