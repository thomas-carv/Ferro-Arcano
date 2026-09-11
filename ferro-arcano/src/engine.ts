import { ATTRIBUTE_COST, AbilityScoreName, ClassDefinition, Weapon } from './data'

export interface CharacterState {
  name: string
  concept: string
  level: number
  classId: string
  originId: string
  trailId: string
  attributes: Record<AbilityScoreName, number>
  trainedSkills: string[]
  weaponId: string
  equipmentIds: string[]
}

export const DEFAULT_ATTRIBUTES: Record<AbilityScoreName, number> = {
  CON: 0, CONH: 0, FOC: 0, FOR: 0, REF: 0
}

export function attributeSpent(attributes: Record<AbilityScoreName, number>) {
  return Object.values(attributes).reduce((sum, value) => sum + ATTRIBUTE_COST[value], 0)
}

export function attributeRemaining(attributes: Record<AbilityScoreName, number>) {
  return 10 - attributeSpent(attributes)
}

export function hpFor(classDef: ClassDefinition, attributes: Record<AbilityScoreName, number>, level: number) {
  return classDef.startingHp + attributes.CON * (classDef.id === 'vanguardista' ? 9 : classDef.id === 'ciborgue' ? 8 : classDef.id === 'hibrido' ? 7 : classDef.id === 'atirador' ? 6 : 5)
    + Math.max(0, level - 1) * (classDef.hpPerLevel + attributes.CON)
}

export function firearmVA(attributes: Record<AbilityScoreName, number>, weapon: Weapon) {
  // Regra consolidada: 10 + FOC + bônus da arma + modificadores.
  return 10 + attributes.FOC + weapon.vaBonus
}

export function defense(attributes: Record<AbilityScoreName, number>) {
  return 10 + attributes.CON
}

export function derived(classDef: ClassDefinition, state: CharacterState, weapon: Weapon) {
  return {
    pv: hpFor(classDef, state.attributes, state.level),
    va: classDef.id === 'atirador' || classDef.id === 'hibrido' || classDef.id === 'ciborgue'
      ? firearmVA(state.attributes, weapon)
      : firearmVA(state.attributes, weapon),
    defense: defense(state.attributes),
    resourceMax: classDef.resourceMax(state.attributes),
    attributeSpent: attributeSpent(state.attributes),
    attributeRemaining: attributeRemaining(state.attributes),
  }
}

export function canIncreaseAttribute(
  attributes: Record<AbilityScoreName, number>,
  key: AbilityScoreName
) {
  const current = attributes[key]
  if (current >= 4) return false
  const nextCost = ATTRIBUTE_COST[current + 1] - ATTRIBUTE_COST[current]
  return attributeRemaining(attributes) >= nextCost
}

export function increaseAttribute(
  attributes: Record<AbilityScoreName, number>,
  key: AbilityScoreName
) {
  if (!canIncreaseAttribute(attributes, key)) return attributes
  return { ...attributes, [key]: attributes[key] + 1 }
}

export function decreaseAttribute(
  attributes: Record<AbilityScoreName, number>,
  key: AbilityScoreName
) {
  if (attributes[key] <= 0) return attributes
  return { ...attributes, [key]: attributes[key] - 1 }
}
