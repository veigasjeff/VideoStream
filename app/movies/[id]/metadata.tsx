"use client";

import Head from "next/head";

interface MetadataProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}

export function Metadata({ video }: MetadataProps) {
  if (!video) return null;

  return (
    <Head>
      <title>{video.title} - Watch Now</title>
      <meta name="description" content={video.description} />
      <meta property="og:image" content={video.thumbnail} />
      <meta property="og:title" content={video.title} />
      <meta property="og:description" content={video.description} />
    </Head>
  );
}
