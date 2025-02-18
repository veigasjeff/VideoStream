// import type { Video } from "@/types/video";

// interface StructuredDataProps {
//   video: Video & { type: "movie" };
// }

// export function StructuredData({ video }: StructuredDataProps) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Movie",
//     name: video.title,
//     description: video.description,
//     duration: video.duration,
//     thumbnailUrl: video.thumbnail,
//     uploadDate: video.uploadDate,
//     interactionStatistic: {
//       "@type": "InteractionCounter",
//       interactionType: { "@type": "WatchAction" },
//       userInteractionCount: video.views,
//     },
//   };

//   // Fix: Check `video.type === "movie"` instead of "Movie" (as per type definition)
//   if (video.type === "movie") {
//     structuredData["partOfSeries"] = {
//       "@type": "Movie",
//       name: video.title,
//       url: `https://videostreamhub.vercel.app/video/${video.title}`,
//     };
//   }

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//     />
//   );
// }


// import type { Video } from "@/types/video";

// interface StructuredDataProps {
//   video: Video & { type: "movie" };
// }

// export function StructuredData({ video }: StructuredDataProps) {
//   const structuredData: Record<string, any> = {
//     "@context": "https://schema.org",
//     "@type": video.seriesTitle ? "TVEpisode" : "Movie",
//     name: video.title,
//     description: video.description,
//     duration: video.duration,
//     thumbnailUrl: video.thumbnail,
//     uploadDate: video.uploadDate,
//     url: `https://videostreamhub.vercel.app/adult/${video.id}`,
//     interactionStatistic: {
//       "@type": "InteractionCounter",
//       interactionType: { "@type": "WatchAction" },
//       userInteractionCount: video.views,
//     },
    
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//     />
//   );
// }




import type { Video } from "@/types/video";

interface StructuredDataProps {
  video: Video & { type: "movie" };
}

export function StructuredData({ video }: StructuredDataProps) {
  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": video.seriesTitle ? "TVEpisode" : "Movie",
    name: video.title,
    description: video.description,
    duration: video.duration,
    thumbnailUrl: video.thumbnail,
    url: `https://videostreamhub.vercel.app/adult/${video.id}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: video.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1,
    },
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: video.views,
    },
  };

 
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
