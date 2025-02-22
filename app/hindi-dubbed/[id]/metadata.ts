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

import type { Metadata } from "next";
import superdata from "@/data/superdata.json";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Search for video in "hindiDubbed" array
  const video = superdata.hindiDubbed.find((v) => v.id === params.id);

  if (!video) {
    return {
      title: "Video Not Found",
      description: "The requested video was not found.",
      alternates: {
        canonical: "https://videostreamhub.vercel.app",
      },
      openGraph: {
        title: "Video Not Found",
        description: "This video does not exist.",
        type: "website",
        images: [
          {
            url: "https://videostreamhub.vercel.app/placeholder.svg", // Default fallback image
            width: 1200,
            height: 630,
            alt: "Video Not Found",
          },
        ],
      },
    };
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
      images: [
        {
          url: video.thumbnail, // ✅ Uses correct thumbnail from JSON
          width: 1200,
          height: 630,
          alt: video.title,
        },
      ],
    },
    other: {
      dateCreated: video.uploadDate,
    },
  };
}
