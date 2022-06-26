import { ReactNode } from "react"
import { CaretDown } from "phosphor-react"

interface CategoryProps {
  text: string
  children: ReactNode
}

export default function Category({text, children}: CategoryProps) {
  return (
    <>
      <div className="flex items-center gap-2 pt-4 pb-2">
        <CaretDown size={20} />
        <h2>{text}</h2>
      </div>
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </>
  )
}
