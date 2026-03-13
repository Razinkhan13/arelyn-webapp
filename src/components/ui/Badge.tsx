import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sale' | 'new' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide',
        {
          'bg-red-500 text-white': variant === 'sale',
          'bg-brand-gold text-white': variant === 'new',
          'bg-gray-100 text-gray-700': variant === 'default',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
