(() => {
'use strict'

    // --- Modal Criar / Entrar Sala ---
    const salaLayer  = document.getElementById('sala-layer');
    const salaClose  = document.getElementById('sala-close');
    const salaBackdrop = document.getElementById('sala-backdrop');
    const tabCriar   = document.getElementById('tab-criar');
    const tabEntrar  = document.getElementById('tab-entrar');
    const painelCriar  = document.getElementById('painel-criar');
    const painelEntrar = document.getElementById('painel-entrar');
    const btnEntrar  = document.getElementById('btn-entrar-sala');
    const salaInput  = document.getElementById('sala-code-input');
    const salaError  = document.getElementById('sala-error');

    const dialog = window.FerroArcanoUI.dialog(salaLayer, closeSalaModal);
    function openSalaModal() {
      dialog.open();
      renderSavedCharacter();
      salaInput.value = '';
      salaError.style.display = 'none';
      switchTab('criar');
    }
    function closeSalaModal() {
      dialog.close();
    }
    function renderSavedCharacter() {
      const summary = document.getElementById('saved-character-summary');
      try {
        const sheet = JSON.parse(localStorage.getItem('ferro_arcano_character') || 'null');
        summary.textContent = sheet && typeof sheet.name === 'string' ? `Ficha atual: ${sheet.name || 'Personagem sem nome'} · Nível ${Number(sheet.level) || 1}` : 'Você poderá criar ou completar sua ficha ao entrar.';
      } catch { summary.textContent = 'Sua ficha poderá ser revisada na próxima tela.'; }
    }
    function switchTab(which) {
      tabCriar.setAttribute('aria-pressed', String(which === 'criar'));
      tabEntrar.setAttribute('aria-pressed', String(which === 'entrar'));
      if (which === 'criar') {
        tabCriar.className  = 'button button-accent';
        tabEntrar.className = 'button button-quiet';
        painelCriar.style.display  = '';
        painelEntrar.style.display = 'none';
      } else {
        tabEntrar.className = 'button button-accent';
        tabCriar.className  = 'button button-quiet';
        painelEntrar.style.display = '';
        painelCriar.style.display  = 'none';
        salaInput.focus();
      }
    }

    // Open triggers
    ['btn-sala-modal', 'btn-sala-modal-hero'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', openSalaModal);
    });

    // Close triggers
    salaClose.addEventListener('click', closeSalaModal);
    salaBackdrop.addEventListener('click', closeSalaModal);

    // Tab switches
    tabCriar.addEventListener('click', () => switchTab('criar'));
    tabEntrar.addEventListener('click', () => switchTab('entrar'));

    // Enter sala action
    btnEntrar.addEventListener('click', () => {
      const code = salaInput.value.trim().toUpperCase();
      if (!/^[A-Z0-9][A-Z0-9-]{2,19}$/.test(code)) { salaError.style.display = ''; return; }
      salaError.style.display = 'none';
      window.location.href = '../minigame/ficha/index.html?room=' + encodeURIComponent(code);
    });
    salaInput.addEventListener('keydown', e => { if (e.key === 'Enter') btnEntrar.click(); });

    // Keyboard close
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && salaLayer.classList.contains('open')) closeSalaModal();
    });

})()
