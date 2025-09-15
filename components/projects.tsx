import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sales Dashboard",
    description:
      "Built with Excel, SQL, and Power BI to provide real-time business insights. Features interactive visualizations, automated reporting, and comprehensive analytics for sales performance tracking.",
    image: "/modern-sales-dashboard-with-charts-and-graphs.jpg",
    tags: ["Excel", "SQL", "Power BI", "Data Analytics"],
    category: "Data Analytics",
  },
  {
    title: "Rainmoney Loans - Finance Platform",
    description:
      "Designed and developed a responsive finance loan platform, ensuring secure transactions, user-friendly loan applications, and a modern client dashboard with real-time status tracking.",
    image: "/modern-finance-web-application-interface.jpg",
    tags: ["React", "Node.js", "JavaScript", "Finance"],
    category: "Web Development",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio showcasing skills, projects, and contact details. Built with modern web technologies and optimized for performance and accessibility.",
    image: "/clean-modern-portfolio-website-design.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive"],
    category: "Web Development",
  },
  {
    title: "AI Starter Kit Mini Project",
    description:
      "A beginner-level AI application demonstrating practical understanding of artificial intelligence concepts. Includes machine learning models and data processing capabilities.",
    image: "/ai-artificial-intelligence-application-interface.jpg",
    tags: ["Python", "AI", "Machine Learning", "Data Science"],
    category: "AI/ML",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
            A showcase of my best work in data analytics, web development, and AI
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
