import type { Metadata } from "next"
import QuizHeader from "@/components/QuizHeader"

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quiz Application",
}

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex bg-gray-800 h-screen">
      <QuizHeader />
      {children}
    </div>
  )
}
