import { HourglassSimpleMedium, Lightning, Plus, Skull } from "phosphor-react"

import SideBarIcon from "./SideBarIcon"

export default function SideBar() {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-gray-900 text-white shadow-lg">

      <SideBarIcon text="Home" icon={<HourglassSimpleMedium size={28} weight="fill" />} />
      <span className="bg-gray-700 w-8 h-0.5 rounded-full"></span>
      <SideBarIcon icon={<Plus size={28} weight="fill" />} />
      <SideBarIcon icon={<Lightning size={28} weight="fill" />} />
      <SideBarIcon icon={<Skull size={28} weight="fill" />} />
    </div>
  )
}
