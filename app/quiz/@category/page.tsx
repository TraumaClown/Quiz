"use client"

import { useAppDispatch } from "@/app/_src/redux/hooks"
import { mapActions } from "@/app/_src/redux/features/quiz/map/mapSlice"
import { settingsActions } from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import categories from "@/app/quiz/_src/db/categories.json"
import "./category.css"

const Category: React.FC = () => {
  const dispatch = useAppDispatch()

  const selectCategory = (key: string) => {
    dispatch(settingsActions.setCategory(key))
    dispatch(mapActions.change("settings"))
  }

  const categoryItems = categories.map((category) => (
    <div
      key={category.id}
      className="category__item w-48 h-28 transition-colors flex items-center justify-center px-3 text-white cursor-pointer text-center text-lg"
      onClick={() => selectCategory(category.id)}
    >
      {category.value}
    </div>
  ))

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-white text-center py-5 border-b-2 border-opacity-35 border-white sticky top-0 bg-gray-800 text-xl">
        :: Select Category ::
      </h2>
      <div className="category grid justify-center">{categoryItems}</div>
    </div>
  )
}

export default Category
