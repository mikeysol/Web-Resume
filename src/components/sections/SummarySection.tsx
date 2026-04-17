import type { SummarySection as SummarySectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: SummarySectionType
}

export default function SummarySection({ section }: Props) {
  const { keywords } = useResume()

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="section-label">Summary</div>
        <p className="summary-title">{section.title}</p>
      </div>
      <div className="section-content">
        <p className="summary-desc">{highlightText(section.description, keywords)}</p>
      </div>
    </div>
  )
}
