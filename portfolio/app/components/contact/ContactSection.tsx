import { Github, Linkedin, Mail } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const contacts = [
  {
    label: "Email",
    value: "mario.villamil97@gmail.com",
    href: "mailto:mario.villamil97@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "MarioVillamil",
    href: "https://github.com/MarioVillamil",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Mario Villamil",
    href: "https://www.linkedin.com/in/mario-villamil-66375a262",
    icon: Linkedin,
  },
]

export default function ContactSection() {
  return (
    <footer id="contact" className="mt-24 border-t bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground">
            Feel free to contact me or check my social profiles.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
              >
                <Card className="h-full transition hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mario Villamil · Software Engineer
        </div>
      </div>
    </footer>
  )
}