import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useResume } from '../context/ResumeContext'
import Sidebar from './Sidebar'

export default function TopNav() {
  const { darkMode, toggleDarkMode } = useResume()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="top-nav">
      <NavLink className="nav-brand" to="/">
        MB
      </NavLink>

      <div className="nav-links">
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/"
          end
        >
          Resume
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          to="/projects"
        >
          Projects
        </NavLink>
      </div>

      <div className="nav-actions">
        <button className="btn-icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-nav-links">
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to="/"
              end
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </div>
          <Sidebar onSectionClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  )
}
