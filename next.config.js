/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
          'cloudinary.com',
          'res.cloudinary.com',
          'console.cloudinary.com'
        ],
      },
}

module.exports = nextConfig
