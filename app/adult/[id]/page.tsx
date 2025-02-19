// "use client"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data-1"
// import { VideoPlayer } from "@/components/video-player"
// import Link from "next/link"
// import Image from "next/image"
// import { useMemo } from "react"
// import { Clock, Eye, Heart } from "lucide-react"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findAdultVideo(id: string) {
//   return superdata.adult.find((v) => v.id === id)
// }

// function getRecommendedAdultVideos(currentVideoId: string, limit = 500) {
//   return superdata.adult
//     .filter((v) => v.id !== currentVideoId) // Exclude current video
//     .sort(() => Math.random() - 0.5) // Shuffle once
//     .slice(0, limit) // Limit results
// }

// export default function AdultVideoPage({ params }: Props) {
//   const video = findAdultVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   // Memoized recommended videos to prevent unnecessary re-renders
//   const recommendedVideos = useMemo(() => getRecommendedAdultVideos(video.id), [video.id])

//   return (
//     <>
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

//       <div className="container py-6 justify-center items-center">
//       <div className="mb-6 px-4 md:px-8 lg:px-12">
//           <VideoPlayer video={video} />
//           <p className="text-muted-foreground mb-6 mt-4 text-center">{video.description}</p>
//         </div>

//         {/* Recommended Videos Section */}
//         <div className="px-4 md:px-8 lg:px-12"> {/* Added padding for spacing */}
//           <h2 className="text-2xl font-semibold mb-4 text-center">
//             Recommended Adult Videos
//           </h2>

//           {recommendedVideos.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {recommendedVideos.map((v) => (
//                 <Link key={v.id} href={`/adult/${v.id}`} className="block group">
//                   <div className="relative w-full">
//                     {/* "Adult" Label on the Top Left */}
//                     <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
//                       <Heart className="w-3 h-3 mr-1" />
//                       Adult
//                     </div>

//                     {/* Video Thumbnail */}
//                     {/* <Image
//                     src={v.thumbnail || "/placeholder.svg"}
//                     alt={v.title}
//                     width={1200}
//                     height={170}
//                     quality={90}
//                     objectFit="cover"
//                     className="rounded-lg"
//                   /> */}

//                     <div className="relative w-full aspect-[16/9]">
//                       <Image
//                         src={v.thumbnail || "/placeholder.svg"}
//                         alt={v.title}
//                         quality={90}
//                         fill
//                         loading="lazy"
//                         className="rounded-lg"
//                         style={{
//                           objectFit: "cover",
//                           filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//                         }}
//                       />
//                     </div>
//                     {/* Duration on Bottom Right */}
//                     <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//                       <Clock className="w-3 h-3 mr-1" />
//                       {v.duration}
//                     </div>
//                   </div>

//                   {/* Title Centered */}
//                   <h3 className="font-medium group-hover:text-primary text-center">
//                     {v.title}
//                   </h3>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center">No recommended videos available.</p>
//           )}
//         </div>
//         </div>
//       </>
//       )
// }


// "use client"

// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data-1"
// import { VideoPlayer } from "@/components/video-player"
// import Link from "next/link"
// import Image from "next/image"
// import { useEffect, useMemo, useState } from "react"
// import { Clock, Heart } from "lucide-react"

// interface Props {
//   params: {
//     id: string
//   }
// }

// const adVideoUrl = "https://res.cloudinary.com/dm37icb6j/video/upload/v1739845637/main_zmp0bz.mp4"
// const popupAdUrl = "https://res.cloudinary.com/dm37icb6j/video/upload/v1739803773/AD1_jr0ngh.mp4"

// function findAdultVideo(id: string) {
//   return superdata.adult.find((v) => v.id === id)
// }

// function getRecommendedAdultVideos(currentVideoId: string, limit = 500) {
//   return superdata.adult
//     .filter((v) => v.id !== currentVideoId)
//     .sort(() => Math.random() - 0.5)
//     .slice(0, limit)
// }

