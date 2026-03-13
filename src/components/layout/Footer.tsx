import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-wider mb-4">ARELYN</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elegant fashion for the modern Bangladeshi woman. Curated collections that blend tradition with contemporary style.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-rose transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-rose transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-gray-400 hover:text-white text-sm transition-colors">Shop All</Link>
              <Link href="/shop?category=new" className="block text-gray-400 hover:text-white text-sm transition-colors">New Arrivals</Link>
              <Link href="/shop?category=sale" className="block text-gray-400 hover:text-white text-sm transition-colors">Sale</Link>
              <Link href="/account" className="block text-gray-400 hover:text-white text-sm transition-colors">My Account</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Customer Service</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Shipping & Delivery</p>
              <p className="text-gray-400 text-sm">Returns & Exchange</p>
              <p className="text-gray-400 text-sm">Size Guide</p>
              <p className="text-gray-400 text-sm">FAQs</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>hello@arelyn.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ARELYN. All rights reserved. Made with ♥ in Sylhet, Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  )
}
