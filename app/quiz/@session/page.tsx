"use client"

import { lazy, Suspense, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/app/_src/redux/hooks"
import { useGetQuizQuery } from "@/app/_src/redux/features/quiz/api/apiSlice"
import { mapActions } from "@/app/_src/redux/features/quiz/map/mapSlice"
import { recordActions } from "@/app/_src/redux/features/quiz/record/recordSlice"
import { decode } from "html-entities"
import useAssembleQuizSessionURL from "@/app/quiz/_src/hooks/useAssembleQuizSessionURL"
import Choices_Multiple from "./Choices_Multiple"
import Choices_Boolean from "./Choices_Boolean"
import Loading from "../loading"
import useCalculateResultPercentage from "@/app/quiz/_src/hooks/useCalculateResultPercentage"
import type { QuizData } from "@/app/quiz/_src/types/models"
import type { SessionProgressTracker } from "@/app/quiz/_src/types/components"
import "./session.css"

const Modal = lazy(() => import("@/app/quiz/_src/components/modal/Modal"))

const Session: React.FC = () => {
  const { URL, type: quizType } = useAssembleQuizSessionURL()

  const { data, isLoading, error, isError } = useGetQuizQuery(URL)
  const err = error as unknown as { status: string; error: string }
  const dispatch = useAppDispatch()
  const stats = useAppSelector((state) => state.statsReducer)
  const { isRecording } = useAppSelector((state) => state.recordReducer)
  const { category, type, difficulty } = useAppSelector(
    (state) => state.settingsReducer
  )

  const { percentage, total, correctAnswersLength } =
    useCalculateResultPercentage()

  const [sessionProgressTracker, setSessionProgressTracker] =
    useState<SessionProgressTracker>({
      current: 0,
      max: total,
    })
  const { current, max } = sessionProgressTracker

  useEffect(() => {
    if (current == max) {
      const { correctAnswers, questions, userAnswers, userQuizResult } = stats
      if (isRecording) {
        dispatch(
          recordActions.add({
            percentage,
            correct: correctAnswersLength,
            total,
            questions: questions,
            correctAnswers: correctAnswers,
            answers: userAnswers,
            result: userQuizResult,
            category,
            difficulty,
            type,
          })
        )
      }
      dispatch(mapActions.change("result"))
    }
  })

  if (current == max) return
  if (isLoading || !data?.results) return <Loading />
  if (isError) {
    return (
      <Suspense fallback={<Loading />}>
        <Modal reason={err.status} desciption={err.error} />
      </Suspense>
    )
  }

  //if there is no result for the selected settings in database, show error modal.
  const dataIsEmpty = data.results.length == 0
  if (dataIsEmpty) {
    return (
      <Suspense fallback={<Loading />}>
        <Modal reason={"NO_QUESTIONS_IN_DATABASE"} />
      </Suspense>
    )
  }

  //if somehow the required config were not set, show error modal.
  if (!category || !type || !difficulty) {
    return (
      <Suspense fallback={<Loading />}>
        <Modal reason={"NO_QUESTIONS_IN_DATABASE"} />
      </Suspense>
    )
  }

  const currentQuizRoundData: QuizData["results"][0] = data.results[current]
  const { question, correct_answer, incorrect_answers } = currentQuizRoundData
  const progressBarPrecentage = Math.ceil(((current + 1) / max) * 100)
  const decoded_correct_answers = decode(correct_answer)
  const decodedQuestion = decode(question)
  const decoded_incorrect_answers = incorrect_answers.map((answer) =>
    decode(answer)
  )

  return (
    <div className="quiz">
      {/* progress bar */}
      <div className="w-full h-[1%]">
        <div
          className="progress-bar__progress"
          style={{ width: `${progressBarPrecentage}%` }}
        ></div>
      </div>

      {/* question */}
      <div className="question-container w-full h-[39%] ">
        {decodedQuestion}
      </div>

      {/* depending on the [quizType] variable, load the corresponding component and send the data along. */}
      {quizType === "boolean" && (
        <Choices_Boolean
          setSessionProgressTracker={setSessionProgressTracker}
          correctAnswer={decoded_correct_answers}
          question={decodedQuestion}
        />
      )}

      {quizType === "multiple" && (
        <Choices_Multiple
          setSessionProgressTracker={setSessionProgressTracker}
          correctAnswer={decoded_correct_answers}
          incorrectAnswers={decoded_incorrect_answers}
          question={decodedQuestion}
        />
      )}
    </div>
  )
}

export default Session
