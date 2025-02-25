import Head from "next/head"

interface MetadataProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  }
}

export function Metadata({ video }: MetadataProps) {
  if (!video) return null

  console.log("🔍 Video Metadata:", video) // Debugging log

  return (
    <Head>
      <title>{video.title} - Watch Now</title>
      <meta name="description" content={video.description} />
      <meta property="og:title" content={video.title} />
      <meta property="og:description" content={video.description} />
      {/* <meta property="og:image" content={video.thumbnail} /> */}
      <meta property="og:image" content={`${video.thumbnail}?v=${Date.now()}`} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content={`https://videostreamhub.vercel.app/movies/${video.id}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={video.title} />
      <meta name="twitter:description" content={video.description} />
      <meta name="twitter:image" content={video.thumbnail} />
    </Head>
  )
}
