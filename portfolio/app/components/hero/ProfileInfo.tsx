interface Information {
  name: string
  job: string
}

interface UserInfo {
  information: Information
}

export default function ProfileInfo({ information }: UserInfo) {
  return (
    <div className="space-y-2">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
        {information.name}
      </h1>
      <p className="text-2xl text-muted-foreground">
        {information.job}
      </p>
    </div>
  )
}