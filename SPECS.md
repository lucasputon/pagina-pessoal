# SPECS.md — Portfólio pessoal · Lucas Puton

> **Status:** planejamento aprovado na conversa inicial. Nenhum arquivo do site foi criado.
> **Documento complementar:** `AGENTS.md` (processo, padrões de código e regras invioláveis).

---

## 1. Resumo

Site pessoal estático, bilíngue (PT/EN), com tema claro e escuro, publicado no GitHub Pages em `https://lucasputon.github.io/pagina-pessoal/`.

Objetivo: apresentar Lucas Puton — técnico em informática com 4 anos de experiência em suporte e redes, estudante de Ciência da Computação — como alguém que entende infraestrutura e constrói para a web; mostrar projetos com clareza e facilitar contato. Aparência de trabalho autoral, não de template.

### Decisões fechadas

| Dimensão | Decisão |
| --- | --- |
| Stack | HTML + CSS + JS puro, zero build, zero dependência |
| Idiomas | PT-BR padrão + EN, com troca instantânea |
| Temas | Claro e escuro, preferência salva |
| Estética | Minimalismo editorial, neutros quentes, acento terracota |
| Tipografia | Stack do sistema (sem webfont) |
| Navegação | 3 páginas: Sobre (home), Projetos, Contato |
| Foto | Foto de perfil em P&B como elemento de identidade |
| Projetos | `data/projects.json` renderizado por JS, preenchido depois |
| CV | Botão condicional: só aparece se o PDF existir |
| Contato | Links diretos (e-mail, GitHub, LinkedIn). Sem formulário |
| Extras | Toggle de tema, toggle de idioma, reveal no scroll |
| Deploy | GitHub Actions → GitHub Pages |

---

## 2. Objetivos e não-objetivos

### Objetivos

1. Comunicar em menos de 10 segundos: quem é, o que está aprendendo, o que já construiu.
2. Fazer o visitante abrir pelo menos um projeto ou clicar em contato.
3. Funcionar impecavelmente em celular, inclusive em conexão lenta.
4. Ser fácil de manter por um iniciante: editar um JSON para adicionar projeto, um JSON para traduzir.
5. Passar credibilidade: sem exagero, sem conteúdo inventado.

### Não-objetivos (v1)

- Blog, artigos ou notas.
- Formulário de contato, backend ou banco de dados.
- Área administrativa, CMS ou login.
- Página individual de projeto (cards levam ao repositório/demo).
- Filtros e busca de projetos.
- Analytics, cookies, rastreamento.
- Comentários, newsletter, currículo interativo.
- Domínio próprio (previsto para depois, sem bloquear a v1).

---

## 3. Público e posicionamento

**Público primário:** recrutadores e líderes técnicos avaliando estágio/júnior.
**Público secundário:** colegas, professores, comunidade dev.

**O que o site precisa provar:** organização, domínio dos fundamentos (HTML semântico, CSS bem estruturado, JS sem framework), cuidado com detalhe e capacidade de terminar o que começa.

**Como provar isso:** o próprio site é a peça principal. Código limpo, acessível, rápido e bilíngue vale mais que qualquer texto sobre "paixão por tecnologia".

**Tom:** direto, honesto, curioso. Profissional de TI em evolução, que constrói — não sênior que se descreve.

### 3.1 Perfil factual (fonte: `Profile.pdf`)

Dados extraídos do currículo em PDF na raiz do repositório. **São a fonte da verdade do conteúdo** e substituem placeholders anteriores.

| Campo | Valor |
| --- | --- |
| Nome | Lucas Puton |
| Headline | Técnico em Informática · Cursando Ciências da Computação |
| Local | Carazinho, Rio Grande do Sul, Brasil |
| E-mail | lucasputon0805@hotmail.com |
| LinkedIn | https://www.linkedin.com/in/lucasputon |
| GitHub | https://github.com/lucasputon |
| Idiomas | Português (nativo) · Inglês (profissional) |

**Experiência**

| Empresa | Cargo | Período | Local |
| --- | --- | --- | --- |
| Addizionare Contabilidade | Assistente de TI | ago 2022 – atual | Carazinho, RS |
| Connectos | Técnico de Suporte de Informática | jun 2022 – jul 2022 | Carazinho, RS |
| Tecnomix Informática | Técnico de TI | abr 2021 – jun 2021 | Rio Grande do Sul |

**Formação**

| Instituição | Curso | Situação |
| --- | --- | --- |
| Atitus Educação | Bacharelado em Ciências da Computação | em andamento (PDF indica ago/2026 — confirmar se é início ou conclusão) |
| Senac RS | Técnico em Informática | concluído (2019–2021) |

