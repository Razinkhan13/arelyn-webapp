'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, Menu, X, Heart, User } from 'lucide-react'
import { useCartStore } from '@/store/cart'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const itemCount = useCartStore((s) => s.itemCount())

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold text-brand-dark tracking-wider">
            ARELYN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-rose transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-brand-rose transition-colors">
              Shop
            </Link>
            <Link href="/shop?category=new" className="text-sm font-medium text-gray-700 hover:text-brand-rose transition-colors">
              New Arrivals
            </Link>
            <Link href="/shop?category=sale" className="text-sm font-medium text-brand-rose hover:text-brand-rose/80 transition-colors">
              Sale
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/account" className="hidden md:block text-gray-700 hover:text-brand-rose transition-colors">
              <User size={20} />
            </Link>
            <button className="hidden md:block text-gray-700 hover:text-brand-rose transition-colors">
              <Heart size={20} />
            </button>
            <Link href="/cart" className="relative text-gray-700 hover:text-brand-rose transition-colors">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 hover:text-brand-rose" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="block text-sm font-medium text-gray-700 hover:text-brand-rose" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/shop?category=new" className="block text-sm font-medium text-gray-700 hover:text-brand-rose" onClick={() => setIsOpen(false)}>
              New Arrivals
            </Link>
            <Link href="/shop?category=sale" className="block text-sm font-medium text-brand-rose" onClick={() => setIsOpen(false)}>
              Sale
            </Link>
            <Link href="/account" className="block text-sm font-medium text-gray-700 hover:text-brand-rose" onClick={() => setIsOpen(false)}>
              Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
