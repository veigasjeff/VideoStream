// import type { Metadata } from "next"
// import { VideoPlayer } from "@/components/video-player"
// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import { notFound } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import { StructuredData } from "@/components/structured-data"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   for (const series of superdata.series) {
//     const episode = series.episodes.find((ep) => ep.id === id)
//     if (episode) return { ...episode, type: "series", seriesId: series.id, seriesTitle: series.title }
//   }

//   const video = superdata.videos.find((v) => v.id === id)
//   if (video) return { ...video, type: "movie" }

//   return null
// }




// function getOtherEpisodes(currentVideo: ReturnType<typeof findVideo>) {
//   if (currentVideo?.type !== "series") return []

//   const currentSeries = superdata.series.find((s) => s.id === currentVideo.seriesId)
//   return currentSeries?.episodes.filter((ep) => ep.id !== currentVideo.id) || []
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 4) {
//   return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const video = findVideo(params.id)

//   if (!video) {
//     return {
//       title: "Video Not Found",
//       description: "The requested video could not be found.",
//     }
//   }

//   const metadata: Metadata = {
//     title: video.title,
//     description: video.description,
//     openGraph: {
//       title: video.title,
//       description: video.description,
//       type: "video.movie",
//       videos: [
//         {
//           url: video.videoUrl,
//           type: "video/mp4",
//         },
//       ],
//     },
//     twitter: {
//       card: "player",
//       title: video.title,
//       description: video.description,
//       players: [
//         {
//           playerUrl: `https://videostream.vercel.app/video/${video.id}`,
//           streamUrl: video.videoUrl,
//           width: 1280,
//           height: 720,
//         },
//       ],
//     },
//   }

//   if (video.type === "series") {
//     metadata.openGraph!.type = "video.episode"
//     metadata.openGraph!.video = {
//       series: video.seriesTitle,
//     }
//   }

//   return metadata
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   const otherEpisodes = getOtherEpisodes(video)
//   const recommendedSeries = getRecommendedSeries(video.type === "series" ? video.seriesId : "")

  
//   return (
//     <>
//       <StructuredData video={video} />
//       <div className="container py-6 " >
//         <VideoPlayer video={video} />
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.title}</h1>
//           <p className="text-muted-foreground " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.description}</p>
//           {/* {video.type === "series" && (
//             <p className="mt-2">
//               From series:{" "}
//               <Link href={`/series/${video.seriesId}`} className="text-primary hover:underline">
//                 {video.seriesTitle}
//               </Link>
//             </p>
//           )} */}
//         </div>
      
//         {video.type === "series" && otherEpisodes.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Other Episodes</h2>
//             <VideoGrid videos={otherEpisodes.map((ep) => ({ ...ep, seriesTitle: video.seriesTitle }))} />
//           </div>
//         )}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {video.type === "series" ? "Recommended Series" : "Recommended Videos"}
//           </h2>
//           {video.type === "series" ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {recommendedSeries.map((series) => (
//                 <Link key={series.id} href={`/video/${series.id}`} className="group">
//                   {/* <div className="relative aspect-video rounded-lg overflow-hidden bg-muted"> */}
//                     {/* <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-2xl font-bold">{series.title}</span>
//                     </div> */}
//                       <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                                       <Image src={series.thumbnail || "/placeholder.svg"} alt={series.title} layout="fill" objectFit="cover" />
//                                     </div>
//                   {/* </div> */}
                  
//                   <div className="mt-2">
//                     <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <VideoGrid videos={superdata.videos.filter((v) => v.id !== video.id).slice(0, 8)} />
//           )}
//         </div>
//       </div>
//     </>
//   )
// }



// "use client"
// import { useState, useEffect } from "react"
// import { notFound } from "next/navigation"
// import { VideoPlayer } from "@/components/video-player"
// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import Link from "next/link"
// import Image from "next/image"
// import { StructuredData } from "@/components/structured-data"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   for (const series of superdata.series) {
//     const episode = series.episodes.find((ep) => ep.id === id)
//     if (episode) return { ...episode, type: "series", seriesId: series.id, seriesTitle: series.title }
//   }

//   const video = superdata.videos.find((v) => v.id === id)
//   if (video) return { ...video, type: "movie" }

//   return null
// }

