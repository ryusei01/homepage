/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: '/AuroraSauce_homepage', // GitHub Pagesでリポジトリ名をパスに含める場合はコメント解除
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
