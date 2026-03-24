"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import StackItem from "./StackItem"

export default function StackList() {
  interface INavItem {
    label: string
    image: string
    type: "language" | "frontend" | "styling" | "ui"
  }

  const stackList: INavItem[] = [
    { label: "C++", image: "/c++.png", type: "language" },
    { label: "Java", image: "/java.png", type: "language" },
    { label: "Python", image: "/python.png", type: "language" },
    { label: "React", image: "/react.png", type: "frontend" },
    { label: "Next.js", image: "/nextjs-icon.webp", type: "frontend" },
    { label: "Tailwind CSS", image: "/tailwindcss.png", type: "styling" },
    { label: "shadcn/ui", image: "/shadcnuikit.webp", type: "ui" },
  ]

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {stackList.map((item) => (
          <CarouselItem
            key={item.label}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <StackItem label={item.label} image={item.image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}