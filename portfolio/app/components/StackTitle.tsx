interface ITitle {
  title: string
}

export default function StackTitle({ title }: ITitle) {
  return (
    <h2 className="mb-4 text-sm text-zinc-400">
      {title}
    </h2>
  )
}