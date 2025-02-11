/** @type {import('next').NextConfig} */

const env = process.env.NEXT_CONFIG_ENV || 'development';

const nextConfigs = env === 'development' ? {
  reactStrictMode: true
} : {
  output: 'export',
  basePath: "/material-ui-nextjs-pages-router-ts",
  reactStrictMode: true
};

module.exports = nextConfigs 
