import { configureStore } from "@reduxjs/toolkit"
import { quizMapReducer } from "./features/quizMap/quizMapSlice"
import { quizSettingsReducer } from "./features/quizSettings/quizSettingsSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      quizMapReducer,
      quizSettingsReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
