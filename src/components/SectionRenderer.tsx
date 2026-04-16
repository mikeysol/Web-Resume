import type { ResumeSection } from '../types'
import IntroSection from './sections/IntroSection'
import SummarySection from './sections/SummarySection'
import SkillsSection from './sections/SkillsSection'
import EmploymentSection from './sections/EmploymentSection'
import EducationSection from './sections/EducationSection'
import ProjectsSection from './sections/ProjectsSection'

interface Props {
  section: ResumeSection
}

export default function SectionRenderer({ section }: Props) {
  switch (section.sectId) {
    case 'intro':
      return <IntroSection section={section} />
    case 'summary':
      return <SummarySection section={section} />
    case 'skills':
      return <SkillsSection section={section} />
    case 'employment':
      return <EmploymentSection section={section} />
    case 'education':
      return <EducationSection section={section} />
    case 'projects':
      return <ProjectsSection section={section} />
  }
}
