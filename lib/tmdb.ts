const TMDB_API_BASE_URL = "https://api.themoviedb.org/3"
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p"

// Video source URLs for movies
const VIDSRC_CC_MOVIE_URL = "https://vidsrc.cc/v2/embed/movie/"
const VIDSRC_ME_MOVIE_URL = "https://vidsrc.me/embed/movie/"
const EMBED_CC_MOVIE_URL = "https://www.2embed.cc/embed/"
const SHORT_ICU_URL = "https://short.icu/"

// Video source URLs for TV shows
const VIDSRC_CC_TV_URL = "https://vidsrc.cc/v2/embed/tv/"
const VIDSRC_ME_TV_URL = "https://vidsrc.me/embed/tv/"
const EMBED_CC_TV_URL = "https://www.2embed.cc/embedtv/"

// Base URL for the website
export const SITE_URL = "https://videostreamhub.vercel.app/"
export const SITE_NAME = "Video Stream Hub"

// TMDB API token
export const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmZjMDA1Y2VkMzQ1NzIwZDFlNjllZWYwOTNkMzJiOSIsIm5iZiI6MTc0MzA1MDMxOS4xMDMwMDAyLCJzdWIiOiI2N2U0ZDY0ZjVmM2UwYWMxODgwMDFhZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.viMqIQhhKPMZW0U3DvvDKe3EjHDaig9djzZTLJhyyJ8"

type FetchOptions = {
  cache?: RequestCache
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
}

// Update the fetchFromTMDB function to handle errors better
export async function fetchFromTMDB(endpoint: string, options: FetchOptions = {}) {
  // Default to caching for 24 hours with stale-while-revalidate pattern
  const {
    cache = "force-cache",
    next = {
      revalidate: 60 * 60 * 24, // 24 hours
      tags: ["tmdb"],
    },
  } = options

  const headers = {
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
    "Content-Type": "application/json",
  }

  try {
    console.log(`Fetching from TMDB: ${TMDB_API_BASE_URL}${endpoint}`)

    const response = await fetch(`${TMDB_API_BASE_URL}${endpoint}`, {
      headers,
      cache,
      next,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`TMDB API error (${response.status}):`, errorText)
      throw new Error(`Failed to fetch data from TMDB: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching from TMDB (${endpoint}):`, error)
    throw error
  }
}

export function getImageUrl(path: string | null, size = "original") {
  if (!path) return "/placeholder.svg"
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}

// Add a new function to search with shorter cache time
export async function searchMulti(query: string) {
  if (!query || query.trim() === "") return { results: [] }
  return fetchFromTMDB(`/search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, {
    cache: "no-store", // Don't cache search results
    next: { revalidate: false },
  })
}

// Update the getTrending function to use more specific caching strategies
export async function getTrending(mediaType: "all" | "movie" | "tv" = "all", timeWindow: "day" | "week" = "week") {
  return fetchFromTMDB(`/trending/${mediaType}/${timeWindow}`, {
    next: {
      revalidate: 60 * 60, // Revalidate trending data every hour
      tags: [`trending-${mediaType}-${timeWindow}`],
    },
  })
}

// Update the getPopular function to use more specific caching strategies
export async function getPopular(mediaType: "movie" | "tv") {
  return fetchFromTMDB(`/${mediaType}/popular`, {
    next: {
      revalidate: 60 * 60 * 6, // Revalidate popular data every 6 hours
      tags: [`popular-${mediaType}`],
    },
  })
}

// Update the getDetails function to handle errors better
export async function getDetails(mediaType: "movie" | "tv", id: string) {
  try {
    return await fetchFromTMDB(`/${mediaType}/${id}?append_to_response=videos,credits,similar,recommendations`, {
      next: {
        revalidate: 60 * 60 * 24 * 7, // Revalidate details every week
        tags: [`${mediaType}-${id}`],
      },
    })
  } catch (error) {
    console.error(`Error fetching details for ${mediaType} ${id}:`, error)
    throw error
  }
}

// Get streaming URLs for different sources for movies
export function getMovieStreamingUrls(movieId: string) {
  return {
    vidsrcCc: `${VIDSRC_CC_MOVIE_URL}${movieId}`,
    vidsrcMe: `${VIDSRC_ME_MOVIE_URL}${movieId}`,
    embedCc: `${EMBED_CC_MOVIE_URL}${movieId}`,
    hindiDubbed: null, // This will be populated in the movie page if available
  }
}

// Get streaming URLs for different sources for TV episodes
export function getTvEpisodeStreamingUrls(tvId: string, seasonNumber: string, episodeNumber: string) {
  return {
    vidsrcCc: `${VIDSRC_CC_TV_URL}${tvId}/${seasonNumber}/${episodeNumber}`,
    vidsrcMe: `${VIDSRC_ME_TV_URL}${tvId}/${seasonNumber}-${episodeNumber}`,
    embedCc: `${EMBED_CC_TV_URL}${tvId}&s=${seasonNumber}&e=${episodeNumber}`,
    hindiDubbed: null, // This will be populated in the TV episode page if available
  }
}

export type MediaType = "movie" | "tv"

export interface Media {
  id: number
  title?: string
  name?: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  media_type: MediaType
  vote_average: number
  release_date?: string
  first_air_date?: string
}

export interface MovieDetails extends Media {
  runtime: number
  genres: { id: number; name: string }[]
  videos: { results: Video[] }
  credits: { cast: Cast[]; crew: Crew[] }
  similar: { results: Media[] }
  recommendations: { results: Media[] }
}

export interface TvDetails extends Media {
  number_of_seasons: number
  number_of_episodes: number
  seasons: Season[]
  genres: { id: number; name: string }[]
  videos: { results: Video[] }
  credits: { cast: Cast[]; crew: Crew[] }
  similar: { results: Media[] }
  recommendations: { results: Media[] }
}

export interface Season {
  id: number
  name: string
  season_number: number
  episode_count: number
  poster_path: string | null
  overview: string
}

export interface Episode {
  id: number
  name: string
  episode_number: number
  season_number: number
  overview: string
  still_path: string | null
  air_date: string
}

export interface Video {
  id: string
  key: string
  name: string
  site: string
  type: string
}

export interface Cast {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface Crew {
  id: number
  name: string
  job: string
  profile_path: string | null
}

