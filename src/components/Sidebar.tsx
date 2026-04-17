import { useResume } from '../context/ResumeContext'
import SortableSectionList from './SortableSectionList'

interface Props {
  onSectionClick?: () => void
}

export default function Sidebar({ onSectionClick }: Props) {
  const { query, setQuery, toggleKeywords, resetSections } = useResume()

  return (
    <div>
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search resume..."
        aria-label="Search resume"
      />
      <div className="panel">
        <div className="panel-heading">Section View</div>
        <div className="panel-body">
          Drag to reorder sections. Toggle buzz words to highlight key skills.
        </div>
        <div className="sidebar-actions">
          <button onClick={toggleKeywords} className="btn-buzz" type="button">
            Buzz Words
          </button>
          <button onClick={resetSections} className="btn-reset" type="button">
            Reset
          </button>
        </div>
        <SortableSectionList onSectionClick={onSectionClick} />
      </div>
    </div>
  )
}
