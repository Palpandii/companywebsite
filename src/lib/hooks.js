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
  '.services-grid', '.work-grid', '.pricing-grid', '.acc', '.quotes-grid', '.stats-strip', '.marquee', '.capabilities-grid', '.advantage-cards-grid'
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

const RIPPLE_SELECTOR = [
  '.btn', '.filter-btn', '.estimator-option-btn', '.feature-toggle', '.select-pill', '.work-view-btn',
  '.work-live-btn', '.copy-email-btn', '.back-to-top-btn', '.dock-btn', '.connect-item', '.lang-switch button',
  '.mobile-toggle', '.modal-close-btn', '.service-card', '.cap-card', '.adv-card', '.work-card',
  '.pillar-item', '.nav-link', '.social-links a'
].join(',');

/**
 * Click feedback for the whole page: a ripple from the exact tap point, a small "pop" on controls,
 * and an underline sweep on the heading of a section that an in-page link scrolls to.
 * Skipped for reduced-motion users.
 */
export function useClickEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const onPointerDown = (e) => {
      if (e.button > 0 || !e.target.closest) return;
      const host = e.target.closest(RIPPLE_SELECTOR);
      if (!host || host.disabled || host.getAttribute('aria-disabled') === 'true') return;

      const box = host.getBoundingClientRect();
      const size = Math.max(box.width, box.height) * 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.setAttribute('aria-hidden', 'true');
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - box.left - size / 2}px`;
      ripple.style.top = `${e.clientY - box.top - size / 2}px`;
      host.appendChild(ripple);
      const remove = () => ripple.remove();
      ripple.addEventListener('animationend', remove, { once: true });
      setTimeout(remove, 900);

      host.classList.remove('is-popping');
      void host.offsetWidth; // restart the animation on rapid taps
      host.classList.add('is-popping');
      host.addEventListener('animationend', (ev) => {
        if (ev.target === host) host.classList.remove('is-popping');
      }, { once: true });
    };

    const onClick = (e) => {
      const link = e.target.closest && e.target.closest('a[href^="#"]');
      const id = link && link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      const heading = target && target.querySelector('.section-title, .about-headline');
      if (!heading) return;
      setTimeout(() => {
        heading.classList.remove('focus-pulse');
        void heading.offsetWidth;
        heading.classList.add('focus-pulse');
        setTimeout(() => heading.classList.remove('focus-pulse'), 1500);
      }, 450);
    };

    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('click', onClick);
    };
  }, []);
}