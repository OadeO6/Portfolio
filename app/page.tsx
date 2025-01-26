"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedName from "@/components/AnimatedName"
import TechStack from "@/components/TechStack"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import LatestUpdates from "@/components/LatestUpdates"
import { Phone, ChevronUp } from "lucide-react"

const CurvedDivider = ({ color = "fill-background", inverted = false }) => (
  <div
    className={`absolute ${inverted ? "bottom-0 transform rotate-180" : "top-0"} left-0 w-full overflow-hidden h-16`}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon className={color} points="2560 0 2560 100 0 100"></polygon>
    </svg>
  </div>
)

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button className="fixed bottom-4 right-4 z-50" size="icon" onClick={scrollToTop}>
      <ChevronUp className="h-4 w-4" />
    </Button>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <GoToTopButton />
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedName />
          <p className="text-2xl mb-8">a Full Stack Developer & DevOps Specialist</p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="glow-button">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <CurvedDivider color="fill-background" />
      </section>

      <section id="latest-updates" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>
          <LatestUpdates />
        </div>
        <CurvedDivider color="fill-background" />
      </section>

      <section id="about" className="py-20 px-4 bg-muted relative">
        <CurvedDivider inverted={true} color="fill-background" />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="max-w-2xl mx-auto text-center mb-8">
            As a Full stack engineer proficient in Python, JavaScript, and various DevOps tools, I specialize in
            creating efficient and secure web applications. Currently pursuing a BSc in electronics and computer
            engineering, I'm passionate about leveraging technology to solve complex problems.
          </p>
        </div>
        <CurvedDivider color="fill-background" />
      </section>

      <section id="tech-stack" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <TechStack />
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <Experience />
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Education />
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="mailto:abdurrahman.adenowo06@gmail.com">Email Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/abdurrahman-adenowo-3b4b4b1b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/OadeO6" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+2349057712331">
                <Phone className="mr-2 h-4 w-4" /> Call Me
              </a>
            </Button>
          </div>
        </div>
        <CurvedDivider color="fill-muted" />
      </section>
    </div>
  )
}

