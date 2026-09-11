(() => {
  'use strict'

  const chapters = [
    { id: 'core', number: '01', title: 'O Núcleo do Sistema', lead: 'A base técnica que rege a realidade física e de desenvolvimento em Ferro & Arcano.', blocks: [
      ['Atributos Fundamentais', 'O sistema conta com 5 atributos fundamentais que definem todas as capacidades da sua personagem:<br><br>• <strong>CON (Constituição):</strong> Sustenta seus PV (Pontos de Vida), testes de Fortitude, resistência física e tolerância ao desgaste arcano.<br>• <strong>CONH (Conhecimento):</strong> Rege tecnologia e sistemas, investigação, medicina de combate, teoria arcana e sua Exaustão Máxima.<br>• <strong>FOC (Foco):</strong> Rege sua precisão balística, concentração e adiciona tempo inicial ao minijogo arcano.<br>• <strong>FOR (Força):</strong> Aplica-se ao combate corpo a corpo, manobras físicas e capacidade de carga.<br>• <strong>REF (Reflexo):</strong> Controla sua Esquiva, mobilidade, iniciativa e agilidade geral.'],
      ['Distribuição na Criação', 'Todos os atributos começam em <strong>0</strong>. Você recebe <strong>10 pontos</strong> para distribuir livremente, com um limite de <strong>máximo 4</strong> pontos em qualquer atributo. Os custos de compra são progressivos:<br><br>• Atributo 0 → custo 0<br>• Atributo 1 → custo 1<br>• Atributo 2 → custo 2<br>• Atributo 3 → custo 4<br>• Atributo 4 → custo 7.'],
      ['Perícias Oficiais', 'Existem <strong>19 perícias oficiais</strong> no sistema. O treinamento concede um bônus de <strong>+2</strong>. Na criação, você recebe 1 perícia obrigatória da sua Classe e mais 3 escolhas livres da lista da Classe, totalizando 4 perícias treinadas.<br><br><i>Regra de teste fora de combate:</i> Rola-se <strong>1d20 + Atributo</strong> OU <strong>1d20 + Perícia Treinada</strong>, o que for maior (nunca ambos combinados).<br><br><strong>Lista completa por atributo chave:</strong><br>• <strong>CON:</strong> Fortitude, Tolerância Arcana.<br>• <strong>CONH:</strong> Simbologia & Runas, História Arcana, Tecnologia & Sistemas, Medicina de Combate, Investigação.<br>• <strong>FOC:</strong> Armas de Fogo, Percepção / Prontidão, Intuição, Sintonia Arcana.<br>• <strong>FOR:</strong> Briga / Corpo a Corpo, Atletismo, Imposição.<br>• <strong>REF:</strong> Esquiva, Acrobacia, Furtividade, Pilotagem, Prestidigitação.<br><br>'],
      ['Valores Derivados', 'Os valores de sobrevivência e ação do personagem são calculados da seguinte forma:<br><br>• <strong>Pontos de Ação (PA):</strong> 3 por turno.<br>• <strong>Reação:</strong> 1 por rodada.<br>• <strong>Deslocamento Base:</strong> 9 metros.<br>• <strong>Defesa Estática:</strong> 10 + CON + Proteção + Modificadores.<br>• <strong>Exaustão Máxima:</strong> CON × 15 + CONH × 10.'],
      ['Economia de Ações', 'Em combate, os Pontos de Ação (PA) ditam o ritmo de cada turno:<br><br>• <strong>Movimento até 9m:</strong> 1 PA.<br>• <strong>Ataque ou Disparo:</strong> 2 PA.<br>• <strong>Conjurar Magia:</strong> 2 PA.<br>• <strong>Recarregar Arma:</strong> 1 PA.<br>• <strong>Levantar de Caído:</strong> 1 PA.<br>• <strong>Corrida (até 18m):</strong> 3 PA.<br><br>O movimento de 9m pode ser dividido livremente antes, durante ou após a realização de outras ações.'],
      ['Descansos', 'Recuperação de recursos em campo:<br><br>• <strong>Descanso Curto (30 minutos):</strong> Recupera 20 de Exaustão, 1d10 + CON pontos de vida (PV) e recarrega recursos de Classe específicos.<br>• <strong>Descanso Completo (8 horas):</strong> Restaura completamente seus PV e Exaustão, reinicia os recursos de Classe e reduz 1 ponto de Colapso acumulado.<br><br>Você só pode realizar um máximo de <strong>2 Descansos Curtos</strong> antes de ser obrigado a realizar um Descanso Completo.'],
      ['Progressão e Níveis (1 a 14)', 'A progressão não utiliza XP convencional, sendo baseada em <strong>Pontos de Missão (PM)</strong>:<br>• <strong>1 PM:</strong> Conclusão da missão principal + objetivos secundários.<br>• <strong>0,5 PM:</strong> Apenas missão principal concluída.<br>• <strong>0 PM:</strong> Falha completa na missão.<br><br>A cada <strong>3 PM acumulados</strong>, consome-se os pontos e o personagem sobe 1 nível (máximo nível 14). Não existe multiclasse. A Trilha escolhida no nível 10 se torna permanente. Os atributos aumentam nos níveis pares (2, 4, 6, 8, 10, 14).']
    ]},
    { id: 'combat', number: '02', title: 'Combate e Equipamento', lead: 'Regras de engajamento, armas de fogo, posicionamento e condições de sobrevivência.', blocks: [
      ['Resolução de Ataques', 'A precisão e a letalidade dependem do tipo de engajamento:<br><br>• <strong>Armas de Fogo (Distância):</strong><br>VA (Valor de Ataque) = 10 + FOC + bônus da arma + modificadores.<br>• <strong>Corpo a Corpo (Físico):</strong><br>VA = 10 + FOR + Briga/Corpo a Corpo + bônus da arma + modificadores.<br><br>'],
      ['Resolução de Defesa', 'A Defesa estática é de 10 + CON + Proteção. No entanto, o defensor pode gastar sua <strong>Reação</strong> da rodada para realizar uma Esquiva ativa, rolando:<br><strong>1d20 + REF + Esquiva</strong>.<br>Para anular ou evitar o ataque, o resultado final da Esquiva deve igualar ou superar o VA final obtido pelo atacante.'],
      ['Acertos Críticos', 'Cada arma de fogo ou corpo a corpo possui sua própria margem de crítico (ex.: 18×2). Se o VA final do seu ataque alcançar ou superar a margem crítica da arma, realiza-se um acerto Crítico.<br><br><strong>Passo a passo da resolução:</strong><br>1. Rola-se os dados de dano base da arma.<br>2. Multiplica-se apenas os dados de dano pelo multiplicador do crítico.<br>3. Adiciona-se os modificadores e bônus fixos de dano.<br>4. Subtrai-se a RD (Redução de Dano) do alvo.'],
      ['Cobertura de Campo', 'Posicionamento e coberturas aumentam a Defesa do alvo contra ataques à distância. Os bônus não acumulam:<br><br>• <strong>Nenhuma:</strong> +0 Defesa.<br>• <strong>Leve:</strong> +2 Defesa.<br>• <strong>Pesada:</strong> +4 Defesa.<br>• <strong>Total:</strong> O alvo não pode ser selecionado como alvo direto de ataques que exijam linha de visão.'],
      ['Dano, PV e Estabilização', 'A RD (Redução de Dano) física ou mágica do alvo é aplicada subtraindo o dano sofrido (com dano mínimo de 1, exceto quando alguma habilidade anular o dano).<br><br>• <strong>0 PV:</strong> Ao cair para 0 PV, o personagem fica Caído e Incapacitado. Um aliado adjacente pode gastar <strong>2 PA</strong> e realizar um teste de <strong>Medicina de Combate CD 15</strong> para estabilizá-lo.'],
      ['Dano Massivo', 'Se um único ataque sofrido reduzir os pontos de vida do personagem a um valor negativo igual ou superior ao seu PV Máximo (ex.: PV Máximo 30, cair para -30 PV ou menos), o personagem sofre morte instantânea de forma permanente.'],
      ['Falha de Armas', 'A Falha não é uma quebra automática ou chance aleatória de estragar a arma. Ela é um acúmulo de desgaste desencadeado por fatores ambientais adversos (chuva forte, lama, poça de água, areia, etc.).<br><br>• <strong>Mecânica:</strong> Sob condições de Falha, cada disparo é contado. Ao atingir o limite de Falha da arma, ela emperra.<br>• <strong>Desemperrar (1 PA):</strong> Remove o emperramento, mas a arma permanece sob a condição de Falha.<br>• <strong>Limpar (3 PA):</strong> Exige um teste de <strong>Armas de Fogo CD 10</strong> bem-sucedido para remover a condição de Falha da arma.'],
      ['Disparos Gratuitos', 'Quando uma habilidade ou efeito de classe concede um disparo "gratuito", este disparo não consome Pontos de Ação (PA) e não assume automaticamente as penalidades normais de rajada, mas a munição correspondente ainda é consumida.'],
      ['Rajada Parcial e Total', '• <strong>Rajada Parcial (2 PA):</strong> Utiliza um único valor de VA, aplicando o Recuo correspondente da arma e consumindo a munição extra declarada.<br>• <strong>Rajada Total:</strong> Consome toda a munição declarada para gerar múltiplos dados de dano que são distribuídos em área ou cone. O dano bruto gerado é dividido igualmente entre todos os alvos válidos na área antes da aplicação de RDs individuais.'],
      ['Catálogo de Armas de Fogo', 'Estatísticas oficiais de armas (Dano | Alcance | Munição | Crítico | Falha):<br><br>' +
        '• <strong>Pistola:</strong> 1d4 | Alcance 12m | Cap. 12 | Crítico 18×2 | Falha 6<br>' +
        '• <strong>Revólver:</strong> 1d6 | Alcance 12m | Cap. 6 | Crítico 17×2 | Falha 3<br>' +
        '• <strong>Submetralhadora:</strong> 1d6 | Alcance 12m | Cap. 30 | Crítico 19×2 | Falha 15<br>' +
        '• <strong>Espingarda:</strong> 2d6 | Alcance 6m | Cap. 6 | Crítico 16×2 | Falha 3<br>' +
        '• <strong>Fuzil:</strong> 1d10 | Alcance 18m | Cap. 20 | Crítico 18×2 | Falha 10<br>' +
        '• <strong>Fuzil de Atirador:</strong> 1d12 | Alcance 24m | Cap. 10 | Crítico 17×2 | Falha 5<br>' +
        '• <strong>Sniper:</strong> 1d20 | Alcance 36m | Cap. 5 | Crítico 16×2 | Falha 2<br>' +
        '• <strong>Metralhadora:</strong> 1d8 | Alcance 18m | Cap. 40 | Crítico 19×2 | Falha 20<br>' +
        '• <strong>Escopeta Devastadora:</strong> 3d6 | Alcance 6m | Cap. 4 | Crítico 16×2 | Falha 2 (Efeito Impacto Massivo: a até 3m de distância, força um teste de Reflexo CD 15 ou o alvo cai na condição Caído).'],
      ['Catálogo de Armas Corpo a Corpo', 'Estatísticas oficiais de armas (Dano | Tipo/Categoria | Crítico | Propriedade ):<br><br>' +
        '• <strong>Faca Tática:</strong> 1d4 | Perfurante  | Crítico 17×2  | Leve: pode ser empunhada junto a outra arma Leve  <br>' +
        '• <strong>Canivete:</strong> 1d4 | Perfurante  | Crítico 18×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
        '• <strong>Cassetete:</strong> 1d6 |  Contundente  | Crítico 18×2  | Não Letal: pode causar dano não letal <br>' +
        '• <strong>Bastão Retrátil:</strong> 1d6 | Contundente | Crítico 17×2  | Tática: +1 Defesa enquanto empunhado <br>' +
        '• <strong>Pé de Cabra:</strong> 1d6 |  Contundente  | Crítico 19×2  | Improvisada: +2 dano contra objetos e barreiras <br>' +
        '• <strong>Machete:</strong> 1d8 | Cortante   | Crítico 18×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
        '• <strong>Machado de Combate:</strong> 1d10 | Cortante  | Crítico 18×2  | Brutal: +1 dano contra alvos com metade dos PV ou menos <br>' +
        '• <strong>Espada Curta:</strong> 1d8 | Perfurante  | Crítico 17×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
        '• <strong>Espada Longa:</strong> 1d10 | Cortante | Crítico 18×2  | Versátil: pode ser usada com uma ou duas mãos; com duas mãos, +1 dano <br>' +
        '• <strong>Katana:</strong> 1d10 | Cortante | Crítico 17×2 | Precisão: +1 VA no primeiro ataque corpo a corpo do turno .']
    ]},
    { id: 'magic', number: '03', title: 'Magia e Minijogo Arcano', lead: 'A mecânica da Tranca Arcana, os sete círculos, falhas de conjuração, sobrecarga e colapso.', blocks: [
      ['O Minijogo de Runas', 'Conjurar magias custa <strong>2 PA</strong> e inicia o minijogo da Tranca Arcana. A Exaustão correspondente deve ser paga obrigatoriamente no início da ação. Cada ponto no atributo FOC (Foco) do conjurador adiciona <strong>+1,5 segundos</strong> ao limite de tempo inicial da resolução. Cada runa concluída corretamente na tela equivale a 1 acerto. Cada acerto recupera até 4 segundos de tempo (sem superar o tempo inicial) e acelera a rotação dos anéis restantes em +25% cumulativos.'],
      ['Os Sete Círculos Arcanos', 'Requisitos e dados de efeito de acordo com a potência da magia:<br><br>' +
        '• <strong>1º Círculo:</strong> Custo: 10 Exaustão | Tempo: 8s | Erros tolerados: 7 | Runas: 1 | Dado de Dano: d4<br>' +
        '• <strong>2º Círculo:</strong> Custo: 18 Exaustão | Tempo: 8s | Erros tolerados: 6 | Runas: 2 | Dado de Dano: d6<br>' +
        '• <strong>3º Círculo:</strong> Custo: 28 Exaustão | Tempo: 8s | Erros tolerados: 5 | Runas: 3 | Dado de Dano: d8<br>' +
        '• <strong>4º Círculo:</strong> Custo: 40 Exaustão | Tempo: 8s | Erros tolerados: 4 | Runas: 4 | Dado de Dano: d10<br>' +
        '• <strong>5º Círculo:</strong> Custo: 55 Exaustão | Tempo: 8s | Erros tolerados: 3 | Runas: 5 | Dado de Dano: d12<br>' +
        '• <strong>6º Círculo:</strong> Custo: 75 Exaustão | Tempo: 4s | Erros tolerados: 2 | Runas: 6 | Dado de Dano: d20<br>' +
        '• <strong>7º Círculo:</strong> Custo: 100 Exaustão | Tempo: 4s | Erros tolerados: 1 | Runas: 7 | Dado de Dano: d100'],
      ['Falhas na Conjuração', 'Caso o tempo do minijogo expire (chegue a 0) ou você cometa erros além do limite tolerado pelo Círculo, a magia <strong>ainda é conjurada</strong>, utilizando os acertos obtidos até o momento. No entanto, o conjurador deve rolar <strong>1d3 na Tabela de Falhas</strong> para aplicar o efeito negativo imediato:<br><br>' +
        '• <strong>1 - Exaustão Dobrada:</strong> O conjurador sofre o dobro do custo original de Exaustão da magia.<br>' +
        '• <strong>2 - Repique Arcano:</strong> O conjurador sofre imediatamente 1d6 de dano mágico/elétrico por Círculo da magia.<br>' +
        '• <strong>3 - Degradação de Cátedra:</strong> O dado de dano/efeito da magia desce um estágio (ex.: d10 para d8). Se o dado já for d4, remove-se um dado de efeito completo.'],
      ['Sobrecarga de Energia', 'A Exaustão do conjurador pode ficar negativa (abaixo de 0). O <strong>Limite de Sobrecarga</strong> seguro é igual a <strong>-10% da Exaustão Máxima</strong> (ex.: se a Exaustão Máxima for 100, o limite negativo seguro é -10). Conjurar enquanto já estiver abaixo deste limite seguro gera pontos de Colapso direto na personagem:<br><br>' +
        '<strong>Excedente</strong> = custo da magia − valor absoluto do limite negativo.<br>' +
        '<strong>Colapso gerado</strong> = excedente ÷ Círculo da magia (arredondado para cima).'],
      ['Faixas de Colapso', 'Pontos de Colapso acumulados geram sequelas e perigos físicos extremos de acordo com a faixa:<br><br>' +
        '• <strong>0:</strong> Estado Normal.<br>' +
        '• <strong>1–4 (Sequela Simples):</strong> Recebe penalidades em testes físicos devido a quebras de integridade biológica ou modificações leves na estrutura do corpo.<br>' +
        '• <strong>5–9 (Sequela Crítica):</strong> Penalidades graves de locomoção, exaustão acelerada e danos crônicos aos sistemas vitais.<br>' +
        '• <strong>10 (Detonação Arcana):</strong> O personagem é instantaneamente desintegrado em uma violenta explosão de éter, causando 10d100 de dano mágico em uma área de 20 a 50 metros. Não há ressurreição por meios normais.'],
      ['Tempo Real em Jogo', 'Nenhum efeito ou duração de magia no Ferro & Arcano é medido em minutos ou horas de tempo real fora de combate. Todos os efeitos duram em turnos, rodadas ou cenas. Os únicos componentes baseados em tempo real do sistema são as regras estruturais de recuperação: <strong>Descanso Curto (30 minutos)</strong> e <strong>Descanso Completo (8 horas)</strong>. O minijogo arcano possui sua própria escala temporal de segundos que não deve ser convertida para combate.']
    ]},
    { id: 'classes', number: '04', title: 'Classes e Protocolos', lead: 'As cinco classes oficiais de Ferro & Arcano, suas identidades táticas e o avanço de habilidades de nível 1 a 10.', classes: [
      ['Atirador', 'Especialista em distância, precisão balística e controle de área.', ['Olho Clínico', 'Mira Estável', 'Disparo Rápido', 'Ajuste de Balística', 'Cadência Operacional', 'Respiro Tático', 'Disparo de Penetração', 'Fogo de Supressão', 'Postura do Caçador', 'Mestria Balística']],
      ['Canalizador', 'Manipulador das energias etéreas e riscos arcanos.', ['Ajuste Fino + Fluxo Contínuo', 'Mente Expandida', 'Emanação Rúnica de Repulsão', 'Barreira de Éter', 'Sintonia Rúnica', 'Recalibração Mental', 'Foco de Concentração Extrema', 'Modulação de Amplitude', 'Mente Inviolável', 'Domínio da Ruptura Arcana']],
      ['Híbrido', 'A fusão tática entre a técnica mecânica e a força arcana.', ['Munição Encantada + Sintonia Tecno-Mágica', 'Adaptabilidade de Sistemas', 'Golpe Arcano-Infuso', 'Sobrecarga do Núcleo', 'Malha de Tecido Rúnico', 'Recarga Sincronizada', 'Emissão de Campo Estático', 'Reciclagem de Energia', 'Injeção de Éter Medicinal', 'Síntese Absoluta do Ferro & Arcano']],
      ['Vanguardista', 'A linha de frente, a barreira física que sustenta a equipe.', ['Inflexibilidade + Blindagem Biológica', 'Postura Imóvel', 'Provocação Tática', 'Pele de Ferro Aprimorada', 'Retaliação de Impacto', 'Interceptação Balística', 'Escudo de Absorção Absoluta', 'Ancoragem Territorial', 'Vigor Inextinguível', 'Baluarte Supremo do Ferro']],
      ['Ciborgue', 'O ápice da integração máquina-homem, focado em análise, adaptação e destruição.', ['Pontos de Protocolo + Visão de Sistema', 'Corpo Aumentado', 'Ponto Fraco', 'Interface de Combate', 'Protocolo Antimaterial', 'Reparação de Campo', 'Caçador de Máquinas', 'Sobrecarga de Protocolo', 'Arsenal Integrado', 'Arquitetura de Combate']]
    ]},
    { id: 'origins', number: '05', title: 'Origens e Manifestações', lead: 'As dez origens do cenário e como seus benefícios se adaptam de acordo com a Classe selecionada.', blocks: [
      ['Soldado', '<strong>Geral (Treinamento Militar):</strong> Concede treinamento na perícia Fortitude ou Imposição. Caso já possua o treinamento, recebe especialização (+2).<br><br>' +
        '• <strong>Atirador (Disciplina de Combate):</strong> Escolha uma categoria de arma de fogo. 1/rodada, recebe +1 VA no primeiro ataque realizado com ela no turno.<br>' +
        '• <strong>Canalizador (Concentração Militar):</strong> 1/rodada, ao conjurar uma magia com sucesso, reduz em 10 a Exaustão gerada (respeitando o mínimo de 0).<br>' +
        '• <strong>Híbrido (Transição de Combate):</strong> 1/rodada, após usar uma habilidade que consuma Cargas do Núcleo, ganha +1 VA no próximo ataque até o fim do turno.<br>' +
        '• <strong>Vanguardista (Formação de Combate):</strong> 1/rodada, quando sofrer um efeito que o moveria ou deixaria Caído, pode gastar 1 PA para reduzir o deslocamento em 3m ou evitar ficar Caído.<br>' +
        '• <strong>Ciborgue (Formação de Combate):</strong> 1/rodada, quando sofrer um ataque de criatura tecnológica ou inimigo Marcado, recebe +1 Defesa contra o próximo ataque desse alvo até seu próximo turno.'],
      ['Artesão', '<strong>Geral (Conhecimento Técnico):</strong> Concede treinamento em Tecnologia & Sistemas ou Investigação. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Modificação de Armamento):</strong> 1/Descanso Curto (6 PA); instala modificações. Na primeira vez que usar Mirar no turno, a ação não consome PA.<br>' +
        '• <strong>Canalizador (Aprimoramento Arcano):</strong> 1/Descanso Curto (6 PA); eleva em um estágio a raridade de um item arcano por 2 rodadas.<br>' +
        '• <strong>Híbrido (Infusão do Núcleo):</strong> 1/Descanso Curto (6 PA); escolhe uma infusão (Precisão, Potência, Regeneração, etc.) temporária para um equipamento.<br>' +
        '• <strong>Vanguardista (Reforço Estrutural):</strong> 1/Descanso Curto (6 PA); concede +10 PV/+2 RD a uma barreira/escudo ou sobe categoria de cobertura até Pesada.<br>' +
        '• <strong>Ciborgue (Manutenção de Campo):</strong> 1/Descanso Curto; realiza reparos em si ou equipamento: recupera 2d8 PV, remove Falha de arma, conserta item ou +1 Defesa.'],
      ['Médico', '<strong>Geral (Formação Médica):</strong> Concede treinamento na perícia Medicina de Combate. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Socorro de Combate):</strong> 1/rodada, gasta 1 PA para curar em 1d6 PV um aliado adjacente que tenha sofrido dano nesta rodada.<br>' +
        '• <strong>Canalizador (Medicina Arcana):</strong> Sempre que uma conjuração sua recuperar pontos de vida, o alvo recupera um adicional de +1d6 PV.<br>' +
        '• <strong>Híbrido (Estimulante Tecno-Arcano):</strong> 1/Descanso Curto (2 PA); cura uma criatura adjacente em 2d6 PV.<br>' +
        '• <strong>Vanguardista (Médico de Linha):</strong> 1/Descanso Curto, quando um aliado adjacente chegar a 0 PV, pode usar 1 Reação para mantê-lo com 1 PV.<br>' +
        '• <strong>Ciborgue (Tecno-Cura):</strong> Ao completar um Descanso Curto, recebe 3 cargas de Tecno-Cura (máx 3). Gasta 1 PA para usar uma carga em alvo adjacente e recuperar 2d6 PV; se for Ciborgue, restaura também 1 PP.'],
      ['Investigador', '<strong>Geral (Olhar Investigativo):</strong> Concede treinamento em Investigação. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Identificação de Alvo):</strong> 1/rodada, contra alvo observado por pelo menos 1 rodada, recebe +1 VA.<br>' +
        '• <strong>Canalizador (Leitura Arcana):</strong> Recebe +2 para identificar magias ou efeitos ativos; sucesso revela se a função é ofensiva, defensiva ou controle.<br>' +
        '• <strong>Híbrido (Análise de Sistemas):</strong> Recebe +2 em Tecnologia & Sistemas para identificar, analisar ou desativar robôs, drones e sistemas eletrônicos.<br>' +
        '• <strong>Vanguardista (Leitura do Campo):</strong> No início do combate, escolhe uma criatura percebida; recebe +2 Defesa contra ela até o fim da primeira rodada.<br>' +
        '• <strong>Ciborgue (Leitura Estrutural):</strong> Observar criatura tecnológica por 1 turno garante +2 em Tecnologia & Sistemas contra ela. Identifica Fraqueza, Defesa, Mobilidade, Armamento ou Sensores.'],
      ['Criminoso', '<strong>Geral (Conhecimento das Ruas):</strong> Concede treinamento em Furtividade. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Saque Ilegal):</strong> 1/rodada, sacar ou trocar armas compatíveis com Acesso Rápido custa 0 PA.<br>' +
        '• <strong>Canalizador (Ritual Clandestino):</strong> Ao conjurar sem linha de visão de inimigos, ganha +1 de resultado de acerto no minijogo.<br>' +
        '• <strong>Híbrido (Gambiarra):</strong> 1/rodada ao interagir com modificação ou equipamento, ganha +1 VA ou +1 Defesa até o início de seu próximo turno.<br>' +
        '• <strong>Vanguardista (Intimidação Brutal):</strong> Ao acertar corpo a corpo, 1 PA força o alvo a testar Imposição contra sua Defesa; falha aplica Assustado por 1 rodada.<br>' +
        '• <strong>Ciborgue (Invasão Improvisada):</strong> 1/rodada, usa Tecnologia & Sistemas em máquinas/fechaduras/eletrônicos. Se o alvo estiver Marcado, recebe +2 no teste.'],
      ['Pesquisador Arcano', '<strong>Geral (Estudos Arcanos):</strong> Concede treinamento em História Arcana ou Simbologia & Runas. Se já possuir, recebe especialização.<br><br>' +
        '• <strong>Atirador (Munição Rúnica):</strong> 1/Descanso Curto; prepara munição especial rúnica em quantidade igual à capacidade do carregador da arma.<br>' +
        '• <strong>Canalizador (Teoria do Fluxo):</strong> 1/rodada, após minijogo de runas bem-sucedido, permite ignorar 1 erro adicional cometido.<br>' +
        '• <strong>Híbrido (Sincronização Arcana):</strong> Ao gastar Cargas do Núcleo, ganha +2 no próximo teste de Sintonia Arcana realizado até o fim do próximo turno.<br>' +
        '• <strong>Vanguardista (Runas de Proteção):</strong> 1/Descanso Curto; concede +3 RD mágica a um aliado tocado durante 2 rodadas.<br>' +
        '• <strong>Ciborgue (Interface Tecno-Arcana):</strong> 1/rodada ao analisar máquina arcana, escolhe +2 Tecnologia ou +2 Sintonia. Se identificar corretamente, recupera 1 PP.'],
      ['Sobrevivente', '<strong>Geral (Sobrevivência):</strong> Concede treinamento em Fortitude. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Instinto de Sobrevivência):</strong> Enquanto estiver com metade ou menos do seu PV Máximo, recebe +1 VA.<br>' +
        '• <strong>Canalizador (Concentração sob Pressão):</strong> Com metade ou menos do seu PV Máximo, recebe +2 em Fortitude para manter conjurações.<br>' +
        '• <strong>Híbrido (Núcleo de Emergência):</strong> Com metade ou menos do seu PV, gastar Carga concede +1 Defesa até o início do seu próximo turno.<br>' +
        '• <strong>Vanguardista (Não Cair):</strong> 1/rodada, quando sofrer um efeito que o deixaria Caído, gastar 1 PA permite permanecer de pé.<br>' +
        '• <strong>Ciborgue (Instinto de Preservação):</strong> Com metade ou menos do seu PV Máximo, recebe +1 Defesa e +1 Fortitude contra máquinas/construtos. 1/rodada ao ser atingido por elas, move 1,5m sem OA.'],
      ['Mercenário', '<strong>Geral (Treinamento Operacional):</strong> Concede treinamento em Armas de Fogo ou Briga/Corpo a Corpo. Se já possuir, recebe especialização.<br><br>' +
        '• <strong>Atirador (Contrato de Abate):</strong> No primeiro ataque da cena, escolhe um Alvo Prioritário; recebe 1/rodada +1 VA contra ele.<br>' +
        '• <strong>Canalizador (Operação Precisa):</strong> Conjurações de alvo único recebem +1 de resultado de acerto no minijogo.<br>' +
        '• <strong>Híbrido (Equipamento de Missão):</strong> Após Descanso Completo, escolhe um equipamento para receber +1 VA ou +1 Defesa até o próximo Descanso Completo.<br>' +
        '• <strong>Vanguardista (Contrato de Proteção):</strong> No início do combate, escolhe um aliado; enquanto estiver a até 3m dele, concede +1 Defesa e +1 RD física.<br>' +
        '• <strong>Ciborgue (Contrato de Caça):</strong> Primeiro ataque contra criatura tecnológica na cena a designa como Alvo Contratado. 1/rodada +1 VA contra ela. Se destruí-la, recupera 1 PP.'],
      ['Atleta', '<strong>Geral (Condicionamento):</strong> Concede treinamento na perícia Atletismo. Caso já possua, recebe especialização.<br><br>' +
        '• <strong>Atirador (Movimento e Tiro):</strong> 1/rodada, após disparo, gastar 1 PA permite se mover por 3 metros sem provocar Ataques de Oportunidade.<br>' +
        '• <strong>Canalizador (Concentração Física):</strong> Ao sofrer dano durante conjuração, recebe +2 no próximo teste de Fortitude para manter a magia ativa.<br>' +
        '• <strong>Híbrido (Mobilidade Integrada):</strong> 1/rodada, após usar habilidade que gaste Carga, permite mover-se 3m gastando 0 PA.<br>' +
        '• <strong>Vanguardista (Investida):</strong> Se mover pelo menos 6 metros em linha reta em direção a um inimigo antes de atacar corpo a corpo, recebe +2 VA.<br>' +
        '• <strong>Ciborgue (Servomotores Adaptados):</strong> Concede bônus passivo de +2 Atletismo e +1,5m de deslocamento. 1/rodada, após ataque corpo a corpo, move 3m sem gastar PA.'],
      ['Operador', '<strong>Geral (Operações Táticas):</strong> Concede treinamento em Tecnologia & Sistemas ou Percepção / Prontidão. Se já treinado, recebe especialização.<br><br>' +
        '• <strong>Atirador (Aquisição de Alvo):</strong> Usando visores ou miras, recebe +1 VA no primeiro ataque realizado após a aquisição do alvo.<br>' +
        '• <strong>Canalizador (Interface Arcana):</strong> Ao usar focos integrados ou equipamentos de controle de éter, recebe +1 de resultado no minijogo.<br>' +
        '• <strong>Híbrido (Integração de Sistemas):</strong> Tecnologia & Sistemas pode ser usada para operar, hackear ou consertar no lugar de outras perícias (+2 no teste).<br>' +
        '• <strong>Vanguardista (Plataforma Defensiva):</strong> 1/rodada enquanto estiver adjacente a uma barreira ou cobertura, recebe +1 Defesa.<br>' +
        '• <strong>Ciborgue (Protocolo Tático):</strong> 1/rodada após analisar máquina, escolhe entre +1 VA, +1 Defesa ou +2 Tecnologia até seu próximo turno. Se Marcado, escolhe dois benefícios.']
    ]}
  ]

  const nav = document.querySelector('#book-nav')
  const content = document.querySelector('#wiki-content')
  const search = document.querySelector('#wiki-search')
  const details = []
  const addDetail = (title, body, kicker = 'Regra detalhada') => { details.push({title, body, kicker}); return details.length - 1 }

  const classMechanics = {
    'Atirador': [
      { name: 'Olho Clínico', desc: '<strong>Pontos de Precisão + Olho Clínico (Nível 1):</strong> +2 VA contra alvos a 9m ou mais. Limite de Pontos de Precisão é 3 + FOC. Gerados ao: gastar 1 PA em Mirar, terminar o turno sem se mover, ou crítico com arma longa (máx. 1/rodada de cada fonte). Recupera tudo no Descanso Curto.' },
      { name: 'Mira Estável', desc: '<strong>Mira Estável (Nível 2):</strong> Recebe +2 VA contra alvos que estejam em Cobertura Leve, contanto que essa cobertura esteja a até 9 metros do Atirador.' },
      { name: 'Disparo Rápido', desc: '<strong>Disparo Rápido (Nível 3):</strong> Custo: 2 PA + 1 Ponto de Precisão. Realiza um segundo disparo em sequência imediata, sendo este disparo gratuito e sem a penalidade normal de -1 VA.' },
      { name: 'Ajuste de Balística', desc: '<strong>Ajuste de Balística (Nível 4):</strong> Concede +3 metros ao alcance efetivo de suas armas de fogo.' },
      { name: 'Cadência Operacional', desc: '<strong>Cadência Operacional (Nível 5):</strong> 1 vez por rodada, permite recarregar uma arma leve ou trocar um carregador descartável gastando 0 PA.' },
      { name: 'Respiro Tático', desc: '<strong>Respiro Tático (Nível 6):</strong> Custo: 1 PA. Permite se mover por até 3 metros sem provocar Ataques de Oportunidade.' },
      { name: 'Disparo de Penetração', desc: '<strong>Disparo de Penetração (Nível 7):</strong> Custo: 2 PA + 1 Ponto de Precisão. O próximo disparo ignora até 4 pontos de RD física do alvo.' },
      { name: 'Fogo de Supressão', desc: '<strong>Fogo de Supressão (Nível 8):</strong> Custo: 3 PA + 2 Pontos de Precisão. Cria um cone de supressão de 9 metros. Alvos devem passar em teste de Reflexo (CD 15) ou sofrerão -2 VA e terão seu movimento reduzido pela metade.' },
      { name: 'Postura do Caçador', desc: '<strong>Postura do Caçador (Nível 9):</strong> Ao usar uma arma longa apoiada ou com bipé, o personagem não sofre a penalidade padrão de ataque por estar na condição Caído.' },
      { name: 'Mestria Balística', desc: '<strong>Mestria Balística (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Atirador:<br><br>• <strong>Franco-Atirador:</strong> Focado em tiros de elite de longa distância e perfuração profunda.<br>• <strong>Pistoleiro Tático:</strong> Focado em sequências rápidas com pistolas e alta mobilidade.<br>• <strong>Caçador Arcano:</strong> Especializado em caçar magos e silenciar habilidades mágicas com munição modificada.' }
    ],
    'Canalizador': [
      { name: 'Ajuste Fino', desc: '<strong>Ajuste Fino + Fluxo Contínuo (Nível 1):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Permite ignorar 1 erro cometido no minijogo ou cancelar a condição Flinch. O Fluxo Contínuo reduz a velocidade pós-acerto para 10%.' },
      { name: 'Mente Expandida', desc: '<strong>Mente Expandida (Nível 2):</strong> Adiciona +1,5 segundos ao tempo inicial disponível para a resolução do minijogo arcano.' },
      { name: 'Emanação Rúnica', desc: '<strong>Emanação Rúnica de Repulsão (Nível 3):</strong> Custo: 2 PA + 1 Ponto de Sintonia + 10 de Exaustão. Causa 2d6 de dano de força e empurra criaturas adjacentes por até 3 metros.' },
      { name: 'Barreira de Éter', desc: '<strong>Barreira de Éter (Nível 4):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Cria um escudo de proteção com 20 + CONH de PV temporários, com duração de 1 rodada.' },
      { name: 'Sintonia Rúnica', desc: '<strong>Sintonia Rúnica (Nível 5):</strong> Conjurações de 1º e 2º Círculo exigem 1 runa a menos para serem concluídas (respeitando o mínimo de 1 runa).' },
      { name: 'Recalibração Mental', desc: '<strong>Recalibração Mental (Nível 6):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Permite recuperar imediatamente 10 pontos de Exaustão.' },
      { name: 'Foco de Concentração', desc: '<strong>Foco de Concentração Extrema (Nível 7):</strong> Concede um bônus de +4 em testes de Fortitude para manter uma conjuração ativa sob adversidades ou danos.' },
      { name: 'Modulação de Amplitude', desc: '<strong>Modulação de Amplitude (Nível 8):</strong> Custo: 2 PA + 2 Pontos de Sintonia. Eleva o dado de dano de uma conjuração em 1 estágio (ex.: d6 para d8).' },
      { name: 'Mente Inviolável', desc: '<strong>Mente Inviolável (Nível 9):</strong> O Canalizador torna-se completamente imune à condição Assustado provocada por magias, dominação, encanto ou sono mágico.' },
      { name: 'Domínio da Ruptura', desc: '<strong>Domínio da Ruptura Arcana (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Canalizador:<br><br>• <strong>Arcanista Elemental:</strong> Especialista em canalizar e amplificar danos de fogo, frio e eletricidade.<br>• <strong>Manipulador Espacial:</strong> Focado em distorções dimensionais, teletransportes táticos e controle de área.<br>• <strong>Taumaturgo de Sobrecarga:</strong> Mestre em assumir riscos extremos para conjurações ultra-potentes e purgar colapsos.' }
    ],
    'Híbrido': [
      { name: 'Munição Encantada', desc: '<strong>Munição Encantada + Sintonia Tecno-Mágica (Nível 1):</strong> Custo: 1 PA + 1 Carga. Seu próximo ataque recebe +1d6 de dano arcano. <br><br><i>Regra de Cargas do Núcleo:</i> Somente habilidades marcadas como Tecnologia ou Arcano geram Cargas (máx 3). Usar uma de cada na mesma rodada gera +1 Carga.' },
      { name: 'Adaptabilidade', desc: '<strong>Adaptabilidade de Sistemas (Nível 2):</strong> Permite utilizar o atributo Conhecimento (CONH) no lugar de Força (FOR) para o uso de armas pesadas ou modificações mecânicas.' },
      { name: 'Golpe Arcano-Infuso', desc: '<strong>Golpe Arcano-Infuso (Nível 3):</strong> Custo: 2 PA + 1 Carga. Desfere um ataque que causa +1d8 de dano arcano adicional.' },
      { name: 'Sobrecarga do Núcleo', desc: '<strong>Sobrecarga do Núcleo (Nível 4):</strong> Custo: 1 PA + 1 Carga. Concede +2 de margem de acerto crítico para o próximo ataque realizado.' },
      { name: 'Malha de Tecido Rúnico', desc: '<strong>Malha de Tecido Rúnico (Nível 5):</strong> Concede +2 de RD física e mágica contra danos de fogo, eletricidade e arcano.' },
      { name: 'Recarga Sincronizada', desc: '<strong>Recarga Sincronizada (Nível 6):</strong> Custo: 1 PA + 1 Carga. Permite recarregar uma arma como parte da mesma ação.' },
      { name: 'Emissão de Campo Estático', desc: '<strong>Emissão de Campo Estático (Nível 7):</strong> Custo: 2 PA + 1 Carga. Emite uma descarga em área de 4 metros, causando 2d6 de dano elétrico e reduzindo em 1 os PA dos alvos no próximo turno.' },
      { name: 'Reciclagem de Energia', desc: '<strong>Reciclagem de Energia (Nível 8):</strong> 1 vez por rodada, ao sofrer dano elétrico ou arcano, recupera imediatamente 5 pontos de Exaustão.' },
      { name: 'Injeção de Éter Medicinal', desc: '<strong>Injeção de Éter Medicinal (Nível 9):</strong> Custo: 1 PA + 1 Carga. Cura 2d10 + CON pontos de vida (PV) do usuário ou de um aliado adjacente.' },
      { name: 'Síntese Absoluta', desc: '<strong>Síntese Absoluta do Ferro & Arcano (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Híbrido:<br><br>• <strong>Engenheiro Arcano:</strong> Mestre em drones táticos, torres e defesas móveis.<br>• <strong>Lâmina/Gatilho Rúnico:</strong> Alterna entre ataques de proximidade com espadas rúnicas e disparos, criando combos devastadores.<br>• <strong>Infiltrador:</strong> Focado em camuflagem óptica, furtividade extrema e hologramas.' }
    ],
    'Vanguardista': [
      { name: 'Blindagem Biológica', desc: '<strong>Inflexibilidade + Blindagem Biológica (Nível 1):</strong> Concede um bônus passivo de +2 em testes de Fortitude. O limite máximo de pontos de Inflexibilidade é 5 + CON.' },
      { name: 'Postura Imóvel', desc: '<strong>Postura Imóvel (Nível 2):</strong> O Vanguardista torna-se completamente imune a efeitos de deslocamento forçado causados por inimigos.' },
      { name: 'Provocação Tática', desc: '<strong>Provocação Tática (Nível 3):</strong> Custo: 1 PA. Força os inimigos em uma área de até 4 metros a preferirem atacar o Vanguardista como alvo prioritário.' },
      { name: 'Pele de Ferro', desc: '<strong>Pele de Ferro Aprimorada (Nível 4):</strong> Concede +2 de Defesa contra ataques à distância e +2 de RD física.' },
      { name: 'Retaliação de Impacto', desc: '<strong>Retaliação de Impacto (Nível 5):</strong> Custo: 1 Ponto de Inflexibilidade. Causa 1d8 de dano ao atacante ao conseguir bloquear ou absorver um ataque.' },
      { name: 'Interceptação Balística', desc: '<strong>Interceptação Balística (Nível 6):</strong> Custo: Reação + 1 Ponto de Inflexibilidade. Protege um aliado adjacente e reduz o dano transferido em 5.' },
      { name: 'Escudo de Absorção', desc: '<strong>Escudo de Absorção Absoluta (Nível 7):</strong> Custo: 2 PA + 2 Pontos de Inflexibilidade. Anula completamente o dano do próximo ataque físico ou explosivo sofrido.' },
      { name: 'Ancoragem Territorial', desc: '<strong>Ancoragem Territorial (Nível 8):</strong> Custo: 1 PA + 2 Pontos de Inflexibilidade. Concede +4 de RD física, impedindo o Vanguardista de se mover voluntariamente até seu próximo turno.' },
      { name: 'Vigor Inextinguível', desc: '<strong>Vigor Inextinguível (Nível 9):</strong> Ao chegar a 0 PV, permite que o Vanguardista permaneça consciente e agindo normalmente por mais 1 rodada.' },
      { name: 'Baluarte Supremo', desc: '<strong>Baluarte Supremo do Ferro (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Vanguardista:<br><br>• <strong>Bastião:</strong> Escudo vivo impenetrável, capaz de estender cúpulas protetoras para aliados.<br>• <strong>Demolidor:</strong> Focado em quebrar armaduras, causar tremores mecânicos e desferir abalos brutais.<br>• <strong>Guardião Rúnico:</strong> Funde runas de proteção e absorve energia mágica dos inimigos para carregar defesas.' }
    ],
    'Ciborgue': [
      { name: 'Visão de Sistema', program: 'Custo: 1 PP. Recebe +2 em testes de Percepção / Prontidão e visualiza assinaturas térmicas por 3 rodadas.', sobrecarga: '<strong>Scanner Tático:</strong> Revela fraquezas estruturais ocultas do alvo, garantindo +1 na margem de crítico contra ele.' },
      { name: 'Corpo Aumentado', program: 'Custo: 1 PP. Ativa servomotores garantindo +1 em Força (FOR) ou Constituição (CON) por 3 rodadas.', sobrecarga: '<strong>Overdrive Motorizado:</strong> Concede adicionalmente +3 metros de deslocamento durante a ativação.' },
      { name: 'Ponto Fraco', program: 'Custo: 1 PP. Adiciona +1d6 de dano de precisão contra alvos Marcados por 3 rodadas.', sobrecarga: '<strong>Ponto Fraco Supremo:</strong> Eleva o dano extra para +2d6 e ignora a RD física do alvo.' },
      { name: 'Interface de Combate', program: 'Custo: 1 PP. Otimiza o tempo de resposta, garantindo +1 de Iniciativa e +1,5m de movimento por 3 rodadas.', sobrecarga: '<strong>Protocolo de Assalto:</strong> Concede imediatamente +1 PA em seu próximo turno.' },
      { name: 'Protocolo Antimaterial', program: 'Custo: 1 PP. Seus ataques causam +1d6 de dano contra máquinas, construtos e barreiras por 3 rodadas.', sobrecarga: '<strong>Protocolo Antimaterial Supremo:</strong> Eleva o dano extra contra essas ameaças para +2d6.' },
      { name: 'Reparação de Campo', program: 'Custo: 1 PP. Restaura 1d10 + CON pontos de vida (PV) do próprio Ciborgue.', sobrecarga: '<strong>Reparação Total:</strong> Restaura o dobro de PV e remove 1 condição física negativa ativa (como Queimando ou Congelado).' },
      { name: 'Caçador de Máquinas', program: 'Custo: 1 PP. Concede +2 em testes de Tecnologia & Sistemas e jogadas de ataque contra máquinas por 3 rodadas.', sobrecarga: '<strong>Caçador de Máquinas Supremo:</strong> Eleva o bônus para +4 e permite realizar um ataque gratuito contra a máquina ao hackeá-la.' },
      { name: 'Sobrecarga de Protocolo', program: 'Custo: 1 PP. Sobrecarrega o núcleo para conceder +1 PA neste turno.', sobrecarga: '<strong>Sobrecarga de Protocolo Supremo:</strong> Concede +2 PA neste turno, ao custo de sofrer 1d6 de dano térmico no final da rodada.' },
      { name: 'Arsenal Integrado', program: 'Custo: 1 PP. Integra uma de suas armas de fogo ao próprio corpo por 3 rodadas, reduzindo o seu Recuo a 0.', sobrecarga: '<strong>Arsenal Integrado Supremo:</strong> O ataque integrado ignora cobertura leve e concede +1 de dano por dado rolado.' },
      { name: 'Arquitetura de Combate', program: 'O Ciborgue consolida seus sistemas integrados e se prepara para a especialização de sua arquitetura tática avançada.', sobrecarga: '<strong>Arquitetura de Elite:</strong> Libera a escolha de uma das Trilhas permanentes do Ciborgue (Samurai Cibernético, Arsenal de Combate ou Caçador de Máquinas). No nível 10, os Protocolos de Classe tornam-se passivos permanentes, e as Sobrecargas de cada Protocolo passam a agir como novos Protocolos Ativos Independentes (1 PA + 1 PP).' }
    ]
  }

  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
  const match = (chapter, query) => !query || JSON.stringify(chapter).toLowerCase().includes(query)

  function renderNav() { nav.innerHTML = chapters.map(chapter => `<a class="chapter-link" href="#${chapter.id}">${chapter.number} · ${chapter.title}<span>→</span></a>`).join('') }
  
  function renderChapter(chapter) {
    const blocks = chapter.blocks ? `<div class="rule-grid">${chapter.blocks.map(block => { const detail = addDetail(block[0], block[1]); return `<button class="rule-card" data-detail="${detail}"><h4>${block[0]}</h4><p>${block[1]}</p></button>` }).join('')}</div>` : ''
    
    const classEntries = chapter.classes ? chapter.classes.map(item => { 
      const mechanics = classMechanics[item[0]] || []; 
      return `<article class="class-entry">
        <h4>${item[0]}</h4>
        <p class="class-meta">${item[1]}</p>
        <div class="power-list">${item[2].map((power, index) => { 
          const mechanic = mechanics[index]; 
          let body = 'Poder de Classe.';
          if (mechanic) {
            if (item[0] === 'Ciborgue') {
              body = `<strong>Protocolo (Ativo):</strong> ${mechanic.program || mechanic.protocol}<br><strong>Sobrecarga:</strong> ${mechanic.sobrecarga}`;
            } else {
              body = mechanic.desc || mechanic || 'Poder de Classe.';
            }
          }
          const detail = addDetail(`${item[0]} · Nível ${index + 1} · ${power}`, body, 'Poder de Classe'); 
          return `<button class="power" data-detail="${detail}">
            <span class="power-level">${index + 1}</span>
            <span class="power-name">${power}</span>
            <span class="power-desc">${body}</span>
          </button>` 
        }).join('')}</div>
      </article>` 
    }).join('') : ''
    
    return `<section class="wiki-chapter" id="${chapter.id}"><div class="chapter-heading"><span class="chapter-number">${chapter.number}</span><h3>${chapter.title}</h3></div><p class="chapter-lead">${chapter.lead}</p>${blocks}${classEntries}</section>`
  }

  function render() { details.length = 0; const query = search.value.trim().toLowerCase(); const visible = chapters.filter(chapter => match(chapter, query)); content.innerHTML = visible.length ? visible.map(renderChapter).join('') : '<p class="search-empty">Nenhuma regra encontrada.</p>'; renderNav(); }
  function openDetail(index) { const detail = details[index]; if (!detail) return; document.querySelector('#detail-kicker').textContent = detail.kicker; document.querySelector('#detail-title').textContent = detail.title; document.querySelector('#detail-body').innerHTML = `<p>${detail.body}</p>`; document.querySelector('#detail-layer').classList.add('open'); document.querySelector('#detail-layer').setAttribute('aria-hidden','false') }
  function closeDetail() { document.querySelector('#detail-layer').classList.remove('open'); document.querySelector('#detail-layer').setAttribute('aria-hidden','true') }
  render()
  search.addEventListener('input', render)
  content.addEventListener('click', event => { const trigger = event.target.closest('[data-detail]'); if (trigger) openDetail(Number(trigger.dataset.detail)) })
  document.querySelectorAll('[data-close-detail]').forEach(element => element.addEventListener('click', closeDetail))
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDetail() })
})()