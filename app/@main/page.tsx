import bg from "@/app/_src/assets/bg/bg.jpg"
import Image from "next/image"

const Main: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen object-contain">
      <Image src={bg} alt="classroom" />
    </div>
  )
}

export default Main
