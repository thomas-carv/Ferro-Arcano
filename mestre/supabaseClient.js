/**
 * Ferro & Arcano — Sincronizador de Mesa Virtual (Dual-Mode: Supabase Realtime + BroadcastChannel)
 * Permite conexão entre a Tela do Mestre e as Fichas dos Jogadores em tempo real.
 */
(() => {
  'use strict';

  const STORAGE_CONFIG_KEY = 'ferro_arcano_supabase_config';
  const DEFAULT_ROOM = 'FA-7842';

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
      if (!msg || !msg.type) return;
      // Evitar loop de mensagens enviadas por nós mesmos
      if (msg.senderId === this.characterId && msg.senderRole === this.role) return;

      this.notifyListeners(msg.type, msg.payload, source);
    }

    broadcast(type, payload = {}) {
      const msg = {
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
