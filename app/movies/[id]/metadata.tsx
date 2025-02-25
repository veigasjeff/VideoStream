"use client";

import Head from "next/head";

interface MetadataProps {
  category: "movies" | "adult" | "series" | "hindiDubbed";
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}

export function Metadata({ category, video }: MetadataProps) {
  if (!video) return null;

  let categoryTitle = "";

  switch (category) {
    case "movies":
      categoryTitle = "Watch the Latest Movie";
      break;
    case "adult":
      categoryTitle = "Exclusive Adult Content";
      break;
    case "series":
      categoryTitle = "Binge Watch the Latest Series";
      break;
    case "hindiDubbed":
      categoryTitle = "Hindi Dubbed Movies & Shows";
      break;
    default:
      categoryTitle = "Watch Now";
  }

  return (
    <Head>
      <title>{video.title} - {categoryTitle} - Watch Now</title>
      <meta name="description" content={video.description} />
      <meta property="og:image" content={video.thumbnail} />
      <meta property="og:title" content={`${video.title} - ${categoryTitle}`} />
      <meta property="og:description" content={video.description} />
    </Head>
  );
}
