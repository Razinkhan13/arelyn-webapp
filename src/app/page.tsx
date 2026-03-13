import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import LookbookSection from '@/components/home/LookbookSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import ShopTheLookSection from '@/components/home/ShopTheLookSection'
import TrustBadges from '@/components/ui/TrustBadges'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <LookbookSection />
      <ShopTheLookSection />
      <section className="py-12 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
