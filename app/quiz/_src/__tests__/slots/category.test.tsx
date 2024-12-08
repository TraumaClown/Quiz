import "@testing-library/jest-dom"
import { render, screen } from "@/app/_src/test-utils"
import Category from "@/app/quiz/@category/page"
import categories from "@/app/quiz/_src/db/categories.json"

describe("Category", () => {
  test("renders a heading", () => {
    render(<Category />)
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Select Category/,
    })
    expect(heading).toBeInTheDocument()
  })

  test("renders a list", () => {
    render(<Category />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of category elements", () => {
    render(<Category />)
    const listItemElements = screen.getAllByRole("listitem")
    expect(listItemElements).toHaveLength(categories.length)
  })
})
