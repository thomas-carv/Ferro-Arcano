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

  const SPELLS = {
    1: [{ name: "Fagulha Ardente", desc: "Projétil elemental simples.", seq: ["fogo"] }],
    2: [{ name: "Correnteza Aquática", desc: "Arrasta o alvo com duas ondas.", seq: ["agua", "agua"] }],
    3: [{ name: "Lança de Gelo", desc: "Estilhaço congelante perfurante.", seq: ["agua", "terra", "ar"] }],
    4: [{ name: "Barreira Elemental", desc: "Escudo que combina quatro elementos.", seq: ["terra", "agua", "fogo", "ar"] }],
    5: [{ name: "Chamas do Abismo", desc: "Fogo sombrio devorador.", seq: ["sombra", "fogo", "fogo", "arcano", "sombra"] }],
    6: [{ name: "Tempestade Arcana", desc: "Tempestade de mana pura instável.", seq: ["arcano", "ar", "agua", "fogo", "terra", "arcano"] }],
    7: [{ name: "Juízo Arcano Final", desc: "Magia ancestral dos 7 elementos.", seq: ["arcano", "luz", "sombra", "fogo", "agua", "terra", "ar"] }]
  };

  /* ================= ESTADO DO JOGO ================= */
  let activeCircle = 1;
  let customSeq = [];
  let isCreationTesting = false;
  let creationTestSpell = null; // New variable
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
    lastTime: 0
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
    btnRetry: document.getElementById("btnRetry")
  };

  const ctx = dom.canvas.getContext("2d");

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

    (SPELLS[activeCircle] || []).forEach((spell, idx) => {
      const card = document.createElement("div");
      card.className = "spell-card";
      card.innerHTML = `
        <h3>${spell.name}</h3>
        <p style="font-size:0.8rem; color:var(--ink-dim);">${spell.desc}</p>
        <div class="seq-preview rune">${spell.seq.map(k => `<span>${ELEMENTS[k].glyph}</span>`).join('')}</div>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="primary" style="flex-grow:1;">Conjurar</button>
          ${isCreationTesting ? '' : `<button class="btn-delete-spell" style="color:var(--danger);">✕</button>`}
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
    
    gameState.running = true;
    gameState.step = 0;
    gameState.errors = 0;
    gameState.hits = 0;
    gameState.timeLeft = diff.time;
    gameState.timeTotal = diff.time;
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

    dom.castSpellName.textContent = spell.name + (isCreationTesting ? " (Criação)" : "");
    dom.castSpellBadge.textContent = `Círculo ${circle} · ${diff.maxErrors} erros max.`;
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
    dom.errorLabel.textContent = `Erros: ${gameState.errors}/${DIFFICULTY[activeCircle].maxErrors}`;
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
      if (gameState.errors > DIFFICULTY[activeCircle].maxErrors) {
        finishGame(false, "Desestabilização mágica! Erros em excesso.");
      }
    }
  }

  /* ================= DANO E FINALIZAÇÃO ================= */
  function rollDamage(hits, circle) {
    if (hits === 0) return { total: 0, text: "Nenhum acerto efetuado." };
    const diceSide = DICE_TYPES[Math.min(hits, 7)];
    let rolls = [];
    let total = 0;

    for (let i = 0; i < circle; i++) {
      let r = Math.floor(Math.random() * diceSide) + 1;
      rolls.push(r);
      total += r;
    }
    return { total, text: `${circle}d${diceSide} (${rolls.join(" + ")}) = ${total}` };
  }

  function finishGame(success, msg) {
    gameState.running = false;

    // A lógica de salvamento automático foi removida daqui

    const dmg = rollDamage(gameState.hits, activeCircle);

    dom.overlayTitle.textContent = success ? "✨ Sucesso Arcano!" : "💥 Falha de Conjuração";
    dom.overlayTitle.style.color = success ? "var(--success)" : "var(--danger)";
    dom.overlayText.textContent = msg;
    dom.damageBox.innerHTML = `<strong>Dano Gerado:</strong><br>${dmg.text}`;

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

  /* ================= INICIALIZAÇÃO ================= */
  renderCircleTabs();
  renderSpellGrid();
  initRunePicker();
})();