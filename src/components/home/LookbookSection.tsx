export default function LookbookSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-rose font-medium text-sm uppercase tracking-[0.2em] mb-2">
            Style Inspiration
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            The Lookbook
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative aspect-[3/4] bg-gradient-to-br from-brand-rose/20 to-brand-blush rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <h3 className="font-heading text-xl font-bold">Traditional Elegance</h3>
              <p className="text-sm mt-1">Sarees & Heritage Wear</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-2xl text-brand-dark/40">Traditional</span>
            </div>
          </div>
          <div className="group relative aspect-[3/4] bg-gradient-to-br from-brand-gold/20 to-brand-cream rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <h3 className="font-heading text-xl font-bold">Modern Fusion</h3>
              <p className="text-sm mt-1">Kurtis & Contemporary Styles</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-2xl text-brand-dark/40">Modern</span>
            </div>
          </div>
          <div className="group relative aspect-[3/4] bg-gradient-to-br from-brand-sage/20 to-white rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <h3 className="font-heading text-xl font-bold">Casual Chic</h3>
              <p className="text-sm mt-1">Everyday Fashion</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-2xl text-brand-dark/40">Casual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
