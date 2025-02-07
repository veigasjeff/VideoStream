// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { VideoGrid } from "@/components/video-grid"
// import Link from "next/link"
// import Image from "next/image"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findSeries(id: string) {
//   return superdata.series.find((s) => s.id === id)
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 4) {
//   return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const series = findSeries(params.id)

//   if (!series) {
//     return {
//       title: "Series Not Found",
//       description: "The requested series could not be found.",
//     }
//   }

//   return {
//     title: series.title,
//     description: series.description,
//     openGraph: {
//       title: series.title,
//       description: series.description,
//       type: "video.movie",
//     },
//   }
// }

// export default function SeriesPage({ params }: Props) {
//   const series = findSeries(params.id)

//   if (!series) {
//     notFound()
//   }

//   const recommendedSeries = getRecommendedSeries(series.id)

//   return (
//     <>
//       <div className="container py-6 justify-center items-center ml-2"> 
//       <h1 className="text-3xl font-bold mb-4 ml-2">{series.title}</h1>
//       <p className="text-muted-foreground mb-6 ml-2">{series.description}</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-2">
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4 ml-2">Episodes</h2>
//           <VideoGrid
//             videos={series.episodes.map((ep) => ({
//               ...ep,
//               seriesTitle: series.title,
//               seriesId: series.id,
//             }))}
//           />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Recommended Series</h2>
//           <div className="space-y-4">
//             {recommendedSeries.map((s) => (
//               <Link key={s.id} href={`/video/${s.id}`} className="block group">
//                 <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                   <Image src={s.thumbnail || "/placeholder.svg"} alt={s.title} layout="fill" objectFit="cover" />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground">{s.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     </>

//   )
// }




import { Metadata } from "next"
import superdata from "@/data/superdata.json"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const series = superdata.series.find((s) => s.id === params.id)

  if (!series) {
    return {
      title: "Series Not Found",
      description: "The requested series could not be found.",
    }
  }

  return {
    title: series.title,
    description: series.description,
    openGraph: {
      title: series.title,
      description: series.description,
      type: "video.movie", // or type: "series" if you prefer
    },
  }
}
