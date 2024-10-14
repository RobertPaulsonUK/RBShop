import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */




const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_WORDPRESS_SITE_DOMAIN,
                pathname: '/**',
            },
        ],
    }
};
export default withNextIntl(nextConfig);
