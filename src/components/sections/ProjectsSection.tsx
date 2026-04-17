import type { ProjectsSection as ProjectsSectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { matchesQuery } from '../../utils/filter'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: ProjectsSectionType
}

export default function ProjectsSection({ section }: Props) {
  const { query, keywords } = useResume()

  const filtered = section['personal projects'].filter((p) => matchesQuery(p, query))

  if (filtered.length === 0) return null

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="section-label">Personal Projects</div>
      </div>
      <div className="section-content">
        <ul className="projects-list">
          {filtered.map((project, i) => (
            <li key={i} className="project-item">
              {highlightText(project, keywords)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