// function getOtherEpisodes(currentVideo: ReturnType<typeof findVideo>) {
//   if (currentVideo?.type !== "series") return []
//   const currentSeries = superdata.series.find((s) => s.id === currentVideo.seriesId)
//   return currentSeries?.episodes.filter((ep) => ep.id !== currentVideo.id) || []
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 500) {
//   return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   const otherEpisodes = getOtherEpisodes(video)

//   // Initial recommendation list
//   const initialRecommendedSeries = getRecommendedSeries(video.type === "series" ? video.seriesId : "")

//   // State to manage shuffled series
//   const [shuffledSeries, setShuffledSeries] = useState(initialRecommendedSeries)

//   // Shuffle every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffledSeries((prevSeries) => [...prevSeries].sort(() => Math.random() - 0.5))
//     }, 5000) // Shuffle every 5 seconds

//     return () => clearInterval(interval) // Cleanup on unmount
//   }, [initialRecommendedSeries]) // Ensure reactivity when recommendations change

//   return (
//     <>
//       <StructuredData video={video} />
//       <div className="container py-6 ">
//         <VideoPlayer video={video} />
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.title}</h1>
//           <p className="text-muted-foreground" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.description}</p>
//         </div>

//         {video.type === "series" && otherEpisodes.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Other Episodes</h2>
//             <VideoGrid videos={otherEpisodes.map((ep) => ({ ...ep, seriesTitle: video.seriesTitle }))} />
//           </div>
//         )}

//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {video.type === "series" ? "Recommended Series" : "Recommended Videos"}
//           </h2>
//           {video.type === "series" ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {shuffledSeries.map((series) => (
//                 <Link key={series.id} href={`/video/${series.id}`} className="group">
//                   <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                     <Image src={series.thumbnail || "/placeholder.svg"} alt={series.title} layout="fill" objectFit="cover" />
//                   </div>
//                   <div className="mt-2">
//                     <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <VideoGrid videos={superdata.videos.filter((v) => v.id !== video.id).slice(0, 8)} />
//           )}
//         </div>
//       </div>
//     </>
//   )
// }





"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { VideoPlayer } from "@/components/video-player"
import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import Link from "next/link"
import Image from "next/image"
import { StructuredData } from "@/components/structured-data"

interface Props {
  params: {
    id: string
  }
}

function findVideo(id: string) {
  for (const series of superdata.series) {
    const episode = series.episodes.find((ep) => ep.id === id)
    if (episode) return { ...episode, type: "series", seriesId: series.id, seriesTitle: series.title }
  }

  const video = superdata.videos.find((v) => v.id === id)
  if (video) return { ...video, type: "movie" }

  return null
}

function getOtherEpisodes(currentVideo: ReturnType<typeof findVideo>) {
  if (currentVideo?.type !== "series") return []
  const currentSeries = superdata.series.find((s) => s.id === currentVideo.seriesId)
  return currentSeries?.episodes.filter((ep) => ep.id !== currentVideo.id) || []
}

function getRecommendedSeries(currentSeriesId: string, limit = 500) {
  return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
}

function getRecommendedMovies(currentVideoId: string, limit = 500) {
  return superdata.videos.filter((v) => v.id !== currentVideoId).slice(0, limit)
}

export default function VideoPage({ params }: Props) {
  const video = findVideo(params.id)

  if (!video) {
    notFound()
  }

  const otherEpisodes = getOtherEpisodes(video)

  // Initial recommendations
  const initialRecommendedSeries = getRecommendedSeries(video.type === "series" ? video.seriesId : "")
  const initialRecommendedMovies = getRecommendedMovies(video.id)

  // State to manage shuffled recommendations
  const [shuffledSeries, setShuffledSeries] = useState(initialRecommendedSeries)
  const [shuffledMovies, setShuffledMovies] = useState(initialRecommendedMovies)

  // Shuffle series every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledSeries((prevSeries) => [...prevSeries].sort(() => Math.random() - 0.5))
    }, 5000)

    return () => clearInterval(interval)
  }, [initialRecommendedSeries])

  // Shuffle movies every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledMovies((prevMovies) => [...prevMovies].sort(() => Math.random() - 0.5))
    }, 5000)

    return () => clearInterval(interval)
  }, [initialRecommendedMovies])

  return (
    <>
      <StructuredData video={video} />
      <div className="container py-6 ">
        <VideoPlayer video={video} />
        <div className="mt-4">
          <h1 className="text-2xl font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.title}</h1>
          <p className="text-muted-foreground" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.description}</p>
        </div>

        {video.type === "series" && otherEpisodes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Other Episodes</h2>
            <VideoGrid videos={otherEpisodes.map((ep) => ({ ...ep, seriesTitle: video.seriesTitle }))} />
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {video.type === "series" ? "Recommended Series" : "Recommended Movies"}
          </h2>
          {video.type === "series" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {shuffledSeries.map((series) => (
                <Link key={series.id} href={`/video/${series.id}`} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
                    <Image src={series.thumbnail || "/placeholder.svg"} alt={series.title} layout="fill" objectFit="cover" />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <VideoGrid videos={shuffledMovies} />
          )}
        </div>
      </div>
    </>
  )
}
