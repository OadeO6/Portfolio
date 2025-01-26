"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const softSkills = [
  { name: "Communication", keyword: "communication" },
  { name: "Critical Thinking", keyword: "thinking" },
  { name: "Teamwork", keyword: "teamwork" },
  { name: "Adaptability", keyword: "adaptability" },
  { name: "Problem Solving", keyword: "problem-solving" },
]

const SoftSkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const newImages = await Promise.all(
        softSkills.map(async (skill) => {
          const response = await fetch(`https://source.unsplash.com/featured/?${skill.keyword}`)
          return response.url
        }),
      )
      setImages(newImages)
    }

    fetchImages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % softSkills.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  if (images.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-64">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={softSkills[currentIndex].name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 rounded-lg">
            <h3 className="text-white text-2xl font-bold">{softSkills[currentIndex].name}</h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SoftSkillsCarousel