**Competências e certificações**

- Competências: segurança da informação, montagem de hardware, resolução de problemas, suporte a usuários, rotinas de rede.
- Certificações: Formação Excel · English Course · PoliSummit 2026 · Informática Fundamental Compacto · Capacita+: Construa com o Gemini.

**Privacidade:** `Profile.pdf` é insumo interno. Entra no `.gitignore` e **não** é publicado no site. Apenas os dados acima aparecem no site.

---

## 4. Identidade e princípios de design

**Conceito:** papel, tinta e terracota. Um caderno de projeto bem diagramado.

| Princípio | Implicação prática |
| --- | --- |
| Restrição | 1 acento, 1 família tipográfica, 1 grade |
| Hierarquia | Tamanho, peso e espaço — nunca caixas coloridas |
| Calor | Neutros levemente quentes, foto em P&B |
| Respiro | Muito espaço em branco; seções largas no desktop |
| Detalhe | Bordas de 1px, transições curtas, alinhamentos exatos |
| Honestidade | Conteúdo real; placeholder é declarado como placeholder |

**Assinatura visual:** foto de perfil em preto e branco que ganha cor no hover; traço vertical terracota de 2px marcando o início de cada seção.

---

## 5. Arquitetura da informação

```
Sobre (index.html) ──► Projetos ──► Contato
      ▲                    │            │
      └────────────────────┴────────────┘
```

- **Sobre** é a home. Apresenta identidade, contexto e 3 projetos em destaque.
- **Projetos** lista todos os projetos em grade.
- **Contato** concentra canais e o que está sendo buscado.
- **404** página de erro bilíngue com retorno à home.

**Navegação principal:** logo/monograma (vai para a home) · Sobre · Projetos · Contato · [tema] · [PT/EN].

**Fluxos-chave**

1. *Recrutador com 60s:* chega na home → lê o hero → vê 3 projetos → clica em "Ver todos" ou "Contato".
2. *Avaliação técnica:* abre um projeto → vai ao repositório → volta → abre o LinkedIn.
3. *Visitante anglófono:* troca para EN no header → continua na mesma página, no mesmo ponto de scroll.

---

## 6. Especificação por página

### 6.1 Header (comum)

- Fixo no topo (`position: sticky`), fundo sólido na cor de fundo, borda inferior de 1px.
- Altura 64px no desktop, 56px no mobile.
- Esquerda: monograma `LP` (texto, 700, tracking -0.02em) envolvido por link para `index.html` com `aria-label="Lucas Puton — início"`.
- Centro/direita: links Sobre, Projetos, Contato. Ativo com `aria-current="page"` + sublinhado terracota de 2px.
- Extrema direita: botão de tema (ícone sol/lua, 20px, SVG inline) e botão de idioma (`PT`/`EN`, texto, mostrando o idioma **de destino**).
- Mobile (<640px): duas linhas — linha 1 com monograma e os dois toggles; linha 2 com os 3 links, distribuídos, 14px.
- Alvos de toque ≥44×44px.

### 6.2 Sobre — `index.html`

Ordem das seções:

**a) Hero (assimétrico, 7/5)**

| Elemento | Especificação |
| --- | --- |
| Eyebrow | 12px, uppercase, tracking 0.08em, muted. Texto: `Técnico em Informática · Ciências da Computação` |
| H1 | `Lucas Puton`, `clamp(2.75rem, 6vw, 4.5rem)`, peso 600, tracking -0.03em, altura de linha 1.02 |
| Lede | 2 linhas, máximo 46ch, 18–20px, muted. Texto aprovado: `Quatro anos em suporte de TI e redes corporativas. Estudando Ciência da Computação e construindo para a web.` |
| CTAs | Primário: `Ver projetos` (fundo tinta, texto papel). Secundário: `Baixar CV` (contorno, oculto se não houver PDF) |
| Meta | Linha 13px muted com `Carazinho, RS` · `Suporte de TI` · `HTML, CSS e JavaScript` |
| Foto | Coluna direita, proporção 1:1, `border-radius: 12px`, P&B, borda 1px, hover volta à cor em 250ms |

- Sem imagem: monograma grande em bloco `accent-soft` com as iniciais. Nunca quebrar o layout.
- No mobile, a foto vem **depois** do H1 e antes do lede, ocupando largura total com proporção 4:3.
- Reveal: eyebrow, h1, lede, CTAs e foto entram com fade-up escalonado (60ms) apenas no primeiro carregamento.

