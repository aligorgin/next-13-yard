/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
		  {
			 protocol: 'http',
			 hostname: 'placeimg.com',
		  },
		],
	 },
};

module.exports = nextConfig;
