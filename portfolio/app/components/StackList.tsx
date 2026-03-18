export default function StackList(){
    interface InavItem {
        label : string,
        type: "language" | "frontend" | "styling" | "ui"
    }
    const stackList: InavItem[] = [
  { label: "C++", type: "language" },
  { label: "Java", type: "language" },
  { label: "Python", type: "language" },
  { label: "TypeScript", type: "language" },

  { label: "React", type: "frontend" },
  { label: "Next.js", type: "frontend" },

  { label: "Tailwind CSS", type: "styling" },

  { label: "shadcn/ui", type: "ui" }
]
    return(
        <div>
            <ul className="flex flex-row">
                {stackList.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
            </ul>
        </div>
    )
}