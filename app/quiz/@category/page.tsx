"use client"

import { useAppDispatch } from "@/redux/hooks"
import { quizMapActions } from "@/redux/features/quizMap/quizMapSlice"
import { quizSettingsActions as quizSettings } from "@/redux/features/quizSettings/quizSettingsSlice"
import categories from "@/app/category.json"
import "./styles.css"

export default function Category() {
  const dispatch = useAppDispatch()

  const selectCategory = (key: string) => {
    //after clicking on a category item, update the data in store and set the [isCategorySet] to [true], which will trigger the next component to load.
    dispatch(quizSettings.setCategory(key))
    // dispatch(quizMapActions.change("config"))
  }

  const categoryItems = categories.map((category) => (
    <div
      key={category.id}
      className="w-48 h-28 bg-gray-400 hover:shadow-none transition shadow-md  shadow-white rounded-md flex items-center justify-center px-3"
      onClick={() => selectCategory(category.id)}
    >
      {category.value}
    </div>
  ))

  return <div className="category">{categoryItems}</div>
}
