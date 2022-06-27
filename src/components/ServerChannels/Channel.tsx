import { Hash } from "phosphor-react"

interface ChannelProps {
  name: string
}

export default function Channel({ name }: ChannelProps) {
  return (
    <div className="pl-4 pr-2 flex items-center gap-1 cursor-pointer">
      <Hash size={18} weight="bold" />
      <span>{name}</span>
    </div>
  )
}
