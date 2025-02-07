// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import Link from "next/link"
// import Image from "next/image"
// import { VideoPlayer } from "@/components/video-player"
// import { StructuredData } from "@/components/structured-data-1"

// interface Props {
//   params: {
//     id: string
//   }
// }


// function findAdultVideo(id: string) {
//   return superdata.adult.find((v) => v.id === id)
// }

// function getRecommendedAdultVideos(currentVideoId: string, limit = 4) {
//   return superdata.adult.filter((v) => v.id !== currentVideoId).slice(0, limit)
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const video = findAdultVideo(params.id)

  

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


// export default function AdultVideoPage({ params }: Props) {
//   const video = findAdultVideo(params.id)

  
//   if (!video) {
//     notFound()
//   }

//   const recommendedVideos = getRecommendedAdultVideos(video.id)

//   return (
//     <>
//       {/* <div className="relative w-full h-[400px] flex justify-center items-center overflow-hidden mt-5">
//         <Image
//           src={video.thumbnail || "/placeholder.svg"}
//           alt={video.title}
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div> */}
//         <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10" style={{ textAlign: "center" }}>
//         {video.title}
//       </h1>

//       <div className="container py-6 justify-center items-center">
//         <div className="mb-6 ">
//           <VideoPlayer video={video} />
//           {/* <div className="mb-6 " > */}
//           {/* <div className="relative w-full pb-[56.25%]"> 
//             <iframe
//               src={video.videoUrl} 
//               title={video.title}
//               className="absolute top-0 left-0 w-full h-full"
//               frameBorder="0" 
//               allowFullScreen
//             ></iframe>
//           </div> */}
//           <p className="text-muted-foreground mb-6 mt-4 flex justify-center items-center">{video.description}</p>
//         </div>

//         <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">Recommended Adult Videos</h2>

//         {recommendedVideos.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
//             {recommendedVideos.map((v) => (
//               <Link key={v.id} href={`/adult/${v.id}`} className="block group">
//                <div className="relative mb-2 flex justify-center items-center">
//                   <Image
//                     src={v.thumbnail || "/placeholder.svg"}
//                     alt={v.title}
//                     layout="intrinsic"
//                     width={300}
//                     height={170}
//                     objectFit="cover"
//                     style={{ borderRadius: '15px' }} // Adjust the radius as needed
//                   />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary flex justify-center items-center">{v.title}</h3>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p>No recommended videos available.</p>
//         )}
//       </div>
//     </>
//   )
// }



// /app/adult/[id]/page.tsx (Client-side component)
"use client"
import { useState, useEffect } from "react" // Import hooks for state and effect
import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data-1"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"
import Image from "next/image"



interface Props {
  params: {
    id: string
  }
}

function findAdultVideo(id: string) {
  return superdata.adult.find((v) => v.id === id)
}

function getRecommendedAdultVideos(currentVideoId: string, limit = 500) {
  return superdata.adult.filter((v) => v.id !== currentVideoId).slice(0, limit)
}

export default function AdultVideoPage({ params }: Props) {
  const video = findAdultVideo(params.id)

  if (!video) {
    notFound()
  }

  // Get the recommended videos initially
  const initialRecommendedVideos = getRecommendedAdultVideos(video.id)

  // Use state to store shuffled videos
  const [shuffledVideos, setShuffledVideos] = useState(initialRecommendedVideos)

  // Shuffle the videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledVideos((prevVideos) => {
        // Shuffle the array randomly
        return [...prevVideos].sort(() => Math.random() - 0.5)
      })
    }, 5000) // 5 seconds interval

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [initialRecommendedVideos]) // Only set the shuffle if the recommended videos change

  return (
    <>
      <StructuredData video={video} />
      
      <h1 className="text-3xl font-bold pt-10" style={{ textAlign: "center" }}>
        {video.title}
      </h1>

      <div className="container py-6 justify-center items-center">
        <div className="mb-6 ">
        <VideoPlayer video={video} />
          {/* <div className="relative w-full pb-[56.25%]">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div> */}
          <p className="text-muted-foreground mb-6 mt-4 flex justify-center items-center">{video.description}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center">
          Recommended Adult Videos
        </h2>

        {shuffledVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {shuffledVideos.map((v) => (
              <Link key={v.id} href={`/adult/${v.id}`} className="block group">
                <div className="relative mb-2 flex justify-center items-center">
                  <Image
                    src={v.thumbnail || "/placeholder.svg"}
                    alt={v.title}
                    layout="intrinsic"
                    width={1200}
                    height={170}
                    objectFit="cover"
                    style={{ borderRadius: '15px' }}
                  />
                </div>
                <h3 className="font-medium group-hover:text-primary"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{v.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p>No recommended videos available.</p>
        )}
      </div>
    </>
  )
}
