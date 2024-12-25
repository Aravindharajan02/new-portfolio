"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, BrainCircuit, Contact, FileText, GraduationCap, Home, Briefcase, Code2 } from 'lucide-react'
import { motion } from "framer-motion"

const links = [
  { name: "About", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Code2 },
  { name: "Skills", href: "/skills", icon: BrainCircuit },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Certifications", href: "/certifications", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Contact },
  { name: "Resume", href: "/resume", icon: FileText },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-40 w-64 h-screen"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-background/80 backdrop-blur-lg border-r">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9894011418.jpg-NT5z6GvKaGHehJ7IUNk4zSirfIVXh0.jpeg"
              alt="Profile"
              className="relative rounded-full w-32 h-32 object-cover border-2 border-background"
            />
          </div>
        </motion.div>
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.li
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center p-2 rounded-lg transition-colors duration-200",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="ml-3">{link.name}</span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.aside>
  )
}

