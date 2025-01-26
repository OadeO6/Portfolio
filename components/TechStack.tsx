import Image from "next/image"

const technologies = {
  languages: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  frameworks: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],
  tools: [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
}

const TechStack = () => {
  return (
    <div className="grid gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.languages.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center bg-background rounded-full px-4 py-2 shadow-md light-mode-border"
            >
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={24} height={24} className="mr-2" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Frameworks</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.frameworks.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center bg-background rounded-full px-4 py-2 shadow-md light-mode-border"
            >
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={24} height={24} className="mr-2" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.tools.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center bg-background rounded-full px-4 py-2 shadow-md light-mode-border"
            >
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={24} height={24} className="mr-2" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack

