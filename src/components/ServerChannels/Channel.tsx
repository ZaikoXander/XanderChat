import { Hash } from "phosphor-react"

interface ChannelProps {
  text: string
}

export default function Channel({ text }: ChannelProps) {
  return (
    <div className="pl-4 pr-2 flex items-center gap-1">
      <Hash size={18} />
      <span>{text}</span>
    </div>
  )
}
