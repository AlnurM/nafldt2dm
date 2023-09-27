/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['ru', 'kz', 'en'],
    defaultLocale: 'ru',
    localeDetection: false,
  },
}

module.exports = nextConfig
