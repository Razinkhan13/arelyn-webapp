'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Zap } from 'lucide-react'

const SALE_END = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

function getTimeLeft() {
  const diff = SALE_END.getTime() - Date.now()
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }
  return {
    hours: Math.floor(diff / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function FlashSaleBanner() {
  const [visible, setVisible] = useState(true)
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="bg-brand-rose text-white text-sm py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <Zap size={16} className="flex-shrink-0 animate-pulse" />
        <span className="font-semibold tracking-wide uppercase text-xs">Flash Sale — Up to 30% Off!</span>
        <div className="flex items-center gap-1 font-mono font-bold">
          <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(time.hours)}</span>
          <span>:</span>
          <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(time.minutes)}</span>
          <span>:</span>
          <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(time.seconds)}</span>
        </div>
        <Link href="/shop" className="underline underline-offset-2 hover:opacity-80 transition-opacity text-xs font-medium">
          Shop Now →
        </Link>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  )
}
