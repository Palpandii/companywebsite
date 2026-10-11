import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { COPY } from '../data/extras.js';
import Icon from './Icon.jsx';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }) {
  const { t, lang } = useLanguage();
  const cs = project.caseStudy;
  const labels = COPY[lang].case;
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

        {project.imageUrl && <img className="modal-hero" src={project.imageUrl} alt={project.imageAlt || project.title} width="1280" height="714" />}
        <p className="modal-category">{project.category}</p>
        <h3 className="modal-title" id="modal-title">{project.title}</h3>
        <p className="modal-tagline">{project.tagline}</p>

        <h4 className="modal-heading">{t('projects.overview')}</h4>
        <p className="modal-text">{project.summary}</p>

        {cs && (
          <div className="case-grid">
            {['problem', 'solution', 'result'].filter((k) => cs[k]).map((k) => (
              <div className={`case-step case-step--${k}`} key={k}>
                <span className="case-label">{labels[k]}</span>
                <p>{cs[k]}</p>
              </div>
            ))}
          </div>
        )}
        {cs?.screenshots?.length > 0 && (
          <>
            <h4 className="modal-heading">{labels.shots}</h4>
            <div className="case-shots">
              {cs.screenshots.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
            </div>
          </>
        )}

        <h4 className="modal-heading">{t('projects.builtWith')}</h4>
        <div className="work-tech-chips">
          {project.tech.map((tag) => <span className="tech-tag-sm" key={tag}>{tag}</span>)}
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