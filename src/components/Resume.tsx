import { motion } from 'framer-motion'
import { useResume } from '../context/ResumeContext'
import Sidebar from './Sidebar'
import SectionRenderer from './SectionRenderer'

export default function Resume() {
  const { sections } = useResume()

  return (
    <div className="app-layout">
      <aside className="sidebar-col">
        <Sidebar />
      </aside>
      <main className="content-col">
        <PerspectiveNav />
        <ul className="list-unstyled">
          {sections.map((sect, i) => (
            <motion.li
              key={sect.sectId}
              id={`section-${sect.sectId}`}
              className="info-listing-wrapper"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
            >
              <SectionRenderer section={sect} />
            </motion.li>
          ))}
        </ul>
      </main>
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
    <div className="perspective-nav">
      {navItems.map((item) => (
        <button
          key={item.value}
          className={`perspective-btn${perspective === item.value ? ' active' : ''}`}
          onClick={() => setPerspective(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
