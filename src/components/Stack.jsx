import { useLanguage } from '../context/LanguageContext.jsx';
import { useMediaQuery } from '../lib/hooks.js';
import Icon from './Icon.jsx';

export default function Stack() {
  const { t, content } = useLanguage();
  const { STACK } = content;
  const swipe = useMediaQuery('(max-width: 860px)');
  return (
    <section className="capabilities-section" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="stack-title">{t('stack.title')}</h2>
          <p className="section-desc">{t('stack.desc')}</p>
        </div>

        <div className="capabilities-grid" tabIndex={swipe ? 0 : undefined} role={swipe ? 'group' : undefined} aria-label={swipe ? t('stack.title') : undefined}>
          {STACK.map((group) => (
            <div className="cap-card" key={group.title}>
              <div className="cap-card-header">
                <div className="cap-card-icon"><Icon name={group.icon} size={22} /></div>
                <h3 className="cap-card-title">{group.title}</h3>
              </div>
              <div className="cap-items-list">
                {group.items.map((item) => (
                  <div className="cap-item" key={item.name}>
                    <span className="cap-item-name">{item.name}</span>
                    <span className="cap-item-badge">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
