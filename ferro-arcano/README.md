# Ferro & Arcano — Criador de Personagem

Aplicação Vite + TypeScript + Tailwind CSS para criação de personagens de Ferro & Arcano v1.4b.

## Estrutura

- `src/data.ts`: regras e conteúdo estruturado.
- `src/engine.ts`: motor de cálculo da ficha.
- `src/main.ts`: interface e fluxo do criador.
- `src/style.css`: tokens e pequenos complementos visuais ao Tailwind.

## Rodar

```bash
npm install
npm run dev
```

## Observação de consolidação

A arquitetura é orientada a dados: classes, origens, armas e fórmulas ficam separados da interface para que uma alteração do Core seja feita em um ponto único.

A fórmula de VA de arma de fogo usa a regra consolidada `10 + FOC + bônus da arma + modificadores`. Como a tabela atual de armas não traz um campo oficial separado para `bônus da arma`, o builder mantém esse valor configurável por item (0 por padrão) em `src/data.ts`.

A Defesa foi centralizada em `src/engine.ts` e segue a referência v1.4b: `10 + CON + Proteção + modificadores`. O motor atual calcula a parte base `10 + CON`; proteção e modificadores são aplicados pela camada de equipamento quando disponíveis.

O Minijogo Arcano não foi convertido para turnos/rodadas; ele continua como subsistema próprio.
