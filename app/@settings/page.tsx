"use client"

import { useRef, useState } from "react"
import { useAppDispatch } from "@/app/_src/redux/hooks"
import { settingsActions } from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import { mapActions } from "@/app/_src/redux/features/quiz/map/mapSlice"
import "./settings.css"

const Settings: React.FC = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<string>("7")
  const typeOfQuestions = useRef<string>()
  const difficulty = useRef<string>()
  const dispatch = useAppDispatch()

  const startSession = (): void => {
    //make sure the required data in collected
    if (!typeOfQuestions.current || !difficulty.current) {
      alert("Not done yet!")
      return
    }
    //dispatch the required data and then change the slot
    dispatch(settingsActions.setDifficulty(difficulty.current))
    dispatch(settingsActions.setType(typeOfQuestions.current))
    dispatch(settingsActions.setAmount(Number(numberOfQuestion)))
    dispatch(mapActions.change("session"))
  }

  return (
    <>
      <h2 className="text-center text-white py-5 text-xl">
        :: Configuration ::
      </h2>

      <div className="w-full flex flex-col items-center h-full text-white gap-y-5 px-5">
        {/* difficulties */}
        <div className="bordered flex flex-col items-center mt-5 w-full">
          <p className="self-start p-2">Select Difficulty :</p>
          <div className="flex">
            <input
              type="radio"
              name="difficulty"
              id="easy"
              className="hidden"
              onClick={() => (difficulty.current = "easy")}
              style={{ display: "none" }}
            />
            <label htmlFor="easy" className="btn-settings">
              Easy
            </label>
            <input
              type="radio"
              name="difficulty"
              id="medium"
              className="hidden"
              onClick={() => (difficulty.current = "medium")}
            />
            <label htmlFor="medium" className="btn-settings">
              Medium
            </label>
            <input
              type="radio"
              name="difficulty"
              id="difficult"
              className="hidden"
              onClick={() => (difficulty.current = "hard")}
            />
            <label htmlFor="difficult" className="btn-settings">
              Difficult
            </label>
          </div>
        </div>

        {/* types */}
        <div className="bordered flex flex-col items-center w-full mx-20">
          <p className="self-start p-2">Select Type :</p>
          <div className="flex">
            <input
              type="radio"
              name="type"
              id="multiple"
              className="hidden"
              onClick={() => (typeOfQuestions.current = "multiple")}
            />
            <label htmlFor="multiple" className="btn-settings">
              Multiple
            </label>
            <input
              type="radio"
              name="type"
              id="boolean"
              className="hidden"
              onClick={() => (typeOfQuestions.current = "boolean")}
            />
            <label htmlFor="boolean" className="btn-settings">
              True | False
            </label>
          </div>
        </div>

        {/* range */}
        <div className="bordered flex flex-col items-center w-full p-2">
          <p className="p-1">How many questions would you like to be asked?</p>
          <div className="flex justify-center w-full">
            <span>1</span>
            <input
              onChange={(e) => setNumberOfQuestion(e.currentTarget.value)}
              className="w-1/2"
              type="range"
              min={1}
              max={10}
              value={numberOfQuestion}
            />
            <span>10</span>
          </div>
          <span className="text-lg">{`# ${numberOfQuestion} #`}</span>
        </div>

        {/* start btn */}
        <div className="session-start-btn-container">
          <button onClick={startSession} className="start-btn">
            Start Your Quiz Session
          </button>
          <div className="beat-effect"></div>
        </div>
      </div>
    </>
  )
}

export default Settings
