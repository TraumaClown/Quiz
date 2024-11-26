"use client"

import Choices_Boolean from "@/components/Choices_Boolean"
import { QuizData } from "@/types/QuizData"
import assembleQuizSessionURL from "@/utils/assembleQuizSessionURL"
import { useState } from "react"

export default function Session() {
  const { url, isURLValid, type: quizType } = assembleQuizSessionURL()

  // const fetchData = async () => {
  //   "use server"
  //   const request = await fetch(url)
  //   const data = await request.json()
  //   return data
  // }
  const data = fetch(url)
  // const results: QuizData = data.results
  // const { question, correct_answer, incorrect_answers } =
  // data.results[current]
  const [SessionQuestionIndex, setSessionQuestionIndex] = useState({
    current: 0,
    // max: results.length,
    max: 2,
  })

  let { current, max } = SessionQuestionIndex
  const isQuizFinished = () => current === max
  //   if (isQuizFinished()) return <QuizResultPage />

  // const { question, correct_answer, incorrect_answers } = results[current]

  const progressBarPrecentage = Math.ceil(((current + 1) / max) * 100)
  //   const decoded_correct_answers = decode(correct_answer)
  const decoded_correct_answers = correct_answer
  //   const decodedQuestion = decode(question)
  const decodedQuestion = question
  //   const decoded_incorrect_answers = incorrect_answers.map((answer) =>
  //     decode(answer)
  const decoded_incorrect_answers = incorrect_answers.map((answer) => answer)

  return (
    <div className="quiz">
      <div className="progress-bar">
        <div
          className="progress-bar__progress"
          style={{ width: `${progressBarPrecentage}%` }}
        ></div>
      </div>
      <div className="question-container">{decodedQuestion}</div>

      {/* depending on the [quizType] variable, load the corresponding component and send the data along. */}
      {quizType === "boolean" && (
        <Choices_Boolean
          setSessionQuestionIndex={setSessionQuestionIndex}
          correctAnswer={decoded_correct_answers}
          //   incorrectAnswers={decoded_incorrect_answers}
          question={decodedQuestion}
        />
      )}
      {/* {quizType === "multiple" && (
        <Choices_Multiple
          setSessionQuestionIndex={setSessionQuestionIndex}
          correctAnswer={decoded_correct_answers}
          incorrectAnswers={decoded_incorrect_answers}
          question={decodedQuestion}
        />
      )} */}
    </div>
  )
}
