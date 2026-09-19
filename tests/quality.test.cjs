const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const sheet = read('minigame/ficha/index.html');
const game = read('minigame/script.js');

test('Scripts publicados e scripts inline têm sintaxe válida', () => {
  for (const folder of ['home', 'mestre', 'minigame', 'shared']) {
    for (const file of fs.readdirSync(path.join(root, folder))) {
      if (file.endsWith('.js')) new vm.Script(read(`${folder}/${file}`), { filename: file });
    }
  }
  for (const file of ['index.html', 'home/ferro_arcano.html', 'home/wiki.html', 'mestre/index.html', 'minigame/index.html', 'minigame/ficha/index.html']) {
    for (const match of read(file).matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (!/\bsrc\s*=/.test(match[1]) && !/application\/ld\+json/.test(match[1])) new vm.Script(match[2], { filename: file });
    }
  }
});

test('PV e crescimento das sete classes são iguais na ficha e no minijogo', () => {
  const catalog = vm.runInNewContext('(' + game.match(/const CLASSES = (\{[\s\S]*?\n  \});/)[1] + ')');
  const entries = [...sheet.matchAll(/name: "([^"]+)", primary: "[^"]+", basePv: (\d+), pvGrowth: (\d+), conMultiplier: (\d+)/g)];
  assert.equal(entries.length, 7);
  assert.equal(Object.keys(catalog).length, 7);
  for (const [, name, base, growth, multiplier] of entries) {
    const item = Object.values(catalog).find(item => item.name === name);
    assert.ok(item, name);
    assert.deepEqual([item.basePv, item.pvGrowth, item.conMultiplier], [+base, +growth, +multiplier], name);
  }
});

test('Busca sem acentos preserva nomes e links das classes', () => {
  const declaration = read('home/wiki.js').split('\n').find(line => line.includes('const normalize ='));
  const normalize = vm.runInNewContext(declaration + '\nnormalize');
  assert.equal(normalize('Mediador Arcano'), 'mediador arcano');
  assert.equal(normalize('Híbrido'), 'hibrido');
  assert.equal(normalize('Âncora Vetorial'), normalize('ancora vetorial'));
});

test('Catálogo oficial contém poderes, trilhas e manifestações completas', () => {
  const context = { window: {} };
  vm.runInNewContext(read('home/new-classes.js'), context);
  assert.equal(context.window.FerroArcanoNewClasses.length, 2);
  for (const entry of context.window.FerroArcanoNewClasses) {
    assert.equal(entry.powers.length, 10);
    assert.equal(entry.trails.length, 3);
    assert.equal(entry.origins.length, 10);
    for (const trail of entry.trails) assert.equal(trail.abilities.length, 5);
  }
});

test('Suporte debita custos uma vez, beneficia o aliado e preserva duração', () => {
  const code = sheet.slice(sheet.indexOf('    function activateAbilityWithDeductions('), sheet.indexOf('    function switchAbilitiesTab('));
  const broadcasts = [];
  const state = { classId: 'mediador-arcano', currentPa: 3, classResource: 4, activeAbilities: [], room_code: 'FA-1234', id: 'source', name: 'Mediador' };
  const context = { state, CLASSES: { 'mediador-arcano': { resourceName: 'Harmonia' } }, window: { FerroArcanoNetwork: { broadcast: (...args) => broadcasts.push(args) } }, calcularEAtualizar() {}, syncWithTable() {}, showDiceToast() {}, escapeText: String };
  vm.createContext(context);
  vm.runInContext(code, context);
  const ability = { id: 'med_mediar_fluxo', name: 'Mediar Fluxo', paCost: 1, resourceCost: 1 };
  const choice = { name: 'Estabilização', desc: '+2 Fortitude', buffs: { fortitude: 2 }, durationTurns: 1 };
  context.activateAbilityWithDeductions(ability, choice, { id: 'target', name: 'Aliado' });
  assert.equal(state.currentPa, 2);
  assert.equal(state.classResource, 3);
  assert.equal(Object.keys(state.activeAbilities[0].buffs).length, 0);
  assert.equal(state.activeAbilities[0].turnsRemaining, 1);
  const payload = broadcasts.find(([event]) => event === 'ALLIED_BUFF_APPLIED')[1];
  assert.equal(payload.targetPlayerId, 'target');
  assert.equal(payload.buffs.fortitude, 2);
  state.currentPa = 0;
  context.activateAbilityWithDeductions(ability, choice, { id: 'target', name: 'Aliado' });
  assert.equal(state.classResource, 3);
  assert.equal(state.activeAbilities.length, 1);
});

