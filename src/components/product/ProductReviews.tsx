'use client'

import { Star, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

type Review = {
  id: number
  name: string
  location: string
  rating: number
  date: string
  comment: string
  helpful: number
}

const staticReviews: Review[] = [
  {
    id: 1,
    name: 'Nadia Sultana',
    location: 'Sylhet',
    rating: 5,
    date: '2026-02-18',
    comment: 'Absolutely stunning quality! The fabric is so soft and the colour is exactly as shown. I ordered the silk saree for Eid and received so many compliments. Will definitely order again!',
    helpful: 12,
  },
  {
    id: 2,
    name: 'Fatima Begum',
    location: 'Dhaka',
    rating: 5,
    date: '2026-02-10',
    comment: 'Fast delivery to Dhaka, packed beautifully. The salwar kameez fits perfectly in size M. Very happy with the purchase!',
    helpful: 8,
  },
  {
    id: 3,
    name: 'Sadia Rahman',
    location: 'Chittagong',
    rating: 4,
    date: '2026-01-28',
    comment: 'Great product and excellent customer service. The colour is slightly lighter than the photo but still beautiful. Highly recommend ARELYN!',
    helpful: 5,
  },
]

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={s <= rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default function ProductReviews() {
  const [helpfulMap, setHelpfulMap] = useState<Record<number, boolean>>({})

  const avgRating = staticReviews.reduce((sum, r) => sum + r.rating, 0) / staticReviews.length
  const totalReviews = staticReviews.length

  const markHelpful = (id: number) => {
    setHelpfulMap((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="border-t border-gray-100 mt-12 pt-10">
      <div className="max-w-3xl">
        <h2 className="font-heading text-2xl font-bold text-brand-dark mb-6">
          Customer Reviews
        </h2>

        {/* Summary */}
        <div className="flex items-center gap-6 mb-8 p-4 bg-brand-cream rounded-xl">
          <div className="text-center">
            <p className="text-4xl font-bold text-brand-dark">{avgRating.toFixed(1)}</p>
            <StarRating rating={Math.round(avgRating)} size={18} />
            <p className="text-xs text-gray-500 mt-1">{totalReviews} reviews</p>
          </div>
          <div className="flex-1 space-y-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = staticReviews.filter((r) => r.rating === star).length
              const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0
              return (
                <div key={star} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-4 text-right">{star}</span>
                  <Star size={10} className="text-brand-gold fill-brand-gold flex-shrink-0" />
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gold rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-4">{count}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Review list */}
        <div className="space-y-6">
          {staticReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm text-brand-dark">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location} · {review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.comment}</p>
              <button
                onClick={() => markHelpful(review.id)}
                disabled={helpfulMap[review.id]}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-brand-rose transition-colors disabled:opacity-50"
              >
                <ThumbsUp size={12} />
                Helpful ({helpfulMap[review.id] ? review.helpful + 1 : review.helpful})
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
