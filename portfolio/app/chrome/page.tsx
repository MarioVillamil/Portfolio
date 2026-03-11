import { Button } from "@/components/ui/button"
import Header from "../components/Header"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="w-full flex flex-col gap-4 text-sm leading-loose">
        <div>
          <Header />
          <h1 className="font-medium">Project ready!</h1>
          <p>Ytests</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}