import { useAppSelector } from "@/redux/hooks"
import Category from "./@category/page"
import Main from "./@main/page"
import Settings from "./@settings/page"
import Session from "./@session/page"

export default function QuizPage() {
  const QuizCurrentState = useAppSelector((state) => state.quizMapReducer)
  switch (QuizCurrentState) {
    case "main":
      return <Main />
    case "category":
      return <Category />
    case "config":
      return <Settings />
    case "session":
      return <Session />
    // case "results" :
  }
}
