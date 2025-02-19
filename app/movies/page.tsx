// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"

// export default function MoviesPage() {
//   return (
//     <div className="container py-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">Movies</h1>
//       <VideoGrid videos={superdata.videos} />
//     </div>
//   )
// }

// import Link from "next/link"
// import Image from "next/image"
// import superdata from "@/data/superdata.json"

// export default function videosPage() {

//    const allVideos = [
//       ...superdata.videos.map((video) => ({
//         ...video,
//         movieTitle: video.title,  // Correctly set adultTitle for adult videos
//       }))
//     ]

//   return (
//     <div className="container py-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">videos</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {superdata.videos.map((videos) => (
//           <Link key={videos.id} href={`/movies/${videos.id}`} className="group">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
//               <Image src={videos.thumbnail || "/placeholder.svg"} alt={videos.title} layout="fill" objectFit="cover" />

//             </div>
//             <div className="mt-2">
//               <h3 className="font-medium line-clamp-2 group-hover:text-primary">{videos.title}</h3>
//               <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{videos.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// import Link from "next/link"
// import Image from "next/image"
// import superdata from "@/data/superdata.json"
// import { Clock, Eye } from "lucide-react"

// export default function VideosPage() {
//   const allVideos = [
//     ...superdata.videos.map((video) => ({
//       ...video,
//       movieTitle: video.title,  // Correctly set movieTitle for videos
//     }))
//   ]

//   return (
//     <div className="container py-6 space-y-8 ">
//       <h1 className="text-3xl font-bold mb-6 ">Movies</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//         {allVideos.map((video) => (
//           <Link key={video.id} href={`/movies/${video.id}`} className="group">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted ">
//               <Image
//                 src={video.thumbnail || "/placeholder.svg"}
//                 alt={video.title}
//                 quality={90}
//                 layout="fill"
//                 objectFit="cover"
//                 style={{
//                   filter:
//                   "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
//               }}
//               />
//               {/* Display 'Movies' label for movie titles */}
//               {video.movieTitle && (
//                 <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
//                   Movies
//                 </div>
//               )}
//                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//               <Clock className="w-3 h-3 mr-1" />
//               {video.duration}
//             </div>
//             </div>
//             <div className="mt-2">
//               <h3 className="font-medium line-clamp-2 group-hover:text-primary " >{video.title}</h3>
//               <p className="text-sm text-muted-foreground mt-1 line-clamp-2 ">{video.description}</p>
//               <p className="text-sm text-muted-foreground flex items-center mt-1">
//               <Eye className="w-4 h-4 mr-1" />
//               {video.views.toLocaleString()} views
//             </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }


import Link from "next/link"
import Image from "next/image"
import superdata from "@/data/superdata.json"
import { Clock, Eye, Film, Tv, Heart } from "lucide-react"

export default function VideosPage() {
  const allVideos = [
    ...superdata.videos.map((video) => ({
      ...video,
      movieTitle: video.title,  // Correctly set movieTitle for videos
    }))
  ]

  return (
    <div className="container py-6 space-y-8 ">
      <h1 className="text-3xl font-bold mb-6 ">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        
        {allVideos.map((video) => (
          <Link key={video.id} href={`/movies/${video.id}`} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted ">
              {/* <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                quality={90}
                layout="fill"
                objectFit="cover"
                style={{
                  filter:
                  "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
              }}
              /> */}
              <div className="relative w-[320px] h-[180px]">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  quality={90}
                  fill
                  loading="lazy"
                  className="transition-transform group-hover:scale-105"
                  style={{
                    objectFit: "cover",
                    filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              </div>
              {/* Display 'Movies' label for movie titles */}
              {video.movieTitle && (
                // <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
                //   Movies
                // </div>
                <div className="absolute top-2 left-2 flex space-x-2">
                  <div className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <Film className="w-3 h-3 mr-1" />
                    Movies
                  </div>
                  {/* <div className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                  <span>TV</span>
                </div> */}
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {video.duration}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium line-clamp-2 group-hover:text-primary " >{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2 ">{video.description}</p>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <Eye className="w-4 h-4 mr-1" />
                {video.views.toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
