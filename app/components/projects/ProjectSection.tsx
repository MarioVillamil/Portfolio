import Image from "next/image"
import { Badge } from "@/components/ui/badge"
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
    title: "GymApp",
    status: "In progress",
    description:
      "Mobile gym application built with C#, React Native and hexagonal architecture. Users will be able to create an account, build workouts, edit them, add exercises and track their progress.",
    motivation:
      "I started this project because I go to the gym and wanted a real app instead of using notes on my phone.",
    image: "/projects/gym-app.png",
    technologies: ["C#",".Net", "React Native", "Mobile", "Hexagonal Architecture"],
    link: "#",
  },
  {
    title: "Electric Scooter Management System",
    status: "Academic project",
    description:
      "Backend system for a campus electric scooter service including account creation, passes, scooter unlocking, trip management, returns and billing.",
    motivation:
      "Focused on clean architecture, REST controllers, business rules and integration testing.",
    image: "/projects/scooter-system.png",
    technologies: ["Java","Backend", "REST API", "Architecture", "Testing"],
    link: "#",
  },
  {
    title: "Shopping Catalog Application",
    status: "Academic project",
    description:
      "C++ application for managing a shopping catalog with clothing and electronic products, validation rules, inventory operations and a Qt graphical interface.",
    motivation:
      "Built to practice object-oriented programming, data validation and unit testing with GoogleTest.",
    image: "/projects/shopping-catalog.png",
    technologies: ["C++", "Qt", "GoogleTest", "OOP"],
    link: "#",
  },
  {
    title: "Personality Trait Prediction",
    status: "Academic project",
    description:
      "NLP system that predicts OCEAN personality traits from Reddit text data using Python, Pandas, NumPy and a fine-tuned DistilBERT model.",
    motivation:
      "Focused on data preprocessing, machine learning experimentation and technical reporting.",
    image: "/projects/personality-ai.png",
    technologies: ["Python", "NLP", "DistilBERT", "Pandas"],
    link: "#",
  },
  {
    title: "Autonomous Mobile Robot",
    status: "Academic project",
    description:
      "ROS 2 autonomous robot project for a smart port city. The robot follows a predefined route, reads ArUco QR markers and makes real-time movement decisions.",
    motivation:
      "Developed software architecture for sensors, decision-making and movement control.",
    image: "/projects/autonomous-robot.png",
    technologies: ["ROS 2", "Robotics", "Computer Vision", "Python"],
    link: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 space-y-3 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Projects
        </h2>

        <p className="mx-auto max-w-2xl text-muted-foreground">
          A selection of academic and personal projects I have worked on.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              <Badge className="absolute right-4 top-4">
                {project.status}
              </Badge>
            </div>

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>

              <CardDescription>
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.motivation}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="
                      border border-emerald-200
                      bg-emerald-50
                      text-emerald-700
                      font-medium
                      hover:bg-emerald-50

                      dark:border-emerald-900
                      dark:bg-emerald-950/40
                      dark:text-emerald-300
                      dark:hover:bg-emerald-950/40
                    "
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="outline" asChild>
                <a href={project.link}>
                  View project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}