**b) Sobre**

- Título de seção `Sobre` (h2) com traço terracota à esquerda.
- Duas colunas no desktop (texto 7/12, stack 5/12), empilhadas no mobile.
- Texto: 2–3 parágrafos, medida 60–68ch, 17px/1.7. Primeiro parágrafo pode ter 19px.
- Coluna direita: blocos `Stack` com chips de texto agrupados (Front-end, Infraestrutura, Ferramentas). Chips sem logo, borda 1px, 13px.
- Texto definido a partir do perfil (ver 3.1) e refinado para o site. Ajustes de voz são permitidos; fatos novos, não. Pendência: aprovação do dono.

**c) Trajetória**

- h2 `Trajetória` com traço terracota.
- Duas colunas no desktop: `Experiência` (7/12) e `Formação` (5/12). Empilhadas no mobile.
- Experiência em `<ol>` sem marcadores, com linha vertical de 1px ligando os itens:
  - Cargo em 16px peso 600; empresa em 15px; período e local em 13px muted.
  - `Addizionare Contabilidade` — Assistente de TI — `ago 2022 — atual` — Carazinho, RS
  - `Connectos` — Técnico de Suporte de Informática — `jun 2022 — jul 2022` — Carazinho, RS
  - `Tecnomix Informática` — Técnico de TI — `abr 2021 — jun 2021` — Rio Grande do Sul
- Formação:
  - `Atitus Educação` — Bacharelado em Ciências da Computação — `em andamento`
  - `Senac RS` — Técnico em Informática — `2019 — 2021`
- Abaixo, em 13px muted: certificações separadas por `·` e idiomas (`Português nativo · Inglês profissional`).
- Sem logos de empresa, sem descrição longa por cargo, sem barra de progresso.

**d) Projetos em destaque**

- Cabeçalho da seção: h2 `Projetos` + link `Ver todos →` à direita.
- Máximo 3 cards com `featured: true` (ordenados por `order`).
- Reutiliza o mesmo componente `.project-card` da página de projetos.
- Estado vazio: texto curto `Projetos chegando em breve.` + link para o GitHub.

**e) CTA de contato**

- Faixa com borda superior de 1px, sem fundo colorido.
- h2 `Vamos conversar`, uma linha de contexto (`Aberto a conversas sobre TI, infraestrutura e desenvolvimento.`), link de e-mail `lucasputon0805@hotmail.com` em 20–24px com sublinhado terracota.

**f) Footer (comum)**

- Monograma + `© 2026 Lucas Puton`.
- Links: GitHub, LinkedIn, e-mail.
- Nota discreta: `Feito com HTML, CSS e JavaScript.` (13px, muted).

### 6.3 Projetos — `projetos.html`

- Cabeçalho da página: h1 `Projetos`, lede de uma linha, contador opcional (`3 projetos`).
- Grade: 1 coluna <640px · 2 colunas 640–1023px · 3 colunas ≥1024px · `gap: 24px`.
- Card:
  - Imagem 16:10 no topo (ou bloco com iniciais em `accent-soft`), `border-radius: 8px` no topo.
  - Título 18px peso 600; ano e status em 12px muted.
  - Resumo em 2 linhas (`line-clamp: 2`), 15px.
  - Tags em chips de 12px.
  - Rodapé do card: `Repositório ↗` e `Ver demo ↗` (quando existirem), 14px, terracota, com `rel="noopener"`.
  - Card inteiro com borda 1px; hover eleva a borda para `--border-strong` e a imagem ganha `scale(1.02)` em 250ms. Sem sombra.
- Ordenação: `featured` primeiro, depois `order` crescente, depois ano decrescente.
- Estado vazio: bloco centralizado com `Nenhum projeto publicado ainda.` + link `Ver meu GitHub`. Sem ilustração.
- Estado de erro (JSON falhou): `Não foi possível carregar os projetos.` + link para o GitHub + sugestão de recarregar.

### 6.4 Contato — `contato.html`

- h1 `Contato`, lede de uma linha, medida 46ch.
- Bloco principal: link de e-mail grande (24–32px), com sublinhado que anima da esquerda para a direita no hover.
- Lista de canais: GitHub, LinkedIn, e-mail. Cada item: rótulo muted + valor + seta. Linhas separadas por borda 1px.
- Bloco `O que estou buscando`: 2–3 linhas (estágio/júnior em front-end, remoto ou presencial em [cidade]).
- Nota de tempo de resposta: `Respondo em até 2 dias úteis.` (ajustável).
- Sem formulário. Sem mapa. Sem embed.
- Fechamento: `Prefere ver meu trabalho primeiro? → Projetos`.

