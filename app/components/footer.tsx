export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[rgba(255,255,255,0.1)] p-4 text-sm text-gray-500">
      <div>© Kaspersky 2024</div>
      <div className="flex gap-4">
        <button className="hover:text-white">Privacy Policy</button>
        <button className="hover:text-white">Terms of use</button>
        <button className="hover:text-white">Cookies</button>
      </div>
    </footer>
  )
}

