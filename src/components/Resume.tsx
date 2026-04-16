import { useResume } from '../context/ResumeContext'
import TopNav from './TopNav'
import Sidebar from './Sidebar'
import WelcomeModal from './WelcomeModal'
import SectionRenderer from './SectionRenderer'

export default function Resume() {
  const { sections, showWelcome, setShowWelcome } = useResume()

  return (
    <div className="container-fluid sections">
      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      <TopNav />
      <div className="row-view">
        <div className="sidebar-col">
          <Sidebar />
        </div>
        <div className="content-col">
          <div className="perspective-nav-wrapper">
            <PerspectiveNav />
          </div>
          <br />
          <ul className="list-unstyled">
            {sections.map((sect) => (
              <li key={sect.sectId} className="info-listing-wrapper">
                <SectionRenderer section={sect} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PerspectiveNav() {
  const { perspective, setPerspective } = useResume()

  const navItems: { name: string; value: 'all' | 'it' | 'engineering' | 'web' }[] = [
    { name: 'All', value: 'all' },
    { name: 'IT', value: 'it' },
    { name: 'Engineering', value: 'engineering' },
    { name: 'Web', value: 'web' },
  ]

  return (
    <ul className="nav-pills">
      {navItems.map((item) => (
        <li key={item.value} className={perspective === item.value ? 'active' : ''}>
          <button onClick={() => setPerspective(item.value)}>
            <b>{item.name}</b>
          </button>
        </li>
      ))}
    </ul>
  )
}
