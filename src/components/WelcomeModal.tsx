import { useResume } from '../context/ResumeContext'

interface Props {
  onClose: () => void
}

export default function WelcomeModal({ onClose }: Props) {
  const { welcomeHtml } = useResume()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button className="modal-close" onClick={onClose} aria-label="Close">
              &times;
            </button>
            <h4>Welcome!</h4>
          </div>
          <div className="modal-body">
            <div dangerouslySetInnerHTML={{ __html: welcomeHtml }} />
          </div>
          <div className="modal-footer">
            <button className="btn-close-modal" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
