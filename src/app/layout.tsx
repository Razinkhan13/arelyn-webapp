import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'ARELYN | Elegant Fashion for the Modern Woman',
  description: 'Discover curated collections of beautiful fashion pieces. Sarees, Kurtis, Salwar Kameez & more. Shop from Sylhet, Bangladesh.',
  keywords: ['fashion', 'women clothing', 'saree', 'kurti', 'Bangladesh', 'online shop', 'ARELYN'],
  openGraph: {
    title: 'ARELYN | Elegant Fashion for the Modern Woman',
    description: 'Curated fashion collections from Sylhet, Bangladesh',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
