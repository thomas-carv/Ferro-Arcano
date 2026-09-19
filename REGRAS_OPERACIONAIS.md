# Ferro & Arcano — Regras operacionais do sistema

Este arquivo registra como a aplicação interpreta as regras durante a sessão. O texto da Wiki continua sendo a referência temática e de classe; este documento define quando a interface executa uma regra e quando a mesa decide o resultado.

## Fonte e precedência

1. Texto específico de uma habilidade, trilha, item ou sequela.
2. Regra geral registrada na Wiki.
3. Interpretação operacional abaixo, usada somente quando o texto não define o procedimento digital.

Uma regra nova deve ser cadastrada em `shared/rules.js` quando alterar valores derivados, rodada, condição ou consumo de benefícios. Assim a ficha, o minijogo e o painel do Mestre usam o mesmo cálculo.

## Rodadas e ações

- O Mestre inicia cada rodada no painel da mesa.
- No início da rodada, cada personagem recupera seus PA máximos, sua reação e os limites de recuperação por rodada.
- Um bônus de PA para a próxima rodada concede no máximo +1 PA e é consumido quando a rodada começa.
- Encerrar o turno zera os PA restantes. Eles não retornam até o início da rodada seguinte.
- Efeitos com duração em rodadas e condições temporárias perdem uma rodada quando a nova rodada começa.

## Automação e decisão da mesa

- **Automático:** custos de PA e recurso de classe, bônus numéricos, recuperação limitada, duração e benefícios da próxima conjuração.
- **Assistido:** a ficha cobra custos e transmite o efeito; o Mestre confirma alvo, alcance, área, deslocamento e outras relações espaciais.
- **Mesa:** efeitos narrativos, escolhas abertas, troca ou transferência entre personagens e consequências sem valor numérico fechado.

A ficha mostra uma etiqueta em cada poder informando qual desses níveis se aplica. A etiqueta não altera o texto da habilidade.

## Suporte e conjuração

- Recuperação de Exaustão concedida por habilidades é limitada a 20 por personagem em cada rodada.
- Recuperação de recurso de classe é limitada a 1 ponto por personagem em cada rodada.
- Tempo adicional, erro protegido, redução de custo, limite de Colapso, dado adicional e alcance adicional ficam preparados e são consumidos na próxima conjuração.
- Um erro protegido não aumenta o contador de erros e não dispara consequências de erro.

## Colapso Arcano

- `colapsoPoints` registra a progressão mecânica de Colapso.
- `colapsoId` e `colapsoSeverity` registram a sequela adquirida.
- Ultrapassar o limite seguro de Exaustão adiciona pontos de Colapso calculados pela conjuração.
- Descanso completo restaura PV e Exaustão e reduz 1 ponto de Colapso. Ele não apaga uma sequela.

## Condições

Condições possuem identificador, fonte, rodada de aplicação, duração opcional e observação. Condições sem duração permanecem até remoção explícita. O sistema não inventa penalidades numéricas quando a fonte da condição não as informa.

## Persistência e compatibilidade

Fichas salvas recebem uma versão de esquema e são normalizadas ao carregar. Campos ausentes recebem valores seguros, listas inválidas são descartadas e PV, PA e recursos respeitam seus limites. A escolha de Trilha feita no nível 10 é permanente na ficha; a troca de classe limpa essa escolha para evitar uma Trilha incompatível.

## Mesa em rede

Mensagens aceitam somente eventos conhecidos, precisam pertencer à sala atual e recebem um identificador para evitar duplicação. O código de sala organiza a sessão, mas não substitui autenticação nem políticas de acesso do projeto remoto. Em uma publicação aberta, configure autenticação e regras de acesso no serviço usado pela mesa.
