"use client"

import { useAppSelector } from "@/app/_src/redux/hooks"
import Main from "./@main/page"
import Category from "./@category/page"
import Settings from "./@settings/page"
import Session from "./@session/page"
import Result from "./@result/page"
import Record from "./@record/page"
import About from "./@about/page"
import NotFound from "./not-found"

const QuizPage: React.FC = () => {
  const QuizCurrentState = useAppSelector((state) => state.mapReducer)

  const switcher = () => {
    switch (QuizCurrentState) {
      case "main":
        return <Main />
      case "category":
        return <Category />
      case "settings":
        return <Settings />
      case "session":
        return <Session />
      case "result":
        return <Result />
      case "record":
        return <Record />
      case "about":
        return <About />
      default:
        return <NotFound></NotFound>
    }
  }
  return <div className="flex-1 relative overflow-hidden">{switcher()}</div>
}

export default QuizPage
