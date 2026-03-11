'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-4">
          Join the ARELYN Family
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to get exclusive offers, new arrival updates, and styling tips. Get 10% off your first order!
        </p>
        {submitted ? (
          <div className="bg-brand-sage/20 text-brand-sage rounded-lg p-4">
            <p className="font-medium">Thank you for subscribing! Check your email for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-rose"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-rose text-white font-medium rounded-md hover:bg-brand-rose/90 transition-all"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
