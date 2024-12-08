"use client"

import { useAppSelector } from "@/app/_src/redux/hooks"
import Main from "@/app/@main/page"
import Category from "@/app/@category/page"
import Settings from "@/app/@settings/page"
import Session from "@/app/@session/page"
import Result from "@/app/@result/page"
import Record from "@/app/@record/page"
import About from "@/app/@about/page"
import NotFound from "@/app/not-found"

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
