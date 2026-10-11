import { useCallback, useEffect, useRef, useState } from 'react';

/** Returns the id of the section currently under the header, for nav highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || elements.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export function useToast(duration = 4000) {
  const [toast, setToast] = useState({ text: '', visible: false });
  const timer = useRef();
  const show = useCallback(
    (text) => {
      clearTimeout(timer.current);
      setToast({ text, visible: true });
      timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), duration);
    },
    [duration]
  );
  useEffect(() => () => clearTimeout(timer.current), []);
  return [toast, show];
}

const REVEAL_SELECTOR = [
  '.section-header', '.service-card', '.work-card', '.cap-card', '.adv-card', '.pillar-item',
  '.about-narrative > *', '.about-profile-card', '.estimator-card', '.direct-connect-card',
  '.contact-form-card', '.footer-top-grid > *',
  '.services-grid', '.work-grid', '.capabilities-grid', '.advantage-cards-grid'
].join(',');

/**
 * Fades sections in as they scroll into view. Elements are tagged with `.reveal`; `.in` is added once visible.
 * Skipped for reduced-motion users and when IntersectionObserver is missing, so content is never hidden for them.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );

    const seen = new WeakSet();
    const prepare = (el) => {
      if (seen.has(el)) return;
      seen.add(el);
      const index = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`);
      el.classList.add('reveal');
      io.observe(el);
    };
    const scan = (node) => {
      if (node.matches && node.matches(REVEAL_SELECTOR)) prepare(node);
      node.querySelectorAll && node.querySelectorAll(REVEAL_SELECTOR).forEach(prepare);
    };

    document.documentElement.classList.add('js-reveal');
    scan(document.body);

    // Cards that React adds later (for example after switching the project filter).
    const mutations = new MutationObserver((list) => {
      list.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && scan(n)));
    });
    mutations.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mutations.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);
}

/** True while the viewport matches a media query, for example '(max-width: 860px)'. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false));
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}
