import { ReactNode, useState } from "react"
import { CaretDown, CaretUp } from "phosphor-react"

interface CategoryProps {
  name: string
  children: ReactNode
}

export default function Category({name, children}: CategoryProps) {
  const [isCategoryOpened, setIsCategoryOpened] = useState<boolean>(true)

  function handleCategoryOpenClose() {
    setIsCategoryOpened(!isCategoryOpened)
  }

  return (
    <>
      <div
        className="flex items-center gap-2 pt-4 pb-2 cursor-pointer"
        onClick={handleCategoryOpenClose}
      >
        {isCategoryOpened ? <CaretDown size={20} /> : <CaretUp size={20} />}
        <h2>{name}</h2>
      </div>
      <div className={`flex flex-col gap-1 ${isCategoryOpened ? "block" : "hidden"}`}>
        {children}
      </div>
    </>
  )
}
