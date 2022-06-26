import ServerChannels from "../components/ServerChannels"
import SideBar from "../components/SideBar"

export function Chat() {
  return (
    <div className="flex">
      <SideBar />
      <ServerChannels />
    </div>
  )
}
