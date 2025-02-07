import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const baseUrl = "https://videostream.vercel.app";
const dataFilePath = path.join(process.cwd(), "data", "superdata.json");

export async function GET() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    const superdata = JSON.parse(data);

    let urls = [
      { loc: baseUrl, changefreq: "daily", priority: "1.0" },
      { loc: `${baseUrl}/movies`, changefreq: "daily", priority: "0.9" },
      { loc: `${baseUrl}/series`, changefreq: "daily", priority: "0.9" },
      { loc: `${baseUrl}/adult`, changefreq: "daily", priority: "0.9" },
    ];

    superdata.videos.forEach((video: any) => {
      urls.push({
        loc: `${baseUrl}/video/${video.id}`,
        changefreq: "daily",
        priority: "0.9",
      });
    });

    superdata.adult.forEach((video: any) => {
      urls.push({
        loc: `${baseUrl}/adult/${video.id}`,
        changefreq: "daily",
        priority: "0.9",
      });
    });

    superdata.series.forEach((series: any) => {
      urls.push({
        loc: `${baseUrl}/series/${series.id}`,
        changefreq: "daily",
        priority: "0.9",
      });

      series.episodes.forEach((episode: any) => {
        urls.push({
          loc: `${baseUrl}/video/${episode.id}`,
          changefreq: "daily",
          priority: "0.9",
        });
      });
    });

    const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
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

    return new NextResponse(sitemapXml, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return NextResponse.json({ error: "Error generating sitemap" }, { status: 500 });
  }
}
