// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import type { Metadata } from "next"
// import Script from "next/script"

// export const metadata: Metadata = {
//   title: "VideoStreamHub - Watch Movies, Series & More",
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
// }

// export default function Home() {
//   const movies = superdata.videos.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Movie",
//   }))

//   const adultVideos = superdata.adult.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Adult",
//   }))

//   const tvSeries = superdata.series.map((series) => ({
//     ...series,
//     type: "TVSeries",
//     rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
//   }))

//   const allVideos = [
//     ...movies,
//     ...adultVideos,
//     ...tvSeries.flatMap((s) =>
//       s.episodes.map((ep) => ({
//         ...ep,
//         seriesTitle: s.title,
//         seriesId: s.id,
//         rating: s.rating,
//         type: "TVEpisode",
//       })),
//     ),
//   ]

//   return (
//     <>
//     <Script async data-id="101478638" src="//static.getclicky.com/js" />
//       <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
//       <div className="container py-6 space-y-8 mx-auto text-center">
//         <section>
//           <h1 className="text-4xl font-bold mb-6">Welcome to VideoStreamHub</h1>
//           <p className="text-xl mb-8">Discover the latest movies, TV series, and exclusive Adult content.</p>
//           <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
//           <VideoGrid videos={allVideos} />
//         </section>
//       </div>
//       </>
//   )
// }











































// import { VideoGrid } from "@/components/video-grid";
// import superdata from "@/data/superdata.json";
// import Script from "next/script";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "VideoStreamHub - Watch Movies, Series & More",
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
// };


// export default function Home() {
//   const movies = superdata.videos.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Movie",
//   }));

//   const adultVideos = superdata.adult.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Adult",
//   }));


//   const tvSeries = superdata.series.map((series) => ({
//     ...series,
//     type: "TVSeries",
//     rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
//   }));

//   const hindiDubbedMovies = superdata.hindiDubbed
//   ? superdata.hindiDubbed.map((video) => ({
//     ...video,
//     movieTitle: video.title,
//     type: "Hindi-Dubbed",
//   }))
//   : []; // If undefined, fallback to an empty array

//   const allVideos = [
//     ...movies,
//     ...adultVideos,
   
//     ...tvSeries.flatMap((s) =>
//       s.episodes.map((ep) => ({
//         ...ep,
//         seriesTitle: s.title,
//         seriesId: s.id,
//         rating: s.rating,
//         type: "TVEpisode",
//       }))
//     ),
//     ...hindiDubbedMovies, // ✅ Include Hindi-Dubbed movies
//   ];

//   return (
//     <>
//       <Script async data-id="101478638" src="//static.getclicky.com/js" />
//       <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
//       <div className="container py-6 space-y-8 mx-auto text-center">
//         <section>
//           <h1 className="text-4xl font-bold mb-6">Welcome to VideoStreamHub</h1>
//           <p className="text-xl mb-8">Discover the latest movies, TV series, and exclusive Adult content.</p>
//           <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
//           <VideoGrid videos={allVideos} />
//         </section>
//       </div>
//     </>
//   );
// }



import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VideoStreamHub - Watch Movies, Series & More",
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
}

// Limit initial load for better performance
const INITIAL_LOAD_COUNT = 12

export default function Home() {
  // Process only the initial set of videos for first load
  const movies = superdata.videos.slice(0, INITIAL_LOAD_COUNT).map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Movie",
  }))

  const adultVideos = superdata.adult.slice(0, INITIAL_LOAD_COUNT).map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Adult",
  }))

  const tvSeries = superdata.series.slice(0, INITIAL_LOAD_COUNT).map((series) => ({
    ...series,
    type: "TVSeries",
    rating: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0),
  }))

  const hindiDubbedMovies = superdata.hindiDubbed
    ? superdata.hindiDubbed.slice(0, INITIAL_LOAD_COUNT).map((video) => ({
        ...video,
        movieTitle: video.title,
        type: "Hindi-Dubbed",
      }))
    : []

  const allVideos = [
    ...movies,
    ...adultVideos,
    ...tvSeries.flatMap((s) =>
      s.episodes.slice(0, 1).map((ep) => ({
        ...ep,
        seriesTitle: s.title,
        seriesId: s.id,
        rating: s.rating,
        type: "TVEpisode",
      })),
    ),
    ...hindiDubbedMovies,
  ].slice(0, INITIAL_LOAD_COUNT)

  return (
    <>
      {/* Move analytics scripts to layout.tsx */}
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


