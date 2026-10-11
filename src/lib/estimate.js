// Delivery-time estimate for the planner. Runs entirely in the browser; no server is involved.
const BASE_DAYS = { WEBSITE: 10, WEB_APP: 22, ECOMMERCE: 24, CUSTOM: 26 };
const SCALE = { MVP: 0.7, STANDARD: 1.0, ENTERPRISE: 1.55 };
const MODULE_DAYS = { AUTH: 4, DATABASE: 3, PAYMENT: 4, REALTIME: 4, EMAIL: 2, CMS: 3 };

export function estimateLocally({ type, scale, modules }) {
  let days = Math.round(BASE_DAYS[type] * SCALE[scale]);
  for (const m of new Set(modules)) days += MODULE_DAYS[m] ?? 0;
  const minWeeks = Math.ceil(days / 7);
  const maxWeeks = minWeeks + 1;
  return { totalDays: days, minWeeks, maxWeeks, label: `${minWeeks} - ${maxWeeks} weeks` };
}
