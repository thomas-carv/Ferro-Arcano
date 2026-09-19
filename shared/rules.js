(() => {
  'use strict'

  const VERSION = 2
  const CLASS_RULES = Object.freeze({
    atirador: { name: 'Atirador', basePv: 28, conMultiplier: 6, pvGrowth: 4, resourceName: 'Pontos de Precisão', resourceBase: 3, resourceAttr: 'FOC' },
    canalizador: { name: 'Canalizador', basePv: 24, conMultiplier: 5, pvGrowth: 3, resourceName: 'Pontos de Sintonia', resourceBase: 3, resourceAttr: 'CONH' },
    hibrido: { name: 'Híbrido', basePv: 30, conMultiplier: 7, pvGrowth: 4, resourceName: 'Cargas do Núcleo', resourceBase: 3, resourceAttr: null },
    vanguardista: { name: 'Vanguardista', basePv: 36, conMultiplier: 9, pvGrowth: 5, resourceName: 'Inflexibilidade', resourceBase: 5, resourceAttr: 'CON' },
    ciborgue: { name: 'Ciborgue', basePv: 32, conMultiplier: 8, pvGrowth: 4, resourceName: 'Pontos de Protocolo', resourceBase: 3, resourceAttr: 'FOC' },
    vetor: { name: 'Vetor', basePv: 30, conMultiplier: 7, pvGrowth: 4, resourceName: 'Momento', resourceBase: 3, resourceAttr: 'REF' },
    'mediador-arcano': { name: 'Mediador Arcano', basePv: 26, conMultiplier: 6, pvGrowth: 3, resourceName: 'Harmonia', resourceBase: 3, resourceAttr: 'CONH' }
  })

  const CONDITIONS = Object.freeze({
    caido: { name: 'Caído', summary: 'Levantar-se e efeitos de movimento seguem a regra da ação aplicável.', category: 'physical' },
    lentificado: { name: 'Lentificado', summary: 'Deslocamento reduzido enquanto durar o efeito.', category: 'physical' },
    imobilizado: { name: 'Imobilizado', summary: 'Não realiza deslocamento voluntário.', category: 'physical' },
    vulneravel: { name: 'Vulnerável', summary: 'Sofre os modificadores declarados pela fonte do efeito.', category: 'physical' },
    assustado: { name: 'Assustado', summary: 'Sofre os modificadores declarados pela fonte do efeito.', category: 'mental' },
    queimando: { name: 'Queimando', summary: 'Sofre dano conforme a fonte até encerrar o efeito.', category: 'physical' },
    sobrecarga: { name: 'Sobrecarga', summary: 'Exaustão abaixo de zero; conjuração pode gerar Colapso.', category: 'arcane' }
  })

  const number = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback
  const clamp = (value, min, max) => Math.min(max, Math.max(min, number(value, min)))
  const ruleFor = classId => CLASS_RULES[classId] || CLASS_RULES.atirador
  const pvMax = character => {
    const rule = ruleFor(character.classId)
    const con = number(character.attributes?.CON)
    const level = clamp(character.level, 1, 14)
    return rule.basePv + con * rule.conMultiplier + (level - 1) * (rule.pvGrowth + con)
  }
  const exMax = character => number(character.attributes?.CON) * 15 + number(character.attributes?.CONH) * 10
  const resourceMax = character => {
    const rule = ruleFor(character.classId)
    return rule.resourceBase + (rule.resourceAttr ? number(character.attributes?.[rule.resourceAttr]) : 0)
  }
  const normalizeCondition = condition => {
    if (!condition || !CONDITIONS[condition.id]) return null
    return {
      id: condition.id,
      source: String(condition.source || 'Efeito'),
      turnsRemaining: condition.turnsRemaining == null ? null : Math.max(0, number(condition.turnsRemaining)),
      appliedRound: Math.max(0, number(condition.appliedRound)),
      notes: String(condition.notes || '')
    }
  }
  function normalizeCharacter(input, blank = {}) {
    const source = input && typeof input === 'object' && !Array.isArray(input) ? input : {}
    const attrs = source.attributes && typeof source.attributes === 'object' ? source.attributes : {}
    const result = Object.assign({}, blank, source, {
      schemaVersion: VERSION,
      attributes: { CON: number(attrs.CON), CONH: number(attrs.CONH), FOC: number(attrs.FOC), FOR: number(attrs.FOR), REF: number(attrs.REF) },
      level: clamp(source.level, 1, 14),
      activeAbilities: Array.isArray(source.activeAbilities) ? source.activeAbilities : [],
      incomingBuffs: Array.isArray(source.incomingBuffs) ? source.incomingBuffs : [],
      conditions: Array.isArray(source.conditions) ? source.conditions.map(normalizeCondition).filter(Boolean) : [],
      combat: Object.assign({ round: 0, turn: 0, reactionAvailable: true, exRecoveredThisRound: 0, paGrantedThisRound: 0, resourceRecoveredThisRound: 0, pendingPa: 0 }, source.combat || {})
    })
    result.currentPv = clamp(source.currentPv ?? pvMax(result), 0, pvMax(result))
    result.currentExaustao = Math.min(exMax(result), number(source.currentExaustao, exMax(result)))
    result.currentPa = clamp(source.currentPa ?? 3, 0, 4)
    result.maxPa = clamp(source.maxPa ?? 3, 1, 4)
    result.classResource = clamp(source.classResource ?? resourceMax(result), 0, resourceMax(result))
    result.colapsoPoints = Math.max(0, number(source.colapsoPoints))
    return result
  }
  function startRound(character, round) {
    const result = normalizeCharacter(character)
    const grantedPa = clamp(result.combat.pendingPa, 0, 1)
    result.combat = Object.assign({}, result.combat, { round: Math.max(1, number(round, 1)), reactionAvailable: true, exRecoveredThisRound: 0, paGrantedThisRound: grantedPa, resourceRecoveredThisRound: 0, pendingPa: 0 })
    result.currentPa = result.maxPa + grantedPa
    result.conditions = result.conditions.filter(condition => {
      if (condition.turnsRemaining == null) return true
      condition.turnsRemaining -= 1
      return condition.turnsRemaining > 0
    })
    return result
  }
  function addCondition(character, condition) {
    const normalized = normalizeCondition(condition)
    if (!normalized) return false
    character.conditions ||= []
    const existing = character.conditions.find(item => item.id === normalized.id)
    if (existing) Object.assign(existing, normalized)
    else character.conditions.push(normalized)
    return true
  }
  function consumeCastSupport(character) {
    const bonuses = { extraTime: 0, ignoreErrors: 0, exReduction: 0, collapseCap: null, damageHealingDie: null, rangeBonus: 0 }
    const kept = []
    for (const effect of character.incomingBuffs || []) {
      const buffs = effect.buffs || {}
      let consumed = false
      if (buffs.minigameExtraTime) { bonuses.extraTime = Math.max(bonuses.extraTime, number(buffs.minigameExtraTime)); consumed = true }
      if (buffs.minigameErrorIgnore) { bonuses.ignoreErrors += number(buffs.minigameErrorIgnore); consumed = true }
      if (buffs.nextExCostReduction) { bonuses.exReduction = Math.max(bonuses.exReduction, number(buffs.nextExCostReduction)); consumed = true }
      if (buffs.collapseCap != null) { bonuses.collapseCap = bonuses.collapseCap == null ? number(buffs.collapseCap) : Math.min(bonuses.collapseCap, number(buffs.collapseCap)); consumed = true }
      if (buffs.spellDamageHealingDie) { bonuses.damageHealingDie = buffs.spellDamageHealingDie; consumed = true }
      if (buffs.spellRangeBonus) { bonuses.rangeBonus = Math.max(bonuses.rangeBonus, number(buffs.spellRangeBonus)); consumed = true }
      if (!consumed) kept.push(effect)
    }
    character.incomingBuffs = kept
    return bonuses
  }

  window.FerroArcanoRules = { VERSION, CLASS_RULES, CONDITIONS, clamp, ruleFor, pvMax, exMax, resourceMax, normalizeCharacter, startRound, addCondition, consumeCastSupport }
})()
