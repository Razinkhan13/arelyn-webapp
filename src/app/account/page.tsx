'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { User, Package, MapPin, Heart, LogIn } from 'lucide-react'

export default function AccountPage() {
  const [isLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-brand-blush rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={32} className="text-brand-rose" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-brand-dark mb-2">Welcome to ARELYN</h1>
            <p className="text-gray-500 text-sm mb-6">Sign in to track orders, save favorites, and more</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Email or Phone</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                  placeholder="Enter email or phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose text-sm"
                  placeholder="Enter password"
                />
              </div>
              <Button className="w-full" size="lg">
                <LogIn size={18} className="mr-2" />
                Sign In
              </Button>
              <p className="text-xs text-gray-400">
                Don&apos;t have an account? <button className="text-brand-rose hover:underline">Create one</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-brand-dark mb-8">My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <Package size={32} className="mx-auto text-brand-rose mb-3" />
            <h3 className="font-semibold text-brand-dark">My Orders</h3>
            <p className="text-sm text-gray-500 mt-1">Track and manage your orders</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <Heart size={32} className="mx-auto text-brand-rose mb-3" />
            <h3 className="font-semibold text-brand-dark">Wishlist</h3>
            <p className="text-sm text-gray-500 mt-1">Your saved items</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <MapPin size={32} className="mx-auto text-brand-rose mb-3" />
            <h3 className="font-semibold text-brand-dark">Addresses</h3>
            <p className="text-sm text-gray-500 mt-1">Manage delivery addresses</p>
          </div>
        </div>
      </div>
    </div>
  )
}
