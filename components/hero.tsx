import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/somtochukwu-profile.jpg"
              alt="Somtochukwu Uzochukwu"
              className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mx-auto mb-6 border-4 border-primary/20 object-cover"
            />
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Hi, I'm <span className="text-primary">Somtochukwu Uzochukwu</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Computer Science graduate specializing in <span className="text-primary font-semibold">Data Analytics</span>{" "}
            and <span className="text-primary font-semibold">Full-Stack Web Development</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Data Analytics</div>
              <p className="text-sm text-muted-foreground">Excel, SQL, Python, Power BI</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Web Development</div>
              <p className="text-sm text-muted-foreground">React, Node.js, JavaScript</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">AI & Innovation</div>
              <p className="text-sm text-muted-foreground">AI Starter Kit Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
