import Header from "./Header"
import Message from "./Message"

export default function Chat() {
  return (
    <div className="bg-gray-700 w-full h-screen flex flex-col">
      <Header />

      <div className="overflow-auto scroll-smooth">
        <Message userName="Zaiko Xander" timeAgo="one week ago" />
        <Message userName="King Haate" timeAgo="today" />
        <Message userName="<Chat Mod />" timeAgo="today" />
        <Message userName="King Haate" timeAgo="today" />
        <Message userName="<Chat Mod />" timeAgo="today" />
        <Message userName="King Haate" timeAgo="today" />
        <Message userName="<Chat Mod />" timeAgo="today" />
        <Message userName="King Haate" timeAgo="today" />
        <Message userName="<Chat Mod />" timeAgo="today" />
      </div>
    </div>
  )
}
