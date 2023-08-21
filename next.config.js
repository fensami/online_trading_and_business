/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
      // protocol: 'https',
      domains: ['images.unsplash.com', 'plus.unsplash.com', 'cryptdash.vercel.app','localhost']
            
  }
     
}
 

module.exports = nextConfig;