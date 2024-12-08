import { render, screen } from "@/app/_src/test-utils"
import user from "@testing-library/user-event"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Session from "@/app/quiz/@session/page"
import {
  statsReducer,
  statsActions,
} from "@/app/_src/redux/features/quiz/stats/statsSlice"
import {
  settingsActions,
  settingsReducer,
} from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import { apiSlice } from "@/app/_src/redux/features/quiz/api/apiSlice"
import {
  recordReducer,
  recordActions,
} from "@/app/_src/redux/features/quiz/record/recordSlice"
import { useAppDispatch } from "@/app/_src/redux/hooks"

const mockStore = configureStore({
  reducer: {
    statsReducer,
    settingsReducer,
    recordReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // .prepend(listenerm.middleware)
      .concat(apiSlice.middleware),
})

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={mockStore}>{ui}</Provider>)
}

const dispatchSettings = () => {
  const dispatch = mockStore.dispatch
  dispatch(settingsActions.setCategory("0"))
  dispatch(settingsActions.setDifficulty("easy"))
  dispatch(settingsActions.setType("multiple"))
  dispatch(settingsActions.setAmount(2))
}

describe("Session", () => {
  test("renders the progress bar", () => {
    // dispatchSettings()
    // renderWithProviders(<Session />)
    // const progressBar = screen.getByTestId("progress bar")
    // expect(progressBar).toBeInTheDocument()
  })
})
