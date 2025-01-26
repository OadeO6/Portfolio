"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b light-mode-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-2xl font-bold hover:text-primary transition-colors p-0">
              OadeO6
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <Button variant="ghost" onClick={() => scrollToSection("latest-updates")}>
                Latest Updates
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("about")}>
                About
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("tech-stack")}>
                Tech Stack
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("experience")}>
                Experience
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("education")}>
                Education
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={`hover:text-primary transition-colors ${pathname === "/" ? "text-primary font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`hover:text-primary transition-colors ${pathname === "/projects" ? "text-primary font-semibold" : ""}`}
          >
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

