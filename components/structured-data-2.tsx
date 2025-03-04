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
  //     image: video.thumbnail,
  //     thumbnailUrl: video.thumbnail,
  //     url: `https://videostreamhub.vercel.app/movies/${video.id}`,
  //     aggregateRating: {
  //       "@type": "AggregateRating",
  //       ratingValue: video.rating,
  //       bestRating: 10,
  //       worstRating: 0,
  //       ratingCount: 1,
  //     },
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


  interface StructuredDataProps {
    movie: {
      id: string;
      title: string;
      description: string;
      thumbnail: string;
      rating: number;
      views: number;
      duration: string;
      uploadDate: string;
      tags: string[];
    };
  }
  
  export function StructuredData({ movie }: StructuredDataProps) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Movie",
      name: movie.title,
      description: movie.description,
      duration: movie.duration,
      image: movie.thumbnail,
      thumbnailUrl: movie.thumbnail,
      uploadDate: movie.uploadDate,
      genre: movie.tags,
      url: `https://videostreamhub.vercel.app/movies/${movie.id}`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: movie.rating,
        bestRating: 10,
        worstRating: 0,
        ratingCount: 1,
      },
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: { "@type": "WatchAction" },
        userInteractionCount: movie.views,
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }
  