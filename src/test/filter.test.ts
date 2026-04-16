import { describe, it, expect } from 'vitest'
import { matchesQuery, matchesPerspective } from '../utils/filter'

describe('matchesQuery', () => {
  it('returns true when query is empty', () => {
    expect(matchesQuery('anything', '')).toBe(true)
  })

  it('returns true when text contains query (case-insensitive)', () => {
    expect(matchesQuery('Java Spring MVC', 'spring')).toBe(true)
  })

  it('returns false when text does not contain query', () => {
    expect(matchesQuery('Java Spring MVC', 'python')).toBe(false)
  })
})

describe('matchesPerspective', () => {
  it('returns true for "all" perspective', () => {
    expect(matchesPerspective({ it: true }, 'all')).toBe(true)
  })

  it('returns true when type has the perspective key', () => {
    expect(matchesPerspective({ web: true, it: true }, 'web')).toBe(true)
  })

  it('returns false when type does not have the perspective key', () => {
    expect(matchesPerspective({ web: true }, 'it')).toBe(false)
  })

  it('returns false when type is undefined', () => {
    expect(matchesPerspective(undefined, 'web')).toBe(false)
  })
})
