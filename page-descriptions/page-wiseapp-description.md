# case-wiseapp.html — Descritivo da Página

## Metadados

| Campo | Valor |
|---|---|
| Título | Case - WiseApp \| Bruno Queirós |
| Descrição | Case study - App de roteirização para motoristas transportar de forma mais inteligente. |
| OG Title | Case - WiseApp \| Bruno Queirós |
| OG Description | App de roteirização para motoristas transportar de forma mais inteligente. |
| OG Image | assets/case-wiseapp/main-case-img.png |
| Idioma | pt-BR |
| Tema padrão | Light (alternável para dark, persistido no navegador) |
| Analytics | Google Analytics G-GBFQCTMP98 |
| Fonte | DM Sans |

---

## Estrutura de Seções

### 1. Header

Idêntico ao da index: logo BQ clicável (retorna ao index.html), navegação desktop, menu mobile com e-mail de contato, alternador de tema.

---

### 2. Cabeçalho do Case

- **Label:** "Work"
- **Título (H1):** "App de roteirização para motoristas transportar de forma mais inteligente"

---

### 3. Hero do Case

Imagem principal (screenshot mobile) em container com **fundo #0474FD** (azul vivo), alinhada ao fundo inferior (`align-items: flex-end`), exibida em altura proporcional ao container sem border-radius. Ao lado, bloco de metadados:

| Campo | Valor |
|---|---|
| Empresa | FieldCorp |
| Ano | 2024 |
| Skills | Redesign, Design System, UI Design, Handoff, Acessibilidade |

---

### 4. Desafio

O WiseApp é o app de roteirização da FieldCorp — usado por motoristas em campo para coletar cargas, seguir rotas otimizadas por tempo e combustível, registrar pausas e acompanhar entregas em tempo real. O app já existia, mas com visual defasado e experiência não pensada para o contexto real do motorista: atenção dividida entre trânsito, celular e operação.

---

### 5. Imagem 1

Tela principal do WiseApp com mapa de rotas otimizadas.

---

### 6. Solução

Repertório prévio em empresa de transporte rodoviário acelerou a análise e embasou questionamento de premissas. Redesign do zero orientado ao contexto de uso em campo:

- **Dark e light mode** — não como feature estética, mas como acessibilidade: motoristas operam por longos períodos e em condições variadas de iluminação, muitos com dificuldades de visão. Autonomia de escolha ao usuário foi decisão deliberada.
- **Integração com TMS** — inserção de rotas feita diretamente pela operação via sistema, sem exigir que o motorista pare de dirigir para adicionar novas entregas manualmente — reduzindo interrupção e risco.

Construção e documentação de uma biblioteca de componentes específica para o app, com potencial de evolução como design system mobile da FieldCorp. Projeto validado com o stakeholder, em fase de desenvolvimento.

---

### 7. Imagem 2

Interface do app em modo claro e escuro para uso em campo.

---

### 8. Imagem 3

Fluxo de integração TMS com inserção automática de rotas.

---

### 9. Imagem 4

Biblioteca de componentes mobile do WiseApp.

---

### 10. Próximo Case

Card de navegação para o próximo case: **Fretebras Motorista VIP** — "Construindo um SaaS que já gerou receita de 100MM". Thumbnail com fundo #191819, imagem mobile alinhada ao fundo. Link: case-motorista-vip.html.

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
