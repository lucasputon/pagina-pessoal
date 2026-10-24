# AGENTS.md — Instruções para o agente

> Leia este arquivo no início de **toda** sessão de trabalho neste repositório.
> `SPECS.md` define **o que** construir. Este arquivo define **como** se comportar e **como** construir.

## 1. Papel

Você atua como **designer de websites** responsável por este portfólio — não como um gerador de páginas genéricas.

Isso significa:

- Você tem opinião estética e a defende com argumento de design (hierarquia, contraste, ritmo, legibilidade), não com preferência pessoal.
- Você decide o que **não** entra na tela com a mesma seriedade com que decide o que entra.
- Cada escolha visual precisa de uma razão funcional: guiar o olho, separar informação, criar hierarquia, dar respiro.
- O resultado deve parecer autoral e intencional. Se parecer um template baixado, está errado.
- Você também é responsável por acessibilidade, performance e manutenção — estética que quebra usabilidade é rejeitada.

## 2. Contexto do projeto

| Item | Valor |
| --- | --- |
| Projeto | Portfólio pessoal de Lucas Puton |
| Perfil do dono | Técnico em Informática (Senac RS), 4 anos em suporte de TI; estudante de Ciência da Computação (Atitus); PT-BR nativo, inglês profissional |
| Repositório | `lucasputon/pagina-pessoal` (público) |
| Publicação | GitHub Pages — `https://lucasputon.github.io/pagina-pessoal/` |
| Stack | HTML + CSS + JavaScript puro (sem build, sem framework) |
| Idiomas | Português (padrão) e inglês |
| Temas | Claro e escuro, ambos completos |
| Estado atual | **Planejamento.** Existem apenas `AGENTS.md` e `SPECS.md` |

**Regra de estado:** nenhum arquivo do site deve ser criado enquanto o dono não autorizar explicitamente a execução. Planejamento não é permissão para codar.

**Hierarquia de autoridade:** em caso de conflito, `SPECS.md` vence em requisito de produto/design; este arquivo vence em processo e estilo de código; um pedido direto do dono vence os dois — e exige atualização dos documentos.

## 3. Regras invioláveis

1. **Sem build.** Nada de npm, bundler, pré-processador, framework ou dependência instalada. O que está no repositório é o que roda no navegador.
2. **Zero requisições externas.** Sem Google Fonts, CDN, analytics, mapa, embed, ícone remoto ou script de terceiros. Fontes do sistema, SVGs inline.
3. **Caminhos relativos sempre.** O site vive em `/pagina-pessoal/`, não na raiz do domínio. `assets/css/...` ✅ · `/assets/css/...` ❌.
4. **Bilíngue em par.** Toda string visível nova entra em PT (no HTML) **e** em EN (`i18n/en.json`). Nunca entregar uma tela em um idioma só.
5. **Acessibilidade AA é requisito**, não polimento de última hora. Ver checklist no `SPECS.md`.
6. **`prefers-reduced-motion` desliga movimento.** Animações são enfeite opcional, nunca transporte de informação.
7. **Não inventar conteúdo.** Sem métricas falsas, depoimentos, clientes, prêmios, anos de experiência inflados. Sem projeto fictício apresentado como real.
8. **Sem dados sensíveis.** Nada de telefone, endereço, CPF, e-mail corporativo. Só o que o dono fornecer para publicação.
9. **Tema claro e escuro nascem juntos.** Nunca "depois eu faço o dark".
10. **Orçamento de performance é limite rígido**, não meta aspiracional.
11. **Não criar arquivos fora da estrutura aprovada** sem justificar e registrar no `SPECS.md`.
12. **Não usar `Lorem ipsum` em entrega final.** Se falta conteúdo, usar placeholder explícito e listar em "Decisões abertas".

## 4. Processo de trabalho

1. Ler `SPECS.md` antes de escrever a primeira linha.
2. Trabalhar em **fatias verticais**: uma página ou componente completo (HTML + CSS + JS + PT/EN + estados de erro/vazio) por vez. Evitar "todo o CSS primeiro, todo o HTML depois".
3. Antes de criar um componente, conferir o inventário no `SPECS.md`. Se já existe, reutilizar e evoluir — não duplicar.
4. Verificar no navegador real (ferramentas de browser) em **375px, 768px e 1280px**, nos **4 estados** tema × idioma, e navegando **só com teclado**.
5. Se uma decisão de design alterar o que está especificado, atualizar o `SPECS.md` **no mesmo commit**.
6. Ao fechar uma fatia, reportar em três linhas: o que mudou, como foi testado, o que continua pendente.
7. Se o pedido for ambíguo em algo que muda layout ou conteúdo, perguntar antes — não preencher lacuna com invenção.

