# index.html — Descritivo da Página

## Metadados

| Campo | Valor |
|---|---|
| Título | Bruno Queirós - AI Product Designer |
| Descrição | Com mais de 10 anos de experiência em design, transformo desafios em experiências que geram valor. |
| Idioma | pt-BR |
| Tema padrão | Light (alternável para dark, persistido no navegador) |
| Analytics | Google Analytics G-GBFQCTMP98 |
| Fonte | DM Sans |

---

## Estrutura de Seções

### 1. Header

Fixo no topo da página. Composto por:

- **Logo** — marca "BQ" em SVG. Clicável, retorna ao topo da página.
- **Navegação desktop** — três itens: "Trabalhos" (ancora na seção de projetos), "Contato" (ancora no footer) e "Manda freelas" (desabilitado, com badge "Em breve").
- **Menu mobile** — ícone hamburguer que abre um overlay fullscreen com os mesmos itens da nav, mais o e-mail de contato direto.
- **Alternador de tema** — dois botões: modo claro (ícone sol) e modo escuro (ícone lua).

O header some ao rolar para baixo e reaparece ao rolar para cima. Ao rolar além do topo, ganha efeito de blur de fundo.

---

### 2. Hero

Seção de abertura da página. Contém dois parágrafos exibidos com animação de digitação (typewriter):

- **Linha principal:** "Com mais de 10 anos de experiência em design, transformo desafios em experiências que geram valor."
- **Linha secundária (mais apagada):** "Unindo craft, IA, dados e estratégia, crio soluções que conectam usuários e negócios com impacto real."

Abaixo dos textos, um indicador visual de scroll com três chevrons em degradê de opacidade, sinalizando que há conteúdo abaixo.

---

### 3. Faixa de Logos (Marquee)

Faixa animada com scroll contínuo exibindo os logos das empresas com as quais Bruno trabalhou:

Agile, CNN, Dasa, Fretebras, Rakuten, Stone e WiseChat.

---

### 4. Projetos

Quatro cards de projeto exibidos em sequência com efeito parallax. Cada card ocupa a tela inteira e contém a imagem do projeto, nome, descrição curta, ano e um link "Ver case".

| Projeto | Cor de fundo | Ano | Descrição |
|---|---|---|---|
| Fretebras - Template de fretes | Cinza claro | 2025 | Reduzindo em até 70% o tempo de cadastro e publicação de um frete. |
| WiseChat | Azul muito escuro | 2025 | Construindo uma ferramenta totalmente integrada e personalizável. |
| WiseApp | Azul escuro | 2024 | App de roteirização para motoristas transportar de forma mais inteligente. |
| Fretebras - Motorista VIP | Preto | 2023 | Construindo um SaaS que já gerou receita de 100MM. |

Os cards com fundo escuro usam texto claro; o card com fundo claro usa texto escuro.

---

### 5. Sobre

Seção dividida em duas colunas.

**Coluna esquerda — Texto de apresentação:**

12 anos de experiência em Design, sendo os últimos 10 dedicados a UX e produto digital. Passagem por CNN Brasil, Rakuten, Net NOW, Dasa e Fretebras — contextos que variam entre early stages, startups aportadas e grandes empresas. Cargo atual: Senior Product Designer na Stone, com foco em produto e IA.

Especialidade em produtos de alta complexidade operacional — plataformas de logística, ferramentas de gestão, aplicativos de campo e sistemas financeiros. Perfil que transita entre visão estratégica e execução detalhada: da descoberta e métricas de produto ao visual craft e Design System.

Frase de posicionamento: "Acredito que o melhor design nasce quando o time entende o problema junto, não quando o designer entrega sozinho."

Nota pessoal: gosta de academia, viagens, cafés de qualidade e esportes radicais.

**Coluna direita — Histórico de experiências:**

| Empresa | Cargo | Período |
|---|---|---|
| Stone | Senior Product Designer | 2025 / Atual |
| Fretebras | Senior Product Designer | 2022 / 2025 |
| Dasa | Product Designer | 2020 / 2022 |
| Agile Content | Product Designer | 2019 / 2020 |
| FieldCorp | Senior Product Designer | 2019 / 2019 |
| Visuall Agency | Senior Product Designer | 2018 / 2019 |

---

### 6. Footer

Chamada para ação: "Bora trabalhar juntos?" com e-mail de contato clicável (bqdesigner@outlook.com) e links para redes sociais: LinkedIn, Dribbble e Medium.

---

### 7. Rodapé de crédito

Texto animado ao ser exibido na tela: "Design and Develop by Brunão — 2026 ©"

---

## Comportamentos Gerais

- Tema claro/escuro alternável e persistido entre sessões do navegador.
- Animação typewriter nos textos do hero ao carregar a página.
- Cards de projeto com efeito parallax ao rolar.
- Logos em scroll contínuo automático na faixa de marquee.
- Header que esconde e reaparece conforme a direção do scroll.
- Botão "me leve para o topo" com scroll suave.
- Suporte a múltiplos idiomas via atributos de tradução nos elementos de texto.
