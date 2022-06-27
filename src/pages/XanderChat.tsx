import Chat from "../components/Chat"
import ServerChannels from "../components/ServerChannels"
import SideBar from "../components/SideBar"

export default function XanderChat() {
  return (
    <div className="flex">
      <SideBar />
      <ServerChannels />
      <Chat />
    </div>
  )
}
