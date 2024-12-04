import { Dispatch, SetStateAction } from "react"
import { QuizStats } from "./models"

export type SessionProgressTracker = {
  current: number
  max: number
}

export type ChoicesProps = {
  correctAnswer: string
  setSessionProgressTracker: Dispatch<SetStateAction<SessionProgressTracker>>
  question: string
  incorrectAnswers: string[]
}

export type QuizLayoutProps = {
  readonly children: React.ReactNode
  readonly sideNav: React.ReactNode
}

export type ModalProps = {
  readonly reason: string
  desciption?: string
}

export interface ResultDetailProps extends QuizStats {
  resultDetailDisplay?: boolean
  setResultDetailDisplay?: Dispatch<SetStateAction<boolean>>
}

export type ShowRecordDetail = {
  questions: string[]
  correctAnswers: string[]
  answers: string[]
  result: boolean[]
}

export type ResultScoreDemoProps = {
  percentage: number
  size?: number
  showReaction?: boolean
  className?: string
}
