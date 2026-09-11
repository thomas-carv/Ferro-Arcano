export type AbilityScoreName = 'CON' | 'CONH' | 'FOC' | 'FOR' | 'REF'
export type WeaponKind = 'leve' | 'longa'

export interface ClassDefinition {
  id: string
  name: string
  identity: string
  color: string
  summary: string
  keyAttributes: AbilityScoreName[]
  startingHp: number
  hpPerLevel: number
  resource: string
  resourceMax: (scores: Record<AbilityScoreName, number>) => number
  mandatorySkill: string
  skills: string[]
  suggestion: string
  levels: Record<number, string>
  trailNames: string[]
}

export interface OriginDefinition {
  id: string
  name: string
  general: string
  classManifestations: Record<string, string>
  idea: string
}

export interface Weapon {
  id: string
  name: string
  kind: WeaponKind
  damage: string
  range: number
  ammo: number
  crit: string
  failure: number
  recoil: number
  vaBonus: number
  note?: string
}

export const ATTRIBUTES: Record<AbilityScoreName, {
  label: string
  description: string
  icon: string
}> = {
  CON: { label: 'Constituição', description: 'PV, Fortitude, resistência física e tolerância arcana.', icon: '♥' },
  CONH: { label: 'Conhecimento', description: 'Tecnologia, investigação, medicina, teoria arcana e Exaustão Máxima.', icon: '✦' },
  FOC: { label: 'Foco', description: 'Precisão balística, concentração e execução do minijogo arcano.', icon: '◎' },
  FOR: { label: 'Força', description: 'Combate corpo a corpo, manobras físicas e carga.', icon: '◆' },
  REF: { label: 'Reflexo', description: 'Esquiva, mobilidade, iniciativa e furtividade.', icon: '↯' },
}

export const ATTRIBUTE_COST = [0, 1, 2, 4, 7]
export const STARTING_POINTS = 10
export const CREATION_MAX_ATTRIBUTE = 4

