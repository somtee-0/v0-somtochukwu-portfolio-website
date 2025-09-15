import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/professional-workspace-with-computer-and-data-anal.jpg"
                alt="Professional workspace"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am Somtochukwu Uzochukwu, a Computer Science graduate with strong expertise in Data Analytics and
                Full-Stack Web Development. I specialize in turning complex data into actionable insights and building
                modern digital solutions.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I hold a certificate in the AI Starter Kit, alongside proven experience in Python, SQL, Excel, and Power
                BI for analytics. My technical toolkit also includes web technologies such as HTML, CSS, JavaScript,
                React, and Node.js.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I am passionate about using data-driven insights and scalable web solutions to solve real-world
                problems.
              </p>

              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:sommy_04@outlook.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sommy_04@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">+2347037158756, +2347061425461</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Somtochukwu Uzochukwu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">somtee-0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
