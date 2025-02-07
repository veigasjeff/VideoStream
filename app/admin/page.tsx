"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovieForm } from "@/components/admin/movie-form"
import { AdultForm } from "@/components/admin/adult-form"
import { SeriesForm } from "@/components/admin/series-form"
import { Button } from "@/components/ui/button"

export default function AdminPanel() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data")
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const jsonData = await response.json()
      setData(jsonData)
      setLoading(false)
    } catch (err) {
      setError("Error fetching data")
      setLoading(false)
    }
  }

  const handleSave = async (newData: any) => {
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
      if (!response.ok) {
        throw new Error("Failed to save data")
      }
      setData(newData)
      alert("Data saved successfully")
    } catch (err) {
      setError("Error saving data")
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Tabs defaultValue="movies">
        <TabsList>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="adult">Adult</TabsTrigger>
          <TabsTrigger value="series">Series</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <MovieForm data={data.videos} onSave={(newMovies) => handleSave({ ...data, videos: newMovies })} />
        </TabsContent>
        <TabsContent value="adult">
          <AdultForm data={data.adult} onSave={(newAdult) => handleSave({ ...data, adult: newAdult })} />
        </TabsContent>
        <TabsContent value="series">
          <SeriesForm data={data.series} onSave={(newSeries) => handleSave({ ...data, series: newSeries })} />
        </TabsContent>
      </Tabs>
      <Button className="mt-4" onClick={fetchData}>
        Refresh Data
      </Button>
    </div>
  )
}

