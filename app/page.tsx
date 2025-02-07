// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"

// export default function Home() {
//   const allVideos = [
//     ...superdata.videos,
//     ...superdata.series.flatMap((s) =>
//       s.episodes.map((ep) => ({
//         ...ep,
//         seriesTitle: s.title,
//         seriesId: s.id,
//       })),
//     ),
//   ]

//   return (
//     <div className="container py-6 space-y-8 ml-2">
//       <section>
//         <h2 className="text-2xl font-bold mb-4 ml-2">All Videos</h2>
//         <VideoGrid videos={allVideos} />
//       </section>
//     </div>
//   )
// }

// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import Head from "next/head"
// import Script from "next/script"

// export default function Home() {
//   const allVideos = [
//     ...superdata.videos.map((video) => ({
//       ...video,
//       movieTitle: video.title,  // Add movieTitle property for movies
//     })),
//     ...superdata.series.flatMap((s) =>
//       s.episodes.map((ep) => ({
//         ...ep,
//         seriesTitle: s.title,
//         seriesId: s.id,
//       }))
//     ),
//   ]


//   return (
//     <>
//     <Head>
//       <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//       <link rel="manifest" href="/site.webmanifest" />
//       <meta name="googlebot" content="index,follow" />
//       <meta name="revisit-after" content="1 days" />
//       <meta name="referrer" content="origin" />
//       <link
//         rel="sitemap"
//         type="application/xml"
//         title="Sitemap"
//         href="https://amazonaffiliatestore.vercel.app/sitemap.xml"
//       />
//       <meta name="google-site-verification" content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg" />
//       <meta name="yandex-verification" content="2ed424cb83002f12" />
//       <meta name="msvalidate.01" content="695BD01C3BC615AB69B7E9C3B718EB74" />
      
//     </Head>
//     <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ItemList",
//             itemListElement: allVideos.slice(0, 10).map((video, index) => ({
//               "@type": "ListItem",
//               position: index + 1,
//               item: {
//                 "@type": video.seriesTitle ? "TVEpisode" : "Movie",
//                 name: video.title,
//                 url: `https://videostreamhub.vercel.app/video/${video.id}`,
//                 image: video.thumbnail,
//                 datePublished: video.uploadDate,
//                 duration: video.duration,
//                 ...(video.seriesTitle && {
//                   partOfSeries: {
//                     "@type": "TVSeries",
//                     name: video.seriesTitle,
//                     url: `https://videostreamhub.vercel.app/series/${video.seriesId}`,
//                   },
//                 }),
//               },
//             })),
//           }),
//         }}
//       />
//     <div className="container py-6 space-y-8 ml-2">
//       <section>
//         <h2 className="text-2xl font-bold mb-4 ml-2">All Videos</h2>
//         <VideoGrid videos={allVideos} />
//       </section>
//     </div>
//     </>
//   )
// }








import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VideoStreamHub - Watch Movies, Series & More",
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
}

export default function Home() {
  const allVideos = [
    ...superdata.videos.map((video) => ({
      ...video,
      movieTitle: video.title,
    })),
    ...superdata.series.flatMap((s) =>
      s.episodes.map((ep) => ({
        ...ep,
        seriesTitle: s.title,
        seriesId: s.id,
      })),
    ),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: allVideos.slice(0, 10).map((video, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": video.seriesTitle ? "TVEpisode" : "Movie",
                name: video.title,
                url: `https://videostreamhub.vercel.app/movies/${video.id}`,
                image: video.thumbnail,
                datePublished: video.uploadDate,
                duration: video.duration,
                ...(video.seriesTitle && {
                  partOfSeries: {
                    "@type": "TVSeries",
                    name: video.seriesTitle,
                    url: `https://videostreamhub.vercel.app/video/${video.seriesId}`,
                  },
                }),
              },
            })),
          }),
        }}
      />
    <div className="container py-6 space-y-8 mx-auto text-center">
  <section>
    <h1 className="text-4xl font-bold mb-6">Welcome to VideoStreamHub</h1>
    <p className="text-xl mb-8">Discover the latest movies, TV series, and exclusive content.</p>
    <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
    <VideoGrid videos={allVideos} />
  </section>
</div>

    </>
  )
}

