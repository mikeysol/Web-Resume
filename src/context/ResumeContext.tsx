import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { ResumeSection, Perspective } from '../types'
import resumeData from '../data/resume.json'

const DEFAULT_KEYWORDS =
  'typescript,java,javascript,python,react,redux,springboot,aws,kubernetes,docker,langgraph,langchain,graphql,rest,sql,full stack,ai,llm'

const WELCOME_HTML =
  'Hi, I am <b>Michael Barnes</b> — Full Stack Software Engineer based in San Francisco.' +
  '<br/><br/>' +
  'This interactive resume lets you explore my experience in a few ways:<br/>' +
  '<ul>' +
  '<li><b>Filter</b> sections via the search bar on the left</li>' +
  '<li><b>Reorder</b> sections by dragging items in the Section View panel</li>' +
  '<li><b>Perspective tabs</b> at the top filter by role type (IT, Engineering, Web)</li>' +
  '<li><b>Buzz Words</b> toggles keyword highlights to help scan for skills</li>' +
  '</ul>' +
  'Check out the <b>About</b> and <b>Projects</b> pages for more.<br/>' +
  "If you're <b>hiring</b>, connect with me on LinkedIn or send an email. Thanks!"

interface ResumeContextValue {
  sections: ResumeSection[]
  setSections: (sections: ResumeSection[]) => void
  query: string
  setQuery: (query: string) => void
  keywords: string
  toggleKeywords: () => void
  perspective: Perspective
  setPerspective: (p: Perspective) => void
  resetSections: () => void
  welcomeHtml: string
  showWelcome: boolean
  setShowWelcome: (show: boolean) => void
  darkMode: boolean
  toggleDarkMode: () => void
}

const ResumeContext = createContext<ResumeContextValue | null>(null)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const originalSections = resumeData[0]!.sections as ResumeSection[]
  const [sections, setSections] = useState<ResumeSection[]>(originalSections)
  const [query, setQuery] = useState('')
  const [keywords, setKeywords] = useState(DEFAULT_KEYWORDS)
  const [perspective, setPerspective] = useState<Perspective>('all')
  const [showWelcome, setShowWelcome] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  const toggleKeywords = useCallback(() => {
    setKeywords((prev) => (prev === '' ? DEFAULT_KEYWORDS : ''))
  }, [])

  const resetSections = useCallback(() => {
    setSections([...originalSections])
    setQuery('')
  }, [originalSections])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev)
  }, [])

  return (
    <ResumeContext.Provider
      value={{
        sections,
        setSections,
        query,
        setQuery,
        keywords,
        toggleKeywords,
        perspective,
        setPerspective,
        resetSections,
        welcomeHtml: WELCOME_HTML,
        showWelcome,
        setShowWelcome,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const ctx = useContext(ResumeContext)
  if (!ctx) throw new Error('useResume must be used within ResumeProvider')
  return ctx
}
