import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from 'lucide-react'
import { useState } from 'react'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Resume</h1>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => {
              // This is a placeholder URL. Replace it with your actual resume PDF URL
              const pdfUrl = '/path-to-your-resume.pdf'
              window.open(pdfUrl, '_blank')
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-white">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-100">
                Accomplished AI/ML professional with diverse B.Tech professional experience in high-end solutions supplemented by
                a strong analytical outlook and extensive engineering skills. Proven experience in IT to produce scalable, enterprise-
                grade AI systems, driving solutions from data pipeline architecture to model deployment, with an expertise in Python,
                deep learning frameworks, and advanced analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-white">Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-purple-200 font-semibold mb-2">Vice President, Faith Association (2023 – 2024)</h3>
              <p className="text-purple-100">
                As Vice President of the Faith Association, demonstrated exceptional leadership by organizing impactful student
                initiatives, mentoring junior members, and fostering their academic and professional growth. Successfully balanced
                organizational responsibilities with academic commitments, showcasing strong time management and prioritization
                skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

