import { useMemo, useState } from 'react';
import { estimateLocally } from '../lib/estimate.js';
import { SITE } from '../config.js';
import { SERVICE_OPTIONS as SERVICE_KEYS } from '../data/siteContent.js';
import { useLanguage } from '../context/LanguageContext.jsx';

// Ids only. Labels come from the translation files so they follow the language switch.
const TYPE_IDS = ['WEBSITE', 'WEB_APP', 'ECOMMERCE', 'CUSTOM']; // same order as SERVICE_OPTIONS
const SCALE_IDS = ['MVP', 'STANDARD', 'ENTERPRISE'];
const MODULE_IDS = ['AUTH', 'DATABASE', 'PAYMENT', 'REALTIME', 'EMAIL', 'CMS'];

export default function Estimator({ onApply }) {
  const { t } = useLanguage();
  const [type, setType] = useState('WEB_APP');
  const [scale, setScale] = useState('STANDARD');
  const [modules, setModules] = useState([]);
  const result = useMemo(() => estimateLocally({ type, scale, modules }), [type, scale, modules]);

  const toggleModule = (id) =>
    setModules((current) => (current.includes(id) ? current.filter((m) => m !== id) : [...current, id]));

  const typeLabel = t(`est.type.${type}.title`);
  const scaleLabel = t(`est.scale.${scale}.title`);
  const moduleLabels = MODULE_IDS.filter((m) => modules.includes(m)).map((m) => t(`est.mod.${m}`));
  const weeksLabel = t('est.weeks', { min: result.minWeeks, max: result.maxWeeks });

  const apply = () => {
    const features = moduleLabels.length ? moduleLabels.join(', ') : t('est.msgNoModules');
    onApply({
      // The English service name is the stored value; the contact form shows it in the active language.
      service: SERVICE_KEYS[TYPE_IDS.indexOf(type)],
      message: t('est.msgHello', {
        name: SITE.owner.split(' ')[0],
        type: typeLabel,
        scale: scaleLabel,
        features,
        label: weeksLabel
      })
    });
  };

  return (
    <section className="estimator-section" id="estimator" aria-labelledby="estimator-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="estimator-title">{t('est.title')}</h2>
          <p className="section-desc">{t('est.desc')}</p>
        </div>

        <div className="estimator-card">
          <div className="estimator-grid">
            <div className="estimator-controls">
              <div role="group" aria-labelledby="est-type">
                <h3 className="control-group-title" id="est-type">{t('est.q1')}</h3>
                <div className="control-pill-group">
                  {TYPE_IDS.map((id) => (
                    <button
                      type="button"
                      key={id}
                      className={`estimator-option-btn${type === id ? ' selected' : ''}`}
                      aria-pressed={type === id}
                      onClick={() => setType(id)}
                    >
                      <span className="opt-title">{t(`est.type.${id}.title`)}</span>
                      <span className="opt-desc">{t(`est.type.${id}.desc`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div role="group" aria-labelledby="est-scale">
                <h3 className="control-group-title" id="est-scale">{t('est.q2')}</h3>
                <div className="control-pill-group">
                  {SCALE_IDS.map((id) => (
                    <button
                      type="button"
                      key={id}
                      className={`estimator-option-btn${scale === id ? ' selected' : ''}`}
                      aria-pressed={scale === id}
                      onClick={() => setScale(id)}
                    >
                      <span className="opt-title">{t(`est.scale.${id}.title`)}</span>
                      <span className="opt-desc">{t(`est.scale.${id}.desc`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div role="group" aria-labelledby="est-modules">
                <h3 className="control-group-title" id="est-modules">{t('est.q3')}</h3>
                <div className="checkbox-features-grid">
                  {MODULE_IDS.map((id) => (
                    <label className={`feature-toggle${modules.includes(id) ? ' active' : ''}`} key={id}>
                      <input type="checkbox" checked={modules.includes(id)} onChange={() => toggleModule(id)} />
                      <span className="feature-toggle-text">{t(`est.mod.${id}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <aside className="estimator-summary-panel" aria-label={t('est.summaryLabel')}>
              <div className="summary-panel-header">
                <h3>{t('est.summaryTitle')}</h3>
                <p>{t('est.summarySub')}</p>
              </div>

              <div className="summary-metrics-row">
                <div className="summary-metric-box">
                  <div className="label">{t('est.delivery')}</div>
                  <div className="value" aria-live="polite">{weeksLabel}</div>
                </div>
                <div className="summary-metric-box">
                  <div className="label">{t('est.workDays')}</div>
                  <div className="value">{result.totalDays}</div>
                </div>
              </div>

              <div className="summary-breakdown-list">
                <div className="breakdown-row"><span>{t('est.rowProject')}</span><strong>{typeLabel}</strong></div>
                <div className="breakdown-row"><span>{t('est.rowScale')}</span><strong>{scaleLabel}</strong></div>
                <div className="breakdown-row">
                  <span>{t('est.rowModules')}</span>
                  <strong>{modules.length === 0 ? t('est.modulesNone') : t('est.modulesCount', { n: modules.length })}</strong>
                </div>
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={apply}>
                {t('est.apply')}
              </button>
              <p className="estimate-note">{t('est.note')}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
