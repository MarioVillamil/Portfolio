import StackTitle from "./StackTitle"
import StackList from "./StackList"

export default function Stack() {
  return (
    <section className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5">
      <StackTitle title="Trusted by the world’s best software teams" />
      <StackList />
    </section>
  )
}