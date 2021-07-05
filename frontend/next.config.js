module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['vmk-mebel.ru', 'http://127.0.0.1:8000']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://127.0.0.1:8000/api/:slug*'
      },
    ]
  },
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
