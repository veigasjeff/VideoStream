import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  featuredVideo: {
    id: string
    title: string
    thumbnail: string
    description?: string
    type: "Movie" | "Hindi-Dubbed" | "TVEpisode" | "TVSeries" | "Adult"
  }
}

export function HeroSection({ featuredVideo }: HeroProps) {
  const getVideoUrl = (video: any) => {
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

  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-8 md:mb-12">
      <Image
        src={featuredVideo.thumbnail || "/placeholder.svg"}
        alt={featuredVideo.title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full md:w-2/3">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{featuredVideo.title}</h1>
        {featuredVideo.description && <p className="text-white/80 mb-4 line-clamp-2">{featuredVideo.description}</p>}
        <Button asChild className="gap-2">
          <Link href={getVideoUrl(featuredVideo)}>
            <Play className="w-4 h-4" />
            Watch Now
          </Link>
        </Button>
      </div>
    </div>
  )
}