### 6.5 404 — `404.html`

- Centralizado verticalmente, h1 `404`, texto `Esta página não existe.` / `This page doesn't exist.`, link `Voltar ao início`.
- Mesmo header e footer.

---

## 7. Sistema de design

### 7.1 Cores

**Claro**

| Token | Valor | Uso |
| --- | --- | --- |
| `--bg` | `#FBFAF7` | Fundo da página |
| `--surface` | `#FFFFFF` | Cards, header |
| `--surface-alt` | `#F4F1EC` | Blocos de destaque, foto fallback |
| `--text` | `#1A1815` | Texto principal |
| `--text-muted` | `#6B6560` | Texto secundário (contraste ~5,6:1) |
| `--border` | `#E4DFD7` | Separadores |
| `--border-strong` | `#CFC7BC` | Hover de card |
| `--accent` | `#B4552D` | Links, botões (contraste ~5,0:1) |
| `--accent-hover` | `#93431F` | Hover |
| `--accent-soft` | `#F6E9E2` | Chips, fallback de imagem |

**Escuro**

| Token | Valor | Uso |
| --- | --- | --- |
| `--bg` | `#141210` | Fundo |
| `--surface` | `#1C1917` | Cards, header |
| `--surface-alt` | `#241F1B` | Blocos |
| `--text` | `#F2EEE8` | Texto principal |
| `--text-muted` | `#A39B92` | Secundário (contraste ~6,8:1) |
| `--border` | `#2E2925` | Separadores |
| `--border-strong` | `#433C36` | Hover |
| `--accent` | `#E08A5F` | Links (contraste ~7,0:1) |
| `--accent-hover` | `#F0A47D` | Hover |
| `--accent-soft` | `#2B1D16` | Chips |

Regras: cor só por token; nenhum `#hex` em `components.css`; verificar contraste de qualquer par novo antes de commitar.

### 7.2 Tipografia

