import { configureStore } from "@reduxjs/toolkit"
import { mapReducer } from "./features/quiz/map/mapSlice"
import { settingsReducer } from "./features/quiz/settings/settingsSlice"
import { statsReducer } from "./features/quiz/stats/statsSlice"
import { recordReducer } from "./features/quiz/record/recordSlice"
import { apiSlice } from "./features/quiz/api/apiSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      mapReducer,
      settingsReducer,
      statsReducer,
      recordReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        // .prepend(listenerm.middleware)
        .concat(apiSlice.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
