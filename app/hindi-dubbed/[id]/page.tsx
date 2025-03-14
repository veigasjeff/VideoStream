"use client"

import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data-3"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script";
import { VideoPlayer } from "@/components/video-player"
import { Clock, Film } from "lucide-react"
import { useEffect, useState, useMemo } from "react"

interface Props {
  params: {
    id: string
  }
}

// FIX: Ensure we fetch from "Hindi-Dubbed" instead of superdata.videos
function findVideo(id: string) {
  return superdata["hindiDubbed"].find((v) => v.id === id)
}

function getRecommendedVideos(currentVideoId: string, limit = 500) {
  return superdata["hindiDubbed"]
    .filter((v) => v.id !== currentVideoId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}

export default function VideoPage({ params }: Props) {
  const video = findVideo(params.id)
  if (!video) notFound()

  const recommendedVideos = useMemo(() => getRecommendedVideos(video.id), [video.id])

  const [showAd, setShowAd] = useState(true)
  const [adSkipped, setAdSkipped] = useState(false)
  const [skipButtonVisible, setSkipButtonVisible] = useState(false)
  const [countdown, setCountdown] = useState(8)
  const [showPopupAd, setShowPopupAd] = useState(false)

  const adVideoUrl = "https://res.cloudinary.com/dezf3wemk/video/upload/v1741945852/ads_dkxhl6.mp4"
  const popupAdUrl = "https://res.cloudinary.com/dezf3wemk/video/upload/v1741945852/ads_dkxhl6.mp4"

  useEffect(() => {
    if (showAd && countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000)
      return () => clearInterval(timer)
    } else if (countdown === 0) {
      setSkipButtonVisible(true)
    }
  }, [showAd, countdown])

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopupAd(true), 15000)
    const loopPopupAd = setInterval(() => setShowPopupAd(true), 15000)
    return () => {
      clearTimeout(popupTimer)
      clearInterval(loopPopupAd)
    }
  }, [])

  const handleAdSkip = () => {
    setAdSkipped(true)
    setShowAd(false)
  }

  const handleAdEnd = () => {
    setAdSkipped(true)
    setShowAd(false)
  }

  const handlePopupAdClose = () => setShowPopupAd(false)

  return (
    <>
     <Script async data-id="101478638" src="//static.getclicky.com/js" />
     <Script async data-id="101478638" src="/96930ac493198ab9ca.js" />
      <StructuredData video={video} />
      <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>
      <div className="container py-6 justify-center items-center">
        <div className="mb-6 px-4 md:px-8 lg:px-12">
          {showAd && !adSkipped ? (
            <div className="relative w-full aspect-video mb-4">
              <video autoPlay muted loop onEnded={handleAdEnd} className="absolute inset-0 w-full h-full object-cover">
                <source src={adVideoUrl} type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg">Skip the ad in {countdown} sec.</p>
                {skipButtonVisible && (
                  <button onClick={handleAdSkip} className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    Skip Ad
                  </button>
                )}
              </div>
            </div>
          ) : (
            <VideoPlayer video={video} />
          )}
        </div>

        {showPopupAd && (
          <div className="fixed bottom-5 right-5 w-80 bg-black text-white p-4 rounded-lg shadow-lg z-50">
            <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-full text-xs font-semibold z-10">Ad</div>
            <button onClick={handlePopupAdClose} className="absolute top-2 right-2 text-gray-400 hover:text-white z-20">✖</button>
            <a href="https://amazonaffiliatestore.vercel.app/" target="_blank" rel="noopener noreferrer">
              <video autoPlay muted loop className="w-full rounded-lg mt-8">
                <source src={popupAdUrl} type="video/mp4" />
              </video>
            </a>
          </div>
        )}
        <div className="px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Hindi Dubbed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedVideos.map((v) => (
              <Link key={v.id} href={`/hindi-dubbed/${v.id}`} className="block group">
                <div className="relative w-full">
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <Film className="w-3 h-3 mr-1" /> Movies
                  </div>
                  <div className="relative w-full aspect-[16/9]">
                    <Image src={v.thumbnail || "/placeholder.svg"} alt={v.title} quality={90} fill loading="lazy" className="transition-transform group-hover:scale-105 rounded-lg" style={{ objectFit: "cover", filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", }} />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {v.duration}
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-primary text-center">{v.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
