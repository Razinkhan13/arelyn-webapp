import { ShieldCheck, RefreshCw, Truck, Lock, Star } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: '100% Authentic', desc: 'Verified products' },
  { icon: Truck, label: 'Fast Delivery', desc: 'Same-day in Sylhet' },
  { icon: RefreshCw, label: '7-Day Returns', desc: 'Hassle-free returns' },
  { icon: Lock, label: 'Secure Payment', desc: 'bKash · Nagad · COD' },
  { icon: Star, label: '5-Star Rated', desc: '500+ happy customers' },
]

type TrustBadgesProps = {
  variant?: 'row' | 'grid'
}

export default function TrustBadges({ variant = 'row' }: TrustBadgesProps) {
  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2.5">
            <Icon size={18} className="text-brand-sage flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-brand-dark leading-tight">{label}</p>
              <p className="text-xs text-gray-500 leading-tight">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {badges.map(({ icon: Icon, label, desc }) => (
        <div key={label} className="flex flex-col items-center gap-1 text-center">
          <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center">
            <Icon size={20} className="text-brand-sage" />
          </div>
          <p className="text-xs font-semibold text-brand-dark">{label}</p>
          <p className="text-xs text-gray-500">{desc}</p>
        </div>
      ))}
    </div>
  )
}
