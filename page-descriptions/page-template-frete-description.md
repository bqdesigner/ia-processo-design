# case-template-frete.html — Descritivo da Página

## Metadados

| Campo | Valor |
|---|---|
| Título | Case - Template de frete \| Bruno Queirós |
| Descrição | Case study - Reduzindo em até 85% o tempo de cadastro e publicação de um frete. |
| OG Title | Case - Template de Fretes \| Bruno Queirós |
| OG Description | Reduzindo em até 85% o tempo de cadastro e publicação de um frete. |
| OG Image | assets/case-template-frete/main-case-img.png |
| Idioma | pt-BR |
| Tema padrão | Light (alternável para dark, persistido no navegador) |
| Analytics | Google Analytics G-GBFQCTMP98 |
| Fonte | DM Sans |

---

## Estrutura de Seções

### 1. Header

Idêntico ao da index: logo BQ clicável (retorna ao index.html), navegação desktop com "Trabalhos" (ancora em index.html#trabalhos), "Contato" (ancora em #contato) e "Manda freelas" (desabilitado, badge "Em breve"), menu mobile fullscreen com e-mail de contato, e alternador de tema claro/escuro.

---

### 2. Cabeçalho do Case

- **Label:** "Work"
- **Título (H1):** "Reduzindo em até 70% o tempo de cadastro e publicação de um frete"

---

### 3. Hero do Case

Imagem principal do case em destaque (fundo padrão/claro). Ao lado, bloco de metadados:

| Campo | Valor |
|---|---|
| Empresa | Frete.com |
| Ano | 2023/24 |
| Skills | Análise de dados, Design de interação, UI Design, Handoff |

---

### 4. Desafio

Transportadoras publicam dezenas (às vezes centenas) de fretes por dia na Fretebras. Análise de dados revelou que a maioria das cargas de uma mesma transportadora compartilhava informações quase idênticas, variando apenas valores e destinos — mas cada publicação exigia preenchimento completo do formulário. O tempo médio de cadastro era superior a 2 minutos, gerando gargalo operacional que impactava diretamente o volume de ofertas na plataforma.

---

### 5. Imagem 1

Tela do formulário de cadastro de frete na plataforma Fretebras (estado anterior ao projeto).

---

### 6. Solução e Resultados

A partir da análise de métricas de uso, foram mapeados os campos que se repetiam com maior frequência entre publicações de uma mesma transportadora. Com hipótese validada pelos dados, foram conduzidas rodadas de exploração e validações internas com o time de produto e engenharia. Solução final: **templates reutilizáveis** — o operador cadastra um frete normalmente e, ao final, salva a configuração como modelo; nas publicações seguintes, parte do template e ajusta apenas o que muda. Após o rollout completo, o tempo médio de cadastro caiu de 2 minutos para 40 segundos — redução de ~67%.

---

### 7. Imagem 2

Interface de criação e gestão de templates reutilizáveis.

---

### 8. Imagem 3

Fluxo de publicação de frete a partir de um template salvo.

---

### 9. Imagem 4

Comparativo de tempo de cadastro antes e depois dos templates.

---

### 10. Próximo Case

Card de navegação para o próximo case: **WiseChat** — "Construindo uma ferramenta totalmente integrada e personalizável". Thumbnail com fundo #1D1F2E. Link: case-wisechat.html.

---

### 11. Footer CTA

Idêntico ao da index: chamada "Bora trabalhar juntos?", e-mail bqdesigner@outlook.com, links para LinkedIn, Dribbble e Medium.

---

### 12. Botão "Me leve para o topo"

Scroll suave ao topo da página.

---

## Comportamentos Gerais

- Tema claro/escuro alternável e persistido entre sessões do navegador.
- Header esconde ao rolar para baixo, reaparece ao rolar para cima; ganha blur ao sair do topo.
- Menu mobile fullscreen com fechamento ao clicar nos links.
- Suporte a múltiplos idiomas via atributos de tradução nos elementos de texto.
