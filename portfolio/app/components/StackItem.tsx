import Image from "next/image"

interface StackItemProps {
  label: string
  image: string
}

export default function StackItem({ label, image }: StackItemProps) {
  return (
    <div className="flex h-16 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-3">
      <Image
        src={image}
        alt={label}
        width={110}
        height={40}
        className="h-full w-full object-contain"
      />
    </div>
  )
}