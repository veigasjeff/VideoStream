import { Metadata } from "next"
import superdata from "@/data/superdata.json"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const video = superdata.adult.find((v) => v.id === params.id)

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
    canonical: `https://videostreamhub.vercel.app/adult/${video.id}`,
    },
    openGraph: {
      title: video.title,
      description: video.description, 
      type: "video.movie",
    },
  }
}