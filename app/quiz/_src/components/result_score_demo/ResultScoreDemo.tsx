import { ResultScoreDemoProps } from "@/app/quiz/_src/types/components"
import { useEffect, useRef } from "react"
import type { ScoreColors } from "@/app/quiz/_src/types/models"
import CountUp from "react-countup"
import "./result-score-demo.css"

const ResultScoreDemo: React.FC<ResultScoreDemoProps> = ({
  percentage,
  showReaction = false,
  size = 1,
  className,
}) => {
  const scoreBar = useRef<SVGCircleElement>(null)
  const scoreDemo = useRef<HTMLDivElement>(null)
  // 375 is the default stroke-dasharray and stroke-dashoffset
  const scoreBarLengthCalculation: number =
    375 * size - (375 * size * percentage) / 100
  const scoreColors: ScoreColors = {
    red: "#ff2727",
    yellow: "#ffff38",
    blue: "#3333ff",
    green: "#008100",
  }
  const scoreBarColor = (): string => {
    const perc = percentage
    switch (true) {
      case perc <= 25:
        return scoreColors.red
      case perc > 25 && perc <= 50:
        return scoreColors.yellow
      case perc > 50 && perc <= 75:
        return scoreColors.blue
      case perc > 75:
        return scoreColors.green
      default:
        throw new Error("unexpected return")
    }
  }
  const scoreReactionText = (): string => {
    switch (scoreBarColor()) {
      case scoreColors.red:
        return "Bad luck! Maybe try again?"
      case scoreColors.yellow:
        return "Well done! Want to try again?"
      case scoreColors.blue:
        return 'Awesome! You "DO" know things!'
      case scoreColors.green:
        return "Perfect! You should give yourself a treat!"
      default:
        return "oops something went wrong"
    }
  }

  useEffect(() => {
    scoreBar.current!.style.setProperty(
      "--calc",
      scoreBarLengthCalculation.toString()
    )
    scoreBar.current!.style.setProperty("--mult", size.toString())
    scoreDemo.current!.style.setProperty("--mult", size.toString())
    scoreDemo.current!.style.width = `${200 * size}px`
    scoreDemo.current!.style.height = `${200 * size}px`
  }, [])

  return (
    <div
      className={`flex justify-center items-center gap-3 flex-col ${className}`}
    >
      <div
        className="flex justify-center items-center relative rounded-full score__score-demo"
        ref={scoreDemo}
      >
        <div className="score-demo__bg absolute w-full h-full rounded-full bg-pink-300"></div>
        <div className="score-demo__score-bar absolute rounded-full">
          <svg className="score-bar__svg">
            <circle
              style={{ stroke: scoreBarColor() }}
              cx={70 * size}
              cy={70 * size}
              r={60 * size}
              className="score-bar__bar"
              ref={scoreBar}
            />
          </svg>
        </div>
        <CountUp
          className="score-demo__score-precentage"
          delay={0.3}
          end={percentage}
          suffix={"%"}
          style={{ color: scoreBarColor() }}
        />
      </div>
      {showReaction ? (
        <div className="score-bar-reaction">:: {scoreReactionText()} ::</div>
      ) : null}
    </div>
  )
}

export default ResultScoreDemo
