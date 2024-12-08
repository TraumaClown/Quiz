import user from "@testing-library/user-event"
import ResultDetail from "@/app/quiz/_src/components/result_detail/ResultDetail"
import { render, screen } from "@/app/_src/test-utils"

describe("result detail", () => {
  test("renders detail table component", () => {
    const questions = ["Question1"]
    const correctAnswers = ["correctAnswers1"]
    const userAnswers = ["userAnswers1"]
    const userQuizResult = [false]

    render(
      <ResultDetail
        questions={questions}
        correctAnswers={correctAnswers}
        userAnswers={userAnswers}
        userQuizResult={userQuizResult}
      />
    )

    const table = screen.getByRole("table")
    const tableHeadRow = screen.getByRole("row", {
      name: "Question Your Answer Correct Answer",
    })
    const row = screen.getByRole("row", {
      name: "Question1 userAnswers1 correctAnswers1",
    })
    expect(table).toBeInTheDocument()
    expect(tableHeadRow).toBeInTheDocument()
    expect(row).toBeInTheDocument()
  })
})
