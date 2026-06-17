import HeroSection from "./components/hero/HeroSection"
import Stack from "./components/stack/Stack"
import ProjectsSection from "./components/projects/ProjectSection"
import ContactSection from "./components/contact/ContactSection"

export default function Page() {
  return (
    <main className="min-h-svh">
      <HeroSection />

      <div className="mx-auto max-w-6xl px-6">
        <Stack />
      </div>

      <ProjectsSection />
       <ContactSection />

      <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
    </main>
  )
}
