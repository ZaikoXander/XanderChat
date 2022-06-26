import Header from "./Header"
import Category from "./Category"
import Channel from "./Channel"

export default function ServerChannels() {
  return (
    <div className="bg-gray-800 w-64 h-screen flex flex-col">
      <Header />
      
      <div className="pl-4 pr-2 text-gray-500">
        <Category text="Development">

          <Channel text="TailwindCSS" />
          <Channel text="Typescript" />
          <Channel text="React" />
        </Category>
        <Category text="Animes">
          <Channel text="Luffy" />
          <Channel text="Eren Jaeger" />
        </Category>
      </div>

    </div>
  )
}
