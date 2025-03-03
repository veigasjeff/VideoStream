import fs from "fs";
import path from "path";
import superdata from "@/data/superdata.json";

const baseUrl = "https://videostreamhub.vercel.app";

function generateSitemap() {
  const urls = [
    { loc: baseUrl, changefreq: "daily", priority: "1.0" },
    { loc: `${baseUrl}/movies`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/hindi-dubbed`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/series`, changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/adult`, changefreq: "daily", priority: "0.9" },
  ];

  // Movies (Updated Weekly)
  superdata.movie?.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/movies/${video.id}`,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  // ✅ Hindi Dubbed Movies (Updated Weekly)
  superdata.hindiDubbed?.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/hindi-dubbed/${video.id}`,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  // Adult Content (Updated Weekly)
  superdata.adult?.forEach((video) => {
    urls.push({
      loc: `${baseUrl}/adult/${video.id}`,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  // Series & Episodes
  superdata.series?.forEach((series) => {
    urls.push({
      loc: `${baseUrl}/series/${series.id}`,
      changefreq: "weekly",
      priority: "0.8",
    });

    series.episodes?.forEach((episode) => {
      urls.push({
        loc: `${baseUrl}/series/${episode.id}`,
        changefreq: "weekly",
        priority: "0.7",
      });
    });
  });

  // Generate XML content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  // Save to public directory
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log("✅ Sitemap has been successfully written to public/sitemap.xml");
}

generateSitemap();
