(() => {
  'use strict';

  const STORAGE_ROOM_KEY = 'ferro_arcano_active_room';
  const STORAGE_PLAYERS_KEY = 'ferro_arcano_room_players_';
  const STORAGE_COMBAT_KEY = 'ferro_arcano_combat_';

  // Catálogo de colapsos para rolagem rápida pelo mestre
  const COLAPSOS = [
    { id: 1, name: "Visão Fraturada", simples: "–2 em Percepção/Prontidão e no VA de armas de fogo a mais de 12 m.", critica: "–4 em Percepção e alcance de visão reduzido a 18 m." },
    { id: 2, name: "Necrose Elemental", simples: "–1,5 s no tempo inicial do minigame.", critica: "–3 s no tempo inicial do minigame." },
    { id: 3, name: "Eco de Ressonância", simples: "Após conjurar, –1 Defesa até o próximo turno.", critica: "–2 Defesa até o próximo turno." },
    { id: 4, name: "Dreno Vital", simples: "1 de dano não reduzível ao conjurar.", critica: "2 de dano não reduzível ao conjurar." },
    { id: 5, name: "Fuga de Mana", simples: "+3 Exaustão em toda conjuração.", critica: "+6 Exaustão em toda conjuração." },
    { id: 6, name: "Chama Interna", simples: "Sofre 2 de dano de fogo ao conjurar.", critica: "Sofre +1d6 dano de fogo e Queimado." },
    { id: 7, name: "Rigidez Muscular", simples: "–2 em Esquiva.", critica: "–3 m de Deslocamento." },
    { id: 8, name: "Cicatriz de Descarga", simples: "Sofre +2 de dano elétrico.", critica: "Sofre +1d6 dano elétrico." },
    { id: 9, name: "Ressonância Eletrônica", simples: "Ao tocar arma, ela apresenta falha.", critica: "Armas a 1,5m sofrem interferência." },
    { id: 10, name: "Tremores nas Mãos", simples: "–1 no limite de erros do minigame.", critica: "–2 no limite de erros do minigame." },
    { id: 11, name: "Atrofia do Foco", simples: "FOC fornece apenas +1s no minigame.", critica: "FOC não fornece tempo adicional." },
    { id: 12, name: "Sombra Desincronizada", simples: "+2 VA de ataques C.C. contra você.", critica: "Ataques C.C. causam +1d6 dano." },
    { id: 13, name: "Dependência de Mana", simples: "Descanso Curto recupera apenas 10 EX.", critica: "Descanso Curto recupera apenas 5 EX." },
    { id: 14, name: "Pele de Vidro", simples: "Sofre +2 de dano físico.", critica: "Sofre +1d6 de dano físico." },
    { id: 15, name: "Instabilidade Elemental", simples: "Falhas causam 1d4 de dano.", critica: "Falhas causam 1d8 dano em si e 1d4 em área." },
    { id: 16, name: "Audição Espectral", simples: "–2 em Percepção/Prontidão.", critica: "Ruído intenso causa –2s no minigame." },
    { id: 17, name: "Eco de Conjuração", simples: "Rastro arcano por 3 rodadas.", critica: "Rastro arcano por 6 rodadas." },
    { id: 18, name: "Cristalização Nervosa", simples: "Recebe 1d4 de dano gélido adicional.", critica: "Recebe 3d4 de dano gélido adicional." },
    { id: 19, name: "Pulso Arcano", simples: "Alvo prioritário para magias em 3m.", critica: "Magias contra você recebem +2 VA." },
    { id: 20, name: "Marca do Abismo", simples: "Magias causam +2 dano/círculo contra você.", critica: "Margem de Detonação cai para 8." }
  ];

  const CORPORATIONS = {
    bravia: { flag: '🇧🇷', name: 'BRAVIA', agency: 'BRASA' },
    valor: { flag: '🇺🇸', name: 'VALOR', agency: 'VANT' },
    tianlong: { flag: '🇨🇳', name: 'TIANLONG', agency: 'LONGA' },
    kage: { flag: '🇯🇵', name: 'KAGE', agency: 'SHIN' },
    eisenwerk: { flag: '🇩🇪', name: 'EISENWERK', agency: 'WOLF' },
    lumiere: { flag: '🇫🇷', name: 'LUMIÈRE', agency: 'OMBRE' },
    crown: { flag: '🇬🇧', name: 'CROWN', agency: 'BLACK' },
    zvezda: { flag: '🇷🇺', name: 'ZVEZDA', agency: 'VOLK' },
    veda: { flag: '🇮🇳', name: 'VEDA', agency: 'NETRA' },
    aurelia: { flag: '🇮🇹', name: 'AURELIA', agency: 'CORVO' },
    northstar: { flag: '🇨🇦', name: 'NORTHSTAR', agency: 'FROST' },
    'southern-cross': { flag: '🇦🇺', name: 'SOUTHERN CROSS', agency: 'DINGO' },
    han: { flag: '🇰🇷', name: 'HAN', agency: 'GWI' },
    quetzal: { flag: '🇲🇽', name: 'QUETZAL', agency: 'ÁGUILA' },
    garuda: { flag: '🇮🇩', name: 'GARUDA', agency: 'NAGA' },
    sabaa: { flag: '🇸🇦', name: 'SABAA', agency: 'RIMAL' },
    ubuntu: { flag: '🇿🇦', name: 'UBUNTU', agency: 'MAMBA' },
    ayyildiz: { flag: '🇹🇷', name: 'AYYILDIZ', agency: 'BOZKURT' },
    plata: { flag: '🇦🇷', name: 'PLATA', agency: 'CONDOR' },
    iberia: { flag: '🇪🇸', name: 'IBERIA', agency: 'LANCE' },
    independente: { flag: '🏴', name: 'INDEPENDENTE', agency: 'LIVRE' }
  };

  let roomCode = localStorage.getItem(STORAGE_ROOM_KEY) || 'FA-7842';
  let players = new Map(); // id -> playerData
  let eventLogs = [];
  let combatRound = 0;
  let networkListenersBound = false;

  // ================= INICIALIZAÇÃO =================
  window.onload = () => {
    initRoomCode();
    combatRound = Math.max(0, Number(localStorage.getItem(STORAGE_COMBAT_KEY + roomCode)) || 0);
    loadPersistedPlayers();
    initNetwork();
    setupEventListeners();
    renderAll();
  };

  function initRoomCode() {
    document.getElementById('display-room-code').textContent = roomCode;
  }

  function loadPersistedPlayers() {
    try {
      const raw = localStorage.getItem(STORAGE_PLAYERS_KEY + roomCode);
      if (raw) {
        const arr = JSON.parse(raw);
        arr.forEach(p => {
          if (isValidPlayer(p)) players.set(p.id, p);
        });
      }
    } catch (e) {
      console.warn('Erro ao carregar jogadores salvos:', e);
    }
  }

  function savePersistedPlayers() {
    try {
      const arr = Array.from(players.values());
      localStorage.setItem(STORAGE_PLAYERS_KEY + roomCode, JSON.stringify(arr));
    } catch (e) {
      console.warn('Erro ao persistir jogadores:', e);
    }
  }

  function broadcastSquadRoster() {
    const roster = Array.from(players.values()).map(p => ({
      id: p.id,
      name: p.name || 'Agente',
      classId: p.classId || 'combatente',
      level: p.level || 1
    }));
    window.FerroArcanoNetwork.broadcast('SQUAD_ROSTER', roster);
  }

  function initNetwork() {
    window.FerroArcanoNetwork.init(roomCode, 'gm');
    if (networkListenersBound) {
      requestRoomSync();
      return;
    }
    networkListenersBound = true;

    // Escuta entrada de jogadores
    window.FerroArcanoNetwork.on('PLAYER_JOIN', (payload) => {
      if (!isValidPlayer(payload)) return;
      const isNewPlayer = !players.has(payload.id);
      players.set(payload.id, payload);
      savePersistedPlayers();
      renderAll();
      if (isNewPlayer) {
        logEvent('player', `👤 <strong>${escapeHtml(payload.name || 'Agente')}</strong> ingressou na sala.`);
      }
      // Envia confirmação de sync ao jogador com o status de trava
      window.FerroArcanoNetwork.broadcast('ROOM_SYNC', {
        player: payload
      });
      broadcastSquadRoster();
      if (combatRound > 0) window.FerroArcanoNetwork.broadcast('ROUND_STARTED', { round: combatRound });
    });

    // Escuta atualizações enviadas pelos jogadores
    window.FerroArcanoNetwork.on('PLAYER_UPDATE', (payload) => {
      if (!isValidPlayer(payload)) return;
      const existing = players.get(payload.id);
      // Mantém trava imposta pelo mestre se não especificada
      const locked = existing ? existing.is_locked : true;
      payload.is_locked = (payload.is_locked !== undefined) ? payload.is_locked : locked;
      players.set(payload.id, payload);
      savePersistedPlayers();
      renderAll();
      broadcastSquadRoster();
    });

    // Escuta rolagens de dados dos jogadores
    window.FerroArcanoNetwork.on('ROLL_LOG', (payload) => {
      if (!payload) return;
      const kind = ['damage', 'heal', 'skill', 'system', 'player'].includes(payload.kind) ? payload.kind : 'damage';
      logEvent(kind, escapeHtml(String(payload.message || '').replace(/<[^>]*>/g, '')), payload.playerName);
    });

    // Escuta ações de combate e uso de habilidades/recursos
    window.FerroArcanoNetwork.on('ACTION_LOG', (payload) => {
      if (!payload || !payload.text) return;
      logEvent('skill', escapeHtml(payload.text), payload.playerName || 'Agente');
    });

    // Escuta buffs aplicados entre aliados (ex.: Mediador Arcano)
    window.FerroArcanoNetwork.on('ALLIED_BUFF_APPLIED', (payload) => {
      if (!payload) return;
      const target = players.get(payload.targetPlayerId);
      const targetName = target ? target.name : 'Aliado';
      logEvent('skill', `✨ <strong>${escapeHtml(payload.sourcePlayerName)}</strong> aplicou <em>${escapeHtml(payload.abilityName)}</em> em <strong>${escapeHtml(targetName)}</strong>!`, 'Suporte Arcano');
    });

    // Status de conexão
    window.FerroArcanoNetwork.on('connection_status', (payload) => {
      const statusPill = document.getElementById('connection-status-pill');
      if (statusPill) {
        if (payload.mode === 'peerjs' && ['HOSTING', 'CONNECTED'].includes(payload.status)) {
          statusPill.className = 'status-pill';
          statusPill.innerHTML = payload.status === 'HOSTING'
            ? '🟢 Sala Online · Aguardando jogadores'
            : '🟢 Multiplayer Online';
          requestRoomSync();
        } else if (payload.mode === 'peerjs' && payload.status === 'ERROR') {
          statusPill.className = 'status-pill';
          statusPill.innerHTML = '🟠 Conexão local ativa';
        } else {
          statusPill.className = 'status-pill';
          statusPill.innerHTML = '🟡 Preparando sala online...';
        }
      }
    });
    window.FerroArcanoNetwork.on('presence_sync', requestRoomSync);
    requestRoomSync();
  }

  function requestRoomSync() {
    window.FerroArcanoNetwork.broadcast('ROOM_SYNC_REQUEST', { requestedAt: Date.now() });
  }

  function setupEventListeners() {
    // Copia um convite completo; a sala viaja no fragmento e não exige configuração do jogador.
    document.getElementById('btn-copy-code').onclick = async () => {
      const inviteUrl = new URL('../minigame/ficha/index.html', window.location.href);
      const invite = new URLSearchParams({ room: roomCode });
      inviteUrl.hash = invite.toString();
      try {
        await navigator.clipboard.writeText(inviteUrl.toString());
        showNotification(`Convite online copiado para a sala ${roomCode}.`);
      } catch (error) {
        showNotification('Não foi possível copiar o convite. Tente novamente.');
      }
    };

    // Criar nova sala
    document.getElementById('btn-new-room').onclick = () => {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const newCode = 'FA-' + randNum;
      if (confirm(`Deseja criar e migrar para a nova sala ${newCode}?`)) {
        roomCode = newCode;
        combatRound = 0;
        localStorage.setItem(STORAGE_ROOM_KEY, roomCode);
        localStorage.setItem(STORAGE_COMBAT_KEY + roomCode, '0');
        players.clear();
        savePersistedPlayers();
        initRoomCode();
        initNetwork();
        renderAll();
        logEvent('system', `🎲 Sala recriada: <strong>${roomCode}</strong>`);
      }
    };

    // Rolar Dados Rápidos do Mestre
    document.getElementById('btn-gm-d20').onclick = () => rollGmDice(20);
    document.getElementById('btn-gm-d100').onclick = () => rollGmDice(100);
    document.getElementById('btn-gm-descanso').onclick = triggerSquadShortRest;
    document.getElementById('btn-gm-curatotal').onclick = triggerSquadFullRest;
    document.getElementById('btn-next-round').onclick = startNextRound;
  }

  // ================= RENDERIZAÇÃO =================
  function renderAll() {
    const roundLabel = document.getElementById('combat-round');
    if (roundLabel) roundLabel.textContent = combatRound > 0 ? `Rodada ${combatRound}` : 'Fora de combate';
    renderSquadSummary();
    renderPlayersGrid();
  }

  function renderSquadSummary() {
    const list = Array.from(players.values());
    document.getElementById('summary-total-agents').textContent = list.length;

    if (list.length === 0) {
      document.getElementById('summary-total-pv').textContent = '0 / 0';
      document.getElementById('summary-avg-ex').textContent = '0%';
      document.getElementById('summary-active-powers').textContent = '0 ativas';
      return;
    }

    let curPv = 0, maxPv = 0, totalExPct = 0, activeCount = 0;
    list.forEach(p => {
      curPv += (p.currentPv || 0);
      maxPv += (p.pvMax || 30);
      const pMaxEx = p.exMax || 40;
      totalExPct += Math.max(0, (p.currentExaustao || 0) / pMaxEx);
      activeCount += (p.activeAbilities ? p.activeAbilities.length : 0);
    });

    document.getElementById('summary-total-pv').textContent = `${curPv} / ${maxPv}`;
    document.getElementById('summary-avg-ex').textContent = `${Math.round((totalExPct / list.length) * 100)}%`;
    document.getElementById('summary-active-powers').textContent = `${activeCount} ativas`;
  }

  function renderPlayersGrid() {
    const container = document.getElementById('players-grid');
    const list = Array.from(players.values());

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding:40px 20px; text-align:center; background:var(--bg-panel); border:1px dashed var(--border-subtle); border-radius:var(--radius); color:var(--ink-dim);">
          <span style="font-size:2.4rem; display:block; margin-bottom:8px;">📡</span>
          <h3 style="color:var(--ink); margin-bottom:4px;">Aguardando Agentes na Sala ${roomCode}</h3>
          <p style="font-size:0.85rem;">Envie o <strong>link de convite</strong> aos jogadores ou peça que informem o código <strong>${roomCode}</strong> em uma ficha já configurada.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(p => {
      const corp = CORPORATIONS[p.corpId] || CORPORATIONS.bravia;
      const isLocked = p.is_locked !== false; // Default: locked when in room
      const pvMax = p.pvMax || 30;
      const curPv = (p.currentPv !== undefined) ? p.currentPv : pvMax;
      const exMax = p.exMax || 40;
      const curEx = (p.currentExaustao !== undefined) ? p.currentExaustao : exMax;
      const isSobrecarga = curEx < 0;

      // Colapso
      const colapsoObj = COLAPSOS.find(c => c.id === p.colapsoId) || { name: 'Normal', simples: 'Sem sequela' };
      const colapsoDesc = p.colapsoSeverity === 'critica' ? colapsoObj.critica : colapsoObj.simples;

      // Armas & VA Fixo
      const weapons = p.weapons || [];

      // Habilidades Ativas
      const activePowers = p.activeAbilities || [];
      const conditions = Array.isArray(p.conditions) ? p.conditions : [];
      const avatarUrl = safeImageUrl(p.avatarUrl);

      return `
        <article class="player-card ${isLocked ? 'locked' : ''}" id="card-${p.id}">
          <div class="player-card-header">
            <img src="${avatarUrl}" class="player-avatar" alt="Avatar de ${escapeHtml(p.name || 'Agente')}">
            <div class="player-info">
              <div class="player-name-row">
                <h3>${escapeHtml(p.name || 'Agente')}</h3>
                <span class="corp-badge">${corp.flag} ${corp.name}</span>
              </div>
              <p class="player-class-sub">${escapeHtml(capitalize(p.classId || 'combatente'))} Nv. ${Number(p.level) || 1}${p.trailName ? ' · ' + escapeHtml(p.trailName) : ''}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
                <span class="lock-badge ${isLocked ? 'locked' : 'unlocked'}" onclick="togglePlayerLock('${p.id}')">
                  ${isLocked ? '🔒 Ficha Travada' : '🔓 Liberada p/ Jogador'}
                </span>
              </div>
              <div class="player-tactical-stats">
                <span title="Defesa Estática">🛡️ Def: <strong>${p.defenseTotal || 10}</strong></span>
                <span title="Redução de Dano Física">🧱 RD Fís: <strong>${p.rdFisica || 0}</strong></span>
                <span title="Redução de Dano Mágica">🔮 RD Mág: <strong>${p.rdMagica || 0}</strong></span>
                <span title="Bônus de Esquiva ativa">🏃 Esq: <strong>+${p.esquivaBonus || 0}</strong></span>
                <span title="Pontos de Ação no turno">⚡ PA: <strong style="color:var(--brass);">${p.currentPa !== undefined ? p.currentPa : 3}/${p.maxPa || 3}</strong></span>
                <span title="Reação da rodada">↩ Reação: <strong>${p.combat?.reactionAvailable === false ? 'usada' : 'disponível'}</strong></span>
                <span title="Recurso da Classe">${escapeHtml(p.resourceName || 'Recurso')}: <strong style="color:var(--brass);">${p.classResource !== undefined ? p.classResource : 0}</strong></span>
              </div>
            </div>
          </div>

          <div class="active-powers-section">
            <div class="active-powers-title"><span>Condições (${conditions.length})</span></div>
            <div class="active-powers-list">
              ${conditions.length ? conditions.map(condition => {
                const rule = window.FerroArcanoRules.CONDITIONS[condition.id];
                return `<span class="condition-chip">${escapeHtml(rule?.name || condition.id)}${condition.turnsRemaining != null ? ` · ${Number(condition.turnsRemaining)}r` : ''}</span>`;
              }).join('') : '<span style="font-size:0.72rem;color:var(--ink-dim);">Sem condições registradas.</span>'}
            </div>
          </div>

          <!-- Barra de PV -->
          <div class="vital-row">
            <div class="vital-label-bar">
              <span style="color:#ef4444;">PONTOS DE VIDA</span>
              <span id="label-pv-${p.id}">${curPv} / ${pvMax}</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill-pv" id="bar-pv-${p.id}" style="width:${Math.max(0, Math.min(100, (curPv / pvMax) * 100))}%;"></div>
            </div>
            <div class="quick-ctrl-btns">
              <button class="danger" onclick="modifyPlayerVital('${p.id}', 'pv', -5)">−5</button>
              <button class="danger" onclick="modifyPlayerVital('${p.id}', 'pv', -1)">−1</button>
              <button onclick="modifyPlayerVital('${p.id}', 'pv', 1)">+1</button>
              <button onclick="modifyPlayerVital('${p.id}', 'pv', 5)">+5</button>
              <button class="quiet" onclick="healPlayerFull('${p.id}')">Max</button>
            </div>
          </div>

          <!-- Barra de Exaustão -->
          <div class="vital-row">
            <div class="vital-label-bar">
              <span style="color:#60a5fa;">EXAUSTÃO ARCANA</span>
              <span id="label-ex-${p.id}">${curEx} / ${exMax} ${isSobrecarga ? '<small style="color:var(--danger)">(Sobrecarga)</small>' : ''}</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill-ex ${isSobrecarga ? 'sobrecarga' : ''}" id="bar-ex-${p.id}" style="width:${isSobrecarga ? '100%' : Math.max(0, Math.min(100, (curEx / exMax) * 100))}%;"></div>
            </div>
            <div class="quick-ctrl-btns">
              <button onclick="modifyPlayerVital('${p.id}', 'ex', -10)">−10 EX</button>
              <button onclick="modifyPlayerVital('${p.id}', 'ex', 5)">+5 EX</button>
              <button onclick="modifyPlayerVital('${p.id}', 'ex', 10)">+10 EX</button>
              <button class="quiet" onclick="clearPlayerExhaustion('${p.id}')">Reset</button>
            </div>
          </div>

          <!-- Habilidades Ativas no Momento -->
          <div class="active-powers-section">
            <div class="active-powers-title">
              <span>⚡ Habilidades Ativas (${activePowers.length})</span>
              <span style="font-size:0.68rem; color:var(--ink-dim); text-transform:none;">Tempo Real</span>
            </div>
            <div class="active-powers-list">
              ${activePowers.length ? activePowers.map(a => `
                <div class="active-power-card">
                  <div class="active-power-title-row">
                    <strong>✨ ${escapeHtml(typeof a === 'object' ? a.name : a)}</strong>
                    ${(typeof a === 'object' && a.cost) ? `<span style="font-size:0.65rem; color:var(--brass);">${escapeHtml(a.cost)}</span>` : ''}
                  </div>
                  ${(typeof a === 'object' && a.summary) ? `<p class="active-power-desc">${escapeHtml(a.summary)}</p>` : ''}
                </div>`).join('') : '<span style="font-size:0.72rem; color:var(--ink-dim);">Nenhuma postura/efeito ativado.</span>'}
            </div>
          </div>

          <!-- Arsenal e VA Fixo -->
          <div>
            <span style="font-size:0.72rem; font-weight:700; color:var(--brass); text-transform:uppercase; display:block; margin-bottom:4px;">Arsenal &amp; VA Fixo</span>
            <div class="weapons-mini-list">
              ${weapons.length ? weapons.map(w => `
                <div class="weapon-mini-item">
                  <span><strong>${escapeHtml(w.name)}</strong> <small style="color:var(--ink-dim);">(${w.damage} · ${w.crit})</small></span>
                  <span class="va-fixed-badge" title="Valor Fixo de Ataque">VA ${w.fixedVa || 10}</span>
                </div>
              `).join('') : '<span style="color:var(--ink-dim); font-size:0.72rem;">Sem armas registradas.</span>'}
            </div>
          </div>

          <!-- Colapso Arcano -->
          <div class="collapse-mini-box">
            <div>
              <strong style="color:${p.colapsoId > 0 ? 'var(--danger)' : 'var(--ink)'};">
                ${p.colapsoId > 0 ? `⚠️ #${p.colapsoId} ${colapsoObj.name} (${p.colapsoSeverity})` : 'Normal (Sem Colapso)'}
              </strong>
              <span style="display:block; color:var(--ink-dim); font-size:0.68rem;">${escapeHtml(colapsoDesc)}</span>
            </div>
            <button class="quiet" style="padding:2px 6px; font-size:0.7rem;" onclick="rollCollapseForPlayer('${p.id}')">🎲 Colapso</button>
          </div>
        </article>
      `;
    }).join('');
  }

  // ================= AÇÕES DO MESTRE SOBRE JOGADORES =================
  window.togglePlayerLock = (playerId) => {
    const p = players.get(playerId);
    if (!p) return;
    p.is_locked = !p.is_locked;
    players.set(playerId, p);
    savePersistedPlayers();
    renderPlayersGrid();

    // Notifica jogador
    window.FerroArcanoNetwork.broadcast('GM_LOCK_TOGGLE', {
      playerId,
      is_locked: p.is_locked
    });

    logEvent('system', `🔒 Ficha de <strong>${escapeHtml(p.name)}</strong> foi ${p.is_locked ? 'TRAVADA' : 'LIBERADA'} pelo Mestre.`);
  };

  window.modifyPlayerVital = (playerId, vital, delta) => {
    const p = players.get(playerId);
    if (!p) return;

    if (vital === 'pv') {
      const max = p.pvMax || 30;
      p.currentPv = Math.min(max, Math.max(0, (p.currentPv || 0) + delta));
      logEvent(delta < 0 ? 'damage' : 'heal', `${delta < 0 ? '💥 Dano' : '💚 Cura'} de ${Math.abs(delta)} PV em <strong>${escapeHtml(p.name)}</strong> (Agora: ${p.currentPv}/${max})`);
    } else if (vital === 'ex') {
      p.currentExaustao = (p.currentExaustao || 0) + delta;
      logEvent('skill', `⚡ Exaustão de <strong>${escapeHtml(p.name)}</strong> alterada em ${delta > 0 ? '+' : ''}${delta} (Agora: ${p.currentExaustao})`);
    }

    players.set(playerId, p);
    savePersistedPlayers();
    renderAll();

    // Notifica ficha do jogador
    window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
      playerId,
      currentPv: p.currentPv,
      currentExaustao: p.currentExaustao
    });
  };

  window.healPlayerFull = (playerId) => {
    const p = players.get(playerId);
    if (!p) return;
    p.currentPv = p.pvMax || 30;
    players.set(playerId, p);
    savePersistedPlayers();
    renderAll();

    window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
      playerId,
      currentPv: p.currentPv
    });

    logEvent('heal', `💚 <strong>${escapeHtml(p.name)}</strong> recuperou todos os PV (${p.currentPv}).`);
  };

  window.clearPlayerExhaustion = (playerId) => {
    const p = players.get(playerId);
    if (!p) return;
    p.currentExaustao = p.exMax || 40;
    players.set(playerId, p);
    savePersistedPlayers();
    renderAll();

    window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
      playerId,
      currentExaustao: p.currentExaustao
    });

    logEvent('skill', `✨ Exaustão de <strong>${escapeHtml(p.name)}</strong> reiniciada para o máximo (${p.currentExaustao}).`);
  };

  window.rollCollapseForPlayer = (playerId) => {
    const p = players.get(playerId);
    if (!p) return;
    const roll = Math.floor(Math.random() * 20) + 1;
    const col = COLAPSOS.find(c => c.id === roll) || COLAPSOS[0];

    p.colapsoId = roll;
    players.set(playerId, p);
    savePersistedPlayers();
    renderAll();

    window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
      playerId,
      colapsoId: roll
    });

    logEvent('damage', `⚡ Mestre rolou Colapso 1d20 para <strong>${escapeHtml(p.name)}</strong>: <strong>[${roll}] ${col.name}</strong>`);
  };

  function triggerSquadShortRest() {
    if (players.size === 0) return;
    players.forEach(p => {
      const pvMax = p.pvMax || 30;
      const exMax = p.exMax || 40;
      p.currentExaustao = Math.min(exMax, (p.currentExaustao || 0) + 20);
      const heal = Math.floor(Math.random() * 10) + 1 + (p.attributes?.CON || 0);
      p.currentPv = Math.min(pvMax, (p.currentPv || 0) + heal);

      window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
        playerId: p.id,
        currentPv: p.currentPv,
        currentExaustao: p.currentExaustao
      });
    });
    savePersistedPlayers();
    renderAll();
    logEvent('heal', '🩹 <strong>Descanso Curto do Esquadrão (30 min)</strong> aplicado a todos os agentes!');
  }

  function startNextRound() {
    combatRound += 1;
    localStorage.setItem(STORAGE_COMBAT_KEY + roomCode, String(combatRound));
    players.forEach(player => {
      player.combat = Object.assign({}, player.combat, { round: combatRound, reactionAvailable: true });
      player.currentPa = (player.maxPa || 3) + Math.min(1, Math.max(0, player.combat.pendingPa || 0));
      player.combat.pendingPa = 0;
    });
    savePersistedPlayers();
    window.FerroArcanoNetwork.broadcast('ROUND_STARTED', { round: combatRound });
    renderAll();
    logEvent('system', `▶ <strong>Rodada ${combatRound}</strong> iniciada. PA, reação e limites de recuperação foram renovados.`);
  }

  function triggerSquadFullRest() {
    if (players.size === 0) return;
    players.forEach(p => {
      p.currentPv = p.pvMax || 30;
      p.currentExaustao = p.exMax || 40;
      p.colapsoPoints = Math.max(0, (p.colapsoPoints || 0) - 1);

      window.FerroArcanoNetwork.broadcast('GM_UPDATE_PLAYER', {
        playerId: p.id,
        currentPv: p.currentPv,
        currentExaustao: p.currentExaustao,
        colapsoPoints: p.colapsoPoints
      });
    });
    savePersistedPlayers();
    renderAll();
    logEvent('heal', '🏕️ <strong>Descanso Completo (8 horas)</strong>: PV e Exaustão restaurados; cada agente reduziu 1 ponto de Colapso. Sequelas permanecem registradas.');
  }

  function rollGmDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    logEvent('system', `🎲 Mestre rolou 1d${sides}: <strong>${roll}</strong>`);
  }

  // ================= LOG DE EVENTOS =================
  function logEvent(kind, message, author = 'Mestre') {
    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    eventLogs.unshift({ kind, message, author, time });
    if (eventLogs.length > 50) eventLogs.pop();

    const container = document.getElementById('event-log-feed');
    if (container) {
      container.innerHTML = eventLogs.map(l => `
        <div class="log-entry ${l.kind}">
          <div class="log-entry-meta">
            <span>${escapeHtml(l.author)}</span>
            <span>${l.time}</span>
          </div>
          <div>${l.message}</div>
        </div>
      `).join('');
    }
  }

  function showNotification(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#18181b; border:1px solid #f59e0b; color:#fff; padding:12px 18px; border-radius:8px; z-index:9999; box-shadow:0 10px 30px rgba(0,0,0,0.7); font-size:0.85rem;';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function isValidPlayer(payload) {
    return Boolean(payload && /^[A-Za-z0-9_-]{1,80}$/.test(String(payload.id || '')));
  }

  function safeImageUrl(value) {
    const fallback = 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200';
    if (!value) return fallback;
    try {
      const url = new URL(String(value), window.location.href);
      const safeDataImage = /^data:image\/(?:png|jpe?g|webp|gif);base64,/i.test(String(value));
      return (['http:', 'https:'].includes(url.protocol) || safeDataImage) ? escapeHtml(url.href) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }
})();
