import { BsChevronDoubleDown } from "react-icons/bs"
import type { ResultDetailProps } from "@/app/quiz/_src/types/components"
import "./result-detail.css"

const ResultDetail: React.FC<ResultDetailProps> = ({
  resultDetailDisplay = true,
  setResultDetailDisplay,
  questions,
  correctAnswers,
  userAnswers,
  userQuizResult,
}) => {
  //create table rows
  const resultTable: JSX.Element[] = questions.map((question, index) => {
    const correctOrIncorrect = userQuizResult[index] ? "correct" : "incorrect"
    return (
      <tr className="table__row" key={index}>
        <td className="table__element">{question}</td>
        <td className={`table__element ${correctOrIncorrect}`}>
          {userAnswers[index]}
        </td>
        <td className={`table__element ${correctOrIncorrect}`}>
          {correctAnswers[index]}
        </td>
      </tr>
    )
  })

  return (
    <div
      className={`quiz-result-page__detail ${
        resultDetailDisplay ? "show" : ""
      }`}
    >
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="head__element">Question</th>
            <th className="head__element">Your Answer</th>
            <th className="head__element">Correct Answer</th>
          </tr>
        </thead>
        <tbody className="table__body">{resultTable}</tbody>
      </table>
      {setResultDetailDisplay ? (
        <div
          className="score-hide-detail"
          onClick={() => setResultDetailDisplay!(false)}
        >
          <BsChevronDoubleDown className="score-hide-detail__btn" />
        </div>
      ) : null}
    </div>
  )
}

export default ResultDetail
