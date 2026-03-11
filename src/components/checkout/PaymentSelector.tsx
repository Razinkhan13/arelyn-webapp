'use client'

import { PaymentMethod } from '@/types'
import { Check, Truck } from 'lucide-react'

const paymentOptions: {
  method: PaymentMethod
  name: string
  description: string
  badge: string
  color: string
  borderColor: string
  bgColor: string
  checkBgColor: string
}[] = [
  {
    method: 'bkash',
    name: 'bKash',
    description: 'Pay with your bKash account',
    badge: 'Most popular · Instant',
    color: 'text-bkash',
    borderColor: 'border-bkash',
    bgColor: 'bg-bkash/5',
    checkBgColor: 'bg-bkash',
  },
  {
    method: 'nagad',
    name: 'Nagad',
    description: 'Pay with your Nagad account',
    badge: 'Fast & Secure',
    color: 'text-nagad',
    borderColor: 'border-nagad',
    bgColor: 'bg-nagad/5',
    checkBgColor: 'bg-nagad',
  },
  {
    method: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay when you receive',
    badge: 'Available in Sylhet & major cities',
    color: 'text-brand-sage',
    borderColor: 'border-brand-sage',
    bgColor: 'bg-brand-sage/5',
    checkBgColor: 'bg-brand-sage',
  },
]

interface PaymentSelectorProps {
  selected: PaymentMethod
  onSelect: (method: PaymentMethod) => void
}

export default function PaymentSelector({ selected, onSelect }: PaymentSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-brand-dark">Payment Method</h3>
      {paymentOptions.map((option) => (
        <button
          key={option.method}
          onClick={() => onSelect(option.method)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
            selected === option.method
              ? `${option.borderColor} ${option.bgColor}`
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${option.bgColor}`}>
                {option.method === 'bkash' && <span className="text-bkash font-bold text-sm">b</span>}
                {option.method === 'nagad' && <span className="text-nagad font-bold text-sm">N</span>}
                {option.method === 'cod' && <Truck size={18} className="text-brand-sage" />}
              </div>
              <div>
                <p className={`font-semibold ${selected === option.method ? option.color : 'text-brand-dark'}`}>
                  {option.name}
                </p>
                <p className="text-sm text-gray-500">{option.description}</p>
                <p className="text-xs text-gray-400 mt-0.5">{option.badge}</p>
              </div>
            </div>
            {selected === option.method && (
              <div className={`w-6 h-6 rounded-full ${option.checkBgColor} flex items-center justify-center`}>
                <Check size={14} className="text-white" />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
