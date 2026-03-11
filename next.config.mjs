const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const basePath = isGithubPages && repoName ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  images: {
    unoptimized: isGithubPages,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
}

export default nextConfig;
