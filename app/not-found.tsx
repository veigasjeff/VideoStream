// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { SITE_NAME } from "@/lib/tmdb"
// import { Film, Home, Search } from "lucide-react"

// export default function NotFound() {
//   return (
//     <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
//       <div className="relative w-full max-w-md aspect-square mb-8">
//         <Image
//           src="/placeholder.svg?height=400&width=400"
//           alt="404 Not Found"
//           fill
//           className="object-contain"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Film className="h-32 w-32 text-primary opacity-20" />
//         </div>
//       </div>

//       <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6">Scene Not Found</h2>

//       <p className="text-muted-foreground max-w-md mb-8">
//         Looks like this content has been cut from the final edit. The director might have moved it, deleted it, or it
//         was never filmed in the first place.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <Button asChild size="lg">
//           <Link href="/">
//             <Home className="mr-2 h-4 w-4" />
//             Back to Homepage
//           </Link>
//         </Button>

//         <Button variant="outline" asChild size="lg">
//           <Link href="/search">
//             <Search className="mr-2 h-4 w-4" />
//             Search for Content
//           </Link>
//         </Button>
//       </div>

//       <div className="mt-12 text-sm text-muted-foreground">
//         <p>
//           &copy; {new Date().getFullYear()} {SITE_NAME}
//         </p>
//       </div>
//     </div>
//   )
// }



















// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { SITE_NAME } from "@/lib/tmdb"
// import { Film, Home, Search } from "lucide-react"

// export default function NotFound() {
//   const router = useRouter()
//   const [countdown, setCountdown] = useState(3)

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       setCountdown((prev) => {
//         if (prev <= 1) {
//           clearInterval(countdownInterval)
//           router.push("/")
//           return 0
//         }
//         return prev - 1
//       })
//     }, 1000)

//     return () => {
//       clearInterval(countdownInterval)
//     }
//   }, [router])

//   return (
//     <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
//       <div className="relative w-full max-w-md aspect-square mb-8">
//         <Image
//           src="/placeholder.svg?height=400&width=400"
//           alt="404 Not Found"
//           fill
//           className="object-contain"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Film className="h-32 w-32 text-primary opacity-20" />
//         </div>
//       </div>

//       <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6">Scene Not Found</h2>

//       <p className="text-muted-foreground max-w-md mb-2">
//         Looks like this content has been cut from the final edit. The director might have moved it, deleted it, or it
//         was never filmed in the first place.
//       </p>

//       <p className="text-primary font-medium mb-8">Redirecting to homepage in {countdown} seconds...</p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <Button asChild size="lg">
//           <Link href="/">
//             <Home className="mr-2 h-4 w-4" />
//             Back to Homepage
//           </Link>
//         </Button>

//         <Button variant="outline" asChild size="lg">
//           <Link href="/search">
//             <Search className="mr-2 h-4 w-4" />
//             Search for Content
//           </Link>
//         </Button>
//       </div>

//       <div className="mt-12 text-sm text-muted-foreground">
//         <p>
//           &copy; {new Date().getFullYear()} {SITE_NAME}
//         </p>
//       </div>
//     </div>
//   )
// }

"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SITE_NAME } from "@/lib/tmdb"
import { Film, Home, Search } from "lucide-react"

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          setTimeout(() => router.push("/"), 0) // ✅ Delay navigation after state update
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [router])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">404 Page Not Found !!!</h1>
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2> */}
      <div className="relative w-full max-w-md aspect-square mb-8">
        
        <Image
          src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
          alt="404 Not Found"
          fill
          className="object-contain"
          priority
          quality={90}
          style={{ filter: "contrast(1.3) saturate(1.3) brightness(1.05) hue-rotate(10deg)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Film className="h-32 w-32 text-primary opacity-20" />
        </div>
      </div>

      {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2> */}

      <p className="text-muted-foreground max-w-md mb-2">
        Looks like this content has been Deleted or edit. The page might have moved it, deleted it, or it
        was never there in the first place.
      </p>

      <p className="text-primary font-medium mb-8">Redirecting to homepage in {countdown} seconds...</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
        </Button>

        <Button variant="outline" asChild size="lg">
          <Link href="/search">
            <Search className="mr-2 h-4 w-4" />
            Search for Content
          </Link>
        </Button>
      </div>

      {/* <div className="mt-12 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div> */}
    </div>
  )
}
