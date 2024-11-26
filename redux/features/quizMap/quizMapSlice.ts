import { createSlice } from "@reduxjs/toolkit"

const quizMapSlice = createSlice({
  name: "current quiz state",
  initialState: "main",
  reducers: {
    current: (state) => {
      return state
    },
    change: (state, { payload }) => {
      return (state = payload)
    },
  },
})

export const quizMapActions = quizMapSlice.actions
export const quizMapReducer = quizMapSlice.reducer
