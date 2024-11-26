import { createSlice } from "@reduxjs/toolkit"
import { QuizSettings } from "@/types/QuizSettings"

const initialState: QuizSettings = {
  category: "",
  difficulty: "",
  type: "",
  amount: 0,
}

const quizSettings = createSlice({
  name: "quiz settings",
  initialState: initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      return (state = {
        ...state,
        category: payload,
      })
    },

    setDifficulty: (state, { payload }) => {
      return (state = {
        ...state,
        difficulty: payload,
      })
    },

    setType: (state, { payload }) => {
      return (state = {
        ...state,
        type: payload,
      })
    },

    setAmount: (state, { payload }) => {
      return (state = {
        ...state,
        amount: payload,
      })
    },

    // setToDefault: () => {
    //     return {
    //       category: "0",
    //       difficulty: "easy",
    //       type: "multiple",
    //       amount: "7",
    //     }
    //   },
  },
})

export const quizSettingsActions = quizSettings.actions
export const quizSettingsReducer = quizSettings.reducer
