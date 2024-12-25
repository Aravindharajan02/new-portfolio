import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "Python Programming",
    issuer: "NPTEL (SWAYAM)"
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "SKILLRACK"
  },
  {
    title: "Python for Data Science",
    issuer: "COURSERA"
  }
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Certifications</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">Issued by {cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

