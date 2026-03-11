import { Package, ShoppingBag, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Total Orders', value: '0', icon: Package, color: 'text-brand-rose', bg: 'bg-brand-blush' },
  { label: 'Products', value: '8', icon: ShoppingBag, color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
  { label: 'Customers', value: '0', icon: Users, color: 'text-brand-sage', bg: 'bg-brand-sage/10' },
  { label: 'Revenue', value: '৳0', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50' },
]

export default function AdminDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-brand-dark">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Erin! Here&apos;s your store overview.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-dark">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin/products" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-dark mb-1">Manage Products</h3>
            <p className="text-sm text-gray-500">Add, edit, or remove products from your store</p>
          </Link>
          <Link href="/admin/orders" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-brand-dark mb-1">Manage Orders</h3>
            <p className="text-sm text-gray-500">View and process customer orders</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
