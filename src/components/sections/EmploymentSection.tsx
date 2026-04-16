import type { EmploymentSection as EmploymentSectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { matchesQuery, matchesPerspective } from '../../utils/filter'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: EmploymentSectionType
}

export default function EmploymentSection({ section }: Props) {
  const { query, perspective, keywords } = useResume()

  const jobs = section['employment history'].filter((job) => {
    if (!matchesPerspective(job.type, perspective)) return false
    const jobText = [job['company name'], job.position, job.location, job.period, ...job.description].join(' ')
    return matchesQuery(jobText, query)
  })

  if (jobs.length === 0) return null

  return (
    <div id="employment" className="section-card">
      <h4>
        <span className="section-label">Employment</span>
      </h4>
      <ul className="list-unstyled">
        {jobs.map((job) => {
          const filteredDesc = job.description.filter((d) => matchesQuery(d, query))
          return (
            <li key={`${job['company name']}-${job.period}`} className="job-item">
              <div>
                <div className="logo">
                  <img src={job.img} height="84" width="210" alt={job['company name']} />
                </div>
                <br />
                <p>
                  <b>{job['company name']}</b>, {job.location}
                </p>
                <p className="job-period">
                  <b>{job.period}</b>
                </p>
                <div className="job-position">
                  <b>
                    <p>{job.position}</p>
                  </b>
                </div>
                <ul>
                  {filteredDesc.map((text, i) => (
                    <li key={i} className="info-listing">
                      <p>{highlightText(text, keywords)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
