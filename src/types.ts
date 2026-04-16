export interface SocialMedia {
  url: string
  icon: string
}

export interface IntroSection {
  sectId: 'intro'
  template: string
  name: string
  address: string
  website: string
  'social media': SocialMedia[]
  email: string
}

export interface SummarySection {
  sectId: 'summary'
  template: string
  title: string
  description: string
}

export interface Skill {
  val: string
  type: Record<string, boolean>
}

export interface SkillsSection {
  sectId: 'skills'
  template: string
  title: string
  list: Skill[]
}

export interface Job {
  img: string
  type: Record<string, boolean>
  'company name': string
  position: string
  location: string
  period: string
  description: string[]
}

export interface EmploymentSection {
  sectId: 'employment'
  template: string
  'employment history': Job[]
}

export interface School {
  img: string
  'main school/university name': string
  'sub school/college name': string
  location: string
  degree: { name: string; 'date earned': string }[]
  'school projects': string[]
}

export interface EducationEntry {
  school: School
}

export interface EducationSection {
  sectId: 'education'
  template: string
  education: EducationEntry[]
}

export interface ProjectsSection {
  sectId: 'projects'
  template: string
  'personal projects': string[]
}

export type ResumeSection =
  | IntroSection
  | SummarySection
  | SkillsSection
  | EmploymentSection
  | EducationSection
  | ProjectsSection

export type Perspective = 'all' | 'it' | 'engineering' | 'web'

export interface ResumeData {
  resumeId: string
  sections: ResumeSection[]
}
