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
    <div id="education" className="section-card">
      <h4>
        <span className="section-label">Education</span>
      </h4>
      <ul>
        {filtered.map((entry) => {
          const school = entry.school
          const filteredProjects = school['school projects'].filter((p) => matchesQuery(p, query))
          const degree = school.degree[0]

          return (
            <li key={school['main school/university name']} className="info-listing list-unstyled">
              <div className="logo">
                <img
                  src={school.img}
                  height="84"
                  width="210"
                  alt={school['main school/university name']}
                  style={{ background: 'white' }}
                />
              </div>
              <br />
              <p>
                <b>{school['main school/university name']}</b>,{' '}
                {school['sub school/college name']}, {school.location}
              </p>
              {degree && (
                <div>
                  <p>
                    <i>{degree.name}</i>
                  </p>
                  <div className="degree-date">
                    <p>
                      <b>{degree['date earned']}</b>
                    </p>
                  </div>
                </div>
              )}
              {filteredProjects.length > 0 && (
                <div>
                  <p>
                    <b>Notable College Projects</b>
                  </p>
                  <ul>
                    {filteredProjects.map((project, i) => (
                      <li key={i} className="info-listing">
                        <p>{highlightText(project, keywords)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
