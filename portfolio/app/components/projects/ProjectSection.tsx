import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "Portfolio",
    description: "Personal portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
    image: "/projects/portfolio.png",
    link: "#",
  },
  {
    title: "Gym App",
    description: "Application to track workouts, exercises and training progress.",
    image: "/projects/gym-app.png",
    link: "#",
  },
  {
    title: "SQL Database Project",
    description: "Database project with relational modeling, queries and data management.",
    image: "/projects/database.png",
    link: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 space-y-2">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground">
          Some projects I have built or worked on.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button asChild>
                <a href={project.link}>View project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}