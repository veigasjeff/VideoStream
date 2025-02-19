import Link from "next/link"
import Image from "next/image"
import superdata from "@/data/superdata.json"
import { Clock, Eye, Film, Tv, Heart } from "lucide-react"

export default function SeriesPage() {
  const allVideos = [
    ...superdata.series.map((series) => ({
      ...series,
      seriesTitle: series.title,  // Correctly set seriesTitle for videos
    }))
  ]

  return (
    <div className="container py-6 space-y-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-6 ">TV Series</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {/* {superdata.series.map((series) => (
            <Link key={series.id} href={`/series/${series.id}`} className="group"> */}
        {allVideos.map((series) => (
          <Link key={series.id} href={`/series/${series.id}`} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {/* <Image
                src={series.thumbnail || "/placeholder.svg"}
                alt={series.title}
                quality={90}
                layout="fill"
                objectFit="cover"
                style={{
                  filter:
                    "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
                }}
              /> */}
             <div className="relative w-full aspect-[16/9]">
                <Image
                  src={series.thumbnail || "/placeholder.svg"}
                  alt={series.title}
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
              {/* Display 'Series' label for series titles */}
              {series.title && (
                <div className="absolute top-2 left-2 flex space-x-2">
                  <div className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <Tv className="w-3 h-3 mr-1" />
                    Series
                  </div>
                  {/* <div className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <span>TV</span>
                  </div> */}
                </div>
              )}

              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {series.duration}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>

              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <Eye className="w-4 h-4 mr-1" />
                {series.views.toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
