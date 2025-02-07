// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

// interface CustomVideoPlayerProps {
//   src: string
//   title: string
// }

// export function CustomVideoPlayer({ src, title }: CustomVideoPlayerProps) {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [isMuted, setIsMuted] = useState(false)
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const updateProgress = () => {
//       const progress = (video.currentTime / video.duration) * 100
//       setProgress(progress)
//     }

//     video.addEventListener("timeupdate", updateProgress)
//     return () => video.removeEventListener("timeupdate", updateProgress)
//   }, [])

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted
//       setIsMuted(!isMuted)
//     }
//   }

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       videoRef.current?.requestFullscreen()
//       setIsFullscreen(true)
//     } else {
//       document.exitFullscreen()
//       setIsFullscreen(false)
//     }
//   }

//   return (
//     <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
//       <video ref={videoRef} className="w-full h-full" src={src} title={title} onClick={togglePlay} />
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//         <div className="flex items-center justify-between text-white">
//           <button onClick={togglePlay} className="focus:outline-none">
//             {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//           </button>
//           <div className="flex-grow mx-4">
//             <div className="w-full bg-gray-600 rounded-full h-1.5">
//               <div className="bg-white h-1.5 rounded-full" style={{ width: `${progress}%` }} />
//             </div>
//           </div>
//           <button onClick={toggleMute} className="focus:outline-none mr-2">
//             {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//           </button>
//           <button onClick={toggleFullscreen} className="focus:outline-none">
//             {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }













// "use client"

// import { useState } from "react"
// import { Maximize, Minimize } from "lucide-react"

// interface CustomVideoPlayerProps {
//   src: string
//   title: string
// }

// export function CustomVideoPlayer({ src, title }: CustomVideoPlayerProps) {
//   const [isFullscreen, setIsFullscreen] = useState(false)

//   const toggleFullscreen = () => {
//     const iframe = document.getElementById("video-frame")
//     if (!document.fullscreenElement && iframe) {
//       iframe.requestFullscreen()
//       setIsFullscreen(true)
//     } else {
//       document.exitFullscreen()
//       setIsFullscreen(false)
//     }
//   }

//   return (
//     <div className="relative aspect-video bg-black rounded-lg overflow-hidden " >
//       <iframe
//         id="video-frame"
//         className="w-full h-full"
//         src={src}
//         title={title}
//         allowFullScreen
//         style={{
//             filter:
//             "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
//         }}
//       ></iframe>
//       <div className="absolute top-2 right-2 text-white">
//         <button onClick={toggleFullscreen} className="focus:outline-none">
//           {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
//         </button>
//       </div>
//     </div>
//   )
// }










// "use client"

// import { useState, useRef } from "react"
// import { Maximize, Minimize } from "lucide-react"

// interface CustomVideoPlayerProps {
//   src: string
//   title: string
// }

// export function CustomVideoPlayer({ src, title }: CustomVideoPlayerProps) {
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const videoRef = useRef<HTMLDivElement>(null)

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement && videoRef.current) {
//       videoRef.current.requestFullscreen().then(() => setIsFullscreen(true))
//     } else if (document.fullscreenElement) {
//       document.exitFullscreen().then(() => setIsFullscreen(false))
//     }
//   }

//   return (
//     <div ref={videoRef} className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
//       <iframe
//         id="video-frame"
//         className="w-full h-full"
//         src={src}
//         title={title}
//         allowFullScreen
//         style={{
//           filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Video enhancement filters
//         }}
//       ></iframe>

//       {/* Fullscreen Button */}
//       <div className="absolute top-2 right-2">
//         <button
//           onClick={toggleFullscreen}
//           className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition-all"
//         >
//           {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
//         </button>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useRef, useEffect } from "react"
import { Maximize, Minimize } from "lucide-react"

interface CustomVideoPlayerProps {
  src: string
  title: string
}

export function CustomVideoPlayer({ src, title }: CustomVideoPlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  // Function to enter fullscreen
  const enterFullscreen = () => {
    if (videoRef.current && !document.fullscreenElement) {
      videoRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => {
          // Handle the error gracefully (e.g., alert the user)
          console.error("Error attempting to enter fullscreen:", err)
        })
    }
  }

  // Function to exit fullscreen
  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => {
          // Handle error gracefully
          console.error("Error attempting to exit fullscreen:", err)
        })
    }
  }

  // Toggle fullscreen manually (triggered by the fullscreen button)
  const toggleFullscreen = (event: React.MouseEvent) => {
    // Only allow fullscreen if the user clicks the button
    event.preventDefault()
    event.stopPropagation()

    isFullscreen ? exitFullscreen() : enterFullscreen()
  }

  // Auto fullscreen on landscape rotation
  useEffect(() => {
    const handleOrientationChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        enterFullscreen() // Auto fullscreen when landscape
      } else {
        exitFullscreen() // Exit fullscreen when portrait
      }
    }

    const mediaQuery = window.matchMedia("(orientation: landscape)")
    mediaQuery.addEventListener("change", handleOrientationChange)

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange)
    }
  }, [])

  return (
    <div ref={videoRef} className="relative w-full bg-black rounded-lg overflow-hidden">
      {/* 56.25% Padding Method (Aspect Ratio 16:9) */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          id="video-frame"
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          title={title}
          allowFullScreen
          style={{
            filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Video enhancement filters
          }}
        ></iframe>
      </div>

      {/* Fullscreen Button */}
      <div className="absolute top-2 right-2">
        <button
          onClick={toggleFullscreen}
          className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition-all"
        >
          {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
        </button>
      </div>
    </div>
  )
}
