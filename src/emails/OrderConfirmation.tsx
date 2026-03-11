import { Order } from '@/types'
import { formatPrice } from '@/lib/utils'

export function OrderConfirmationEmail({ order }: { order: Order }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1A1A2E', letterSpacing: '4px' }}>ARELYN</h1>
      </div>

      <div style={{ backgroundColor: '#FAF7F2', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
        <h2 style={{ color: '#1A1A2E', fontSize: '20px', marginBottom: '8px' }}>Order Confirmed! 🎉</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Thank you for your order, {order.customer.name}!</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '14px', color: '#666' }}><strong>Order ID:</strong> {order.id}</p>
        <p style={{ fontSize: '14px', color: '#666' }}><strong>Payment:</strong> {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}</p>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '12px', color: '#999' }}>Item</th>
            <th style={{ textAlign: 'right', padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '12px', color: '#999' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, i) => (
            <tr key={i}>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #f5f5f5', fontSize: '14px', color: '#333' }}>
                {item.product.name} × {item.quantity} ({item.size}, {item.color})
              </td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #f5f5f5', fontSize: '14px', color: '#333', textAlign: 'right' }}>
                {formatPrice(item.product.price * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>Shipping: {formatPrice(order.shipping)}</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1A1A2E' }}>Total: {formatPrice(order.total)}</p>
      </div>

      <div style={{ backgroundColor: '#FFF0F5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#999' }}>
          Need help? Reply to this email or message us on Facebook.
        </p>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
          © ARELYN | Made with ♥ in Sylhet, Bangladesh
        </p>
      </div>
    </div>
  )
}
