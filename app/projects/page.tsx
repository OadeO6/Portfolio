"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Deployer",
    description:
      "A product that helps web developers host their web projects. Features MongoDB, Jenkins, Flask, and Tailwind CSS.",
    link: "#",
    codeLink: "https://github.com/yourusername/deployer",
    tags: ["Python", "Jenkins", "JavaScript", "DevOps", "MongoDB", "Flask", "Tailwind"],
    type: "Solo Project",
    collaborators: [],
  },
  {
    title: "Simple Shell",
    description: "A simple Unix shell implemented in C, showcasing system programming skills.",
    link: "#",
    codeLink: "https://github.com/yourusername/simple-shell",
    tags: ["C", "Unix", "System Programming"],
    type: "Collaboration Project",
    collaborators: [
      { name: "@johndoe", link: "https://github.com/johndoe" },
      { name: "@janesmith", link: "https://github.com/janesmith" },
    ],
  },
  {
    title: "Low-level Programming Language",
    description: "Implementation of various algorithms and data structures using C language.",
    link: "#",
    codeLink: "https://github.com/yourusername/low-level-lang",
    tags: ["C", "Algorithms", "Data Structures"],
    type: "Solo Project",
    collaborators: [],
  },
  {
    title: "AirBnB Clone v3",
    description: "A minimalist version of the AirBnB website, featuring a custom shell, MySQL database, and Flask API.",
    link: "#",
    codeLink: "https://github.com/yourusername/airbnb-clone",
    tags: ["Python", "MySQL", "Flask", "API", "DevOps"],
    type: "Collaboration Project",
    collaborators: [
      { name: "@alicejohnson", link: "https://github.com/alicejohnson" },
      { name: "@bobwilliams", link: "https://github.com/bobwilliams" },
    ],
  },
]

const animationVariants = [
  { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
]

const ProjectCard = ({ project, index, isVisible }) => {
  const variant = animationVariants[index % animationVariants.length]

  return (
    <motion.div
      id={String(index)}
      initial={variant.initial}
      animate={isVisible ? variant.animate : variant.initial}
      transition={{ duration: 0.5 }}
      className="border light-mode-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-IpuG7SXJ1B2kB2VvJKZFVEPX3nKXJ6.jpeg"
        alt={`${project.title} screenshot`}
        width={600}
        height={400}
        className="w-full object-cover h-48"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Badge variant={project.type === "Solo Project" ? "outline" : "default"} className="mb-4 block w-fit">
          {project.type}
        </Badge>
        {project.collaborators.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.collaborators.map((collaborator, idx) => (
              <Badge key={idx} variant="outline">
                <a
                  href={collaborator.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {collaborator.name}
                </a>
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-4">
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  const filteredProjects = projects.filter(
    (project) =>
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag))),
  )

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.id)
          setVisibleProjects((prev) => {
            const newVisibleProjects = [...prev]
            newVisibleProjects[index] = entry.isIntersecting
            return newVisibleProjects
          })
        })
      },
      { threshold: 0.1 },
    )

    filteredProjects.forEach((_, index) => {
      const element = document.getElementById(String(index))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={visibleProjects[index] || false} />
          ))}
        </div>
      </div>
    </div>
  )
}

