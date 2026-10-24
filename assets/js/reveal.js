/**
 * reveal.js — Animação suave de entrada via IntersectionObserver
 * Respeita preferências do usuário por redução de movimento e garante
 * visibilidade imediata sem dependência de JavaScript.
 */

export function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // Ativa animação apenas quando suportado
  document.documentElement.classList.add('js-reveal-active');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px',
    }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
}