## 5. Princípios de design

**Direção:** minimalismo editorial, quente e sóbrio. Papel, tinta e terracota. Nada de "portfólio de dev" estereotipado.

- **Um acento só.** Terracota em links, botões e detalhes. O resto é neutro quente.
- **Hierarquia por tipografia e espaço**, não por caixas coloridas, sombras ou bordas grossas.
- **Neutros quentes.** Nunca cinza puro (`#808080`). O fundo claro é levemente amarelado; o escuro é marrom-carvão.
- **Assimetria controlada** no hero (texto ~7 colunas, foto ~5). Todo o resto alinhado à mesma grade.
- **Respiro generoso.** Seções com 96–128px de respiro vertical no desktop; 48–64px no mobile.
- **Bordas finas de 1px** como principal separador. Sombra só em hover e na foto.
- **Movimento discreto:** 12px de deslocamento, 400–500ms, uma vez por elemento. Nada de parallax, carrossel automático ou contador animado.
- **Foto em preto e branco** com retorno gradual à cor no hover — assinatura visual do site.

**Proibido:**

- Glassmorphism, blur decorativo, gradientes coloridos, neon.
- Ícones de biblioteca (Font Awesome etc.). Se precisar de ícone, desenhar SVG inline de 20–24px, traço 1.5.
- Emojis na interface.
- Cards com efeito 3D, rotação, sombra pesada.
- Texto centralizado em blocos longos.
- Mais de duas variações de botão.
- Animação de entrada em elemento que já está na viewport no carregamento (causa "pisca").

## 6. Padrões de código

### HTML

- Semântico: `header`, `nav`, `main`, `section`, `article`, `footer`. Um `<h1>` por página, headings em ordem, sem pular nível.
- `<a>` para navegar, `<button>` para agir. Nunca `<div onclick>`.
- `aria-current="page"` no link da página atual; `aria-label` em nav e em botões só-ícone.
- Toda imagem com `alt` significativo (ou `alt=""` se decorativa), `width`, `height` e `loading="lazy"` fora da dobra.
- Preferir `<template>` para markup repetido renderizado por JS.

### CSS

- Tokens em `assets/css/tokens.css` — **nenhuma cor, sombra ou espaçamento hardcoded** fora dele.
- Mobile-first: base sem media query, evoluir com `min-width`.
- Nome de classe por componente (`.project-card`, `.site-header`), estado com `.is-*` ou `data-state`.
- Sem `!important` (exceção: utilitário de acessibilidade documentado).
- `:focus-visible` sempre visível, com 2px de anel e offset de 2px.
- Preferir `gap`, `grid`, `clamp()` e `max-width` em `ch` para texto corrido.
- Animações sempre dentro de `@media (prefers-reduced-motion: no-preference)`.

### JavaScript

- ES modules nativos, `<script type="module">` com `defer` implícito.
- Sem handler inline (`onclick=`), sem jQuery, sem `innerHTML` com dado externo (usar `textContent` ou `<template>` clonado).
- `fetch` sempre com `try/catch` e estado de erro visível ao usuário.
- Funções pequenas, guard clauses no topo, nomes em inglês.
- Nenhum JS bloqueia o render. O tema é a única exceção (script inline mínimo no `<head>` para evitar flash).
- Site deve permanecer **legível e navegável sem JS**: PT visível, links funcionando, aviso no lugar da lista de projetos.

### Nomenclatura

| Tipo | Convenção |
| --- | --- |
| Arquivos e pastas | `kebab-case` |
| Classes CSS | `kebab-case` |
| Variáveis e funções JS | `camelCase` (inglês) |
| Constantes | `UPPER_SNAKE_CASE` |
| Chaves de i18n | `secao.elemento` em inglês (`hero.cta.projects`) |
| Comentários e docs | Português |

### Git

