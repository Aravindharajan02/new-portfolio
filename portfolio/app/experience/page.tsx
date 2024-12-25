import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Programmer Analyst Trainee",
    company: "Touchmark Descience Pvt Ltd",
    duration: "05/2024 – 07/2024",
    description: "Hands on experience with generative AI, LangChain, LLM and chatbot development using Python, Django, Flask, and OpenAI APIs. Designed and improved front-end layout and page elements using HTML, CSS, and APIs and functionality."
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200 font-semibold">{exp.company}</p>
                <p className="text-purple-300 text-sm mb-4">{exp.duration}</p>
                <p className="text-purple-100">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

