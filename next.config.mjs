/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath только для production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/next-ads-sample-1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-ads-sample-1' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
