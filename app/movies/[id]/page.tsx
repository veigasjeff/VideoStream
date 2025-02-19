// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { VideoGrid } from "@/components/video-grid"
// import Link from "next/link"
// import Image from "next/image"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findvideos(id: string) {
//   return superdata.videos.find((s) => s.id === id)
// }

// function getRecommendedvideos(currentvideosId: string, limit = 4) {
//   return superdata.videos.filter((s) => s.id !== currentvideosId).slice(0, limit)
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const videos = findvideos(params.id)

//   if (!videos) {
//     return {
//       title: "videos Not Found",
//       description: "The requested videos could not be found.",
//     }
//   }

//   return {
//     title: videos.title,
//     description: videos.description,
//     openGraph: {
//       title: videos.title,
//       description: videos.description,
//       type: "video.movie",
//     },
//   }
// }

// export default function videosPage({ params }: Props) {
//   const videos = findvideos(params.id)

//   if (!videos) {
//     notFound()
//   }

//   const recommendedvideos = getRecommendedvideos(videos.id)

//   return (
//     <>
//         {/* <div className="container py-6 justify-center items-center">       */}
//      {/* Full-width Image at the Top */}
//      {/* <div className="relative w-full h-[400px] py-6 flex justify-center items-center overflow-hidden">
//   <Image 
//     src={videos.thumbnail || "/placeholder.svg"} 
//     alt={videos.title} 
//     layout="fill" 
//     objectFit="cover" 
//     className="w-full h-full object-cover absolute inset-0"
//   />
// </div> */}
// <div className="relative w-full h-[400px]  flex justify-center items-center overflow-hidden mt-5">
//   <Image 
//     src={videos.thumbnail || "/placeholder.svg"} 
//     alt={videos.title} 
//     layout="fill" 
//     objectFit="cover" 
//     className="absolute inset-0 w-full h-full object-cover"
//   />
// </div>

// {/* </div> */}
// <div className="container py-6 justify-center items-center"> 

//       <h1 className="text-3xl font-bold mb-4">{videos.title}</h1>
//       <p className="text-muted-foreground mb-6">{videos.description}</p>
//   <VideoGrid
//             videos={videos.episodes.map((ep) => ({
//               ...ep,
//               videosTitle: videos.title,
//               videosId: videos.id,
//             }))}
//           />
     
//           <h2 className="text-2xl font-semibold mb-4">Recommended videos</h2>
//           <div className="space-y-4">
//             {recommendedvideos.map((s) => (
//               <Link key={s.id} href={`/videos/${s.id}`} className="block group">
//                 <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                   <Image src={s.thumbnail || "/placeholder.svg"} alt={s.title} layout="fill" objectFit="cover" />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground">{s.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//         </>

//   )
// }





















// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data-2"
// import Link from "next/link"
// import Image from "next/image"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   return superdata.videos.find((v) => v.id === id)
// }

// function getRecommendedVideos(currentVideoId: string, limit = 8) {
//   return superdata.videos.filter((v) => v.id !== currentVideoId).slice(0, limit) // Exclude current video and limit the results
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const video = findVideo(params.id)

//   if (!video) {
//     return {
//       title: "Video Not Found",
//       description: "The requested video could not be found.",
//     }
//   }

//   return {
//     title: video.title,
//     description: video.description,
//     openGraph: {
//       title: video.title,
//       description: video.description,
//       type: "video.movie",
//     },
//   }
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   const recommendedVideos = getRecommendedVideos(video.id)

//   return (
//     <>
//       {/* Full-width Image at the Top */}
//       {/* <div className="relative w-full h-[400px] flex justify-center items-center overflow-hidden mt-5">
//         <Image 
//           src={video.thumbnail || "/placeholder.svg"} 
//           alt={video.title} 
//           layout="fill" 
//           objectFit="cover" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div> */}
//        <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10" style={{ textAlign: 'center' }}>
//   {video.title}
// </h1>

//       <div className="container py-6 justify-center items-center">
          

