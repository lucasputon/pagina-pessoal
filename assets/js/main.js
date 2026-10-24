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

    // Checagem segura via requisição HEAD para verificar existência do arquivo
    const cvCheck = await fetch(siteData.cv, { method: 'HEAD' });
    if (cvCheck.ok) {
      btnCv.href = siteData.cv;
      btnCv.setAttribute('download', '');
      btnCv.removeAttribute('hidden');
    }
  } catch (err) {
    console.info('[cv] Botão de CV mantido oculto (PDF não encontrado ou erro de rede).');
  }
}

async function initPageProjects() {
  const featuredContainer = document.getElementById('featured-projects-container');
  if (featuredContainer) {
    await loadAndRenderProjects('featured-projects-container', true);
  }

  const gridContainer = document.getElementById('projects-grid');
  if (gridContainer) {
    await loadAndRenderProjects('projects-grid', false);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // Inicialização do tema (já pré-carregado no head para evitar flash)
  initTheme();

  // Inicialização de i18n
  await initI18n();

  // Verificação condicional do CV
  await initCvButton();

  // Renderização de projetos se houver containers nesta página
  await initPageProjects();

  // Animação de reveal
  initReveal();

  // Re-renderiza projetos ao alternar idioma
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', async () => {
      // Breve pausa para aguardar conclusão da troca de idioma
      setTimeout(() => {
        initPageProjects();
      }, 50);
    });
  });
});
