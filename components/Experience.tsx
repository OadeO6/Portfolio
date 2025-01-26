"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const experiences = [
  {
    title: "Full stack web developer",
    company: "Human Capital Development Committee, MSSN Lagos lasu epe, Lagos State University engineering campus",
    period: "Jan 2024 - Present (voluntary)",
    responsibilities: [
      "Responsible for the building and management of reliable and upgradable API.",
      "Coordinated with cross-functional teams to gather requirements, ensuring alignment with the committee goals.",
    ],
  },
  {
    title: "DevOps engineer",
    company: "InversePay",
    period: "Sep 2024 - Nov 2024",
    responsibilities: [
      "Responsible for building CI/CD pipeline.",
      "Responsible for converting the whole infrastructure into IAC.",
      "Collaborate with a colleague to ensure the infrastructure is secured.",
      "Responsible for setting up monitoring.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Reldrop",
    period: "Sep 2024 - Present",
    responsibilities: [
      "Responsible for creating API endpoints",
      "Collaborate with colleagues to create a standard and maintainable API.",
    ],
  },
]

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="grid gap-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader
            className="cursor-pointer flex flex-row items-center justify-between"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <CardTitle>{exp.title}</CardTitle>
            {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
          </CardHeader>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardContent>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </div>
  )
}

export default Experience

