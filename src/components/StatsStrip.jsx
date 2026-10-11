import { SITE } from '../config.js';

// Renders nothing unless SITE.stats has real numbers (src/config.js).
export default function StatsStrip() {
    const stats = SITE.stats || [];
    if (stats.length === 0) return null;
    return (
        <div className="container">
            <div className="stats-strip">
                {stats.map((s) => (
                    <div className="stat-item" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
            </div>
        </div>
    );
}