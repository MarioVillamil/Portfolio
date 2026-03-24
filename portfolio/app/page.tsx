import { Button } from "@/components/ui/button"
import Stack from "./components/Stack"

export default function Page() {
  return (
    <div className="w-full min-h-svh p-6 justify-center">
      <div className="">
        <div>
          <h1 className="font-medium">Mario</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
      <Stack />
    </div>
  )
}
