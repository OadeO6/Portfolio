"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const educations = [
  {
    degree: "B.Sc, Electronics and Computer Engineering",
    institution: "Lagos State University",
    period: "July 2022 - Present",
  },
  {
    degree: "Software Engineering",
    institution: "ALX",
    period: "Sept 2023 - July 2024",
  },
  {
    degree: "Meta Back-End Developer Professional Certificate",
    institution: "Coursera",
    period: "January 2024 - Present",
  },
  {
    degree: "IBM DevOps and Software Engineering Professional Certificate",
    institution: "Coursera",
    period: "January 2024 - Present",
  },
]

const Education = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {educations.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default Education

