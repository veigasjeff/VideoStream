// // import type { Metadata } from "next"
// // import { Inter } from "next/font/google"
// // import "./globals.css"
// // import { Navigation } from "@/components/navigation"
// // import type React from "react"
// // import GoogleAnalytics from '@bradgarropy/next-google-analytics';
// // import Head from "next/head";
// // import Script from "next/script"


// // const inter = Inter({ subsets: ["latin"] })

// // export const metadata: Metadata = {
// //   title: {
// //     default: "VideoStreamHub - Watch Movies & Series",
// //     template: "%s | VideoStreamHub",
// //   },
// //   description: "Watch the latest movies, series, and trailers on VideoStreamHub",
// //   openGraph: {
// //     type: "website",
// //     locale: "en_US",
// //     url: "https://VideoStreamHubvercel.app",
// //     siteName: "VideoStreamHub",
// //   },
// //   robots: {
// //     index: true,
// //     follow: true,
// //   },
// // }

// // const uwatchfreeSchema = JSON.stringify([
// //   {
// //     "@context": "https://schema.org",
// //     "@type": "Organization",
// //     name: "VideoStreamHub™",
// //     url: "https://videostreamhub.vercel.app/",
// //     image: ["https://videostreamhub.vercel.app/favicon.ico"],
// //     logo: {
// //       "@type": "ImageObject",
// //       url: "https://videostreamhub.vercel.app/logo.png",
// //       width: 280,
// //       height: 80,
// //     },
// //   },
// //   {
// //     "@context": "https://schema.org",
// //     "@type": "WebSite",
// //     url: "https://videostreamhub.vercel.app/",
// //     potentialAction: {
// //       "@type": "SearchAction",
// //       target: {
// //         "@type": "EntryPoint",
// //         urlTemplate:
// //           "https://videostreamhub.vercel.app/search?q={search_term_string}",
// //       },
// //       "query-input": "required name=search_term_string",
// //     },
// //   },
// // ]);

