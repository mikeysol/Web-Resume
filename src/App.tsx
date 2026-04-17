import { Routes, Route } from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext'
import { useResume } from './context/ResumeContext'
import TopNav from './components/TopNav'
import WelcomeModal from './components/WelcomeModal'
import Resume from './components/Resume'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

function AppContent() {
  const { showWelcome, setShowWelcome } = useResume()

  return (
    <>
      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      <TopNav />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  )
}
