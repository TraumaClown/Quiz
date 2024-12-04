import { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { statsActions } from "@/app/_src/redux/features/quiz/stats/statsSlice"
import { ChoicesProps } from "@/app/quiz/_src/types/components"

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
    <div className="w-fit h-3/5">
      <div
        className=""
        data-answer="True"
        onClick={(e) => handleChoiceSelection(e)}
      ></div>
      <div
        className=""
        data-answer="False"
        onClick={(e) => handleChoiceSelection(e)}
      ></div>
    </div>
  )
}

export default Choices_Boolean
