import type { EducationSection as EducationSectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { matchesQuery } from '../../utils/filter'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: EducationSectionType
}

export default function EducationSection({ section }: Props) {
  const { query, keywords } = useResume()

  const filtered = section.education.filter((entry) => {
    const school = entry.school
    const allText = [
      school['main school/university name'],
      school['sub school/college name'],
      school.location,
      ...school.degree.map((d) => d.name),
      ...school['school projects'],
    ].join(' ')
    return matchesQuery(allText, query)
  })

  if (filtered.length === 0) return null

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="section-label">Education</div>
      </div>
      <div className="section-content">
        {filtered.map((entry) => {
          const school = entry.school
          const filteredProjects = school['school projects'].filter((p) => matchesQuery(p, query))
          const degree = school.degree[0]

          return (
            <div key={school['main school/university name']} className="school-item">
              <div className="school-logo">
                <img
                  src={school.img}
                  alt={school['main school/university name']}
                  style={{ background: 'white' }}
                />
              </div>
              <div className="school-details">
                <div className="school-name">{school['main school/university name']}</div>
                <div className="school-sub">{school['sub school/college name']}</div>
                <div className="school-location">{school.location}</div>
                {degree && (
                  <div className="degree-row">
                    <span className="degree-name">{degree.name}</span>
                    <span className="degree-date">{degree['date earned']}</span>
                  </div>
                )}
                {filteredProjects.length > 0 && (
                  <>
                    <div className="school-projects-label">Notable Projects</div>
                    <ul className="school-projects-list">
                      {filteredProjects.map((project, i) => (
                        <li key={i}>{highlightText(project, keywords)}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
