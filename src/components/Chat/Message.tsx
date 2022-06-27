import { UserCircle } from "phosphor-react"

interface MessageProps {
  userName: string
  timeAgo: string
  message?: string
}

export default function Message({
    userName,
    timeAgo = "one week ago",
    message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati in, cum nisi eligendi reiciendis eos libero tempore, error quisquam nihil temporibus consectetur iusto! Vel odit consequuntur provident reprehenderit minus quibusdam?"
  }: MessageProps) {
  return (
    <div className="flex flex-col justify-center gap-1 p-4 w-full h-max">

      <div className="flex items-center gap-2 w-max h-max">
        <UserCircle size={60} weight="bold" className="cursor-pointer" />
        <span
          className="
            text-gray-200 font-bold tracking-wide underline underline-offset-1 decoration-gray-300 cursor-pointer
          "
        >
          {userName}
        </span>
        <span className="text-gray-400">
          {timeAgo}
        </span>
      </div>

      <div className="ml-44">
        <span className="text-gray-400">
          {message}
        </span>
      </div>

    </div>
  )
}
