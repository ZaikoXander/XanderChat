import { Bell, Hash, MagnifyingGlass, PersonSimpleRun, Sun } from "phosphor-react"

export default function Header() {
  return (
    <>
      <header className="flex justify-between w-full h-max pl-4 py-4 pr-2">
        <h1 className="flex items-center gap-3 text-lg font-bold tracking-wider">
          <Hash size={20} weight="bold" className="text-gray-500" />
          <span className="text-zinc-200">TailwindCSS</span>
        </h1>

        <div className="flex gap-6">
          <div className="flex gap-4">
            <Sun size={24} weight="fill" className="text-gray-500 hover:text-rose-600 transition-colors duration-500" />
            <div className="flex items-center bg-gray-600 rounded-lg overflow-hidden">
              <input type="text" name="" id="" className="bg-gray-600 outline-none mx-2" />
              <MagnifyingGlass size={20} weight="bold" className="mr-1.5 text-gray-500" />

            </div>

            <Bell size={24} weight="bold" className="text-gray-500 hover:text-rose-600 transition-colors duration-500" />
          </div>

          <PersonSimpleRun size={24} weight="bold" className="text-gray-500 hover:text-rose-600 transition-colors duration-500" />
        </div>

      </header>
      <span className="w-full h-px shadow-gray-900 shadow-sm"></span>
    </>
  )
}
