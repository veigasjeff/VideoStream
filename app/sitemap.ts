import type { MetadataRoute } from "next";
import superdata from "@/data/superdata.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videostreamhub.vercel.app";

  // Static Pages (High Priority)
  const staticUrls = [
    { url: baseUrl, priority: 1.0, changefreq: "daily" }, // Homepage (most important)
    { url: `${baseUrl}/movies`, priority: 0.9, changefreq: "daily" }, 
    { url: `${baseUrl}/series`, priority: 0.9, changefreq: "daily" },
    { url: `${baseUrl}/adult`, priority: 0.7, changefreq: "weekly" },
    { url: `${baseUrl}/hindi-dubbed`, priority: 0.8, changefreq: "weekly" },
  ].map((item) => ({
    ...item,
    lastModified: new Date().toISOString(),
  }));

  // Movie URLs (Updated Weekly)
  const movieoUrls = superdata.movie?.map((video) => ({
    url: `${baseUrl}/movies/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()).toISOString(),
    priority: 0.8,
    changefreq: "weekly",
  })) || [];

  // Series Episodes (Lower Priority, Updated Less Often)
  const episodeUrls = superdata.series?.flatMap((series) =>
    series.episodes.map((episode) => ({
      url: `${baseUrl}/series/${episode.id}`,
      lastModified: new Date(episode.uploadDate || Date.now()).toISOString(),
      priority: 0.7,
      changefreq: "weekly",
    }))
  ) || [];

  // Adult Videos (Lower Priority)
  const adultUrls = superdata.adult?.map((video) => ({
    url: `${baseUrl}/adult/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()).toISOString(),
    priority: 0.6,
    changefreq: "monthly",
  })) || [];

  // Hindi Dubbed Movies (Moderate Priority)
  const hindiDubbedUrls = superdata.hindiDubbed?.map((video) => ({
    url: `${baseUrl}/hindi-dubbed/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()).toISOString(),
    priority: 0.7,
    changefreq: "weekly",
  })) || [];

  return [...staticUrls, ...movieoUrls, ...episodeUrls, ...adultUrls, ...hindiDubbedUrls];
}
