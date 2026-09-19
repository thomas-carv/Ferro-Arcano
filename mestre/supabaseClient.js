/**
 * Ferro & Arcano — Sincronizador de Mesa Virtual (Dual-Mode: Supabase Realtime + BroadcastChannel)
 * Permite conexão entre a Tela do Mestre e as Fichas dos Jogadores em tempo real.
 */
(() => {
  'use strict';

  const STORAGE_CONFIG_KEY = 'ferro_arcano_supabase_config';
  const DEFAULT_ROOM = 'FA-7842';
  const ALLOWED_EVENTS = new Set(['PLAYER_JOIN', 'PLAYER_UPDATE', 'ROLL_LOG', 'ACTION_LOG', 'ALLIED_BUFF_APPLIED', 'SQUAD_ROSTER', 'ROOM_SYNC', 'ROOM_SYNC_REQUEST', 'GM_UPDATE_PLAYER', 'GM_LOCK_TOGGLE', 'ROUND_STARTED']);

  class FerroArcanoNetworkManager {
    constructor() {
      this.roomCode = '';
      this.role = 'player'; // 'gm' ou 'player'
      this.characterId = '';
      this.listeners = [];
      this.bc = null;
      this.supabase = null;
      this.supabaseChannel = null;
      this.supabaseReady = false;
      this.pendingSupabaseMessages = [];
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
      const nextRoomCode = String(roomCode || DEFAULT_ROOM).trim().toUpperCase();
      if (this.roomCode && this.roomCode !== nextRoomCode) {
        this.pendingSupabaseMessages = [];
        this.seenMessages.clear();
      }
      this.roomCode = nextRoomCode;
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
      this.supabaseReady = false;
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
          const channel = this.supabase.channel('room_' + roomCode, {
            config: {
              broadcast: { ack: true },
              presence: { key: `${this.role}:${this.characterId}` }
            }
          });
          this.supabaseChannel = channel;

          channel
            .on('broadcast', { event: 'game_event' }, (payload) => {
              if (payload && payload.payload) {
                this.handleIncomingMessage(payload.payload, 'supabase');
              }
            })
            .on('presence', { event: 'sync' }, () => {
              if (this.supabaseChannel === channel) {
                this.notifyListeners('presence_sync', channel.presenceState(), 'supabase');
              }
            })
            .subscribe(async (status) => {
              if (this.supabaseChannel !== channel) return;
              console.log(`[Supabase Realtime] Status da sala ${roomCode}:`, status);
              this.supabaseReady = status === 'SUBSCRIBED';
              if (this.supabaseReady) {
                try {
                  await channel.track({ role: this.role, characterId: this.characterId, onlineAt: new Date().toISOString() });
                } catch (error) {
                  console.warn('[Supabase Realtime] Não foi possível registrar presença:', error);
                }
                await this.flushSupabaseQueue();
              }
              this.notifyListeners('connection_status', { mode: 'supabase', status });
            });
        } catch (e) {
          console.error('[Supabase Realtime] Erro de inicialização:', e);
        }
      } else {
        this.notifyListeners('connection_status', { mode: 'local_broadcast', status: 'READY' });
      }
    }

    queueSupabaseMessage(msg) {
      if (msg.type === 'PLAYER_UPDATE') {
        const index = this.pendingSupabaseMessages.findIndex(item => item.type === msg.type && item.senderId === msg.senderId);
        if (index >= 0) this.pendingSupabaseMessages.splice(index, 1);
      }
      this.pendingSupabaseMessages.push(msg);
      if (this.pendingSupabaseMessages.length > 100) this.pendingSupabaseMessages.shift();
    }

    async sendSupabaseMessage(msg) {
      if (!this.supabaseChannel || !this.supabaseReady) {
        this.queueSupabaseMessage(msg);
        return false;
      }
      try {
        const status = await this.supabaseChannel.send({ type: 'broadcast', event: 'game_event', payload: msg });
        if (status !== 'ok') {
          this.queueSupabaseMessage(msg);
          console.warn('[Supabase Realtime] Evento não confirmado; será reenviado:', status);
          return false;
        }
        return true;
      } catch (error) {
        this.queueSupabaseMessage(msg);
        console.warn('[Supabase Realtime] Erro ao enviar evento; será reenviado:', error);
        return false;
      }
    }

    async flushSupabaseQueue() {
      if (!this.supabaseReady || !this.supabaseChannel || !this.pendingSupabaseMessages.length) return;
      const queued = this.pendingSupabaseMessages.splice(0);
      for (let index = 0; index < queued.length; index += 1) {
        if (!await this.sendSupabaseMessage(queued[index])) {
          this.pendingSupabaseMessages.push(...queued.slice(index + 1));
          break;
        }
      }
    }

    disconnect() {
      if (this.bc) {
        try { this.bc.close(); } catch (error) {}
      }
      if (this.supabaseChannel && this.supabase) {
        try { this.supabase.removeChannel(this.supabaseChannel); } catch (error) {}
      }
      this.bc = null;
      this.supabaseChannel = null;
      this.supabaseReady = false;
      this.pendingSupabaseMessages = [];
      this.roomCode = '';
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
        this.sendSupabaseMessage(msg);
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
