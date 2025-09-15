import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Database, Code, Brain, BarChart3 } from "lucide-react"

const skillCategories = [
  {
    title: "Data Analytics",
    icon: BarChart3,
    skills: [
      { name: "Excel", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Python", level: 80 },
      { name: "Power BI", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Finance Web Development",
    icon: Database,
    skills: [
      { name: "Payment Systems", level: 80 },
      { name: "Secure Data Handling", level: 85 },
      { name: "Responsive UI Design", level: 90 },
      { name: "Client Dashboards", level: 85 },
    ],
  },
  {
    title: "AI & Other Skills",
    icon: Brain,
    skills: [
      { name: "AI Starter Kit", level: 75 },
      { name: "Problem-Solving", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "Project Management", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-balance">
            Technical skills and competencies across multiple domains
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