Stack único do sistema, com serifada apenas para citação/ênfase:

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
```

| Token | Tamanho / linha | Uso |
| --- | --- | --- |
| `--text-xs` | 12px / 1.4 | Eyebrow, meta, tags |
| `--text-sm` | 14px / 1.5 | Nav, rodapé de card |
| `--text-base` | 16px / 1.65 | Corpo padrão |
| `--text-lg` | 18px / 1.6 | Lede, cards |
| `--text-xl` | `clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)` | Subtítulos |
| `--text-2xl` | `clamp(1.5rem, 1.3rem + 1vw, 2rem)` | h2 |
| `--text-3xl` | `clamp(2rem, 1.6rem + 2vw, 3rem)` | h1 de página |
| `--text-4xl` | `clamp(2.75rem, 2rem + 3.5vw, 4.5rem)` | H1 do hero |

Pesos: 400 corpo, 500 ênfase, 600 títulos, 700 só no monograma.
Tracking: -0.03em no H1 do hero, -0.02em nos demais títulos, 0.08em em eyebrow.

### 7.3 Espaço, grade e forma

```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
--space-9: 96px;  --space-10: 128px;
--radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-full: 999px;
--shadow-sm: 0 1px 2px rgb(26 24 21 / 0.06);
--shadow-md: 0 8px 24px -12px rgb(26 24 21 / 0.18);
```

- Container: `max-width: 1120px`, padding lateral `clamp(20px, 5vw, 48px)`.
- Seção: `padding-block: clamp(64px, 10vw, 128px)`.
- Grid de 12 colunas só no hero e na seção Sobre; o resto usa `grid` com `gap`.
- Breakpoints: 640px, 768px, 1024px (mobile-first).
- Medida de texto: `max-width: 65ch`.

### 7.4 Movimento

```css
--ease-out: cubic-bezier(0.22, 0.61, 0.36, 1);
--dur-fast: 150ms; --dur-base: 250ms; --dur-reveal: 500ms;
```

- Reveal: `opacity 0 → 1`, `translateY(12px) → 0`, 500ms, stagger 60ms, via `IntersectionObserver` (threshold 0.15, `rootMargin: 0 0 -10% 0`), dispara uma vez.
- Header: sem animação de esconder/mostrar.
- Hover: `--dur-fast` para cor, `--dur-base` para imagem e borda.
- Tudo dentro de `@media (prefers-reduced-motion: no-preference)`; com `reduce`, conteúdo visível imediatamente.
- Sem animação no que está acima da dobra no primeiro paint (evita "pisca" e piora o LCP).

### 7.5 Iconografia e imagens

- Ícones: SVG inline, 20–24px, `stroke-width: 1.5`, `currentColor`. Apenas sol, lua, seta externa.
- Foto de perfil: 800×800, P&B, `filter: grayscale(1) contrast(1.05)`, hover `grayscale(0)`.
- Imagens de projeto: 800×500 (16:10), WebP, ≤120KB, `loading="lazy"`, `width`/`height` declarados.
- Sem imagem → bloco `accent-soft` com iniciais do projeto, 32px, peso 600.
- Favicon: SVG com monograma `LP` em tinta sobre fundo transparente.

---

## 8. Bilinguismo

| Aspecto | Decisão |
| --- | --- |
| Padrão | Português |
| Fonte PT | Texto no HTML |
| Fonte EN | `i18n/en.json` (chaves achatadas) |
| Marcadores | `data-i18n="chave"`, `data-i18n-attr="attr:chave"` |
| Persistência | `localStorage["lp-lang"]` (`pt` \| `en`) |
| URL | `?lang=en` aplica EN no carregamento (compartilhável) |
| Atualização | `<html lang>`, `<title>`, `meta[name=description]` e `aria-label` do botão |
| Fallback | Chave ausente → mantém PT + `console.warn` |
| Sem JS | Permanece em PT, site completo |

**Comportamento do botão:** mostra o idioma de destino (`EN` quando está em PT). `aria-label` completo: `Mudar para inglês` / `Switch to Portuguese`. Ao trocar, anuncia em `role="status"` oculto: `Idioma alterado para inglês`.

**Regras de conteúdo:** EN não é tradução literal — é reescrita natural, mesma extensão aproximada (evitar layout quebrando por frase 30% maior). Títulos de projeto permanecem próprios, mas resumo e tags traduzem.

**Chaves previstas (amostra):**

```
nav.about · nav.projects · nav.contact
theme.toggle · lang.toggle · lang.announce
home.hero.eyebrow · home.hero.lede · home.hero.cta.projects · home.hero.cta.cv
home.hero.meta · home.about.title · home.featured.title · home.featured.all
home.contact.title · home.contact.lede
projects.title · projects.lede · projects.empty.title · projects.empty.cta
projects.error.title · project.repo · project.demo · project.year
contact.title · contact.lede · contact.email.label · contact.channels.title
contact.seeking.title · contact.seeking.body · contact.response
footer.note
notfound.title · notfound.body · notfound.cta
meta.index.title · meta.index.description · meta.projects.title · meta.contact.title
```

---

## 9. Tema claro/escuro

- `data-theme="light" | "dark"` no `<html>`.
- Primeiro acesso: segue `prefers-color-scheme`. Depois disso, a escolha explícita do usuário manda.
- Persistência: `localStorage["lp-theme"]`.
- Script inline de ~15 linhas no `<head>` (antes do CSS) aplica o tema para evitar flash. É a única exceção à regra de JS externo.
- Botão: `aria-pressed` + ícone sol/lua + `aria-label` (`Ativar tema escuro` / `Ativar tema claro`).
- Sem transição global de cores na troca (evita "borrão"); exceção: `background-color` e `color` com 150ms em `body`.
- `color-scheme: light dark` declarado para scrollbar e controles nativos.
- Os dois temas têm paridade completa: nenhum elemento pode existir só em um.

---

## 10. Modelo de dados

### 10.1 `data/site.json`

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
    { "id": "github", "label": "GitHub", "url": "https://github.com/lucasputon" },
    { "id": "linkedin", "label": "LinkedIn", "url": "https://www.linkedin.com/in/lucasputon" }
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

- `email` e `url` nulos **não** renderizam o canal (nada de link vazio ou `#`).
- Alterar identidade e links não deve exigir tocar em HTML.

### 10.2 `data/projects.json`

```json
[
  {
    "slug": "exemplo-projeto",
    "title": { "pt": "Nome do projeto", "en": "Project name" },
    "summary": {
      "pt": "Uma frase explicando o problema e a solução. Até 140 caracteres.",
      "en": "One sentence about the problem and the solution. Up to 140 chars."
    },
    "year": 2026,
    "status": "concluido",
    "tags": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/lucasputon/exemplo",
    "demo": null,
    "image": "assets/img/projects/exemplo-projeto.webp",
    "featured": true,
    "order": 1
  }
]
```

