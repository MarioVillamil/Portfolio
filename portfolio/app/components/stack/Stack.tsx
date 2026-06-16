import StackTitle from "./StackTitle"
import StackList from "./StackList"

export default function Stack() {
  return (
    <section id="stack" className="w-full  rounded-2xl border bg-primary px-6 py-5">
      <StackTitle title="Trusted by the world’s best software teams" />
      <StackList />
    </section>
  )
}