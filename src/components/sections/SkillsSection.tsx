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
    <div className="section-card">
      <div className="section-header">
        <div className="section-label">Technical Skills</div>
      </div>
      <div className="skills-grid">
        {filtered.map((skill) => (
          <span key={skill.val} className="skill-chip">
            {skill.val}
          </span>
        ))}
      </div>
    </div>
  )
}