// export default function AdultVideoPage({ params }: Props) {
//   const video = findAdultVideo(params.id)
//   const [showPopupAd, setShowPopupAd] = useState(false)
//   const [showMainVideo, setShowMainVideo] = useState(false)
//   const [skipCountdown, setSkipCountdown] = useState(5)
//   const [showSkipButton, setShowSkipButton] = useState(false)

//   if (!video) {
//     notFound()
//   }

//   const recommendedVideos = useMemo(() => getRecommendedAdultVideos(video.id), [video.id])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowPopupAd(true)
//       setTimeout(() => setShowPopupAd(false), 5000)
//     }, 15000)

//     return () => clearInterval(interval)
//   }, [])

//   // Skip Ad Countdown Logic
//   useEffect(() => {
//     if (!showMainVideo) {
//       const countdownInterval = setInterval(() => {
//         setSkipCountdown((prev) => {
//           if (prev <= 1) {
//             clearInterval(countdownInterval)
//             setShowSkipButton(true)
//             return 0
//           }
//           return prev - 1
//         })
//       }, 1000)

//       return () => clearInterval(countdownInterval)
//     }
//   }, [showMainVideo])

//   return (
//     <>
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

//       <div className="container py-6 justify-center items-center">
//         <div className="mb-6 px-4 md:px-8 lg:px-12 relative">
//           {/* Main Ad Video */}
//           {!showMainVideo && (
//             <div className="relative">
//               <video
//                 src={adVideoUrl}
//                 controls
//                 autoPlay
//                 className="w-full rounded-lg"
//                 onEnded={() => setShowMainVideo(true)}
//               />
//               {/* Skip Button */}
//               {showSkipButton ? (
//                 <button
//                   onClick={() => setShowMainVideo(true)}
//                   className="absolute top-3 right-3 bg-black/80 text-white px-4 py-2 text-sm rounded-md"
//                 >
//                   Skip Ad
//                 </button>
//               ) : (
//                 <div className="absolute top-3 right-3 bg-black/80 text-white px-4 py-2 text-sm rounded-md">
//                   Skip in {skipCountdown}s
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Main Video */}
//           {showMainVideo && <VideoPlayer video={video} />}

//           <p className="text-muted-foreground mb-6 mt-4 text-center">{video.description}</p>
//         </div>

//         {/* Popup Ad */}
//         {showPopupAd && (
//           <div className="fixed bottom-5 right-5 w-[320px] h-[180px] bg-black p-2 rounded-lg shadow-lg z-50">
//             <video src={popupAdUrl} autoPlay muted className="w-full h-full rounded-lg" />
//           </div>
//         )}

//         {/* Recommended Videos Section */}
//         <div className="px-4 md:px-8 lg:px-12">
//           <h2 className="text-2xl font-semibold mb-4 text-center">
//             Recommended Adult Videos
//           </h2>

//           {recommendedVideos.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {recommendedVideos.map((v) => (
//                 <Link key={v.id} href={`/adult/${v.id}`} className="block group">
//                   <div className="relative w-full">
//                     <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
//                       <Heart className="w-3 h-3 mr-1" />
//                       Adult
//                     </div>

//                     <div className="relative w-full aspect-[16/9]">
//                       <Image
//                         src={v.thumbnail || "/placeholder.svg"}
//                         alt={v.title}
//                         quality={90}
//                         fill
//                         loading="lazy"
//                         className="rounded-lg"
//                         style={{
//                           objectFit: "cover",
//                           filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//                         }}
//                       />
//                     </div>
//                     <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//                       <Clock className="w-3 h-3 mr-1" />
//                       {v.duration}
//                     </div>
//                   </div>

//                   <h3 className="font-medium group-hover:text-primary text-center">
//                     {v.title}
//                   </h3>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center">No recommended videos available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }



"use client"

import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data-1"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import { Clock, Eye, Heart } from "lucide-react"

