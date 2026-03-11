# 🛍️ ARELYN – Female Fashion Brand Web Application

A modern e-commerce web application for **ARELYN**, a female fashion brand based in Sylhet, Bangladesh. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Beautiful Storefront** – Responsive design with hero section, featured products, lookbook, testimonials
- **Product Catalog** – Filter by category, sort by price/date, detailed product pages with size guide
- **Shopping Cart** – Persistent cart with Zustand, quantity management
- **Bangladesh Payments** – bKash, Nagad, and Cash on Delivery (COD)
- **Multi-step Checkout** – Delivery info, payment selection, order summary
- **Admin Dashboard** – Product management, order tracking, revenue overview
- **Customer Accounts** – Sign in, order history, saved addresses
- **Live Chat** – Integrated chat widget for customer support
- **Mobile Responsive** – Optimized for all screen sizes
- **SEO Optimized** – Meta tags, Open Graph, structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Database:** Supabase (PostgreSQL) / Prisma ORM
- **Payments:** bKash + Nagad + COD
- **Images:** Cloudinary
- **Email:** Resend
- **Analytics:** Facebook Pixel
- **Icons:** Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Razinkhan13/arelyn-webapp.git
   cd arelyn-webapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the values in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## 💳 Payment Setup

### bKash
1. Register as a merchant at [bKash](https://www.bkash.com/merchant)
2. Get sandbox credentials for testing
3. Add credentials to `.env.local`

### Nagad
1. Register as a merchant at [Nagad](https://nagad.com.bd/merchant)
2. Get sandbox credentials for testing
3. Add RSA keys and merchant ID to `.env.local`

### Cash on Delivery
- Available by default, no configuration needed
- Available in Sylhet and major cities

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── admin/           # Admin dashboard
│   ├── api/             # API routes
│   ├── cart/            # Shopping cart
│   ├── checkout/        # Checkout flow
│   ├── payment/         # Payment callbacks
│   ├── product/         # Product detail
│   ├── shop/            # Shop/catalog
│   └── success/         # Order success
├── components/          # React components
│   ├── cart/           # Cart components
│   ├── checkout/       # Checkout components
│   ├── home/           # Homepage sections
│   ├── layout/         # Navbar, Footer
│   ├── product/        # Product components
│   ├── shop/           # Shop components
│   └── ui/             # Reusable UI components
├── lib/                # Utilities & integrations
├── store/              # Zustand stores
├── hooks/              # Custom hooks
├── types/              # TypeScript types
└── emails/             # Email templates
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Razinkhan13/arelyn-webapp)

## 📝 License

This project is private and owned by ARELYN / Erin Ema.

---

Made with ♥ in Sylhet, Bangladesh 🇧🇩
