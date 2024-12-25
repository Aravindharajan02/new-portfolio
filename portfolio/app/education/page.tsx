import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    institution: "Centre for Development of Advanced Computing (C-DAC), Bengaluru",
    degree: "PG Diploma in Big Data Analytics",
    duration: "Sep 2024 - Feb 2025"
  },
  {
    institution: "E.G.S Pillay Engineering College(Autonomous), Nagapattinam",
    degree: "Bachelor of Technology in Information Technology",
    duration: "2024",
    score: "CGPA-8.5"
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Education</h1>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">{edu.institution}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200 font-semibold">{edu.degree}</p>
                <p className="text-purple-300">{edu.duration}</p>
                {edu.score && <p className="text-purple-200 mt-2">{edu.score}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

