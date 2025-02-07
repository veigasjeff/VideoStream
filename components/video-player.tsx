// import { CustomVideoPlayer } from "./custom-video-player"

// interface Video {
//   title: string
//   videoUrl: string
// }

// export function VideoPlayer({ video }: { video: Video }) {
//   return (
//     <div className="ml-1">
//       <div style={{ justifyContent: "center", alignItems: "center", width: "100%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", borderRadius: "8px", overflow: "hidden" }}>
//       <CustomVideoPlayer src={video.videoUrl} title={video.title} />
//     </div>
//     </div>
//   )
// }


import { CustomVideoPlayer } from "./custom-video-player"

interface Video {
  title: string
  videoUrl: string
}

export function VideoPlayer({ video }: { video: Video }) {
  return (
    <div className="ml-1">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <CustomVideoPlayer src={video.videoUrl} title={video.title} />
      </div>
    </div>
  )
}