export const CLASSES: ClassDefinition[] = [
  {
    id: 'atirador',
    name: 'Atirador',
    identity: 'Distância • Precisão • Controle Balístico',
    color: 'amber',
    summary: 'Especialista em combate à distância, controle de linhas de tiro e pressão balística.',
    keyAttributes: ['FOC', 'REF'],
    startingHp: 28, hpPerLevel: 4, resource: 'Pontos de Precisão',
    resourceMax: s => 3 + s.FOC,
    mandatorySkill: 'Armas de Fogo',
    skills: ['Percepção/Prontidão', 'Furtividade', 'Pilotagem', 'Intuição', 'Prestidigitação'],
    suggestion: 'FOC aumenta diretamente o VA de armas de fogo. REF ajuda a sobreviver e se reposicionar.',
    levels: {
      1: 'Pontos de Precisão + Olho Clínico', 2: 'Mira Estável', 3: 'Disparo Rápido',
      4: 'Ajuste de Balística', 5: 'Cadência Operacional', 6: 'Respiro Tático',
      7: 'Disparo de Penetração', 8: 'Fogo de Supressão', 9: 'Postura do Caçador', 10: 'Mestria Balística'
    },
    trailNames: ['Franco-Atirador', 'Pistoleiro Tático', 'Caçador Arcano']
  },
  {
    id: 'canalizador',
    name: 'Canalizador',
    identity: 'Conjuração • Controle • Manipulação Arcana',
    color: 'sky',
    summary: 'Converte teoria e sintonia arcana em conjurações, barreiras e controle do campo.',
    keyAttributes: ['CONH', 'CON'],
    startingHp: 24, hpPerLevel: 3, resource: 'Pontos de Sintonia',
    resourceMax: s => 3 + s.CONH,
    mandatorySkill: 'Sintonia Arcana',
    skills: ['Simbologia & Runas', 'História Arcana', 'Tecnologia & Sistemas', 'Medicina de Combate', 'Investigação'],
    suggestion: 'CONH alimenta a Sintonia e amplia a capacidade de lidar com magia; CON melhora sua sustentação.',
    levels: {
      1: 'Ajuste Fino + Fluxo Contínuo', 2: 'Mente Expandida', 3: 'Emanação Rúnica de Repulsão',
      4: 'Barreira de Éter', 5: 'Sintonia Rúnica', 6: 'Recalibração Mental',
      7: 'Foco de Concentração Extrema', 8: 'Modulação de Amplitude', 9: 'Mente Inviolável', 10: 'Domínio da Ruptura Arcana'
    },
    trailNames: ['Arcanista Elemental', 'Manipulador Espacial', 'Taumaturgo de Sobrecarga']
  },
  {
    id: 'hibrido',
    name: 'Híbrido',
    identity: 'Tecnologia • Arcano • Flexibilidade',
    color: 'violet',
    summary: 'Une tecnologia e arcano para alternar entre tiro, combate próximo e suporte técnico.',
    keyAttributes: ['CONH', 'FOC'],
    startingHp: 30, hpPerLevel: 4, resource: 'Cargas do Núcleo',
    resourceMax: _s => 3,
    mandatorySkill: 'Armas de Fogo',
    skills: ['Tecnologia & Sistemas', 'Briga/Corpo a Corpo', 'Sintonia Arcana', 'Medicina de Combate', 'Atletismo'],
    suggestion: 'CONH sustenta a parte tecnológica/arcana; FOC mantém sua precisão e concentração.',
    levels: {
      1: 'Munição Encantada + Sintonia Tecno-Mágica', 2: 'Adaptabilidade de Sistemas', 3: 'Golpe Arcano-Infuso',
      4: 'Sobrecarga do Núcleo', 5: 'Malha de Tecido Rúnico', 6: 'Recarga Sincronizada',
      7: 'Emissão de Campo Estático', 8: 'Reciclagem de Energia', 9: 'Injeção de Éter Medicinal', 10: 'Síntese Absoluta do Ferro & Arcano'
    },
    trailNames: ['Engenheiro Arcano', 'Lâmina/Gatilho Rúnico', 'Infiltrador']
  },
  {
    id: 'vanguardista',
    name: 'Vanguardista',
    identity: 'Linha de frente • Proteção • Absorção',
    color: 'red',
    summary: 'A linha de frente. Aguenta pressão, protege aliados e converte impacto em resposta.',
    keyAttributes: ['CON', 'FOR'],
    startingHp: 36, hpPerLevel: 5, resource: 'Inflexibilidade',
    resourceMax: s => 5 + s.CON,
    mandatorySkill: 'Briga/Corpo a Corpo',
    skills: ['Fortitude', 'Atletismo', 'Imposição', 'Armas de Fogo', 'Medicina de Combate', 'Tecnologia & Sistemas'],
    suggestion: 'CON aumenta muito sua durabilidade; FOR reforça o papel de combate próximo.',
    levels: {
      1: 'Inflexibilidade + Blindagem Biológica', 2: 'Postura Imóvel', 3: 'Provocação Tática',
      4: 'Pele de Ferro Aprimorada', 5: 'Retaliação de Impacto', 6: 'Interceptação Balística',
      7: 'Escudo de Absorção Absoluta', 8: 'Ancoragem Territorial', 9: 'Vigor Inextinguível', 10: 'Baluarte Supremo do Ferro'
    },
    trailNames: ['Bastião', 'Demolidor', 'Guardião Rúnico']
  },
  {
    id: 'ciborgue',
    name: 'Ciborgue',
    identity: 'Caça Mecânica • Adaptação Corporal • Destruição de Sistemas',
    color: 'cyan',
    summary: 'Predador tecnológico capaz de analisar sistemas, adaptar o corpo e explorar pontos fracos.',
    keyAttributes: ['CON', 'FOC'],
    startingHp: 32, hpPerLevel: 4, resource: 'Pontos de Protocolo (PP)',
    resourceMax: s => 3 + s.FOC,
    mandatorySkill: 'Tecnologia & Sistemas',
    skills: ['Armas de Fogo', 'Briga/Corpo a Corpo', 'Fortitude', 'Investigação', 'Atletismo', 'Percepção/Prontidão'],
    suggestion: 'FOC aumenta seus PP e também o VA de armas de fogo; CON sustenta sua adaptação corporal.',
    levels: {
      1: 'Pontos de Protocolo + Visão de Sistema', 2: 'Corpo Aumentado', 3: 'Ponto Fraco',
      4: 'Interface de Combate', 5: 'Protocolo Antimaterial', 6: 'Reparação de Campo',
      7: 'Caçador de Máquinas', 8: 'Sobrecarga de Protocolo', 9: 'Arsenal Integrado', 10: 'Arquitetura de Combate'
    },
    trailNames: ['Samurai Cibernético', 'Arsenal de Combate', 'Caçador de Máquinas']
  }
]

