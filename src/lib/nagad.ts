import crypto from 'crypto'

const NAGAD_BASE_URL = process.env.NAGAD_BASE_URL || 'http://sandbox.mynagad.com:10080/remote-payment-gateway-1.0/api/dfs'
const NAGAD_MERCHANT_ID = process.env.NAGAD_MERCHANT_ID || ''
const NAGAD_MERCHANT_PRIVATE_KEY = process.env.NAGAD_MERCHANT_PRIVATE_KEY || ''
const NAGAD_PG_PUBLIC_KEY = process.env.NAGAD_PG_PUBLIC_KEY || ''

function encrypt(data: string, publicKey: string): string {
  const buffer = Buffer.from(data)
  const encrypted = crypto.publicEncrypt(
    { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
    buffer
  )
  return encrypted.toString('base64')
}

function decrypt(data: string, privateKey: string): string {
  const buffer = Buffer.from(data, 'base64')
  const decrypted = crypto.privateDecrypt(
    { key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING },
    buffer
  )
  return decrypted.toString('utf8')
}

function sign(data: string, privateKey: string): string {
  const signer = crypto.createSign('SHA256')
  signer.update(data)
  return signer.sign(privateKey, 'base64')
}

export async function initiatePayment(orderId: string, amount: number, callbackUrl: string) {
  const initRes = await fetch(
    `${NAGAD_BASE_URL}/check-out/initialize/${NAGAD_MERCHANT_ID}/${orderId}`,
    { method: 'GET' }
  )
  const initData = await initRes.json()

  const decryptedData = JSON.parse(decrypt(initData.sensitiveData, NAGAD_MERCHANT_PRIVATE_KEY))

  const sensitiveData = {
    merchantId: NAGAD_MERCHANT_ID,
    orderId,
    currencyCode: '050',
    amount: amount.toString(),
    challenge: decryptedData.challenge,
  }

  const encryptedSensitiveData = encrypt(JSON.stringify(sensitiveData), NAGAD_PG_PUBLIC_KEY)
  const signature = sign(JSON.stringify(sensitiveData), NAGAD_MERCHANT_PRIVATE_KEY)

  const completeRes = await fetch(
    `${NAGAD_BASE_URL}/check-out/complete/${NAGAD_MERCHANT_ID}/${orderId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sensitiveData: encryptedSensitiveData,
        signature,
        callbackURL: callbackUrl,
      }),
    }
  )
  return completeRes.json()
}

export async function verifyPayment(paymentRefId: string) {
  const res = await fetch(`${NAGAD_BASE_URL}/verify/payment/${paymentRefId}`)
  return res.json()
}
