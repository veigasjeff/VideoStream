import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VideoStreamHub - Watch Movies, Series & More",
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
}

export default function Home() {
  // Process all sections with their complete data
  const movies = superdata.movie.map((video) => ({
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

  const hindiDubbedMovies = superdata.hindiDubbed
    ? superdata.hindiDubbed.map((video) => ({
        ...video,
        movieTitle: video.title,
        type: "Hindi-Dubbed",
      }))
    : []

  // Separate videos by section
  const tvEpisodes = tvSeries.flatMap((s) =>
    s.episodes.map((ep) => ({
      ...ep,
      seriesTitle: s.title,
      seriesId: s.id,
      rating: s.rating,
      type: "TVEpisode",
    })),
  )

  return (
    <>
      <Script async data-id="101478638" src="//static.getclicky.com/js" />
      <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
      <div className="container py-6 space-y-12 mx-auto">
        <section>
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to VideoStreamHub</h1>
          <p className="text-xl mb-8 text-center">
            Discover the latest movies, TV series, and exclusive Adult content.
          </p>
        </section>

        {/* Movies Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
          <VideoGrid videos={movies} />
        </section>

        {/* TV Series Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">TV Series</h2>
          <VideoGrid videos={tvEpisodes} />
        </section>

        {/* Hindi Dubbed Section */}
        {hindiDubbedMovies.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Hindi Dubbed Movies</h2>
            <VideoGrid videos={hindiDubbedMovies} />
          </section>
        )}

        {/* Adult Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Adult Content</h2>
          <VideoGrid videos={adultVideos} />
        </section>
      </div>
    </>
  )
}


