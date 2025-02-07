import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Episode {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnail: string
  duration: string
  views: number
  uploadDate: string
  tags: string[]
}

interface Series {
  id: string
  title: string
  description: string
  thumbnail: string
  episodes: Episode[]
}

interface SeriesFormProps {
  data: Series[]
  onSave: (series: Series[]) => void
}

export function SeriesForm({ data, onSave }: SeriesFormProps) {
  const [seriesList, setSeriesList] = useState<Series[]>(data)

  const handleSeriesChange = (index: number, field: keyof Series, value: string) => {
    const updatedSeries = [...seriesList]
    updatedSeries[index][field] = value as never
    setSeriesList(updatedSeries)
  }

  const handleEpisodeChange = (
    seriesIndex: number,
    episodeIndex: number,
    field: keyof Episode,
    value: string | number | string[],
  ) => {
    const updatedSeries = [...seriesList]
    if (field === "tags") {
      updatedSeries[seriesIndex].episodes[episodeIndex][field] = (value as string).split(",").map((tag) => tag.trim())
    } else {
      updatedSeries[seriesIndex].episodes[episodeIndex][field] = value as never
    }
    setSeriesList(updatedSeries)
  }

  const handleAddSeries = () => {
    setSeriesList([
      ...seriesList,
      {
        id: "",
        title: "",
        description: "",
        thumbnail: "",
        episodes: [],
      },
    ])
  }

  const handleAddEpisode = (seriesIndex: number) => {
    const updatedSeries = [...seriesList]
    updatedSeries[seriesIndex].episodes.push({
      id: "",
      title: "",
      description: "",
      videoUrl: "",
      thumbnail: "",
      duration: "",
      views: 0,
      uploadDate: new Date().toISOString().split("T")[0],
      tags: [],
    })
    setSeriesList(updatedSeries)
  }

  const handleDeleteSeries = (index: number) => {
    const updatedSeries = seriesList.filter((_, i) => i !== index)
    setSeriesList(updatedSeries)
  }

  const handleDeleteEpisode = (seriesIndex: number, episodeIndex: number) => {
    const updatedSeries = [...seriesList]
    updatedSeries[seriesIndex].episodes = updatedSeries[seriesIndex].episodes.filter((_, i) => i !== episodeIndex)
    setSeriesList(updatedSeries)
  }

  return (
    <div>
      {seriesList.map((series, seriesIndex) => (
        <Accordion type="single" collapsible key={seriesIndex} className="mb-4">
          <AccordionItem value={`series-${seriesIndex}`}>
            <AccordionTrigger>{series.title || `Series ${seriesIndex + 1}`}</AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 p-4 border rounded">
                <Input
                  className="mb-2"
                  placeholder="Series ID"
                  value={series.id}
                  onChange={(e) => handleSeriesChange(seriesIndex, "id", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Series Title"
                  value={series.title}
                  onChange={(e) => handleSeriesChange(seriesIndex, "title", e.target.value)}
                />
                <Textarea
                  className="mb-2"
                  placeholder="Series Description"
                  value={series.description}
                  onChange={(e) => handleSeriesChange(seriesIndex, "description", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Series Thumbnail"
                  value={series.thumbnail}
                  onChange={(e) => handleSeriesChange(seriesIndex, "thumbnail", e.target.value)}
                />
               <Input
                      className="mb-2"
                      placeholder="Duration"
                      value={series.duration}
                      onChange={(e) => handleSeriesChange(seriesIndex, "duration", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      type="number"
                      placeholder="Views"
                      value={series.views}
                      onChange={(e) =>
                        handleSeriesChange(seriesIndex, "views", Number.parseInt(e.target.value))
                      }
                    />
                <Button variant="destructive" onClick={() => handleDeleteSeries(seriesIndex)}>
                  Delete Series
                </Button>

                <h3 className="mt-4 mb-2 font-bold">Episodes</h3>
                {series.episodes.map((episode, episodeIndex) => (
                  <div key={episodeIndex} className="mb-4 p-4 border rounded">
                    <Input
                      className="mb-2"
                      placeholder="Episode ID"
                      value={episode.id}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "id", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      placeholder="Episode Title"
                      value={episode.title}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "title", e.target.value)}
                    />
                    <Textarea
                      className="mb-2"
                      placeholder="Episode Description"
                      value={episode.description}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "description", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      placeholder="Video URL"
                      value={episode.videoUrl}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "videoUrl", e.target.value)}
                    />

                    <Input
                      className="mb-2"
                      placeholder="Thumbnail"
                      value={episode.thumbnail}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "thumbnail", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      placeholder="Duration"
                      value={episode.duration}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "duration", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      type="number"
                      placeholder="Views"
                      value={episode.views}
                      onChange={(e) =>
                        handleEpisodeChange(seriesIndex, episodeIndex, "views", Number.parseInt(e.target.value))
                      }
                    />
                    <Input
                      className="mb-2"
                      type="date"
                      value={episode.uploadDate}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "uploadDate", e.target.value)}
                    />
                    <Input
                      className="mb-2"
                      placeholder="Tags (comma-separated)"
                      value={episode.tags.join(", ")}
                      onChange={(e) => handleEpisodeChange(seriesIndex, episodeIndex, "tags", e.target.value)}
                    />
                    <Button className="ml-2" onClick={() => onSave(seriesList)}>
                      Save Changes
                    </Button>
                    <Button className="ml-2" variant="destructive" onClick={() => handleDeleteEpisode(seriesIndex, episodeIndex)}>
                      Delete Episode
                    </Button>
                  </div>
                ))}
                <Button onClick={() => handleAddEpisode(seriesIndex)}>Add Episode</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <Button onClick={handleAddSeries}>Add Series</Button>
      <Button className="ml-2" onClick={() => onSave(seriesList)}>
        Save Changes
      </Button>
    </div>
  )
}

