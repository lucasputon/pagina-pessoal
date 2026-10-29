# TODO.md — Roteiro de Execução Passo a Passo · Portfólio Lucas Puton

> **Objetivo:** Este documento é uma lista de instruções estritamente sequenciais e prescritivas. Um modelo de linguagem ou executor sem capacidade de inferência ou raciocínio deve ser capaz de seguir este arquivo de cima para baixo, executando uma tarefa por vez e validando seus testes antes de avançar.
>
> **Documentos de referência obrigatórios:**
> - [AGENTS.md](file:///c:/Users/lucas/OneDrive/Desktop/Inteligencia%20Artificial/site-pessoal/AGENTS.md) — Regras de código, processo de trabalho e proibições.
> - [SPECS.md](file:///c:/Users/lucas/OneDrive/Desktop/Inteligencia%20Artificial/site-pessoal/SPECS.md) — Especificação técnica detalhada, tokens, layouts e contratos.

---

## Insumos Extraídos de `Profile.pdf` (Fonte da Verdade)

Todos os dados textuais do portfólio devem ser estritamente baseados nas seguintes informações reais extraídas de `Profile.pdf`:

- **Nome Completo:** Lucas Puton
- **Headline / Título:** Técnico em Informática | Cursando Ciência da Computação
- **Localização:** Carazinho, Rio Grande do Sul, Brasil
- **E-mail de Contato:** `lucasputon0805@hotmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/lucasputon`
- **GitHub:** `https://github.com/lucasputon`
- **Idiomas:** Português (Nativo), Inglês (Profissional)
- **Resumo Profissional:**
  > Técnico em Informática formado pelo Senac RS e estudante de Ciência da Computação na Atitus Educação. Mais de 4 anos de experiência contínua atuando como Assistente de TI em ambiente corporativo. Vivência com resolução rápida de problemas operacionais, manutenção de computadores, atendimento a usuários e rotinas de rede. Foco em evoluir na intersecção entre infraestrutura de tecnologia e ciência da computação / desenvolvimento web, aplicando boas práticas para otimizar processos e agregar valor.
- **Experiência Profissional:**
  1. **Addizionare Contabilidade** — *Assistente de TI* (agosto de 2022 – Atual) — Carazinho, RS.
  2. **Connectos** — *Técnico de Suporte de Informática* (junho de 2022 – julho de 2022) — Carazinho, RS.
  3. **Tecnomix Informática** — *Técnico de TI* (abril de 2021 – junho de 2021) — Rio Grande do Sul.
- **Formação Acadêmica:**
  1. **Atitus Educação** — *Bacharelado em Ciência da Computação* (Iniciado em agosto de 2026 · em andamento).
  2. **Senac RS** — *Técnico em Informática* (2019 – 2021).
- **Competências:** Suporte de TI, Redes corporativas, Segurança da informação, Montagem e manutenção de hardware, Resolução de problemas.
- **Certificações:**
  - Formação Excel
  - English Course
  - PoliSummit 2026
  - Informática Fundamental Compacto
  - Capacita+: Construa com o Gemini

---

## Regras Operacionais para o Executor

1. **Zero build e zero dependência externa:** Proibido rodar `npm`, `npx`, usar CDNs, carregar fontes do Google ou usar scripts de terceiros.
2. **Caminhos estritamente relativos:** Nunca use barras no início dos caminhos (`assets/...` SIM; `/assets/...` NÃO).
3. **Pares bilíngues obrigatórios:** Toda nova string visível deve existir em PT no HTML e em EN no arquivo `i18n/en.json`.
4. **Sem conteúdo inventado:** Usar unicamente os dados reais acima.
5. **Privacidade:** `Profile.pdf` é um insumo interno de planejamento e deve constar no `.gitignore` para nunca ser publicado no GitHub Pages.

---

## FASE 0 — Preparação do Ambiente e Dados Base

### [x] Tarefa 0.1: Criar arquivo `.gitignore`
- **Ação:** Criar o arquivo `.gitignore` na raiz do projeto.
- **Conteúdo obrigatório:**
  ```gitignore
  # Insumos internos e arquivos confidenciais
  Profile.pdf
  *.log
  .DS_Store
  Thumbs.db

  # Pastas de IDE e editores
  .vscode/
  .idea/
  .gemini/
  ```
- **Teste de Aceite:**
  1. Executar no terminal: `git status --ignored` e verificar se `Profile.pdf` é reconhecido como ignorado.

---

### [x] Tarefa 0.2: Criar árvore de diretórios do projeto
- **Ação:** Criar os seguintes diretórios na raiz do projeto:
  - `data/`
  - `i18n/`
  - `assets/css/`
  - `assets/js/`
  - `assets/img/`
  - `assets/img/projects/`
  - `assets/cv/`
  - `.github/workflows/`
- **Teste de Aceite:**
  1. Verificar via PowerShell: `Test-Path data, i18n, assets/css, assets/js, assets/img/projects, assets/cv, .github/workflows` — todos devem retornar `True`.

---

### [x] Tarefa 0.3: Criar `data/site.json`
- **Ação:** Criar o arquivo `data/site.json` contendo os dados reais de Lucas Puton extraídos de `Profile.pdf`.
- **Conteúdo exato a criar:**
  ```json
  {
    "name": "Lucas Puton",
    "handle": "lucasputon",
    "role": {
      "pt": "Técnico em Informática · Cursando Ciência da Computação",
      "en": "IT Technician · Computer Science Student"
    },
    "location": {
      "pt": "Carazinho, Rio Grande do Sul, Brasil",
      "en": "Carazinho, Rio Grande do Sul, Brazil"
    },
    "availability": {
      "pt": "Aberto a oportunidades em TI e Desenvolvimento",
      "en": "Open to opportunities in IT and Development"
    },
    "email": "lucasputon0805@hotmail.com",
    "links": [
      {
        "id": "github",
        "label": "GitHub",
        "url": "https://github.com/lucasputon"
      },
      {
        "id": "linkedin",
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/lucasputon"
      }
    ],
    "photo": "assets/img/profile.jpg",
    "cv": "assets/cv/lucas-puton-cv.pdf",
    "stack": {
      "frontend": ["HTML", "CSS", "JavaScript"],
      "infrastructure": ["Redes Corporativas", "Suporte de TI", "Segurança da Informação", "Hardware"],
      "tools": ["Git", "GitHub", "Excel", "Gemini AI"]
    }
  }
  ```
- **Teste de Aceite:**
  1. Validar sintaxe JSON com comando PowerShell ou script:
     `Get-Content data/site.json | ConvertFrom-Json` (não pode emitir erro).

---

### [x] Tarefa 0.4: Criar `data/projects.json` inicial
- **Ação:** Criar o arquivo `data/projects.json` inicial com o schema oficial validado do SPECS (com o próprio portfólio pessoal como primeiro projeto real).
- **Conteúdo exato a criar:**
  ```json
  [
    {
      "slug": "pagina-pessoal",
      "title": {
        "pt": "Portfólio Pessoal Minimalista",
        "en": "Minimalist Personal Portfolio"
      },
      "summary": {
        "pt": "Site pessoal estático, bilíngue (PT/EN) e com tema claro/escuro. Construído com HTML, CSS e JS puro, sem dependências externas.",
        "en": "Static, bilingual (PT/EN) personal website with light/dark theme. Built with pure HTML, CSS, and JS, zero external dependencies."
      },
      "year": 2026,
      "status": "concluido",
      "tags": ["HTML", "CSS", "JavaScript", "Acessibilidade"],
      "repo": "https://github.com/lucasputon/pagina-pessoal",
      "demo": "https://lucasputon.github.io/pagina-pessoal/",
      "image": null,
      "featured": true,
      "order": 1
    }
  ]
  ```
- **Teste de Aceite:**
  1. Validar sintaxe JSON:
     `Get-Content data/projects.json | ConvertFrom-Json` (deve retornar array com 1 item válido).

---

## FASE 1 — Fundações de Design e Tokens (CSS)

### [x] Tarefa 1.1: Criar `assets/css/tokens.css`
- **Ação:** Criar o arquivo `assets/css/tokens.css` contendo todas as variáveis customizadas especificadas no `SPECS.md` (seções 7.1, 7.2, 7.3, 7.4).
- **Requisitos de conteúdo:**
  - `:root` com tema claro:
    - `--bg: #FBFAF7;`
    - `--surface: #FFFFFF;`
    - `--surface-alt: #F4F1EC;`
    - `--text: #1A1815;`
    - `--text-muted: #6B6560;`
    - `--border: #E4DFD7;`
    - `--border-strong: #CFC7BC;`
    - `--accent: #B4552D;`
    - `--accent-hover: #93431F;`
    - `--accent-soft: #F6E9E2;`
  - `[data-theme="dark"]` com tema escuro:
    - `--bg: #141210;`
    - `--surface: #1C1917;`
    - `--surface-alt: #241F1B;`
    - `--text: #F2EEE8;`
    - `--text-muted: #A39B92;`
    - `--border: #2E2925;`
    - `--border-strong: #433C36;`
    - `--accent: #E08A5F;`
    - `--accent-hover: #F0A47D;`
    - `--accent-soft: #2B1D16;`
  - Fontes de sistema:
    - `--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`
    - `--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;`
  - Escala tipográfica: `--text-xs: 0.75rem;` até `--text-4xl: clamp(2.75rem, 2rem + 3.5vw, 4.5rem);`
  - Espaçamentos `--space-1` (4px) a `--space-10` (128px), raios `--radius-sm` (4px) a `--radius-full` (999px), sombras `--shadow-sm` e `--shadow-md`.
  - Transições: `--ease-out: cubic-bezier(0.22, 0.61, 0.36, 1);`, `--dur-fast: 150ms;`, `--dur-base: 250ms;`, `--dur-reveal: 500ms;`.
- **Teste de Aceite:**
  1. Verificar que nenhum valor `#hex` de cor está fora de `tokens.css`.
  2. Verificar sintaxe CSS sem erros.

---

### [x] Tarefa 1.2: Criar `assets/css/base.css`
- **Ação:** Criar `assets/css/base.css` com reset moderno, estilos padrão, regras de acessibilidade e utilitários.
- **Requisitos de conteúdo:**
  - `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
  - `html { color-scheme: light dark; scroll-behavior: smooth; font-size: 100%; }`
  - `body { font-family: var(--font-sans); background-color: var(--bg); color: var(--text); line-height: 1.65; min-height: 100vh; transition: background-color var(--dur-fast), color var(--dur-fast); }`
  - `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }`
  - Utilitário `.sr-only` (ocultação visual acessível).
  - Utilitário `.skip-link` (link de atalho para o conteúdo visível apenas ao receber foco).
  - Utilitário `.container` (`max-width: 1120px; margin-inline: auto; padding-inline: clamp(20px, 5vw, 48px);`).
  - `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`
- **Teste de Aceite:**
  1. Verificar que o reset não remove outline sem fornecer `:focus-visible`.
  2. Checar que `container` respeita o padding fluido `clamp(20px, 5vw, 48px)`.

---

### [x] Tarefa 1.3: Criar `assets/favicon.svg`
- **Ação:** Criar arquivo `assets/favicon.svg` com monograma autoral "LP".
- **Requisitos:**
  - SVG vetorizado puro, `viewBox="0 0 32 32"`, fundo transparente ou quadrado arredondado sutil, letras `LP` com estilo moderno na cor terracota `#B4552D`.
- **Teste de Aceite:**
  1. Abrir SVG no navegador e certificar que renderiza nítido sem erros de sintaxe XML.

---

## FASE 2 — Scripts Fundamentais e i18n

### [x] Tarefa 2.1: Criar dicionário de tradução `i18n/en.json`
- **Ação:** Criar o arquivo `i18n/en.json` com todas as chaves em inglês requeridas no `SPECS.md` (seção 8).
- **Conteúdo exato a incluir:**
  ```json
  {
    "meta.index.title": "Lucas Puton — IT Technician & Computer Science Student",
    "meta.index.description": "Personal portfolio of Lucas Puton. 4 years of experience in corporate IT support and networks, studying Computer Science.",
    "meta.projects.title": "Projects — Lucas Puton",
    "meta.projects.description": "Projects and applications developed by Lucas Puton.",
    "meta.contact.title": "Contact — Lucas Puton",
    "meta.contact.description": "Get in touch with Lucas Puton for IT and software development opportunities.",
    "meta.404.title": "404 Page Not Found — Lucas Puton",

    "skip.link": "Skip to main content",
    "nav.logo.aria": "Lucas Puton — Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "theme.to_dark": "Switch to dark theme",
    "theme.to_light": "Switch to light theme",
    "lang.toggle_aria": "Mudar para português",
    "lang.toggle_label": "PT",
    "lang.announced": "Language changed to English",

    "home.hero.eyebrow": "IT Technician · Computer Science",
    "home.hero.title": "Lucas Puton",
    "home.hero.lede": "Four years in corporate IT support and network operations. Studying Computer Science and building for the web.",
    "home.hero.cta.projects": "View projects",
    "home.hero.cta.cv": "Download CV",
    "home.hero.meta": "Carazinho, RS · IT Support · HTML, CSS & JavaScript",

    "home.about.title": "About",
    "home.about.p1": "I am an IT Technician graduated from Senac RS and currently pursuing a Bachelor's Degree in Computer Science at Atitus Educação. With over 4 years of continuous hands-on experience as an IT Assistant in corporate environments, I specialize in operational problem solving, hardware maintenance, user support, and corporate networking routines.",
    "home.about.p2": "My objective is to bridge IT infrastructure with computer science and modern web development, applying solid engineering practices to streamline workflows and deliver reliable solutions.",
    "home.about.stack_title": "Core Stack",
    "home.about.stack_frontend": "Frontend",
    "home.about.stack_infra": "Infrastructure & Support",
    "home.about.stack_tools": "Tools & AI",

    "home.journey.title": "Trajectory",
    "home.journey.exp_title": "Experience",
    "home.journey.edu_title": "Education",
    "home.journey.present": "Present",
    "home.journey.in_progress": "In progress",
    "home.journey.completed": "Completed",
    "home.journey.cert_title": "Certifications & Languages",
    "home.journey.languages": "Native Portuguese · Professional English",

    "home.featured.title": "Featured Projects",
    "home.featured.all": "View all →",
    "home.featured.empty": "Projects coming soon.",

    "home.contact.title": "Let's connect",
    "home.contact.lede": "Open to conversations about IT infrastructure, networking, and web development.",

    "projects.title": "Projects",
    "projects.lede": "Software and interfaces built with a focus on usability, accessibility, and clean architecture.",
    "projects.empty.title": "No projects published yet.",
    "projects.empty.cta": "Check my GitHub profile",
    "projects.error.title": "Could not load projects at this time.",
    "projects.error.retry": "Reload page",
    "project.repo": "Repository ↗",
    "project.demo": "Live Demo ↗",
    "project.status.concluido": "Completed",
    "project.status.em-andamento": "In progress",
    "project.status.arquivado": "Archived",

    "contact.title": "Contact",
    "contact.lede": "Have an opportunity, a project to discuss, or just want to chat? Reach out through any of the channels below.",
    "contact.email.label": "Direct Email",
    "contact.channels.title": "Professional Channels",
    "contact.seeking.title": "What I'm looking for",
    "contact.seeking.body": "Internship or Junior roles in IT Support, Infrastructure, or Frontend Development. Available for local positions in Carazinho/RS or remote opportunities.",
    "contact.response": "I typically respond within 2 business days.",
    "contact.projects_prompt": "Prefer to check my work first? → View Projects",

    "footer.rights": "Lucas Puton. All rights reserved.",
    "footer.note": "Built with pure HTML, CSS, and JavaScript.",

    "notfound.title": "404",
    "notfound.heading": "Page not found",
    "notfound.body": "The link you followed may be broken or the page has been moved.",
    "notfound.cta": "Back to Home"
  }
  ```
- **Teste de Aceite:**
  1. Validar sintaxe JSON com `ConvertFrom-Json`.

---

### [x] Tarefa 2.2: Criar `assets/js/theme.js`
- **Ação:** Criar o módulo ES `assets/js/theme.js` para alternância de tema claro/escuro.
- **Requisitos de código:**
  - Exportar funções: `initTheme()`, `toggleTheme()`, `getCurrentTheme()`.
  - Persistência em `localStorage.getItem("lp-theme")`.
  - Se não houver preferência salva, consultar `window.matchMedia("(prefers-color-scheme: dark)").matches`.
  - Atualizar o atributo `data-theme` na tag `<html>`.
  - Atualizar botões de alternância com `aria-pressed` e `aria-label` correto conforme o idioma atual.
- **Teste de Aceite:**
  1. Ao invocar a alternância, o atributo `data-theme` do `<html>` deve alternar entre `"light"` e `"dark"`.
  2. `localStorage["lp-theme"]` deve guardar o estado escolhido.

---

### [x] Tarefa 2.3: Criar `assets/js/i18n.js`
- **Ação:** Criar o módulo ES `assets/js/i18n.js` para internacionalização (PT/EN).
- **Requisitos de código:**
  - Exportar funções: `initI18n()`, `setLanguage(lang)`, `getCurrentLanguage()`, `t(key)`.
  - O texto em português é a fonte primária presente no HTML.
  - Carregar `i18n/en.json` sob demanda (com cache em memória após o primeiro fetch).
  - Suportar atributo `data-i18n="chave"` para atualizar `textContent`.
  - Suportar atributo `data-i18n-attr="atributo:chave;outro:chave"` para atualizar atributos como `aria-label`, `title`, `placeholder`.
  - Persistência em `localStorage["lp-lang"]` e suporte a parâmetro de URL `?lang=en` ou `?lang=pt`.
  - Atualizar `<html lang="pt-BR">` ou `<html lang="en">`, `<title>` e `meta[name="description"]`.
  - Anunciar a troca em um elemento acessível `#a11y-announcer` com `role="status"` e `aria-live="polite"`.
- **Teste de Aceite:**
  1. Mudar o idioma para `"en"` deve substituir o conteúdo dos elementos com `data-i18n` sem recarregar a página e sem perder a posição do scroll.
  2. Elemento `#a11y-announcer` deve receber o texto "Language changed to English".

---

## FASE 3 — Layout Global e Componentes Comuns (CSS)

### [x] Tarefa 3.1: Criar `assets/css/layout.css`
- **Ação:** Criar `assets/css/layout.css` com as regras de estrutura do Header, Main e Footer.
- **Requisitos visuais e técnicos:**
  - Header: `position: sticky; top: 0; z-index: 100; background-color: var(--bg); border-bottom: 1px solid var(--border);`
  - Altura do header: desktop `64px`, mobile `auto` (com duas linhas conforme SPECS 6.1 para telas < 640px).
  - Alinhamento de navegação: monograma `LP` à esquerda com `font-weight: 700`, links de navegação com sublinhado terracota ativo via `aria-current="page"`, toggles de tema e idioma agrupados à direita.
  - Alvos de clique/toque de todos os botões e links de navegação com tamanho mínimo de `44x44px`.
  - Seções: espaçamento vertical `padding-block: clamp(64px, 8vw, 128px);`.
  - Títulos de seção `h2` com traço decorativo terracota à esquerda (`border-left: 2px solid var(--accent); padding-left: var(--space-3);`).
  - Footer: `border-top: 1px solid var(--border); padding-block: var(--space-8);`, alinhamento responsivo em flex/grid.
- **Teste de Aceite:**
  1. Verificar em 375px: o header deve se organizar em duas linhas sem sobreposição e sem provocar barra de rolagem horizontal.

---

### [x] Tarefa 3.2: Criar `assets/css/components.css`
- **Ação:** Criar `assets/css/components.css` contendo os componentes reutilizáveis.
- **Requisitos de componentes:**
  - **Botões (`.btn`):**
    - `.btn-primary`: fundo `var(--text)`, texto `var(--bg)`, hover com opacidade ou fundo `var(--accent)`.
    - `.btn-secondary`: fundo transparente, borda `1px solid var(--border)`, texto `var(--text)`, hover com borda `var(--border-strong)`.
    - Transição suave em 150ms.
  - **Chips / Tags (`.chip`):**
    - Borda de 1px `var(--border)`, fundo `var(--surface-alt)`, texto `var(--text-muted)`, `font-size: var(--text-xs)`, padding `4px 10px`, `border-radius: var(--radius-full)`.
  - **Avatar / Foto (`.profile-avatar`):**
    - Filtro preto e branco `filter: grayscale(1) contrast(1.05); transition: filter var(--dur-base); border-radius: var(--radius-lg); border: 1px solid var(--border);`.
    - Hover: `filter: grayscale(0);`.
  - **Avatar Fallback (`.avatar-placeholder`):**
    - Bloco com proporção 1:1, fundo `var(--accent-soft)`, texto `var(--accent)`, iniciais "LP" em destaque `font-weight: 600`, borda `1px solid var(--border)`.
  - **Card de Projeto (`.project-card`):**
    - Fundo `var(--surface)`, borda `1px solid var(--border)`, `border-radius: var(--radius-md)`, padding `var(--space-5)`, transição de borda em 250ms. Sem sombras pesadas.
    - Hover: eleva borda para `var(--border-strong)`.
  - **Toggles do Header (`.theme-toggle`, `.lang-toggle`):**
    - Botões sem borda, `display: inline-flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; color: var(--text); background: transparent; cursor: pointer;`.
  - **Reveal (`.reveal`):**
    - Estado inicial via JS: `opacity: 0; transform: translateY(12px);`.
    - Estado revelado `.reveal.is-revealed`: `opacity: 1; transform: translateY(0); transition: opacity var(--dur-reveal) var(--ease-out), transform var(--dur-reveal) var(--ease-out);`.
- **Teste de Aceite:**
  1. Verificar que nenhum hover possui animação 3D ou sombra colorida proibida pelas regras de design.

---

## FASE 4 — Fatia Vertical 1: Página Sobre (Home — `index.html`)

### [x] Tarefa 4.1: Criar `assets/js/reveal.js`
- **Ação:** Criar o módulo `assets/js/reveal.js`.
- **Requisitos:**
  - Exportar `initReveal()`.
  - Checar `window.matchMedia("(prefers-reduced-motion: reduce)").matches`. Se verdadeiro, não aplicar classes de ocultação e sair imediatamente.
  - Usar `IntersectionObserver` com `threshold: 0.15` e `rootMargin: "0px 0px -10% 0px"`.
  - Ao interceptar o elemento, adicionar a classe `.is-revealed` e desanexar o observador (`observer.unobserve`).
- **Teste de Aceite:**
  1. Ao rolar a página com movimento ativado, as seções entram suavemente uma única vez.
  2. Com "prefers-reduced-motion: reduce", todo o conteúdo permanece 100% visível desde o carregamento inicial.

---

### [x] Tarefa 4.2: Criar `assets/js/main.js` (Orquestrador)
- **Ação:** Criar o script principal `assets/js/main.js`.
- **Requisitos:**
  - Importar e inicializar: `theme.js`, `i18n.js`, `reveal.js`.
  - Criar função `initCvButton()`:
    - Buscar `data/site.json`.
    - Realizar `fetch(siteData.cv, { method: "HEAD" })`.
    - Se a resposta for `ok` (status 200), remover o atributo `hidden` do botão `#btn-cv` e definir seu `href`.
    - Se falhar ou não existir o PDF, manter o botão oculto com o atributo `hidden`.
  - Renderizar os 3 projetos em destaque na home se houver o container `#featured-projects-container`.
- **Teste de Aceite:**
  1. Se `lucas-puton-cv.pdf` não existir na pasta `assets/cv/`, o botão "Baixar CV" deve permanecer estritamente oculto no DOM sem causar erro 404 perceptível no console de erros graves.

---

### [x] Tarefa 4.3: Criar `assets/css/pages.css`
- **Ação:** Criar `assets/css/pages.css` com estilos específicos para seções de cada página.
- **Requisitos:**
  - Grade assimétrica do Hero da home (7 colunas para texto / 5 colunas para imagem no desktop via `grid-template-columns: 7fr 5fr; gap: var(--space-6);`).
  - Mobile do Hero (<768px): foto posicionada logo abaixo do título `h1` e acima do lede.
  - Linha do tempo da Trajetória: lista `<ol>` com borda vertical de `1px solid var(--border)` e marcadores pontuais.
  - Links de contato na página de contato com animação de sublinhado elegante que expande no hover.
- **Teste de Aceite:**
  1. Verificar em 1280px e 375px se a proporção e alinhamento do Hero correspondem aos wireframes da seção 20 de `SPECS.md`.

---

### [x] Tarefa 4.4: Criar `index.html` (Sobre / Home)
- **Ação:** Criar o arquivo `index.html` na raiz do projeto.
- **Requisitos de estrutura:**
  1. `<head>`:
     - Script inline de ~15 linhas para ler `localStorage["lp-theme"]` ou `prefers-color-scheme` e aplicar imediatamente `data-theme` no `<html>`, evitando qualquer flash de tela branca.
     - `<link rel="stylesheet">` na ordem: `tokens.css`, `base.css`, `layout.css`, `components.css`, `pages.css`.
     - `<script type="module" src="assets/js/main.js"></script>`
     - Meta tags completas (`viewport`, `description`, `canonical`, Open Graph, `theme-color`).
  2. `<body>`:
     - Link de salto acessível `<a href="#conteudo" class="skip-link" data-i18n="skip.link">Pular para o conteúdo</a>`.
     - Região para leitor de tela `<div id="a11y-announcer" class="sr-only" role="status" aria-live="polite"></div>`.
     - `<header class="site-header">` com monograma `LP`, `<nav aria-label="Navegação principal">` com links Sobre (`aria-current="page"`), Projetos, Contato, e os botões de Tema e Idioma.
     - `<main id="conteudo">`:
       - **Seção Hero:** Eyebrow, `h1` "Lucas Puton", Foto em P&B com fallback para iniciais, Lede ("Quatro anos em suporte de TI e redes corporativas..."), CTAs ("Ver projetos" e "Baixar CV" condicional), Meta info ("Carazinho, RS · Suporte de TI · HTML, CSS e JavaScript").
       - **Seção Sobre:** `h2` "Sobre", texto em 2 parágrafos contando a trajetória e formação na Atitus Educação / Senac RS, e coluna lateral com chips da Stack (Frontend, Infraestrutura e Redes, Ferramentas).
       - **Seção Trajetória:** Duas colunas com a experiência profissional (Addizionare Contabilidade, Connectos, Tecnomix) e formação acadêmica (Atitus Educação e Senac RS), além da listagem de certificações e idiomas.
       - **Seção Projetos em Destaque:** `h2` "Projetos em destaque", link "Ver todos →", e container `#featured-projects-container`.
       - **Seção CTA de Contato:** `h2` "Vamos conversar", link direto para `lucasputon0805@hotmail.com`.
     - `<footer>`: Monograma, copyright "© 2026 Lucas Puton", links para GitHub e LinkedIn, e nota "Feito com HTML, CSS e JavaScript puro."
- **Teste de Aceite da Tarefa 4.4:**
  1. Abrir `index.html` no navegador via servidor HTTP local (ex: `npx serve` ou Python `python -m http.server 8000`).
  2. Alternar o tema claro/escuro e verificar persistência ao recarregar a página.
  3. Alternar o idioma para EN e certificar que todos os blocos com `data-i18n` são traduzidos perfeitamente.
  4. Testar navegação por teclado com a tecla `Tab`: o foco deve começar no "Pular para o conteúdo", percorrer o monograma, links do menu, toggles, botões do hero e links do corpo sem pular etapas.

---

## FASE 5 — Fatia Vertical 2: Página de Projetos (`projetos.html`)

### [x] Tarefa 5.1: Criar `assets/js/projects.js`
- **Ação:** Criar o módulo `assets/js/projects.js` para renderizar a lista de projetos.
- **Requisitos de código:**
  - Exportar `loadAndRenderProjects(containerId, isFeaturedOnly = false)`.
  - Realizar `fetch("data/projects.json")` com `try / catch`.
  - Tratar status HTTP não-ok ou erro de rede disparando o estado de erro (`projects.error.title`).
  - Validar schema de cada projeto (descartar itens inválidos com `console.warn` sem quebrar o restante da lista).
  - Ordenação: `featured: true` primeiro, depois `order` crescente, depois `year` decrescente.
  - Se a lista estiver vazia (array `[]`), renderizar o estado vazio oficial (`projects.empty.title` com link para o GitHub).
  - Renderizar usando elemento `<template id="project-card-template">` e atribuir valores com `textContent` para segurança absoluta contra injeção de HTML.
  - Atualizar links de `repo` e `demo` dinamicamente (se `demo` for nulo, ocultar o link de demonstração).
- **Teste de Aceite:**
  1. Chamar com array normal: deve renderizar cards corretamente.
  2. Simular array vazio `[]` no JSON: deve exibir mensagem de estado vazio.
  3. Simular JSON inexistente ou com erro de sintaxe: deve exibir mensagem de erro amigável ao usuário com botão de tentar novamente.

---

### [x] Tarefa 5.2: Criar `projetos.html`
- **Ação:** Criar a página `projetos.html`.
- **Requisitos de marcação:**
  - Mesmo `<head>`, `<header>` e `<footer>` da home, com `aria-current="page"` no link "Projetos".
  - Título da página: `h1` "Projetos", lede descritivo.
  - `<div id="projects-grid" class="projects-grid"></div>`.
  - Fallback `<noscript>` com aviso informativo e link direto para o GitHub de Lucas Puton para quem acessar sem JavaScript.
  - Tag `<template id="project-card-template">` contendo o esqueleto do card conforme especificado em `SPECS.md` 6.3.
- **Teste de Aceite:**
  1. A grade deve exibir 1 coluna em telas < 640px, 2 colunas entre 640px e 1023px, e 3 colunas em telas ≥ 1024px.
  2. Ao desativar o JavaScript no DevTools, a mensagem dentro de `<noscript>` deve aparecer legível e utilizável.

---

## FASE 6 — Fatia Vertical 3: Página de Contato (`contato.html`)

### [x] Tarefa 6.1: Criar `contato.html`
- **Ação:** Criar a página `contato.html`.
- **Requisitos de conteúdo e layout:**
  - `h1` "Contato", lede descritivo.
  - Bloco em destaque com o e-mail real: `<a href="mailto:lucasputon0805@hotmail.com" class="contact-email-link">lucasputon0805@hotmail.com</a>`.
  - Lista de canais com divisores de 1px:
    - LinkedIn: `https://www.linkedin.com/in/lucasputon`
    - GitHub: `https://github.com/lucasputon`
    - E-mail direto: `lucasputon0805@hotmail.com`
  - Bloco "O que estou buscando": texto real sobre disponibilidade para estágio ou início júnior em suporte de TI, infraestrutura de redes ou desenvolvimento frontend, disponível em Carazinho/RS ou remoto.
  - Nota de tempo de resposta: "Respondo em até 2 dias úteis."
  - Link de fechamento para a página de projetos.
- **Teste de Aceite:**
  1. Clicar no link de e-mail deve disparar o manipulador padrão de `mailto:`.
  2. Todos os links externos devem possuir `target="_blank"` e `rel="noopener noreferrer"`.
  3. Validar alternância de tema e idioma em `contato.html`.

---

## FASE 7 — Fatia Vertical 4: Página 404 (`404.html`)

### [x] Tarefa 7.1: Criar `404.html`
- **Ação:** Criar a página de erro `404.html`.
- **Requisitos:**
  - Mesma identidade visual, mesmo header e footer globais.
  - Conteúdo centralizado: `h1` "404", `h2` "Página não encontrada", texto explicativo e botão `.btn-primary` com link para `index.html` ("Voltar ao início").
  - Marcadores `data-i18n` em todos os textos para permitir alternância de idioma também na página de erro.
- **Teste de Aceite:**
  1. Abrir diretamente `404.html` no navegador e checar se layout, tema e traduções operam de forma idêntica às demais páginas.

---

## FASE 8 — Deploy e Automação GitHub Pages

### [x] Tarefa 8.1: Criar `.github/workflows/pages.yml`
- **Ação:** Criar o arquivo de workflow `.github/workflows/pages.yml` para publicação automática no GitHub Pages via GitHub Actions.
- **Conteúdo exato a criar:**
  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: [main]
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  concurrency:
    group: pages
    cancel-in-progress: true

  jobs:
    deploy:
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      steps:
        - name: Checkout repository
          uses: actions/checkout@v4

        - name: Setup Pages
          uses: actions/configure-pages@v5

        - name: Upload artifact
          uses: actions/upload-pages-artifact@v3
          with:
            path: .

        - name: Deploy to GitHub Pages
          id: deployment
          uses: actions/deploy-pages@v4
  ```
- **Teste de Aceite:**
  1. Validar sintaxe YAML do arquivo `pages.yml`.

---

## FASE 9 — Bateria de Testes Finais e Auditoria de Qualidade (QA)

O executor deve rodar esta bateria completa de testes e marcar cada item antes de considerar o projeto concluído:

### [x] Teste 9.1: Teste de Responsividade e Quebra de Layout
- [x] Testar em **375px** (Mobile vertical):
  - Sem scroll horizontal (`document.documentElement.scrollWidth <= window.innerWidth`).
  - Header reorganizado em 2 linhas sem sobreposição.
  - Hero com foto posicionada entre o H1 e o lede.
- [x] Testar em **768px** (Tablet): Layout fluido, alinhamentos intactos.
- [x] Testar em **1280px** (Desktop): Grade de 12 colunas no Hero (7/5) e container centralizado com max-width 1120px.

### [x] Teste 9.2: Matriz dos 4 Estados (Tema × Idioma)
- [x] **Claro + PT:** Todas as cores legíveis, fundo `#FBFAF7`, textos em português.
- [x] **Claro + EN:** Textos em inglês sem cortar containers, tags e meta tags atualizadas.
- [x] **Escuro + PT:** Fundo `#141210`, superfícies `#1C1917`, texto `#F2EEE8`, links terracota `#E08A5F`.
- [x] **Escuro + EN:** Paridade completa de conteúdo e estilos.

### [x] Teste 9.3: Navegação Exclusiva por Teclado e Acessibilidade
- [x] O primeiro `Tab` deve focar o link "Pular para o conteúdo" (`.skip-link`) e torná-lo visível.
- [x] Pressionar `Enter` no skip-link deve rolar a tela diretamente para `<main id="conteudo">`.
- [x] Indicador `:focus-visible` claramente visível em todos os links e botões (anel de 2px terracota com offset de 2px).
- [x] Nenhuma armadilha de foco (o teclado deve navegar livremente do topo até o footer).
- [x] Botões de tema e idioma acionáveis via tecla `Space` e `Enter`.

### [x] Teste 9.4: Respeito a `prefers-reduced-motion`
- [x] Ativar no DevTools (ou sistema operacional) a simulação de `prefers-reduced-motion: reduce`.
- [x] Recarregar a página e constatar que todas as animações e transições são suprimidas e o conteúdo é exibido instantaneamente.

### [x] Teste 9.5: Funcionamento sem JavaScript
- [x] Desativar JavaScript no navegador.
- [x] Verificar que `index.html`, `projetos.html` e `contato.html` são perfeitamente legíveis em português.
- [x] Na página de projetos, verificar se o aviso do `<noscript>` é exibido corretamente direcionando para o GitHub.

### [x] Teste 9.6: Auditoria de Requisições e Integridade
- [x] Abrir painel Network do DevTools com cache desativado e recarregar cada página.
- [x] Constatar: **ZERO requisições externas** (sem chamadas a Google Fonts, CDNs, analytics ou scripts de terceiros).
- [x] Constatar: **ZERO erros no console** (`console.error`).
- [x] Verificar que não há links quebrados (`404`) para arquivos CSS, JS ou imagens.
