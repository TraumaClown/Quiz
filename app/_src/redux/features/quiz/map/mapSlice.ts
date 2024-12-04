import { createSlice } from "@reduxjs/toolkit"
import { QuizMapActions } from "@/app/quiz/_src/types/models"

const mapSlice = createSlice({
  name: "QuizMap",
  initialState: (): QuizMapActions["payload"] => "main",
  reducers: {
    current: (state) => {
      return state
    },
    change: (state, { payload }: QuizMapActions) => {
      return (state = payload)
    },
  },
})

export const mapActions = mapSlice.actions
export const mapReducer = mapSlice.reducer
