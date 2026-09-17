const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../minigame/ficha/index.html');
const existingHtml = fs.readFileSync(targetPath, 'utf8');

// We will construct the enhanced HTML ensuring all CSS, HTML structure, and JS logic are clean and complete.
const newHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Ficha de Personagem — Ferro & Arcano</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../styles.css">
  <!-- Supabase JS Client Oficial (CDN) -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="../../mestre/supabaseClient.js"></script>
  <style>
    :root {
      --bg-ficha: #09090b;
      --card-bg: #18181b;
      --border-color: #27272a;
      --accent-color: #3b82f6;
      --accent-glow: rgba(59, 130, 246, 0.2);
      --brass-glow: rgba(245, 158, 11, 0.2);
      --purple-glow: rgba(168, 85, 247, 0.2);
    }

    body {
      background: radial-gradient(circle at top, #151828 0%, #09090b 45%, #050508 100%);
      color: var(--ink);
      font-family: 'Inter', system-ui, sans-serif;
      padding: 16px 20px 40px;
      min-height: 100vh;
    }

    .topbar {
      max-width: 1320px;
      margin: 0 auto 16px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border-color);
      flex-wrap: wrap;
      gap: 12px;
    }

    .topbar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-symbol {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--brass);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--brass);
      font-weight: 800;
      font-size: 1.1rem;
    }

    .ficha-container {
      width: 100%;
      max-width: 1320px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 24px;
      align-items: start;
    }

    @media (max-width: 1100px) {
      .ficha-container {
        grid-template-columns: 1fr;
      }
    }

    .panel-card {
      background: rgba(24, 24, 27, 0.85);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 20px;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      gap: 16px;
      backdrop-filter: blur(10px);
    }

    .panel-header {
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .panel-header h2 {
      font-size: 1.15rem;
      color: var(--brass);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-group label {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--ink-dim);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }

    input[type="text"],
    input[type="number"],
    select,
    textarea {
      background: #121214;
      border: 1px solid var(--border-color);
      color: var(--ink);
      padding: 10px 14px;
      border-radius: 8px;
      font-family: inherit;
      font-size: 0.9rem;
      transition: all 0.2s;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--brass);
      box-shadow: 0 0 10px var(--brass-glow);
    }

    input:disabled, select:disabled, textarea:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #09090b;
    }

    /* Grids de Atributos */
    .attr-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    @media (max-width: 650px) {
      .attr-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .attr-control {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 10px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      position: relative;
    }

    .attr-control b {
      font-size: 0.9rem;
      color: var(--brass);
    }

    .attr-control small {
      font-size: 0.68rem;
      color: var(--ink-dim);
    }

    .attr-control strong {
      font-size: 1.5rem;
      color: var(--ink);
      font-weight: 800;
      margin: 4px 0;
    }

    .attr-btns {
      display: flex;
      gap: 4px;
      width: 100%;
    }

    .attr-btns button {
      flex: 1;
      padding: 4px 0;
      background: #27272a;
      border: 1px solid #3f3f46;
      border-radius: 6px;
      color: var(--ink);
      font-weight: bold;
      cursor: pointer;
    }

    .attr-btns button:hover:not(:disabled) {
      background: var(--brass);
      color: #121214;
    }

    .attr-btns button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* Perícias Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    @media (max-width: 700px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }

    .skill-check-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 0.82rem;
      cursor: pointer;
    }

    .skill-check-item.mandatory {
      border-color: rgba(245, 158, 11, 0.4);
      background: rgba(245, 158, 11, 0.05);
    }

    .skill-check-item.specialized {
      border-color: rgba(168, 85, 247, 0.5);
      background: rgba(168, 85, 247, 0.08);
    }

    /* Habilidades */
    .ability-item {
      padding: 10px 12px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 8px;
      margin-bottom: 8px;
      font-size: 0.8rem;
      transition: all 0.2s ease;
    }

    .ability-item.active-power {
      background: rgba(59, 130, 246, 0.12);
      border-color: rgba(59, 130, 246, 0.5);
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
    }

    .ability-item.passive-power {
      border-left: 3px solid #10b981;
    }

    .ability-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      gap: 8px;
    }

    .btn-toggle-ability {
      padding: 4px 10px;
      font-size: 0.72rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 700;
      transition: all 0.2s;
    }

    .btn-toggle-ability.off {
      background: transparent;
      border: 1px solid var(--brass);
      color: var(--brass-light);
    }

    .btn-toggle-ability.off:hover {
      background: rgba(245, 158, 11, 0.15);
    }

    .btn-toggle-ability.on {
      background: var(--accent-color);
      border: 1px solid #93c5fd;
      color: #fff;
      box-shadow: 0 0 12px var(--accent-glow);
    }

    .badge-passive {
      font-size: 0.68rem;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #34d399;
      font-weight: 700;
    }

    .fixed-va-badge {
      font-family: monospace;
      font-weight: 800;
      color: var(--brass-light);
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--brass);
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 0.95rem;
      display: inline-block;
    }

    .btn-roll-damage {
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.5);
      color: #fca5a5;
      padding: 4px 8px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .btn-roll-damage:hover {
      background: rgba(239, 68, 68, 0.3);
      color: #fff;
    }

    .power-chip {
      font-size: 0.72rem;
      padding: 3px 8px;
      border-radius: 6px;
      background: rgba(59, 130, 246, 0.18);
      border: 1px solid rgba(59, 130, 246, 0.5);
      color: #93c5fd;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
    }

    .power-chip button {
      background: transparent;
      border: none;
      color: #fca5a5;
      cursor: pointer;
      font-weight: bold;
      padding: 0 2px;
    }

    /* Armamentos Tabela */
    .weapons-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8rem;
    }

    .weapons-table th, .weapons-table td {
      padding: 8px 6px;
      border-bottom: 1px solid var(--border-color);
      text-align: left;
    }

    .weapons-table th {
      color: var(--ink-dim);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.72rem;
    }

    /* Preview Lateral */
    .preview-panel {
      background: #18181b;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 20px;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .preview-header {
      display: flex;
      gap: 14px;
      align-items: center;
    }

    .preview-avatar {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      object-fit: cover;
      border: 2px solid var(--brass);
    }

    .vital-bars-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .vital-bar-card {
      background: rgba(0,0,0,0.3);
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }

    .vital-bar-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .bar-outer {
      width: 100%;
      height: 10px;
      background: #27272a;
      border-radius: 999px;
      overflow: hidden;
    }

    .bar-inner {
      height: 100%;
      transition: width 0.3s;
    }

    .bar-pv { background: linear-gradient(90deg, #ef4444, #f87171); }
    .bar-ex { background: linear-gradient(90deg, #3b82f6, #60a5fa); }

    .derived-stats-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
    }

    .stat-badge {
      background: rgba(255,255,255,0.02);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 8px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-badge b {
      font-size: 0.65rem;
      color: var(--ink-dim);
      text-transform: uppercase;
    }

    .stat-badge strong {
      font-size: 1.15rem;
      color: var(--ink);
    }

    .stat-badge strong.accent { color: var(--accent-color); }
    .stat-badge strong.brass { color: var(--brass); }

    .preview-skills-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 8px;
      max-height: 220px;
      overflow-y: auto;
      font-size: 0.75rem;
    }

    .preview-skill-row {
      display: flex;
      justify-content: space-between;
      padding: 3px 6px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.015);
    }

    .preview-skill-row.trained {
      color: #34d399;
      font-weight: 600;
    }

    .preview-skill-row.specialized {
      color: #c084fc;
      font-weight: 700;
    }

    /* Modal Backdrop */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-backdrop.open {
      display: flex;
    }

    /* TOAST DE DADOS */
    .dice-toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #18181b;
      border: 1px solid var(--brass);
      padding: 14px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.7);
      color: var(--ink);
      font-size: 0.88rem;
      z-index: 100;
      display: none;
      align-items: center;
      gap: 12px;
    }
  </style>