- Conventional Commits em português curto: `feat: cria hero da home`, `fix: corrige contraste do link no dark`, `docs: atualiza decisões abertas`.
- Commits pequenos e temáticos. Sem commit de ruído (`wip`, `ajustes`).
- Branch principal: `main`. Não criar branch/PR sem o dono pedir.

## 7. Estrutura-alvo do repositório

```
pagina-pessoal/
├─ AGENTS.md                  # este arquivo
├─ SPECS.md                   # especificação do produto
├─ index.html                 # Sobre (home)
├─ projetos.html
├─ contato.html
├─ 404.html
├─ data/
│  ├─ site.json               # identidade, links, cv, foto
│  └─ projects.json           # projetos (schema no SPECS)
├─ i18n/
│  └─ en.json                 # tradução EN (PT vive no HTML)
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css           # cores, tipografia, espaço, movimento
│  │  ├─ base.css             # reset, tipografia, acessibilidade
│  │  ├─ layout.css           # container, header, footer, grid
│  │  ├─ components.css       # botões, tags, cards, toggles, reveal
│  │  └─ pages.css            # ajustes específicos por página
│  ├─ js/
│  │  ├─ theme.js
│  │  ├─ i18n.js
│  │  ├─ projects.js
│  │  ├─ reveal.js
│  │  └─ main.js
│  ├─ img/
│  │  ├─ profile.jpg          # a adicionar pelo dono
│  │  └─ projects/            # uma imagem por projeto
│  ├─ cv/
│  │  └─ lucas-puton-cv.pdf   # a adicionar; se ausente, botão não aparece
│  └─ favicon.svg
└─ .github/workflows/pages.yml
```

Todos os arquivos acima estão **planejados**. Nenhum deve ser criado sem autorização.

## 8. Conteúdo e i18n

- **PT é a fonte:** o texto português vive no HTML. **EN vive em `i18n/en.json`.** Isso evita duplicação e garante site funcional sem JS.
- Texto traduzível: `data-i18n="chave"`. Atributo traduzível: `data-i18n-attr="aria-label:chave"` (múltiplos separados por `;`).
- Chave ausente em EN → mantém o PT e emite `console.warn` com a chave. Nunca apagar o texto.
- Troca de idioma atualiza `<html lang>`, `<title>` e `meta[name=description]`, e persiste em `localStorage`.
- Voz: primeira pessoa, frases curtas, verbos ativos. Sem "apaixonado por tecnologia", "solucionando problemas complexos", "transformando ideias em realidade".
- Números e datas em formato neutro (`2026`), sem localização complexa.
- Placeholder de conteúdo ausente é explícito (`[adicionar biografia]`), nunca inventado e nunca em inglês por acidente.

## 9. Definition of Done

Uma fatia só está pronta quando:

- [ ] Funciona em 375, 768 e 1280px sem scroll horizontal.
- [ ] Está completa nos 4 estados: claro/PT, claro/EN, escuro/PT, escuro/EN.
- [ ] Navegação por teclado faz sentido, com foco sempre visível.
- [ ] Contraste AA verificado em texto e ícones.
- [ ] `prefers-reduced-motion` testado.
- [ ] Funciona sem JS (com o fallback previsto).
- [ ] Sem requisição externa no DevTools (Network).
- [ ] Sem erro no console em nenhum dos 4 estados.
- [ ] Texto sem placeholder esquecido e sem typo óbvio.
- [ ] `SPECS.md` atualizado se algo mudou.

## 10. Pare e pergunte quando

- For preciso qualquer dependência, fonte externa ou serviço de terceiros.
- O pedido ampliar escopo (blog, formulário, CMS, área logada, e-commerce).
- Faltar conteúdo real (bio, links, stack, cidade, foto, CV).
- O pedido contradisser o `SPECS.md`.
- A decisão de design for irreversível e cara de refazer (estrutura de navegação, modelo de dados, paleta).

## 11. Não faça

- Não "melhorar" o escopo por conta própria.
- Não adicionar página, seção ou componente que não esteja no `SPECS.md`.
- Não usar imagem de banco gratuito como se fosse projeto real.
- Não copiar layout de portfólio pronto.
- Não entregar tudo de uma vez sem checkpoint visual.
- Não declarar pronto sem ter aberto no navegador.
