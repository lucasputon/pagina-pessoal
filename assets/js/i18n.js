/**
 * i18n.js — Internacionalização (PT-BR / EN)
 * O português é a fonte nativa no HTML. O inglês vive em i18n/en.json.
 */

const STORAGE_KEY = 'lp-lang';
let currentLang = 'pt';
let enDictionary = null;
const originalPtValues = new Map();

export function getCurrentLanguage() {
  return currentLang;
}

export async function fetchDictionary() {
  if (enDictionary) return enDictionary;
  try {
    const res = await fetch('i18n/en.json');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    enDictionary = await res.json();
    return enDictionary;
  } catch (err) {
    console.error('Falha ao carregar i18n/en.json:', err);
    return {};
  }
}

export function t(key) {
  if (currentLang === 'en' && enDictionary && key in enDictionary) {
    return enDictionary[key];
  }
  return null;
}

export async function setLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'pt';

  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (err) {
    console.warn('Não foi possível persistir idioma no localStorage:', err);
  }

  document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'pt-BR');

  if (currentLang === 'en') {
    await fetchDictionary();
  }

  applyTranslations();
  updateLangButtons();
  announceLanguageChange();
}

function applyTranslations() {
  // Tradução de texto interno (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!originalPtValues.has(el)) {
      originalPtValues.set(el, el.textContent);
    }

    if (currentLang === 'en') {
      if (enDictionary && key in enDictionary) {
        el.textContent = enDictionary[key];
      } else {
        console.warn(`[i18n] Chave ausente em en.json: "${key}"`);
      }
    } else {
      el.textContent = originalPtValues.get(el);
    }
  });

  // Tradução de atributos (data-i18n-attr="attr:key;attr2:key2")
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const attrDefs = el.getAttribute('data-i18n-attr').split(';');
    attrDefs.forEach((def) => {
      const parts = def.trim().split(':');
      if (parts.length !== 2) return;
      const [attr, key] = parts;
      const storeKey = `${attr}::${key}`;

      if (!el.dataset[storeKey]) {
        el.dataset[storeKey] = el.getAttribute(attr) || '';
      }

      if (currentLang === 'en') {
        if (enDictionary && key in enDictionary) {
          el.setAttribute(attr, enDictionary[key]);
        } else {
          console.warn(`[i18n] Atributo ausente em en.json: "${key}"`);
        }
      } else {
        el.setAttribute(attr, el.dataset[storeKey]);
      }
    });
  });

  // Atualiza <title> e <meta name="description">
  const pageTitleKey = document.querySelector('title')?.getAttribute('data-i18n');
  if (pageTitleKey && currentLang === 'en' && enDictionary?.[pageTitleKey]) {
    document.title = enDictionary[pageTitleKey];
  } else if (pageTitleKey && currentLang === 'pt') {
    const origTitle = document.querySelector('title')?.dataset.origTitle;
    if (origTitle) document.title = origTitle;
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  const metaDescKey = metaDesc?.getAttribute('data-i18n-attr')?.split(':')[1];
  if (metaDescKey && currentLang === 'en' && enDictionary?.[metaDescKey]) {
    metaDesc.setAttribute('content', enDictionary[metaDescKey]);
  }
}

function updateLangButtons() {
  const isPt = currentLang === 'pt';
  const targetLabel = isPt ? 'EN' : 'PT';
  const targetAria = isPt ? 'Mudar para inglês' : 'Switch to Portuguese';

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.textContent = targetLabel;
    btn.setAttribute('aria-label', targetAria);
    btn.setAttribute('title', targetAria);
  });
}

function announceLanguageChange() {
  const announcer = document.getElementById('a11y-announcer');
  if (announcer) {
    announcer.textContent =
      currentLang === 'en'
        ? 'Language changed to English'
        : 'Idioma alterado para português';
  }
}

export function toggleLanguage() {
  const next = currentLang === 'pt' ? 'en' : 'pt';
  setLanguage(next);
  return next;
}

export async function initI18n() {
  // Salva título original
  const titleEl = document.querySelector('title');
  if (titleEl && !titleEl.dataset.origTitle) {
    titleEl.dataset.origTitle = document.title;
  }

  // Detecta idioma: URL param > localStorage > padrão "pt"
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const saved = localStorage.getItem(STORAGE_KEY);

  let initial = 'pt';
  if (urlLang === 'en' || urlLang === 'pt') {
    initial = urlLang;
  } else if (saved === 'en' || saved === 'pt') {
    initial = saved;
  }

  await setLanguage(initial);

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleLanguage();
    });
  });
}
