// import type { MetadataRoute } from "next"
// import superdata from "@/data/superdata.json"

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://videostreamvercel.app"

//   const videoUrls = superdata.videos.map((video) => ({
//     url: `${baseUrl}/video/${video.id}`,
//     lastModified: new Date(video.uploadDate),
//   }))

//   const seriesUrls = superdata.series.map((series) => ({
//     url: `${baseUrl}/series/${series.id}`,
//     lastModified: new Date(),
//   }))

//   const episodeUrls = superdata.series.flatMap((series) =>
//     series.episodes.map((episode) => ({
//       url: `${baseUrl}/video/${episode.id}`,
//       lastModified: new Date(episode.uploadDate),
//     })),
//   )

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/movies`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/series`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/adult`,
//       lastModified: new Date(),
//     },
//     ...videoUrls,
//     ...seriesUrls,
//     ...episodeUrls,
//   ]
// }


// import type { MetadataRoute } from "next";
// import superdata from "@/data/superdata.json";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://videostreamhub.vercel.app";

//   const staticUrls = [
//     { url: baseUrl },
//     { url: `${baseUrl}/movies` },
//     { url: `${baseUrl}/series` },
//     { url: `${baseUrl}/adult` },
//   ].map((item) => ({ ...item, lastModified: new Date() }));

//   const videoUrls = superdata.videos.map((video) => ({
//     url: `${baseUrl}/movies/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   }));

//   const seriesUrls = superdata.series.map((series) => ({
//     url: `${baseUrl}/series/${series.id}`,
//     lastModified: new Date(),
//   }));

//   const episodeUrls = superdata.series.flatMap((series) =>
//     series.episodes.map((episode) => ({
//       url: `${baseUrl}/video/${episode.id}`,
//       lastModified: new Date(episode.uploadDate || Date.now()),
//     }))
//   );

//   const adultUrls = superdata.adult?.map((video) => ({
//     url: `${baseUrl}/adult/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   })) || [];

//   return [...staticUrls, ...videoUrls, ...seriesUrls, ...episodeUrls, ...adultUrls];
// }



// import type { MetadataRoute } from "next";
// import superdata from "@/data/superdata.json";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://videostreamhub.vercel.app";

//   const staticUrls = [
//     { url: baseUrl },
//     { url: `${baseUrl}/movies` },
//     { url: `${baseUrl}/series` },
//     { url: `${baseUrl}/adult` },
//   ].map((item) => ({ ...item, lastModified: new Date() }));

//   const videoUrls = superdata.videos.map((video) => ({
//     url: `${baseUrl}/movies/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   }));        

//   // const seriesUrls = superdata.series.map((series) => ({
//   //   url: `${baseUrl}/series/${series.id}`,
//   //   lastModified: new Date(),
//   // }));

//   const episodeUrls = superdata.series.flatMap((series) =>
//     series.episodes.map((episode) => ({
//       url: `${baseUrl}/series/${episode.id}`,
//       lastModified: new Date(episode.uploadDate || Date.now()),
//     }))
//   );

//   const adultUrls = superdata.adult?.map((video) => ({
//     url: `${baseUrl}/adult/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   })) || [];

//   return [...staticUrls, ...videoUrls,  ...episodeUrls, ...adultUrls];
//   // return [...staticUrls, ...videoUrls, ...seriesUrls, ...episodeUrls, ...adultUrls];
// }







// import type { MetadataRoute } from "next";
// import superdata from "@/data/superdata.json";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://videostreamhub.vercel.app";

//   // Static pages
//   const staticUrls = [
//     { url: baseUrl },
//     { url: `${baseUrl}/movies` },
//     { url: `${baseUrl}/series` },
//     { url: `${baseUrl}/adult` },
//     { url: `${baseUrl}/hindi-dubbed` }, // Added Hindi Dubbed Page
//   ].map((item) => ({
//     ...item,
//     lastModified: new Date(),
//   }));

//   // Movie URLs
//   const videoUrls = superdata.videos.map((video) => ({
//     url: `${baseUrl}/video/${video.slug}`, // Corrected video path
//     lastModified: new Date(video.uploadDate || Date.now()),
//   }));

//   // Series Episodes
//   const episodeUrls = superdata.series.flatMap((series) =>
//     series.episodes.map((episode) => ({
//       url: `${baseUrl}/series/${episode.id}`,
//       lastModified: new Date(episode.uploadDate || Date.now()),
//     }))
//   );

//   // Adult Videos
//   const adultUrls = superdata.adult?.map((video) => ({
//     url: `${baseUrl}/adult/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   })) || [];

//   // Hindi Dubbed Movies
//   const hindiDubbedUrls = superdata.hindiDubbed?.map((video) => ({
//     url: `${baseUrl}/hindi-dubbed/${video.id}`,
//     lastModified: new Date(video.uploadDate || Date.now()),
//   })) || [];

//   return [...staticUrls, ...videoUrls, ...episodeUrls, ...adultUrls, ...hindiDubbedUrls];
// }


import type { MetadataRoute } from "next";
import superdata from "@/data/superdata.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videostreamhub.vercel.app";

  // Static pages
  const staticUrls = [
    { url: baseUrl },
    { url: `${baseUrl}/movies` },
    { url: `${baseUrl}/series` },
    { url: `${baseUrl}/adult` },
    { url: `${baseUrl}/hindi-dubbed` },
  ].map((item) => ({
    ...item,
    lastModified: new Date(),
  }));

  // Movie URLs
  const videoUrls = superdata.videos?.map((video) => ({
    url: `${baseUrl}/movies/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()),
  })) || [];

  // Series Episodes
  const episodeUrls = superdata.series?.flatMap((series) =>
    series.episodes.map((episode) => ({
      url: `${baseUrl}/series/${episode.id}`,
      lastModified: new Date(episode.uploadDate || Date.now()),
    }))
  ) || [];

  // Adult Videos
  const adultUrls = superdata.adult?.map((video) => ({
    url: `${baseUrl}/adult/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()),
  })) || [];

  // Hindi Dubbed Movies
  const hindiDubbedUrls = superdata.hindiDubbed?.map((video) => ({
    url: `${baseUrl}/hindi-dubbed/${video.id}`,
    lastModified: new Date(video.uploadDate || Date.now()),
  })) || [];

  return [...staticUrls, ...videoUrls, ...episodeUrls, ...adultUrls, ...hindiDubbedUrls];
}
