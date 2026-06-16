import { Button } from "@/components/ui/button"
import Stack from "./components/stack/Stack"
import HeroSection from "./components/hero/HeroSection"
import CvSection from "./components/cv/CvSection"

export default function Page() {

  return (
    <div className=" min-h-svh p-6">
        <div>
          <HeroSection/>
        </div>
      <div>
        <Stack />
      </div>
      <div>
        <CvSection/>
      </div>
      <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
  )
}
