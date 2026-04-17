import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  githubUrl?: string
  status: 'completed' | 'in-progress' | 'concept'
}

const projects: Project[] = [
  {
    title: 'AI Finance Dashboard',
    description:
      'Multi-agent LangGraph application for financial analysis, forecasting, and natural language chat built at Intuit for the AI4Finance team. Helps finance analysts gain insights and automate reporting workflows.',
    tags: ['Python', 'LangGraph', 'LangChain', 'React', 'TypeScript', 'AWS'],
    status: 'in-progress',
  },
  {
    title: 'Interactive Web Resume',
    description:
      'This site — a React + TypeScript interactive resume with search filtering, drag-and-drop section reordering, perspective tabs, keyword highlighting, dark mode, and multi-page routing.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Vite', 'React Router'],
    githubUrl: 'https://github.com/mikeysol',
    status: 'completed',
  },
  {
    title: 'BLE Bike Safety App',
    description:
      'Android application using Bluetooth Low Energy beacons to enhance cyclist safety, integrating with a smartwatch or mobile phone for real-time proximity alerts.',
    tags: ['Android', 'Bluetooth LE', 'Java', 'Wearables'],
    status: 'in-progress',
  },
  {
    title: 'Electronic Braille Display',
    description:
      'Senior capstone project at Syracuse University — designed and built a refreshable Braille display for visually impaired users, combining embedded firmware with custom hardware.',
    tags: ['Embedded', 'C', 'Hardware', 'Accessibility', 'FPGA'],
    status: 'completed',
  },
  {
    title: 'Collaborative Music Platform',
    description:
      'Web platform for musicians to collaborate on projects in real time, leveraging the HTML5 Web Audio API for in-browser audio playback and multi-user editing.',
    tags: ['HTML5', 'Web Audio API', 'JavaScript', 'Real-time'],
    status: 'concept',
  },
]

const statusColors: Record<Project['status'], string> = {
  completed: '#22c55e',
  'in-progress': '#f59e0b',
  concept: '#94a3b8',
}

const statusLabels: Record<Project['status'], string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  concept: 'Concept',
}

export default function ProjectsPage() {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="page-hero">
        <span className="placeholder-badge">Portfolio</span>
        <h1>Projects</h1>
        <p>Professional work, side projects, and academic builds.</p>
      </div>

      <div className="project-cards-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 6,
              }}
            >
              <h3>{project.title}</h3>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: statusColors[project.status],
                  flexShrink: 0,
                  marginLeft: 8,
                }}
              >
                {statusLabels[project.status]}
              </span>
            </div>
            <p>{project.description}</p>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card-tag">
                  {tag}
                </span>
              ))}
            </div>
            {(project.githubUrl || project.url) && (
              <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 12,
                      color: 'var(--text-muted)',
                    }}
                  >
                    <FiGithub size={13} /> GitHub
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 12,
                      color: 'var(--text-muted)',
                    }}
                  >
                    <FiExternalLink size={13} /> Live
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
