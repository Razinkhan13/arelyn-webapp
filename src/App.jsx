import './App.css'

const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="%23f3ede7"/><rect x="48" y="80" width="704" height="840" rx="32" fill="%23d9c7ba"/><text x="50%" y="52%" fill="%2368544a" font-family="Arial" font-size="42" text-anchor="middle">ARELYN</text><text x="50%" y="58%" fill="%2368544a" font-family="Arial" font-size="20" text-anchor="middle">visual loading alternative</text></svg>'

const heroImage =
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'

const products = [
  {
    name: 'Linen Tie-Back Dress',
    detail: 'Sandstone / Limited Atelier Run',
    price: '$260',
    badge: 'Just dropped',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sculpted Blazer',
    detail: 'Feather-weight wool blend',
    price: '$340',
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Silk Bias Skirt',
    detail: 'Champagne / Cut on the bias',
    price: '$210',
    badge: 'Low stock',
    image:
      'https://images.unsplash.com/photo-1496747611180-206a5c8c46f1?auto=format&fit=crop&w=900&q=80',
  },
]

const collections = [
  {
    title: 'Atelier 24',
    note: 'Architectural tailoring for the boardroom and beyond',
  },
  {
    title: 'Resort Capsule',
    note: 'Sun-washed linens and travel-friendly knits',
  },
  {
    title: 'Evening Edit',
    note: 'Draped silhouettes with restrained shimmer',
  },
]

const highlights = [
  {
    title: 'Responsible fabrics',
    body: 'Tencel, organic silk, and recycled wool chosen for handfeel and longevity.',
  },
  {
    title: 'Made to move',
    body: 'Hidden elastics, bias cuts, and breathable linings keep you comfortable on the go.',
  },
  {
    title: 'Tailored to you',
    body: 'Book a virtual fitting to adjust hemlines or waist before it ships.',
  },
]

const stats = [
  { value: '48h', label: 'Express delivery in major cities' },
  { value: '45', label: 'Days for easy returns & exchanges' },
  { value: '4.9', label: 'Average rating across 2k+ clients' },
]

const editorial = {
  title: 'Quiet confidence, reimagined',
  body: 'Layered neutrals, architectural lines, and modern femininity anchor our latest release. Each piece is engineered to pair seamlessly—ideal for quick packing and even quicker styling.',
  cta: 'View the editorial',
}

const replaceWithFallback = (event) => {
  if (event.target.dataset.fallbackApplied) return
  // If the primary image fails, swap to the lightweight inline SVG placeholder.
  event.target.dataset.fallbackApplied = 'true'
  event.target.src = fallbackImage
}

function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="top-bar">
        <div className="brand">ARELYN</div>
        <span className="pill">Atelier drop live</span>
        <div className="top-actions">
          <button className="ghost-btn">Lookbook</button>
          <button className="primary-btn">Shop the edit</button>
        </div>
      </header>

      <main className="shell">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Spring / Summer — Intentional Luxury</p>
            <h1>Refined pieces for women who lead and live boldly.</h1>
            <p className="lede">
              A curated capsule of ready-to-wear silhouettes, built with breathable fabrics,
              architectural lines, and a touch of softness.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Shop curated looks</button>
              <button className="ghost-btn">Book a styling consult</button>
            </div>
            <div className="stats">
              {stats.map((item) => (
                <div key={item.label} className="stat">
                  <span className="stat-value">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-tag">New in</div>
              <img
                src={heroImage}
                alt="ARELYN model wearing the Atelier dress"
                className="hero-image"
                loading="lazy"
                onError={replaceWithFallback}
              />
              <div className="visual-footer">
                <div>
                  <p className="visual-title">Atelier Dress 02</p>
                  <p className="visual-sub">Sculpted shoulder, bias drape</p>
                </div>
                <button className="chip">See details</button>
              </div>
            </div>
          </div>
        </section>

        <section className="perks">
          <div className="perk">
            <span className="perk-title">Free express shipping over $250</span>
            <span className="perk-sub">Carbon neutral routes where available</span>
          </div>
          <div className="perk">
            <span className="perk-title">Complimentary tailoring</span>
            <span className="perk-sub">Virtual fittings in 24 hours</span>
          </div>
          <div className="perk">
            <span className="perk-title">45-day returns</span>
            <span className="perk-sub">Prepaid labels and easy exchanges</span>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Featured capsule</p>
              <h2>Pieces that transition from work to weekend.</h2>
            </div>
            <button className="ghost-btn">See the full capsule</button>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <span className="badge">{product.badge}</span>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={replaceWithFallback}
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="product-body">
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-detail">{product.detail}</p>
                  </div>
                  <div className="price-row">
                    <span className="price">{product.price}</span>
                    <button className="chip ghost">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section collections">
          <div className="section-header">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Curated edits for every setting.</h2>
            </div>
            <button className="primary-btn">Book a fitting</button>
          </div>
          <div className="collection-grid">
            {collections.map((collection) => (
              <div key={collection.title} className="collection-card">
                <div>
                  <p className="collection-title">{collection.title}</p>
                  <p className="collection-note">{collection.note}</p>
                </div>
                <button className="chip">View edit</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section highlight">
          <div className="section-header">
            <div>
              <p className="eyebrow">What makes ARELYN different</p>
              <h2>Built for longevity, engineered for movement.</h2>
            </div>
            <button className="ghost-btn">Explore materials</button>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <p className="highlight-title">{item.title}</p>
                <p className="highlight-body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section editorial">
          <div className="editorial-card">
            <div>
              <p className="eyebrow">Editorial</p>
              <h2>{editorial.title}</h2>
              <p className="lede">{editorial.body}</p>
              <button className="primary-btn">{editorial.cta}</button>
            </div>
            <div className="alt-visual">
              <div className="alt-block" />
              <div className="alt-block muted" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <p className="brand">ARELYN</p>
            <p className="footer-copy">
              Modern silhouettes crafted for women who move the world. If an image fails to load,
              we instantly replace it with an accessible alternative visual so you never miss
              context.
            </p>
          </div>
          <div className="footer-links">
            <button type="button" className="footer-link">Lookbook</button>
            <button type="button" className="footer-link">Shipping</button>
            <button type="button" className="footer-link">Sustainability</button>
            <button type="button" className="footer-link">Support</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
