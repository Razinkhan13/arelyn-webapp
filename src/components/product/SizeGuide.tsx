'use client'

import { useState } from 'react'
import { Ruler, X } from 'lucide-react'

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-sm text-brand-rose hover:text-brand-rose/80 transition-colors"
      >
        <Ruler size={14} />
        Size Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-bold text-brand-dark">Size Guide</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left font-semibold text-brand-dark">Size</th>
                    <th className="py-2 text-left font-semibold text-brand-dark">Bust (in)</th>
                    <th className="py-2 text-left font-semibold text-brand-dark">Waist (in)</th>
                    <th className="py-2 text-left font-semibold text-brand-dark">Hip (in)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2">S</td><td>32-34</td><td>26-28</td><td>34-36</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">M</td><td>34-36</td><td>28-30</td><td>36-38</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">L</td><td>36-38</td><td>30-32</td><td>38-40</td></tr>
                  <tr><td className="py-2">XL</td><td>38-40</td><td>32-34</td><td>40-42</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
