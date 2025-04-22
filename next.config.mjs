/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	compiler: {
		removeConsole: {
			exclude: ["error", "warn"],
		},
	},
};

export default nextConfig;
