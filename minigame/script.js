(() => {
  "use strict";

  /* ================= CONFIGURAÇÃO DO SISTEMA ================= */
  const ELEMENTS = {
    fogo:   { name: "Sowilo", glyph: "ᛋ", theme: "fire" },
    agua:   { name: "Laguz",  glyph: "ᛚ", theme: "water" },
    ar:     { name: "Ansuz",  glyph: "ᚨ", theme: "wind" },
    terra:  { name: "Othala", glyph: "ᛟ", theme: "earth" },
    luz:    { name: "Dagaz",  glyph: "ᛞ", theme: "light" },
    sombra: { name: "Isa",    glyph: "ᛁ", theme: "shadow" },
    arcano: { name: "Algiz",  glyph: "ᛉ", theme: "arcane" },
    cura:   { name: "Berkanan", glyph: "ᛒ", theme: "healer" }
  };

  const THEMES = {
    fire:   { colors: ["#ff4500", "#ff8c00"], main: "#ff4500" },
    water:  { colors: ["#1e90ff", "#00ced1"], main: "#1e90ff" },
    wind:   { colors: ["#32cd32", "#90ee90"], main: "#32cd32" },
    earth:  { colors: ["#8b4513", "#d2691e"], main: "#8b4513" },
    light:  { colors: ["#ffff00", "#fffacd"], main: "#ffff00" },
    shadow: { colors: ["#6e6d6e", "#2f4f4f"], main: "#6e6d6e" },
    arcane: { colors: ["#8a2be2", "#9370db"], main: "#8a2be2" },
    healer: { colors: ["#ff69b4", "#ffb6c1"], main: "#ff69b4" }
  };

  const ELEMENT_KEYS = Object.keys(ELEMENTS);

  const DIFFICULTY = {
    1: { maxErrors: 7, time: 8 },
    2: { maxErrors: 6, time: 8 },
    3: { maxErrors: 5, time: 8 },
    4: { maxErrors: 4, time: 8 },
    5: { maxErrors: 3, time: 8 },
    6: { maxErrors: 2, time: 4 },
    7: { maxErrors: 1, time: 4 }
  };

  const DICE_TYPES = { 1: 4, 2: 6, 3: 8, 4: 10, 5: 12, 6: 20, 7: 100 };
  const BASE_RADII = [250, 225, 190, 175, 145, 115, 80];

  const CIRCLE_EXAUSTAO_COST = { 1: 10, 2: 18, 3: 28, 4: 40, 5: 55, 6: 75, 7: 100 };
  const STORAGE_KEY = 'ferro_arcano_character';

  const CLASSES = {
    atirador: { name: "Atirador", basePv: 34, conMultiplier: 3, pvGrowth: 4, resourceName: "Pontos de Precisão" },
    canalizador: { name: "Canalizador", basePv: 26, conMultiplier: 2, pvGrowth: 3, resourceName: "Canais de Fluxo" },
    hibrido: { name: "Híbrido", basePv: 30, conMultiplier: 3, pvGrowth: 4, resourceName: "Carga Arcana" },
    vanguardista: { name: "Vanguardista", basePv: 40, conMultiplier: 4, pvGrowth: 5, resourceName: "Pontos de Postura" },
    ciborgue: { name: "Ciborgue", basePv: 38, conMultiplier: 4, pvGrowth: 5, resourceName: "Pontos de Protocolo" }
  };

  const CORPORATIONS = {
    bravia: { name: "BRAVIA", agency: "BRASA", flag: "🇧🇷", country: "Brasil" },
    valor: { name: "VALOR", agency: "VANT", flag: "🇺🇸", country: "EUA" },
    tianlong: { name: "TIANLONG", agency: "LONGA", flag: "🇨🇳", country: "China" },
    kage: { name: "KAGE", agency: "SHIN", flag: "🇯🇵", country: "Japão" },
    eisenwerk: { name: "EISENWERK", agency: "WOLF", flag: "🇩🇪", country: "Alemanha" },
    lumiere: { name: "LUMIÈRE", agency: "OMBRE", flag: "🇫🇷", country: "França" },
    crown: { name: "CROWN", agency: "BLACK", flag: "🇬🇧", country: "Reino Unido" },
    zvezda: { name: "ZVEZDA", agency: "VOLK", flag: "🇷🇺", country: "Rússia" },
    veda: { name: "VEDA", agency: "NETRA", flag: "🇮🇳", country: "Índia" },
    aurelia: { name: "AURELIA", agency: "CORVO", flag: "🇮🇹", country: "Itália" },
    northstar: { name: "NORTHSTAR", agency: "FROST", flag: "🇨🇦", country: "Canadá" },
    "southern-cross": { name: "SOUTHERN CROSS", agency: "DINGO", flag: "🇦🇺", country: "Austrália" },
    han: { name: "HAN", agency: "GWI", flag: "🇰🇷", country: "Coreia do Sul" },
    quetzal: { name: "QUETZAL", agency: "ÁGUILA", flag: "🇲🇽", country: "México" },
    garuda: { name: "GARUDA", agency: "NAGA", flag: "🇮🇩", country: "Indonésia" },
    sabaa: { name: "SABAA", agency: "RIMAL", flag: "🇸🇦", country: "Arábia Saudita" },
    ubuntu: { name: "UBUNTU", agency: "MAMBA", flag: "🇿🇦", country: "África do Sul" },
    ayyildiz: { name: "AYYILDIZ", agency: "BOZKURT", flag: "🇹🇷", country: "Turquia" },
    plata: { name: "PLATA", agency: "CONDOR", flag: "🇦🇷", country: "Argentina" },
    iberia: { name: "IBERIA", agency: "LANCE", flag: "🇪🇸", country: "Espanha" },
    independente: { name: "INDEPENDENTE", agency: "LIVRE", flag: "🏴", country: "Clandestino" }
  };

  const COLAPSOS = [
    { id: 0, name: "Nenhum", simples: "Nenhum", critica: "Nenhum" },
    { id: 1, name: "Visão Fraturada", simples: "–2 em Percepção/Prontidão e VA de armas de fogo a mais de 12m.", critica: "–4 em Percepção/Prontidão; alcance de visão reduzido a 18 m." },
    { id: 2, name: "Necrose Elemental", simples: "–1,5 s no tempo inicial do minigame.", critica: "–3 s no tempo inicial do minigame." },
    { id: 3, name: "Eco de Ressonância", simples: "Ao conjurar, –1 Defesa até o início do próximo turno.", critica: "–2 Defesa até o início do próximo turno." },
    { id: 4, name: "Dreno Vital Contínuo", simples: "Você sofre 1 de dano não reduzível ao conjurar uma magia.", critica: "Você sofre 2 de dano não reduzível ao conjurar uma magia." },
    { id: 5, name: "Fuga de Mana", simples: "O custo de Exaustão de todas as suas magias aumenta em +3.", critica: "O custo de Exaustão aumenta em +6." },
    { id: 6, name: "Chama Interna", simples: "Você sofre 2 de dano de fogo quando conjurar uma magia.", critica: "Você sofre +1d6 dano de fogo e fica com o status Queimado." },
    { id: 7, name: "Rigidez Muscular", simples: "–2 em Esquiva.", critica: "–3 m de Deslocamento." },
    { id: 8, name: "Cicatriz de Descarga", simples: "Você sofre +2 de dano elétrico, inclusive de magias próprias.", critica: "Você sofre +1d6 dano elétrico." },
    { id: 9, name: "Ressonância Eletrônica", simples: "Ao tocar em uma arma, ela apresenta falha.", critica: "Durante conjuração, armas e equipamentos a até 1,5m sofrem interferência por 1 rodada." },
    { id: 10, name: "Tremores nas Mãos", simples: "O limite de erros do minigame é reduzido em 1.", critica: "O limite de erros é reduzido em 2 (mínimo de 1 erro)." },
    { id: 11, name: "Atrofia do Foco", simples: "O bônus de FOC no tempo do minigame fornece apenas +1 s por ponto.", critica: "FOC não fornece tempo adicional ao minigame." },
    { id: 12, name: "Sombra Desincronizada", simples: "Ataques corpo a corpo contra você recebem +2 VA.", critica: "Ataques corpo a corpo contra você causam +1d6 de dano adicional." },
    { id: 13, name: "Dependência de Mana", simples: "Um Descanso Curto recupera apenas 10 Exaustão.", critica: "Um Descanso Curto recupera apenas 5 Exaustão." },
    { id: 14, name: "Pele de Vidro", simples: "Você sofre +2 dano físico.", critica: "Você sofre +1d6 dano físico adicional." },
    { id: 15, name: "Instabilidade Elemental", simples: "Cada falha no minigame causa 1d4 dano em você.", critica: "Cada falha causa 1d8 dano em você e 1d4 dano em criaturas adjacentes." },
    { id: 16, name: "Audição Espectral", simples: "–2 em Percepção/Prontidão.", critica: "Ruído intenso causa –2 s no tempo inicial da sua próxima conjuração." },
    { id: 17, name: "Eco de Conjuração", simples: "Sua conjuração deixa rastro perceptível por Sintonia Arcana por 3 rodadas CD 10.", critica: "O rastro permanece por 6 rodadas com CD 5." },
    { id: 18, name: "Cristalização Nervosa", simples: "Recebe 1d4 de dano gélido adicional.", critica: "Recebe 3d4 de dano gélido adicional de todas as fontes." },
    { id: 19, name: "Pulso Arcano", simples: "Torna-se prioridade para magias de alvo único em raio de 3m.", critica: "Magias desviadas para você recebem +2 VA." },
    { id: 20, name: "Marca do Abismo", simples: "Suas próprias magias causam +2 dano por Círculo contra você.", critica: "A margem de Detonação Arcana é reduzida de 10 para 8 Colapsos." }
  ];

  let activeCharacter = null;

  const SPELLS = {
    1: [
      { name: "Fagulha Ardente", desc: "Projétil elemental simples de fogo.", seq: ["fogo"] },
      { name: "Onda de Gelo", desc: "Pulso frio que toca o alvo.", seq: ["agua"] },
      { name: "Rajada de Vento", desc: "Corrente de ar que empurra o alvo.", seq: ["ar"] },
      { name: "Pedra Afiada", desc: "Fragmento de terra lançado com força.", seq: ["terra"] }
    ],
    2: [
      { name: "Correnteza Aquática", desc: "Arrasta o alvo com duas ondas consecutivas.", seq: ["agua", "agua"] },
      { name: "Brasa Dupla", desc: "Dois projéteis de fogo em sequência.", seq: ["fogo", "fogo"] },
      { name: "Rajada Gelada", desc: "Vento frio que desacelera o alvo.", seq: ["ar", "agua"] },
      { name: "Lâmina Terrosa", desc: "Corte de terra comprimida.", seq: ["terra", "ar"] }
    ],
    3: [
      { name: "Lança de Gelo", desc: "Estilhaço congelante perfurante.", seq: ["agua", "terra", "ar"] },
      { name: "Chama Giratória", desc: "Espiral de fogo que queima em área.", seq: ["fogo", "ar", "fogo"] },
      { name: "Descarga Elétrica", desc: "Raio arcano que percorre superfícies.", seq: ["ar", "arcano", "ar"] },
      { name: "Espinhos de Pedra", desc: "Múltiplos fragmentos de terra disparados.", seq: ["terra", "terra", "ar"] }
    ],
    4: [
      { name: "Barreira Elemental", desc: "Escudo sólido que combina quatro elementos.", seq: ["terra", "agua", "fogo", "ar"] },
      { name: "Tocha do Éter", desc: "Flama arcana de alta temperatura.", seq: ["fogo", "arcano", "fogo", "fogo"] },
      { name: "Ciclone de Gelo", desc: "Redemoinho gelado que retém o alvo.", seq: ["agua", "ar", "agua", "ar"] },
      { name: "Pulso de Luz", desc: "Descarga radiante que cega temporariamente.", seq: ["luz", "arcano", "ar", "luz"] }
    ],
    5: [
      { name: "Chamas do Abismo", desc: "Fogo sombrio de origem arcana profunda.", seq: ["sombra", "fogo", "fogo", "arcano", "sombra"] },
      { name: "Maré do Vácuo", desc: "Onda que suga energia vital do alvo.", seq: ["sombra", "agua", "arcano", "sombra", "agua"] },
      { name: "Tempestade Elétrica", desc: "Vórtice de ar carregado de energia arcana.", seq: ["ar", "arcano", "ar", "fogo", "ar"] },
      { name: "Raízes do Abismo", desc: "Tentáculos de terra sombria imobilizam o alvo.", seq: ["terra", "sombra", "terra", "arcano", "terra"] }
    ],
    6: [
      { name: "Tempestade Arcana", desc: "Tempestade de mana pura e instável.", seq: ["arcano", "ar", "agua", "fogo", "terra", "arcano"] },
      { name: "Extinção de Luz", desc: "Campo de sombra que apaga toda a luz ao redor.", seq: ["sombra", "sombra", "arcano", "ar", "sombra", "sombra"] },
      { name: "Maré da Criação", desc: "Onda arcana que reconfigura a matéria ao redor.", seq: ["arcano", "luz", "agua", "terra", "arcano", "luz"] },
      { name: "Furacão de Cinzas", desc: "Redemoinho de fogo e terra calcinada.", seq: ["fogo", "ar", "terra", "fogo", "ar", "arcano"] }
    ],
    7: [
      { name: "Juízo Arcano Final", desc: "Magia ancestral que canaliza todos os sete elementos.", seq: ["arcano", "luz", "sombra", "fogo", "agua", "terra", "ar"] },
      { name: "Singularidade do Éter", desc: "Colapso arcano que destrói tudo em seu epicentro.", seq: ["sombra", "arcano", "fogo", "arcano", "sombra", "arcano", "luz"] },
      { name: "Renascimento Elemental", desc: "Magia de reconstituição que restaura aliados e devasta inimigos.", seq: ["luz", "agua", "terra", "luz", "arcano", "luz", "ar"] }
    ]
  };

  /* ================= ESTADO DO JOGO ================= */
  let activeCircle = 1;
  let customSeq = [];
  let isCreationTesting = false;
  let creationTestSpell = null;
  let currentSpell = null;
  let bgRotation = 0;

  const assets = {
    array: new Image(),
    stones: new Image(),
    loaded: 0
  };
  assets.array.src = "img/Magic-Array-Transparent-Image.png";
  assets.stones.src = "img/um-conjunto-de-runas-em-pedras-negras-futhark-mistico-esoterico-ocultismo-simbolos-magicos_313437-580.avif";
  
  [assets.array, assets.stones].forEach(img => {
    img.onload = () => assets.loaded++;
  });

  const gameState = {
    running: false,
    rings: [],
    step: 0,
    errors: 0,
    hits: 0,
    timeLeft: 0,
    timeTotal: 0,
    lastTime: 0,
    effectiveMaxErrors: 7,
    circleCost: 10
  };

  /* ================= CACHE DE ELEMENTOS DO DOM ================= */
  const dom = {
    canvas: document.getElementById("gameCanvas"),
    listScreen: document.getElementById("listScreen"),
    castScreen: document.getElementById("castScreen"),
    createPanel: document.getElementById("createPanel"),
    overlay: document.getElementById("overlay"),
    circleTabs: document.getElementById("circleTabs"),
    spellGrid: document.getElementById("spellGrid"),
    runePicker: document.getElementById("runePicker"),
    selectedRunes: document.getElementById("selectedRunes"),
    runeTracker: document.getElementById("runeTracker"),
    castSpellName: document.getElementById("castSpellName"),
    castSpellBadge: document.getElementById("castSpellBadge"),
    timerLabel: document.getElementById("timerLabel"),
    errorLabel: document.getElementById("errorLabel"),
    timerFill: document.getElementById("timerFill"),
    overlayTitle: document.getElementById("overlayTitle"),
    overlayText: document.getElementById("overlayText"),
    damageBox: document.getElementById("damageBox"),
    newSpellName: document.getElementById("newSpellName"),
    newSpellDesc: document.getElementById("newSpellDesc"),
    btnCreateSpell: document.getElementById("btnCreateSpell"),
    btnCancelCreate: document.getElementById("btnCancelCreate"),
    btnStartCreationTest: document.getElementById("btnStartCreationTest"),
    btnBack: document.getElementById("btnBack"),
    btnExit: document.getElementById("btnExit"),
    btnRetry: document.getElementById("btnRetry"),
    // Elementos do Personagem
    agentBar: document.getElementById("agentBar"),
    hudCharBar: document.getElementById("hudCharBar"),
    hudCharAvatar: document.getElementById("hudCharAvatar"),
    hudCharName: document.getElementById("hudCharName"),
    hudCharClassLvl: document.getElementById("hudCharClassLvl"),
    hudCharPv: document.getElementById("hudCharPv"),
    hudCharPvFill: document.getElementById("hudCharPvFill"),
    hudCharEx: document.getElementById("hudCharEx"),
    hudCharExFill: document.getElementById("hudCharExFill"),
    hudCastCostBadge: document.getElementById("hudCastCostBadge"),
    hudWarningSobrecarga: document.getElementById("hudWarningSobrecarga"),
    failureDetailBox: document.getElementById("failureDetailBox"),
    charUpdateSummary: document.getElementById("charUpdateSummary")
  };

  const ctx = dom.canvas.getContext("2d");

  /* ================= SINCRONIA COM A FICHA DE PERSONAGEM ================= */
  function loadCharacter() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      activeCharacter = null;
      return;
    }
    try {
      activeCharacter = JSON.parse(raw);
      const cls = CLASSES[activeCharacter.classId] || CLASSES.canalizador;
      const conVal = (activeCharacter.attributes && activeCharacter.attributes.CON) || 0;
      const conhVal = (activeCharacter.attributes && activeCharacter.attributes.CONH) || 0;
      const lvl = activeCharacter.level || 1;

      activeCharacter.pvMax = cls.basePv + (conVal * cls.conMultiplier) + (lvl - 1) * (cls.pvGrowth + conVal);
      activeCharacter.exMax = (conVal * 15) + (conhVal * 10);

      if (activeCharacter.currentPv === undefined || activeCharacter.currentPv === null) {
        activeCharacter.currentPv = activeCharacter.pvMax;
      }
      if (activeCharacter.currentExaustao === undefined || activeCharacter.currentExaustao === null) {
        activeCharacter.currentExaustao = activeCharacter.exMax;
      }
    } catch (e) {
      console.error("Erro ao carregar dados do personagem:", e);
      activeCharacter = null;
    }
  }

  function saveCharacter() {
    if (!activeCharacter) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activeCharacter));
    } catch (e) {
      console.error("Erro ao salvar personagem:", e);
    }
  }

  function renderAgentBar() {
    if (!dom.agentBar) return;
    if (!activeCharacter) {
      dom.agentBar.innerHTML = `
        <div class="agent-empty-bar">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.4rem;">👤</span>
            <div>
              <strong style="color:var(--ink);">Nenhum personagem conectado.</strong>
              <span style="display:block; font-size:0.75rem; color:var(--ink-dim);">Conjurador Padrão em uso (FOC 0 · sem bônus de tempo de conjuração).</span>
            </div>
          </div>
          <a href="ficha/index.html"><button class="primary btn-sm">➕ Criar / Conectar Ficha</button></a>
        </div>
      `;
      return;
    }

    const cls = CLASSES[activeCharacter.classId] || { name: "Conjurador" };
    const focVal = (activeCharacter.attributes && activeCharacter.attributes.FOC) || 0;

    // Calcular Bônus de Tempo do FOCO
    let focBonus = focVal * 1.5;
    let colapsoDetail = "Nenhum";
    let colapsoClass = "badge-green";

    if (activeCharacter.colapsoId === 11) {
      focBonus = activeCharacter.colapsoSeverity === 'simples' ? (focVal * 1.0) : 0;
      colapsoDetail = `#11 Atrofia do Foco (${activeCharacter.colapsoSeverity === 'simples' ? '+1.0s/FOC' : 'Anulado'})`;
      colapsoClass = "badge-red";
    } else if (activeCharacter.colapsoId === 2) {
      colapsoDetail = "#02 Necrose Elemental (-1.5s tempo)";
      colapsoClass = "badge-red";
    } else if (activeCharacter.colapsoId === 10) {
      colapsoDetail = `#10 Tremores (${activeCharacter.colapsoSeverity === 'simples' ? '-1 Erro' : '-2 Erros'})`;
      colapsoClass = "badge-red";
    } else if (activeCharacter.colapsoId === 15) {
      colapsoDetail = `#15 Instabilidade (${activeCharacter.colapsoSeverity === 'simples' ? 'Erros: 1d4 PV' : 'Erros: 1d8 PV'})`;
      colapsoClass = "badge-red";
    } else if (activeCharacter.colapsoId > 0) {
      const colFound = COLAPSOS.find(c => c.id === activeCharacter.colapsoId);
      colapsoDetail = `#${activeCharacter.colapsoId} ${colFound ? colFound.name : 'Colapso'}`;
      colapsoClass = "badge-red";
    }

    const hasWand = (activeCharacter.equippedItems && activeCharacter.equippedItems.includes('varinha_foco')) || (activeCharacter.items && activeCharacter.items.toLowerCase().includes('varinha'));
    const totalFocText = `+${focBonus.toFixed(1)}s` + (hasWand ? " (+1.5s Varinha)" : "");

    const pvPct = Math.max(0, Math.min(100, (activeCharacter.currentPv / activeCharacter.pvMax) * 100));
    const isSobrecarga = activeCharacter.currentExaustao < 0;
    const safeSobrecarga = -0.10 * activeCharacter.exMax;
    const exPct = isSobrecarga ? 100 : Math.max(0, Math.min(100, (activeCharacter.currentExaustao / activeCharacter.exMax) * 100));

    const corp = CORPORATIONS[activeCharacter.corpId] || CORPORATIONS.bravia;

    dom.agentBar.innerHTML = `
      <div class="agent-profile">
        <img src="${activeCharacter.avatarUrl || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200'}" class="agent-avatar-img" alt="Avatar">
        <div class="agent-info">
          <h3>${activeCharacter.name || 'Agente'}</h3>
          <div class="agent-badges">
            <span class="badge badge-gold" title="${corp.name} (${corp.country})">${corp.flag} ${corp.name} · ${corp.agency}</span>
            <span class="badge badge-gold">Nv. ${activeCharacter.level || 1}</span>
            <span class="badge badge-blue">${cls.name}</span>
            <span class="badge ${colapsoClass}">${colapsoDetail}</span>
          </div>
        </div>
      </div>

      <div class="agent-vitals">
        <div class="vital-col">
          <div class="vital-label-row">
            <span>PV</span>
            <span><strong>${activeCharacter.currentPv}</strong> / ${activeCharacter.pvMax}</span>
          </div>
          <div class="vital-bar"><div class="vital-fill fill-pv" style="width:${pvPct}%;"></div></div>
        </div>
        <div class="vital-col">
          <div class="vital-label-row">
            <span>${isSobrecarga ? '⚠️ Sobrecarga' : 'Exaustão'}</span>
            <span><strong>${activeCharacter.currentExaustao}</strong> / ${activeCharacter.exMax}</span>
          </div>
          <div class="vital-bar"><div class="vital-fill ${isSobrecarga ? 'fill-sobrecarga' : 'fill-ex'}" style="width:${exPct}%;"></div></div>
        </div>
      </div>

      <div class="agent-meta-tags">
        <div class="meta-tag"><span style="color:var(--brass);">⚡ Bônus FOCO:</span> <strong>${totalFocText}</strong></div>
        <div class="meta-tag"><span style="color:var(--ink-dim);">🛡️ Margem Segura:</span> <span>${Math.round(safeSobrecarga)} Ex</span></div>
      </div>

      <div class="agent-actions">
        <button class="btn-sm" id="btnMinigameDescansoCurto" title="30 min: Recupera 20 Exaustão e cura 1d10+CON PV">🩹 Curto</button>
        <button class="btn-sm" id="btnMinigameDescansoCompleto" title="8 horas: Restaura 100% PV/Exaustão e dissipa Colapso">🏕️ Longo</button>
        <a href="ficha/index.html"><button class="btn-sm primary">👤 Ficha</button></a>
      </div>
    `;

    const btnCurto = document.getElementById('btnMinigameDescansoCurto');
    const btnLongo = document.getElementById('btnMinigameDescansoCompleto');
    if (btnCurto) btnCurto.onclick = minigameDescansoCurto;
    if (btnLongo) btnLongo.onclick = minigameDescansoCompleto;
  }

  function minigameDescansoCurto() {
    if (!activeCharacter) return;
    const conVal = (activeCharacter.attributes && activeCharacter.attributes.CON) || 0;
    let exRecovery = 20;
    if (activeCharacter.colapsoId === 13) {
      exRecovery = activeCharacter.colapsoSeverity === 'simples' ? 10 : 5;
    }
    activeCharacter.currentExaustao = Math.min(activeCharacter.exMax, activeCharacter.currentExaustao + exRecovery);
    const rollHp = Math.floor(Math.random() * 10) + 1;
    const totalHeal = rollHp + conVal;
    activeCharacter.currentPv = Math.min(activeCharacter.pvMax, activeCharacter.currentPv + Math.max(1, totalHeal));
    saveCharacter();
    renderAgentBar();
    alert(`🩹 Descanso Curto (30 min):\n+${exRecovery} Exaustão recuperada.\nCurou 1d10+CON (${rollHp}+${conVal} = ${totalHeal} PV).`);
  }

  function minigameDescansoCompleto() {
    if (!activeCharacter) return;
    activeCharacter.currentPv = activeCharacter.pvMax;
    activeCharacter.currentExaustao = activeCharacter.exMax;
    let colMsg = "";
    if (activeCharacter.colapsoId > 0) {
      activeCharacter.colapsoId = 0;
      colMsg = "\n✨ O fardo de Colapso Arcano foi dissipado!";
    }
    saveCharacter();
    renderAgentBar();
    alert(`🏕️ Descanso Completo (8 horas):\nPV e Exaustão 100% restaurados!${colMsg}`);
  }

  function updateHUDCharacter() {
    if (!dom.hudCharBar) return;
    if (!activeCharacter) {
      dom.hudCharBar.style.display = "none";
      if (dom.hudWarningSobrecarga) dom.hudWarningSobrecarga.style.display = "none";
      return;
    }
    dom.hudCharBar.style.display = "flex";
    if (dom.hudCharAvatar) dom.hudCharAvatar.src = activeCharacter.avatarUrl || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200";
    if (dom.hudCharName) dom.hudCharName.textContent = activeCharacter.name || "Agente";
    
    const cls = CLASSES[activeCharacter.classId] || { name: "Conjurador" };
    const corp = CORPORATIONS[activeCharacter.corpId] || CORPORATIONS.bravia;
    if (dom.hudCharClassLvl) dom.hudCharClassLvl.textContent = `${cls.name} · Nv. ${activeCharacter.level || 1} · ${corp.flag} ${corp.agency}`;
    
    if (dom.hudCharPv) dom.hudCharPv.textContent = `${activeCharacter.currentPv}/${activeCharacter.pvMax}`;
    if (dom.hudCharPvFill) dom.hudCharPvFill.style.width = `${Math.max(0, Math.min(100, (activeCharacter.currentPv / activeCharacter.pvMax) * 100))}%`;

    const isSobrecarga = activeCharacter.currentExaustao < 0;
    if (dom.hudCharEx) dom.hudCharEx.textContent = `${activeCharacter.currentExaustao}/${activeCharacter.exMax}`;
    if (dom.hudCharExFill) {
      dom.hudCharExFill.className = `mini-fill ${isSobrecarga ? 'fill-sobrecarga' : 'fill-ex'}`;
      dom.hudCharExFill.style.width = isSobrecarga ? '100%' : `${Math.max(0, Math.min(100, (activeCharacter.currentExaustao / activeCharacter.exMax) * 100))}%`;
    }

    if (dom.hudCastCostBadge) {
      dom.hudCastCostBadge.textContent = `Custo: ${gameState.circleCost} Ex`;
    }

    if (dom.hudWarningSobrecarga) {
      if (isSobrecarga) {
        const safeLimit = -0.10 * activeCharacter.exMax;
        const isCritical = activeCharacter.currentExaustao < safeLimit;
        dom.hudWarningSobrecarga.textContent = isCritical 
          ? `⚠️ SOBRECARGA CRÍTICA! Exaustão: ${activeCharacter.currentExaustao} (Limite seguro: ${Math.round(safeLimit)}). Risco Iminente de Colapso!` 
          : `⚠️ SOBRECARGA ARCANA! Exaustão: ${activeCharacter.currentExaustao} (Margem segura: ${Math.round(safeLimit)})`;
        dom.hudWarningSobrecarga.style.display = "block";
      } else {
        dom.hudWarningSobrecarga.style.display = "none";
      }
    }
  }

  /* ================= NAVEGAÇÃO E INTERFACE ================= */
  function renderCircleTabs() {
    dom.circleTabs.innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (let c = 1; c <= 7; c++) {
      const btn = document.createElement("button");
      btn.textContent = `Círculo ${c}`;
      if (c === activeCircle) btn.classList.add("active");
      btn.onclick = () => { 
        activeCircle = c; 
        renderCircleTabs(); 
        renderSpellGrid(); 
      };
      fragment.appendChild(btn);
    }
    dom.circleTabs.appendChild(fragment);
  }

  function renderSpellGrid() {
    dom.spellGrid.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const cost = CIRCLE_EXAUSTAO_COST[activeCircle] || 10;
    const diff = DIFFICULTY[activeCircle];

    (SPELLS[activeCircle] || []).forEach((spell, idx) => {
      const card = document.createElement("div");
      card.className = "spell-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <h3>${spell.name}</h3>
          <span class="badge badge-gold">${cost} Ex</span>
        </div>
        <p style="font-size:0.8rem; color:var(--ink-dim);">${spell.desc}</p>
        <div class="seq-preview rune">${spell.seq.map(k => `<span>${ELEMENTS[k].glyph}</span>`).join('')}</div>
        <div style="font-size:0.72rem; color:var(--ink-dim); display:flex; justify-content:space-between; margin-top:2px;">
          <span>⏱️ Base: ${diff.time}s</span>
          <span>❌ Max Erros: ${diff.maxErrors}</span>
        </div>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <button class="primary" style="flex-grow:1;">🔮 Conjurar</button>
          ${isCreationTesting ? '' : `<button class="btn-delete-spell" style="color:var(--danger);" title="Excluir magia">✕</button>`}
        </div>
      `;
      card.querySelector(".primary").onclick = () => startCast(spell, activeCircle);
      const deleteBtn = card.querySelector(".btn-delete-spell");
      if(deleteBtn) {
        deleteBtn.onclick = () => {
          if (confirm(`Excluir magia "${spell.name}"?`)) {
            SPELLS[activeCircle].splice(idx, 1);
            renderSpellGrid();
          }
        };
      }
      fragment.appendChild(card);
    });

    dom.spellGrid.appendChild(fragment);
  }

  /* ================= CRIADOR DE MAGIAS ================= */
  function initRunePicker() {
    dom.runePicker.innerHTML = "";
    const fragment = document.createDocumentFragment();

    ELEMENT_KEYS.forEach(key => {
      const btn = document.createElement("button");
      btn.innerHTML = `<span class="glyph">${ELEMENTS[key].glyph}</span><span class="name">${ELEMENTS[key].name}</span>`;
      btn.onclick = () => {
        if (customSeq.length < 7) {
          customSeq.push(key);
          updateSelectedRunesDisplay();
        }
      };
      fragment.appendChild(btn);
    });

    dom.runePicker.appendChild(fragment);
  }

  function updateSelectedRunesDisplay() {
    dom.selectedRunes.innerHTML = customSeq.map((k, i) => `
      <span class="rune">
        ${ELEMENTS[k].glyph} 
        <b data-index="${i}" class="btn-remove-rune">×</b>
      </span>
    `).join('');
  }

  // Event Delegation para remover runas selecionadas
  dom.selectedRunes.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove-rune")) {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      customSeq.splice(idx, 1);
      updateSelectedRunesDisplay();
    }
  });

  dom.btnCreateSpell.onclick = () => {
    dom.createPanel.classList.toggle("open");
    customSeq = [];
    updateSelectedRunesDisplay();
  };

  dom.btnCancelCreate.onclick = () => dom.createPanel.classList.remove("open");

  dom.btnStartCreationTest.onclick = () => {
    const name = dom.newSpellName.value.trim() || "Nova Magia";
    const desc = dom.newSpellDesc.value.trim() || "Magia customizada criada pelo jogador.";
    if (customSeq.length === 0) return alert("Selecione ao menos 1 símbolo!");

    const circle = parseInt(document.getElementById("newSpellCircle").value, 10);
    isCreationTesting = true;
    creationTestSpell = { name, desc, seq: [...customSeq] }; // Set variable
    dom.createPanel.classList.remove("open");
    startCast(creationTestSpell, circle);
  };

  /* ================= MOTOR DO JOGO (CANVAS 2D) ================= */
  function startCast(spell, circle) {
    currentSpell = spell;
    activeCircle = circle; // Update activeCircle to match the test circle
    const diff = DIFFICULTY[circle];
    const cost = CIRCLE_EXAUSTAO_COST[circle] || 10;
    gameState.circleCost = cost;

    // 1. Debitar Exaustão do Personagem Conectado
    if (activeCharacter) {
      activeCharacter.currentExaustao -= cost;
      saveCharacter();
      renderAgentBar();
    }

    // 2. Calcular Bônus de Tempo e Penalidades
    let focBonus = 0;
    let necrosePenalty = 0;
    let wandBonus = 0;
    let tremorPenalty = 0;

    if (activeCharacter) {
      const focVal = (activeCharacter.attributes && activeCharacter.attributes.FOC) || 0;
      if (activeCharacter.colapsoId === 11) {
        focBonus = activeCharacter.colapsoSeverity === 'simples' ? (focVal * 1.0) : 0;
      } else {
        focBonus = focVal * 1.5;
      }

      if (activeCharacter.colapsoId === 2) {
        necrosePenalty = 1.5;
      }

      if ((activeCharacter.equippedItems && activeCharacter.equippedItems.includes('varinha_foco')) || (activeCharacter.items && activeCharacter.items.toLowerCase().includes('varinha'))) {
        wandBonus = 1.5;
      }

      if (activeCharacter.colapsoId === 10) {
        tremorPenalty = activeCharacter.colapsoSeverity === 'simples' ? 1 : 2;
      }

      // Anel Rúnico: Ignora 1 erro
      if (activeCharacter.equippedItems && activeCharacter.equippedItems.includes('anel_runico')) {
        tremorPenalty -= 1;
      }
    }

    const totalStartingTime = Math.max(2, diff.time + focBonus - necrosePenalty + wandBonus);
    const effectiveMaxErrors = Math.max(1, diff.maxErrors - tremorPenalty);

    gameState.running = true;
    gameState.step = 0;
    gameState.errors = 0;
    gameState.hits = 0;
    gameState.timeLeft = totalStartingTime;
    gameState.timeTotal = totalStartingTime;
    gameState.effectiveMaxErrors = effectiveMaxErrors;
    gameState.lastTime = performance.now();

    // Velocidade base aumenta com o círculo
    const baseSpeedMult = 0.8 + (circle * 0.15);
    
    gameState.rings = spell.seq.map((key, i) => {
      // Anéis externos giram mais rápido
      const radiusMult = 1 + (i * 0.1); 
      return {
        targetKey: key,
        radius: BASE_RADII[i],
        angle: Math.random() * Math.PI * 2,
        speed: (0.8 + Math.random() * 0.4) * (i % 2 === 0 ? 1 : -1) * baseSpeedMult * radiusMult,
        solved: false
      };
    });

    renderRuneTracker();
    updateHUDCharacter();

    let bonusLabel = "";
    if (focBonus > 0) bonusLabel += ` · FOCO +${focBonus.toFixed(1)}s`;
    if (wandBonus > 0) bonusLabel += ` · Varinha +${wandBonus.toFixed(1)}s`;
    if (necrosePenalty > 0) bonusLabel += ` · Necrose -${necrosePenalty.toFixed(1)}s`;

    dom.castSpellName.textContent = spell.name + (isCreationTesting ? " (Criação)" : "");
    dom.castSpellBadge.textContent = `Círculo ${circle} · ${cost} Ex · ${effectiveMaxErrors} erros max · ${totalStartingTime.toFixed(1)}s${bonusLabel}`;
    dom.listScreen.style.display = "none";
    dom.castScreen.classList.add("open");
    dom.overlay.classList.remove("open");

    requestAnimationFrame(gameLoop);
  }

  function renderRuneTracker() {
    dom.runeTracker.innerHTML = currentSpell.seq.map((key, i) => `
      <div class="rune-tracker-item ${i === gameState.step ? 'active' : ''} ${i < gameState.step ? 'solved' : ''}">
        ${ELEMENTS[key].glyph}
      </div>
    `).join('');
  }

  function gameLoop(now) {
    if (!gameState.running) return;

    const dt = (now - gameState.lastTime) / 1000;
    gameState.lastTime = now;

    gameState.timeLeft -= dt;
    if (gameState.timeLeft <= 0) {
      gameState.timeLeft = 0;
      finishGame(false, "O tempo limite se esgotou!");
      return;
    }

    gameState.rings.forEach(ring => {
      if (!ring.solved) {
        ring.angle += ring.speed * dt;
      }
    });

    bgRotation += 0.2 * dt;

    renderCanvas();
    updateHUD();

    requestAnimationFrame(gameLoop);
  }

  function renderCanvas() {
    ctx.clearRect(0, 0, dom.canvas.width, dom.canvas.height);
    const cx = dom.canvas.width / 2;
    const cy = dom.canvas.height / 2;

    const currentRuneKey = currentSpell.seq[gameState.step] || currentSpell.seq[currentSpell.seq.length - 1];
    const element = ELEMENTS[currentRuneKey];
    const theme = THEMES[element.theme];

    // --- DESENHO DO FUNDO (STYLIZED) ---
    ctx.save();
    
    // 1. Gradiente de fundo radial
    const grad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 250);
    grad.addColorStop(0, theme.colors[0] + "44"); // 44 = opacity
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, dom.canvas.width, dom.canvas.height);

    // 2. Imagem de Pedras/Runas (Sutil)
    // REMOVED: assets.stones

    // 3. Magic Array Rotacionando e Colorido
    if (assets.loaded >= 1) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(bgRotation);
      
      // Efeito de brilho externo
      ctx.shadowColor = theme.main;
      ctx.shadowBlur = 20;
      
      // Desenhar o array
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = theme.main;
      ctx.globalAlpha = 0.3;
      ctx.drawImage(assets.array, -270, -270, 540, 540);
      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = "source-over";
      ctx.shadowBlur = 0;
      ctx.restore();
    }
    ctx.restore();

    // --- INDICADOR CENTRAL ---
    ctx.save();
    ctx.translate(cx, cy);
    const centralPulse = 0.9 + Math.sin(Date.now() / 300) * 0.1;
    ctx.scale(centralPulse, centralPulse);
    
    ctx.shadowColor = theme.main;
    ctx.shadowBlur = 15;
    ctx.fillStyle = theme.main;
    ctx.font = "bold 48px 'Noto Sans Runic', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(element.glyph, 0, 0);
    ctx.restore();

    // Marcador Superior
    ctx.strokeStyle = theme.main;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, 10); 
    ctx.lineTo(cx, 50);
    ctx.stroke();

    // Desenho dos Anéis
    gameState.rings.forEach((ring, rIdx) => {
      const isActive = (rIdx === gameState.step);
      const ringTheme = THEMES[ELEMENTS[ring.targetKey].theme];

      ctx.beginPath();
      ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
      ctx.strokeStyle = ring.solved ? ringTheme.main : (isActive ? ringTheme.main : "#2a2436");
      ctx.lineWidth = ring.solved || isActive ? 6 : 2;
      ctx.stroke();

      for (let s = 0; s < ELEMENT_KEYS.length; s++) {
        const symAngle = ring.angle + s * (Math.PI * 2 / ELEMENT_KEYS.length);
        const x = cx + ring.radius * Math.sin(symAngle);
        const y = cy - ring.radius * Math.cos(symAngle);
        
        const key = ELEMENT_KEYS[s];
        const isTarget = isActive && (key === ring.targetKey);
        const runeTheme = THEMES[ELEMENTS[key].theme];

        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        
        if (isTarget) {
          ctx.fillStyle = runeTheme.main;
          ctx.fill();
          ctx.shadowColor = runeTheme.main; 
          ctx.shadowBlur = 20;
        } else {
          ctx.fillStyle = "#16121d";
          ctx.fill();
          ctx.strokeStyle = ring.solved ? ringTheme.main : "#2a2436";
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = isTarget ? "#fff" : (ring.solved ? runeTheme.main : "#9d93b0");
        ctx.font = "24px 'Noto Sans Runic', serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(ELEMENTS[key].glyph, x, y);
        ctx.shadowBlur = 0;
      }
    });
  }

  function updateHUD() {
    const pct = (gameState.timeLeft / gameState.timeTotal) * 100;
    dom.timerFill.style.width = pct + "%";
    dom.timerFill.style.background = pct < 25 ? "var(--danger)" : "var(--success)";

    dom.timerLabel.textContent = `Tempo: ${gameState.timeLeft.toFixed(1)}s`;
    dom.errorLabel.textContent = `Erros: ${gameState.errors}/${gameState.effectiveMaxErrors || DIFFICULTY[activeCircle].maxErrors}`;
  }

  /* ================= AÇÕES DO JOGADOR ================= */
  function handleInput() {
    if (!gameState.running) return;

    const ring = gameState.rings[gameState.step];
    const stepAngle = (Math.PI * 2) / ELEMENT_KEYS.length;
    
    let currentAngle = (ring.angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    let closestIndex = Math.round((Math.PI * 2 - currentAngle) % (Math.PI * 2) / stepAngle) % ELEMENT_KEYS.length;
    let selectedKey = ELEMENT_KEYS[closestIndex];

    if (selectedKey === ring.targetKey) {
      ring.solved = true;
      gameState.hits++;
      gameState.step++;

      // Mecânica: +4s ao acertar, limitado ao total original
      gameState.timeLeft = Math.min(gameState.timeTotal, gameState.timeLeft + 4);

      renderRuneTracker();

      gameState.rings.forEach(r => { if (!r.solved) r.speed *= 1.25; });

      if (gameState.step >= gameState.rings.length) {
        finishGame(true, "A magia foi conjurada com maestria!");
      }
    } else {
      gameState.errors++;

      // Colapso 15 (Instabilidade Elemental): cada erro causa dano físico direto ao conjurador
      if (activeCharacter && activeCharacter.colapsoId === 15) {
        const isSimples = activeCharacter.colapsoSeverity === 'simples';
        const dmgDie = isSimples ? 4 : 8;
        const errDmg = Math.floor(Math.random() * dmgDie) + 1;
        activeCharacter.currentPv = Math.max(0, activeCharacter.currentPv - errDmg);
        saveCharacter();
        renderAgentBar();
        updateHUDCharacter();

        if (activeCharacter.currentPv <= 0) {
          finishGame(false, `💥 O conjurador sofreu ${errDmg} de dano direto por erro (Colapso 15) e caiu inconsciente!`);
          return;
        }
      }

      if (gameState.errors > (gameState.effectiveMaxErrors || DIFFICULTY[activeCircle].maxErrors)) {
        finishGame(false, "Desestabilização mágica! Erros em excesso.");
      }
    }
  }

  /* ================= DANO E FINALIZAÇÃO ================= */
  function rollCustomDamage(hits, circle, diceSide) {
    if (hits === 0) return { total: 0, text: "Nenhum acerto efetuado (0 dados de efeito)." };
    let rolls = [];
    let total = 0;
    const numDice = Math.max(1, circle);

    for (let i = 0; i < numDice; i++) {
      let r = Math.floor(Math.random() * diceSide) + 1;
      rolls.push(r);
      total += r;
    }
    return { total, text: `${numDice}d${diceSide} (${rolls.join(" + ")}) = ${total}` };
  }

  function finishGame(success, msg) {
    gameState.running = false;

    let finalDiceSide = DICE_TYPES[Math.min(Math.max(1, gameState.hits), 7)];
    let failureDetailHtml = "";

    if (!success) {
      // Wiki Falha: Conjurador rola 1d3 na Tabela de Falhas
      const d3 = Math.floor(Math.random() * 3) + 1;
      if (d3 === 1) {
        // 1 - Exaustão Dobrada
        const extraCost = gameState.circleCost || CIRCLE_EXAUSTAO_COST[activeCircle];
        if (activeCharacter) {
          activeCharacter.currentExaustao -= extraCost;
        }
        failureDetailHtml = `
          <strong>🎲 Falha Arcana (1d3 = 1): Exaustão Dobrada!</strong><br>
          O refluxo arcano dobrou o consumo de energia: <strong>+${extraCost} Exaustão adicional perdida</strong>.
        `;
      } else if (d3 === 2) {
        // 2 - FireBack
        let firebackTotal = 0;
        let rolls = [];
        for (let i = 0; i < activeCircle; i++) {
          const r = Math.floor(Math.random() * 6) + 1;
          rolls.push(r);
          firebackTotal += r;
        }
        if (activeCharacter) {
          activeCharacter.currentPv = Math.max(0, activeCharacter.currentPv - firebackTotal);
        }
        failureDetailHtml = `
          <strong>🎲 Falha Arcana (1d3 = 2): FireBack Arcano!</strong><br>
          O feitiço ricocheteou causando <strong>${firebackTotal} de dano mágico direto</strong> aos PVs (${activeCircle}d6: [${rolls.join('+')}]).
        `;
      } else {
        // 3 - Degradação de Cátedra
        const ladder = [100, 20, 12, 10, 8, 6, 4];
        const currentIdx = ladder.indexOf(finalDiceSide);
        if (currentIdx < ladder.length - 1 && currentIdx >= 0) {
          finalDiceSide = ladder[currentIdx + 1];
          failureDetailHtml = `
            <strong>🎲 Falha Arcana (1d3 = 3): Degradação de Cátedra!</strong><br>
            A pureza rúnica caiu e a potência da magia desceu para dados de <strong>d${finalDiceSide}</strong>.
          `;
        } else {
          failureDetailHtml = `
            <strong>🎲 Falha Arcana (1d3 = 3): Degradação de Cátedra!</strong><br>
            A pureza rúnica se desfez e a magia perdeu estabilidade de dado.
          `;
        }
      }
    }

    // Calcular Dano/Efeito (A magia ainda é conjurada com os acertos obtidos até o momento)
    const dmg = rollCustomDamage(gameState.hits, activeCircle, finalDiceSide);

    // Checar Sobrecarga Arcano e Colapso
    let sobrecargaWarningHtml = "";
    if (activeCharacter) {
      const safeLimit = -0.10 * activeCharacter.exMax;
      if (activeCharacter.currentExaustao < safeLimit) {
        const excess = Math.abs(activeCharacter.currentExaustao) - Math.abs(safeLimit);
        const colPoints = Math.ceil(excess / activeCircle);
        sobrecargaWarningHtml = `<br><span style="color:var(--danger); font-weight:700;">⚠️ SOBRECARGA CRÍTICA! Limite seguro ultrapassado (${activeCharacter.currentExaustao} Exaustão). +${colPoints} Ponto(s) de Colapso Arcano gerados!</span>`;
      }
      saveCharacter();
      renderAgentBar();
    }

    dom.overlayTitle.textContent = success ? "✨ Sucesso Arcano!" : "💥 Falha de Conjuração (Resolvida)";
    dom.overlayTitle.style.color = success ? "var(--success)" : "var(--danger)";
    dom.overlayText.innerHTML = msg + (activeCharacter ? `<br><small style="color:var(--ink-dim);">Exaustão consumida: ${gameState.circleCost || CIRCLE_EXAUSTAO_COST[activeCircle]} · Saldo restante: <strong>${activeCharacter.currentExaustao}</strong></small>` : "");

    if (dom.failureDetailBox) {
      if (!success && failureDetailHtml) {
        dom.failureDetailBox.innerHTML = failureDetailHtml;
        dom.failureDetailBox.style.display = "block";
      } else {
        dom.failureDetailBox.style.display = "none";
      }
    }

    dom.damageBox.innerHTML = `<strong>${success ? 'Dano Gerado:' : 'Efeito Residual da Magia:'}</strong><br>${dmg.text}`;

    if (dom.charUpdateSummary && activeCharacter) {
      dom.charUpdateSummary.innerHTML = `<strong>Status do Agente:</strong> PV: ${activeCharacter.currentPv}/${activeCharacter.pvMax} · Exaustão: ${activeCharacter.currentExaustao}/${activeCharacter.exMax}${sobrecargaWarningHtml}`;
    }

    // Adicionar botão de salvar se teste de criação bem sucedido
    const btnContainer = dom.overlay.querySelector(".overlay-card div:last-child");
    let btnSave = document.getElementById("btnSaveSpell");
    
    if (isCreationTesting && success) {
      if (!btnSave) {
        btnSave = document.createElement("button");
        btnSave.id = "btnSaveSpell";
        btnSave.className = "primary";
        btnSave.textContent = "💾 Salvar Magia";
        btnSave.onclick = saveCreation;
        btnContainer.insertBefore(btnSave, btnContainer.firstChild);
      }
    } else if (btnSave) {
      btnSave.remove();
    }

    dom.overlay.classList.add("open");
  }

  function saveCreation() {
    if (!SPELLS[activeCircle]) SPELLS[activeCircle] = [];
    SPELLS[activeCircle].push(creationTestSpell);
    renderSpellGrid();
    alert(`✨ Magia "${creationTestSpell.name}" salva com sucesso no Círculo ${activeCircle}!`);
    isCreationTesting = false;
    creationTestSpell = null;
    exitToMenu();
  }

  function exitToMenu() {
    gameState.running = false;
    dom.castScreen.classList.remove("open");
    dom.overlay.classList.remove("open");
    dom.listScreen.style.display = "block";
    loadCharacter();
    renderAgentBar();
  }

  /* ================= CONTROLES & EVENTOS ================= */
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && gameState.running) {
      e.preventDefault();
      handleInput();
    }
  });

  dom.canvas.addEventListener("pointerdown", handleInput);
  dom.btnBack.onclick = exitToMenu;
  dom.btnExit.onclick = exitToMenu;
  dom.btnRetry.onclick = () => startCast(currentSpell, activeCircle);

  // Sincronizar sempre que a janela receber foco (ex: voltando da aba da ficha)
  window.addEventListener("focus", () => {
    loadCharacter();
    renderAgentBar();
  });

  /* ================= INICIALIZAÇÃO ================= */
  loadCharacter();
  renderAgentBar();
  renderCircleTabs();
  renderSpellGrid();
  initRunePicker();
})();