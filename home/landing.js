(() => {
  'use strict'

  const classes = [
    ['atirador','Atirador','Distância · Precisão','Especialista em combate à distância e pressão balística.','FOC, REF',28,4,'Pontos de Precisão'],
    ['canalizador','Canalizador','Conjuração · Controle','Converte teoria e sintonia arcana em controle do campo.','CONH, CON',24,3,'Pontos de Sintonia'],
    ['hibrido','Híbrido','Tecnologia · Arcano','Une tecnologia e arcano para alternar entre funções.','CONH, FOC',30,4,'Cargas do Núcleo'],
    ['vanguardista','Vanguardista','Proteção · Absorção','A linha de frente que transforma impacto em resposta.','CON, FOR',36,5,'Inflexibilidade'],
    ['ciborgue','Ciborgue','Caça Mecânica · Adaptação','Predador tecnológico que explora pontos fracos.','CON, FOC',32,4,'Pontos de Protocolo']
  ]
  const origins = [['soldado','Soldado','Treinamento Militar'],['artesao','Artesão','Conhecimento Técnico'],['medico','Médico','Formação Médica'],['investigador','Investigador','Olhar Investigativo'],['criminoso','Criminoso','Conhecimento das Ruas'],['pesquisador-arcano','Pesquisador Arcano','Estudos Arcanos'],['sobrevivente','Sobrevivente','Sobrevivência'],['mercenario','Mercenário','Treinamento Operacional'],['atleta','Atleta','Condicionamento'],['operador','Operador','Operações Táticas']]
  const weapons = [['Pistola','1d4',12,12,'18×2',6,0],['Revólver','1d6',12,6,'17×2',3,1],['Submetralhadora','1d6',12,30,'19×2',15,2],['Espingarda','2d6',6,6,'16×2',3,2],['Fuzil','1d10',18,20,'18×2',10,2],['Fuzil de Atirador','1d12',24,10,'17×2',5,2],['Sniper','1d20',36,5,'16×2',2,3],['Metralhadora','1d8',18,40,'19×2',20,4],['Escopeta Devastadora','3d6',6,4,'16×2',2,3]]
  const meleeWeapons = [
    ['Faca Tática', '1d4', 'Perfurante · C.C.', '17×2', '1', 'Leve: empunhada junto a outra arma leve'],
    ['Canivete', '1d4', 'Perfurante · C.C.', '18×2', '1', 'Leve: empunhada junto a outra arma leve'],
    ['Cassetete', '1d6', 'Contundente · C.C.', '18×2', '1', 'Não Letal: pode causar dano não letal'],
    ['Bastão Retrátil', '1d6', 'Contundente · C.C.', '17×2', '1', 'Tática: +1 Defesa enquanto empunhado'],
    ['Pé de Cabra', '1d6', 'Contundente · C.C.', '19×2', '2', 'Improvisada: +2 dano contra objetos e barreiras'],
    ['Machete', '1d8', 'Cortante · C.C.', '18×2', '1', 'Leve: empunhada junto a outra arma leve'],
    ['Machado de Combate', '1d10', 'Cortante · C.C.', '18×2', '2', 'Brutal: +1 dano contra alvos com <50% PV'],
    ['Espada Curta', '1d8', 'Perfurante · C.C.', '17×2', '1', 'Leve: empunhada junto a outra arma leve'],
    ['Espada Longa', '1d10', 'Cortante · C.C.', '18×2', '2', 'Versátil: 1 ou 2 mãos (+1 dano com 2 mãos)'],
    ['Katana', '1d10', 'Cortante · C.C.', '17×2', '2', 'Precisão: +1 VA no primeiro ataque C.C. do turno'],
    ['Desarmado', '1d4', 'Contundente · C.C.', '20×2', '0', 'Ataque corpo a corpo desarmado padrão']
  ]
  const skills = ['Fortitude','Tolerância Arcana','Simbologia & Runas','História Arcana','Tecnologia & Sistemas','Medicina de Combate','Investigação','Armas de Fogo','Percepção/Prontidão','Intuição','Sintonia Arcana','Briga/Corpo a Corpo','Atletismo','Imposição','Esquiva','Acrobacia','Furtividade','Pilotagem','Prestidigitação']
  const trails = {
    atirador: [['Franco-Atirador','Longo alcance · precisão extrema','Tiro de Elite, Balística Extrema e domínio de armas longas.'],['Pistoleiro Tático','Mobilidade · armas leves · pressão curta','Saque Instintivo, Movimento de Combate e troca rápida de armas.'],['Caçador Arcano','Rastreio mágico · contram magia · caça','Munição Anti-Éter, Rastreio Etéreo e respostas contra o arcano.']],
    canalizador: [['Arcanista Elemental','Elementos · versatilidade · efeitos','Infusão Elemental e domínio de efeitos elementais.'],['Manipulador Espacial','Posicionamento · teleporte · gravidade','Passo Etéreo, Saltos Espaciais e Transposição Tática.'],['Taumaturgo de Sobrecarga','Risco · exaustão · poder bruto','Potência da Ruptura e conjuração de risco.']],
    hibrido: [['Engenheiro Arcano','Drones · suporte · engenharia','Módulos de Campo, Forja Expressa e Drone Tático.'],['Lâmina/Gatilho Rúnico','Lâmina · armas leves · combate integrado','Cadência Alternada e alternância entre corpo a corpo e fogo.'],['Infiltrador','Furtividade · emboscada · execução','Camuflagem Rúnica, Passos de Espectro e ataques de emboscada.']],
    vanguardista: [['Bastião','Proteção · barreiras · ancoragem','Muralha Viva, Ancoragem de Esquadrão e defesa territorial.'],['Demolidor','Demolição · impacto · quebra de proteção','Especialista em Demolição e Abalo Brutal contra proteção.'],['Guardião Rúnico','Defesa arcana · reflexo · proteção de aliados','Escudo Rúnico e Retaliação Arcana para proteger o grupo.']],
    ciborgue: [['Samurai Cibernético','Lâmina · protocolo · adaptação','Combate integrado com corpo aumentado e protocolos ofensivos.'],['Arsenal de Combate','Armas · sistemas · destruição','Integração de arsenal e exploração de pontos fracos mecânicos.'],['Caçador de Máquinas','Rastreio · sistemas · predador','Leitura de sistemas, caça mecânica e sabotagem.']]
  }
  const classPowers = {
    atirador: ['Pontos de Precisão + Olho Clínico','Mira Estável','Disparo Rápido','Ajuste de Balística','Cadência Operacional','Respiro Tático','Disparo de Penetração','Fogo de Supressão','Postura do Caçador','Mestria Balística'],
    canalizador: ['Ajuste Fino + Fluxo Contínuo','Mente Expandida','Emanação Rúnica de Repulsão','Barreira de Éter','Sintonia Rúnica','Recalibração Mental','Foco de Concentração Extrema','Modulação de Amplitude','Mente Inviolável','Domínio da Ruptura Arcana'],
    hibrido: ['Munição Encantada','Sintonia Tecno-Mágica','Adaptabilidade de Sistemas','Golpe Arcano-Infuso','Sobrecarga do Núcleo','Malha de Tecido Rúnico','Recarga Sincronizada','Emissão de Campo Estático','Reciclagem de Energia','Injeção de Éter Medicinal'],
    vanguardista: ['Inflexibilidade + Blindagem Biológica','Postura Imóvel','Provocação Tática','Pele de Ferro Aprimorada','Retaliação de Impacto','Interceptação Balística','Escudo de Absorção Absoluta','Ancoragem Territorial','Vigor Inextinguível','Baluarte Supremo do Ferro'],
    ciborgue: ['Pontos de Protocolo + Visão de Sistema','Corpo Aumentado','Ponto Fraco','Interface de Combate','Protocolo Antimaterial','Reparação de Campo','Caçador de Máquinas','Sobrecarga de Protocolo','Arsenal Integrado','Arquitetura de Combate']
  }
  const wikiSections = {
    'Universo & Lore': {
      lead: 'A realidade de um planeta fragmentado entre arcanismo selvagem e tecnologia de ponta.',
      cards: [
        ['O Arcano', 'Presente antes das primeiras civilizações. Não foi criado nem concedido: ele simplesmente existe. Todo humano é um catalisador em potencial, gerando o mais profundo terror social e vigilância estrita contra o risco de aniquilação.'],
        ['O Ferro', 'A tecnologia previsível construída pela humanidade como blindagem e alternativa ao Arcano. Cibernética, armas balísticas de alta cadência e exoesqueletos que oferecem certezas onde a magia traz instabilidade.'],
        ['A Terra que Sobreviveu', 'Megacidades verticais protegidas por perímetros eletrorúnicos contra as anomalias dos ermos. Neon fuliginoso, chuva ácida e governos que se tornaram carimbos de cartório para conglomerados.'],
        ['Monstros e Mutações', 'Bio-armas geradas pela infusão forçada de arcano em fauna e cobaias humanas. Não pertencem a mitos ancestrais; fogem de laboratórios privados com registros de lote e números de série cravados no chassi.'],
        ['Brasil · BRAVIA & BRASA', 'O território nacional é o epicentro da megacorporação Bravia Arcanotecnologia e seu braço clandestino BRASA. Especialistas em contenção de éter e espionagem selvagem: "Enquanto houver cobra fumando, haverá BRASA."']
      ]
    },
    'Giga Empresas': {
      lead: '20 conglomerados soberanos e seus setores secretos de inteligência e guerra corporativa.',
      cards: [
        ['🇧🇷 Brasil — BRAVIA', 'Inteligência: BRASA. Hegemonia em arcanotecnologia de campo, bio-engenharia de éter, contenção de bio-armas e operações selva/urbano.'],
        ['🇺🇸 EUA — VALOR', 'Inteligência: VANT. Complexo industrial de defesa bélica, PMCs corporativas globais, armaduras táticas e satélites orbitais.'],
        ['🇨🇳 China — TIANLONG', 'Inteligência: LONGA. Matrizes rúnicas industriais, vigilância preditiva de éter e manufatura em massa de componentes arcanos.'],
        ['🇯🇵 Japão — KAGE', 'Inteligência: SHIN. Microeletrônica de precisão, ciber-implantes furtivos, síntese de dados arcanos e operações de sabotagem.'],
        ['🇩🇪 Alemanha — EISENWERK', 'Inteligência: WOLF. Engenharia pesada, exoesqueletos de tungstênio, ligas antimágicas e artilharia de pulso cinético.'],
        ['🇷🇺 Rússia — ZVEZDA', 'Inteligência: VOLK. Reatores de fissão arcana, extração em permafrost, tropas de contenção pesada e operações brutais.'],
        ['🇬🇧 Reino Unido — CROWN', 'Inteligência: BLACK. Mercados financeiros de éter, interceptação global de sinais, criptografia e infiltração aristocrática.'],
        ['🇫🇷 França — LUMIÈRE', 'Inteligência: OMBRE. Doutrinação cognitiva, bio-refinamento de cristais, ilusões meméticas e coerção diplomática.'],
        ['🇮🇳 Índia — VEDA', 'Inteligência: NETRA. Supercomputação quântico-arcana, inteligência artificial preditiva e satélites de rastreio de mana.'],
        ['🌐 Dossiê Global Completo', 'Itália (Aurelia/CORVO), Canadá (Northstar/FROST), Austrália (Southern Cross/DINGO), Coreia do Sul (Han/GWI), México (Quetzal/ÁGUILA), Indonésia (Garuda/NAGA), Arábia Saudita (Sabaa/RIMAL), África do Sul (Ubuntu/MAMBA), Turquia (Ayyildiz/BOZKURT), Argentina (Plata/CONDOR) e Espanha (Iberia/LANCE). Veja a Wiki completa para detalhes operacionais.']
      ]
    },
    'Core': {lead:'As regras que sustentam todas as cenas.', cards:[['Pontos de Ação','Todo personagem possui 3 PA por turno. Movimento, ataques e habilidades consomem PA conforme a regra específica.'],['Testes','Use 1d20 quando houver incerteza relevante. Some o atributo e os bônus aplicáveis à perícia ou situação.'],['Rodadas e turnos','Uma rodada termina quando todos agem. Cada personagem possui um turno e 1 Reação por rodada.'],['Descansos','Descanso Curto dura 30 minutos. Descanso Completo dura 8 horas, restaura recursos e reduz 1 Colapso.']]},
    'Combate': {lead:'Economia de ações, defesa e pressão no campo.', cards:[['Ações','A regra geral é 3 PA por turno, movimento base de 9m e 1 Reação por rodada. Uma habilidade específica pode criar exceção.'],['Ataques e VA Fixo','VA = 10 + FOC + bônus da arma + modificadores. O VA é um valor fixo que substitui o teste de acerto; compare-o com a Defesa e role apenas o dano.'],['Defesa e proteção','Defesa = 10 + CON + Proteção + modificadores. Escudos, cobertura e RD entram na resolução conforme o equipamento.'],['Condições','Caído, Assustado, Exaustão e Colapso possuem efeitos próprios; leia o efeito específico antes da regra geral.']]},
    'Personagem': {lead:'A estrutura para criar uma ficha consistente.', cards:[['Atributos','CON sustenta PV e resistência; CONH cobre tecnologia, investigação e arcano; FOC cobre precisão e concentração; FOR cobre físico; REF cobre mobilidade e testes de Esquiva.'],['Perícias','São 19 perícias oficiais. A Classe garante 1 perícia obrigatória e oferece escolhas adicionais.'],['Origens','Cada Origem fornece um benefício geral e uma manifestação que muda de acordo com a Classe.'],['Progressão','O sistema vai até o nível 14. A partir do nível 10, a escolha de Trilha se torna permanente.'],['Pontos de atributo','A criação começa com 10 pontos. A progressão concede +1 nos níveis 2, 4, 6, 8, 10 e 14. O limite 4 vale para a criação; a progressão pode ultrapassar esse valor quando permitido.']]},
    'Classes e Trilhas': {lead:'Cinco classes e três especializações para cada identidade.', cards:Object.entries(trails).flatMap(([id, list]) => { const c = classes.find(item => item[0] === id); return list.map(trail => [c[1] + ' · ' + trail[0], trail[1] + '. ' + trail[2]]) })},
    'Magia': {lead:'O arcano é um subsistema com tempo e risco próprios.', cards:[['Minijogo Arcano','A Tranca Arcana tem escala temporal própria e não deve ser convertida automaticamente em turnos ou rodadas.'],['Exaustão','Conjuração e efeitos arcanos podem gerar Exaustão, inclusive acima de 0.'],['Colapso','A referência consolidada usa: 0 normal, 1–4 sequela simples, 5–9 sequela crítica e 10 detonação.'],['Runas','Combine elementos para criar uma magia e teste a sequência no minijogo.']]},
    'Equipamentos': {lead:'Armas, alcance e recursos para levar à mesa.', cards:[['Armas de fogo','Cada arma informa dano, alcance, munição, crítico, falha e recuo. A arma principal fica registrada na ficha.'],['Corpo a corpo','A ficha pode registrar uma arma adjacente ou de alcance curto para ataques com FOR e Briga/Corpo a Corpo.'],['Falha','Falha é um limite de uso ou condição da arma, não uma falha aleatória automática em todo ataque.'],['Carga','FOR participa da capacidade física e da leitura de carga da personagem.']]}
  }
  const corps = [
    ['bravia', '🇧🇷 BRAVIA · Inteligência BRASA (Brasil)', 'Arcanotecnologia de ponta, bio-engenharia de éter e contenção de anomalias.'],
    ['valor', '🇺🇸 VALOR · Inteligência VANT (EUA)', 'Complexo militar-industrial, armaduras táticas e PMC global.'],
    ['tianlong', '🇨🇳 TIANLONG · Inteligência LONGA (China)', 'Matrizes rúnicas industriais e manufatura em massa de baterias de éter.'],
    ['kage', '🇯🇵 KAGE · Inteligência SHIN (Japão)', 'Nanotecnologia rúnica, ciber-implantes furtivos e lâminas térmicas.'],
    ['eisenwerk', '🇩🇪 EISENWERK · Inteligência WOLF (Alemanha)', 'Exoesqueletos blindados pesados, ligas antimágicas e artilharia de pulso.'],
    ['lumiere', '🇫🇷 LUMIÈRE · Inteligência OMBRE (França)', 'Ilusões meméticas, bio-refinamento de cristais e espionagem cultural.'],
    ['crown', '🇬🇧 CROWN · Inteligência BLACK (Reino Unido)', 'Mercados financeiros de éter, interceptação de sinais e infiltração.'],
    ['zvezda', '🇷🇺 ZVEZDA · Inteligência VOLK (Rússia)', 'Reatores de fissão arcana, tropas de choque e mineração no permafrost.'],
    ['veda', '🇮🇳 VEDA · Inteligência NETRA (Índia)', 'Supercomputação quântico-arcana e inteligência artificial preditiva.'],
    ['aurelia', '🇮🇹 AURELIA · Inteligência CORVO (Itália)', 'Tecno-alta-costura balística, arcanística estética e chantagem.'],
    ['northstar', '🇨🇦 NORTHSTAR · Inteligência FROST (Canadá)', 'Sistemas para frio extremo, anomalias boreais e patrulha polar.'],
    ['southern-cross', '🇦🇺 SOUTHERN CROSS · Inteligência DINGO (Austrália)', 'Contenção de fauna mutagênica do deserto e choque tático.'],
    ['han', '🇰🇷 HAN · Inteligência GWI (Coreia do Sul)', 'Realidade neural, guerra eletrônica de éter e ciber-segurança.'],
    ['quetzal', '🇲🇽 QUETZAL · Inteligência ÁGUILA (México)', 'Drones rápidos de fronteira, logística aérea e interceptação.'],
    ['garuda', '🇮🇩 GARUDA · Inteligência NAGA (Indonésia)', 'Arcanismo submarino profundo e patrulha arquipelágica.'],
    ['sabaa', '🇸🇦 SABAA · Inteligência RIMAL (Arábia Saudita)', 'Areias rúnicas refinadas e matrizes de energia solar-arcana.'],
    ['ubuntu', '🇿🇦 UBUNTU · Inteligência MAMBA (África do Sul)', 'Arcanometalurgia pesada de diamantes de éter e choque tático.'],
    ['ayyildiz', '🇹🇷 AYYILDIZ · Inteligência BOZKURT (Turquia)', 'Corredores euro-asiáticos e contrainteligência estratégica.'],
    ['plata', '🇦🇷 PLATA · Inteligência CONDOR (Argentina)', 'Arcanobio-agricultura e controle alimentar de bacias hídricas.'],
    ['iberia', '🇪🇸 IBERIA · Inteligência LANCE (Espanha)', 'Segurança naval no Atlântico-Mediterrâneo e escoltas corporativas.'],
    ['independente', '🏴 INDEPENDENTE · Mercenário Clandestino', 'Operador autônomo sem contrato corporativo formal.']
  ]
  const attributes = {CON:'Constituição', CONH:'Conhecimento', FOC:'Foco', FOR:'Força', REF:'Reflexo'}
  const costs = [0,1,2,4,7,8,9]
  const state = {id:'',name:'',concept:'',level:1,classId:'atirador',originId:'soldado',corpId:'bravia',trailIndex:0,weaponIndex:0,meleeIndex:0,shield:false,trainedSkills:[],attributes:{CON:0,CONH:0,FOC:0,FOR:0,REF:0}}
  const $ = selector => document.querySelector(selector)
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
  const selectedClass = () => classes.find(item => item[0] === state.classId) || classes[0]
  const progressionPoints = level => 10 + [2,4,6,8,10,14].filter(milestone => level >= milestone).length
  const spent = () => Object.values(state.attributes).reduce((sum, value) => sum + costs[value], 0)
  const derived = () => { const c = selectedClass(); const weapon = weapons[state.weaponIndex]; const resourceScore = state.classId === 'vanguardista' ? 5 + state.attributes.CON : state.classId === 'hibrido' ? 3 : 3 + (state.classId === 'canalizador' ? state.attributes.CONH : state.attributes.FOC); return {pv:c[5] + state.attributes.CON * (state.classId === 'vanguardista' ? 9 : state.classId === 'ciborgue' ? 8 : state.classId === 'hibrido' ? 7 : state.classId === 'atirador' ? 6 : 5) + Math.max(0,state.level - 1) * (c[6] + state.attributes.CON), va:10 + state.attributes.FOC, defense:10 + state.attributes.CON + (state.shield ? 2 : 0), resource:resourceScore, weapon} }

  $('#class-list').innerHTML = classes.map(c => `<article class="class-card"><strong>${c[1]}</strong><span>${c[2]}</span><p>${c[3]}</p></article>`).join('')
  $('#weapon-table').innerHTML = weapons.map(w => `<tr><td><b>${w[0]}</b></td><td>${w[1]}</td><td>${w[2]}m</td><td>${w[3]}</td><td>${w[4]}</td><td>${w[5]}</td></tr>`).join('')
  if ($('#melee-weapon-table')) {
    $('#melee-weapon-table').innerHTML = meleeWeapons.map(m => `<tr><td><b>${m[0]}</b></td><td>${m[1]}</td><td>${m[2]}</td><td>${m[3]}</td><td>${m[4]}</td><td>${m[5]}</td></tr>`).join('')
  }
  const tabFire = $('#tab-btn-fire')
  const tabMelee = $('#tab-btn-melee')
  const wrapFire = $('#wrap-weapons-fire')
  const wrapMelee = $('#wrap-weapons-melee')
  if (tabFire && tabMelee && wrapFire && wrapMelee) {
    tabFire.addEventListener('click', () => {
      tabFire.className = 'button button-accent'
      tabMelee.className = 'button button-quiet'
      wrapFire.style.display = 'block'
      wrapMelee.style.display = 'none'
    })
    tabMelee.addEventListener('click', () => {
      tabMelee.className = 'button button-accent'
      tabFire.className = 'button button-quiet'
      wrapFire.style.display = 'none'
      wrapMelee.style.display = 'block'
    })
  }
  $('#character-level').innerHTML = Array.from({length:14},(_,i) => `<option value="${i+1}">Nível ${i+1}</option>`).join('')
  $('#origin-choice').innerHTML = origins.map(o => `<option value="${o[0]}">${o[1]}</option>`).join('')
  if ($('#corp-choice')) $('#corp-choice').innerHTML = corps.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('')
  $('#weapon-choice').innerHTML = weapons.map((w,i) => `<option value="${i}">${w[0]} · ${w[1]} · ${w[2]}m</option>`).join('')
  $('#melee-choice').innerHTML = meleeWeapons.map((w,i) => `<option value="${i}">${w[0]} · ${w[1]} · ${w[2]}</option>`).join('')
  $('#class-choices').parentElement.insertAdjacentHTML('afterend', '<div class="builder-block"><div class="block-title">Trilha <span>permanente no nível 10</span></div><select id="trail-choice"></select><p class="choice-help" id="trail-help"></p></div>')

  function renderChoices() {
    $('#class-choices').innerHTML = classes.map(c => `<button type="button" class="choice ${c[0] === state.classId ? 'active' : ''}" data-class-choice="${c[0]}"><strong>${c[1]}</strong><small>${c[4]}</small></button>`).join('')
    $('#attribute-choices').innerHTML = Object.entries(attributes).map(([key,label]) => `<div class="attr"><b>${key}</b><small>${label}</small><strong>${state.attributes[key]}</strong><button type="button" data-attr-minus="${key}" aria-label="Reduzir ${key}">−</button><button type="button" data-attr-plus="${key}" aria-label="Aumentar ${key}">+</button></div>`).join('')
    $('#origin-choice').value = state.originId
    if ($('#corp-choice')) {
      $('#corp-choice').value = state.corpId || 'bravia'
      const currentCorp = corps.find(c => c[0] === (state.corpId || 'bravia')) || corps[0]
      if ($('#corp-help')) $('#corp-help').textContent = currentCorp ? currentCorp[2] : ''
    }
    $('#weapon-choice').value = String(state.weaponIndex)
    $('#melee-choice').value = String(state.meleeIndex)
    $('#character-level').value = String(state.level)
    $('#trail-choice').innerHTML = trails[state.classId].map((trail, index) => `<option value="${index}">${trail[0]} · ${trail[1]}</option>`).join('')
    $('#trail-choice').value = String(state.trailIndex)
    $('#trail-choice').closest('.builder-block').hidden = state.level < 10
    $('#trail-help').textContent = state.level >= 10 ? trails[state.classId][state.trailIndex][2] : 'A Trilha é escolhida no nível 10 e permanece fixa depois disso.'
    $('#attribute-budget').textContent = `${progressionPoints(state.level)} pontos · ${state.level < 2 ? 'limite 4 na criação' : 'progressão liberada acima de 4 quando aplicável'}`
    const origin = origins.find(item => item[0] === state.originId)
    $('#origin-help').textContent = origin ? `${origin[2]}. A Origem também recebe uma manifestação específica da Classe escolhida.` : ''
    const classData = selectedClass()
    const availableSkills = Array.from(new Set([classData[0] === 'atirador' ? 'Armas de Fogo' : classData[0] === 'vanguardista' ? 'Briga/Corpo a Corpo' : classData[0] === 'ciborgue' ? 'Tecnologia & Sistemas' : classData[0] === 'canalizador' ? 'Sintonia Arcana' : 'Armas de Fogo', ...skills]))
    if (!state.trainedSkills.includes(availableSkills[0])) state.trainedSkills = [availableSkills[0], ...state.trainedSkills.filter(skill => skill !== availableSkills[0])].slice(0, 4)
    $('#skill-choices').innerHTML = availableSkills.map(skill => { const mandatory = skill === availableSkills[0]; const checked = state.trainedSkills.includes(skill); return `<label class="skill-option ${checked ? 'selected' : ''}"><input type="checkbox" data-skill="${esc(skill)}" ${checked ? 'checked' : ''} ${mandatory ? 'disabled' : ''}><span>${skill}</span><small>${mandatory ? 'obrigatória' : 'treinamento'}</small></label>` }).join('')
    $('#skill-help').textContent = `${state.trainedSkills.length}/4 selecionadas. A perícia obrigatória da Classe já está incluída.`
    $('#shield-choice').checked = state.shield
    renderSheet()
  }
  function renderSheet() {
    const c = selectedClass(); const d = derived(); const origin = origins.find(item => item[0] === state.originId)
    const currentCorp = corps.find(item => item[0] === (state.corpId || 'bravia')) || corps[0]
    const unlockedPowers = classPowers[state.classId].slice(0, state.level)
    const unlockedTrail = state.level >= 10 ? `<p><b>Trilha · ${trails[state.classId][state.trailIndex][0]}</b><br>${trails[state.classId][state.trailIndex][2]}<br><span class="ability-list">${Array.from({length: state.level - 9}, (_, index) => `T${index + 1} · especialização desbloqueada`).join(' · ')}</span></p>` : '<p><b>Trilha</b><br>Disponível para escolha no nível 10.</p>'
    $('#sheet-preview').innerHTML = `<span class="sheet-kicker">Ficha em construção · ${c[1]}</span><h3>${esc(state.name || 'Personagem sem nome')}</h3><p class="sheet-concept">${esc(state.concept || 'Defina um conceito para sua personagem.')} · Nível ${state.level}</p><div class="sheet-stats"><div class="sheet-stat"><small>PV máximo</small><strong>${d.pv}</strong></div><div class="sheet-stat"><small>VA de fogo</small><strong>${d.va}</strong></div><div class="sheet-stat"><small>Defesa</small><strong>${d.defense}</strong></div><div class="sheet-stat"><small>Recurso</small><strong>${d.resource}</strong></div></div><div class="sheet-details"><p><b>Afiliação Corporativa</b><br>${currentCorp[1]}<br><small style="color:var(--amber);">${currentCorp[2]}</small></p><p><b>Atributos</b><br>${Object.entries(state.attributes).map(([key,value]) => `${key} ${value}`).join(' · ')}<br><span style="color:var(--amber)">${spent()}/${progressionPoints(state.level)} pontos usados</span></p><p><b>Origem</b><br>${origin ? origin[1] : 'Não escolhida'}</p>${unlockedTrail}<p><b>Habilidades até o nível ${state.level}</b><br><span class="ability-list">${unlockedPowers.map((power, index) => `N${index + 1} · ${power}`).join('<br>')}</span></p><p><b>Arsenal</b><br>${d.weapon[0]} · ${d.weapon[1]} · ${d.weapon[2]}m<br>${meleeWeapons[state.meleeIndex][0]} · ${meleeWeapons[state.meleeIndex][1]}</p><p><b>Perícias</b><br>${state.trainedSkills.length ? state.trainedSkills.join(' · ') : 'Nenhuma selecionada'}</p></div>`
  }

  const savedKey = 'ferro-arcano:fichas'
  const savedSheets = () => JSON.parse(localStorage.getItem(savedKey) || '[]')
  function snapshot() { return JSON.parse(JSON.stringify({...state, savedAt:new Date().toISOString()})) }
  function applySnapshot(sheet) { Object.assign(state, JSON.parse(JSON.stringify(sheet))); state.attributes = {...state.attributes}; state.trainedSkills = [...(state.trainedSkills || [])]; }
  // Builder e Saved só existem se os elementos estiverem no DOM (foram removidos de ferro_arcano.html)
  if ($('#builder-layer')) {
    function openBuilder(sheet) { if (sheet) applySnapshot(sheet); $('#builder-layer').classList.add('open'); $('#builder-layer').setAttribute('aria-hidden','false'); $('#builder-status').textContent = state.id ? 'Ficha salva · alterações locais' : 'Nova ficha · ainda não salva'; $('#character-name').value = state.name; $('#character-concept').value = state.concept; renderChoices(); $('#character-name').focus() }
    function closeBuilder() { $('#builder-layer').classList.remove('open'); $('#builder-layer').setAttribute('aria-hidden','true') }
    document.querySelectorAll('[data-open-builder]').forEach(button => button.addEventListener('click', openBuilder))
    document.querySelectorAll('[data-close-builder]').forEach(button => button.addEventListener('click', closeBuilder))
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeBuilder() })
    function saveSheet() { state.id = state.id || `ficha-${Date.now()}`; const sheets = savedSheets().filter(sheet => sheet.id !== state.id); sheets.unshift(snapshot()); localStorage.setItem(savedKey, JSON.stringify(sheets)); $('#builder-status').textContent = 'Ficha salva localmente · pronta para revisar'; renderSaved(); }
    function renderSaved() { const sheets = savedSheets(); $('#saved-list').innerHTML = sheets.length ? sheets.map(sheet => { const c = classes.find(item => item[0] === sheet.classId) || classes[0]; return `<article class="saved-card"><div><span class="sheet-kicker">${c[1]} · Nível ${sheet.level}</span><h3>${esc(sheet.name || 'Personagem sem nome')}</h3><p>${esc(sheet.concept || 'Sem conceito definido')} · ${sheet.trainedSkills?.length || 0} perícias</p></div><div class="saved-actions"><button class="button button-quiet" data-edit-sheet="${sheet.id}">Editar</button><button class="icon-button" data-delete-sheet="${sheet.id}" aria-label="Excluir ficha">×</button></div></article>` }).join('') : '<div class="empty-state"><h3>Nenhuma ficha salva</h3><p>Crie uma personagem e use "Salvar ficha" para revisitá-la durante a campanha.</p></div>' }
    function openSaved() { renderSaved(); $('#saved-layer').classList.add('open'); $('#saved-layer').setAttribute('aria-hidden','false') }
    function closeSaved() { $('#saved-layer').classList.remove('open'); $('#saved-layer').setAttribute('aria-hidden','true') }
    document.querySelectorAll('[data-save-sheet]').forEach(button => button.addEventListener('click', saveSheet))
    document.querySelectorAll('[data-open-saved]').forEach(button => button.addEventListener('click', openSaved))
    document.querySelectorAll('[data-close-saved]').forEach(button => button.addEventListener('click', closeSaved))
    $('#saved-list').addEventListener('click', event => { const edit = event.target.closest('[data-edit-sheet]'); const remove = event.target.closest('[data-delete-sheet]'); if (edit) { const sheet = savedSheets().find(item => item.id === edit.dataset.editSheet); closeSaved(); openBuilder(sheet) } if (remove) { localStorage.setItem(savedKey, JSON.stringify(savedSheets().filter(item => item.id !== remove.dataset.deleteSheet))); renderSaved() } })
    $('#character-name').addEventListener('input', event => { state.name = event.target.value; renderSheet() })
    $('#character-concept').addEventListener('input', event => { state.concept = event.target.value; renderSheet() })
    $('#character-level').addEventListener('change', event => { state.level = Number(event.target.value); renderChoices() })
    $('#origin-choice').addEventListener('change', event => { state.originId = event.target.value; renderChoices() })
    if ($('#corp-choice')) $('#corp-choice').addEventListener('change', event => { state.corpId = event.target.value; renderChoices() })
    $('#weapon-choice').addEventListener('change', event => { state.weaponIndex = Number(event.target.value); renderSheet() })
    $('#melee-choice').addEventListener('change', event => { state.meleeIndex = Number(event.target.value); renderSheet() })
    if ($('#trail-choice')) $('#trail-choice').addEventListener('change', event => { state.trailIndex = Number(event.target.value); renderChoices() })
    $('#shield-choice').addEventListener('change', event => { state.shield = event.target.checked; renderSheet() })
    $('#class-choices').addEventListener('click', event => { const choice = event.target.closest('[data-class-choice]'); if (!choice) return; state.classId = choice.dataset.classChoice; renderChoices() })
    $('#attribute-choices').addEventListener('click', event => { const button = event.target.closest('button'); if (!button) return; const key = button.dataset.attrPlus || button.dataset.attrMinus; const next = state.attributes[key] + (button.dataset.attrPlus ? 1 : -1); const max = state.level === 1 ? 4 : 6; if (next < 0 || next > max) return; const nextSpent = spent() - costs[state.attributes[key]] + costs[next]; if (nextSpent > progressionPoints(state.level)) return; state.attributes[key] = next; renderChoices() })
    $('#skill-choices').addEventListener('change', event => { const input = event.target.closest('[data-skill]'); if (!input) return; if (input.checked && state.trainedSkills.length >= 4) { input.checked = false; return } state.trainedSkills = input.checked ? [...state.trainedSkills, input.dataset.skill] : state.trainedSkills.filter(skill => skill !== input.dataset.skill); renderChoices() })

    if ($('#export-pdf')) $('#export-pdf').addEventListener('click', () => {
      const c = selectedClass(); const d = derived(); const origin = origins.find(item => item[0] === state.originId)
      const currentCorp = corps.find(item => item[0] === (state.corpId || 'bravia')) || corps[0]
      const printable = `<html lang="pt-BR"><head><meta charset="utf-8"><title>Ficha - ${esc(state.name || 'Ferro & Arcano')}</title><style>body{font:14px Arial;color:#181818;max-width:760px;margin:40px auto}h1{font-size:32px;margin-bottom:4px}h2{border-bottom:2px solid #b27a35;padding-bottom:6px;margin-top:28px}.meta{color:#666}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.box{border:1px solid #bbb;padding:14px}.box b{display:block;font-size:11px;color:#777;text-transform:uppercase}.box strong{font-size:24px}li{margin:7px 0}</style></head><body><p>FERRO & ARCANO · DOSSIÊ CORPORATIVO</p><h1>${esc(state.name || 'Personagem sem nome')}</h1><p class="meta">${esc(state.concept || 'Sem conceito')} · Nível ${state.level} · ${c[1]} · ${currentCorp[1]}</p><div class="grid"><div class="box"><b>PV máximo</b><strong>${d.pv}</strong></div><div class="box"><b>VA de fogo</b><strong>${d.va}</strong></div><div class="box"><b>Defesa</b><strong>${d.defense}</strong></div><div class="box"><b>${c[7]}</b><strong>${d.resource}</strong></div></div></body></html>`
      const popup = window.open('', '_blank')
      if (popup) { popup.document.write(printable); popup.document.close(); return }
    })
  }

  const wikiTabs = Object.keys(wikiSections)
  let activeWikiTab = wikiTabs[0]
  function renderWiki(filter = '') {
    $('#wiki-tabs').innerHTML = wikiTabs.map(tab => `<button class="wiki-tab ${tab === activeWikiTab ? 'active' : ''}" data-wiki-tab="${tab}">${tab}</button>`).join('')
    const section = wikiSections[activeWikiTab]
    const query = filter.trim().toLowerCase()
    const cards = section.cards.filter(card => !query || card.join(' ').toLowerCase().includes(query))
    $('#wiki-content').innerHTML = `<p class="eyebrow">${activeWikiTab}</p><h3>${section.lead}</h3><div class="wiki-cards">${cards.length ? cards.map(card => `<article><h4>${card[0]}</h4><p>${card[1]}</p></article>`).join('') : '<p class="choice-help">Nenhuma regra encontrada nesta categoria.</p>'}</div>`
  }
  function openWiki() { $('#wiki-layer').classList.add('open'); $('#wiki-layer').setAttribute('aria-hidden','false'); renderWiki(); $('#wiki-search').focus() }
  function closeWiki() { $('#wiki-layer').classList.remove('open'); $('#wiki-layer').setAttribute('aria-hidden','true') }
  document.querySelectorAll('[data-open-wiki]').forEach(button => button.addEventListener('click', openWiki))
  document.querySelectorAll('[data-close-wiki]').forEach(button => button.addEventListener('click', closeWiki))
  $('#wiki-tabs').addEventListener('click', event => { const tab = event.target.closest('[data-wiki-tab]'); if (!tab) return; activeWikiTab = tab.dataset.wikiTab; renderWiki($('#wiki-search').value) })
  $('#wiki-search').addEventListener('input', event => renderWiki(event.target.value))
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeWiki() })

  $('#export-pdf').addEventListener('click', () => {
    const c = selectedClass(); const d = derived(); const origin = origins.find(item => item[0] === state.originId)
    const currentCorp = corps.find(item => item[0] === (state.corpId || 'bravia')) || corps[0]
    const printable = `<html lang="pt-BR"><head><meta charset="utf-8"><title>Ficha - ${esc(state.name || 'Ferro & Arcano')}</title><style>body{font:14px Arial;color:#181818;max-width:760px;margin:40px auto}h1{font-size:32px;margin-bottom:4px}h2{border-bottom:2px solid #b27a35;padding-bottom:6px;margin-top:28px}.meta{color:#666}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.box{border:1px solid #bbb;padding:14px}.box b{display:block;font-size:11px;color:#777;text-transform:uppercase}.box strong{font-size:24px}li{margin:7px 0}</style></head><body><p>FERRO & ARCANO · DOSSIÊ CORPORATIVO</p><h1>${esc(state.name || 'Personagem sem nome')}</h1><p class="meta">${esc(state.concept || 'Sem conceito')} · Nível ${state.level} · ${c[1]} · ${currentCorp[1]}</p><div class="grid"><div class="box"><b>PV máximo</b><strong>${d.pv}</strong></div><div class="box"><b>VA de fogo</b><strong>${d.va}</strong></div><div class="box"><b>Defesa</b><strong>${d.defense}</strong></div><div class="box"><b>${c[7]}</b><strong>${d.resource}</strong></div></div><h2>Atributos</h2><p>${Object.entries(state.attributes).map(([key,value]) => `<b>${key}</b>: ${value}`).join(' &nbsp; ')}</p><h2>Identidade & Afiliação</h2><ul><li><b>Corporação:</b> ${currentCorp[1]}</li><li><b>Classe:</b> ${c[1]} — ${c[2]}</li><li><b>Origem:</b> ${origin ? origin[1] : 'Não escolhida'}</li><li><b>Arma de fogo:</b> ${d.weapon[0]} · ${d.weapon[1]} · ${d.weapon[2]}m · ${d.weapon[3]} munições</li><li><b>Corpo a corpo:</b> ${meleeWeapons[state.meleeIndex][0]} · ${meleeWeapons[state.meleeIndex][1]} · ${meleeWeapons[state.meleeIndex][2]}</li><li><b>Perícias:</b> ${state.trainedSkills.join(', ') || 'Nenhuma selecionada'}</li><li><b>Proteção:</b> ${state.shield ? 'Escudo ou proteção improvisada' : 'Nenhuma registrada'}</li></ul><h2>Habilidades desbloqueadas</h2><p>${classPowers[state.classId].slice(0,state.level).map((power,index) => `Nível ${index + 1}: ${power}`).join('<br>')}${state.level >= 10 ? `<br>Trilha: ${trails[state.classId][state.trailIndex][0]} · poderes até o marco ${state.level - 9}` : '<br>Trilha disponível a partir do nível 10.'}</p><h2>Notas</h2><p>Ficha criada pelo Hub Ferro & Arcano.</p><script>window.onload=()=>window.print()<\/script></body></html>`
    const popup = window.open('', '_blank')
    if (popup) { popup.document.write(printable); popup.document.close(); return }
    const printSheet = document.createElement('section')
    printSheet.className = 'print-sheet'
    printSheet.innerHTML = `<p>FERRO & ARCANO · DOSSIÊ CORPORATIVO</p><h1>${esc(state.name || 'Personagem sem nome')}</h1><p class="print-muted">${esc(state.concept || 'Sem conceito')} · Nível ${state.level} · ${c[1]} · ${currentCorp[1]}</p><div class="print-grid"><div class="print-box"><b>PV máximo</b><strong>${d.pv}</strong></div><div class="print-box"><b>VA de fogo</b><strong>${d.va}</strong></div><div class="print-box"><b>Defesa</b><strong>${d.defense}</strong></div><div class="print-box"><b>${c[7]}</b><strong>${d.resource}</strong></div></div><h2>Atributos</h2><p>${Object.entries(state.attributes).map(([key,value]) => `<b>${key}</b>: ${value}`).join(' &nbsp; ')}</p><h2>Identidade</h2><p><b>Corporação:</b> ${currentCorp[1]}<br><b>Classe:</b> ${c[1]} — ${c[2]}<br><b>Origem:</b> ${origin ? origin[1] : 'Não escolhida'}<br><b>Arma:</b> ${d.weapon[0]} · ${d.weapon[1]} · ${d.weapon[2]}m · ${d.weapon[3]} munições</p>`
    document.body.appendChild(printSheet)
    window.print()
    printSheet.remove()
  })
})()
