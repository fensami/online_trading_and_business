/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
    },
}

=======
  images: {
    protocol: 'https',
    domains: ['images.unsplash.com']
  }
}
>>>>>>> 505b3f1b30ea93fc0a14219edf343c3fdf9d0b16

module.exports = nextConfig
