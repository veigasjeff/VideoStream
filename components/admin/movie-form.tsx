// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// interface Movie {
//   id: string
//   title: string
//   description: string
//   videoUrl: string
//   thumbnail: string
//   views: number
//   duration: string
//   uploadDate: string
//   tags: string[]
// }

// interface MovieFormProps {
//   data: Movie[]
//   onSave: (movies: Movie[]) => void
// }

// export function MovieForm({ data, onSave }: MovieFormProps) {
//   const [movies, setMovies] = useState<Movie[]>(data)

//   const handleChange = (index: number, field: keyof Movie, value: string | number | string[]) => {
//     const updatedMovies = [...movies]
//     if (field === "tags") {
//       updatedMovies[index][field] = (value as string).split(",").map((tag) => tag.trim())
//     } else {
//       updatedMovies[index][field] = value as never
//     }
//     setMovies(updatedMovies)
//   }

//   const handleAdd = () => {
//     setMovies([
//       ...movies,
//       {
//         id: "",
//         title: "",
//         description: "",
//         videoUrl: "",
//         thumbnail: "",
//         views: 0,
//         duration: "",
//         uploadDate: new Date().toISOString().split("T")[0],
//         tags: [],
//       },
//     ])
//   }

//   const handleDelete = (index: number) => {
//     const updatedMovies = movies.filter((_, i) => i !== index)
//     setMovies(updatedMovies)
//   }

//   return (
//     <div>
//       {movies.map((movie, index) => (
//         <div key={index} className="mb-8 p-4 border rounded">
//           <Input
//             className="mb-2"
//             placeholder="ID"
//             value={movie.id}
//             onChange={(e) => handleChange(index, "id", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Title"
//             value={movie.title}
//             onChange={(e) => handleChange(index, "title", e.target.value)}
//           />
//           <Textarea
//             className="mb-2"
//             placeholder="Description"
//             value={movie.description}
//             onChange={(e) => handleChange(index, "description", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Video URL"
//             value={movie.videoUrl}
//             onChange={(e) => handleChange(index, "videoUrl", e.target.value)}
//           />
//             <Input
//             className="mb-2"
//             placeholder="Thumbnail"
//             value={movie.thumbnail}
//             onChange={(e) => handleChange(index, "thumbnail", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             type="number"
//             placeholder="Views"
//             value={movie.views}
//             onChange={(e) => handleChange(index, "views", Number.parseInt(e.target.value))}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Duration"
//             value={movie.duration}
//             onChange={(e) => handleChange(index, "duration", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             type="date"
//             value={movie.uploadDate}
//             onChange={(e) => handleChange(index, "uploadDate", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Tags (comma-separated)"
//             value={movie.tags.join(", ")}
//             onChange={(e) => handleChange(index, "tags", e.target.value)}
//           />
//           <Button className="ml-2" onClick={() => onSave(movies)}>
//             Save Changes
//           </Button>
//           <Button className="ml-2" variant="destructive" onClick={() => handleDelete(index)}>
//             Delete
//           </Button>
//         </div>
//       ))}
//       <Button onClick={handleAdd}>Add Movie</Button>
//       {/* <Button className="ml-2" onClick={() => onSave(movies)}>
//         Save Changes
//       </Button> */}
//     </div>
//   )
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  views: number;
  duration: string;
  uploadDate: string;
  tags: string[];
}

interface MovieFormProps {
  data: Movie[];
  onSave: (movies: Movie[]) => void;
}

export function MovieForm({ data, onSave }: MovieFormProps) {
  const [movies, setMovies] = useState<Movie[]>(data);

  const handleChange = (index: number, field: keyof Movie, value: string | number | string[]) => {
    const updatedMovies = [...movies];
    if (field === "tags") {
      updatedMovies[index][field] = (value as string).split(",").map((tag) => tag.trim());
    } else {
      updatedMovies[index][field] = value as never;
    }
    setMovies(updatedMovies);
  };

  const handleAdd = () => {
    setMovies([
      ...movies,
      {
        id: "",
        title: "",
        description: "",
        videoUrl: "",
        thumbnail: "",
        views: 0,
        duration: "",
        uploadDate: new Date().toISOString().split("T")[0],
        tags: [],
      },
    ]);
  };

  const handleDelete = (index: number) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {movies.map((movie, index) => (
          <AccordionItem key={index} value={`movie-${index}`}>
            <AccordionTrigger>
              {movie.title || "(New Movie)"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8 p-4 border rounded">
                <Input
                  className="mb-2"
                  placeholder="ID"
                  value={movie.id}
                  onChange={(e) => handleChange(index, "id", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Title"
                  value={movie.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <Textarea
                  className="mb-2"
                  placeholder="Description"
                  value={movie.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Video URL"
                  value={movie.videoUrl}
                  onChange={(e) => handleChange(index, "videoUrl", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Thumbnail"
                  value={movie.thumbnail}
                  onChange={(e) => handleChange(index, "thumbnail", e.target.value)}
                />
                <Input
                  className="mb-2"
                  type="number"
                  placeholder="Views"
                  value={movie.views}
                  onChange={(e) => handleChange(index, "views", Number.parseInt(e.target.value))}
                />
                <Input
                  className="mb-2"
                  placeholder="Duration"
                  value={movie.duration}
                  onChange={(e) => handleChange(index, "duration", e.target.value)}
                />
                <Input
                  className="mb-2"
                  type="date"
                  value={movie.uploadDate}
                  onChange={(e) => handleChange(index, "uploadDate", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Tags (comma-separated)"
                  value={movie.tags.join(", ")}
                  onChange={(e) => handleChange(index, "tags", e.target.value)}
                />
                <Button className="ml-2" onClick={() => onSave(movies)}>
                  Save Changes
                </Button>
                <Button className="ml-2" variant="destructive" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={handleAdd} className="mt-4">Add Movie</Button>
    </div>
  );
}
