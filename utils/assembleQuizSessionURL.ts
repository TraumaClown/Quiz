import { useAppSelector } from "@/redux/hooks"
import { QuizSettings } from "@/types/QuizSettings"

const assembleQuizSessionURL = (): {
  isURLValid: boolean
  url: string
  type: string
} => {
  const quizSettings: QuizSettings = useAppSelector(
    (state) => state.quizSettingsReducer
  )
  const { category, difficulty, type, amount }: QuizSettings = quizSettings
  const isURLValid: boolean = Boolean(category && difficulty && type && amount)
  const url: string = `amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

  return {
    isURLValid,
    url,
    type,
  }
}

export default assembleQuizSessionURL
