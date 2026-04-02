import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Eski Wix URL'lerinden yeni URL'lere 301 redirect
      { source: "/diger-calismalar-kopyasi", destination: "/", permanent: true },
      { source: "/key-visual-afis-kopyasi", destination: "/logotype", permanent: true },
      { source: "/motion-graphic-video-kopyasi", destination: "/katalog-brosur", permanent: true },
      { source: "/diger-calismalar-kopyasi-1", destination: "/key-visual-afis", permanent: true },
      { source: "/logotype-kopyasi", destination: "/tabela-totem", permanent: true },
      { source: "/magaza-cephe-tasarimlari-kopyasi", destination: "/motion-graphic-video", permanent: true },
      { source: "/works", destination: "/diger-calismalar", permanent: true },
      { source: "/contact-us", destination: "/iletisim", permanent: true },
      { source: "/iletisim", destination: "/iletisim", permanent: false }, // eski Wix path
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
