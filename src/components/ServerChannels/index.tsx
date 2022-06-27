import Header from "./Header"
import Category from "./Category"
import Channel from "./Channel"

export default function ServerChannels() {
  return (
    <div className="bg-gray-800 w-64 h-screen flex flex-col">
      <Header />
      
      <div className="pl-4 pr-2 text-gray-500">
        <Category name="Development">

          <Channel name="TailwindCSS" />
          <Channel name="Typescript" />
          <Channel name="React" />
        </Category>
        <Category name="Animes">
          <Channel name="Luffy" />
          <Channel name="Eren Jaeger" />
        </Category>
      </div>

    </div>
  )
}
