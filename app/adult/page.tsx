// import Link from "next/link"
// import Image from "next/image"
// import superdata from "@/data/superdata.json"

// export default function AdultPage() {
//   return (
//     <div className="container py-6 space-y-8 ">
//       <h1 className="text-3xl font-bold mb-6 ">Adult Content</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//         {superdata.adult.map((video) => (
//           <Link key={video.id} href={`/adult/${video.id}`} className="group">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted ">
//               <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} layout="fill" objectFit="cover" />
//             </div>
//             <div className="mt-2 ">
//               <h3 className="font-medium line-clamp-2 group-hover:text-primary">{video.title}</h3>
//               <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
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
import { Clock, Eye } from "lucide-react"

export default function AdultPage() {
  // Combine adult content with adultTitle
  const allVideos = [
    ...superdata.adult.map((video) => ({
      ...video,
      adultTitle: video.title,  // Correctly set adultTitle for adult videos
    }))
  ]

  return (
    <div className="container py-6 space-y-8 ">
      <h1 className="text-3xl font-bold mb-6 ">Adult Content</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {allVideos.map((video) => (
          <Link key={video.id} href={`/adult/${video.id}`} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted ">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
              {/* Display 'Adult' label only for adult titles */}
              {video.adultTitle && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
                  Adult
                </div>
                
              )}
                 <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {video.duration}
            </div>
            
            </div>
         
            <div className="mt-2 ">

              <h3 className="font-medium line-clamp-2 group-hover:text-primary">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
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
