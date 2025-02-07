import Image from "next/image"
import Link from "next/link"
import { Clock, Eye } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: number
  seriesTitle?: string
  seriesId?: string
}

export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Link key={video.id} href={`/video/${video.id}`} className="group">

          <div className="relative aspect-video rounded-lg overflow-hidden">
       
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              quality={90}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-105"
              style={{
                filter:
                "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
            }}
            />
            
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {video.duration}
            </div>
            {video.seriesTitle && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
                Series
              </div>
            )}
          </div>
          <div className="mt-2">
            <h3 className="font-medium line-clamp-2 group-hover:text-primary">{video.title}</h3>
            {/* {video.seriesTitle && <p className="text-sm text-muted-foreground mt-1">{video.seriesTitle}</p>} */}
            <p className="text-sm text-muted-foreground flex items-center mt-1 ml-9">
              <Eye className="w-4 h-4 mr-1" />
              {video.views.toLocaleString()} views
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

