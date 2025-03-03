import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Clock, Eye, Film, Tv, Heart } from "lucide-react"
import { memo } from "react"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  aggregateRating: number
  dateCreated: number
  ratingValue: number
  views: number
  seriesTitle?: string
  seriesId?: string
  type: "Movie" | "Hindi-Dubbed" | "TVEpisode" | "TVSeries" | "Adult"
  description?: string
}

// Memoized video card for better performance
const VideoCard = memo(function VideoCard({
  video,
  url,
  index,
}: {
  video: Video
  url: string
  index: number
}) {
  return (
    <Link href={url} className="group block">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            width={640}
            height={360}
            priority={index < 4} // Prioritize first 4 images in each section
            loading={index < 4 ? "eager" : "lazy"}
            className="transition-transform group-hover:scale-105"
            style={{
              objectFit: "cover",
              filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {video.duration}
        </div>

        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
          {video.type === "Movie" || video.type === "Hindi-Dubbed" ? (
            <Film className="w-3 h-3 mr-1" />
          ) : video.type === "Adult" ? (
            <Heart className="w-3 h-3 mr-1" />
          ) : (
            <Tv className="w-3 h-3 mr-1" />
          )}
          <span>
            {video.type === "Movie"
              ? "Movie"
              : video.type === "Hindi-Dubbed"
                ? "Hindi Dubbed"
                : video.type === "Adult"
                  ? "Adult"
                  : "Series"}
          </span>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="font-medium line-clamp-2 group-hover:text-primary">{video.title}</h3>
        {video.seriesTitle && <p className="text-sm text-muted-foreground mt-1">{video.seriesTitle}</p>}
        <p className="text-sm text-muted-foreground flex items-center mt-1">
          <Eye className="w-4 h-4 mr-1" />
          {video.views.toLocaleString()} views
        </p>
      </div>
    </Link>
  )
})

export function VideoGrid({ videos }: { videos: Video[] }) {
  const getVideoUrl = (video: Video) => {
    switch (video.type) {
      case "Movie":
        return `/movies/${video.id}`
      case "TVSeries":
        return `/series/${video.id}`
      case "TVEpisode":
        return `/series/${video.seriesId || video.id}`
      case "Hindi-Dubbed":
        return `/hindi-dubbed/${video.id}`
      case "Adult":
        return `/adult/${video.id}`
      default:
        return "#"
    }
  }

  const getSchemaData = (video: Video) => {
    const baseSchema = {
      "@context": "https://schema.org",
      name: video.title,
      description: video.description || `Watch ${video.title}`,
      duration: video.duration,
      thumbnailUrl: video.thumbnail,
      image: video.thumbnail,
      dateCreated: video.dateCreated || undefined,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: video.ratingValue || 0,
        bestRating: 10,
        worstRating: 0,
        ratingCount: 1,
      },
    }

    switch (video.type) {
      case "Movie":
        return {
          ...baseSchema,
          "@type": "Movie",
          url: `https://videostreamhub.vercel.app/movies/${video.id}`,
        }
      case "TVSeries":
        return {
          ...baseSchema,
          "@type": "TVSeries",
          url: `https://videostreamhub.vercel.app/series/${video.id}`,
        }
      case "TVEpisode":
        return {
          ...baseSchema,
          "@type": "TVEpisode",
          partOfSeries: {
            "@type": "TVSeries",
            name: video.seriesTitle,
          },
          url: `https://videostreamhub.vercel.app/series/${video.seriesId || video.id}`,
        }
      case "Hindi-Dubbed":
        return {
          ...baseSchema,
          "@type": "Movie",
          url: `https://videostreamhub.vercel.app/hindi-dubbed/${video.id}`,
        }
      case "Adult":
        return {
          ...baseSchema,
          "@type": "Movie",
          contentRating: "Adult",
          url: `https://videostreamhub.vercel.app/adult/${video.id}`,
        }
      default:
        return {}
    }
  }

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={video.id}>
              <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData(video)) }}
              />
              <VideoCard video={video} url={getVideoUrl(video)} index={index} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-muted-foreground">No videos available.</p>
        )}
      </div>
    </div>
  )
}














































// import Image from "next/image";
// import Link from "next/link";
// import Script from "next/script";
// import { Clock, Eye, Film, Tv, Heart } from "lucide-react";

// interface Video {
//   id: string;
//   title: string;
//   thumbnail: string;
//   duration: string;
//   aggregateRating: number;
//   dateCreated: number;
//   ratingValue: number;
//   views: number;
//   seriesTitle?: string;
//   seriesId?: string;
//   type: "Movie" | "Hindi-Dubbed" | "TVEpisode" | "TVSeries" | "Adult";
//   description?: string;
// }

