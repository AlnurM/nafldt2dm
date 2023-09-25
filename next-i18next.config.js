/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  i18n: {
    locales: ['ru', 'kz', 'en'],
    defaultLocale: 'ru',
    localeDetection: false,
  },
}

module.exports = nextConfig
