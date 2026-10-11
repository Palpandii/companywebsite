import { useId, useState } from 'react';

/** One-open-at-a-time accordion. variant "steps" adds numbered badges (used by the process section). */
export default function Accordion({ items, defaultOpen = -1, variant = 'faq' }) {
    const [open, setOpen] = useState(defaultOpen);
    const base = useId();
    return (
        <div className={`acc acc--${variant}`}>
            {items.map((it, i) => {
                const isOpen = open === i;
                const id = `${base}-${i}`;
                return (
                    <div className={`acc-item${isOpen ? ' open' : ''}`} key={i}>
                        <h3 className="acc-head">
                            <button type="button" className="acc-btn" id={`${id}-b`} aria-expanded={isOpen} aria-controls={`${id}-p`}
                                onClick={() => setOpen(isOpen ? -1 : i)}>
                                {variant === 'steps' && <span className="acc-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>}
                                <span className="acc-title"><span>{it.title}</span>{it.sub && <small>{it.sub}</small>}</span>
                                <span className="acc-chev" aria-hidden="true" />
                            </button>
                        </h3>
                        <div className="acc-panel" id={`${id}-p`} role="region" aria-labelledby={`${id}-b`}>
                            <div className="acc-inner"><p>{it.body}</p></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}