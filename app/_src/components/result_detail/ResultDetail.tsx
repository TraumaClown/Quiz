import { BsChevronDoubleDown } from "react-icons/bs"
import type { ResultDetailProps } from "@/app/_src/types/components"
import { FaCheck, FaXmark } from "react-icons/fa6"
import "./result-detail.css"

const ResultDetail: React.FC<ResultDetailProps> = ({
  resultDetailDisplay = true,
  setResultDetailDisplay,
  questions,
  correctAnswers,
  userAnswers,
  userQuizResult,
  type,
}) => {
  const deternimType: "multiple" | "boolean" =
    type ||
    (userAnswers[0] === "False" || userAnswers[0] === "True"
      ? "boolean"
      : "multiple")
  //create table rows
  const result: JSX.Element[] = questions.map((question, index) => {
    const correctOrIncorrect = userQuizResult[index] ? "correct" : "incorrect"
    return (
      <tr className="table__row" key={index}>
        <td className="table__element">{question}</td>
        {deternimType === "boolean" ? (
          // if type is boolean
          <>
            {/* user answer */}
            <td className={`table__element ${correctOrIncorrect}`}>
              <div className="flex justify-center items-center">
                {userAnswers[index] === "False" ? (
                  <FaXmark className="scale-[3] text-red-600" />
                ) : (
                  <FaCheck className="scale-[3] text-green-600" />
                )}
              </div>
            </td>
            {/* correct answer */}
            <td className={`table__element ${correctOrIncorrect}`}>
              <div className="flex justify-center items-center">
                {correctAnswers[index] === "False" ? (
                  <FaXmark className="scale-[3] text-red-600" />
                ) : (
                  <FaCheck className="scale-[3] text-green-600" />
                )}
              </div>
            </td>
          </>
        ) : (
          // if type is multiple
          <>
            {/* user answer */}
            <td className={`table__element ${correctOrIncorrect}`}>
              {userAnswers[index]}
            </td>
            {/* correct answer */}
            <td className={`table__element ${correctOrIncorrect}`}>
              {correctAnswers[index]}
            </td>
          </>
        )}
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
        <thead className="table__head sticky top-0 bg-gray-800 z-10">
          <tr className="table__row">
            <th className="head__element">Question</th>
            <th className="head__element">Your Answer</th>
            <th className="head__element">Correct Answer</th>
          </tr>
        </thead>
        <tbody className="table__body">{result}</tbody>
      </table>
      {setResultDetailDisplay ? (
        <div
          className="score-hide-detail text-teal-500 hover:text-teal-400 z-20"
          title="Back"
          onClick={() => setResultDetailDisplay(false)}
        >
          <BsChevronDoubleDown className="score-hide-detail__btn" />
        </div>
      ) : null}
    </div>
  )
}

export default ResultDetail
