"use client"

import bg from "@/assets/bg/bg.jpg"
import Image from "next/image"
// import { quizStateActions } from "@/redux/features/currentQuizState/currentQuizStateSlice"
import { useAppDispatch } from "@/redux/hooks"

export default function Main() {
  const dispatch = useAppDispatch()
  return (
    <div className="flex items-center justify-center flex-1 h-screen object-contain">
      <Image
        className=""
        // width={1000}
        // height={1000}
        // sizes="90vw"
        src={bg}
        alt="classroom"
      />
    </div>
  )
}
