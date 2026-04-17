import { motion, type Transition } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.35, ease: 'easeOut' } as Transition,
})

export default function AboutPage() {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="page-hero">
        <span className="placeholder-badge">About Me</span>
        <h1>Michael Solomon Barnes</h1>
        <p>Full Stack Software Engineer · San Francisco, CA</p>
      </div>

      <motion.div className="page-section" {...fadeUp(0.1)}>
        <h2>Bio</h2>
        <p>
          I'm a Full Stack Software Engineer most proficient in frontend JavaScript and backend
          Java, with experience across enterprise and startup environments in financial services,
          ecommerce, and media platforms.
        </p>
        <p>
          Currently at Intuit in San Francisco, where I lead frontend development in React and
          TypeScript for the AI4Finance team — building dashboards, AI-driven analysis tools, and
          multi-agent applications to help finance analysts work faster and smarter. I also work on
          backend Python services using LangGraph and LangChain to build and orchestrate AI agents.
        </p>
        <p>
          I care deeply about clean architecture, great developer tooling, and products that
          actually solve real problems. I'm an active user of AI coding tools — Claude Code,
          Cursor, and Windsurf — and enjoy exploring how they change the way software gets built.
        </p>
      </motion.div>

      <motion.div className="page-section" {...fadeUp(0.18)}>
        <h2>Background</h2>
        <p>
          I studied Computer Engineering at Syracuse University's College of Engineering and
          Computer Science, which gave me a strong foundation in both hardware and software —
          firmware on microcontrollers and FPGAs all the way up to full stack web applications.
        </p>
        <p>
          After graduating in 2012, I started my career at JPMorgan Chase building distributed
          Java systems for fund pricing workflows. From there I moved to San Francisco — working at
          Expedia on high-scale ecommerce (1B+ monthly page views), then at Gracenote (Nielsen)
          building media metadata infrastructure for video streaming services. Each role added a
          new layer: distributed systems, big data, cloud infrastructure, and now AI/ML.
        </p>
      </motion.div>

      <motion.div className="page-section" {...fadeUp(0.26)}>
        <h2>Community</h2>
        <p>
          Member of{' '}
          <a href="https://www.devcolor.org" target="_blank" rel="noopener noreferrer">
            /dev/color
          </a>
          , a nonprofit advancing the careers of Black software engineers in the tech industry.
        </p>
      </motion.div>

      <motion.div className="page-section" {...fadeUp(0.34)}>
        <h2>Connect</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/in/mikesbarnes"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-social-link"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
          <a
            href="https://github.com/mikeysol"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-social-link"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a href="mailto:michaelbarnesmail@gmail.com" className="intro-email">
            <FiMail size={15} /> michaelbarnesmail@gmail.com
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
