import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/ChatWidget'
import FlashSaleBanner from '@/components/home/FlashSaleBanner'

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
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <FlashSaleBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
