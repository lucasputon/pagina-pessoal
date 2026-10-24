/**
 * theme.js — Gerenciamento do Tema Claro/Escuro
 * Suporta persistência em localStorage e sincronização com prefers-color-scheme.
 */

const STORAGE_KEY = 'lp-theme';

export function getCurrentTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (err) {
    console.warn('Não foi possível salvar tema no localStorage:', err);
  }
  updateThemeButtons(theme);
}

export function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function updateThemeButtons(theme) {
  const isDark = theme === 'dark';
  const buttons = document.querySelectorAll('.theme-toggle');

  buttons.forEach((btn) => {
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    const label = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);

    // Ícone Sol (quando escuro, para mudar para claro) ou Lua (quando claro, para mudar para escuro)
    btn.innerHTML = isDark
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <circle cx="12" cy="12" r="5"></circle>
           <line x1="12" y1="1" x2="12" y2="3"></line>
           <line x1="12" y1="21" x2="12" y2="23"></line>
           <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
           <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
           <line x1="1" y1="12" x2="3" y2="12"></line>
           <line x1="21" y1="12" x2="23" y2="12"></line>
           <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
           <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
         </svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
         </svg>`;
  });
}

export function initTheme() {
  const active = getCurrentTheme();
  setTheme(active);

  // Escuta preferências do sistema caso não haja override no localStorage
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleTheme();
    });
  });
}