// // const rankMathSchema = JSON.stringify({
// //   "@context": "https://schema.org",
// //   "@graph": [
// //     {
// //       "@type": "Person",
// //       "@id": "https://gravatar.com/drtrailer2022",
// //       name: "Dr Trailer",
// //       url: "https://gravatar.com/drtrailer2022",
// //       image: {
// //         "@type": "ImageObject",
// //         "@id": "https://gravatar.com/drtrailer2022",
// //         url: "https://gravatar.com/drtrailer2022",
// //         caption: "Dr Trailer",
// //         inLanguage: "en-US",
// //       },
// //     },
// //     {
// //       "@type": "Organization",
// //       "@id": "https://videostreamhub.vercel.app/#organization",
// //       name: "VideoStreamHub™",
// //       url: "https://videostreamhub.vercel.app",
// //     },
// //     {
// //       "@type": "WebSite",
// //       "@id": "https://videostreamhub.vercel.app/#website",
// //       url: "https://videostreamhub.vercel.app",
// //       name: "VideoStreamHub™",
// //       publisher: {
// //         "@type": "Organization",
// //         "@id": "https://videostreamhub.vercel.app/#organization",
// //       },
// //     },
// //     {
// //       "@type": "WebPage",
// //       "@id": "https://videostreamhub.vercel.app/#webpage",
// //       url: "https://videostreamhub.vercel.app/",
// //       name: "Movie",
// //       datePublished: "2024-01-13T13:00:00+00:00",
// //       dateModified: "2024-01-13T13:13:00+00:00",
// //       about: {
// //         "@type": "Person",
// //         "@id": "https://gravatar.com/drtrailer2022",
// //         name: "Dr Trailer",
// //         url: "https://gravatar.com/drtrailer2022",
// //         image: {
// //           "@type": "ImageObject",
// //           "@id": "https://gravatar.com/drtrailer2022",
// //           url: "https://gravatar.com/drtrailer2022",
// //           caption: "Dr Trailer",
// //           inLanguage: "en-US",
// //         },
// //       },
// //       isPartOf: {
// //         "@id": "https://videostreamhub.vercel.app/#website",
// //       },
// //       inLanguage: "en-US",
// //       mainEntity: [
// //         {
// //           "@type": "Article",
// //           "@id": "https://videostreamhub.vercel.app/",
// //           url: "https://videostreamhub.vercel.app/",
// //           headline: "VideoStreamHub™",
// //           datePublished: "2024-01-13T13:00:00+00:00",
// //           dateModified: "2024-01-13T13:13:00+00:00",
// //           author: {
// //             "@type": "Person",
// //             "@id": "https://gravatar.com/drtrailer2022",
// //             name: "Dr Trailer",
// //             url: "https://gravatar.com/drtrailer2022",
// //             image: {
// //               "@type": "ImageObject",
// //               "@id": "https://gravatar.com/drtrailer2022",
// //               url: "https://gravatar.com/drtrailer2022",
// //               caption: "Dr Trailer",
// //               inLanguage: "en-US",
// //             },
// //           },
// //           publisher: {
// //             "@type": "Organization",
// //             "@id": "https://videostreamhub.vercel.app/#organization",
// //             name: "VideoStreamHub™",
// //             url: "https://videostreamhub.vercel.app",
// //           },
// //         },
// //         {
// //           "@type": "Article",
// //           "@id": "https://videostreamhub.vercel.app/",
// //           url: "https://videostreamhub.vercel.app/",
// //           headline: "VideoStreamHub™",
// //           datePublished: "2024-01-13T13:00:00+00:00",
// //           dateModified: "2024-01-13T13:13:00+00:00",
// //           author: {
// //             "@type": "Person",
// //             "@id": "https://gravatar.com/drtrailer2022",
// //             name: "Dr Trailer",
// //             url: "https://gravatar.com/drtrailer2022",
// //             image: {
// //               "@type": "ImageObject",
// //               "@id": "https://gravatar.com/drtrailer2022",
// //               url: "https://gravatar.com/drtrailer2022",
// //               caption: "Dr Trailer",
// //               inLanguage: "en-US",
// //             },
// //           },
// //           publisher: {
// //             "@type": "Organization",
// //             "@id": "https://videostreamhub.vercel.app/#organization",
// //             name: "VideoStreamHub™",
// //             url: "https://videostreamhub.vercel.app",
// //           },
// //         },
// //         {
// //           "@type": "Article",
// //           "@id": "https://videostreamhub.vercel.app/",
// //           url: "https://videostreamhub.vercel.app/",
// //           headline: "VideoStreamHub™",
// //           datePublished: "2024-01-13T13:00:00+00:00",
// //           dateModified: "2024-01-13T13:13:00+00:00",
// //           author: {
// //             "@type": "Person",
// //             "@id": "https://gravatar.com/drtrailer2022",
// //             name: "Dr Trailer",
// //             url: "https://gravatar.com/drtrailer2022",
// //             image: {
// //               "@type": "ImageObject",
// //               "@id": "https://gravatar.com/drtrailer2022",
// //               url: "https://gravatar.com/drtrailer2022",
// //               caption: "Dr Trailer",
// //               inLanguage: "en-US",
// //             },
// //           },
// //         },
// //       ],
// //     },
// //   ],
// // });


// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <Head>

// //         <link
// //           rel="apple-touch-icon"
// //           sizes="180x180"
// //           href="/apple-touch-icon.png"
// //         />
// //         <link
// //           rel="icon"
// //           type="image/png"
// //           sizes="32x32"
// //           href="/favicon-32x32.png"
// //         />
// //         <link
// //           rel="icon"
// //           type="image/png"
// //           sizes="16x16"
// //           href="/favicon-16x16.png"
// //         />
// //         <link rel="manifest" href="/site.webmanifest" />
// //         <meta name="googlebot" content="index,follow" />
// //         <meta name="revisit-after" content="1 days" />
// //         <meta name="referrer" content="origin" />
// //         <meta
// //           name="robots"
// //           content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
// //         />
// //         <link
// //           rel="sitemap"
// //           type="application/xml"
// //           title="Sitemap"
// //           href="https://videostreamhub.vercel.app/sitemap.xml"
// //         />
// //         <meta name="keywords" content="movies, tvshow, free movies, free tvshow, watch movie online, watch tvshows online, free movie streaming, free tvshow streaming, download free" />
// //         <link rel="canonical" href="https://videostreamhub.vercel.app" />
// //         <meta property="og:locale" content="en_US" />
// //         <meta property="og:type" content="website" />
// //         <meta
// //           property="og:title"
// //           content=" VideoStreamHub™"
// //         />
// //         <meta property="og:url" content="https://videostreamhub.vercel.app" />
// //         <meta
// //           property="og:site_name"
// //           content=" VideoStreamHub™"
// //         />
// //         <meta
// //           property="og:image"
// //           content="https://videostreamhub.vercel.app/og_image.jpg"
// //         />
// //         <meta property="og:image:width" content="1200" />
// //         <meta property="og:image:height" content="630" />
// //         <meta property="og:image:type" content="image/jpg" />
// //         <meta
// //           name="application-name"
// //           content=" VideoStreamHub™"
// //         />
// //         <meta
// //           property="article:modified_time"
// //           content="2024-01-01T13:13:13+00:00"
// //         />

