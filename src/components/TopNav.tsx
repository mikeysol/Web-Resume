import { useState } from 'react'
import Sidebar from './Sidebar'

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="top-nav">
      <div className="nav-header">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="nav-brand" href="/">
          WebResume
        </a>
      </div>
      {menuOpen && (
        <div className="mobile-dropdown">
          <Sidebar />
        </div>
      )}
    </nav>
  )
}