| Campo | Tipo | Obrigatório | Regra |
| --- | --- | --- | --- |
| `slug` | string | sim | kebab-case, único; usado no nome da imagem |
| `title.pt/en` | string | sim | até 60 caracteres |
| `summary.pt/en` | string | sim | até 140 caracteres, sem ponto final duplicado |
| `year` | number | sim | 4 dígitos |
| `status` | enum | sim | `concluido` \| `em-andamento` \| `arquivado` |
| `tags` | string[] | sim | 1–4 itens, sem duplicata |
| `repo` | string \| null | não | URL `https://github.com/...` |
| `demo` | string \| null | não | URL `https://` |
| `image` | string \| null | não | caminho relativo; ausente → bloco com iniciais |
| `featured` | boolean | não | padrão `false`; máximo 3 na home |
| `order` | number | não | menor primeiro; padrão 999 |

**Validação em runtime:** item inválido é ignorado com `console.warn` (não derruba a lista). Se todos falharem ou o fetch falhar, exibir estado de erro. `year` e `status` são renderizados como texto, nunca em `innerHTML`.

---

## 11. Arquitetura técnica

### 11.1 Arquivos e responsabilidades

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Sobre/home, PT no markup |
| `projetos.html` | Lista de projetos, container + template do card |
| `contato.html` | Canais e texto de busca |
| `404.html` | Erro |
| `assets/css/tokens.css` | Custom properties (cor, tipo, espaço, movimento) |
| `assets/css/base.css` | Reset, tipografia, focus, utilitários (`.sr-only`, `.container`) |
| `assets/css/layout.css` | Header, footer, grids, seções |
| `assets/css/components.css` | Botões, chips, cards, toggles, reveal, estados |
| `assets/css/pages.css` | Ajustes por página |
| `assets/js/theme.js` | Ler/salvar tema, alternar, atualizar `aria` |
| `assets/js/i18n.js` | Carregar `en.json`, aplicar PT/EN, persistir, atualizar meta |
| `assets/js/projects.js` | Fetch, validar, ordenar, renderizar, estados vazio/erro |
| `assets/js/reveal.js` | `IntersectionObserver`, respeitar reduced-motion |
| `assets/js/main.js` | Orquestra init, carrega `site.json`, CV condicional |
| `data/site.json` | Identidade e links |
| `data/projects.json` | Projetos |
| `i18n/en.json` | Traduções EN |
| `.github/workflows/pages.yml` | Deploy |

### 11.2 Ordem de carregamento

```html
<head>
  <script>/* tema: evita flash */</script>
  <link rel="stylesheet" href="assets/css/tokens.css">
  <link rel="stylesheet" href="assets/css/base.css">
  <link rel="stylesheet" href="assets/css/layout.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <link rel="stylesheet" href="assets/css/pages.css">
  <script type="module" src="assets/js/main.js"></script>
</head>
```

- Sem `@import` de CSS (bloqueia render em cascata).
- `main.js` importa os módulos; todos os `fetch` de JSON são paralelos com `Promise.allSettled`.
- Falha de `site.json` não impede o site: usa os valores já presentes no HTML.

### 11.3 Progressive enhancement

| Recurso | Sem JS |
| --- | --- |
| Conteúdo PT | Completo e visível |
| Navegação | Funciona (links relativos) |
| Tema | Segue `prefers-color-scheme` (sem toggle) |
| Idioma | Fica em PT |
| Projetos | `<noscript>` com aviso e link para o GitHub |
| CV | Botão visível apenas se o link estiver no HTML (fallback: escondido por `hidden` + JS revela) |
| Reveal | Conteúdo visível (classe aplicada só via JS) |

### 11.4 Botão de CV condicional

1. `site.json` traz `cv: "assets/cv/lucas-puton-cv.pdf"` (ou `null`).
2. `main.js` faz `fetch(url, { method: "HEAD" })` uma vez.
3. `ok` → remove `hidden` do botão e define `download`.
4. `!ok` ou `null` → mantém `hidden` e registra `console.info`.
5. Enquanto verifica, o botão fica `hidden` (evita 404 visível).

### 11.5 Caminhos

- Tudo relativo: `assets/...`, `projetos.html`, `data/projects.json`.
- Proibido `/assets`, `~/`, `./../` desnecessário.
- `fetch("data/projects.json")` resolve relativo à página; todas as páginas ficam na raiz, então o caminho é o mesmo.

---

## 12. Acessibilidade (WCAG 2.1 AA)

