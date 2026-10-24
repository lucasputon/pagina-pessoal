/**
 * main.js — Ponto de entrada e orquestrador da aplicação
 */

import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initReveal } from './reveal.js';
import { loadAndRenderProjects } from './projects.js';

async function initCvButton() {
  const btnCv = document.getElementById('btn-cv');
  if (!btnCv) return;

  try {
    const res = await fetch('data/site.json');
    if (!res.ok) return;
    const siteData = await res.json();
    if (!siteData.cv) return;

    const cvCheck = await fetch(siteData.cv, { method: 'HEAD' });
    if (cvCheck.ok) {
      btnCv.href = siteData.cv;
      btnCv.setAttribute('download', '');
      btnCv.removeAttribute('hidden');
    }
  } catch (err) {
    // Mantém botão oculto silenciosamente caso o arquivo não exista
  }
}

async function initPageProjects() {
  const featured = document.getElementById('featured-projects-container');
  if (featured) {
    await loadAndRenderProjects('featured-projects-container', true);
  }

  const grid = document.getElementById('projects-grid');
  if (grid) {
    await loadAndRenderProjects('projects-grid', false);
  }
}

function init() {
  initTheme();
  initI18n();
  initReveal();
  initCvButton();
  initPageProjects();

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(initPageProjects, 60);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
