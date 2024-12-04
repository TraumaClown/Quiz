import type { Metadata } from "next"
import { QuizLayoutProps } from "@/app/quiz/_src/types/components"
import "./_src/css/globals.css"

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quiz Application",
}

const QuizLayout: React.FC<QuizLayoutProps> = ({ children, sideNav }) => {
  return (
    <div className="flex bg-gray-800 h-screen relative">
      {sideNav}
      {children}
    </div>
  )
}

export default QuizLayout
