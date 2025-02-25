import Head from "next/head"
import superdata from "@/data/superdata.json"

interface MetadataProps {
  id: string
}

function findVideo(id: string) {
  const video = superdata.videos.find((v) => v.id === id) || null
  console.log("🔍 Found video:", video) // Debugging log
  return video
}

export function Metadata({ id }: MetadataProps) {
  const video = findVideo(id)

  if (!video) return null // If video doesn't exist, return nothing

  console.log("🖼️ Thumbnail URL:", video.thumbnail) // Debugging log

  return (
    <Head>
      <title>{video.title} - Watch Now</title>
      <meta name="description" content={video.description} />
      <meta property="og:title" content={video.title} />
      <meta property="og:description" content={video.description} />
      <meta property="og:image" content={video.thumbnail} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content={`https://yourwebsite.com/movies/${id}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={video.title} />
      <meta name="twitter:description" content={video.description} />
      <meta name="twitter:image" content={video.thumbnail} />
    </Head>
  )
}