export const ORIGINS: OriginDefinition[] = [
  { id:'soldado', name:'Soldado', general:'Treinamento Militar: escolha Fortitude ou Imposição; treinamento/experiência se já for treinado.', classManifestations:{
    atirador:'Disciplina de Combate: escolha uma categoria de arma; 1/rodada, +1 VA no primeiro ataque com ela.',
    canalizador:'Concentração Militar: 1/rodada, após conjuração bem-sucedida, reduza em 10 a Exaustão gerada, mínimo 0.',
    hibrido:'Transição de Combate: 1/rodada, após habilidade que consuma Cargas, +1 VA no próximo ataque até o fim do turno.',
    vanguardista:'Formação de Combate: 1/rodada, quando seria deslocado/empurrado/Caído, 1 PA reduz o deslocamento em 3m ou evita Caído.',
    ciborgue:'Formação de Combate: 1/rodada, quando uma criatura tecnológica ou alvo Marcado acertar você, +1 Defesa contra o próximo ataque dele até o início do seu próximo turno.'}, idea:'Boa para personagens com treinamento formal, disciplina e presença de combate.' },
  { id:'artesao', name:'Artesão', general:'Conhecimento Técnico: Tecnologia & Sistemas ou Investigação; treinamento/experiência se já for treinado.', classManifestations:{
    atirador:'Modificação de Armamento: 1/Descanso Curto, 6 PA; escolha modificações. Mira: a primeira vez que Mirar no turno, o benefício de Mirar não custa PA.',
    canalizador:'Aprimoramento Arcano: 1/Descanso Curto, 6 PA; eleve a raridade de um item arcano por 2 rodadas, até o máximo.',
    hibrido:'Infusão do Núcleo: 1/Descanso Curto, 6 PA; escolha Potência, Regeneração, Resistência, Precisão, Mobilidade, Proteção Arcana, Fortificação ou Canalização para um equipamento.',
    vanguardista:'Reforço Estrutural: 1/Descanso Curto, 6 PA; barreira/escudo +10 PV/+2 RD; cobertura pode subir uma categoria até Pesada.',
    ciborgue:'Manutenção de Campo: 1/Descanso Curto, escolha um: recuperar 2d8 PV, remover Falha, reparar item ou +1 Defesa ao equipamento de proteção até o próximo Descanso Curto.'}, idea:'Para quem quer transformar equipamento em parte central da ficha.' },
  { id:'medico', name:'Médico', general:'Formação Médica: Medicina de Combate; treinamento/experiência se já for treinado.', classManifestations:{
    atirador:'Socorro de Combate: 1/rodada, aliado adjacente que sofreu dano desde o fim do seu último turno; 1 PA recupera 1d6 PV.',
    canalizador:'Medicina Arcana: quando sua conjuração recupera PV, o alvo recupera +1d6 PV.',
    hibrido:'Estimulante Tecno-Arcano: 1/Descanso Curto, 2 PA; criatura adjacente recupera 2d6 PV.',
    vanguardista:'Médico de Linha: 1/Descanso Curto, quando aliado adjacente chega a 0 PV, 1 Reação mantém o alvo em 1 PV.',
    ciborgue:'Tecno-Cura: ao completar Descanso Curto, recebe 3 Tecno-Curas (limite 3). 1 PA usa uma em criatura adjacente para recuperar 2d6 PV; em Ciborgue, recupera também 1 PP.'}, idea:'Excelente para grupos que precisam de sustentação sem transformar o personagem em uma classe médica.' },
  { id:'investigador', name:'Investigador', general:'Olhar Investigativo: treinamento/experiência em Investigação.', classManifestations:{
    atirador:'Identificação de Alvo: 1/rodada, alvo observado por pelo menos 1 rodada; +1 VA.',
    canalizador:'Leitura Arcana: +2 para identificar magia, efeito ou proteção; sucesso revela função ofensiva, defensiva, utilitária ou de controle.',
    hibrido:'Análise de Sistemas: +2 Tecnologia & Sistemas para identificar, analisar ou desativar tecnologia, drones, eletrônicos e sistemas automatizados.',
    vanguardista:'Leitura do Campo: no início do combate, escolha uma criatura percebida; até o fim da primeira rodada, +2 Defesa contra ela.',
    ciborgue:'Leitura Estrutural: observar criatura tecnológica por 1 turno garante +2 em Tecnologia & Sistemas contra ela. Na primeira análise, identifica Fraqueza, Defesa, Mobilidade, Armamento ou Sensores.'}, idea:'Boa para personagens de leitura de campo e investigação técnica.' },
  { id:'criminoso', name:'Criminoso', general:'Conhecimento das Ruas: treinamento/experiência em Furtividade.', classManifestations:{
    atirador:'Saque Ilegal: 1/rodada, sacar/trocar arma compatível com Acesso Rápido sem PA.',
    canalizador:'Ritual Clandestino: conjurar sem linha de visão hostil; +1 resultado do minijogo.',
    hibrido:'Gambiarra: 1/rodada ao usar equipamento/acessório/modificação, +1 VA ou +1 Defesa até o início do próximo turno.',
    vanguardista:'Intimidação Brutal: após acerto corpo a corpo, 1 PA; alvo testa Imposição contra sua Defesa; falha = Assustado até início do próximo turno.',
    ciborgue:'Invasão Improvisada: 1/rodada, usa Tecnologia & Sistemas em máquinas/fechaduras/eletrônicos. Se o alvo estiver Marcado, +2 no teste.'}, idea:'Para quem prefere improviso, infiltração e soluções fora do protocolo.' },
  { id:'pesquisador-arcano', name:'Pesquisador Arcano', general:'Estudos Arcanos: escolha História Arcana ou Simbologia & Runas; treinamento/experiência se já for treinado.', classManifestations:{
    atirador:'Munição Rúnica: 1/Descanso Curto, prepara munição especial para uma arma em quantidade igual à capacidade.',
    canalizador:'Teoria do Fluxo: 1/rodada após minijogo bem-sucedido, ignore 1 erro extra sofrido.',
    hibrido:'Sincronização Arcana: ao gastar Cargas, +2 no próximo teste de Sintonia Arcana até o fim do próximo turno.',
    vanguardista:'Runas de Proteção: 1/Descanso Curto, toque uma criatura; +3 RD mágico por 2 rodadas.',
    ciborgue:'Interface Tecno-Arcana: 1/rodada ao analisar máquina arcana, escolha +2 Tecnologia ou +2 Sintonia. Se identificar corretamente, recupera 1 PP.'}, idea:'Ideal para quem quer que teoria e estudo sejam parte da identidade.' },
  { id:'sobrevivente', name:'Sobrevivente', general:'Sobrevivência: treinamento/experiência em Fortitude.', classManifestations:{
    atirador:'Instinto de Sobrevivência: com metade do PV ou menos, +1 VA.',
    canalizador:'Concentração sob Pressão: com metade do PV ou menos, +2 Fortitude para manter conjuração.',
    hibrido:'Núcleo de Emergência: com metade do PV ou menos, primeira habilidade/rodada que gaste Carga concede +1 Defesa até o início do próximo turno.',
    vanguardista:'Não Cair: 1/rodada, quando um effect faria você ficar Caído, 1 PA permanece de pé.',
    ciborgue:'Instinto de Preservação: com metade do PV ou menos, +1 Defesa e +1 Fortitude contra máquinas/construtos. 1/rodada ao ser atingido por elas, move 1,5m sem OA.'}, idea:'Para personagens definidos por resistência, adaptação e instinto.' },
  { id:'mercenario', name:'Mercenário', general:'Treinamento Operacional: escolha Armas de Fogo ou Briga/Corpo a Corpo; treinamento/experiência se já treinado.', classManifestations:{
    atirador:'Contrato de Abate: no primeiro ataque da cena, escolha Alvo Prioritário; 1/rodada +1 VA contra ele.',
    canalizador:'Operação Precisa: conjuração de alvo único recebe +1 resultado do minijogo.',
    hibrido:'Equipamento de Missão: após Descanso Completo, escolha arma/equipamento; até o próximo Descanso Completo, +1 VA ou +1 Defesa.',
    vanguardista:'Contrato de Proteção: início do combate, escolha aliado; enquanto a até 3m, +1 Defesa e +1 RD físico.',
    ciborgue:'Contrato de Caça: primeiro ataque contra máquina na cena designa Alvo Contratado. 1/rodada +1 VA contra ele. Se destruí-lo, recupera 1 PP.'}, idea:'Funciona bem para personagens profissionais, pragmáticos e preparados.' },
  { id:'atleta', name:'Atleta', general:'Condicionamento: treinamento/experiência em Atletismo.', classManifestations:{
    atirador:'Movimento e Tiro: 1/rodada, após ataque com arma de fogo, 1 PA move 3m sem ataque de oportunidade.',
    canalizador:'Concentração Física: quando sofrer dano durante conjuração, +2 no próximo Fortitude para manter.',
    hibrido:'Mobilidade Integrada: 1/rodada, após habilidade que gaste Carga, move 3m sem PA.',
    vanguardista:'Investida: após mover pelo menos 6m em linha reta em direção a uma criatura e fazer ataque corpo a corpo no mesmo turno, +2 VA.',
    ciborgue:'Servomotores Adaptados: +2 Atletismo e +1,5m deslocamento. 1/rodada, após acerto corpo a corpo, move 3m sem gastar PA.'}, idea:'Para quem quer mobilidade, físico e presença atlética na ficha.' },
  { id:'operador', name:'Operador', general:'Operações Táticas: escolha Tecnologia & Systems ou Percepção/Prontidão; treinamento/experiência se já treinado.', classManifestations:{
    atirador:'Aquisição de Alvo: usando visão/acessório, +1 VA no primeiro ataque após aquisição.',
    canalizador:'Interface Arcana: usando equipamento mágico/tecnológico como parte da conjuração, +1 resultado do minijogo.',
    hibrido:'Integração de Sistemas: Tecnologia & Sistemas pode operar/reparar/modificar tecnologia que normalmente exija outra perícia, +2 no teste.',
    vanguardista:'Plataforma Defensiva: 1/rodada enquanto adjacente a cobertura/barreira/equipamento defensivo, +1 Defesa.',
    ciborgue:'Protocolo Tático: 1/rodada após analisar máquina, escolha +1 VA, +1 Defesa ou +2 Tecnologia até início do próximo turno. Se Marcado, escolha dois.'}, idea:'Para personagens táticos, operadores de campo e usuários de tecnologia.' },
]

