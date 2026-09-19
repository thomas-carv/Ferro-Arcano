(() => {
  'use strict'
  const classes = [
    ['atirador','Atirador','Distância · Precisão','Especialista em combate à distância e pressão balística.','FOC, REF',28,4,'Pontos de Precisão'],
    ['canalizador','Canalizador','Conjuração · Controle','Converte teoria e sintonia arcana em controle do campo.','CONH, CON',24,3,'Pontos de Sintonia'],
    ['hibrido','Híbrido','Tecnologia · Arcano','Une tecnologia e arcano para alternar entre funções.','CONH, FOC',30,4,'Cargas do Núcleo'],
    ['vanguardista','Vanguardista','Proteção · Absorção','A linha de frente que transforma impacto em resposta.','CON, FOR',36,5,'Inflexibilidade'],
    ['ciborgue','Ciborgue','Caça Mecânica · Adaptação','Predador tecnológico que explora pontos fracos.','CON, FOC',32,4,'Pontos de Protocolo']
  ]
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
  const trails = {
    atirador: [['Franco-Atirador','Longo alcance · precisão extrema','Tiro de Elite, Balística Extrema e domínio de armas longas.'],['Pistoleiro Tático','Mobilidade · armas leves · pressão curta','Saque Instintivo, Movimento de Combate e troca rápida de armas.'],['Caçador Arcano','Rastreio mágico · contram magia · caça','Munição Anti-Éter, Rastreio Etéreo e respostas contra o arcano.']],
    canalizador: [['Arcanista Elemental','Elementos · versatilidade · efeitos','Infusão Elemental e domínio de efeitos elementais.'],['Manipulador Espacial','Posicionamento · teleporte · gravidade','Passo Etéreo, Saltos Espaciais e Transposição Tática.'],['Taumaturgo de Sobrecarga','Risco · exaustão · poder bruto','Potência da Ruptura e conjuração de risco.']],
    hibrido: [['Engenheiro Arcano','Drones · suporte · engenharia','Módulos de Campo, Forja Expressa e Drone Tático.'],['Lâmina/Gatilho Rúnico','Lâmina · armas leves · combate integrado','Cadência Alternada e alternância entre corpo a corpo e fogo.'],['Infiltrador','Furtividade · emboscada · execução','Camuflagem Rúnica, Passos de Espectro e ataques de emboscada.']],
    vanguardista: [['Bastião','Proteção · barreiras · ancoragem','Muralha Viva, Ancoragem de Esquadrão e defesa territorial.'],['Demolidor','Demolição · impacto · quebra de proteção','Especialista em Demolição e Abalo Brutal contra proteção.'],['Guardião Rúnico','Defesa arcana · reflexo · proteção de aliados','Escudo Rúnico e Retaliação Arcana para proteger o grupo.']],
    ciborgue: [['Samurai Cibernético','Lâmina · protocolo · adaptação','Combate integrado com corpo aumentado e protocolos ofensivos.'],['Arsenal de Combate','Armas · sistemas · destruição','Integração de arsenal e exploração de pontos fracos mecânicos.'],['Caçador de Máquinas','Rastreio · sistemas · predador','Leitura de sistemas, caça mecânica e sabotagem.']]
  }
  for (const entry of window.FerroArcanoNewClasses) {
    classes.push(entry.card)
    trails[entry.id] = entry.trails.map(trail => [trail.name, trail.identity])
  }
  const $ = selector => document.querySelector(selector)
  $('#class-list').innerHTML = classes.map(c => `<article class="class-card"><strong>${c[1]}</strong><span>${c[2]}</span><p>${c[3]}</p>${`<p><b>${c[4]}</b> · ${c[7]}<br>Trilhas: ${trails[c[0]].map(trail => trail[0]).join(" · ")}</p><a href="wiki.html#classe-${c[0]}">Habilidades e regras completas ↗</a>`}</article>`).join('')
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
  const menu = $('#menu-toggle')
  const nav = $('#main-navigation')
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true'
    menu.setAttribute('aria-expanded', String(expanded))
    nav.classList.toggle('is-open', expanded)
  })
  nav.addEventListener('click', event => {
    if (!event.target.closest('a')) return
    menu.setAttribute('aria-expanded', 'false')
    nav.classList.remove('is-open')
  })
})()
