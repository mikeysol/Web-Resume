import { useState } from 'react'
import type { EmploymentSection as EmploymentSectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { matchesQuery, matchesPerspective } from '../../utils/filter'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: EmploymentSectionType
}

function CompanyLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const initial = name.charAt(0).toUpperCase()

  if (failed || !src) {
    return (
      <div
        className="job-logo"
        style={{
          background: 'var(--accent-light)',
          color: 'var(--accent)',
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {initial}
      </div>
    )
  }

  return (
    <div className="job-logo">
      <img src={src} alt={name} onError={() => setFailed(true)} />
    </div>
  )
}

export default function EmploymentSection({ section }: Props) {
  const { query, perspective, keywords } = useResume()

  const jobs = section['employment history'].filter((job) => {
    if (!matchesPerspective(job.type, perspective)) return false
    const jobText = [
      job['company name'],
      job.position,
      job.location,
      job.period,
      ...job.description,
    ].join(' ')
    return matchesQuery(jobText, query)
  })

  if (jobs.length === 0) return null

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="section-label">Employment</div>
      </div>
      <div className="section-content">
        {jobs.map((job) => {
          const filteredDesc = job.description.filter((d) => matchesQuery(d, query))
          return (
            <div key={`${job['company name']}-${job.period}`} className="job-item">
              <CompanyLogo src={job.img} name={job['company name']} />
              <div className="job-details">
                <div className="job-header">
                  <span className="job-company">{job['company name']}</span>
                  <span className="job-period">{job.period}</span>
                </div>
                <div className="job-meta">
                  <span className="job-position">{job.position}</span>
                  <span className="job-location">{job.location}</span>
                </div>
                <ul className="job-bullets">
                  {filteredDesc.map((text, i) => (
                    <li key={i}>{highlightText(text, keywords)}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
