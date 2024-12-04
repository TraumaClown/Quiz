import { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { statsActions } from "@/app/_src/redux/features/quiz/stats/statsSlice"
import { ChoicesProps } from "@/app/quiz/_src/types/components"
import { FaCheck, FaXmark } from "react-icons/fa6"

const Choices_Boolean: React.FC<Partial<ChoicesProps>> = ({
  correctAnswer,
  setSessionProgressTracker,
  question,
}) => {
  const dispatch = useDispatch()
  const handleChoiceSelection = (e: MouseEvent<HTMLDivElement>) => {
    const userAnswer = e.currentTarget.dataset.answer
    const isUserAnswerCorrect = userAnswer == correctAnswer
    dispatch(
      statsActions.update({
        question,
        userAnswer,
        correctAnswer,
        userQuizResult: isUserAnswerCorrect,
      })
    )

    setSessionProgressTracker!((state) => {
      return {
        ...state,
        current: state.current + 1,
      }
    })
  }

  return (
    <div className="w-6/12 h-3/5 flex items-center gap-x-2  ">
      <div
        className="bool-choice-true-shadow w-6/12 h-3/6  flex justify-center items-center bg-slate-400 bg-opacity-60"
        data-answer="True"
        onClick={(e) => handleChoiceSelection(e)}
      >
        <FaCheck className="scale-[3] text-green-700" />
      </div>
      <div
        className="bool-choice-true-shadow w-6/12 h-3/6 flex justify-center items-center"
        data-answer="False"
        onClick={(e) => handleChoiceSelection(e)}
      >
        <FaXmark className="scale-[3] text-red-700" />
      </div>
    </div>
  )
}

export default Choices_Boolean
