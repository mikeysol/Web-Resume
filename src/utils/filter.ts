import type { Perspective } from '../types'

export function matchesQuery(text: string, query: string): boolean {
  if (!query) return true
  return text.toLowerCase().includes(query.toLowerCase())
}

export function matchesPerspective(
  type: Record<string, boolean> | undefined,
  perspective: Perspective,
): boolean {
  if (perspective === 'all') return true
  if (!type) return false
  return type[perspective] === true
}
