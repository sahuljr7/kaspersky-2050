export function Navigation() {
  return (
    <nav className="flex items-center gap-8">
      <div className="flex rounded-full bg-[rgba(0,255,147,0.1)] p-1">
        <button className="rounded-full px-6 py-2 text-[#00FF94]">MAP</button>
        <button className="rounded-full px-6 py-2 text-gray-400">FEED</button>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white">ART</button>
        <button className="text-gray-400 hover:text-white">PREDICTIONS</button>
        <button className="text-gray-400 hover:text-white">FEEDBACK</button>
        <button className="text-gray-400 hover:text-white">ABOUT</button>
        <button className="text-gray-400 hover:text-white">EN</button>
        <button className="rounded-full bg-[#00FF94] px-6 py-2 text-black">
          SIGN IN
        </button>
      </div>
    </nav>
  )
}

