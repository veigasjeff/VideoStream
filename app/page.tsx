import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VideoStreamHub - Watch Movies, Series & More",
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
}

export default function Home() {
  const movies = superdata.videos.map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Movie",
  }))

  const adultVideos = superdata.adult.map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Adult",
  }))

  const tvSeries = superdata.series.map((series) => ({
    ...series,
    type: "TVSeries",
    rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
  }))

  const allVideos = [
    ...movies,
    ...adultVideos,
    ...tvSeries.flatMap((s) =>
      s.episodes.map((ep) => ({
        ...ep,
        seriesTitle: s.title,
        seriesId: s.id,
        rating: s.rating,
        type: "TVEpisode",
      })),
    ),
  ]

  return (
    <>
      <div className="container py-6 space-y-8 mx-auto text-center">
        <section>
          <h1 className="text-4xl font-bold mb-6">Welcome to VideoStreamHub</h1>
          <p className="text-xl mb-8">Discover the latest movies, TV series, and exclusive Adult content.</p>
          <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
          <VideoGrid videos={allVideos} />
        </section>
      </div>
      </>
  )
}
