export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured: boolean
  isNew: boolean
  createdAt: string
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'bkash' | 'nagad' | 'cod'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  transactionId?: string
  customer: CustomerInfo
  createdAt: string
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  address: string
  city: string
  area: string
  note?: string
}

export type PaymentMethod = 'bkash' | 'nagad' | 'cod'
