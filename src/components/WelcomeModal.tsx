import { motion, AnimatePresence } from 'framer-motion'
import { useResume } from '../context/ResumeContext'

interface Props {
  onClose: () => void
}

export default function WelcomeModal({ onClose }: Props) {
  const { welcomeHtml } = useResume()

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4>Welcome!</h4>
              <button className="modal-close" onClick={onClose} aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div dangerouslySetInnerHTML={{ __html: welcomeHtml }} />
            </div>
            <div className="modal-footer">
              <button className="btn-close-modal" onClick={onClose}>
                Got it
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
