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
    <div id="projects" className="section-card">
      <h4>
        <span className="section-label">Personal Projects</span>
      </h4>
      <ul>
        {filtered.map((project, i) => (
          <li key={i} className="info-listing">
            <p>{highlightText(project, keywords)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
