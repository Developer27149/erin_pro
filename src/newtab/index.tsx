import Wallpaper from "./components/Wallpaper"

import "~style.css"

export default function () {
  return (
    <>
      <Wallpaper />
      <div className="text-white bg-gray-400/30 fixed inset-0 w-screen h-screen z-10">
        123
      </div>
    </>
  )
}