// export function VideoGrid({ videos }: { videos: Video[] }) {
//   const getVideoUrl = (video: Video) => {
//     switch (video.type) {
//       case "Movie":
//         return `/movies/${video.id}`;
//       case "TVSeries":
//         return `/series/${video.id}`;
//       case "TVEpisode":
//         return `/series/${video.seriesId || video.id}`;
//       case "Hindi-Dubbed":
//         return `/hindi-dubbed/${video.id}`;
//       case "Adult":
//         return `/adult/${video.id}`;
//       default:
//         return "#";
//     }
//   };

//   const getSchemaData = (video: Video) => {
//     const baseSchema = {
//       "@context": "https://schema.org",
//       name: video.title,
//       description: video.description || `Watch ${video.title}`,
//       duration: video.duration,
//       thumbnailUrl: video.thumbnail,
//       image: video.thumbnail,
//       dateCreated: video.dateCreated || undefined,
//       aggregateRating: {
//         "@type": "AggregateRating",
//         ratingValue: video.ratingValue || 0, // Ensure it defaults to 0 if undefined
//         bestRating: 10,
//         worstRating: 0,
//         ratingCount: 1,
//       },
//     };

//     switch (video.type) {
//       case "Movie":
//         return {
//           ...baseSchema,
//           "@type": "Movie",
//           url: `https://videostreamhub.vercel.app/movies/${video.id}`,
//         };
//       case "TVSeries":
//         return {
//           ...baseSchema,
//           "@type": "TVSeries",
//           url: `https://videostreamhub.vercel.app/series/${video.id}`,
//         };
//       case "TVEpisode":
//         return {
//           ...baseSchema,
//           "@type": "TVEpisode",
//           partOfSeries: {
//             "@type": "TVSeries",
//             name: video.seriesTitle,
//           },
//           url: `https://videostreamhub.vercel.app/series/${video.seriesId || video.id}`,
//         };
//       case "Hindi-Dubbed":
//         return {
//           ...baseSchema,
//           "@type": "Movie",
//           url: `https://videostreamhub.vercel.app/hindi-dubbed/${video.id}`,
//         };
//       case "Adult":
//         return {
//           ...baseSchema,
//           "@type": "Movie",
//           contentRating: "Adult",
//           url: `https://videostreamhub.vercel.app/adult/${video.id}`,
//         };
//       default:
//         return {};
//     }
//   };

//   return (
//     <div className="px-4 md:px-8 lg:px-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {videos.length > 0 ? (
//           videos.map((video) => (
//             <Link key={video.id} href={getVideoUrl(video)} className="group block">
//               <Script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaData(video)) }}
//               />
//               <div className="relative aspect-video rounded-lg overflow-hidden">
//                 <div className="relative w-full aspect-[16/9]">
//                   <Image
//                     src={video.thumbnail || "/placeholder.svg"}
//                     alt={video.title}
//                     quality={90}
//                     fill
//                     loading="lazy"
//                     className="transition-transform group-hover:scale-105"
//                     style={{
//                       objectFit: "cover",
//                       filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//                     }}
//                   />
//                 </div>

//                 {/* Duration Badge */}
//                 <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//                   <Clock className="w-3 h-3 mr-1" />
//                   {video.duration}
//                 </div>

//                 {/* Video Type Badge */}
//                 <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
//                   {video.type === "Movie" || video.type === "Hindi-Dubbed" ? (
//                     <Film className="w-3 h-3 mr-1" />
//                   ) : video.type === "Adult" ? (
//                     <Heart className="w-3 h-3 mr-1" />
//                   ) : (
//                     <Tv className="w-3 h-3 mr-1" />
//                   )}
//                   <span>
//                     {video.type === "Movie"
//                       ? "Movie"
//                       : video.type === "Hindi-Dubbed"
//                       ? "Hindi Dubbed"
//                       : video.type === "Adult"
//                       ? "Adult"
//                       : "Series"}
//                   </span>
//                 </div>
//               </div>

//               {/* Video Title & Views */}
//               <div className="mt-2">
//                 <h3 className="font-medium line-clamp-2 group-hover:text-primary">{video.title}</h3>
//                 <p className="text-sm text-muted-foreground flex items-center mt-1">
//                   <Eye className="w-4 h-4 mr-1" />
//                   {video.views.toLocaleString()} views
//                 </p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center col-span-full text-muted-foreground">No videos available.</p>
//         )}
//       </div>
//     </div>
//   );
// }