test('Minijogo tolera ficha inválida e armazenamento indisponível', () => {
  const code = game.slice(game.indexOf('  function loadCharacter()'), game.indexOf('  function saveCharacter()'));
  for (const value of ['null', '[]', '42', '"texto"', '{invalido']) {
    const context = { STORAGE_KEY: 'ferro_arcano_character', localStorage: { getItem: () => value }, console: { error() {} } };
    vm.createContext(context);
    vm.runInContext(code + '\nloadCharacter()', context);
    assert.equal(context.activeCharacter, null);
  }
  const context = { STORAGE_KEY: 'ferro_arcano_character', localStorage: { getItem() { throw new Error('Indisponível'); } }, console: { error() {} } };
  vm.runInNewContext(code + '\nloadCharacter()', context);
  assert.equal(context.activeCharacter, null);
});

test('Nova rodada restaura economia, consome PA preparado e reduz condições', () => {
  const context = { window: {} };
  vm.runInNewContext(read('shared/rules.js'), context);
  const rules = context.window.FerroArcanoRules;
  const character = rules.normalizeCharacter({ classId: 'vetor', level: 10, currentPa: 0, combat: { pendingPa: 1 }, conditions: [{ id: 'lentificado', turnsRemaining: 1 }] });
  const next = rules.startRound(character, 4);
  assert.equal(next.combat.round, 4);
  assert.equal(next.currentPa, 4);
  assert.equal(next.combat.pendingPa, 0);
  assert.equal(next.combat.reactionAvailable, true);
  assert.equal(next.conditions.length, 0);
});

test('Benefícios preparados são consumidos apenas na próxima conjuração', () => {
  const context = { window: {} };
  vm.runInNewContext(read('shared/rules.js'), context);
  const character = { incomingBuffs: [
    { abilityName: 'Preparação', buffs: { minigameExtraTime: 2, minigameErrorIgnore: 1 } },
    { abilityName: 'Defesa', buffs: { defense: 2 } }
  ] };
  const support = context.window.FerroArcanoRules.consumeCastSupport(character);
  assert.deepEqual(JSON.parse(JSON.stringify(support)), { extraTime: 2, ignoreErrors: 1, exReduction: 0, collapseCap: null, damageHealingDie: null, rangeBonus: 0 });
  assert.equal(character.incomingBuffs.length, 1);
  assert.equal(character.incomingBuffs[0].abilityName, 'Defesa');
});

test('Descanso completo preserva a sequela arcana em todas as interfaces', () => {
  assert.doesNotMatch(game, /activeCharacter\.colapsoId\s*=\s*0/);
  assert.doesNotMatch(sheet.slice(sheet.indexOf('function actionDescansoCompleto'), sheet.indexOf('// ================= SINCRONIZAÇÃO')), /state\.colapsoId\s*=\s*0/);
  assert.match(game, /colapsoPoints\s*=\s*Math\.max\(0, beforeCollapse - 1\)/);
});

test('Wiki possui sumário hierárquico e leitura contínua das regras', () => {
  const wiki = read('home/wiki.js');
  assert.match(wiki, /class="chapter-subnav"/);
  assert.match(wiki, /class="sub-link"/);
  assert.match(wiki, /class="rule-flow"/);
  assert.match(wiki, /class="rule-section"/);
  assert.doesNotMatch(wiki, /<button class="rule-card"/);
  assert.match(wiki, /function collapseActiveChapter/);
  assert.match(wiki, /function renderOrigins/);
  assert.match(wiki, /data-manifestation-class/);
  assert.match(wiki, /function applyOriginFilter/);
  assert.match(wiki, /scrollToTarget\(initialTargetId, 'auto'\)/);
});
