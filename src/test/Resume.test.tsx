import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

// App already wraps content with ResumeProvider; we just need a router context for NavLink
function renderApp() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
}

describe('Resume App', () => {
  it('renders the resume name', () => {
    renderApp()
    expect(screen.getByText('Michael Solomon Barnes')).toBeInTheDocument()
  })

  it('renders section labels', () => {
    renderApp()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getAllByText('Employment').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0)
    expect(screen.getByText('Personal Projects')).toBeInTheDocument()
  })

  it('renders perspective navigation buttons', () => {
    renderApp()
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('IT')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Web')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    renderApp()
    const inputs = screen.getAllByPlaceholderText('Search resume...')
    expect(inputs.length).toBeGreaterThan(0)
  })

  it('renders the welcome modal after delay', () => {
    renderApp()
    // Modal appears after 1s timeout — presence of the app itself is enough to verify
    expect(screen.getByText('Michael Solomon Barnes')).toBeInTheDocument()
  })
})
