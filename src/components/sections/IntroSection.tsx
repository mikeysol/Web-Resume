import { FiLinkedin, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'
import type { IntroSection as IntroSectionType } from '../../types'

interface Props {
  section: IntroSectionType
}

function getSocialIcon(url: string) {
  if (url.includes('linkedin')) return <FiLinkedin size={15} />
  if (url.includes('github')) return <FiGithub size={15} />
  return null
}

function getSocialLabel(url: string): string {
  if (url.includes('linkedin')) return 'LinkedIn'
  if (url.includes('github')) return 'GitHub'
  return 'Link'
}

export default function IntroSection({ section }: Props) {
  return (
    <div className="intro-card">
      <h1 className="intro-name">{section.name}</h1>
      <div className="intro-location">
        <FiMapPin size={13} />
        {section.address}
      </div>
      <div className="intro-social">
        {section['social media'].map((sm) => (
          <a
            key={sm.url}
            href={sm.url}
            target="_blank"
            rel="noopener noreferrer"
            className="intro-social-link"
          >
            {getSocialIcon(sm.url)}
            {getSocialLabel(sm.url)}
          </a>
        ))}
        <a href={`mailto:${section.email}`} className="intro-email">
          <FiMail size={15} />
          {section.email}
        </a>
      </div>
    </div>
  )
}
