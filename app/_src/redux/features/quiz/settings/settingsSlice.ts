import { createSlice } from "@reduxjs/toolkit"
import { QuizSettings } from "@/app/quiz/_src/types/models"

const initialState: QuizSettings = {
  category: "",
  difficulty: "",
  type: "",
  amount: 0,
}

const settingsSlice = createSlice({
  name: "QuizSettings",
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

    setToDefault: () => {
      return {
        category: "0",
        difficulty: "easy",
        type: "multiple",
        amount: 7,
      }
    },
  },
})

export const settingsActions = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
