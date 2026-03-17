import { Button } from "@/components/ui/button"
import HeroSection from "./components/hero/HeroSection"

export default function Page() {

  return (
    <div className="flex min-h-svh p-6">
        <div>
          <HeroSection/>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
  )
}
