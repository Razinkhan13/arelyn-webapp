'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-xl shadow-2xl w-80 overflow-hidden">
          <div className="bg-brand-rose text-white p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">ARELYN Support</p>
              <p className="text-xs opacity-80">We typically reply within minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="p-4 h-64 flex items-center justify-center text-center">
            <div>
              <p className="text-gray-600 text-sm mb-3">
                👋 Hi! Need help with your order?
              </p>
              <a
                href="https://m.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-rose text-white text-sm rounded-full hover:bg-brand-rose/90 transition-all"
              >
                Chat on Messenger
              </a>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-rose text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-rose/90 transition-all hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
