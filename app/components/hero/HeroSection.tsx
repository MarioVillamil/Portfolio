import ProfileInfo from "./ProfileInfo"
import ProfileImage from "./ProfileImage"
import CvSection from "../cv/CvSection"
import AboutMe from "../about/aboutMe"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const user = {
    name: "Mario Villamil",
    job: "Software engineer",
  }

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="space-y-8">
        <ProfileInfo information={user} />

        <AboutMe />

        <div className="flex gap-4">
          <CvSection />

          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">View projects</Link>
          </Button>
        </div>
      </div>

      <ProfileImage />
    </section>
  )
}