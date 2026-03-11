'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-rose focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-brand-rose text-white hover:bg-brand-rose/90': variant === 'primary',
            'bg-brand-dark text-white hover:bg-brand-dark/90': variant === 'secondary',
            'border-2 border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white': variant === 'outline',
            'text-brand-dark hover:bg-brand-cream': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
