# Revisão — Ferro & Arcano

## Correções aplicadas e verificadas

- Minijogo e ficha agora usam PV inicial, multiplicador de CON e crescimento iguais para as sete classes. Antes os cinco cálculos divergiam e as novas classes usavam o fallback do Canalizador.
- Suporte direcionado a aliado não concede o mesmo bônus ao Mediador. A duração definida na escolha do efeito é preservada.
- Carregamento do minijogo tolera JSON inválido, valores que não são objetos de ficha e armazenamento indisponível.
- Seleção de aliados usa botões acessíveis por teclado. Nomes externos na seleção, efeitos e notificações são tratados como texto.
- Logs externos do Mestre são tratados como texto, com categorias limitadas aos tipos conhecidos.
- Atalho de acessibilidade da home aponta para o conteúdo existente. Diálogos compartilhados bloqueiam rolagem de fundo e direcionam Tab ao primeiro controle.
- `npm test` cobre sintaxe dos scripts publicados, igualdade das classes, busca sem acentos, catálogo oficial, custos/destinatários de suporte e carregamento inválido. Os mesmos testes podem ser executados sem subprocessos com `node tests/quality.test.cjs`.
- Fórmulas, normalização, condições, rodadas e benefícios de conjuração foram centralizados em `shared/rules.js`, com versão de esquema para fichas antigas.
- O Mestre controla o início de cada rodada. PA, reação, limites de recuperação, condições e durações são atualizados no mesmo evento para todos os jogadores.
- Encerrar turno não restaura PA. Ponte de Ação prepara no máximo +1 PA para a rodada seguinte; recuperação de Exaustão e recurso respeitam limites por rodada.
- Benefícios preparados agora são consumidos pela próxima conjuração: tempo, erro protegido, redução de Exaustão, dado/alcance extra e teto de Colapso.
- Pontos de Colapso e sequela são dados separados. Descanso completo reduz 1 ponto e preserva a sequela.
- Trilha exige escolha explícita e fica permanente. Trocar de classe limpa a Trilha incompatível.
- A ficha ganhou modo de sessão, condições estruturadas e indicação Automático/Assistido/Mesa em cada habilidade.
- Mensagens da mesa são limitadas a eventos conhecidos, validadas pela sala e deduplicadas. O painel também valida jogadores e URLs de avatar.
- A identidade visual foi consolidada como fantasia arcana industrial: âmbar representa Ferro/ação, azul e violeta representam energia arcana, classes e elementos possuem cores funcionais, e ficha, Wiki, Tranca e painel do Mestre compartilham superfícies, foco, estados e responsividade.

## Melhorias futuras

| Prioridade | Local | Evidência e melhoria recomendada |
| --- | --- | --- |
| Média | Organização | O catálogo textual ainda aparece na Wiki, ficha e gerador. Migrá-lo integralmente para módulos compartilhados reduzirá manutenção; os testes de igualdade protegem a transição. |
| Média | Contexto tático | Distância, cobertura, linha de visão e posição não têm um mapa estruturado. Por isso efeitos espaciais permanecem “Assistidos” ou “Mesa”, sem a aplicação global incorreta de passivas condicionais. |
| Média | Publicação remota | O código de sala organiza mensagens, mas autenticação e políticas de acesso dependem da configuração do projeto remoto. Adicionar contas e políticas antes de publicar uma mesa aberta na Internet. |
| Baixa | Validação visual | Fazer um ensaio em celular e uma sessão completa com Mestre e dois jogadores em dispositivos distintos antes do lançamento público. |

## Limites

As decisões operacionais estão registradas em `REGRAS_OPERACIONAIS.md`. A aplicação automatiza valores determinísticos e sinaliza efeitos espaciais ou narrativos para resolução da mesa. Não houve alteração de banco de dados nem de balanceamento textual.

Há alterações anteriores na árvore de trabalho, inclusive no builder e nos geradores. Foram preservadas. O builder alternativo `ferro-arcano/` tem fluxo próprio; a ficha publicada pelo hub é `minigame/ficha/index.html`.