- Skip link (`Pular para o conteúdo`) como primeiro elemento focável.
- Landmarks: `header`, `nav[aria-label]`, `main#conteudo`, `footer`.
- Um `<h1>` por página; hierarquia sem saltos.
- Foco visível: anel de 2px `--accent` com `offset: 2px`; nunca `outline: none` sem substituto.
- Contraste mínimo 4,5:1 em texto e 3:1 em elementos gráficos (tokens já validados; qualquer par novo precisa de checagem).
- Alvos de toque ≥44×44px (nav, toggles, links de card).
- Botões de tema e idioma com `aria-pressed`/`aria-label` corretos e atualizados via JS.
- Ícones decorativos com `aria-hidden="true"`.
- `alt` significativo na foto; `alt=""` em elementos decorativos.
- Troca de idioma atualiza `lang` e anuncia em região `role="status"`.
- Movimento desligado em `prefers-reduced-motion: reduce`.
- Zoom de 200% sem perda de conteúdo ou scroll horizontal.
- Cards: o link principal não deve gerar dois links para o mesmo destino na mesma linha; usar `aria-labelledby` quando necessário.
- Sem armadilha de teclado; ordem de foco segue a ordem visual.

---

## 13. Performance

| Métrica | Limite |
| --- | --- |
| Peso total da home (sem imagens) | ≤ 120KB |
| CSS total | ≤ 24KB |
| JS total | ≤ 16KB |
| Imagem de perfil | ≤ 150KB |
| Imagem de projeto | ≤ 120KB cada |
| LCP em 4G simulado | < 1,8s |
| CLS | < 0,02 |
| Lighthouse (Perf/A11y/BP/SEO) | ≥ 95 em todas |

Táticas: zero webfont, zero biblioteca, CSS crítico já no `<head>`, imagens com dimensões declaradas e `lazy`, SVG inline, `?v=1` em CSS/JS para cache-busting manual, sem dependência de terceiros.

---

## 14. SEO e metadados (baseline)

- `<title>` e `meta[name=description]` únicos por página e por idioma.
- `<html lang="pt-BR">` / `en`, `<meta charset="utf-8">`, viewport.
- `link rel="canonical"` apontando para a URL publicada.
- `og:title`, `og:description`, `og:type`, `og:locale`, `og:url`.
- Favicon SVG + `theme-color` para claro e escuro.
- `robots`: index, follow.
- Estrutura semântica e texto real (sem conteúdo escondido).
- **Fora de escopo v1:** sitemap.xml, imagem Open Graph dedicada, JSON-LD, `hreflang` recíproco.

---

## 15. Deploy — GitHub Pages

1. Repositório já criado: `lucasputon/pagina-pessoal` (público, vazio).
2. Settings → Pages → Source: **GitHub Actions**.
3. Workflow `.github/workflows/pages.yml`:

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
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. URL final: `https://lucasputon.github.io/pagina-pessoal/`.
5. Sem `CNAME` nesta fase. Domínio próprio no futuro: registrar, adicionar `CNAME` na raiz e configurar DNS (A/AAAA ou CNAME para `lucasputon.github.io`).
6. Cache: GitHub Pages serve com cache curto; ao alterar CSS/JS, subir `?v=N`.
7. `404.html` na raiz é servido automaticamente pelo Pages.

---

## 16. Critérios de aceite (v1)

- [ ] As 4 páginas existem e navegam entre si com caminhos relativos, publicadas em `/pagina-pessoal/`.
- [ ] Header com 3 links, toggle de tema e toggle de idioma, funcionando em 375px.
- [ ] Tema claro e escuro completos; escolha persiste após recarregar; sem flash no carregamento.
- [ ] PT e EN completos, sem string não traduzida; troca mantém a página e o scroll; `lang` atualizado.
- [ ] `projects.json` vazio exibe estado vazio; com itens, renderiza cards ordenados; JSON inválido exibe estado de erro.
- [ ] Botão de CV ausente quando o PDF não existe e presente quando existe.
- [ ] Foto ausente cai no monograma sem quebrar layout.
- [ ] Site utilizável sem JS (PT, navegação, aviso de projetos).
- [ ] Navegação por teclado completa, com foco visível e skip link.
- [ ] Contraste AA em todos os pares cor/fundo nos dois temas.
- [ ] Reveal desativado com `prefers-reduced-motion: reduce`; conteúdo visível.
- [ ] Zero requisições externas no painel Network.
- [ ] Lighthouse ≥ 95 nas quatro categorias, mobile.
- [ ] Nenhum placeholder de conteúdo visível na publicação.

---

## 17. Testes e QA

