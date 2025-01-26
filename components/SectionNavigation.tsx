"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

const SectionNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth - 150, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const startX = e.clientX - position.x
    const startY = e.clientY - position.y

    const onDrag = (e: MouseEvent) => {
      setPosition({
        x: Math.max(0, Math.min(e.clientX - startX, window.innerWidth - 150)),
        y: Math.max(0, Math.min(e.clientY - startY, window.innerHeight - 300)),
      })
    }

    const onDragEnd = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", onDrag)
      document.removeEventListener("mouseup", onDragEnd)
    }

    document.addEventListener("mousemove", onDrag)
    document.addEventListener("mouseup", onDragEnd)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div
      ref={dragRef}
      className="fixed z-50 bg-background/60 backdrop-blur-sm rounded-lg shadow-lg p-2 cursor-move select-none"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transition: isDragging ? "none" : "all 0.3s ease",
      }}
      onMouseDown={onDragStart}
    >
      <div className="flex flex-col gap-2">
        <Button size="sm" variant="ghost" onClick={() => scrollToSection("tech-stack")}>
          Tech Stack
        </Button>
        <Button size="sm" variant="ghost" onClick={() => scrollToSection("about")}>
          About
        </Button>
        <Button size="sm" variant="ghost" onClick={() => scrollToSection("experience")}>
          Experience
        </Button>
        <Button size="sm" variant="ghost" onClick={() => scrollToSection("education")}>
          Education
        </Button>
        <Button size="sm" variant="ghost" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
        <Button size="sm" variant="default" onClick={scrollToTop}>
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default SectionNavigation

