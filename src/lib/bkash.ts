const BKASH_BASE_URL = process.env.BKASH_BASE_URL || 'https://tokenized.sandbox.bka.sh/v1.2.0-beta'
const BKASH_APP_KEY = process.env.BKASH_APP_KEY || ''
const BKASH_APP_SECRET = process.env.BKASH_APP_SECRET || ''
const BKASH_USERNAME = process.env.BKASH_USERNAME || ''
const BKASH_PASSWORD = process.env.BKASH_PASSWORD || ''

let cachedToken: string | null = null
let tokenExpiry: number = 0

export async function grantToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken

  const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/token/grant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      username: BKASH_USERNAME,
      password: BKASH_PASSWORD,
    },
    body: JSON.stringify({ app_key: BKASH_APP_KEY, app_secret: BKASH_APP_SECRET }),
  })
  const data = await res.json()
  cachedToken = data.id_token
  tokenExpiry = Date.now() + 3500 * 1000
  return data.id_token
}

export async function createPayment(amount: number, orderId: string, callbackURL: string) {
  const token = await grantToken()
  const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-APP-Key': BKASH_APP_KEY,
    },
    body: JSON.stringify({
      mode: '0011',
      payerReference: orderId,
      callbackURL,
      amount: amount.toString(),
      currency: 'BDT',
      intent: 'sale',
      merchantInvoiceNumber: orderId,
    }),
  })
  return res.json()
}

export async function executePayment(paymentID: string) {
  const token = await grantToken()
  const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-APP-Key': BKASH_APP_KEY,
    },
    body: JSON.stringify({ paymentID }),
  })
  return res.json()
}

export async function queryPayment(paymentID: string) {
  const token = await grantToken()
  const res = await fetch(`${BKASH_BASE_URL}/tokenized/checkout/payment/status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-APP-Key': BKASH_APP_KEY,
    },
    body: JSON.stringify({ paymentID }),
  })
  return res.json()
}