| Dimensão | Casos |
| --- | --- |
| Viewports | 375, 768, 1280, 1440 |
| Estados | 4 combinações tema × idioma em cada página |
| Navegadores | Chrome, Firefox, Safari (iOS) e Edge, últimas 2 versões |
| Teclado | Tab do início ao fim, skip link, foco nos toggles, sem armadilha |
| Leitor de tela | Smoke test com NVDA ou VoiceOver na home |
| Sem JS | Navegação e conteúdo PT; aviso de projetos |
| Rede | Throttle 3G, imagens lazy, sem CLS |
| Zoom | 200% sem corte |
| Conteúdo | `projects.json` vazio, 1 item, 8 itens, item inválido |
| Erros | `projects.json` 404, `en.json` 404, imagem quebrada |

---

## 18. Decisões e insumos

| # | Item | Status | Valor / Resolução |
| --- | --- | --- | --- |
| 1 | E-mail público | Resolvido (Profile.pdf) | `lucasputon0805@hotmail.com` |
| 2 | URL do LinkedIn | Resolvido (Profile.pdf) | `https://www.linkedin.com/in/lucasputon` |
| 3 | Cidade | Resolvido (Profile.pdf) | `Carazinho, Rio Grande do Sul, Brasil` |
| 4 | Stack real | Resolvido (Profile.pdf) | Suporte TI, Redes, Hardware, Segurança, HTML, CSS, JS |
| 5 | Biografia | Resolvido (Profile.pdf) | Foco em infraestrutura de TI + Ciência da Computação |
| 6 | Foto de perfil | Pendente | Fornecer imagem 800×800 P&B; enquanto ausente, usa monograma LP |
| 7 | PDF do CV | Em standby | `Profile.pdf` é insumo interno; botão CV condicional fica oculto até inclusão de PDF público |
| 8 | Projetos reais | Em andamento | Iniciar com o projeto do próprio portfólio |
| 9 | Disponibilidade | Resolvido (Profile.pdf) | Aberto a oportunidades em TI e Dev (Carazinho/RS ou remoto) |
| 10 | Texto EN revisado | Resolvido | Estruturado no `i18n/en.json` e `TODO.md` |

---

## 19. Roadmap pós-v1

1. Domínio próprio + `CNAME`.
2. Imagem Open Graph e sitemap.
3. Filtro por tag na página de projetos.
4. Página individual de projeto.
5. Blog/notas em Markdown.
6. Formulário de contato via serviço externo.
7. `hreflang` e URLs por idioma (`/en/`).

---

## 20. Referências de wireframe

**Home — desktop**

```
┌───────────────────────────────────────────────────────┐
│ LP            Sobre  Projetos  Contato        [☾] [EN]│
├───────────────────────────────────────────────────────┤
│  Estudante · Desenvolvimento web                      │
│                                                       │
│  Lucas Puton                          ┌────────────┐  │
│  Uma linha de posicionamento,         │   foto     │  │
│  no máximo duas.                      │   1:1 P&B  │  │
│                                       └────────────┘  │
│  [ Ver projetos ]  [ Baixar CV ]                      │
│  São Paulo · HTML · CSS · JS                          │
├───────────────────────────────────────────────────────┤
│  ▎Sobre                                               │
│  parágrafo 60ch                        Stack          │
│  parágrafo                             [HTML] [CSS]   │
├───────────────────────────────────────────────────────┤
│  Projetos                              Ver todos →    │
│  ┌────────┐  ┌────────┐  ┌────────┐                   │
│  └────────┘  └────────┘  └────────┘                   │
├───────────────────────────────────────────────────────┤
│  Vamos conversar   →  email                           │
├───────────────────────────────────────────────────────┤
│  © 2026 Lucas Puton · GitHub · LinkedIn               │
└───────────────────────────────────────────────────────┘
```

**Mobile — 375px**

```
┌───────────────────────┐
│ LP            [☾] [EN]│
│ Sobre Projetos Contato│
├───────────────────────┤
│ Estudante · Dev web   │
│ Lucas Puton           │
│ ┌───────────────────┐ │
│ │       foto        │ │
│ └───────────────────┘ │
│ Posicionamento em     │
│ duas linhas.          │
│ [Ver projetos]        │
│ [Baixar CV]           │
│ São Paulo · HTML · JS │
├───────────────────────┤
│ ▎Sobre                │
│ texto                 │
│ Stack                 │
│ [HTML] [CSS] [JS]     │
├───────────────────────┤
│ Projetos              │
│ ┌───────────────────┐ │
│ │      card         │ │
│ └───────────────────┘ │
└───────────────────────┘
```