interface Props {
  params: {
    id: string
  }
}

function findAdultVideo(id: string) {
  return superdata.adult.find((v) => v.id === id)
}

function getRecommendedAdultVideos(currentVideoId: string, limit = 500) {
  return superdata.adult
    .filter((v) => v.id !== currentVideoId) // Exclude current video
    .sort(() => Math.random() - 0.5) // Shuffle once
    .slice(0, limit) // Limit results
}

export default function AdultVideoPage({ params }: Props) {
  const video = findAdultVideo(params.id)

  if (!video) {
    notFound()
  }

  const recommendedVideos = useMemo(() => getRecommendedAdultVideos(video.id), [video.id])

  const [showAd, setShowAd] = useState(true)
  const [adSkipped, setAdSkipped] = useState(false)
  const [skipButtonVisible, setSkipButtonVisible] = useState(false)
  const [countdown, setCountdown] = useState(8)
  const [showPopupAd, setShowPopupAd] = useState(false)

  const adVideoUrl = "https://res.cloudinary.com/dm37icb6j/video/upload/v1739845637/main_zmp0bz.mp4"
  const popupAdUrl = "https://res.cloudinary.com/dm37icb6j/video/upload/v1739803773/AD1_jr0ngh.mp4"

  useEffect(() => {
    if (showAd && countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000)
      return () => clearInterval(timer)
    } else if (countdown === 0) {
      setSkipButtonVisible(true)
    }
  }, [showAd, countdown])

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopupAd(true), 15000)
    const loopPopupAd = setInterval(() => setShowPopupAd(true), 15000)
    return () => {
      clearTimeout(popupTimer)
      clearInterval(loopPopupAd)
    }
  }, [])

  const handleAdSkip = () => {
    setAdSkipped(true)
    setShowAd(false)
  }

  const handleAdEnd = () => {
    setAdSkipped(true)
    setShowAd(false)
  }

  const handlePopupAdClose = () => setShowPopupAd(false)

  return (
    <>
      <StructuredData video={video} />
      <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

      <div className="container py-6 justify-center items-center">
        <div className="mb-6 px-4 md:px-8 lg:px-12">
          {showAd && !adSkipped ? (
            <div className="relative w-full aspect-video mb-4">
              <video autoPlay muted loop onEnded={handleAdEnd} className="absolute inset-0 w-full h-full object-cover">
                <source src={adVideoUrl} type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg">Skip the ad in {countdown} sec.</p>
                {skipButtonVisible && (
                  <button onClick={handleAdSkip} className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    Skip Ad
                  </button>
                )}
              </div>
            </div>
          ) : (
            <VideoPlayer video={video} />
          )}
        </div>

        {showPopupAd && (
          <div className="fixed bottom-5 right-5 w-80 bg-black text-white p-4 rounded-lg shadow-lg z-50">
            <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-full text-xs font-semibold z-10">Ad</div>
            <button onClick={handlePopupAdClose} className="absolute top-2 right-2 text-gray-400 hover:text-white z-20">✖</button>
            <a href="https://amazonaffiliatestore.vercel.app/" target="_blank" rel="noopener noreferrer">
              <video autoPlay muted loop className="w-full rounded-lg mt-8">
                <source src={popupAdUrl} type="video/mp4" />
              </video>
            </a>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Adult Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendedVideos.map((v) => (
            <Link key={v.id} href={`/adult/${v.id}`} className="block group">
              <div className="relative w-full">
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                  <Heart className="w-3 h-3 mr-1" /> Adult
                </div>
                <div className="relative w-full aspect-[16/9]">
                  <Image src={v.thumbnail || "/placeholder.svg"} alt={v.title} quality={90} fill loading="lazy" className="rounded-lg" style={{ objectFit: "cover" }} />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {v.duration}
                </div>
              </div>
              <h3 className="font-medium group-hover:text-primary text-center">{v.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
