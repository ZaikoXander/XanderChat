import { ReactNode } from "react"

interface SideBarIconProps {
  icon: ReactNode
  text?: string
}

export default function SideBarIcon({ icon, text = "tooltip 💡" }: SideBarIconProps) {
  return (
    <div className="sidebar-icon cursor-pointer group">
      {icon}

      <span className="sidebar-tooltip group-hover:visible">
        {text}
      </span>
    </div>
  )
}