// //         <meta name="twitter:card" content="summary_large_image" />
// //         <meta
// //           name="twitter:title"
// //           content=" VideoStreamHub™ - Online. Stream. Download."
// //         />
// //         <meta
// //           name="twitter:description"
// //           content="Stream HD movies and TV series for free on VideoStreamHub™. Explore, stream, and download."
// //         />
// //         <meta
// //           name="twitter:image"
// //           content="https://videostreamhub.vercel.app/og_image.jpg"
// //         />
// //         <meta
// //           name="google-site-verification"
// //           content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
// //         />

// //         <meta
// //           name="facebook-domain-verification"
// //           content="du918bycikmo1jw78wcl9ih6ziphd7"
// //         />
// //         <meta
// //           name="dailymotion-domain-verification"
// //           content="dm3bs67ukdegz9qik"
// //         />

// //       </Head>


// //       <GoogleAnalytics measurementId="G-YJK4QW21B1" />
// //       <body className={inter.className}>

// //         <Navigation />
// //         <main className="min-h-screen bg-background">{children}
// //           <Script
// //             type="application/ld+json"
// //             dangerouslySetInnerHTML={{ __html: rankMathSchema }}
// //           />
// //           <Script
// //             type="application/ld+json"
// //             dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
// //           />

// //         </main>
// //       </body>
// //     </html>
// //   )
// // }















// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Navigation } from "@/components/navigation"
// import type React from "react"
// import GoogleAnalytics from '@bradgarropy/next-google-analytics';
// import Head from "next/head";
// import Script from "next/script"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: {
//     default: "VideoStreamHub - Watch Movies & Series",
//     template: "%s | VideoStreamHub",
//   },
//   description: "Watch the latest movies, series, and adult content on VideoStreamHub",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://videostreamhub.vercel.app",
//     siteName: "VideoStreamHub",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const uwatchfreeSchema = JSON.stringify([
//     {
//       "@context": "https://schema.org",
//       "@type": "Organization",
//       name: "VideoStreamHub™",
//       url: "https://videostreamhub.vercel.app/",
//       image: ["https://videostreamhub.vercel.app/favicon.ico"],
//       logo: {
//         "@type": "ImageObject",
//         url: "https://videostreamhub.vercel.app/logo.png",
//         width: 280,
//         height: 80,
//       },
//     },
//     {
//       "@context": "https://schema.org",
//       "@type": "WebSite",
//       url: "https://videostreamhub.vercel.app/",
//       potentialAction: {
//         "@type": "SearchAction",
//         target: {
//           "@type": "EntryPoint",
//           urlTemplate:
//             "https://videostreamhub.vercel.app/search?q={search_term_string}",
//         },
//         "query-input": "required name=search_term_string",
//       },
//     },
//   ]);

//   const rankMathSchema = JSON.stringify({
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Person",
//         "@id": "https://gravatar.com/drtrailer2022",
//         name: "Dr Trailer",
//         url: "https://gravatar.com/drtrailer2022",
//         image: {
//           "@type": "ImageObject",
//           "@id": "https://gravatar.com/drtrailer2022",
//           url: "https://gravatar.com/drtrailer2022",
//           caption: "Dr Trailer",
//           inLanguage: "en-US",
//         },
//       },
//       {
//         "@type": "Organization",
//         "@id": "https://videostreamhub.vercel.app/#organization",
//         name: "VideoStreamHub™",
//         url: "https://videostreamhub.vercel.app",
//       },
//       {
//         "@type": "WebSite",
//         "@id": "https://videostreamhub.vercel.app/#website",
//         url: "https://videostreamhub.vercel.app",
//         name: "VideoStreamHub™",
//         publisher: {
//           "@type": "Organization",
//           "@id": "https://videostreamhub.vercel.app/#organization",
//         },
//       },
//       {
//         "@type": "WebPage",
//         "@id": "https://videostreamhub.vercel.app/#webpage",
//         url: "https://videostreamhub.vercel.app/",
//         name: "Movie",
//         datePublished: "2024-01-13T13:00:00+00:00",
//         dateModified: "2024-01-13T13:13:00+00:00",
//         about: {
//           "@type": "Person",
//           "@id": "https://gravatar.com/drtrailer2022",
//           name: "Dr Trailer",
//           url: "https://gravatar.com/drtrailer2022",
//           image: {
//             "@type": "ImageObject",
//             "@id": "https://gravatar.com/drtrailer2022",
//             url: "https://gravatar.com/drtrailer2022",
//             caption: "Dr Trailer",
//             inLanguage: "en-US",
//           },
//         },
//         isPartOf: {
//           "@id": "https://videostreamhub.vercel.app/#website",
//         },
//         inLanguage: "en-US",
//       },
//     ],
//   });

