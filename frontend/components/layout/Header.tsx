"use client"

import { useState } from "react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { useActiveSection } from "@/hooks/useActiveSection"
import { navLinks } from "@/lib/content"
import { Icon } from "@/components/ui/Icon"

const sectionIds = ["services", "industries", "portfolio", "process", "contact"]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  const isActive = (href: string) => {
    const id = href.replace("#", "")
    return activeSection === id
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          aria-label="tuply home"
        >
          tuply.
        </a>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-foreground after:transition-all after:duration-300 ${
                isActive(link.href)
                  ? "text-foreground after:w-full"
                  : "text-muted hover:text-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:bg-surface transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <Icon name={theme === "light" ? "moon" : "sun"} className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold bg-foreground text-background rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border text-muted"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <Icon name={theme === "light" ? "moon" : "sun"} className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-1.5 w-6">
              <span className={`block h-px bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-base font-medium transition-colors ${
                isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-3 text-sm font-semibold bg-foreground text-background rounded-xl text-center"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  )
}
