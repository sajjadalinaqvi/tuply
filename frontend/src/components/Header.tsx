import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-ink text-lg tracking-tight">
          <span aria-label="tuply">tuply.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-graphite">
          {["Services", "Industries", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "text-ink font-medium" : "hover:text-ink transition-colors"
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-ink text-paper rounded-md hover:bg-graphite transition-colors"
        >
          Start a project
        </Link>

        <button
          className="md:hidden p-2 text-graphite"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-paper px-6 py-4 flex flex-col gap-4 text-sm">
          {["Services", "Industries", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-graphite hover:text-ink transition-colors"
            >
              {item}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-ink text-paper rounded-md"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  )
}