export const WEAPONS: Weapon[] = [
  {id:'pistola',name:'Pistola',kind:'leve',damage:'1d4',range:12,ammo:12,crit:'18×2',failure:6,recoil:0,vaBonus:0},
  {id:'revolver',name:'Revólver',kind:'leve',damage:'1d6',range:12,ammo:6,crit:'17×2',failure:3,recoil:1,vaBonus:0},
  {id:'smg',name:'Submetralhadora',kind:'leve',damage:'1d6',range:12,ammo:30,crit:'19×2',failure:15,recoil:2,vaBonus:0},
  {id:'espingarda',name:'Espingarda',kind:'leve',damage:'2d6',range:6,ammo:6,crit:'16×2',failure:3,recoil:2,vaBonus:0},
  {id:'fuzil',name:'Fuzil',kind:'longa',damage:'1d10',range:18,ammo:20,crit:'18×2',failure:10,recoil:2,vaBonus:0},
  {id:'fuzil-atirador',name:'Fuzil de Atirador',kind:'longa',damage:'1d12',range:24,ammo:10,crit:'17×2',failure:5,recoil:2,vaBonus:0},
  {id:'sniper',name:'Sniper',kind:'longa',damage:'1d20',range:36,ammo:5,crit:'16×2',failure:2,recoil:3,vaBonus:0},
  {id:'metralhadora',name:'Metralhadora',kind:'longa',damage:'1d8',range:18,ammo:40,crit:'19×2',failure:20,recoil:4,vaBonus:0},
  {id:'escopeta-devastadora',name:'Escopeta Devastadora',kind:'leve',damage:'3d6',range:6,ammo:4,crit:'16×2',failure:2,recoil:3,vaBonus:0,note:'Impacto Massivo: até 3m, REF CD 15 ou Caído.'}
]

export const SKILL_OPTIONS = [
  'Fortitude','Tolerância Arcana','Simbologia & Runas','História Arcana','Tecnologia & Sistemas',
  'Medicina de Combate','Investigação','Armas de Fogo','Percepção/Prontidão','Intuição',
  'Sintonia Arcana','Briga/Corpo a Corpo','Atletismo','Imposição','Esquiva','Acrobacia',
  'Furtividade','Pilotagem','Prestidigitação'
]
