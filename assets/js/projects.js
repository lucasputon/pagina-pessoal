/**
 * projects.js — Carregamento, validação e renderização da lista de projetos
 */

import { getCurrentLanguage } from './i18n.js';

export async function loadAndRenderProjects(containerId, isFeaturedOnly = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const res = await fetch('data/projects.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!Array.isArray(data)) throw new Error('Formato inválido');

    // Validação de schema
    const valid = data.filter((item) => {
      const ok = item && typeof item.slug === 'string' && item.title?.pt && item.summary?.pt;
      if (!ok) console.warn('[projects] Item descartado:', item);
      return ok;
    });

    // Ordenação: featured primeiro, order crescente, ano decrescente
    valid.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      const orderA = typeof a.order === 'number' ? a.order : 999;
      const orderB = typeof b.order === 'number' ? b.order : 999;
      if (orderA !== orderB) return orderA - orderB;
      return (b.year || 0) - (a.year || 0);
    });

    const list = isFeaturedOnly ? valid.filter((p) => p.featured).slice(0, 3) : valid;
    const lang = getCurrentLanguage();

    if (list.length === 0) {
      renderEmpty(container, lang);
      return;
    }

    renderCards(container, list, lang);
  } catch (err) {
    console.error('[projects] Erro:', err);
    renderError(container, getCurrentLanguage(), () =>
      loadAndRenderProjects(containerId, isFeaturedOnly)
    );
  }
}

function renderEmpty(container, lang) {
  const isEn = lang === 'en';
  container.innerHTML = `
    <div class="state-message">
      <p data-i18n="projects.empty.title">${isEn ? 'No projects published yet.' : 'Nenhum projeto publicado ainda.'}</p>
      <a href="https://github.com/lucasputon" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" data-i18n="projects.empty.cta">
        ${isEn ? 'Check my GitHub profile' : 'Ver meu GitHub'}
      </a>
    </div>
  `;
}

function renderError(container, lang, retryFn) {
  const isEn = lang === 'en';
  container.innerHTML = `
    <div class="state-message">
      <p data-i18n="projects.error.title">${isEn ? 'Could not load projects at this time.' : 'Não foi possível carregar os projetos no momento.'}</p>
      <button type="button" class="btn btn-secondary" data-i18n="projects.error.retry">
        ${isEn ? 'Reload' : 'Tentar novamente'}
      </button>
    </div>
  `;
  container.querySelector('button')?.addEventListener('click', retryFn);
}

function renderCards(container, projects, lang) {
  container.innerHTML = '';
  const template = document.getElementById('project-card-template');

  projects.forEach((proj) => {
    if (!template?.content) return;
    const card = template.content.cloneNode(true).firstElementChild;

    const titleEl = card.querySelector('.project-card-title');
    if (titleEl) titleEl.textContent = lang === 'en' && proj.title.en ? proj.title.en : proj.title.pt;

    const yearEl = card.querySelector('.project-card-year');
    if (yearEl) yearEl.textContent = proj.year || '';

    const summaryEl = card.querySelector('.project-card-summary');
    if (summaryEl) summaryEl.textContent = lang === 'en' && proj.summary.en ? proj.summary.en : proj.summary.pt;

    const mediaEl = card.querySelector('.project-card-media');
    if (mediaEl) {
      if (proj.image) {
        const img = document.createElement('img');
        img.className = 'project-card-image';
        img.src = proj.image;
        img.alt = lang === 'en' && proj.title.en ? proj.title.en : proj.title.pt;
        img.loading = 'lazy';
        img.width = 800;
        img.height = 500;
        mediaEl.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'project-card-media-placeholder';
        const initials = (proj.slug || 'PR').split('-').map((w) => w[0]?.toUpperCase() || '').slice(0, 2).join('');
        placeholder.textContent = initials || 'LP';
        mediaEl.appendChild(placeholder);
      }
    }

    const tagsContainer = card.querySelector('.project-card-tags');
    if (tagsContainer && Array.isArray(proj.tags)) {
      proj.tags.forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = tag;
        tagsContainer.appendChild(chip);
      });
    }

    const repoLink = card.querySelector('.repo-link');
    if (repoLink) {
      if (proj.repo) {
        repoLink.href = proj.repo;
        repoLink.textContent = lang === 'en' ? 'Repository ↗' : 'Repositório ↗';
      } else repoLink.remove();
    }

    const demoLink = card.querySelector('.demo-link');
    if (demoLink) {
      if (proj.demo) {
        demoLink.href = proj.demo;
        demoLink.textContent = lang === 'en' ? 'Live Demo ↗' : 'Ver demo ↗';
      } else demoLink.remove();
    }

    container.appendChild(card);
  });
}
