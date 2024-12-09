import { logRoles, render, screen } from "@/app/_src/uils/test-utils"
import user from "@testing-library/user-event"
import Settings from "@/app/@settings/page"
import {
  settingsActions,
  settingsReducer,
} from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import {
  mapActions,
  mapReducer,
} from "@/app/_src/redux/features/quiz/map/mapSlice"
import { useAppDispatch } from "@/app/_src/redux/hooks"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

describe("Settings", () => {
  test("renders the heading and a paragraph", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Difficulty/)
    const heading = screen.getByRole("heading", {
      name: /Configuration/,
    })

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })

  test("renders difficulties", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Difficulty/)
    const easy = screen.getByLabelText("Easy")
    const medium = screen.getByLabelText("Medium")
    const difficlut = screen.getByLabelText("Difficult")

    expect(paragraph).toBeInTheDocument()
    expect(easy).toBeInTheDocument()
    expect(medium).toBeInTheDocument()
    expect(difficlut).toBeInTheDocument()
  })

  test("renders types", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Type/)
    const multiple = screen.getByLabelText("Multiple")
    const bool = screen.getByLabelText("True | False")

    expect(paragraph).toBeInTheDocument()
    expect(multiple).toBeInTheDocument()
    expect(bool).toBeInTheDocument()
  })

  test("renders range", () => {
    render(<Settings />)
    const range = screen.getByRole("slider")

    expect(range).toBeInTheDocument()
  })

  test("renders start button", () => {
    render(<Settings />)
    const button = screen.getByRole("button", {
      name: /Start Your Quiz Session/i,
    })

    expect(button).toBeInTheDocument()
  })
})

// test("handles start button click", async () => {
//   renderWithProviders(<Settings />)
//   const difficultyRadios = screen.getAllByRole("radio")
//   const startButton = screen.getByRole("button", {
//     name: /Start Your Quiz Session/i,
//   })
//   await user.click(difficultyRadios[0])
//   await user.click(difficultyRadios[3])
//   await user.click(startButton)
//   screen.debug()
// })

// test("shows alert if required data is not provided", () => {
//   const dispatch = jest.fn()
//   ;(useAppDispatch as jest.Mock).mockReturnValue(dispatch)
//   window.alert = jest.fn()

//   renderWithProviders(<Settings />)

//   // Click the start button without setting required data
//   fireEvent.click(screen.getByText("Start Your Quiz Session"))

//   // Assert alert is shown
//   expect(window.alert).toHaveBeenCalledWith("Not done yet!")
//   // Ensure no actions are dispatched
//   expect(dispatch).not.toHaveBeenCalled()
// })
