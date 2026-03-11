const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''

export function getCloudinaryUrl(publicId: string, options?: {
  width?: number
  height?: number
  quality?: number
}): string {
  const transforms = []
  if (options?.width) transforms.push(`w_${options.width}`)
  if (options?.height) transforms.push(`h_${options.height}`)
  transforms.push(`q_${options?.quality || 80}`)
  transforms.push('f_auto')

  const transformString = transforms.join(',')
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${publicId}`
}