</head>
<body>

  <!-- TOAST DE DADOS -->
  <div id="diceToast" class="dice-toast">
    <span style="font-size:1.4rem;">🎲</span>
    <div id="diceToastContent">Resultado</div>
  </div>

  <!-- TOP BAR -->
  <header class="topbar">
    <div class="topbar-brand">
      <div class="brand-symbol">F&A</div>
      <div>
        <h1 style="font-size:1.25rem;">👤 Ficha de Personagem</h1>
        <span class="topbar-subtitle" style="font-size:0.75rem; color:var(--ink-dim);">Construção, Habilidades Ativáveis, VA Fixo e Sincronia com a Mesa Virtual</span>
      </div>
    </div>
    <div class="tools" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <button type="button" id="btn-open-room-modal" style="background:rgba(245,158,11,0.15); border:1px solid var(--brass); color:var(--brass-light); font-weight:700;">
        🎲 Mesa Virtual: <span id="topbar-room-label">Entrar em Sala</span>
      </button>
      <a href="../../mestre/index.html" target="_blank"><button style="border-color:var(--border-color);">🎲 Criar Sala (Mestre)</button></a>
      <a href="../index.html"><button class="primary">🔮 Minijogo</button></a>
      <a href="../../home/ferro_arcano.html"><button>🏠 Hub</button></a>
      <a href="../../home/wiki.html" target="_blank"><button>📖 Wiki</button></a>
    </div>
  </header>

  <!-- BANNER DE FICHA TRAVADA NA MESA -->
  <div id="sheet-locked-banner" style="display:none; max-width:1320px; margin:0 auto 16px; padding:12px 18px; border-radius:10px; background:rgba(245,158,11,0.12); border:1px solid var(--brass); align-items:center; justify-content:space-between; gap:12px;">
    <div style="display:flex; align-items:center; gap:10px;">
      <span style="font-size:1.5rem;">🔒</span>
      <div>
        <strong style="color:var(--brass-light); font-size:0.9rem;">FICHA VINCULADA À MESA [<span id="banner-room-code">FA-7842</span>] · Modo de Combate Ativo</strong>
        <p style="font-size:0.75rem; color:var(--ink-dim); margin-top:2px;">A edição de atributos, classe e nível está travada pelo Mestre. Você pode alternar habilidades ativas durante o seu turno, equipar itens e rolar dano das armas livremente.</p>
      </div>
    </div>
    <button type="button" onclick="desconectarMesa()" class="quiet" style="padding:4px 10px; font-size:0.75rem; border:1px solid rgba(239,68,68,0.4); color:#fca5a5;">Desconectar da Sala</button>
  </div>

  <main class="ficha-container">
    
    <!-- ================= COLUNA 1: CONSTRUTOR DA FICHA ================= -->
    <div style="display:flex; flex-direction:column; gap:16px;">

      <!-- Identidade & Nível -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>🪪 Identidade & Experiência</h2>
          <span id="attr-budget-label" style="font-size:0.8rem; color:var(--brass); font-weight:700;">10 Pontos Disponíveis</span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="char-name">Nome do Personagem</label>
            <input type="text" id="char-name" value="Nasser" placeholder="Ex: Kael Voss">
          </div>
          <div class="form-group">
            <label for="char-level">Nível do Personagem (1 ao 14)</label>
            <select id="char-level"></select>
          </div>
        </div>

        <div class="form-group">
          <label for="char-concept">Conceito e Histórico</label>
          <textarea id="char-concept" rows="2" placeholder="Ex: Engenheiro renegado em busca de vingança."></textarea>
        </div>

        <!-- Afiliação Corporativa & Inteligência -->
        <div class="form-group">
          <label for="char-corp">Afiliação Corporativa & Setor de Inteligência</label>
          <select id="char-corp"></select>
          <div id="char-corp-desc" style="font-size:0.75rem; color:var(--ink-dim); padding:8px 12px; background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.25); border-radius:8px; margin-top:4px; line-height:1.4;">
            <strong id="char-corp-title" style="color:var(--brass);">BRAVIA (Brasil) · BRASA</strong><br>
            <span id="char-corp-detail">Setor de Inteligência e Contenção</span>
          </div>
        </div>

        <!-- Foto / Avatar -->
        <div class="form-group">
          <label>Foto do Personagem</label>
          <div style="display:flex; gap:8px;">
            <input type="text" id="char-avatar-url" placeholder="URL da foto..." style="flex-grow:1;">
            <input type="file" id="char-avatar-file" accept="image/*" style="display:none;">
            <button type="button" onclick="document.getElementById('char-avatar-file').click()">📂 Upload</button>
          </div>
          <div class="avatar-presets" id="avatar-presets" style="display:flex; gap:8px; margin-top:6px; overflow-x:auto;"></div>
        </div>
      </section>

      <!-- Classe e Origem -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>⚙️ Especialização de Função</h2>
          <span id="class-resource-tag" style="font-size:0.75rem; color:var(--ink-dim);">Recurso</span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="char-class">Classe</label>
            <select id="char-class">
              <option value="atirador">Atirador (FOC / REF)</option>
              <option value="canalizador">Canalizador (CONH / CON)</option>
              <option value="hibrido">Híbrido (CONH / FOC)</option>
              <option value="vanguardista">Vanguardista (CON / FOR)</option>
              <option value="ciborgue">Ciborgue (CON / FOC)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="char-origin">Origem</label>
            <select id="char-origin"></select>
          </div>
        </div>

        <!-- Escolha opcional da perícia da origem -->
        <div class="form-group" id="origin-choice-group" style="display:none;">
          <label for="char-origin-skill-choice" id="origin-choice-label">Opção de Perícia da Origem</label>
          <select id="char-origin-skill-choice"></select>
        </div>

        <div style="font-size:0.75rem; color:var(--ink-dim); padding:6px 10px; background:rgba(255,255,255,0.02); border-radius:6px;" id="origin-benefit-text">
          Benefício da Origem
        </div>
      </section>

      <!-- Atributos Fundamentais -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>📊 Atributos Fundamentais</h2>
          <span style="font-size:0.75rem; color:var(--ink-dim);">Custos: 0 (0), 1 (1), 2 (2), 3 (4), 4 (7)</span>
        </div>

        <div class="attr-grid">
          <div class="attr-control">
            <b>CON</b>
            <small>Constituição</small>
            <strong id="v-attr-CON">0</strong>
            <div class="attr-btns">
              <button onclick="changeAttr('CON', -1)">−</button>
              <button onclick="changeAttr('CON', 1)">+</button>
            </div>
          </div>
          <div class="attr-control">
            <b>CONH</b>
            <small>Conhecimento</small>
            <strong id="v-attr-CONH">0</strong>
            <div class="attr-btns">
              <button onclick="changeAttr('CONH', -1)">−</button>
              <button onclick="changeAttr('CONH', 1)">+</button>
            </div>
          </div>
          <div class="attr-control">
            <b>FOC</b>
            <small>Foco</small>
            <strong id="v-attr-FOC">0</strong>
            <div class="attr-btns">
              <button onclick="changeAttr('FOC', -1)">−</button>
              <button onclick="changeAttr('FOC', 1)">+</button>
            </div>
          </div>
          <div class="attr-control">
            <b>FOR</b>
            <small>Força</small>
            <strong id="v-attr-FOR">0</strong>
            <div class="attr-btns">
              <button onclick="changeAttr('FOR', -1)">−</button>
              <button onclick="changeAttr('FOR', 1)">+</button>
            </div>
          </div>
          <div class="attr-control">
            <b>REF</b>
            <small>Reflexo</small>
            <strong id="v-attr-REF">0</strong>
            <div class="attr-btns">
              <button onclick="changeAttr('REF', -1)">−</button>
              <button onclick="changeAttr('REF', 1)">+</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Perícias Treinadas -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>🎯 Perícias Treinadas</h2>
          <span id="skills-title-label" style="font-size:0.75rem; color:var(--brass); font-weight:700;">0/3 Selecionadas</span>
        </div>
        <p style="font-size:0.72rem; color:var(--ink-dim); margin-top:-6px;">
          A perícia obrigatória da classe é garantida. Se a sua Origem conceder uma perícia já treinada, você ganha <strong>Especialização (+4)</strong>.
        </p>
        <div class="skills-grid" id="skills-selector"></div>
      </section>

      <!-- Habilidades Desbloqueadas & Trilha (Nível 10+) -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>📜 Habilidades &amp; Efeitos Ativáveis</h2>
          <span id="trail-lock-status" style="font-size:0.75rem; color:var(--brass);">Nível 1</span>
        </div>
        <p style="font-size:0.74rem; color:var(--ink-dim); margin-top:-6px;">
          🛡️ <strong>Passivas</strong> ficam permanentemente ativas. ⚡ <strong>Habilidades Ativas</strong> podem ser ligadas ou desligadas a qualquer momento clicando no botão para aplicar ou encerrar bônus instantâneos.
        </p>

        <div class="tab-nav" style="display:flex; gap:8px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
          <button type="button" class="tab-btn active" id="tab-class-powers-btn" onclick="switchAbilitiesTab('class')">Habilidades de Classe</button>
          <button type="button" class="tab-btn" id="tab-trail-powers-btn" onclick="switchAbilitiesTab('trail')">Trilha (Nível 10+)</button>
        </div>

        <!-- Painel Habilidades de Classe -->
        <div id="tab-class-powers">
          <div id="unlocked-class-powers-list"></div>
        </div>

        <!-- Painel de Trilha -->
        <div id="tab-trail-powers" style="display:none;">
          <div id="trail-locked-view" style="text-align:center; padding:20px; color:var(--ink-dim);">
            <span style="font-size:2rem; display:block; margin-bottom:8px;">🔒</span>
            <strong>Trilha de Especialização Bloqueada</strong>
            <p style="font-size:0.75rem; margin-top:4px;">A escolha permanente da sua Trilha é liberada a partir do <strong>Nível 10</strong>.</p>
          </div>

          <div id="trail-unlocked-view" style="display:none; flex-direction:column; gap:12px;">
            <div class="form-group">
              <label for="char-trail">Escolha sua Trilha Permanente</label>
              <select id="char-trail"></select>
            </div>
            <div id="unlocked-trail-powers-list"></div>
          </div>
        </div>
      </section>

      <!-- Colapso Arcano -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>⚡ Fardo de Colapso Arcano</h2>
          <span style="font-size:0.75rem; color:var(--danger);">Tabela de Sequelas</span>
        </div>

        <div class="form-row">
          <div class="form-group" style="grid-column: span 2;">
            <label>Selecione ou Role 1d20</label>
            <div style="display:flex; gap:8px;">
              <select id="char-colapso" style="flex-grow:1;"></select>
              <button type="button" id="btn-roll-colapso" class="primary" style="padding:8px 14px; white-space:nowrap;">🎲 Rolar 1d20</button>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:16px; align-items:center;">
          <label style="font-size:0.75rem; font-weight:700; color:var(--ink-dim); text-transform:uppercase;">Severidade:</label>
          <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer; font-size:0.8rem; color:var(--ink);">
            <input type="radio" name="colapso-severity" value="simples" checked> Sequela Simples (1–4)
          </label>
          <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer; font-size:0.8rem; color:var(--danger);">
            <input type="radio" name="colapso-severity" value="critica"> Sequela Crítica (5–9)
          </label>
        </div>

        <div id="colapso-effect-box" style="padding:10px 12px; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:8px; font-size:0.78rem;">
          <strong id="colapso-effect-title" style="color:var(--danger);">Estado Normal</strong>
          <p id="colapso-effect-desc" style="color:var(--ink-dim); margin-top:2px;">Nenhum colapso ativo.</p>
        </div>
      </section>

      <!-- Armamentos & Equipamentos -->
      <section class="panel-card">
        <div class="panel-header">
          <h2>⚔️ Armamentos &amp; Ataques (VA Fixo)</h2>
          <button type="button" id="btn-add-weapon" class="primary" style="padding:5px 12px; font-size:0.75rem;">➕ Adicionar Arma</button>
        </div>

        <div style="background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:8px; padding:10px 12px; font-size:0.76rem; color:var(--ink-dim); line-height:1.4;">
          <strong style="color:var(--brass);">💡 Regra de Combate:</strong> O <strong>VA (Valor de Ataque)</strong> é um número fixo que substitui o teste d20 de acerto. Clique no botão <strong>💥 Dano</strong> para rolar os dados de dano direto contra os PV do alvo, ou em <strong>⚡ Crítico</strong> para dobrar os dados!
        </div>

        <div style="overflow-x:auto;">
          <table class="weapons-table">
            <thead>
              <tr>
                <th>Arma</th>
                <th style="width:70px;">Tipo</th>
                <th style="width:75px; text-align:center;">VA Fixo</th>
                <th style="width:75px; text-align:center;">Dano</th>
                <th style="width:60px; text-align:center;">Crítico</th>
                <th style="width:65px; text-align:center;">Alcance</th>
                <th style="width:140px; text-align:center;">Rolagem de Dano</th>
              </tr>
            </thead>
            <tbody id="weapons-list-rows"></tbody>
          </table>
        </div>

        <!-- Proteção & Carga -->
        <div class="panel-header" style="margin-top:12px;">
          <h2>🛡️ Proteção &amp; Acessórios</h2>
          <span id="carga-label" style="font-size:0.75rem; color:var(--brass);">5 Slots Máx</span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="char-armor">Equipamento de Proteção</label>
            <select id="char-armor">
              <option value="0,0">Roupa Tática (Def +0 · RD 0)</option>
              <option value="1,2">Colete Leve (Def +1 · RD 2)</option>
              <option value="2,4">Colete Médio (Def +2 · RD 4)</option>
              <option value="4,6">Colete Pesado (Def +4 · RD 6)</option>
              <option value="6,8">Armadura Rígida (Def +6 · RD 8)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="char-shield">Escudo</label>
            <select id="char-shield">
              <option value="0">Sem Escudo</option>
              <option value="1">Escudo Leve (+1 Defesa)</option>
              <option value="2">Escudo Pesado (+2 Defesa)</option>
            </select>
          </div>
        </div>

        <!-- Catálogo de Acessórios & Itens Mágicos Equipáveis -->
        <div class="form-group">
          <label style="display:flex; justify-content:space-between; align-items:center;">
            <span>Acessórios Mágicos &amp; Arcanotécnicos Equipados</span>
            <small id="equipped-items-count" style="color:var(--brass); font-weight:700;">0 equipados</small>
          </label>
          <div id="magic-items-selector" style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:4px;">
            <!-- Renderizado dinamicamente via JS -->
          </div>
        </div>

        <div class="form-group">
          <label>Anotações de Inventário &amp; Outros Itens</label>
          <textarea id="char-items" rows="2" placeholder="Ex.: Munição rúnica extra, 2x Kits Médicos, corda..."></textarea>
        </div>
      </section>

    </div>

    <!-- ================= COLUNA 2: PREVIEW DA FICHA DO AGENTE ================= -->
    <div style="position:sticky; top:16px;">
      <div class="preview-panel">
        
        <!-- Preview Header -->
        <div class="preview-header">
          <img id="preview-avatar-img" src="../img/5f1ca16aa9667c131fdfdb0ae88b7bbd.jpg" class="preview-avatar">
          <div class="preview-name-box" style="flex-grow:1;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
              <h3 id="p-char-name">Nasser</h3>
              <span id="p-char-corp-badge" class="badge" style="font-size:0.68rem; padding:3px 8px; border-radius:6px; font-weight:700; background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); color:#fcd34d; white-space:nowrap;">🇧🇷 BRAVIA · BRASA</span>
            </div>
            <p><span id="p-char-class">Atirador</span> Nível <span id="p-char-level">1</span> · <span id="p-char-origin">Soldado</span></p>
            <p id="p-char-corp-motto" style="font-size:0.68rem; color:var(--brass); font-style:italic; margin-top:2px;">"Enquanto houver cobra fumando, haverá BRASA."</p>
            <p id="p-char-trail-line" style="font-size:0.75rem; color:#fcd34d; font-weight:600; display:none;">Trilha: <span id="p-char-trail-name">—</span></p>
            <p id="p-char-concept" style="font-size:0.72rem; color:var(--ink-dim); font-style:italic; margin-top:2px;">"Conceito do personagem"</p>
          </div>
        </div>

        <!-- Barras Vitais -->
        <div class="vital-bars-container">
          <div class="vital-bar-card">
            <div class="vital-bar-header">
              <span style="color:#ef4444;">PONTOS DE VIDA</span>
              <span id="p-vital-pv" style="color:#fff;">30 / 30</span>
            </div>
            <div class="bar-outer">
              <div id="p-bar-pv-fill" class="bar-inner bar-pv" style="width:100%;"></div>
            </div>
          </div>
          <div class="vital-bar-card">
            <div class="vital-bar-header">
              <span style="color:#60a5fa;">EXAUSTÃO ARCANA</span>
              <span id="p-vital-ex" style="color:#fff;">45 / 45</span>
            </div>
            <div class="bar-outer">
              <div id="p-bar-ex-fill" class="bar-inner bar-ex" style="width:100%;"></div>
            </div>
          </div>
        </div>

        <!-- Badges Derivados Expandidos com RD e RD Mágica -->
        <div class="derived-stats-grid">
          <div class="stat-badge">
            <b>Defesa</b>
            <strong id="p-stat-defense" class="accent">10</strong>
          </div>
          <div class="stat-badge">
            <b>RD Fís.</b>
            <strong id="p-stat-rd" style="color:#f87171;">0</strong>
          </div>
          <div class="stat-badge">
            <b>RD Mág.</b>
            <strong id="p-stat-rd-mag" style="color:#c084fc;">0</strong>
          </div>
          <div class="stat-badge">
            <b>Esquiva</b>
            <strong id="p-stat-dodge" style="color:#60a5fa;">d20+0</strong>
          </div>
          <div class="stat-badge">
            <b id="p-resource-name">Recurso</b>
            <strong id="p-resource-val" style="color:#4ade80;">3</strong>
          </div>
        </div>

        <!-- Habilidades & Posturas Ativas no Momento -->
        <div id="p-active-powers-card" style="padding:12px; background:rgba(59,130,246,0.06); border:1px solid rgba(59,130,246,0.3); border-radius:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:#93c5fd; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">
              <span>⚡ Habilidades Ativas</span>
            </strong>
            <span id="p-active-buffs-summary" style="font-size:0.72rem; color:var(--brass-light); font-weight:700;">Nenhum bônus ativo</span>
          </div>
          <div id="p-active-powers-chips" style="display:flex; flex-wrap:wrap; gap:6px;">
            <span style="font-size:0.72rem; color:var(--ink-dim);">Clique em [ATIVAR] em uma habilidade para aplicar seus efeitos.</span>
          </div>
        </div>

        <!-- Conexão com o Minigame -->
        <div class="minigame-impact-badge" style="padding:10px 14px; background:rgba(168,85,247,0.06); border:1px solid rgba(168,85,247,0.3); border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <b style="color:var(--brass); display:block; font-size:0.82rem;">🔮 Impacto no Minijogo</b>
            <span id="p-minigame-time" style="color:var(--ink-dim); font-size:0.75rem;">+0.0s de tempo inicial</span>
          </div>
          <a href="../index.html"><button class="primary" style="padding:4px 10px; font-size:0.75rem;">Jogar Agora ↗</button></a>
        </div>

        <!-- Sequelas de Colapso Card -->
        <div id="p-collapse-card" style="padding:10px; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:8px; display:none;">
          <h4 id="p-collapse-title" style="color:var(--danger); font-size:0.8rem; margin-bottom:2px;">⚠️ Colapso Ativo</h4>
          <p id="p-collapse-desc" style="color:var(--ink-dim); font-size:0.72rem; line-height:1.4;">Descrição do efeito.</p>
        </div>

        <!-- Perícias Resolvidas Preview -->
        <div class="preview-skills-section">
          <h4 style="font-size:0.75rem; color:var(--brass); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.05em;">Perícias Resolvidas</h4>
          <div class="preview-skills-list" id="p-skills-list"></div>
        </div>

      </div>

      <!-- Recuperação & Descansos -->
      <div class="panel-card" style="margin-top:16px; border-color: rgba(74,222,128,0.25);">
        <div class="panel-header" style="border-bottom-color: rgba(74,222,128,0.15);">
          <h2 style="color:var(--success); font-size:1rem;">🔋 Descansos e Cura</h2>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
          <button type="button" onclick="actionDescansoCurto()" style="border-color: rgba(74,222,128,0.3); background: rgba(74,222,128,0.05); color:var(--success); padding:8px 6px;">
            🩹 Descanso Curto (30m)<br><span style="font-size:0.68rem; color:var(--ink-dim);">+20 EX · Cura 1d10 + CON</span>
          </button>
          <button type="button" onclick="actionDescansoCompleto()" style="border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.05); color:#60a5fa; padding:8px 6px;">
            🏕️ Descanso Completo (8h)<br><span style="font-size:0.68rem; color:var(--ink-dim);">Restaura Tudo · -1 Colapso</span>
          </button>
        </div>
      </div>

      <!-- Ações Finais -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px;">
        <button type="button" onclick="limparFicha()" style="color:var(--danger); border-color: rgba(248,113,113,0.2);" id="btn-reset-sheet">♻️ Resetar</button>
        <button type="button" onclick="exportarFichaImpressao()" style="border-color: var(--border-color);">📄 Imprimir / PDF</button>
        <button type="button" onclick="salvarFicha(true)" class="primary" style="padding:10px 20px;">💾 Salvar Ficha</button>
      </div>

    </div>

  </main>

  <!-- MODAL DE ENTRADA NA MESA DO MESTRE -->
  <div class="modal-backdrop" id="room-modal">
    <div style="background:#18181b; border:1px solid var(--brass); border-radius:14px; width:90%; max-width:420px; padding:22px; box-shadow:0 20px 50px rgba(0,0,0,0.8);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="color:var(--brass); font-size:1.1rem; display:flex; align-items:center; gap:8px;">
          <span>🎲 Entrar na Mesa Virtual</span>
        </h3>
        <button type="button" onclick="closeRoomModal()" style="background:transparent; border:none; color:var(--ink-dim); cursor:pointer; font-size:1.2rem;">✕</button>
      </div>
      <p style="font-size:0.78rem; color:var(--ink-dim); margin-bottom:14px; line-height:1.4;">
        Digite o código de 6 caracteres gerado pela tela do Mestre (ex: <strong>FA-7842</strong>). Ao entrar, sua vida, exaustão, armas e habilidades ativas serão sincronizadas em tempo real.
      </p>
      <div style="margin-bottom:16px;">
        <label style="display:block; font-size:0.75rem; color:var(--ink-dim); margin-bottom:6px;">Código da Sala:</label>
        <input type="text" id="input-room-code" placeholder="FA-7842" style="width:100%; font-size:1.15rem; font-weight:800; font-family:monospace; text-align:center; text-transform:uppercase; letter-spacing:0.1em; padding:10px; background:#27272a; border:1px solid #3f3f46; border-radius:8px; color:#fff;">
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" onclick="closeRoomModal()" style="padding:8px 14px; background:transparent; border:1px solid var(--border-color); color:var(--ink-dim); border-radius:6px; cursor:pointer;">Cancelar</button>
        <button type="button" onclick="conectarMesa()" class="primary" style="padding:8px 18px;">Conectar à Mesa</button>
      </div>
    </div>
  </div>

  <script>
    // ================= DADOS E REGRAS OFICIAIS =================
    const CLASSES = {
      atirador: {
        name: "Atirador", primary: "FOC, REF", basePv: 28, pvGrowth: 4, conMultiplier: 6,
        mandatorySkill: "Armas de Fogo",
        resourceName: "Pontos de Precisão", resourceAttr: "FOC", resourceBase: 3,
        powers: [
          { id: "at_olho_clinico", name: "Olho Clínico", type: "passiva", cost: "Passiva Permanente", buffs: { va: 2 }, desc: "Soma FOC nos testes de acerto à distância. +2 VA contra alvos a 9m ou mais. Limite de Precisão é 3 + FOC." },
          { id: "at_mira_estavel", name: "Mira Estável", type: "ativa", cost: "1 PA", buffs: { va: 2 }, desc: "+2 VA contra alvos desprovidos de cobertura total ou em cobertura leve a até 9m." },
          { id: "at_disparo_rapido", name: "Disparo Rápido", type: "ativa", cost: "2 PA + 1 Precisão", buffs: {}, desc: "Segundo disparo imediato gratuito e sem penalidade de acerto." },
          { id: "at_ajuste_balistica", name: "Ajuste de Balística", type: "passiva", cost: "Passiva Permanente", buffs: { rangeBonus: 3 }, desc: "O alcance efetivo de todas as armas de fogo equipadas aumenta em +3m." },
          { id: "at_cadencia_operacional", name: "Cadência Operacional", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "1x por rodada, recarregar arma leve ou descartável custa 0 PA." },
          { id: "at_respiro_tatico", name: "Respiro Tático", type: "ativa", cost: "1 PA", buffs: {}, desc: "Move-se até 3m sem provocar reações ou Ataques de Oportunidade." },
          { id: "at_disparo_penetracao", name: "Disparo de Penetração", type: "ativa", cost: "2 PA + 1 Precisão", buffs: { ignoreRd: 4 }, desc: "Próximo disparo ignora até 4 pontos de RD Física." },
          { id: "at_fogo_supressao", name: "Fogo de Supressão", type: "ativa", cost: "3 PA + 2 Precisão", buffs: {}, desc: "Cone de 9m: REF CD 15 ou sofre -2 VA e tem movimento reduzido pela metade." },
          { id: "at_postura_cacador", name: "Postura do Caçador", type: "ativa", cost: "1 PA", buffs: { va: 1 }, desc: "Imune a Caído e +1 VA ao empunhar rifles/armas longas apoiadas ou com bipé." },
          { id: "at_mestria_balistica", name: "Mestria Balística", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Desbloqueia a Trilha de Especialização permanente no Nível 10." }
        ]
      },
      canalizador: {
        name: "Canalizador", primary: "CONH, CON", basePv: 24, pvGrowth: 3, conMultiplier: 5,
        mandatorySkill: "Sintonia Arcana",
        resourceName: "Pontos de Sintonia", resourceAttr: "CONH", resourceBase: 3,
        powers: [
          { id: "can_ajuste_fino", name: "Ajuste Fino + Fluxo Contínuo", type: "passiva", cost: "Passiva Permanente", buffs: { minigameErrorIgnore: 1 }, desc: "1 PA + 1 Sintonia ignora 1 erro no minijogo ou anula Flinch. Aceleração de anéis cai para +10%." },
          { id: "can_mente_expandida", name: "Mente Expandida", type: "passiva", cost: "Passiva Permanente", buffs: { minigameExtraTime: 1.5 }, desc: "Adiciona +1,5s ao tempo inicial do minijogo. Descanso Curto recupera +15 Exaustão extra." },
          { id: "can_emanacao_runica", name: "Emanação Rúnica", type: "ativa", cost: "2 PA + 1 Sintonia + 10 Ex", buffs: {}, desc: "Causa 2d6 força e empurra adjacentes 3m para trás." },
          { id: "can_barreira_eter", name: "Barreira de Éter", type: "ativa", cost: "1 PA + 1 Sintonia", buffs: { defense: 3, rdMagica: 2 }, desc: "Converte até 20 de Exaustão em escudo temporário: +3 Defesa e +2 RD Mágica por 1 rodada." },
          { id: "can_sintonia_runica", name: "Sintonia Rúnica", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Magias de 1º e 2º Círculo exigem menos 1 runa no minijogo (mínimo 1)." },
          { id: "can_recalibracao_mental", name: "Recalibração Mental", type: "ativa", cost: "1 PA + 1 Sintonia", buffs: {}, desc: "Recupera 10 pontos de Exaustão acumulada sem descansar." },
          { id: "can_foco_concentracao", name: "Foco de Concentração Extrema", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "+4 em Fortitude para manter conjuração ativa sob dano hostil." },
          { id: "can_modulacao_amplitude", name: "Modulação de Amplitude", type: "ativa", cost: "2 PA + 2 Sintonia", buffs: { spellDamageBonus: 1 }, desc: "Eleva dado de dano da conjuração em 1 patamar (ex.: d6 para d8)." },
          { id: "can_mente_inviolavel", name: "Mente Inviolável", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Imunidade total a Assustado, medo, dominação, encanto e sono induzido por feitiçaria." },
          { id: "can_dominio_ruptura", name: "Domínio da Ruptura Arcana", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Desbloqueia a Trilha de Especialização permanente no Nível 10." }
        ]
      },
      hibrido: {
        name: "Híbrido", primary: "CONH, FOC", basePv: 30, pvGrowth: 4, conMultiplier: 7,
        mandatorySkill: "Armas de Fogo",
        resourceName: "Cargas do Núcleo", resourceAttr: null, resourceBase: 3,
        powers: [
          { id: "hib_municao_encantada", name: "Munição Encantada + Sintonia", type: "ativa", cost: "1 PA + 1 Carga", buffs: { damageBonus: "+1d6 arcano" }, desc: "Canaliza feitiço no disparo e adiciona +1d6 dano arcano. Ataque + magia dá +1 PA no próximo turno." },
          { id: "hib_adaptabilidade", name: "Adaptabilidade de Sistemas", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Pode usar Conhecimento (CONH) no lugar de Força para manejar armas pesadas e modificadores." },
          { id: "hib_golpe_arcano", name: "Golpe Arcano-Infuso", type: "ativa", cost: "2 PA + 1 Carga", buffs: {}, desc: "Ataque corpo a corpo adiciona +1d8 de dano arcano/elétrico." },
          { id: "hib_sobrecarga_nucleo", name: "Sobrecarga do Núcleo", type: "ativa", cost: "1 PA + 1 Carga", buffs: { va: 2 }, desc: "+2 VA e aumenta margem de crítico em +2 por 2 rodadas." },
          { id: "hib_malha_runica", name: "Malha de Tecido Rúnico", type: "passiva", cost: "Passiva Permanente", buffs: { rd: 2, rdMagica: 2 }, desc: "+2 RD física e mágica contra fogo, raio e essência arcana permanente." },
          { id: "hib_recarga_sincronizada", name: "Recarga Sincronizada", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "1 PA: recarrega pente e canaliza elemento nos projéteis na mesma ação mínima." },
          { id: "hib_campo_estatico", name: "Emissão de Campo Estático", type: "ativa", cost: "2 PA + 1 Carga", buffs: {}, desc: "Pulso de 4m; inimigos perdem 1 PA no próximo turno e sofrem 2d6 elétrico." },
          { id: "hib_reciclagem_energia", name: "Reciclagem de Energia", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "1x/rodada ao sofrer dano elétrico ou arcano, absorve e recupera 5 Exaustão." },
          { id: "hib_eter_medicinal", name: "Injeção de Éter Medicinal", type: "ativa", cost: "1 PA + 1 Carga", buffs: {}, desc: "Restaura 2d10 + CON Pontos de Vida em si ou aliado adjacente." },
          { id: "hib_sintese_absoluta", name: "Síntese Absoluta do Ferro & Arcano", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Desbloqueia a Trilha de Especialização permanente no Nível 10." }
        ]
      },
      vanguardista: {
        name: "Vanguardista", primary: "CON, FOR", basePv: 36, pvGrowth: 5, conMultiplier: 9,
        mandatorySkill: "Briga/Corpo a Corpo",
        resourceName: "Inflexibilidade", resourceAttr: "CON", resourceBase: 5,
        powers: [
          { id: "van_blindagem_bio", name: "Inflexibilidade + Blindagem", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ganha pontos de Inflexibilidade ao receber dano (limite 5+CON). +2 em Fortitude." },
          { id: "van_postura_imovel", name: "Postura Imóvel", type: "ativa", cost: "1 PA", buffs: { defense: 2 }, desc: "+2 Defesa. Imunidade total a empurrões, derrubar ou deslocamento forçado." },
          { id: "van_provocacao_tatica", name: "Provocação Tática", type: "ativa", cost: "1 PA", buffs: {}, desc: "Inimigos a até 4m focam ataques no Vanguardista na próxima rodada." },
          { id: "van_pele_de_ferro", name: "Pele de Ferro Aprimorada", type: "passiva", cost: "Passiva Permanente", buffs: { defense: 2, rd: 2 }, desc: "+2 Defesa contra disparos e RD +2 física permanente." },
          { id: "van_retaliacao_impacto", name: "Retaliação de Impacto", type: "ativa", cost: "1 Inflexibilidade", buffs: {}, desc: "Ao bloquear ou absorver ataque, devolve 1d8 dano físico ao agressor." },
          { id: "van_interceptacao", name: "Interceptação Balística", type: "ativa", cost: "Reação + 1 Inflexibilidade", buffs: {}, desc: "Protege aliado adjacente e reduz o dano em 5." },
          { id: "van_escudo_absorcao", name: "Escudo de Absorção Absoluta", type: "ativa", cost: "2 PA + 2 Inflexibilidade", buffs: {}, desc: "Anula completamente o dano do próximo ataque sofrido." },
          { id: "van_ancoragem_territorial", name: "Ancoragem Territorial", type: "ativa", cost: "1 PA + 2 Inflexibilidade", buffs: { rd: 4 }, desc: "+4 RD física enquanto não se mover voluntariamente no turno." },
          { id: "van_vigor_inextinguivel", name: "Vigor Inextinguível", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ao chegar a 0 PV, permanece consciente e agindo normalmente por mais 1 rodada." },
          { id: "van_baluarte_supremo", name: "Baluarte Supremo do Ferro", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Desbloqueia a Trilha de Especialização permanente no Nível 10." }
        ]
      },
      ciborgue: {
        name: "Ciborgue", primary: "CON, FOC", basePv: 32, pvGrowth: 4, conMultiplier: 8,
        mandatorySkill: "Tecnologia & Sistemas",
        resourceName: "Pontos de Protocolo (PP)", resourceAttr: "FOC", resourceBase: 3,
        powers: [
          { id: "cib_visao_sistema", name: "Visão de Sistema", type: "ativa", cost: "1 PP", buffs: { va: 1 }, desc: "+1 VA, +2 Percepção/Prontidão e visão térmica por 3 rodadas." },
          { id: "cib_corpo_aumentado", name: "Corpo Aumentado", type: "ativa", cost: "1 PP", buffs: { defense: 1, rd: 1 }, desc: "+1 Defesa, +1 RD física e +3m deslocamento por 3 rodadas." },
          { id: "cib_ponto_fraco", name: "Ponto Fraco", type: "ativa", cost: "1 PP", buffs: {}, desc: "+1d6 dano contra alvo Marcado. Sobrecarga: +2d6 dano e ignora RD física." },
          { id: "cib_interface_combate", name: "Interface de Combate", type: "ativa", cost: "1 PP", buffs: { esquiva: 2 }, desc: "+2 Esquiva, +1 Iniciativa e +1,5m movimento." },
          { id: "cib_protocolo_antimaterial", name: "Protocolo Antimaterial", type: "ativa", cost: "1 PP", buffs: {}, desc: "+1d6 dano contra máquinas e barreiras." },
          { id: "cib_reparacao_campo", name: "Reparação de Campo", type: "ativa", cost: "1 PP", buffs: {}, desc: "Restaura 1d10 + CON PV. Sobrecarga: restaura o dobro e remove 1 condição." },
          { id: "cib_cacador_maquinas", name: "Caçador de Máquinas", type: "ativa", cost: "1 PP", buffs: {}, desc: "+2 Tecnologia contra máquinas; ataque gratuito ao hackear." },
          { id: "cib_sobrecarga_protocolo", name: "Sobrecarga de Protocolo", type: "ativa", cost: "1 PP", buffs: {}, desc: "Concede +1 PA no turno ao custo de 1d6 dano térmico." },
          { id: "cib_arsenal_integrado", name: "Arsenal Integrado", type: "ativa", cost: "1 PP", buffs: { va: 1 }, desc: "+1 VA, reduz Recuo a 0 e ignora cobertura leve." },
          { id: "cib_arquitetura_combate", name: "Arquitetura de Combate", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Desbloqueia a Trilha de Especialização permanente no Nível 10." }
        ]
      }
    };

    const TRAILS = {
      atirador: [
        {
          id: "franco-atirador", name: "Franco-Atirador",
          abilities: [
            { id: "tr_tiro_elite", level: 10, name: "Tiro de Elite", type: "passiva", cost: "Passiva Permanente", buffs: { va: 2 }, desc: "Com armas longas: +2 VA contra alvos a 12m+. Estático no turno: +1 VA adicional. Crítico recupera 1 Precisão." },
            { id: "tr_balistica_extrema", level: 11, name: "Balística Extrema", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ignora penalidade de alcance e atinge até o dobro do alcance efetivo da arma." },
            { id: "tr_tiro_perfurante", level: 12, name: "Tiro Perfurante", type: "ativa", cost: "2 PA + 2 Precisão", buffs: {}, desc: "Ignora Cobertura Leve/Pesada e ignora até 6 RD Física." },
            { id: "tr_assinatura_fantasma", level: 13, name: "Assinatura Fantasma", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Disparo de cobertura ou furtividade não revela posição direta." },
            { id: "tr_abate_cadeia", level: 14, name: "Abate em Cadeia", type: "ativa", cost: "2 PA + 2 Precisão", buffs: {}, desc: "Eliminar alvo ou Crítico concede segundo disparo imediato gratuito." }
          ]
        },
        {
          id: "pistoleiro-tatico", name: "Pistoleiro Tático",
          abilities: [
            { id: "tr_saque_instintivo", level: 10, name: "Saque Instintivo", type: "ativa", cost: "0 PA", buffs: { va: 1 }, desc: "Sacar ou trocar armas leves custa 0 PA e concede +1 VA no próximo ataque." },
            { id: "tr_movimento_combate", level: 11, name: "Movimento de Combate", type: "ativa", cost: "1 PA", buffs: { esquiva: 2 }, desc: "Mover 3m com arma leve concede +2 Esquiva até o próximo turno." },
            { id: "tr_rajada_varredura", level: 12, name: "Rajada de Varredura", type: "ativa", cost: "2 PA + 1 Precisão", buffs: {}, desc: "Cone de 6m contra até 3 criaturas com os dados normais da arma." },
            { id: "tr_flanqueamento_letal", level: 13, name: "Flanqueamento Letal", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ataques de arma leve contra alvo engajado com aliado causam +1d8 adicional." },
            { id: "tr_descarregar_pente", level: 14, name: "Descarregar o Pente", type: "ativa", cost: "3 PA + 3 Precisão", buffs: {}, desc: "Esvazia munição restante em acertos automáticos consecutivos sem teste de VA." }
          ]
        },
        {
          id: "cacador-arcano", name: "Caçador Arcano",
          abilities: [
            { id: "tr_municao_antieter", level: 10, name: "Munição Anti-Éter", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Escolhe dano físico ou arcano a cada tiro." },
            { id: "tr_rastreio_etereo", level: 11, name: "Rastreio Etéreo", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Detecta energia mágica em até 15m; +4 em Percepção e Sintonia Arcana." },
            { id: "tr_projetil_rastreador", level: 12, name: "Projétil Rastreador", type: "ativa", cost: "2 PA + 1 Precisão", buffs: {}, desc: "Primeiro tiro ignora cobertura. Se acertar, segundo disparo é automático." },
            { id: "tr_selo_interrupcao", level: 13, name: "Selo de Interrupção", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Acertar conjurador preparando magia cancela a preparação." },
            { id: "tr_disparo_anulacao", level: 14, name: "Disparo de Anulação", type: "ativa", cost: "2 PA + 3 Precisão", buffs: {}, desc: "3d10 arcano e cancela magia sustentada; contra barreiras causa 6d10." }
          ]
        }
      ],
      canalizador: [
        {
          id: "arcanista-elemental", name: "Arcanista Elemental",
          abilities: [
            { id: "tr_infusao_elemental", level: 10, name: "Infusão Elemental", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Aplica efeito conforme elemento (Fogo Queimando, Gelo Lentificado, Raio -1 PA)." },
            { id: "tr_dominio_elemental", level: 11, name: "Domínio Elemental", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "+3m no raio de ação de magias de área." },
            { id: "tr_reacao_elemental", level: 12, name: "Reação Elemental", type: "ativa", cost: "2 PA + 1 Sintonia", buffs: {}, desc: "Efeito ampliado de elemento: Fogo +2d6, Terra Caído, Luz cura 2d6." },
            { id: "tr_ruptura_elemental", level: 13, name: "Ruptura Elemental", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Alvos perdem 3 RD do elemento correspondente por 2 rodadas." },
            { id: "tr_inscricao_dupla", level: 14, name: "Inscrição Dupla", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Escolhe 2 Runas Prioritárias; contam como acerto automático fora de sequência." }
          ]
        },
        {
          id: "manipulador-espacial", name: "Manipulador Espacial",
          abilities: [
            { id: "tr_passo_etereo", level: 10, name: "Passo Etéreo", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "+3m de deslocamento e ignora terreno difícil enquanto conjura." },
            { id: "tr_salto_espacial", level: 11, name: "Salto Espacial", type: "ativa", cost: "1 PA + 1 Sintonia", buffs: {}, desc: "Teleporta até 12m para ponto visível desocupado sem provocar OA." },
            { id: "tr_transposicao_tatica", level: 12, name: "Transposição Tática", type: "ativa", cost: "2 PA + 2 Sintonia", buffs: {}, desc: "Troca de posição com criatura a até 15m." },
            { id: "tr_distorcao_refrataria", level: 13, name: "Distorção Refratária", type: "ativa", cost: "Reação + 1 Sintonia", buffs: { defense: 3 }, desc: "Impõe –3 VA contra disparo hostil direto." },
            { id: "tr_fenda_gravitacional", level: 14, name: "Fenda Gravitacional", type: "ativa", cost: "3 PA + 3 Sintonia + 20 Ex", buffs: {}, desc: "Fenda de 8m causando 4d10 de força e puxando inimigos." }
          ]
        },
        {
          id: "taumaturgo-sobrecarga", name: "Taumaturgo de Sobrecarga",
          abilities: [
            { id: "tr_potencia_ruptura", level: 10, name: "Potência da Ruptura", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Enquanto Exaustão < 0, magias causam +2 dano por Círculo." },
            { id: "tr_conjuracao_risco", level: 11, name: "Conjuração de Risco", type: "ativa", cost: "1 Sintonia", buffs: {}, desc: "Lança magia sem Exaustão pagando toda a restante e recebendo +2 Colapso." },
            { id: "tr_tolerancia_extrema", level: 12, name: "Tolerância Extrema", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Limite de Sobrecarga seguro ampliado em +5 Exaustão." },
            { id: "tr_purga_violenta", level: 13, name: "Purga Violenta", type: "ativa", cost: "2 PA + 2 Sintonia", buffs: {}, desc: "Gasta até 30 Ex; a cada 5 gastos causa 1d10 em cone de 6m." },
            { id: "tr_alem_limite", level: 14, name: "Além do Limite", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ao atingir 10 Colapso evita a Detonação e recupera 50% de Exaustão." }
          ]
        }
      ],
      hibrido: [
        {
          id: "engenheiro-arcano", name: "Engenheiro Arcano",
          abilities: [
            { id: "tr_modulos_campo", level: 10, name: "Módulos de Campo", type: "passiva", cost: "Passiva Permanente", buffs: { va: 1 }, desc: "Acessórios e miras em armas do esquadrão recebem +1 em estatísticas." },
            { id: "tr_forja_expressa", level: 11, name: "Forja Expressa", type: "ativa", cost: "1 PA", buffs: {}, desc: "Conserta armadura destruída ou desengripa arma emperrada." },
            { id: "tr_deploy_drone", level: 12, name: "Deploy de Drone", type: "ativa", cost: "2 PA", buffs: {}, desc: "Drone fornece 15 PV temporários de escudo a aliado ou fogo de suporte 1d8/rodada." },
            { id: "tr_bateria_drone", level: 13, name: "Bateria do Drone", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Aliados a até 3m do drone recuperam Exaustão." },
            { id: "tr_automacao_torre", level: 14, name: "Automação de Torre", type: "ativa", cost: "3 PA", buffs: {}, desc: "Transforma drone em torre: 2 disparos de 2d10 por 3 turnos." }
          ]
        },
        {
          id: "lamina-gatilho", name: "Lâmina/Gatilho Rúnico",
          abilities: [
            { id: "tr_cadencia_alternada", level: 10, name: "Cadência Alternada", type: "ativa", cost: "Reação", buffs: { va: 2 }, desc: "Acerto corpo a corpo dá +2 VA no próximo tiro; acerto de tiro dá +2 VA no próximo golpe." },
            { id: "tr_esgrima_balistica", level: 11, name: "Esgrima Balística", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Com Cortante + arma leve, usa FOC no VA corpo a corpo." },
            { id: "tr_combo_integrado", level: 12, name: "Combo Integrado", type: "ativa", cost: "2 PA", buffs: {}, desc: "Golpe Cortante + disparo na mesma ação com +1d10 dano crítico." },
            { id: "tr_parry_energizado", level: 13, name: "Parry Energizado", type: "ativa", cost: "Reação", buffs: {}, desc: "Bloqueia ataque corpo a corpo e devolve 2d6 elétrico." },
            { id: "tr_execucao_cadeia", level: 14, name: "Execução em Cadeia", type: "ativa", cost: "3 PA + 3 Cargas", buffs: {}, desc: "Movimento livre encadeado cortando alvos visíveis com 1d12 por alvo." }
          ]
        },
        {
          id: "infiltrador", name: "Infiltrador",
          abilities: [
            { id: "tr_camuflagem_runica", level: 10, name: "Camuflagem Rúnica", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Indetectável por sensores térmicos e auras arcanas em cobertura." },
            { id: "tr_passos_espectro", level: 11, name: "Passos de Espectro", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Mover-se na área de engajamento não provoca Ataques de Oportunidade." },
            { id: "tr_emboscada_perfurante", level: 12, name: "Emboscada Perfurante", type: "ativa", cost: "2 PA", buffs: {}, desc: "Ataque surpresa reduz a RD balística do alvo a 0." },
            { id: "tr_holograma_tatico", level: 13, name: "Holograma Tático", type: "ativa", cost: "1 PA", buffs: {}, desc: "Cria cópia holográfica espacial atraindo ações dos inimigos." },
            { id: "tr_deslocamento_sombra", level: 14, name: "Deslocamento Sombra", type: "ativa", cost: "3 PA", buffs: {}, desc: "Teleporta às costas do alvo a 10m e aplica Crítico com dano triplicado." }
          ]
        }
      ],
      vanguardista: [
        {
          id: "bastiao", name: "Bastião",
          abilities: [
            { id: "tr_muralha_viva", level: 10, name: "Muralha Viva", type: "passiva", cost: "Passiva Permanente", buffs: { rd: 3, defense: 2 }, desc: "Em Cobertura ou com escudo: +3 RD Física e +2 Defesa adicional." },
            { id: "tr_ancoragem_esquadrao", level: 11, name: "Ancoragem de Esquadrão", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Aliados adjacentes recebem +2 Defesa contra tiros e imunidade a Caído." },
            { id: "tr_cupula_protecao", level: 12, name: "Cúpula de Proteção", type: "ativa", cost: "2 PA + 2 Inflexibilidade", buffs: {}, desc: "Cúpula com 40 PV, Defesa 12, RD 4 em raio de 3m por 2 rodadas." },
            { id: "tr_redistribuicao_impacto", level: 13, name: "Redistribuição de Impacto", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Quando absorver 5+ dano, recupera 1 Inflexibilidade." },
            { id: "tr_fortaleza_inexpugnavel", level: 14, name: "Fortaleza Inexpugnável", type: "ativa", cost: "2 PA + 3 Inflexibilidade", buffs: { defense: 5, rd: 5 }, desc: "+5 Defesa, +5 RD Física; aliados adjacentes recebem +3 RD." }
          ]
        },
        {
          id: "demolidor", name: "Demolidor",
          abilities: [
            { id: "tr_especialista_demolicao", level: 10, name: "Especialista em Demolição", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Dano dobrado contra estruturas/escudos; ignora 3 RD estrutural." },
            { id: "tr_abalo_brutal", level: 11, name: "Abalo Brutal", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Acerto físico impõe –2 Defesa ao alvo; Crítico causa Caído." },
            { id: "tr_impacto_sismico", level: 12, name: "Impacto Sísmico", type: "ativa", cost: "3 PA + 2 Inflexibilidade", buffs: {}, desc: "3d10 físico em área de 5m; REF CD 15 ou Caído." },
            { id: "tr_triturador_protecoes", level: 13, name: "Triturador de Proteções", type: "ativa", cost: "1 Inflexibilidade", buffs: {}, desc: "Reduz RD Física do alvo em 3 por 2 rodadas." },
            { id: "tr_onda_demolicao", level: 14, name: "Onda de Demolição", type: "ativa", cost: "2 PA + 3 Inflexibilidade", buffs: {}, desc: "Linha de 12m causando 4d12 físico (REF CD 15 ou Atordoado)." }
          ]
        },
        {
          id: "guardiao-runico", name: "Guardião Rúnico",
          abilities: [
            { id: "tr_escudo_runico", level: 10, name: "Escudo Rúnico", type: "passiva", cost: "Passiva Permanente", buffs: { rdMagica: 3 }, desc: "Concede +3 RD Mágica a si e aliados adjacentes." },
            { id: "tr_retaliacao_arcana", level: 11, name: "Retaliação Arcana", type: "ativa", cost: "Reação + 1 Inflexibilidade", buffs: {}, desc: "Ao sofrer dano mágico, reduz em 10 e devolve 1d8 arcano ao agressor." },
            { id: "tr_sifao_runico", level: 12, name: "Sifão Rúnico", type: "ativa", cost: "2 PA + 2 Inflexibilidade", buffs: {}, desc: "Aliado a 6m ganha +5 RD Mágica por 2 rodadas." },
            { id: "tr_vinculo_guardiao", level: 13, name: "Vínculo Guardião", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Assume metade do dano mágico sofrido por aliado a até 3m." },
            { id: "tr_espelho_caos", level: 14, name: "Espelho do Caos", type: "ativa", cost: "Reação + 3 Inflexibilidade", buffs: {}, desc: "Reflete feitiço direcionado hostil de volta ao conjurador." }
          ]
        }
      ],
      ciborgue: [
        {
          id: "samurai-cibernetico", name: "Samurai Cibernético",
          abilities: [
            { id: "tr_lamina_precisao", level: 10, name: "Lâmina de Precisão", type: "passiva", cost: "Passiva Permanente", buffs: { va: 2 }, desc: "Lâmina Principal recebe +2 VA, +1d6 dano e não sofre penalidade por Caído." },
            { id: "tr_leitura_duelo", level: 11, name: "Leitura do Duelo", type: "ativa", cost: "1 PA", buffs: { defense: 2, esquiva: 2 }, desc: "Apenas um inimigo a até 3m: +2 Defesa e +2 Esquiva." },
            { id: "tr_iaido", level: 12, name: "IAIDO", type: "ativa", cost: "2 PA + 1 PP", buffs: {}, desc: "Em alvo Marcado: dobra todos os dados de dano antes da RD." },
            { id: "tr_caminho_corte", level: 13, name: "Caminho do Corte", type: "ativa", cost: "Reação", buffs: { va: 1 }, desc: "Após acertar no turno, próximo ataque recebe +1 VA e +1d8 de dano." },
            { id: "tr_ultimo_duelo", level: 14, name: "Último Duelo", type: "ativa", cost: "3 PA + 2 PP", buffs: { va: 2, defense: 2 }, desc: "Zona de Duelo de 6m; concede +2 VA e +2 Defesa por 3 rodadas." }
          ]
        },
        {
          id: "arsenal-combate", name: "Arsenal de Combate",
          abilities: [
            { id: "tr_armadura_combate", level: 10, name: "Armadura de Combate", type: "passiva", cost: "Passiva Permanente", buffs: { defense: 3, rd: 3 }, desc: "+3 Defesa, +3 RD física/balística e +3m de deslocamento permanente." },
            { id: "tr_vetor_aereo", level: 11, name: "Vetor Aéreo", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Deslocamento aéreo sem dano de queda e +2 Acrobacia." },
            { id: "tr_fluxo_armas", level: 12, name: "Fluxo de Armas", type: "ativa", cost: "2 PA + 1 PP", buffs: { va: 2 }, desc: "Segundo ataque no turno com outra arma com +2 VA e +2d6 dano." },
            { id: "tr_nucleo_armamento", level: 13, name: "Núcleo de Armamento", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Escolhe 2 sistemas integrados (Canhão de Pulso, Míssil Guiado, Lâmina)." },
            { id: "tr_ironheart", level: 14, name: "Ironheart", type: "ativa", cost: "3 PA + 2 PP", buffs: { defense: 4, rd: 4, va: 3 }, desc: "Por 3 rodadas: +4 Defesa, +4 RD, +3 VA, +2d6 dano e Voo." }
          ]
        },
        {
          id: "cacador-maquinas", name: "Caçador de Máquinas",
          abilities: [
            { id: "tr_interface_hostil", level: 10, name: "Interface Hostil & Invasão", type: "ativa", cost: "2 PA + 1 PP", buffs: { va: 2 }, desc: "+2 Tecnologia e +2 VA contra máquinas analisadas. Aplica Interferido." },
            { id: "tr_rede_combate", level: 11, name: "Rede de Combate", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Danos de aliados a alvos na interface recuperam 1 PP." },
            { id: "tr_sequestro_sistema", level: 12, name: "Sequestro de Sistema", type: "ativa", cost: "2 PA + 1 PP", buffs: {}, desc: "Assume controle temporário de máquina a até 9m." },
            { id: "tr_arquitetura_inversa", level: 13, name: "Arquitetura Inversa", type: "passiva", cost: "Passiva Permanente", buffs: {}, desc: "Ao destruir máquina conectada: recupera 1 PP ou 1 PA." },
            { id: "tr_dominio_mecanico", level: 14, name: "Domínio Mecânico", type: "ativa", cost: "3 PA + 2 PP", buffs: {}, desc: "Rede de 12m com até 3 interfaces ativas comandando máquinas." }
          ]
        }
      ]
    };

    const MAGIC_ITEMS = [
      { id: "varinha_foco", name: "Varinha de Foco", cat: "Mágico", desc: "+1,5s no tempo inicial do minigame.", buffs: { minigameExtraTime: 1.5 } },
      { id: "anel_runico", name: "Anel Rúnico", cat: "Mágico", desc: "Ignora 1 erro no minigame por conjuração.", buffs: { minigameErrorIgnore: 1 } },
      { id: "grimorio_sintonia", name: "Grimório de Sintonia", cat: "Mágico", desc: "Reduz custo de Exaustão de magias em até 50%.", buffs: { exaustaoReduction: 5 } },
      { id: "cajado_ressonancia", name: "Cajado de Ressonância", cat: "Mágico", desc: "+1 de dano por dado em magias.", buffs: { spellDamageBonus: 1 } },
      { id: "amuleto_eter", name: "Amuleto de Contenção de Éter", cat: "Arcanotécnico", desc: "+10 Exaustão Máxima e +1 RD Mágica.", buffs: { maxExBonus: 10, rdMagica: 1 } },
      { id: "mira_red_dot", name: "Mira Red Dot", cat: "Acessório", desc: "+1 VA contra alvos a até 12m.", buffs: { va: 1 } },
      { id: "mira_telescopica", name: "Mira Telescópica", cat: "Acessório", desc: "+2 VA contra alvos a mais de 12m.", buffs: { va: 2 } },
      { id: "bipe_tatico", name: "Bipé Tático", cat: "Acessório", desc: "+1 VA com armas longas quando estático.", buffs: { va: 1 } },
      { id: "empunhadura_tatica", name: "Empunhadura Tática", cat: "Acessório", desc: "Reduz Recuo da arma em 1.", buffs: { recoilReduce: 1 } },
      { id: "injecao_estimulante", name: "Injeção Estimulante", cat: "Médico", desc: "Cura 1d8 PV; –1 Defesa até próximo turno.", buffs: {} }
    ];

    const ORIGENS = [
      { id: 'soldado', name: "Soldado", benefit: "Treinamento Militar", skills: ["Fortitude", "Imposição"], desc: "Treinamento Militar formal e disciplina tática." },
      { id: 'artesao', name: "Artesão", benefit: "Conhecimento Técnico", skills: ["Tecnologia & Sistemas", "Investigação"], desc: "Capacidade de modificar e aprimorar equipamentos." },
      { id: 'medico', name: "Médico", benefit: "Formação Médica", skills: ["Medicina de Combate"], desc: "Sustentação biológica e socorro em combate." },
      { id: 'investigador', name: "Investigador", benefit: "Olhar Investigativo", skills: ["Investigação"], desc: "Análise analítica de pistas, fraquezas e terreno." },
      { id: 'criminoso', name: "Criminoso", benefit: "Conhecimento das Ruas", skills: ["Furtividade"], desc: "Infiltração, saques rápidos e manobras furtivas." },
      { id: 'pesquisador-arcano', name: "Pesquisador Arcano", benefit: "Estudos Arcanos", skills: ["História Arcana", "Simbologia & Runas"], desc: "Estudos teóricos das matrizes e das runas ancestrais." },
      { id: 'sobrevivente', name: "Sobrevivente", benefit: "Sobrevivência", skills: ["Fortitude"], desc: "Instinto apurado e resistência extrema sob pressão." },
      { id: 'mercenario', name: "Mercenário", benefit: "Treinamento Operacional", skills: ["Armas de Fogo", "Briga/Corpo a Corpo"], desc: "Pragmatismo contratual e versatilidade em combate." },
      { id: 'atleta', name: "Atleta", benefit: "Condicionamento", skills: ["Atletismo"], desc: "Mobilidade acrobática, vigor e deslocamento aumentado." },
      { id: 'operador', name: "Operador", benefit: "Operações Táticas", skills: ["Tecnologia & Sistemas", "Percepção/Prontidão"], desc: "Uso de miras, sensores e operações táticas coordenadas." }
    ];

    const CORPORATIONS = [
      { id: "bravia", country: "Brasil", flag: "🇧🇷", name: "BRAVIA", fullName: "Bravia Arcanotecnologia & Defesa S.A.", agency: "BRASA", agencyName: "Setor de Inteligência e Contenção", motto: "Enquanto houver cobra fumando, haverá BRASA.", spec: "Arcanotecnologia de ponta, bio-engenharia de éter e contenção de anomalias." },
      { id: "valor", country: "EUA", flag: "🇺🇸", name: "VALOR", fullName: "Valor Dynamics Global", agency: "VANT", agencyName: "Vanguard Advanced Reconnaissance", motto: "Dominance Through Firepower.", spec: "Complexo industrial bélico, armaduras táticas e PMC privada global." },
      { id: "tianlong", country: "China", flag: "🇨🇳", name: "TIANLONG", fullName: "Tianlong Arcanotech Group", agency: "LONGA", agencyName: "Long-Range Covert Directorate", motto: "Harmonia através da Ordem Imutável.", spec: "Matrizes rúnicas industriais e manufatura massiva de baterias de éter." },
      { id: "kage", country: "Japão", flag: "🇯🇵", name: "KAGE", fullName: "Kage Arcanosystems Inc.", agency: "SHIN", agencyName: "Seção de Inteligência e Neutralização", motto: "Aço invisível sob a névoa.", spec: "Microcibernética de precisão, nanotecnologia rúnica e lâminas térmicas." },
      { id: "eisenwerk", country: "Alemanha", flag: "🇩🇪", name: "EISENWERK", fullName: "Eisenwerk Arcana AG", agency: "WOLF", agencyName: "Wehr Operations, Logistik und Feldaufklärung", motto: "O Ferro jamais se curva.", spec: "Exoesqueletos blindados pesados, ligas antimágicas e artilharia de pulso." },
      { id: "lumiere", country: "França", flag: "🇫🇷", name: "LUMIÈRE", fullName: "Lumière Corporation", agency: "OMBRE", agencyName: "Organisation de Monitoring e Reconnaissance", motto: "A ilusão mais doce é a mais letal.", spec: "Ilusões meméticas, bio-refinamento de cristais e espionagem cultural." },
      { id: "crown", country: "Reino Unido", flag: "🇬🇧", name: "CROWN", fullName: "Crown Arcanotech Ltd.", agency: "BLACK", agencyName: "Bureau for Liaison and Covert Knowledge", motto: "Tradição mantida nas sombras.", spec: "Mercados financeiros de éter, interceptação global de sinais e infiltração." },
      { id: "zvezda", country: "Rússia", flag: "🇷🇺", name: "ZVEZDA", fullName: "Zvezda Arcana Corporation", agency: "VOLK", agencyName: "Vigilância e Operações Komando", motto: "Do gelo brota a força inquebrável.", spec: "Reatores de fissão arcana, tropas de choque pesadas e mineração no permafrost." },
      { id: "veda", country: "Índia", flag: "🇮🇳", name: "VEDA", fullName: "Veda Arcanosystems Private Ltd.", agency: "NETRA", agencyName: "National Espionage & Tracking Agency", motto: "Conhecimento que transcende o tempo.", spec: "Supercomputação quântico-arcana e inteligência artificial preditiva." },
      { id: "aurelia", country: "Itália", flag: "🇮🇹", name: "AURELIA", fullName: "Aurelia Dynamics S.p.A.", agency: "CORVO", agencyName: "Centro Operativo de Reconhecimento", motto: "Velocidade, arte e supremacia.", spec: "Veículos ultrarrápidos de indução arcana e tecno-alta-costura balística." },
      { id: "northstar", country: "Canadá", flag: "🇨🇦", name: "NORTHSTAR", fullName: "Northstar Arcanotech Inc.", agency: "FROST", agencyName: "Federal Operations Security Taskforce", motto: "Vigilantes sob a tempestade boreal.", spec: "Sistemas para frio extremo, radares de sub-éter e patrulha polar." },
      { id: "southern-cross", country: "Austrália", flag: "🇦🇺", name: "SOUTHERN CROSS", fullName: "Southern Cross Arcana Ltd.", agency: "DINGO", agencyName: "Directorate of Intelligence & Operations", motto: "O deserto não perdoa os fracos.", spec: "Contenção de fauna mutagênica do outback e extração mineral hostil." },
      { id: "han", country: "Coreia do Sul", flag: "🇰🇷", name: "HAN", fullName: "Han Arcano Corporation", agency: "GWI", agencyName: "Global Watch Intelligence", motto: "Redes perfeitas, mentes sincronizadas.", spec: "Realidade neural de latência zero, guerra cibernética e drones autônomos." },
      { id: "quetzal", country: "México", flag: "🇲🇽", name: "QUETZAL", fullName: "Quetzal Arcanosistemas S.A.", agency: "ÁGUILA", agencyName: "Agência de Vigilância e Ações", motto: "Vigilância dos céus ao subterrâneo.", spec: "Drones rápidos de fronteira, logística aérea e interceptação." },
      { id: "garuda", country: "Indonésia", flag: "🇮🇩", name: "GARUDA", fullName: "Garuda Arcana PT", agency: "NAGA", agencyName: "National Guard and Assessment", motto: "Soberania sobre as profundezas.", spec: "Arcanismo submarino profundo e patrulha arquipelágica." },
      { id: "sabaa", country: "Arábia Saudita", flag: "🇸🇦", name: "SABAA", fullName: "Sabaa Arcanotech Co.", agency: "RIMAL", agencyName: "Reconnaissance & Action Legion", motto: "Ouro, areia e poder infinito.", spec: "Refino de areias rúnicas e matrizes solares-arcanas." },
      { id: "ubuntu", country: "África do Sul", flag: "🇿🇦", name: "UBUNTU", fullName: "Ubuntu Arcana Ltd.", agency: "MAMBA", agencyName: "Monitoring and Black Actions", motto: "Unidos pela liga mais densa.", spec: "Arcanometalurgia pesada de diamantes de éter e forças de choque." },
      { id: "ayyildiz", country: "Turquia", flag: "🇹🇷", name: "AYYILDIZ", fullName: "Ayyildiz Arcano A.Ş.", agency: "BOZKURT", agencyName: "Bureau of Zero-Knowledge Operations", motto: "A ponte de ferro entre dois mundos.", spec: "Corredores euro-asiáticos e contrainteligência estratégica." },
      { id: "plata", country: "Argentina", flag: "🇦🇷", name: "PLATA", fullName: "Plata Arcanosistemas S.A.", agency: "CONDOR", agencyName: "Comando de Operações e Reconhecimento", motto: "Asas de ferro sobre o horizonte.", spec: "Arcanobio-agricultura e controle alimentar de bacias hídricas." },
      { id: "iberia", country: "Espanha", flag: "🇪🇸", name: "IBERIA", fullName: "Iberia Arcano S.A.", agency: "LANCE", agencyName: "Logística e Contraespionagem", motto: "Guardando as rotas da tempestade.", spec: "Segurança naval no Atlântico-Mediterrâneo e escoltas blindadas." },
      { id: "independente", country: "Clandestino", flag: "🏴", name: "INDEPENDENTE", fullName: "Operador Autônomo Clandestino", agency: "LIVRE", agencyName: "Rede Clandestina", motto: "Sem bandeira, sem mestre, apenas o contrato.", spec: "Mercenário urbano e especialista de extração autônomo." }
    ];

    const SKILLS_LIST = [
      { name: "Fortitude", attr: "CON" },
      { name: "Tolerância Arcana", attr: "CON" },
      { name: "Simbologia & Runas", attr: "CONH" },
      { name: "História Arcana", attr: "CONH" },
      { name: "Tecnologia & Sistemas", attr: "CONH" },
      { name: "Medicina de Combate", attr: "CONH" },
      { name: "Investigação", attr: "CONH" },
      { name: "Armas de Fogo", attr: "FOC" },
      { name: "Percepção/Prontidão", attr: "FOC" },
      { name: "Intuição", attr: "FOC" },
      { name: "Sintonia Arcana", attr: "FOC" },
      { name: "Briga/Corpo a Corpo", attr: "FOR" },
      { name: "Atletismo", attr: "FOR" },
      { name: "Imposição", attr: "FOR" },
      { name: "Esquiva", attr: "REF" },
      { name: "Acrobacia", attr: "REF" },
      { name: "Furtividade", attr: "REF" },
      { name: "Pilotagem", attr: "REF" },
      { name: "Prestidigitação", attr: "REF" }
    ];

    const COLAPSOS = [
      { id: 0, name: "Nenhum", simples: "Nenhum", critica: "Nenhum" },
      { id: 1, name: "Visão Fraturada", simples: "–2 em Percepção/Prontidão e pontaria a mais de 12 m.", critica: "–4 em Percepção/Prontidão; alcance de visão reduzido a 18 m." },
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

    const WEAPON_PRESETS = [
      { name: "Pistola", type: "fogo", damage: "1d4", crit: "18×2", range: "12m", ammo: 12, recoil: 0, failure: 6, vaBonus: 0 },
      { name: "Revólver", type: "fogo", damage: "1d6", crit: "17×2", range: "12m", ammo: 6, recoil: 1, failure: 3, vaBonus: 0 },
      { name: "Submetralhadora", type: "fogo", damage: "1d6", crit: "19×2", range: "12m", ammo: 30, recoil: 2, failure: 15, vaBonus: 0 },
      { name: "Espingarda", type: "fogo", damage: "2d6", crit: "16×2", range: "6m", ammo: 6, recoil: 2, failure: 3, vaBonus: 0 },
      { name: "Fuzil de Assalto", type: "fogo", damage: "1d10", crit: "18×2", range: "18m", ammo: 20, recoil: 2, failure: 10, vaBonus: 0 },
      { name: "Fuzil de Atirador", type: "fogo", damage: "1d12", crit: "17×2", range: "24m", ammo: 10, recoil: 2, failure: 5, vaBonus: 0 },
      { name: "Sniper de Precisão", type: "fogo", damage: "1d20", crit: "16×2", range: "36m", ammo: 5, recoil: 3, failure: 2, vaBonus: 0 },
      { name: "Metralhadora Pesada", type: "fogo", damage: "1d8", crit: "19×2", range: "18m", ammo: 40, recoil: 4, failure: 20, vaBonus: 0 },
      { name: "Escopeta Devastadora", type: "fogo", damage: "3d6", crit: "16×2", range: "6m", ammo: 4, recoil: 3, failure: 2, vaBonus: 0 },
      { name: "Faca Tática", type: "melee", damage: "1d4", crit: "17×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Canivete", type: "melee", damage: "1d4", crit: "18×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Cassetete", type: "melee", damage: "1d6", crit: "18×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Bastão Retrátil", type: "melee", damage: "1d6", crit: "17×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Pé de Cabra", type: "melee", damage: "1d6", crit: "19×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Machete", type: "melee", damage: "1d8", crit: "18×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Machado de Combate", type: "melee", damage: "1d10", crit: "18×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Espada Curta", type: "melee", damage: "1d8", crit: "17×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Espada Longa", type: "melee", damage: "1d10", crit: "18×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 },
      { name: "Katana de Precisão", type: "melee", damage: "1d10", crit: "17×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 1 }
    ];

    const AVATAR_PRESETS = [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop"
    ];

    const ATTRIBUTE_COSTS = [0, 1, 2, 4, 7, 8, 9];
    const STORAGE_KEY = 'ferro_arcano_character';

    // ================= ESTADO DO PERSONAGEM =================
    let state = {
      id: "char_" + Math.random().toString(36).substring(2, 9),
      name: "Nasser",
      level: 1,
      concept: "Combatente tático adaptado aos desafios arcanos da fronteira.",
      classId: "atirador",
      originId: "soldado",
      originSkillChoice: "Fortitude",
      corpId: "bravia",
      trailId: "",
      avatarUrl: AVATAR_PRESETS[0],
      attributes: { CON: 2, CONH: 1, FOC: 3, FOR: 1, REF: 2 },
      trainedSkills: ["Armas de Fogo", "Percepção/Prontidão", "Furtividade", "Esquiva"],
      colapsoId: 0,
      colapsoSeverity: "simples",
      armorVal: 1,
      armorRd: 2,
      shieldVal: 0,
      items: "2x Kits Médicos, Munição extra.",
      equippedItems: ["varinha_foco", "mira_red_dot"],
      activeAbilities: [], // IDs de habilidades ativas no momento
      weapons: [
        { name: "Fuzil de Assalto", type: "fogo", damage: "1d10", crit: "18×2", range: "18m", ammo: 20, recoil: 2, failure: 10, vaBonus: 0 },
        { name: "Faca Tática", type: "melee", damage: "1d4", crit: "17×2", range: "C.C.", ammo: 0, recoil: 0, failure: 0, vaBonus: 0 }
      ],
      currentPv: 40,
      currentExaustao: 40,
      is_locked: false,
      room_code: ""
    };

    // ================= INICIALIZAÇÃO =================
    window.onload = function() {
      initDOM();
      carregarFicha();
      initNetworkSync();
      calcularEAtualizar();
    };

    function initDOM() {
      // 1. Níveis 1 a 14
      const lvlSelect = document.getElementById('char-level');
      lvlSelect.innerHTML = "";
      for (let i = 1; i <= 14; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = \`Nível \${i}\`;
        lvlSelect.appendChild(opt);
      }

      // 2. Origens
      const origSelect = document.getElementById('char-origin');
      origSelect.innerHTML = ORIGENS.map(o => \`<option value="\${o.id}">\${o.name} (\${o.benefit})</option>\`).join('');

      // 3. Corporações
      const corpSelect = document.getElementById('char-corp');
      if (corpSelect) {
        corpSelect.innerHTML = CORPORATIONS.map(c => \`<option value="\${c.id}">\${c.flag} \${c.name} · Inteligência \${c.agency} (\${c.country})</option>\`).join('');
        corpSelect.addEventListener('change', e => {
          state.corpId = e.target.value;
          calcularEAtualizar();
        });
      }

      // 4. Colapsos
      const colSelect = document.getElementById('char-colapso');
      colSelect.innerHTML = COLAPSOS.map(c => \`<option value="\${c.id}">\${c.id > 0 ? c.id + '. ' : ''}\${c.name}</option>\`).join('');

      // 5. Avatares Presets
      const avContainer = document.getElementById('avatar-presets');
      avContainer.innerHTML = AVATAR_PRESETS.map((url, idx) => \`
        <img src="\${url}" onclick="selectPresetAvatar('\${url}', this)" class="\${state.avatarUrl === url ? 'active' : ''}" style="width:42px; height:42px; border-radius:8px; object-fit:cover; cursor:pointer; border:1px solid var(--border-color);">
      \`).join('');

      // 6. Listeners de Formulário
      document.getElementById('char-name').addEventListener('input', e => { state.name = e.target.value; calcularEAtualizar(); });
      document.getElementById('char-level').addEventListener('change', e => { state.level = parseInt(e.target.value); resetAttributesOnLevelChange(); calcularEAtualizar(); });
      document.getElementById('char-concept').addEventListener('input', e => { state.concept = e.target.value; calcularEAtualizar(); });
      document.getElementById('char-class').addEventListener('change', e => { state.classId = e.target.value; state.trailId = ""; state.activeAbilities = []; validateAndSetMandatorySkill(); calcularEAtualizar(); });
      document.getElementById('char-origin').addEventListener('change', e => { state.originId = e.target.value; updateOriginSkillChoiceGroup(); calcularEAtualizar(); });
      document.getElementById('char-origin-skill-choice').addEventListener('change', e => { state.originSkillChoice = e.target.value; calcularEAtualizar(); });
      document.getElementById('char-trail').addEventListener('change', e => { state.trailId = e.target.value; calcularEAtualizar(); });
      document.getElementById('char-avatar-url').addEventListener('input', e => { state.avatarUrl = e.target.value; updateAvatarPreview(); salvarFicha(); });
      document.getElementById('char-colapso').addEventListener('change', e => { state.colapsoId = parseInt(e.target.value); calcularEAtualizar(); });
      document.querySelectorAll('input[name="colapso-severity"]').forEach(rad => {
        rad.addEventListener('change', e => { state.colapsoSeverity = e.target.value; calcularEAtualizar(); });
      });
      document.getElementById('char-armor').addEventListener('change', e => {
        const [def, rd] = e.target.value.split(',').map(Number);
        state.armorVal = def; state.armorRd = rd;
        calcularEAtualizar();
      });
      document.getElementById('char-shield').addEventListener('change', e => {
        state.shieldVal = parseInt(e.target.value);
        calcularEAtualizar();
      });
      document.getElementById('char-items').addEventListener('input', e => { state.items = e.target.value; salvarFicha(); });

      // Upload Local
      document.getElementById('char-avatar-file').addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(evt) {
            state.avatarUrl = evt.target.result;
            document.getElementById('char-avatar-url').value = "Imagem Local Carregada";
            updateAvatarPreview();
            salvarFicha();
          };
          reader.readAsDataURL(file);
        }
      });

      // Rolar Colapso
      document.getElementById('btn-roll-colapso').addEventListener('click', rollColapsoRandomly);

      // Adicionar Arma
      document.getElementById('btn-add-weapon').addEventListener('click', addWeaponRow);

      // Modal da Mesa Virtual
      document.getElementById('btn-open-room-modal').addEventListener('click', openRoomModal);
    }

    // ================= SELEÇÃO DE AVATAR =================
    function selectPresetAvatar(url, element) {
      document.querySelectorAll('.avatar-presets img').forEach(img => img.style.borderColor = 'var(--border-color)');
      element.style.borderColor = 'var(--brass)';
      state.avatarUrl = url;
      document.getElementById('char-avatar-url').value = url;
      updateAvatarPreview();
      salvarFicha();
    }

    function updateAvatarPreview() {
      document.getElementById('preview-avatar-img').src = state.avatarUrl || AVATAR_PRESETS[0];
    }

    // ================= ORÇAMENTO DE ATRIBUTOS =================
    function getBudgetPoints(level) {
      return 10 + [2, 4, 6, 8, 10, 14].filter(m => level >= m).length;
    }

    function getSpentPoints() {
      let spent = 0;
      Object.keys(state.attributes).forEach(k => {
        const val = state.attributes[k];
        spent += ATTRIBUTE_COSTS[val] || 0;
      });
      return spent;
    }

    function getMaxAttributeLimit(level) {
      return level === 1 ? 4 : 6;
    }

    function changeAttr(attr, delta) {
      if (state.is_locked) {
        showDiceToast("🔒 <strong>Ficha Bloqueada pelo Mestre:</strong> Alterações de atributos não permitidas durante a sessão.");
        return;
      }
      const currentVal = state.attributes[attr];
      const nextVal = currentVal + delta;
      
      if (nextVal < 0 || nextVal > getMaxAttributeLimit(state.level)) return;

      const currentCost = ATTRIBUTE_COSTS[currentVal] || 0;
      const nextCost = ATTRIBUTE_COSTS[nextVal] || 0;
      const pointsDiff = nextCost - currentCost;
      const budget = getBudgetPoints(state.level);
      const spent = getSpentPoints();

      if (spent + pointsDiff > budget) {
        showDiceToast("⚠️ Pontos de atributos insuficientes para aumentar este valor!");
        return;
      }

      state.attributes[attr] = nextVal;
      calcularEAtualizar();
    }

    function resetAttributesOnLevelChange() {
      const budget = getBudgetPoints(state.level);
      while (getSpentPoints() > budget) {
        let highestAttr = 'CON';
        let highestVal = -1;
        Object.keys(state.attributes).forEach(k => {
          if (state.attributes[k] > highestVal) {
            highestVal = state.attributes[k];
            highestAttr = k;
          }
        });
        if (state.attributes[highestAttr] > 0) {
          state.attributes[highestAttr]--;
        } else {
          break;
        }
      }
    }

    // ================= ORIGEM E PERÍCIAS =================
    function updateOriginSkillChoiceGroup() {
      const origin = ORIGENS.find(o => o.id === state.originId);
      const group = document.getElementById('origin-choice-group');
      const label = document.getElementById('origin-choice-label');
      const select = document.getElementById('char-origin-skill-choice');
      const descBox = document.getElementById('origin-benefit-text');

      if (origin) {
        descBox.innerHTML = \`<strong>\${origin.name} (\${origin.benefit}):</strong> \${origin.desc}\`;
      }

      if (origin && origin.skills.length > 1) {
        group.style.display = "flex";
        label.textContent = \`Escolha da Perícia (\${origin.name})\`;
        select.innerHTML = origin.skills.map(s => \`<option value="\${s}">\${s}</option>\`).join('');
        if (!origin.skills.includes(state.originSkillChoice)) {
          state.originSkillChoice = origin.skills[0];
        }
        select.value = state.originSkillChoice;
      } else {
        group.style.display = "none";
        state.originSkillChoice = origin ? origin.skills[0] : "";
      }
    }

    function validateAndSetMandatorySkill() {
      const cls = CLASSES[state.classId];
      if (!cls) return;
      if (!state.trainedSkills.includes(cls.mandatorySkill)) {
        state.trainedSkills = [cls.mandatorySkill, ...state.trainedSkills.filter(s => s !== cls.mandatorySkill)];
      }
    }

    function getOriginGrantedSkill() {
      const origin = ORIGENS.find(o => o.id === state.originId);
      if (!origin) return "";
      return origin.skills.length > 1 ? state.originSkillChoice : origin.skills[0];
    }

    function renderSkillsSelector() {
      const cls = CLASSES[state.classId];
      const originGrantedSkill = getOriginGrantedSkill();
      const container = document.getElementById('skills-selector');
      container.innerHTML = "";

      const extraTrained = state.trainedSkills.filter(s => s !== cls.mandatorySkill);
      document.getElementById('skills-title-label').textContent = \`\${extraTrained.length}/3 Escolhas Selecionadas\`;

      SKILLS_LIST.forEach(s => {
        const isMandatory = s.name === cls.mandatorySkill;
        const isOrigin = s.name === originGrantedSkill;
        const isChosenTrained = state.trainedSkills.includes(s.name);

        let isChecked = isChosenTrained || isMandatory;
        let specialized = false;

        if (isOrigin && isChecked) {
          specialized = true;
        }

        const div = document.createElement('div');
        div.className = \`skill-check-item \${isMandatory ? 'mandatory' : ''} \${isOrigin ? 'origin-skill' : ''} \${specialized ? 'specialized' : ''}\`;
        div.innerHTML = \`
          <input type="checkbox" \${isChecked ? 'checked' : ''} \${(isMandatory || state.is_locked) ? 'disabled' : ''} onchange="toggleSkill('\${s.name}', this.checked)">
          <span style="flex-grow:1;">\${s.name} \${specialized ? '<small style="color:#c084fc;">(Esp. +4)</small>' : (isMandatory ? '<small style="color:var(--brass);">(Classe)</small>' : (isOrigin ? '<small style="color:#60a5fa;">(Origem)</small>' : ''))}</span>
          <small style="color:var(--ink-dim);">\${s.attr}</small>
        \`;
        container.appendChild(div);
      });
    }

    function toggleSkill(skillName, isChecked) {
      if (state.is_locked) return;
      const cls = CLASSES[state.classId];
      if (skillName === cls.mandatorySkill) return;

      if (isChecked) {
        const extraTrained = state.trainedSkills.filter(s => s !== cls.mandatorySkill);
        if (extraTrained.length >= 3) {
          showDiceToast("⚠️ Máximo de 3 perícias adicionais selecionadas!");
          calcularEAtualizar();
          return;
        }
        if (!state.trainedSkills.includes(skillName)) {
          state.trainedSkills.push(skillName);
        }
      } else {
        state.trainedSkills = state.trainedSkills.filter(s => s !== skillName);
      }
      calcularEAtualizar();
    }

    // ================= MOTOR DE HABILIDADES & BUFFS =================
    function calculateActiveBuffs() {
      const buffs = {
        va: 0,
        defense: 0,
        rd: 0,
        rdMagica: 0,
        esquiva: 0,
        minigameExtraTime: 0,
        minigameErrorIgnore: 0,
        exaustaoReduction: 0,
        spellDamageBonus: 0
      };

      const cls = CLASSES[state.classId];
      if (!cls) return buffs;

      // 1. Passivas de Classe desbloqueadas
      const unlockedClassCount = Math.min(state.level, 10);
      cls.powers.slice(0, unlockedClassCount).forEach(p => {
        if (p.type === 'passiva' && p.buffs) {
          Object.keys(p.buffs).forEach(k => {
            if (typeof p.buffs[k] === 'number') buffs[k] = (buffs[k] || 0) + p.buffs[k];
          });
        }
      });

      // 2. Habilidades Ativas de Classe ligadas pelo jogador
      state.activeAbilities.forEach(abId => {
        const p = cls.powers.find(x => x.id === abId);
        if (p && p.buffs) {
          Object.keys(p.buffs).forEach(k => {
            if (typeof p.buffs[k] === 'number') buffs[k] = (buffs[k] || 0) + p.buffs[k];
          });
        }
      });

      // 3. Trilha (N10+)
      if (state.level >= 10 && state.trailId) {
        const classTrails = TRAILS[state.classId] || [];
        const currentTrail = classTrails.find(t => t.id === state.trailId);
        if (currentTrail) {
          currentTrail.abilities.forEach(ab => {
            if (state.level >= ab.level) {
              if (ab.type === 'passiva' && ab.buffs) {
                Object.keys(ab.buffs).forEach(k => {
                  if (typeof ab.buffs[k] === 'number') buffs[k] = (buffs[k] || 0) + ab.buffs[k];
                });
              } else if (ab.type === 'ativa' && state.activeAbilities.includes(ab.id) && ab.buffs) {
                Object.keys(ab.buffs).forEach(k => {
                  if (typeof ab.buffs[k] === 'number') buffs[k] = (buffs[k] || 0) + ab.buffs[k];
                });
              }
            }
          });
        }
      }

      return buffs;
    }

    function calculateItemBuffs() {
      const buffs = {
        va: 0,
        defense: 0,
        rd: 0,
        rdMagica: 0,
        esquiva: 0,
        minigameExtraTime: 0,
        minigameErrorIgnore: 0,
        exaustaoReduction: 0,
        maxExBonus: 0
      };

      (state.equippedItems || []).forEach(itemId => {
        const item = MAGIC_ITEMS.find(m => m.id === itemId);
        if (item && item.buffs) {
          Object.keys(item.buffs).forEach(k => {
            if (typeof item.buffs[k] === 'number') buffs[k] = (buffs[k] || 0) + item.buffs[k];
          });
        }
      });

      return buffs;
    }

    window.toggleAbility = function(abilityId) {
      if (!state.activeAbilities) state.activeAbilities = [];
      const idx = state.activeAbilities.indexOf(abilityId);
      let abName = abilityId;

      const cls = CLASSES[state.classId];
      const p = cls.powers.find(x => x.id === abilityId);
      if (p) abName = p.name;
      else if (state.trailId) {
        const trails = TRAILS[state.classId] || [];
        const tr = trails.find(t => t.id === state.trailId);
        const ab = tr ? tr.abilities.find(x => x.id === abilityId) : null;
        if (ab) abName = ab.name;
      }

      if (idx >= 0) {
        state.activeAbilities.splice(idx, 1);
        showDiceToast(\`⚡ Habilidade <strong>\${abName}</strong> desativada.\`);
      } else {
        state.activeAbilities.push(abilityId);
        showDiceToast(\`✨ Habilidade <strong>\${abName}</strong> ATIVADA! Bônus aplicados na ficha.\`);
      }

      calcularEAtualizar();
      syncWithTable();
    };

    function switchAbilitiesTab(tab) {
      const classBtn = document.getElementById('tab-class-powers-btn');
      const trailBtn = document.getElementById('tab-trail-powers-btn');
      const classDiv = document.getElementById('tab-class-powers');
      const trailDiv = document.getElementById('tab-trail-powers');

      if (tab === 'class') {
        classBtn.classList.add('active'); trailBtn.classList.remove('active');
        classDiv.style.display = 'block'; trailDiv.style.display = 'none';
      } else {
        trailBtn.classList.add('active'); classBtn.classList.remove('active');
        trailDiv.style.display = 'block'; classDiv.style.display = 'none';
      }
    }

    function renderAbilitiesAndTrail() {
      const cls = CLASSES[state.classId];
      const classListDiv = document.getElementById('unlocked-class-powers-list');
      classListDiv.innerHTML = "";

      // 1. Habilidades de classe até o nível atual (máx 10)
      const unlockedCount = Math.min(state.level, 10);
      cls.powers.slice(0, unlockedCount).forEach((p, idx) => {
        const isPassive = p.type === 'passiva';
        const isActive = state.activeAbilities.includes(p.id);

        const div = document.createElement('div');
        div.className = \`ability-item \${isPassive ? 'passive-power' : (isActive ? 'active-power' : '')}\`;
        
        let actionBtnHtml = '';
        if (isPassive) {
          actionBtnHtml = \`<span class="badge-passive">🛡️ PASSIVA PERMANENTE</span>\`;
        } else {
          actionBtnHtml = \`
            <button type="button" class="btn-toggle-ability \${isActive ? 'on' : 'off'}" onclick="toggleAbility('\${p.id}')">
              \${isActive ? '✨ ATIVA (LIGADA)' : '⚡ ATIVAR'}
            </button>
          \`;
        }

        div.innerHTML = \`
          <div class="ability-header-row">
            <strong>Nível \${idx + 1} · \${p.name} <small style="color:var(--ink-dim); font-weight:normal;">(\${p.cost || p.type})</small></strong>
            \${actionBtnHtml}
          </div>
          <span>\${p.desc}</span>
        \`;
        classListDiv.appendChild(div);
      });

      // 2. Trilha desbloqueada no nível 10+
      const lockedView = document.getElementById('trail-locked-view');
      const unlockedView = document.getElementById('trail-unlocked-view');
      const trailStatus = document.getElementById('trail-lock-status');
      const trailSelect = document.getElementById('char-trail');
      const trailLine = document.getElementById('p-char-trail-line');
      const trailNameSpan = document.getElementById('p-char-trail-name');

      if (state.level < 10) {
        lockedView.style.display = "block";
        unlockedView.style.display = "none";
        trailStatus.textContent = \`Nível \${state.level} (Trilha no N10)\`;
        trailStatus.style.color = "var(--ink-dim)";
        trailLine.style.display = "none";
      } else {
        lockedView.style.display = "none";
        unlockedView.style.display = "flex";
        trailStatus.textContent = \`Nível \${state.level} (Trilha Desbloqueada!)\`;
        trailStatus.style.color = "var(--brass)";

        const classTrails = TRAILS[state.classId] || [];
        trailSelect.innerHTML = classTrails.map(t => \`<option value="\${t.id}">\${t.name}</option>\`).join('');

        if (!state.trailId || !classTrails.find(t => t.id === state.trailId)) {
          state.trailId = classTrails[0] ? classTrails[0].id : "";
        }
        trailSelect.value = state.trailId;

        const currentTrail = classTrails.find(t => t.id === state.trailId);
        const trailListDiv = document.getElementById('unlocked-trail-powers-list');
        trailListDiv.innerHTML = "";

        if (currentTrail) {
          trailLine.style.display = "block";
          trailNameSpan.textContent = currentTrail.name;

          currentTrail.abilities.forEach(ab => {
            const isUnlocked = state.level >= ab.level;
            const isPassive = ab.type === 'passiva';
            const isActive = state.activeAbilities.includes(ab.id);

            const div = document.createElement('div');
            div.className = \`ability-item \${isPassive ? 'passive-power' : (isActive ? 'active-power' : '')}\`;
            div.style.opacity = isUnlocked ? "1" : "0.45";

            let actionBtnHtml = '';
            if (!isUnlocked) {
              actionBtnHtml = \`<small style="color:var(--ink-dim);">🔒 Nv \${ab.level}</small>\`;
            } else if (isPassive) {
              actionBtnHtml = \`<span class="badge-passive">🛡️ PASSIVA PERMANENTE</span>\`;
            } else {
              actionBtnHtml = \`
                <button type="button" class="btn-toggle-ability \${isActive ? 'on' : 'off'}" onclick="toggleAbility('\${ab.id}')">
                  \${isActive ? '✨ ATIVA (LIGADA)' : '⚡ ATIVAR'}
                </button>
              \`;
            }

            div.innerHTML = \`
              <div class="ability-header-row">
                <strong style="\${isUnlocked ? 'color:#fcd34d;' : 'color:var(--ink-dim);'}">
                  \${isUnlocked ? '✓' : '🔒'} Nível \${ab.level} · \${ab.name} <small style="color:var(--ink-dim); font-weight:normal;">(\${ab.cost || ab.type})</small>
                </strong>
                \${actionBtnHtml}
              </div>
              <span>\${ab.desc}</span>
            \`;
            trailListDiv.appendChild(div);
          });
        }
      }
    }

    // ================= ITENS MÁGICOS & ACESSÓRIOS =================
    function renderMagicItemsSelector() {
      const container = document.getElementById('magic-items-selector');
      if (!container) return;
      container.innerHTML = "";

      MAGIC_ITEMS.forEach(item => {
        const isEquipped = (state.equippedItems || []).includes(item.id);
        const div = document.createElement('label');
        div.style.cssText = \`display:flex; align-items:flex-start; gap:8px; padding:6px 10px; border-radius:6px; border:1px solid \${isEquipped ? 'var(--brass)' : 'var(--border-color)'}; background:\${isEquipped ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.015)'}; cursor:pointer; font-size:0.75rem;\`;
        div.innerHTML = \`
          <input type="checkbox" \${isEquipped ? 'checked' : ''} onchange="toggleEquippedItem('\${item.id}', this.checked)" style="margin-top:2px;">
          <div>
            <strong style="color:\${isEquipped ? 'var(--brass-light)' : 'var(--ink)'}; display:block;">\${item.name} <small style="color:var(--ink-dim);">(\${item.cat})</small></strong>
            <span style="color:var(--ink-dim); font-size:0.7rem; line-height:1.3; display:block;">\${item.desc}</span>
          </div>
        \`;
        container.appendChild(div);
      });

      const countEl = document.getElementById('equipped-items-count');
      if (countEl) countEl.textContent = \`\${(state.equippedItems || []).length} equipados\`;
    }

    window.toggleEquippedItem = function(itemId, isEquipped) {
      if (!state.equippedItems) state.equippedItems = [];
      if (isEquipped) {
        if (!state.equippedItems.includes(itemId)) state.equippedItems.push(itemId);
      } else {
        state.equippedItems = state.equippedItems.filter(id => id !== itemId);
      }
      calcularEAtualizar();
      syncWithTable();
    };

    // ================= ROLAGEM DE COLAPSO =================
    function rollColapsoRandomly() {
      const btn = document.getElementById('btn-roll-colapso');
      const select = document.getElementById('char-colapso');
      btn.disabled = true;

      let counter = 0;
      const interval = setInterval(() => {
        const randId = Math.floor(Math.random() * 20) + 1;
        select.value = randId;
        counter++;
        if (counter > 12) {
          clearInterval(interval);
          btn.disabled = false;
          
          const finalRoll = Math.floor(Math.random() * 20) + 1;
          select.value = finalRoll;
          state.colapsoId = finalRoll;
          calcularEAtualizar();
          
          const col = COLAPSOS.find(c => c.id === finalRoll);
          showDiceToast(\`🎲 1d20 rolou: <strong>\${finalRoll}</strong>!<br>Fardo de Colapso: <strong>\${col.name}</strong>\`);
          syncWithTable();
        }
      }, 60);
    }

    // ================= ARMAMENTOS DINÂMICOS & VA FIXO =================
    function renderWeaponsList() {
      const tbody = document.getElementById('weapons-list-rows');
      tbody.innerHTML = "";

      if (state.weapons.length === 0) {
        tbody.innerHTML = \`<tr><td colspan="7" style="text-align:center; color:var(--ink-dim); padding:10px;">Nenhum armamento registrado. Use ➕ Adicionar Arma</td></tr>\`;
        return;
      }

      state.weapons.forEach((w, index) => {
        const vaCalc = getWeaponVa(w);

        const row = document.createElement('tr');
        row.innerHTML = \`
          <td>
            <input type="text" value="\${w.name}" onchange="updateWeapon(\${index}, 'name', this.value)" style="min-width:110px;" \${state.is_locked ? 'disabled' : ''}>
          </td>
          <td>
            <select onchange="updateWeapon(\${index}, 'type', this.value)" \${state.is_locked ? 'disabled' : ''}>
              <option value="fogo" \${w.type === 'fogo' ? 'selected' : ''}>Fogo</option>
              <option value="melee" \${w.type === 'melee' ? 'selected' : ''}>Melee</option>
            </select>
          </td>
          <td style="text-align:center;">
            <span class="fixed-va-badge" title="Valor Fixo de Ataque (substitui teste de acerto d20)">VA \${vaCalc}</span>
          </td>
          <td>
            <input type="text" value="\${w.damage}" onchange="updateWeapon(\${index}, 'damage', this.value)" style="text-align:center; width:60px;" \${state.is_locked ? 'disabled' : ''}>
          </td>
          <td>
            <input type="text" value="\${w.crit}" onchange="updateWeapon(\${index}, 'crit', this.value)" style="text-align:center; width:55px;" \${state.is_locked ? 'disabled' : ''}>
          </td>
          <td>
            <input type="text" value="\${w.range}" onchange="updateWeapon(\${index}, 'range', this.value)" style="text-align:center; width:55px;" \${state.is_locked ? 'disabled' : ''}>
          </td>
          <td style="text-align:center; white-space:nowrap;">
            <button type="button" class="btn-roll-damage" title="Rolar Dano Normal" onclick="rollWeaponDamage(\${index}, false)">💥 Dano</button>
            <button type="button" class="btn-roll-damage" title="Rolar Dano Crítico (Dados Dobrados)" onclick="rollWeaponDamage(\${index}, true)" style="background:rgba(245,158,11,0.15); border-color:var(--brass); color:var(--brass-light);">⚡ Crítico</button>
            <button type="button" class="btn-delete-weapon" title="Excluir Arma" onclick="deleteWeaponRow(\${index})" \${state.is_locked ? 'disabled' : ''} style="background:transparent; border:none; color:var(--danger); cursor:pointer; font-size:0.85rem; margin-left:4px;">🗑️</button>
          </td>
        \`;
        tbody.appendChild(row);
      });
    }

    function getWeaponVa(w) {
      const activeBuffs = calculateActiveBuffs();
      const itemBuffs = calculateItemBuffs();
      const extraVa = (activeBuffs.va || 0) + (itemBuffs.va || 0);

      if (w.type === 'fogo') {
        const focVal = state.attributes.FOC || 0;
        return 10 + focVal + (w.vaBonus || 0) + extraVa;
      } else {
        const forVal = state.attributes.FOR || 0;
        const brigaTrained = state.trainedSkills.includes('Briga/Corpo a Corpo');
        const originSkill = getOriginGrantedSkill();
        let brigaBonus = brigaTrained ? 2 : 0;
        if (originSkill === 'Briga/Corpo a Corpo' && brigaTrained) brigaBonus = 4;
        return 10 + forVal + brigaBonus + (w.vaBonus || 0) + extraVa;
      }
    }

    window.rollWeaponDamage = function(index, isCrit = false) {
      const w = state.weapons[index];
      if (!w) return;

      const match = String(w.damage).match(/(\\d+)d(\\d+)(?:\\+(\\d+))?/i);
      let totalDamage = 0;
      let rolls = [];
      let bonusFixed = 0;

      if (match) {
        let numDice = parseInt(match[1], 10);
        const diceSides = parseInt(match[2], 10);
        bonusFixed = match[3] ? parseInt(match[3], 10) : 0;

        if (isCrit) numDice *= 2;

        for (let i = 0; i < numDice; i++) {
          const r = Math.floor(Math.random() * diceSides) + 1;
          rolls.push(r);
          totalDamage += r;
        }
        totalDamage += bonusFixed;
      } else {
        totalDamage = parseInt(w.damage, 10) || 1;
      }

      const fixedVa = getWeaponVa(w);
      const critText = isCrit ? " ⚡ [CRÍTICO!]" : "";

      const toastMsg = \`💥 <strong>\${w.name}\${critText}</strong><br>\` +
        \`Dano Rolado: <strong style="font-size:1.2rem; color:#ef4444;">\${totalDamage}</strong> [Dados: \${rolls.join(' + ')}\${bonusFixed ? ' + ' + bonusFixed : ''}]<br>\` +
        \`<small style="color:var(--ink-dim);">VA Fixo: <strong>\${fixedVa}</strong> (vs Defesa do alvo) · Margem: \${w.crit}</small>\`;

      showDiceToast(toastMsg);

      // Transmissão para a Sala do Mestre
      if (window.FerroArcanoNetwork && state.room_code) {
        window.FerroArcanoNetwork.broadcast('ROLL_LOG', {
          kind: isCrit ? 'damage' : 'damage',
          playerName: state.name || 'Agente',
          message: \`💥 <strong>\${state.name}</strong> atacou com <strong>\${w.name}</strong> (VA Fixo \${fixedVa}) causando <strong>\${totalDamage} de Dano\${critText}</strong> [\${rolls.join('+')}]\`
        });
      }
    };

    function addWeaponRow() {
      if (state.is_locked) return;
      const preset = WEAPON_PRESETS[state.weapons.length % WEAPON_PRESETS.length];
      state.weapons.push({
        name: preset.name,
        type: preset.type,
        damage: preset.damage,
        crit: preset.crit,
        range: preset.range,
        ammo: preset.ammo,
        recoil: preset.recoil,
        failure: preset.failure,
        vaBonus: preset.vaBonus
      });
      calcularEAtualizar();
    }

    function updateWeapon(index, field, value) {
      if (state.weapons[index]) {
        state.weapons[index][field] = value;
        calcularEAtualizar();
      }
    }

    function deleteWeaponRow(index) {
      if (state.is_locked) return;
      state.weapons.splice(index, 1);
      calcularEAtualizar();
    }

    // ================= CÁLCULO GERAL E ATUALIZAÇÃO =================
    function calcularEAtualizar() {
      const cls = CLASSES[state.classId] || CLASSES.atirador;
      const org = ORIGENS.find(o => o.id === state.originId);

      // 1. Sincronizar inputs
      document.getElementById('char-name').value = state.name;
      document.getElementById('char-level').value = state.level;
      document.getElementById('char-concept').value = state.concept;
      if (document.getElementById('char-corp')) document.getElementById('char-corp').value = state.corpId || 'bravia';
      document.getElementById('char-class').value = state.classId;
      document.getElementById('char-origin').value = state.originId;
      document.getElementById('char-colapso').value = state.colapsoId;
      document.getElementById('char-avatar-url').value = state.avatarUrl;
      document.getElementById('char-armor').value = \`\${state.armorVal},\${state.armorRd}\`;
      document.getElementById('char-shield').value = state.shieldVal;
      document.getElementById('char-items').value = state.items;
      updateAvatarPreview();

      // 2. Trava da Ficha (se vinculado à mesa e bloqueado)
      applyLockStateToForm();

      // 3. Orçamento de Atributos
      const budget = getBudgetPoints(state.level);
      const spent = getSpentPoints();
      const budgetLabel = document.getElementById('attr-budget-label');
      budgetLabel.textContent = \`\${spent} / \${budget} Pontos de Atributos\`;
      budgetLabel.style.color = (spent > budget) ? "var(--danger)" : "var(--brass)";

      Object.keys(state.attributes).forEach(k => {
        document.getElementById(\`v-attr-\${k}\`).textContent = state.attributes[k];
      });

      // 4. Perícias, Origem, Habilidades e Itens Mágicos
      validateAndSetMandatorySkill();
      updateOriginSkillChoiceGroup();
      renderSkillsSelector();
      renderAbilitiesAndTrail();
      renderMagicItemsSelector();

      // 5. Modificadores Ativos (Buffs de Habilidades e Itens)
      const activeBuffs = calculateActiveBuffs();
      const itemBuffs = calculateItemBuffs();

      const conVal = state.attributes.CON || 0;
      const conhVal = state.attributes.CONH || 0;
      const focVal = state.attributes.FOC || 0;
      const forVal = state.attributes.FOR || 0;
      const refVal = state.attributes.REF || 0;

      // PV Máximo
      const pvMax = cls.basePv + (conVal * cls.conMultiplier) + (state.level - 1) * (cls.pvGrowth + conVal);
      // Exaustão Máxima + bônus de itens
      const exMax = (conVal * 15) + (conhVal * 10) + (itemBuffs.maxExBonus || 0);

      // Defesa = 10 + CON + Armadura + Escudo + Buffs
      const defTotal = 10 + conVal + state.armorVal + state.shieldVal + (activeBuffs.defense || 0) + (itemBuffs.defense || 0);

      // RD Física e RD Mágica
      const rdFisicaTotal = state.armorRd + (activeBuffs.rd || 0) + (itemBuffs.rd || 0);
      const rdMagicaTotal = (activeBuffs.rdMagica || 0) + (itemBuffs.rdMagica || 0);

      // Esquiva Ativa = d20 + REF + bônus de perícia + buffs
      const esquivaTrained = state.trainedSkills.includes('Esquiva');
      const originGranted = getOriginGrantedSkill();
      let esquivaBonus = esquivaTrained ? 2 : 0;
      if (originGranted === 'Esquiva' && esquivaTrained) esquivaBonus = 4;
      const totalEsquivaMod = refVal + esquivaBonus + (activeBuffs.esquiva || 0) + (itemBuffs.esquiva || 0);

      // Carga Máxima = 5 + FOR * 2
      const cargaMax = 5 + (forVal * 2);

      // Recurso
      let resourceVal = cls.resourceBase;
      if (cls.resourceAttr) resourceVal += state.attributes[cls.resourceAttr] || 0;

      // Ajuste de PV e Exaustão atuais
      if (state.currentPv === undefined || state.currentPv === null) state.currentPv = pvMax;
      if (state.currentPv > pvMax) state.currentPv = pvMax;

      if (state.currentExaustao === undefined || state.currentExaustao === null) state.currentExaustao = exMax;
      if (state.currentExaustao > exMax) state.currentExaustao = exMax;

      // 6. Atualizar Preview Lateral
      document.getElementById('p-char-name').textContent = state.name || "Personagem sem Nome";
      document.getElementById('p-char-class').textContent = cls.name;
      document.getElementById('p-char-level').textContent = state.level;
      document.getElementById('p-char-origin').textContent = org ? org.name : "Nenhuma";
      document.getElementById('p-char-concept').textContent = state.concept ? \`"\${state.concept}"\` : "Conceito do Agente";
      document.getElementById('class-resource-tag').textContent = \`Recurso: \${cls.resourceName}\`;

      const currentCorp = CORPORATIONS.find(c => c.id === (state.corpId || 'bravia')) || CORPORATIONS[0];
      const corpTitleEl = document.getElementById('char-corp-title');
      if (corpTitleEl) corpTitleEl.textContent = \`\${currentCorp.flag} \${currentCorp.name} (\${currentCorp.country}) · Inteligência \${currentCorp.agency}\`;
      const corpDetailEl = document.getElementById('char-corp-detail');
      if (corpDetailEl) corpDetailEl.textContent = \`\${currentCorp.spec} · "\${currentCorp.motto}"\`;
      const pCorpBadge = document.getElementById('p-char-corp-badge');
      if (pCorpBadge) pCorpBadge.textContent = \`\${currentCorp.flag} \${currentCorp.name} · \${currentCorp.agency}\`;
      const pCorpMotto = document.getElementById('p-char-corp-motto');
      if (pCorpMotto) pCorpMotto.textContent = \`"\${currentCorp.motto}"\`;

      document.getElementById('p-vital-pv').textContent = \`\${state.currentPv} / \${pvMax}\`;
      document.getElementById('p-bar-pv-fill').style.width = \`\${Math.max(0, Math.min(100, (state.currentPv / pvMax) * 100))}%\`;

      const isSobrecarga = state.currentExaustao < 0;
      document.getElementById('p-vital-ex').textContent = isSobrecarga 
        ? \`\${state.currentExaustao} / \${exMax} (⚠️ Sobrecarga)\` 
        : \`\${state.currentExaustao} / \${exMax}\`;
      const exBarFill = document.getElementById('p-bar-ex-fill');
      if (isSobrecarga) {
        exBarFill.style.width = '100%';
        exBarFill.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
      } else {
        exBarFill.style.width = \`\${Math.max(0, Math.min(100, (state.currentExaustao / exMax) * 100))}%\`;
        exBarFill.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
      }

      document.getElementById('p-stat-defense').textContent = defTotal;
      document.getElementById('p-stat-rd').textContent = rdFisicaTotal;
      document.getElementById('p-stat-rd-mag').textContent = rdMagicaTotal;
      document.getElementById('p-stat-dodge').textContent = \`d20+\${totalEsquivaMod}\`;
      document.getElementById('p-resource-name').textContent = cls.resourceName.replace('Pontos de ', 'Pts. ');
      document.getElementById('p-resource-val').textContent = resourceVal;
      document.getElementById('carga-label').textContent = \`\${cargaMax} Slots Máximos\`;

      // 7. Preview de Habilidades Ativas
      renderActivePowersPreview(activeBuffs, itemBuffs);

      // 8. Impacto no Minigame
      let focTimeBonus = focVal * 1.5 + (activeBuffs.minigameExtraTime || 0) + (itemBuffs.minigameExtraTime || 0);
      if (state.colapsoId === 11) {
        focTimeBonus = state.colapsoSeverity === 'simples' ? (focVal * 1.0) : 0;
      }
      let extraText = \`+\${focTimeBonus.toFixed(1)}s no tempo inicial de conjuração\`;
      if (state.colapsoId === 2) extraText += " (–1,5s Necrose)";
      if (itemBuffs.minigameErrorIgnore || activeBuffs.minigameErrorIgnore) extraText += " · 🛡️ Anel/Fluxo ativo";
      document.getElementById('p-minigame-time').textContent = extraText;

      // 9. Colapso Card Preview
      const col = COLAPSOS.find(c => c.id === state.colapsoId);
      const colCard = document.getElementById('p-collapse-card');
      const colTitle = document.getElementById('colapso-effect-title');
      const colDesc = document.getElementById('colapso-effect-desc');
      const pColTitle = document.getElementById('p-collapse-title');
      const pColDesc = document.getElementById('p-collapse-desc');

      if (col && col.id > 0) {
        const descText = state.colapsoSeverity === 'simples' ? col.simples : col.critica;
        const titleText = \`⚠️ \${col.name} (\${state.colapsoSeverity === 'simples' ? 'Simples' : 'Crítica'})\`;
        colTitle.textContent = titleText; colDesc.textContent = descText;
        pColTitle.textContent = titleText; pColDesc.textContent = descText;
        colCard.style.display = "block";
      } else {
        colTitle.textContent = "Estado Normal"; colDesc.textContent = "Nenhum colapso ativo no momento.";
        colCard.style.display = "none";
      }

      // 10. Perícias no Preview
      renderPreviewSkillsList();

      // 11. Armamentos (com VA fixo)
      renderWeaponsList();

      // 12. Salva e Sincroniza
      salvarFicha();
    }

    function renderActivePowersPreview(activeBuffs, itemBuffs) {
      const card = document.getElementById('p-active-powers-card');
      const summary = document.getElementById('p-active-buffs-summary');
      const chips = document.getElementById('p-active-powers-chips');

      const parts = [];
      const totalVa = (activeBuffs.va || 0) + (itemBuffs.va || 0);
      const totalDef = (activeBuffs.defense || 0) + (itemBuffs.defense || 0);
      const totalRd = (activeBuffs.rd || 0) + (itemBuffs.rd || 0);
      const totalEsq = (activeBuffs.esquiva || 0) + (itemBuffs.esquiva || 0);

      if (totalVa) parts.push(\`+\${totalVa} VA\`);
      if (totalDef) parts.push(\`+\${totalDef} Def\`);
      if (totalRd) parts.push(\`+\${totalRd} RD\`);
      if (totalEsq) parts.push(\`+\${totalEsq} Esq\`);

      summary.textContent = parts.length ? parts.join(' · ') : 'Nenhum buff ativo';

      if (!state.activeAbilities || state.activeAbilities.length === 0) {
        chips.innerHTML = '<span style="font-size:0.72rem; color:var(--ink-dim);">Nenhuma postura/efeito ativado no turno.</span>';
        return;
      }

      const cls = CLASSES[state.classId];
      const classTrails = TRAILS[state.classId] || [];
      const tr = classTrails.find(t => t.id === state.trailId);

      chips.innerHTML = state.activeAbilities.map(abId => {
        let name = abId;
        const p = cls.powers.find(x => x.id === abId);
        if (p) name = p.name;
        else if (tr) {
          const ab = tr.abilities.find(x => x.id === abId);
          if (ab) name = ab.name;
        }
        return \`
          <span class="power-chip">
            <span>✨ \${name}</span>
            <button type="button" title="Desativar efeito" onclick="toggleAbility('\${abId}')">✕</button>
          </span>
        \`;
      }).join('');
    }

    function applyLockStateToForm() {
      const isLocked = state.is_locked === true;
      const banner = document.getElementById('sheet-locked-banner');
      if (banner) {
        banner.style.display = isLocked ? 'flex' : 'none';
        document.getElementById('banner-room-code').textContent = state.room_code || 'FA-7842';
      }

      // Desabilita campos estruturais se bloqueado
      ['char-name', 'char-level', 'char-concept', 'char-class', 'char-origin', 'char-origin-skill-choice', 'char-trail', 'char-corp'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.disabled = isLocked;
      });

      document.querySelectorAll('.attr-btns button').forEach(b => b.disabled = isLocked);
      const resetBtn = document.getElementById('btn-reset-sheet');
      if (resetBtn) resetBtn.disabled = isLocked;
    }

    function renderPreviewSkillsList() {
      const container = document.getElementById('p-skills-list');
      container.innerHTML = "";
      const cls = CLASSES[state.classId] || CLASSES.atirador;
      const originGranted = getOriginGrantedSkill();

      SKILLS_LIST.forEach(s => {
        const attrVal = state.attributes[s.attr] || 0;
        const isMandatory = s.name === cls.mandatorySkill;
        const isTrained = state.trainedSkills.includes(s.name) || isMandatory;
        const isOrigin = s.name === originGranted;

        let bonus = 0;
        let specialized = false;

        if (isTrained) bonus += 2;
        if (isOrigin) {
          if (isTrained) {
            specialized = true;
            bonus = 4;
          } else {
            bonus += 2;
          }
        }

        const total = attrVal + bonus;
        const row = document.createElement('div');
        row.className = \`preview-skill-row \${specialized ? 'specialized' : (bonus > 0 ? 'trained' : '')}\`;
        
        let tag = "";
        if (specialized) tag = " 🟪";
        else if (isMandatory) tag = " 🟧";
        else if (bonus > 0) tag = " 🟩";

        row.innerHTML = \`
          <span>\${s.name}\${tag}</span>
          <strong>+\${total}</strong>
        \`;
        container.appendChild(row);
      });
    }

    // ================= DESCANSOS =================
    function actionDescansoCurto() {
      const cls = CLASSES[state.classId];
      const conVal = state.attributes.CON || 0;
      const conhVal = state.attributes.CONH || 0;
      const pvMax = cls.basePv + (conVal * cls.conMultiplier) + (state.level - 1) * (cls.pvGrowth + conVal);
      const exMax = (conVal * 15) + (conhVal * 10);

      let exRecovery = 20;
      if (state.colapsoId === 13) {
        exRecovery = state.colapsoSeverity === 'simples' ? 10 : 5;
      }

      state.currentExaustao = Math.min(exMax, state.currentExaustao + exRecovery);
      const rollHp = Math.floor(Math.random() * 10) + 1;
      const totalHeal = rollHp + conVal;
      state.currentPv = Math.min(pvMax, state.currentPv + Math.max(1, totalHeal));

      calcularEAtualizar();
      syncWithTable();
      showDiceToast(\`🩹 <strong>Descanso Curto (30 min):</strong><br>+ \${exRecovery} Exaustão · Curou 1d10+CON (\${rollHp}+\${conVal} = <strong>\${totalHeal} PV</strong>).\`);
    }

    function actionDescansoCompleto() {
      const cls = CLASSES[state.classId];
      const conVal = state.attributes.CON || 0;
      const conhVal = state.attributes.CONH || 0;
      const pvMax = cls.basePv + (conVal * cls.conMultiplier) + (state.level - 1) * (cls.pvGrowth + conVal);
      const exMax = (conVal * 15) + (conhVal * 10);

      state.currentPv = pvMax;
      state.currentExaustao = exMax;

      let colText = "";
      if (state.colapsoId > 0) {
        state.colapsoId = 0;
        colText = "<br>✨ O fardo de Colapso Arcano foi dissipado!";
      }

      calcularEAtualizar();
      syncWithTable();
      showDiceToast(\`🏕️ <strong>Descanso Completo (8 horas):</strong><br>PV e Exaustão restaurados ao máximo!\${colText}\`);
    }

    // ================= SINCRONIZAÇÃO EM TEMPO REAL =================
    function initNetworkSync() {
      if (state.room_code) {
        window.FerroArcanoNetwork.init(state.room_code, 'player', state.id);
        bindNetworkListeners();
        document.getElementById('topbar-room-label').textContent = \`Conectado (\${state.room_code})\`;
      }
    }

    function bindNetworkListeners() {
      // Ouve alterações feitas pelo mestre sobre o jogador
      window.FerroArcanoNetwork.on('GM_UPDATE_PLAYER', (payload) => {
        if (!payload || payload.playerId !== state.id) return;
        if (payload.currentPv !== undefined) state.currentPv = payload.currentPv;
        if (payload.currentExaustao !== undefined) state.currentExaustao = payload.currentExaustao;
        if (payload.colapsoId !== undefined) state.colapsoId = payload.colapsoId;
        calcularEAtualizar();
        showDiceToast("🎲 <strong>Mestre atualizou seu personagem:</strong> Alterações aplicadas em tempo real.");
      });

      // Ouve trava/destrava da ficha pelo mestre
      window.FerroArcanoNetwork.on('GM_LOCK_TOGGLE', (payload) => {
        if (!payload || payload.playerId !== state.id) return;
        state.is_locked = payload.is_locked;
        calcularEAtualizar();
        showDiceToast(\`🔒 Sua ficha foi <strong>\${state.is_locked ? 'TRAVADA' : 'LIBERADA'}</strong> pelo Mestre.\`);
      });

      // Sincronização inicial respondida pelo mestre
      window.FerroArcanoNetwork.on('ROOM_SYNC', (payload) => {
        if (payload && payload.player && payload.player.id === state.id) {
          if (payload.player.is_locked !== undefined) {
            state.is_locked = payload.player.is_locked;
            calcularEAtualizar();
          }
        }
      });
    }

    function syncWithTable() {
      if (!state.room_code || !window.FerroArcanoNetwork) return;

      const cls = CLASSES[state.classId] || CLASSES.atirador;
      const conVal = state.attributes.CON || 0;
      const conhVal = state.attributes.CONH || 0;
      const pvMax = cls.basePv + (conVal * cls.conMultiplier) + (state.level - 1) * (cls.pvGrowth + conVal);
      const exMax = (conVal * 15) + (conhVal * 10);
      const defTotal = 10 + conVal + state.armorVal + state.shieldVal;

      const activeListNames = (state.activeAbilities || []).map(abId => {
        const p = cls.powers.find(x => x.id === abId);
        if (p) return p.name;
        if (state.trailId) {
          const trails = TRAILS[state.classId] || [];
          const tr = trails.find(t => t.id === state.trailId);
          const ab = tr ? tr.abilities.find(x => x.id === abId) : null;
          if (ab) return ab.name;
        }
        return abId;
      });

      const weaponsSnapshot = (state.weapons || []).map(w => ({
        name: w.name,
        type: w.type,
        damage: w.damage,
        crit: w.crit,
        fixedVa: getWeaponVa(w)
      }));

      const snapshot = {
        id: state.id,
        name: state.name || "Agente",
        level: state.level,
        classId: state.classId,
        trailName: state.trailId ? (TRAILS[state.classId]?.find(t => t.id === state.trailId)?.name || "") : "",
        corpId: state.corpId || "bravia",
        avatarUrl: state.avatarUrl,
        pvMax,
        currentPv: state.currentPv,
        exMax,
        currentExaustao: state.currentExaustao,
        defenseTotal: defTotal,
        colapsoId: state.colapsoId,
        colapsoSeverity: state.colapsoSeverity,
        activeAbilities: activeListNames,
        weapons: weaponsSnapshot,
        is_locked: state.is_locked
      };

      window.FerroArcanoNetwork.broadcast('PLAYER_UPDATE', snapshot);
    }

    function openRoomModal() {
      const modal = document.getElementById('room-modal');
      const input = document.getElementById('input-room-code');
      input.value = state.room_code || 'FA-7842';
      modal.classList.add('open');
      input.focus();
    }

    window.closeRoomModal = function() {
      document.getElementById('room-modal').classList.remove('open');
    };

    window.conectarMesa = function() {
      const input = document.getElementById('input-room-code');
      const code = (input.value || '').trim().toUpperCase();
      if (!code) return alert("Digite o código da sala!");

      state.room_code = code;
      state.is_locked = true; // Trava automaticamente ao entrar na sala do mestre
      salvarFicha();

      window.FerroArcanoNetwork.init(code, 'player', state.id);
      bindNetworkListeners();

      // Envia evento de entrada para o Mestre
      syncWithTable();
      window.FerroArcanoNetwork.broadcast('PLAYER_JOIN', {
        id: state.id,
        name: state.name,
        classId: state.classId,
        level: state.level,
        corpId: state.corpId,
        currentPv: state.currentPv,
        currentExaustao: state.currentExaustao,
        is_locked: true
      });

      closeRoomModal();
      document.getElementById('topbar-room-label').textContent = \`Conectado (\${code})\`;
      calcularEAtualizar();
      showDiceToast(\`🎲 <strong>Conectado à Mesa \${code}!</strong><br>Sua ficha agora está sincronizada e pronta para a sessão.\`);
    };

    window.desconectarMesa = function() {
      if (confirm("Deseja se desconectar da sala do Mestre? A trava da ficha será liberada.")) {
        state.room_code = "";
        state.is_locked = false;
        salvarFicha();
        document.getElementById('topbar-room-label').textContent = 'Entrar em Sala';
        calcularEAtualizar();
        showDiceToast("🔌 Desconectado da mesa virtual.");
      }
    };

    // ================= SALVAMENTO & TOAST =================
    function salvarFicha(manual = false) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      syncWithTable();
      if (manual) {
        showDiceToast("💾 <strong>Ficha Salva com Sucesso!</strong><br>Dados sincronizados com o Minijogo e Mesa Virtual.");
      }
    }

    function carregarFicha() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          state = Object.assign({}, state, parsed);
          if (!state.activeAbilities) state.activeAbilities = [];
          if (!state.equippedItems) state.equippedItems = ["varinha_foco", "mira_red_dot"];
        } catch (e) {
          console.error("Erro ao carregar dados salvos:", e);
        }
      }
    }

    function limparFicha() {
      if (confirm("⚠️ Deseja resetar a ficha aos valores padrão?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    }

    function showDiceToast(html) {
      const toast = document.getElementById('diceToast');
      const content = document.getElementById('diceToastContent');
      content.innerHTML = html;
      toast.style.display = 'flex';
      setTimeout(() => { toast.style.display = 'none'; }, 4000);
    }

    function exportarFichaImpressao() {
      window.print();
    }
  </script>
</body>
</html>`;

fs.writeFileSync(targetPath, newHtml, 'utf8');
console.log('Ficha atualizada com sucesso! Tamanho:', newHtml.length);
