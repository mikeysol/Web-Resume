import type { IntroSection as IntroSectionType } from '../../types'

interface Props {
  section: IntroSectionType
}

export default function IntroSection({ section }: Props) {
  return (
    <div id="intro">
      <h2 className="center">
        <b>{section.name}</b>
      </h2>
      <p className="center">{section.address}</p>
      <p className="center icons">
        {section['social media'].map((sm) => (
          <a key={sm.url} href={sm.url} target="_blank" rel="noopener noreferrer">
            <img src={sm.icon} height="50" width="50" alt="social media" />
          </a>
        ))}
      </p>
      <div className="center">
        <div className="mail-link">
          <a href={`mailto:${section.email}`}>
            <b>{section.email}</b>
          </a>
        </div>
      </div>
    </div>
  )
}
