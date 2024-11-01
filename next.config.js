const { i18n } = require('./i18n');

const nextConfig = {
  webpack: (config) => {
    // config.cache = false; // Tắt cache của Webpack nếu cần
    return config;
  },
  // i18n
};

module.exports = (nextConfig);
