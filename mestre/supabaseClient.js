/**
 * Ferro & Arcano — Sincronizador de Mesa Virtual (Dual-Mode: Supabase Realtime + BroadcastChannel)
 * Permite conexão entre a Tela do Mestre e as Fichas dos Jogadores em tempo real.
 */
(() => {
  'use strict';

  const STORAGE_CONFIG_KEY = 'ferro_arcano_supabase_config';
  const DEFAULT_ROOM = 'FA-7842';
  const ALLOWED_EVENTS = new Set(['PLAYER_JOIN', 'PLAYER_UPDATE', 'ROLL_LOG', 'ACTION_LOG', 'ALLIED_BUFF_APPLIED', 'SQUAD_ROSTER', 'ROOM_SYNC', 'GM_UPDATE_PLAYER', 'GM_LOCK_TOGGLE', 'ROUND_STARTED']);

  class FerroArcanoNetworkManager {
    constructor() {
      this.roomCode = '';
      this.role = 'player'; // 'gm' ou 'player'
      this.characterId = '';
      this.listeners = [];
      this.bc = null;
      this.supabase = null;
      this.supabaseChannel = null;
      this.config = this.loadConfig();
      this.seenMessages = new Set();
    }

    loadConfig() {
      try {
        const raw = localStorage.getItem(STORAGE_CONFIG_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('Erro ao carregar config Supabase:', e);
      }
      return {
        url: '',
        anonKey: ''
      };
    }

    saveConfig(url, anonKey) {
      this.config = { url: (url || '').trim(), anonKey: (anonKey || '').trim() };
      localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(this.config));
      if (this.roomCode) {
        this.initSupabase(this.roomCode);
      }
    }

    init(roomCode, role = 'player', characterId = '') {
      this.roomCode = (roomCode || DEFAULT_ROOM).toUpperCase();
      this.role = role;
      this.characterId = characterId || ('char_' + Math.random().toString(36).substring(2, 9));

      // 1. BroadcastChannel local (latência zero entre janelas/abas)
      if (this.bc) {
        try { this.bc.close(); } catch (e) {}
      }
      try {
        this.bc = new BroadcastChannel('fa_table_' + this.roomCode);
        this.bc.onmessage = (event) => {
          this.handleIncomingMessage(event.data);
        };
      } catch (e) {
        console.warn('BroadcastChannel não suportado neste navegador:', e);
      }

      // 2. Supabase Realtime (nuvem multi-dispositivo)
      this.initSupabase(this.roomCode);

      console.log(`[FerroArcanoNetwork] Conectado à sala ${this.roomCode} como ${this.role}`);
    }

    initSupabase(roomCode) {
      if (this.supabaseChannel) {
        try {
          if (this.supabase) this.supabase.removeChannel(this.supabaseChannel);
        } catch (e) {}
        this.supabaseChannel = null;
      }

      // Se temos a biblioteca do supabase carregada e chaves configuradas
      if (window.supabase && this.config.url && this.config.anonKey) {
        try {
          this.supabase = window.supabase.createClient(this.config.url, this.config.anonKey);
          this.supabaseChannel = this.supabase.channel('room_' + roomCode);

          this.supabaseChannel
            .on('broadcast', { event: 'game_event' }, (payload) => {
              if (payload && payload.payload) {
                this.handleIncomingMessage(payload.payload, 'supabase');
              }
            })
            .subscribe((status) => {
              console.log(`[Supabase Realtime] Status da sala ${roomCode}:`, status);
              this.notifyListeners('connection_status', { mode: 'supabase', status });
            });
        } catch (e) {
          console.error('[Supabase Realtime] Erro de inicialização:', e);
        }
      } else {
        this.notifyListeners('connection_status', { mode: 'local_broadcast', status: 'READY' });
      }
    }

    handleIncomingMessage(msg, source = 'broadcast') {
      if (!msg || typeof msg !== 'object' || !ALLOWED_EVENTS.has(msg.type)) return;
      if (msg.roomCode !== this.roomCode || !msg.messageId) return;
      if (!msg.payload || typeof msg.payload !== 'object') return;
      if (this.seenMessages.has(msg.messageId)) return;
      this.seenMessages.add(msg.messageId);
      if (this.seenMessages.size > 500) this.seenMessages.delete(this.seenMessages.values().next().value);
      // Evitar loop de mensagens enviadas por nós mesmos
      if (msg.senderId === this.characterId && msg.senderRole === this.role) return;

      this.notifyListeners(msg.type, msg.payload, source);
    }

    broadcast(type, payload = {}) {
      if (!ALLOWED_EVENTS.has(type) || !payload || typeof payload !== 'object') return false;
      const msg = {
        messageId: `${this.characterId}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        roomCode: this.roomCode,
        type,
        senderRole: this.role,
        senderId: this.characterId,
        timestamp: Date.now(),
        payload
      };

      // 1. Envia via BroadcastChannel local
      if (this.bc) {
        try {
          this.bc.postMessage(msg);
        } catch (e) {
          console.warn('Erro ao postar mensagem BC:', e);
        }
      }

      // 2. Envia via Supabase Realtime se conectado
      if (this.supabaseChannel) {
        try {
          this.supabaseChannel.send({
            type: 'broadcast',
            event: 'game_event',
            payload: msg
          });
        } catch (e) {
          console.warn('Erro ao enviar evento Supabase:', e);
        }
      }

      // 3. Fallback de evento no próprio documento
      window.dispatchEvent(new CustomEvent('fa_local_message', { detail: msg }));
      return true;
    }

    on(type, callback) {
      this.listeners.push({ type, callback });
    }

    notifyListeners(type, payload, source = 'local') {
      this.listeners.forEach(l => {
        if (l.type === type || l.type === '*') {
          try {
            l.callback(payload, source, type);
          } catch (err) {
            console.error(`Erro no handler do evento ${type}:`, err);
          }
        }
      });
    }
  }

  window.FerroArcanoNetwork = new FerroArcanoNetworkManager();
})();
