"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const updates = [
  {
    date: "March 2024",
    title: "Started New Role at InversePay",
    description:
      "Joined as a DevOps Engineer, focusing on CI/CD pipeline implementation and infrastructure automation.",
    tags: ["DevOps", "AWS", "Jenkins"],
  },
  {
    date: "February 2024",
    title: "Completed AWS Certification",
    description: "Successfully obtained AWS Solutions Architect Associate certification.",
    tags: ["AWS", "Cloud", "Certification"],
  },
  {
    date: "January 2024",
    title: "Open Source Contribution",
    description: "Made significant contributions to several open source projects in the Python ecosystem.",
    tags: ["Open Source", "Python", "Community"],
  },
]

const LatestUpdates = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + updates.length) % updates.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [nextSlide]) // Added nextSlide to the dependency array

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Card className="w-full light-mode-border">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{updates[currentIndex].title}</span>
                <Badge variant="outline" className="text-xs">
                  {updates[currentIndex].date}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{updates[currentIndex].description}</p>
              <div className="flex flex-wrap gap-2">
                {updates[currentIndex].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      {isDesktop && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default LatestUpdates

