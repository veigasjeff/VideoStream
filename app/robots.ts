import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/tmdb"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*", "/private/*"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

