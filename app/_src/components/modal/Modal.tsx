import { useAppDispatch } from "@/app/_src/redux/hooks"
import { settingsActions } from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import { mapActions } from "@/app/_src/redux/features/quiz/map/mapSlice"
import type { ModalProps } from "@/app/_src/types/components"
import { statsActions } from "@/app/_src/redux/features/quiz/stats/statsSlice"
import "./modal.css"

const Modal: React.FC<ModalProps> = ({ reason, desciption }) => {
  const dispatch = useAppDispatch()

  const GoBackButtonClickHandler = () => {
    dispatch(statsActions.reset())
    dispatch(settingsActions.reset())
    dispatch(mapActions.change("category"))
  }

  const defaultButtonClickHandler = () => {
    dispatch(statsActions.reset())
    dispatch(settingsActions.setToDefault())
    dispatch(mapActions.change("session"))
  }

  const MESSAGE_FOR_SETTINGS_ARE_NOT_SET: JSX.Element = (
    <p>
      Your Quiz settings are not set.
      <br />
      <br />
      Please go back and choose your settings or click on default button for
      applying the default settings.
    </p>
  )

  const MESSAGE_FOR_NO_QUESTIONS_IN_DATABASE: JSX.Element = (
    <p>
      Unfortunately, the settings you chose for your quiz did not yield any
      result.
      <br />
      <br />
      Please try a lower number of questions or change the difficulty and try
      again :3
    </p>
  )

  const MESSAGE_FOR_FAILED_FETCH: JSX.Element = (
    <p>
      {desciption}.
      <br />
      Please check your internet connection.
    </p>
  )

  const HORROR: JSX.Element = <p>An error which I didnt catch :(</p>

  const message = (): JSX.Element => {
    switch (reason) {
      case "SETTINGS_ARE_NOT_SET":
        return MESSAGE_FOR_SETTINGS_ARE_NOT_SET
      case "NO_QUESTIONS_IN_DATABASE":
        return MESSAGE_FOR_NO_QUESTIONS_IN_DATABASE
      case "FETCH_ERROR":
        return MESSAGE_FOR_FAILED_FETCH
      default:
        return HORROR
    }
  }

  return (
    <div className="modal">
      <h4 className="text-lg">{reason}</h4>
      <div className="modal__description">
        <span>{message()}</span>
      </div>
      <div className="modal__btns">
        <button onClick={GoBackButtonClickHandler}>Go Back</button>
        {reason !== "FETCH_ERROR" && (
          <button onClick={defaultButtonClickHandler}>Default</button>
        )}
      </div>
    </div>
  )
}

export default Modal
