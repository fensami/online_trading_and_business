/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true, 
  images: {
    protocol: 'https',
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'cryptdash.vercel.app','localhost']
    
}
}
 
module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
      // protocol: 'https',
      // domains: ['images.unsplash.com', 'plus.unsplash.com', 'cryptdash.vercel.app','localhost']
      
  // }
     
// }

// module.exports = {
//   reactStrictMode: true, 
//   images: {
//     protocol: 'https',
//     domains: ['images.unsplash.com', 'plus.unsplash.com', 'cryptdash.vercel.app','localhost']
    
// }
// }
// module.exports = {
  // Your modified configuration settings
  // someConfig: false,
  // anotherConfig: true,
// };