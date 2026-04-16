import { useResume } from '../context/ResumeContext'
import SortableSectionList from './SortableSectionList'

export default function Sidebar() {
  const { query, setQuery, toggleKeywords, resetSections } = useResume()

  return (
    <div>
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <br />
      <div className="panel">
        <div className="panel-heading">Section View</div>
        <div className="panel-body">
          <p>
            <i>
              Reorder sections in the resume by dragging list items here in the panel. Also click
              Buzz Words to toggle orange colored words.
            </i>
          </p>
        </div>
        <div className="center">
          <button onClick={toggleKeywords} className="btn-buzz" type="button">
            Buzz Words
          </button>
        </div>
        <SortableSectionList />
        <div className="center">
          <button onClick={resetSections} className="btn-reset" type="button">
            Reset
          </button>
        </div>
      </div>
      <br />
    </div>
  )
}
