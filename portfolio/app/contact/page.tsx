"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Me</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-purple-200">
                <Mail className="w-5 h-5" />
                <span>saravanan.aravindh02@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-purple-200">
                <Phone className="w-5 h-5" />
                <span>+91 9894011418</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/10 border-purple-300/20 text-white placeholder:text-purple-300"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border-purple-300/20 text-white placeholder:text-purple-300"
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-white/10 border-purple-300/20 text-white placeholder:text-purple-300"
                  rows={4}
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

