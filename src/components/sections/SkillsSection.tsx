import type { SkillsSection as SkillsSectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { matchesQuery, matchesPerspective } from '../../utils/filter'

interface Props {
  section: SkillsSectionType
}

export default function SkillsSection({ section }: Props) {
  const { query, perspective } = useResume()

  const filtered = section.list.filter(
    (skill) => matchesQuery(skill.val, query) && matchesPerspective(skill.type, perspective),
  )

  if (filtered.length === 0) return null

  return (
    <div id="skills" className="section-card">
      <h4>
        <span className="section-label">Technical Skills</span>
      </h4>
      <ul>
        {filtered.map((skill) => (
          <li key={skill.val} className="info-listing">
            <p>{skill.val}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
