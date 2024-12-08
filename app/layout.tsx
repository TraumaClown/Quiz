import type { Metadata } from "next"
import AppProviders from "@/app/_src/providers/AppProviders"
import "./_src/css/globals.css"

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quiz Application",
}

const RootLayout = ({
  children,
  sideNav,
}: {
  children: React.ReactNode
  sideNav: React.ReactNode
}) => {
  return (
    <html lang="en">
      <AppProviders>
        <body className="flex bg-gray-800 h-screen relative">
          {sideNav}
          {children}
        </body>
      </AppProviders>
    </html>
  )
}

export default RootLayout
