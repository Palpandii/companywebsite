import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import Icon from './Icon.jsx';
import ProjectModal from './ProjectModal.jsx';

const ALL = '__all__';

export default function Projects() {
  const { t, content } = useLanguage();
  const projects = content.PROJECTS;
  const [filter, setFilter] = useState(ALL); // holds the English group key, so it survives a language switch
  const [selectedSlug, setSelectedSlug] = useState(null);

  // [{ key: 'Client Work', label: 'Client Work' | 'கிளையன்ட் பணிகள்' }, ...] in first-seen order
  const filters = useMemo(() => {
    const seen = new Map();
    projects.forEach((p) => { if (!seen.has(p.groupKey)) seen.set(p.groupKey, p.filterGroup); });
    return [{ key: ALL, label: t('projects.all') }, ...[...seen].map(([key, label]) => ({ key, label }))];
  }, [projects, t]);

  const visible = filter === ALL ? projects : projects.filter((p) => p.groupKey === filter);
  const selected = selectedSlug ? projects.find((p) => p.slug === selectedSlug) : null;

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="work-title">{t('projects.title')}</h2>
          <p className="section-desc">{t('projects.desc')}</p>
        </div>

        <div className="work-filter-bar" role="group" aria-label={t('projects.filter')}>
          {filters.map((f) => (
            <button
              type="button"
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((p) => (
            <article className="work-card" key={`${filter}-${p.slug}`}>
              <div className="work-media-wrap">
                <img src={p.imageUrl} alt={p.imageAlt || p.title} width="1280" height="714" loading="lazy" />
                <span className="work-category-badge">{p.badge || p.filterGroup}</span>
              </div>
              <div className="work-info-body">
                <h3 className="work-card-title">{p.title}</h3>
                <p className="work-card-desc">{p.cardText}</p>
                <div className="work-tech-chips">
                  {p.tech.map((tag) => <span className="tech-tag-sm" key={tag}>{tag}</span>)}
                </div>
                <div className="work-actions-row">
                  <button type="button" className="work-view-btn" onClick={() => setSelectedSlug(p.slug)}>
                    <span>{t('projects.view')}</span>
                    <Icon name="arrow" size={14} strokeWidth={2.5} />
                  </button>
                  {p.liveUrl && (
                    <a className="work-live-btn" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                      {t('projects.live')} <Icon name="external" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelectedSlug(null)} />}
    </section>
  );
}