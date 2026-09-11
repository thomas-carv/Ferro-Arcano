# Ferro & Arcano · Hub do sistema

Landing page única para o menu inicial do RPG. Ela reúne documentação, acesso ao criador de personagem e link para o minijogo Tranca Arcana.

## Arquivos

- `ferro_arcano_documentacao.html`: estrutura e conteúdo da página.
- `landing.css`: tokens visuais, layout responsivo, camadas e impressão.
- `landing.js`: dados resumidos, interação do criador, cálculos derivados e exportação.
- `wiki.html`, `wiki.css` e `wiki.js`: livro de regras separado, com capítulos, busca, tabelas, Classes, Trilhas e mecânicas.

## Módulos integrados

- A **Wiki do sistema** abre em uma camada com categorias, busca e consulta de Core, combate, personagem, magia e equipamentos.
- A **forja** registra classe, origem, atributos, perícias treinadas, arma de fogo, arma corpo a corpo, proteção e valores derivados.
- O **minigame** continua em `minigame/`, mas usa a mesma base visual zinc/âmbar e possui retorno direto ao Hub.

## Uso

Na raiz do projeto, execute `npm run dev` e abra `http://localhost:4173`. A página inicial redireciona para o hub. Também é possível abrir `ferro_arcano_documentacao.html` diretamente no navegador.

O botão **Exportar ficha em PDF** abre a ficha em uma nova aba e usa a caixa de impressão do navegador. Escolha **Salvar como PDF** no destino da impressão.

## Integração

O conteúdo de Classes, Origens, Armas e fórmulas foi alinhado ao projeto `ferro-arcano/src`. O motor Vite continua sendo a implementação completa do criador; o hub funciona como uma entrada estática independente para facilitar manutenção e distribuição.

As regras de progressão foram conferidas contra `Ferro_Arcano_v1.4b.pdf` disponível em Downloads: +1 atributo nos níveis 2, 4, 6, 8, 10 e 14; nível máximo 14; Trilha permanente a partir do nível 10; e Defesa base `10 + CON + Proteção + modificadores`. Quando o conteúdo da conversa compartilhada estiver disponível como arquivo exportado, ele deve prevalecer sobre PDFs históricos.

As fichas salvas ficam no `localStorage` do navegador sob a chave `ferro-arcano:fichas`. O menu **Minhas fichas** permite editar o nível, atributos, Trilha, perícias e equipamentos posteriormente no mesmo navegador.

O minijogo é acessado por `../minigame/index.html`, preservando seus arquivos e assets originais.