//   return (
//     <html lang="en">
//       <Head>
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="googlebot" content="index,follow" />
//         <meta name="revisit-after" content="1 days" />
//         <meta name="referrer" content="origin" />
//         <meta
//           name="robots"
//           content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//         />
//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="https://videostreamhub.vercel.app/sitemap.xml"
//         />
//         <meta name="keywords" content="movies, tvshow, free movies, free tvshow, watch movie online, watch tvshows online, free movie streaming, free tvshow streaming, download free" />
//         <link rel="canonical" href="https://videostreamhub.vercel.app" />
//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content=" VideoStreamHub™"
//         />
//         <meta property="og:url" content="https://videostreamhub.vercel.app" />
//         <meta
//           property="og:site_name"
//           content=" VideoStreamHub™"
//         />
//         <meta
//           property="og:image"
//           content="https://videostreamhub.vercel.app/og_image.jpg"
//         />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:type" content="image/jpg" />
//         <meta
//           name="application-name"
//           content=" VideoStreamHub™"
//         />
//         <meta
//           property="article:modified_time"
//           content="2024-01-01T13:13:13+00:00"
//         />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content=" VideoStreamHub™ - Online. Stream. Download."
//         />
//         <meta
//           name="twitter:description"
//           content="Stream HD movies and TV series for free on VideoStreamHub™"
//         />
//         <meta
//           name="twitter:image"
//           content="https://videostreamhub.vercel.app/og_image.jpg"
//         />
//         <meta
//           name="google-site-verification"
//           content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
//         />
//         <meta
//           name="facebook-domain-verification"
//           content="du918bycikmo1jw78wcl9ih6ziphd7"
//         />
//         <meta
//           name="dailymotion-domain-verification"
//           content="dm3bs67ukdegz9qik"
//         />
//         {/* Injecting JSON-LD structured data */}
//         <Script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
//         />
//         <Script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: rankMathSchema }}
//         />
//       </Head>

//       <GoogleAnalytics measurementId="G-YJK4QW21B1" />
//       <body className={inter.className}>
//         <Navigation />
//         <main className="min-h-screen bg-background">
//           {children}
//         </main>
//       </body>
//     </html>
//   )
// }


import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://videostreamhub.vercel.app"),
  title: {
    default: "VideoStreamHub - Watch Movies, Series & More",
    template: "%s | VideoStreamHub",
  },
  description:
    "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
  keywords: ["video streaming", "movies", "TV series", "entertainment", "watch online"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://videostreamhub.vercel.app",
    siteName: "VideoStreamHub",
    title: "VideoStreamHub - Watch Movies, Series & More",
    description:
      "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
    images: [
      {
        url: "https://videostreamhub.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VideoStreamHub - Your Ultimate Streaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VideoStreamHub - Watch Movies, Series & More",
    description:
      "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
    images: ["https://videostreamhub.vercel.app/og-image.jpg"],
    creator: "@VideoStreamHub",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://videostreamhub.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FX1FS2NM81"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FX1FS2NM81');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VideoStreamHub",
              url: "https://videostreamhub.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://videostreamhub.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">{children}</main>
        
        
        {/* First Ad Script */}
        <Script id="ad-script-1" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('groleegni.net',8845819,document.createElement('script'))`}
        </Script>

        {/* Second Ad Script */}
        <Script id="ad-script-2" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('vemtoutcheeg.com',8845846,document.createElement('script'))`}
        </Script>
      </body>
    </html>
  )
}

