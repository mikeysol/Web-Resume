import React from 'react'

export function highlightText(text: string, keywords: string): React.ReactNode {
  if (!keywords || keywords === '') {
    return text
  }

  const tokens = keywords
    .replace(/,$/g, '')
    .split(',')
    .map((kw) => kw.trim())
    .filter(Boolean)
    .map((kw) => `\\b${kw}\\b`)

  if (tokens.length === 0) return text

  const regex = new RegExp(`(${tokens.join('|')})`, 'gmi')
  const parts = text.split(regex)

  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="keyword-highlight">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  )
}
