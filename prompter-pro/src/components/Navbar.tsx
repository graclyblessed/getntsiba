import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl font-black tracking-tight text-gradient">
            PrompterPro
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#teleprompter" className="hover:text-white transition-colors">Teleprompter</a></li>
          <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#docs" className="hover:text-white transition-colors">Docs</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            Get started free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-3">
          <a href="#features" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Features</a>
          <a href="#teleprompter" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Teleprompter</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#docs" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Docs</a>
          <a href="#" className="rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white text-center transition-colors">
            Get started free
          </a>
        </div>
      )}
    </header>
  )
}