//         {/* Video Player Component */}
//         <div className="mb-6 " >
         
//           <div
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100%",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <iframe
//           src={video.videoUrl} 
//           title={video.title}
//           frameBorder="0"
//           allowFullScreen
//           style={{ width: "100%", aspectRatio: "16 / 9" }}
//         ></iframe>
//          </div>
//           <p className="text-muted-foreground mb-6 mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.description}</p>
//         </div>

//         {/* Recommended Videos Section */}
//         <h2 className="text-2xl font-semibold mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Recommended Movies</h2>

//         {/* Check if there are recommended videos */}
//         {recommendedVideos.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
//             {recommendedVideos.map((v) => (
//               <Link key={v.id} href={`/movies/${v.id}`} className="block group">
//                 {/* Video Thumbnail */}
//                 <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted mb-2">
//                   <Image 
//                     src={v.thumbnail || "/placeholder.svg"} 
//                     alt={v.title} 
//                     layout="intrinsic" 
//                     width={300}  // Adjust size here
//                     height={170}  // Adjust size here
//                     objectFit="cover" 
//                     style={{ borderRadius: '15px' }} // Adjust the radius as needed
//                   />
//                 </div>

//                 {/* Video Title and Description */}
//                 <h3 className="font-medium group-hover:text-primary">{v.title}</h3>
//                 {/* Optionally display description or any additional content */}
//                 {/* <p className="text-sm text-muted-foreground">{v.description}</p> */}
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p>No recommended movies available.</p>
//         )}
//       </div>
//     </>
//   )
// }
















// Remove the 'use client' directive from the file since it's now client-side
// "use client"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data-2"
// import Link from "next/link"
// import Image from "next/image"
// import { VideoPlayer } from "@/components/video-player"
// import type { Metadata } from "next"
// import { useState, useEffect } from "react"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   return superdata.videos.find((v) => v.id === id)
// }

// function getRecommendedVideos(currentVideoId: string, limit = 500) {
//   return superdata.videos.filter((v) => v.id !== currentVideoId).slice(0, limit) // Exclude current video and limit the results
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   const recommendedVideos = getRecommendedVideos(video.id)

//   // State for shuffled recommended videos
//   const [shuffledVideos, setShuffledVideos] = useState(recommendedVideos)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffledVideos((prevVideos) => {
//         return [...prevVideos].sort(() => Math.random() - 0.5)
//       })
//     }, 5000)

//     return () => clearInterval(interval) // Clear the interval when the component unmounts
//   }, [recommendedVideos]) // Only shuffle if recommendedVideos changes

  
//   return (
//     <>
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10" style={{ textAlign: 'center' }}>
//         {video.title}
//       </h1>

//       <div className="container py-6 justify-center items-center">
//         {/* Video Player Component */}
//         <div className="mb-6 ">
//         <VideoPlayer video={video} />
//           {/* <div
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               width: "100%",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//               borderRadius: "8px",
//               overflow: "hidden",
//             }}
//           >
//             <iframe
//               src={video.videoUrl}
//               title={video.title}
//               frameBorder="0"
//               allowFullScreen
//               style={{ width: "100%", aspectRatio: "16 / 9" }}
//             ></iframe>
//           </div> */}
//           <p className="text-muted-foreground mb-6 mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             {video.description}
//           </p>
//         </div>

//         {/* Recommended Videos Section */}
//         <h2 className="text-2xl font-semibold mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           Recommended Movies
//         </h2>

//         {shuffledVideos.length > 0 ? (
//           <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2 ">
//             {shuffledVideos.map((v) => (
//               <Link key={v.id} href={`/movies/${v.id}`} className="block group">
//                 <div className="relative rounded-lg mb-2">
//                   <Image
//                     src={v.thumbnail || "/placeholder.svg"}
//                     alt={v.title}
//                     layout="intrinsic"
//                     width={1200} // Adjust size here
//                     height={170} // Adjust size here
//                     objectFit="cover"
//                     style={{ borderRadius: '15px' }} // Adjust the radius as needed
//                   />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{v.title}</h3>
                
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p>No recommended movies available.</p>
//         )}
//       </div>
//     </>
//   )
// }




