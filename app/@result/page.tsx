"use client"

import React, { Suspense, useState, lazy } from "react"
import { BsChevronDoubleDown } from "react-icons/bs"
import useCalculateResultPercentage from "@/app/_src/hooks/useCalculateResultPercentage"
import { useAppSelector } from "@/app/_src/redux/hooks"
import ResultScoreDemo from "@/app/_src/components/result_score_demo/ResultScoreDemo"
import "./result.css"
const ResultDetail = lazy(
  () => import("@/app/_src/components/result_detail/ResultDetail")
)

const Result: React.FC = () => {
  const [resultDetailDisplay, setResultDetailDisplay] = useState<boolean>(false)
  const { questions, userQuizResult, userAnswers, correctAnswers } =
    useAppSelector((state) => state.statsReducer)
  const { percentage, correctAnswersLength, total } =
    useCalculateResultPercentage()

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
      {/* summery */}
      <div className="absolute top-40 left-20 text-5xl bg-zinc-800 rounded-2xl p-1">
        <span>{correctAnswersLength}</span>
        <span>/</span>
        <span>{total}</span>
      </div>

      {/* demo */}
      <div
        className={`grid grid-rows-3 place-items-center w-full h-full text-gray-500 ${
          resultDetailDisplay ? "hide" : "show"
        }`}
      >
        <h2 className="text-center text-4xl text-pink-500">Your Score</h2>
        <ResultScoreDemo percentage={percentage} showReaction={true} />
        <div
          className="score-show-detail"
          onClick={() => setResultDetailDisplay(true)}
        >
          <BsChevronDoubleDown className="score-show-detail__btn" />
          <p className="score-show-detail__text">Detail</p>
        </div>
      </div>

      {/* detail screen */}
      {resultDetailDisplay && (
        <Suspense fallback={null}>
          <ResultDetail
            correctAnswers={correctAnswers}
            questions={questions}
            userAnswers={userAnswers}
            userQuizResult={userQuizResult}
            resultDetailDisplay={resultDetailDisplay}
            setResultDetailDisplay={setResultDetailDisplay}
          />
        </Suspense>
      )}
    </div>
  )
}

export default Result
