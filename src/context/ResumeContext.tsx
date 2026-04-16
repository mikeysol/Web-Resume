import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { ResumeSection, Perspective } from '../types'
import resumeData from '../data/resume.json'

const DEFAULT_KEYWORDS =
  'java,html5,angularjs,c\\+\\+,python,sql,android,javascript,front-end,back-end,agile,bi,unit tests'

const WELCOME_HTML =
  'Hi, I am <b>Michael Barnes</b> and this is a small demo in <b>React</b> that turns a standard resume' +
  ' into something more fun. <br/> <br/>' +
  '<ul><li>You can <b>filter</b> out sections via the search bar</li>' +
  '<li><b>Reorder</b> the sections via the Section View panel</li>' +
  '<li>At the top of page <b>navigate to different perspectives</b> such as Web or all Software Engineering.</li>' +
  '<li><b>Toggle colored Buzz Words</b> on/off to help scan for desired skills</li></ul>' +
  'I will be adding features over time. Check out the source code on my gitHub.<br/>' +
  "If you're <b>hiring</b> then connect with me on LinkedIn or send me an email.<br/>" +
  'Thanks and enjoy!'

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
}

const ResumeContext = createContext<ResumeContextValue | null>(null)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const originalSections = resumeData[0]!.sections as ResumeSection[]
  const [sections, setSections] = useState<ResumeSection[]>(originalSections)
  const [query, setQuery] = useState('')
  const [keywords, setKeywords] = useState(DEFAULT_KEYWORDS)
  const [perspective, setPerspective] = useState<Perspective>('all')
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleKeywords = useCallback(() => {
    setKeywords((prev) => (prev === '' ? DEFAULT_KEYWORDS : ''))
  }, [])

  const resetSections = useCallback(() => {
    setSections([...originalSections])
    setQuery('')
  }, [originalSections])

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
