// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Navigation } from "@/components/navigation"
// import Navbar from "../components/Navbar"; // Import the Navbar component
// import Footer from "../components/Footer"; // Import the Footer component
// import type React from "react"
// import Script from "next/script"

// // Optimize font loading
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// })


// export const metadata: Metadata = {
//   metadataBase: new URL("https://videostreamhub.vercel.app"),
//   title: {
//     default: "VideoStreamHub - Watch Movies, Series & More",
//     template: "%s | VideoStreamHub",
//   },
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
//   keywords: ["VideoStreamHub", "VideoStream Hub", "Video Stream Hub", "movies", "TV series", "video", "free movies", "free TV series", "watch movie online", "watch TV series online", "free movie streaming", "free TV series streaming", "video streaming", "entertainment", "watch online", "JustWatch", "JustWatch Free"],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://videostreamhub.vercel.app",
//     siteName: "VideoStreamHub",
//     title: "VideoStreamHub - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
//     images: [
//       {
//         url: "https://videostreamhub.vercel.app/og_image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "VideoStreamHub - Your Ultimate Streaming Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VideoStreamHub - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
//     images: ["https://videostreamhub.vercel.app/og_image.jpg"],
//     creator: "@VideoStreamHub",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://videostreamhub.vercel.app",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Preconnect to external domains */}
//         <link rel="preconnect" href="https://groleegni.net" />
//         <link rel="preconnect" href="https://vemtoutcheeg.com" />
//         <link rel="preconnect" href="https://gizokraijaw.net" />
//       </head>
//       <body className={inter.className}>
//       <Navbar /> {/* Place the Navbar here */}
//         <Navigation />
//         <main className="min-h-screen bg-background">{children}</main>
//         <Footer /> {/* Footer added here */}
//         {/* Analytics with higher priority but still non-blocking */}
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-FX1FS2NM81"
//         />
//         <Script id="ga-config" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-FX1FS2NM81');
//           `}
//         </Script>

//         {/* Ad scripts with lowest priority */}
//         <Script id="ad-script-1" strategy="lazyOnload">
//           {`(function(d,z,s){
//               s.src='https://'+d+'/401/'+z;
//               try {
//                   (document.body || document.documentElement).appendChild(s);
//               } catch(e) {
//                   console.error('Error loading script:', e);
//               }
//           })('groleegni.net',8919674,document.createElement('script'))`}
//         </Script>

//         <Script id="ad-script-2" strategy="lazyOnload">
//           {`(function(d,z,s){
//               s.src='https://'+d+'/400/'+z;
//               try {
//                   (document.body || document.documentElement).appendChild(s);
//               } catch(e) {
//                   console.error('Error loading script:', e);
//               }
//           })('vemtoutcheeg.com',8919677,document.createElement('script'))`}
//         </Script>

//         <Script id="ad-script-3" strategy="lazyOnload">
//           {`(function(d,z,s){
//               s.src='https://'+d+'/401/'+z;
//               try {
//                   (document.body || document.documentElement).appendChild(s);
//               } catch(e) {
//                   console.error('Error loading script:', e);
//               }
//           })('gizokraijaw.net',8919691,document.createElement('script'))`}
//         </Script>
//       </body>
//     </html>
//   )
// }



import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

// export const metadata: Metadata = {
//   title: {
//     template: "%s | VideoStreamHub",
//     default: "VideoStreamHub - Watch Movies, Series & More",
//   },
//   description:
//     "Stream the latest movies, TV series, and exclusive content on VideoStreamHub. Your ultimate entertainment destination.",
//   viewport: "width=device-width, initial-scale=1, maximum-scale=5",
//   themeColor: "#000000",
// } 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://static.getclicky.com" />
        <link rel="preconnect" href="https://groleegni.net" />
        <link rel="preconnect" href="https://vemtoutcheeg.com" />
        <link rel="preconnect" href="https://gizokraijaw.net" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS for faster mobile rendering */
          body { display: block; }
          .container { width: 100%; padding-left: 1rem; padding-right: 1rem; margin-left: auto; margin-right: auto; }
         img { content-visibility: auto; }
         @media (max-width: 768px) {
             .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          .bg-background { background-color: var(--background); }
          .text-primary { color: var(--primary); }
          .font-sans { font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif; }
        `,
          }}
        />
      </head>
      {/* <body className="min-h-screen bg-background font-sans antialiased">{children} */}
      <body className={inter.className}>
      <Navbar /> {/* Place the Navbar here */}
        <Navigation />
        <main className="min-h-screen bg-background">{children}</main>
        <Footer /> {/* Footer added here */}
        {/* Analytics with higher priority but still non-blocking */}
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

        {/* Ad scripts with lowest priority */}
        <Script id="ad-script-1" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('groleegni.net',8919674,document.createElement('script'))`}
        </Script>

        <Script id="ad-script-2" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('vemtoutcheeg.com',8919677,document.createElement('script'))`}
        </Script>

        <Script id="ad-script-3" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('gizokraijaw.net',8919691,document.createElement('script'))`}
        </Script>

      </body>
    </html>
  )
}
