import type { SummarySection as SummarySectionType } from '../../types'
import { useResume } from '../../context/ResumeContext'
import { highlightText } from '../../utils/highlight'

interface Props {
  section: SummarySectionType
}

export default function SummarySection({ section }: Props) {
  const { keywords } = useResume()

  return (
    <div id="summary" className="section-card">
      <div className="center">
        <p>
          <b>{section.title}</b>
        </p>
      </div>
      <p className="center">{highlightText(section.description, keywords)}</p>
    </div>
  )
}
