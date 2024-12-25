"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "🚀",
    skills: ["Python", "SQL", "Java"],
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      "Machine Learning Models",
      "Deep Learning",
      "Neural Networks",
      "NLP",
      "Gen AI",
      "LLMs",
      "Computer Vision",
      "Keras",
    ],
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Tools & Frameworks",
    icon: "🛠️",
    skills: ["Flask", "GitHub", "Tableau", "PySpark", "Pytorch"],
    gradient: "from-purple-600 to-blue-600"
  },
  {
    title: "Big Data",
    icon: "📊",
    skills: ["Hadoop", "Hbase", "Hive", "Big Data Analytics"],
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Databases",
    icon: "💾",
    skills: ["MySQL", "MongoDB", "Data Modeling"],
    gradient: "from-indigo-600 to-purple-600"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
          <Card className="relative bg-white/10 backdrop-blur-sm border-0 hover-card-animation">
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <CardTitle className="gradient-text">{category.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${category.gradient} text-white hover:scale-105 transform transition-all duration-200`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

