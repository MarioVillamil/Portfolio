import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t bg-muted/40 py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground">
            Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">

          <a
            href="mailto:mario.villamil97@gmail.com"
            className="flex items-center gap-3 transition hover:text-primary"
          >
            <Mail size={24} />
            <span>mario.villamil97@gmail.com</span>
          </a>

          <a
            href="https://github.com/MarioVillamil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-primary"
          >
            <Github size={24} />
            <span>MarioVillamil</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mario-villamil-66375a262"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-primary"
          >
            <Linkedin size={24} />
            <span>Mario Villamil</span>
          </a>

        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mario Villamil · Software Engineer
        </div>
      </div>
    </footer>
  )
}