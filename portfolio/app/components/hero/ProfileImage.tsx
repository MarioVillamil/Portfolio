import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image
      src="/profilePicture.png"
      alt="Photo de Mario"
      width={400}
      height={200}
    />
  )
}