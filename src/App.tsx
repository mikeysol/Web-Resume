import { ResumeProvider } from './context/ResumeContext'
import Resume from './components/Resume'

export default function App() {
  return (
    <ResumeProvider>
      <Resume />
    </ResumeProvider>
  )
}
