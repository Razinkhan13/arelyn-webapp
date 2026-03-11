export function WelcomeEmail({ name }: { name: string }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1A1A2E', letterSpacing: '4px' }}>ARELYN</h1>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ color: '#1A1A2E', fontSize: '24px' }}>Welcome to ARELYN! ✨</h2>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          Hi {name}, welcome to the ARELYN family! As a thank you for joining,
          enjoy <strong>10% off</strong> your first order.
        </p>
      </div>

      <div style={{ backgroundColor: '#E2136E', borderRadius: '8px', padding: '20px', textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ color: 'white', fontSize: '12px', marginBottom: '4px' }}>Your discount code</p>
        <p style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', letterSpacing: '4px' }}>WELCOME10</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href="https://arelyn.com/shop" style={{ display: 'inline-block', padding: '12px 32px', backgroundColor: '#E2136E', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
          Start Shopping
        </a>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#999' }}>
          © ARELYN | Made with ♥ in Sylhet, Bangladesh
        </p>
      </div>
    </div>
  )
}
