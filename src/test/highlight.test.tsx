import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { highlightText } from '../utils/highlight'

describe('highlightText', () => {
  it('returns plain text when keywords is empty', () => {
    const result = highlightText('Hello world', '')
    expect(result).toBe('Hello world')
  })

  it('highlights matching keywords', () => {
    const result = highlightText('Experience with Java and Python', 'java,python')
    const { container } = render(<p>{result}</p>)
    const highlights = container.querySelectorAll('.keyword-highlight')
    expect(highlights.length).toBe(2)
    expect(highlights[0]!.textContent).toBe('Java')
    expect(highlights[1]!.textContent).toBe('Python')
  })

  it('is case-insensitive', () => {
    const result = highlightText('JAVA is great', 'java')
    const { container } = render(<p>{result}</p>)
    const highlights = container.querySelectorAll('.keyword-highlight')
    expect(highlights.length).toBe(1)
  })
})
