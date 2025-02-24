// // /app/movies/metadata.ts (Server-side logic)

// import { Metadata } from "next"
// import superdata from "@/data/superdata.json"

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const video = superdata.videos.find((v) => v.id === params.id)

//   if (!video) {
//     return {
//       title: "Video Not Found",
//       description: "The requested video could not be found.",
//     }
//   }

//   return {
//     title: video.title,
//     description: video.description,
//     openGraph: {
//       title: video.title,
//       description: video.description,
//       type: "video.movie",
//     },
//   }
// }














// import type { Metadata } from "next"
// import superdata from "@/data/superdata.json"

// interface Props {
//   params: {
//     id: string
//   }
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const video = superdata.videos.find((v) => v.id === params.id)

//   if (!video) {
//     return {
//       title: "Video Not Found",
//       description: "The requested video was not found.",
//     }
//   }

//   return {
//     title: video.title,
//     description: video.description,
//     alternates: {
//       canonical: `https://videostreamhub.vercel.app/hindi-dubbed/${video.id}`,
//     },
//     openGraph: {
//       title: video.title,
//       description: video.description,
//       images: video.thumbnail ? [{ url: video.thumbnail }] : [], 
//       type: "video.movie",
//     },
//     other: {
//       dateCreated: video.uploadDate,    
//     },
//   }
// }

import { Metadata } from "next"
import superdata from "@/data/superdata.json"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const video = superdata.videos.find((v) => v.id === params.id)

  if (!video) {
    return {
      title: "Video Not Found",
      description: "The requested video could not be found.",
    }
  }

  return {
    title: video.title,
    description: video.description,
    alternates: {
    canonical: `https://videostreamhub.vercel.app/hindi-dubbed/${video.id}`,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.movie",
    },
  }
}