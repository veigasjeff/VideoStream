// import type { Video } from "@/types/video"

// interface StructuredDataProps {
//   video: Video & { type: "movie" | "series"; seriesTitle?: string; seriesId?: string }
// }

// export function StructuredData({ video }: StructuredDataProps) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": video.type === "movie" ? "Movie" : "TVEpisode",
//     name: video.title,
//     description: video.description,
//     duration: video.duration,
//     thumbnailUrl: video.thumbnail,
//     interactionStatistic: {
//       "@type": "InteractionCounter",
//       interactionType: { "@type": "WatchAction" },
//       userInteractionCount: video.views,
//     },
//   }

//   if (video.type === "series") {
//     structuredData["partOfSeries"] = {
//       "@type": "TVSeries",
//       name: video.seriesTitle,
//       url: `https://videostreamhub.vercel.app/video/${video.seriesId}`,
//     }
//   }

//   return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
// }



import type { Video } from "@/types/video"

interface StructuredDataProps {
  video: Video & { type: "series"; seriesTitle: string; seriesId: string; seasonNumber: number; episodeNumber: number; uploadDate?: string; director?: string }
}

export function StructuredData({ video }: StructuredDataProps) {
  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "TVEpisode",
    name: video.title,
    description: video.description,
    duration: video.duration,
    thumbnailUrl: video.thumbnail,
    url: `https://videostreamhub.vercel.app/video/${video.id}`,
    dateCreated: video.uploadDate || undefined, // ✅ Optional but included if available
    episodeNumber: video.episodeNumber,
    seasonNumber: video.seasonNumber,
    partOfSeries: {
      "@type": "TVSeries",
      name: video.seriesTitle,
      url: `https://videostreamhub.vercel.app/series/${video.seriesId}`,
    },
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: video.views,
    },
  }


  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
