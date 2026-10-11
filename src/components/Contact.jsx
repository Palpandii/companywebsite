import { useEffect, useRef, useState } from 'react';
import { SERVICE_OPTIONS as SERVICE_KEYS } from '../data/siteContent.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { SITE } from '../config.js';
import Icon from './Icon.jsx';

const EMPTY = { name: '', phone: '', service: '', message: '' };

// The English service name is the stored value, so the message that reaches the owner is always readable.
const enquiryText = (f) =>
  `Project enquiry${f.service ? ': ' + f.service : ''}\n\n${f.message}\n\nName: ${f.name}\nPhone: ${f.phone}`;

const mailtoFor = (f) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent('Project enquiry' + (f.service ? ': ' + f.service : ''))}` +
  `&body=${encodeURIComponent(`${f.message}\n\nName: ${f.name}\nPhone: ${f.phone}`)}`;

const whatsappFor = (f) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(enquiryText(f))}`;

// No server involved: both buttons hand the message to an app on the visitor's device.
export default function Contact({ prefill, onToast }) {
  const { t, content } = useLanguage();
  const serviceLabels = content.SERVICE_OPTIONS;
  const formRef = useRef(null);
  const [form, setForm] = useState(EMPTY);

  // The planner fills in a service and a draft message.
  useEffect(() => {
    if (prefill) setForm((f) => ({ ...f, service: prefill.service, message: prefill.message }));
  }, [prefill]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // WhatsApp is the main channel: it is the form's submit action (the browser validates the fields first).
  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(whatsappFor(form), '_blank', 'noopener,noreferrer');
    onToast(t('contact.toastWhatsapp'));
  };

  const sendEmail = () => {
    if (formRef.current && !formRef.current.reportValidity()) return;
    window.location.href = mailtoFor(form);
    onToast(t('contact.toastMail'));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      onToast(t('contact.toastCopied', { email: SITE.email }));
    } catch {
      onToast(t('contact.toastEmail', { email: SITE.email }));
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-info-col">
          <div className="section-header section-header--left">
            <h2 className="section-title" id="contact-title">{t('contact.title')}</h2>
            <p className="section-desc">{t('contact.desc')}</p>
          </div>

          <div className="direct-connect-card">
            <div className="connect-brand-header">
              <h3>{SITE.owner}</h3>
              <span className="connect-subtitle">{t('contact.roleLine', { role: t('site.role') })}</span>
            </div>

            <div className="connect-items-list">
              <a className="connect-item connect-item--wa" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <div className="connect-item-icon"><Icon name="chat" size={18} /></div>
                <div className="connect-item-text">
                  <span className="connect-label">WhatsApp</span>
                  <span className="connect-val">{SITE.phone}</span>
                </div>
                <span className="connect-chip">{t('contact.chatNow')}</span>
              </a>
              <div className="connect-item">
                <div className="connect-item-icon"><Icon name="phone" size={18} /></div>
                <div className="connect-item-text">
                  <span className="connect-label">{t('contact.phone')}</span>
                  <a className="connect-val" href={SITE.phoneHref}>{SITE.phone}</a>
                </div>
              </div>
              <div className="connect-item connect-item--muted">
                <div className="connect-item-icon"><Icon name="mail" size={18} /></div>
                <div className="connect-item-text">
                  <span className="connect-label">{t('contact.email')}</span>
                  <a className="connect-val" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
              <div className="connect-item">
                <div className="connect-item-icon"><Icon name="pin" size={18} /></div>
                <div className="connect-item-text">
                  <span className="connect-label">{t('contact.basedIn')}</span>
                  <span className="connect-val">{t('site.location')}</span>
                </div>
              </div>
            </div>

            <button type="button" className="copy-email-btn" onClick={copyEmail}>
              <Icon name="copy" size={16} />
              {t('contact.copy')}
            </button>

            {(SITE.github || SITE.linkedin) && (
              <div className="social-links">
                {SITE.github && <a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" size={13} /></a>}
                {SITE.linkedin && <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" size={13} /></a>}
              </div>
            )}
          </div>
        </div>

        <form className="contact-form-card" ref={formRef} onSubmit={sendWhatsApp}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="contactName">{t('contact.name')}</label>
              <input id="contactName" className="form-control" type="text" autoComplete="name" required maxLength={120}
                value={form.name} onChange={set('name')} />
            </div>
            <div className="form-group">
              <label htmlFor="contactPhone">{t('contact.phoneLabel')}</label>
              <input id="contactPhone" className="form-control" type="tel" inputMode="tel" autoComplete="tel" required
                pattern="[0-9+\s\-]{10,16}" minLength={10} maxLength={16} placeholder="+91 98765 43210"
                title={t('contact.phoneHint')}
                value={form.phone} onChange={set('phone')} />
            </div>
          </div>

          <div className="form-group" role="group" aria-labelledby="service-label">
            <span id="service-label" className="form-label">{t('contact.need')}</span>
            <div className="form-service-select">
              {SERVICE_KEYS.map((s, i) => (
                <button
                  type="button"
                  key={s}
                  className={`select-pill${form.service === s ? ' active' : ''}`}
                  aria-pressed={form.service === s}
                  onClick={() => setForm((f) => ({ ...f, service: f.service === s ? '' : s }))}
                >
                  {serviceLabels[i]}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactMessage">{t('contact.details')}</label>
            <textarea id="contactMessage" className="form-control" required minLength={10} maxLength={3000}
              placeholder={t('contact.placeholder')}
              value={form.message} onChange={set('message')} />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-whatsapp">
              <Icon name="chat" size={18} />
              <span>{t('contact.sendWhatsapp')}</span>
            </button>
            <button type="button" className="btn btn-secondary btn-quiet" onClick={sendEmail}>
              <Icon name="mail" size={18} />
              <span>{t('contact.sendEmail')}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
