"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ChevronDown, Mail } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-800 animate-gradient">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              Aravindharajan S S
            </span>
          </h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl mb-6 text-purple-200"
          >
            AI/ML & Big Data Professional
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl mb-8 text-purple-100/80"
          >
            Accomplished AI/ML professional with expertise in developing scalable enterprise-grade AI systems. 
            Passionate about solving complex problems through machine learning and data analytics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-100 hover:scale-105 transform transition-all duration-200"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-200 hover:bg-purple-200/10 hover:scale-105 transform transition-all duration-200"
            >
              <Link href="/resume">View Resume</Link>
            </Button>
            
            <motion.div 
              className="flex gap-4 mt-4 sm:mt-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-purple-200/10 text-purple-200 hover:scale-110 transform transition-all duration-200"
              >
                <Link
                  href="https://github.com/Aravindharajan02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-purple-200/10 text-purple-200 hover:scale-110 transform transition-all duration-200"
              >
                <Link
                  href="https://www.linkedin.com/in/aravindharajan-s-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-purple-200 animate-bounce" />
        </motion.div>
      </div>
    </div>
  )
}

