"use client"

import { MouseEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/app/_src/redux/hooks"
import ResultDetail from "@/app/_src/components/result_detail/ResultDetail"
import cetegories from "@/app/_src/db/categories.json"
import type { ShowRecordDetail } from "@/app/_src/types/components"
import { recordActions } from "@/app/_src/redux/features/quiz/record/recordSlice"
import ResultScoreDemo from "@/app/_src/components/result_score_demo/ResultScoreDemo"
import { scoreColor } from "../_src/uils/score-color"

const Record: React.FC = () => {
  const { records, isRecording } = useAppSelector(
    (state) => state.recordReducer
  )
  const [detail, setDetail] = useState<JSX.Element | null>()
  const dispatch = useAppDispatch()
  const enabledRecording = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    console.log(e.currentTarget.textContent)
    if (isRecording) {
      e.currentTarget.textContent = "Already Enabled!"
      return
    }
    dispatch(recordActions.setIsRecording(true))
    e.currentTarget.textContent = "Now Enabled"
    e.currentTarget.classList.add("bg-teal-600")
  }

  // if record is empty
  if (records.length === 0)
    return (
      <div className="flex flex-col gap-y-4 w-full h-full justify-center items-center text-white">
        <span className="text-4xl">NO RECORD !</span>
        <span>
          :: make sure recording is enabled before finishing your quiz ::
        </span>
        <button
          className="text-white px-4 py-2 text-lg rounded-md bg-teal-800 bg-opacity-80 hover:bg-opacity-100"
          onClick={(e) => enabledRecording(e)}
        >
          Enable
        </button>
      </div>
    )

  const showRecordDetail = ({
    questions,
    correctAnswers,
    answers,
    result,
  }: ShowRecordDetail): void => {
    setDetail(() => {
      return (
        <ResultDetail
          correctAnswers={correctAnswers}
          questions={questions}
          userAnswers={answers}
          userQuizResult={result}
        />
      )
    })
  }

  const sideItems = records.map((record, index) => {
    const {
      answers,
      correct,
      correctAnswers,
      percentage,
      questions,
      result,
      total,
      category,
      difficulty,
      type,
    } = record
    const cate = cetegories.find((c) => c.id == category)
    const color = scoreColor(percentage)

    return (
      <div
        key={index}
        onClick={() => {
          showRecordDetail({ questions, correctAnswers, answers, result })
        }}
        className="w-full h-16 flex items-center justify-center bg-indigo-300 my-14 p-1 cursor-pointer gap-x-2"
      >
        <ResultScoreDemo
          className="w-2/5"
          percentage={percentage}
          size={0.4}
          color={color}
        />
        {/* tags */}
        <div className="gap-y-px text-center w-2/5">
          <small
            className="rounded-lg bg-green-300 px-2 overflow-hidden whitespace-nowrap text-ellipsis block w-full"
            title={cate?.value}
          >
            {cate?.value}
          </small>
          <small className="w-fit rounded-lg bg-green-300 px-2 capitalize">
            {difficulty}
          </small>
          <small className="w-fit rounded-lg bg-green-300 px-2">
            {correct}/{total}
          </small>
          <small className="block w-fit rounded-lg bg-green-300 px-2">
            {type}
          </small>
        </div>
      </div>
    )
  })

  return (
    <div className="w-[30%] h-screen flex text-white overflow-hidden">
      {/* side */}
      <div className="w- h-screen bg-blue-900 overflow-y-auto">
        <div className="h-9 w-full bg-green-300 sticky top-0">
          <button onClick={() => dispatch(recordActions.clean())}>Clear</button>
        </div>
        {sideItems}
      </div>
      {/* detail */}
      <div className="w-9/12 relative">
        {detail ? (
          detail
        ) : (
          <div className="w-full h-full flex justify-center items-center text-2xl px-10">
            Select a record and the details will be shown here.
          </div>
        )}
      </div>
    </div>
  )
}

export default Record
