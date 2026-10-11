import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const windowRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !windowRef.current) return;
      const nodes = windowRef.current.querySelectorAll(FOCUSABLE);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop open"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={windowRef}
      >
        <button type="button" className="modal-close-btn" aria-label={t('projects.close')} onClick={onClose} ref={closeRef}>
          <Icon name="x" size={18} />
        </button>

        <p className="modal-category">{project.category}</p>
        <h3 className="modal-title" id="modal-title">{project.title}</h3>
        <p className="modal-tagline">{project.tagline}</p>

        <h4 className="modal-heading">{t('projects.overview')}</h4>
        <p className="modal-text">{project.summary}</p>

        <h4 className="modal-heading">{t('projects.builtWith')}</h4>
        <div className="work-tech-chips">
          {project.tech.map((t) => <span className="tech-tag-sm" key={t}>{t}</span>)}
        </div>

        <h4 className="modal-heading">{t('projects.built')}</h4>
        <ul className="modal-list">
          {project.highlights.map((h) => (
            <li key={h}><span aria-hidden="true">&#9657;</span><span>{h}</span></li>
          ))}
        </ul>

        <div className="modal-footer">
          <span className="modal-role">{project.role}</span>
          <div className="modal-links">
            {project.liveUrl && (
              <a className="work-live-btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {t('projects.live')} <Icon name="external" size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a className="btn btn-secondary btn-sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                {t('projects.source')} <Icon name="external" size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
