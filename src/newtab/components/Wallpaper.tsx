import BgImg from "data-base64:assets/bg.jpeg"

export default function Wallpaper() {
  return (
    <div className="fixed inset-0">
      <img src={BgImg} alt="bg" className="w-screen h-screen object-cover" />
    </div>
  )
}
