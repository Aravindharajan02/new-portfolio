import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Chatbot for Institutional Website",
    description: "Designed an intelligent chatbot solution for institutional communication by incorporating Natural Language Processing (NLP) and machine learning techniques. Designed a high-level system that could be able to handle the range of queries related to the institutional services.",
    technologies: ["NLP", "Machine Learning", "Python", "Chatbot"]
  },
  {
    title: "Video Summarization and Audio Narration for Accessibility",
    description: "Developed a video processing system using YOLOv5 for real-time object detection and scene analysis. Generated time-stamped summaries with identified objects and implemented text-to-speech (TTS) for audio narration.",
    technologies: ["YOLOv5", "Computer Vision", "TTS", "Python"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

