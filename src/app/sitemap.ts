import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rubatodesign.com.tr";

  const pages = [
    "",
    "/logotype",
    "/katalog-brosur",
    "/key-visual-afis",
    "/tabela-totem",
    "/motion-graphic-video",
    "/diger-calismalar",
    "/manifestomuz",
    "/iletisim",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
