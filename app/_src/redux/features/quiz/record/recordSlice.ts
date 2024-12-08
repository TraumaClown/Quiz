import { createSlice } from "@reduxjs/toolkit"
import type {
  QuizRecord,
  QuizRecordActionAdd,
  QuizRecordSetIsRecording,
} from "@/app/_src/types/models"

const quizRecord: QuizRecord = {
  isRecording: true,
  history: [],
}

const recordSlice = createSlice({
  name: "QuizRecord",
  initialState: quizRecord,
  reducers: {
    setIsRecording: (state, { payload }: QuizRecordSetIsRecording) => {
      state.isRecording = payload
    },
    add: (state, { payload }: QuizRecordActionAdd) => {
      return {
        isRecording: state.isRecording,
        history: [...state.history, payload],
      }
    },

    clean: (state) => {
      return {
        isRecording: state.isRecording,
        history: [],
      }
    },
  },
})

export const recordActions = recordSlice.actions
export const recordReducer = recordSlice.reducer
