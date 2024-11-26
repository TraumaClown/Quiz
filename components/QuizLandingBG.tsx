import bg from "@/assets/bg/bg.jpg"
import Image from "next/image"

export default function QuizLandingBG() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Image width={900} height={50} src={bg} alt="classroom" />
    </div>
  )
}
