import { createSlice } from "@reduxjs/toolkit"

type initialStat = {
  questions: string[]
  userAnswers: string[]
  correctAnswers: string[]
  userQuizResults: string[]
}

const initialState: initialStat = {
  questions: [],
  userAnswers: [],
  correctAnswers: [],
  userQuizResults: [],
}

const quizStatsSlice = createSlice({
  name: "quiz stats",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      return {
        questions: [...state.questions, payload.question],
        userAnswers: [...state.userAnswers, payload.userAnswer],
        correctAnswers: [...state.correctAnswers, payload.correctAnswer],
        userQuizResults: [...state.userQuizResults, payload.userQuizResult],
      }
    },

    reset: () => initialState,
  },
})

export const quizStatsActions = quizStatsSlice.actions
export const quizStatsReducers = quizStatsSlice.reducer
