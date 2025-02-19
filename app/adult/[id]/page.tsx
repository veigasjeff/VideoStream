"use client"
import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data-1"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
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

  // Memoized recommended videos to prevent unnecessary re-renders
  const recommendedVideos = useMemo(() => getRecommendedAdultVideos(video.id), [video.id])

  return (
    <>
      <StructuredData video={video} />
      <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

      <div className="container py-6 justify-center items-center">
        <div className="mb-6">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-4 text-center">{video.description}</p>
        </div>

        {/* Recommended Videos Section */}
        <div className="px-4 md:px-8 lg:px-12"> {/* Added padding for spacing */}
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Recommended Adult Videos
          </h2>

          {recommendedVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedVideos.map((v) => (
                <Link key={v.id} href={`/adult/${v.id}`} className="block group">
                  <div className="relative w-full">
                    {/* "Adult" Label on the Top Left */}
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      Adult
                    </div>

                    {/* Video Thumbnail */}
                    {/* <Image
                    src={v.thumbnail || "/placeholder.svg"}
                    alt={v.title}
                    width={1200}
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
                    {/* Duration on Bottom Right */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {v.duration}
                    </div>
                  </div>

                  {/* Title Centered */}
                  <h3 className="font-medium group-hover:text-primary text-center">
                    {v.title}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center">No recommended videos available.</p>
          )}
        </div>
        </div>
      </>
      )
}
