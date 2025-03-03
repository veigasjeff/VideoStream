// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import Script from "next/script"
// import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "VideoStreamHub - Watch Movies, Series & More",
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
// }

// export default function Home() {
//   // Process all sections with their complete data
//   const movies = superdata.movie.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Movie",
//   }))

//   const adultVideos = superdata.adult.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Adult",
//   }))

//   const tvSeries = superdata.series.map((series) => ({
//     ...series,
//     type: "TVSeries",
//     rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
//   }))

//   const hindiDubbedMovies = superdata.hindiDubbed
//     ? superdata.hindiDubbed.map((video) => ({
//         ...video,
//         movieTitle: video.title,
//         type: "Hindi-Dubbed",
//       }))
//     : []

//   // Separate videos by section
//   const tvEpisodes = tvSeries.flatMap((s) =>
//     s.episodes.map((ep) => ({
//       ...ep,
//       seriesTitle: s.title,
//       seriesId: s.id,
//       rating: s.rating,
//       type: "TVEpisode",
//     })),
//   )

//   return (
//     <>
//       <Script async data-id="101478638" src="//static.getclicky.com/js" />
//       <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
//       <div className="container py-6 space-y-12 mx-auto">
//         <section>
//           <h1 className="text-4xl font-bold mb-6 text-center">Welcome to VideoStreamHub</h1>
//           <p className="text-xl mb-8 text-center">
//             Discover the latest movies, TV series, and exclusive Adult content.
//           </p>
//         </section>

//         {/* Movies Section */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
//           <VideoGrid videos={movies} />
//         </section>

//         {/* TV Series Section */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4">TV Series</h2>
//           <VideoGrid videos={tvEpisodes} />
//         </section>

//         {/* Hindi Dubbed Section */}
//         {hindiDubbedMovies.length > 0 && (
//           <section>
//             <h2 className="text-2xl font-bold mb-4">Hindi Dubbed Movies</h2>
//             <VideoGrid videos={hindiDubbedMovies} />
//           </section>
//         )}

//         {/* Adult Section */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4">Adult Content</h2>
//           <VideoGrid videos={adultVideos} />
//         </section>
//       </div>
//     </>
//   )
// }



import { VideoGrid } from "@/components/video-grid"
import { HeroSection } from "@/components/hero-section"
import superdata from "@/data/superdata.json"
import Script from "next/script"
import type { Metadata } from "next"
import { Suspense } from "react"

// export const metadata: Metadata = {
//   title: "VideoStreamHub - Watch Movies, Series & More",
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
// }


export const metadata: Metadata = {
  metadataBase: new URL("https://videostreamhub.vercel.app"),
  title: {
    default: "VideoStreamHub - Watch Movies, Series & More",
    template: "%s | VideoStreamHub",
  },
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
  keywords: ["VideoStreamHub", "VideoStream Hub", "Video Stream Hub", "movies", "TV series", "video", "free movies", "free TV series", "watch movie online", "watch TV series online", "free movie streaming", "free TV series streaming", "video streaming", "entertainment", "watch online", "JustWatch", "JustWatch Free"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://videostreamhub.vercel.app",
    siteName: "VideoStreamHub",
    title: "VideoStreamHub - Watch Movies, Series & More",
    description:
      "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
    images: [
      {
        url: "https://videostreamhub.vercel.app/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "VideoStreamHub - Your Ultimate Streaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VideoStreamHub - Watch Movies, Series & More",
    description:
      "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
    images: ["https://videostreamhub.vercel.app/og_image.jpg"],
    creator: "@VideoStreamHub",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://videostreamhub.vercel.app",
  },
}


// Preprocess data outside the component to improve rendering performance
const processedData = {
  movies: superdata.movie.map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Movie",
  })),

  adultVideos: superdata.adult.map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Adult",
  })),

  tvSeries: superdata.series.map((series) => ({
    ...series,
    type: "TVSeries",
    rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
  })),

  hindiDubbedMovies: superdata.hindiDubbed
    ? superdata.hindiDubbed.map((video) => ({
        ...video,
        movieTitle: video.title,
        type: "Hindi-Dubbed",
      }))
    : [],
}

// Process TV episodes separately
const tvEpisodes = processedData.tvSeries.flatMap((s) =>
  s.episodes.map((ep) => ({
    ...ep,
    seriesTitle: s.title,
    seriesId: s.id,
    rating: s.rating,
    type: "TVEpisode",
  })),
)

// Component for schema data to avoid rendering it in the main content flow
function SchemaData() {
  // Generate schema for all videos - limit to just 10 for mobile performance
  const allVideos = [
    ...processedData.movies.slice(0, 3),
    ...processedData.adultVideos.slice(0, 3),
    ...tvEpisodes.slice(0, 3),
    ...processedData.hindiDubbedMovies.slice(0, 1),
  ]

  const getSchemaData = (video: any) => {
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

  // Combine all schema data into a single script
  const allSchemaData = allVideos.map(getSchemaData)

  return (
    <Script
      id="schema-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemaData) }}
    />
  )
}

// Lazy-loaded section component
function VideoSection({ title, videos, sectionIndex }: { title: string; videos: any[]; sectionIndex: number }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 px-2 md:px-8">{title}</h2>
      <VideoGrid videos={videos} sectionIndex={sectionIndex} />
    </section>
  )
}

export default function Home() {
  // Get featured video for hero section
  const featuredVideo = processedData.movies[0] || processedData.tvSeries[0] || null

  return (
    <>
      {/* Analytics scripts with proper loading strategy */}
      {/* <Script async data-id="101478638" src="//static.getclicky.com/js" strategy="lazyOnload" />
      <Script async data-id="101478638" src="/96930ac493198ab9ca.js" strategy="lazyOnload" /> */}
      <Script async data-id="101478638" src="//static.getclicky.com/js" />
      <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
      <div className="py-4 md:py-6 space-y-8 md:space-y-12 mx-auto">
        {/* Mobile-optimized welcome section */}
        <section className="text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Welcome to VideoStreamHub</h1>
          <p className="text-base md:text-xl mb-4 md:mb-8">
            Discover the latest movies, TV series, and exclusive content.
          </p>
        </section>

        {/* Featured content - only on desktop */}
        {featuredVideo && (
          <div className="hidden md:block px-4 md:px-8">
            <HeroSection featuredVideo={featuredVideo} />
          </div>
        )}

        {/* Movies Section - First section gets priority */}
        <VideoSection title="Latest Movies" videos={processedData.movies} sectionIndex={0} />

        {/* Other sections load with lower priority */}
        <Suspense fallback={<div className="h-32 md:h-64 flex items-center justify-center">Loading TV Series...</div>}>
          <VideoSection title="TV Series" videos={tvEpisodes} sectionIndex={1} />
        </Suspense>

        {/* Hindi Dubbed Section */}
        {processedData.hindiDubbedMovies.length > 0 && (
          <Suspense
            fallback={
              <div className="h-32 md:h-64 flex items-center justify-center">Loading Hindi Dubbed Movies...</div>
            }
          >
            <VideoSection title="Hindi Dubbed Movies" videos={processedData.hindiDubbedMovies} sectionIndex={2} />
          </Suspense>
        )}

        {/* Adult Section */}
        <Suspense
          fallback={<div className="h-32 md:h-64 flex items-center justify-center">Loading Adult Content...</div>}
        >
          <VideoSection title="Adult Content" videos={processedData.adultVideos} sectionIndex={3} />
        </Suspense>
      </div>

      {/* Schema data loaded after interactive */}
      <SchemaData />
    </>
  )
}

