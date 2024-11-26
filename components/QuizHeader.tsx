"use client"

import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { quizMapActions } from "@/redux/features/quizMap/quizMapSlice"
import { redirect } from "next/navigation"

const QuizHeader = () => {
  const currentQuizState = useAppSelector((state) => state.quizMapReducer)
  const dispatch = useAppDispatch()
  const beginQuiz = () => {
    dispatch(quizMapActions.change("category"))
  }
  const buttonClasses =
    "border-2 border-blue-400 border-solid p-1 disabled:text-red-400 disabled:cursor-not-allowed"
  const restartQuiz = () => {
    dispatch(quizMapActions.change("main"))
  }
  return (
    <header className="h-screen w-48 bg-gray-600 ml-12 text-white">
      <div className="h-1/5 bg-orange-300"></div>
      <div className="flex flex-col justify-center h-4/5 gap-y-5">
        <button
          className={buttonClasses}
          disabled={currentQuizState === "main" ? false : true}
          onClick={beginQuiz}
        >
          Begin
        </button>
        <button
          className={buttonClasses}
          disabled={currentQuizState === "main" ? true : false}
          onClick={() => restartQuiz}
        >
          Restart
        </button>
        <button className={buttonClasses}>Your Record</button>
        <button className={buttonClasses}>About This Project</button>
        <button className={buttonClasses} onClick={restartQuiz}>
          Exit
        </button>
      </div>
    </header>
  )
}

export default QuizHeader
