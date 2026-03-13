import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Fatima Ahmed',
    location: 'Dhaka',
    text: 'The quality of ARELYN sarees is exceptional! I received so many compliments at the wedding. Will definitely order again.',
    rating: 5,
  },
  {
    name: 'Nusrat Jahan',
    location: 'Sylhet',
    text: 'Love the modern kurti designs. Perfect fit and the fabric is so comfortable for daily wear. Fast delivery too!',
    rating: 5,
  },
  {
    name: 'Tasnim Rahman',
    location: 'Chittagong',
    text: 'Best online shopping experience! The customer service is amazing and the products look exactly like the pictures.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-rose font-medium text-sm uppercase tracking-[0.2em] mb-2">
            What Our Customers Say
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Happy Customers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-cream rounded-xl p-6 relative">
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
