"use client"

import { useRef, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { quizSettingsActions } from "@/redux/features/quizSettings/quizSettingsSlice"
import { quizMapActions } from "@/redux/features/quizMap/quizMapSlice"
// import { useNavigate } from "react-router-dom"
import "./styles.css"

const Setttings = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<string>("7")
  // const [typeOfQuestions, setTypeOfQuestions] = useState("")
  const typeOfQuestions = useRef<string>()
  const difficulty = useRef<string>()
  // const numberOfQuestion = useRef<string>()
  const dispatch = useAppDispatch()

  //check if all needed data is set and thereafter, navigate to quiz-session to start the quiz.
  const startSession = () => {
    if (!typeOfQuestions.current || !difficulty.current) {
      alert("Please select a Question Type")
      return
    }
    dispatch(quizSettingsActions.setDifficulty(difficulty.current))
    dispatch(quizSettingsActions.setType(typeOfQuestions.current))
    dispatch(quizSettingsActions.setAmount(numberOfQuestion))
    dispatch(quizMapActions.change("session"))
  }

  const difficultyClasses =
    "w-32 h-24 bg-gray-400 gap-10 flex justify-center items-center bor cursor-pointer"

  return (
    <div className="flex flex-col flex-1 items-center h-full overflow-hidden text-white justify-center">
      <div className="T-NOQ-page__title">
        <h2>Type & Number Of Questions</h2>
        <small className="text-center">Almost Done!</small>
      </div>
      <div className="flex justify-evenly">
        <div
          className={`${difficultyClasses} border-r-2 border-black`}
          onClick={() => (difficulty.current = "easy")}
        >
          Easy
        </div>
        <div
          className={`${difficultyClasses}`}
          onClick={() => (difficulty.current = "medium")}
        >
          Medium
        </div>
        <div
          className={`${difficultyClasses} border-l-2 border-black`}
          onClick={() => (difficulty.current = "hard")}
        >
          Difficult
        </div>
      </div>
      <div className="T-NOQ-page__type-container">
        <div
          onClick={() => (typeOfQuestions.current = "multiple")}
          className={difficultyClasses}
        >
          Multiple Choices
        </div>
        <div
          onClick={() => (typeOfQuestions.current = "boolean")}
          className={difficultyClasses}
        >
          True | False
        </div>
      </div>
      <div className="T-NOQ-page__NOQ">
        <p>How many questions would you like to be asked?</p>
        <div className="NOQ__wrapper">
          1
          <input
            className="NOQ__range"
            onChange={(e) => setNumberOfQuestion(e.currentTarget.value)}
            type="range"
            min={1}
            max={20}
            value={numberOfQuestion}
          />
          20
        </div>
        {`::
        ${numberOfQuestion} ::`}
      </div>
      <div className="session-start-btn-container">
        <button onClick={startSession} className="start-btn">
          Start Your Quiz Session
        </button>
        <div className="beat-effect"></div>
      </div>
    </div>
  )
}

export default Setttings
