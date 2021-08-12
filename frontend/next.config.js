module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'localhost:8000', '8000', '127.0.0.1']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  //   async rewrites() {
  //   return [
  //     {
  //       source: '/api',
  //       destination: 'localhost:8000',
  //     },
  //     {
  //        source: '/django-static/',
  //        destination: 'localhost:8000/static'
  //     }
  //   ]
  // },
  //   async redirects() {
  //   return [
  //     {
  //       source: '/api/:slug',
  //       destination: 'http://127.0.0.1:8000',
  //       permanent: true,
  //     },
  //   ]
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:slug*',
  //       destination: 'http://127.0.0.1:8000/:slug*'
  //     },
  //   ]
  // },
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: '/api/:slug*',
  //         destination: `http://127.0.0.1:8000/api/:slug*`,
  //       },
  //     ],
  //   }
  // },
};
