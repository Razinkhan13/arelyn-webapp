import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(amount: number): string {
  return `৳${amount.toLocaleString('en-BD')}`
}

export function generateOrderId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `ARL-${timestamp}-${random}`.toUpperCase()
}