// "use client"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data-2"
// import Link from "next/link"
// import Image from "next/image"
// import { VideoPlayer } from "@/components/video-player"
// import type { Metadata } from "next"
// import { useMemo } from "react"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   return superdata.videos.find((v) => v.id === id)
// }

// function getRecommendedVideos(currentVideoId: string, limit = 500) {
//   return superdata.videos
//     .filter((v) => v.id !== currentVideoId) // Exclude current video
//     .sort(() => Math.random() - 0.5) // Shuffle once
//     .slice(0, limit) // Limit results
// }



// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   // Memoize recommended videos to prevent duplicate rendering
//   const recommendedVideos = useMemo(() => getRecommendedVideos(video.id), [video.id])

//   return (
//     <>
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

//       <div className="container py-6 justify-center items-center">
//         {/* Video Player Component */}
//         <div className="mb-6">
//           <VideoPlayer video={video} />
//           <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
//         </div>

//         {/* Recommended Videos Section */}
//         <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Movies</h2>

//         {recommendedVideos.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {recommendedVideos.map((v) => (
//               <Link key={v.id} href={`/movies/${v.id}`} className="block group">
//                 <div className="relative rounded-lg mb-2">
//                   <Image
//                     src={v.thumbnail || "/placeholder.svg"}
//                     alt={v.title}
//                     width={1200} // Adjusted for better performance
//                     height={170}
//                     quality={90}
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{v.title}</h3>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No recommended movies available.</p>
//         )}
//       </div>
//     </>
//   )
// }

















"use client"
import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data-2"
import Link from "next/link"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"
import { Clock, Eye, Film, Tv, Heart } from "lucide-react"
import type { Metadata } from "next"
import { useMemo } from "react"

interface Props {
  params: {
    id: string
  }
}

function findVideo(id: string) {
  return superdata.videos.find((v) => v.id === id)
}

function getRecommendedVideos(currentVideoId: string, limit = 500) {
  return superdata.videos
    .filter((v) => v.id !== currentVideoId) // Exclude current video
    .sort(() => Math.random() - 0.5) // Shuffle once
    .slice(0, limit) // Limit results
}



export default function VideoPage({ params }: Props) {
  const video = findVideo(params.id)

  if (!video) {
    notFound()
  }

  // Memoize recommended videos to prevent duplicate rendering
  const recommendedVideos = useMemo(() => getRecommendedVideos(video.id), [video.id])

  return (
    <>
      <StructuredData video={video} />
      <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

      <div className="container py-6 justify-center items-center">
        {/* Video Player Component */}
        <div className="mb-6 px-4 md:px-8 lg:px-12">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
        </div>

        {/* Recommended Videos Section */}
        <div className="px-4 md:px-8 lg:px-12"> {/* Added padding for spacing */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Movies</h2>

        {recommendedVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedVideos.map((v) => (
              <Link key={v.id} href={`/movies/${v.id}`} className="block group">
               <div className="relative w-full">
                  {/* "Adult" Label on the Top Left */}
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                  <Film className="w-3 h-3 mr-1" />
                  Movies
                  </div>
                  {/* <Image
                    src={v.thumbnail || "/placeholder.svg"}
                    alt={v.title}
                    width={1200} // Adjusted for better performance
                    height={170}
                    quality={90}
                    objectFit="cover"
                    className="rounded-lg"
                  /> */}
                  <div className="relative w-full aspect-[16/9]">
                <Image
                 src={v.thumbnail || "/placeholder.svg"}
                 alt={v.title}
                  quality={90}
                  fill
                  loading="lazy"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                    filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {v.duration}
                  </div>
                </div>
               
                <h3 className="font-medium group-hover:text-primary"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{v.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center">No recommended movies available.</p>
        )}
      </div>
      </div>
    </>
  )
}
