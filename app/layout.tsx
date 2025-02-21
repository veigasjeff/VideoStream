import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import StatCounter from "react-statcounter"; // Import StatCounter component
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
  keywords: [ "VideoStreamHub", "VideoStream Hub", "Video Stream Hub", "movies", "TV series", "video", "free movies", "free TV series", "watch movie online", "watch TV series online", "free movie streaming", "free TV series streaming", "video streaming", "entertainment", "watch online", "JustWatch", "JustWatch Free"],
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
        url: "https://videostreamhub.vercel.app/og_image.jpg",
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
    images: ["https://videostreamhub.vercel.app/og_image.jpg"],
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

        <Script
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
          {/* StatCounter Tracking Code */}
          <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13089310; 
              var sc_security="86df82eb"; 
              (function() {
                var s = document.createElement("script");
                s.src = "https://www.statcounter.com/counter/counter.js";
                s.async = true;
                document.body.appendChild(s);
              })();
            `,
          }}
        />
       
      </head>
      <body className={inter.className}>
      <Navbar /> {/* Place the Navbar here */}
        <Navigation />
        <main className="min-h-screen bg-background">{children}</main>
        <Footer /> {/* Footer added here */}
      
        {/* First Ad Script */}
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

        {/* <script>(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8919674,document.createElement('script'))</cript> */}
        {/* Second Ad Script */}
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
        {/* <script>(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',8919677,document.createElement('script'))</cript> */}
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

<Script async data-id="101478638" src="//static.getclicky.com/js" />

        <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />

        {/* <script>(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8919691,document.createElement('script'))</script> */}
      </body>
    </html>
  )
}

