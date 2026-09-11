import './style.css'
import {
  ATTRIBUTES, ATTRIBUTE_COST, CLASSES, ORIGINS, SKILL_OPTIONS, WEAPONS,
  AbilityScoreName, CREATION_MAX_ATTRIBUTE
} from './data'
import {
  CharacterState, DEFAULT_ATTRIBUTES, derived, decreaseAttribute, increaseAttribute
} from './engine'

type StepId = 'conceito' | 'classe' | 'atributos' | 'pericias' | 'origem' | 'itens' | 'resumo'

const app = document.querySelector<HTMLDivElement>('#app')!

const state: CharacterState = {
  name: '',
  concept: '',
  level: 1,
  classId: 'atirador',
  originId: '',
  trailId: '',
  attributes: {...DEFAULT_ATTRIBUTES},
  trainedSkills: [],
  weaponId: 'pistola',
  equipmentIds: [],
}

let activeStep: StepId = 'conceito'
let classHoverId = ''

const steps: {id: StepId, label: string, short: string}[] = [
  {id:'conceito', label:'Conceito', short:'Identidade'},
  {id:'classe', label:'Classe', short:'Função'},
  {id:'atributos', label:'Atributos', short:'Base'},
  {id:'pericias', label:'Perícias', short:'Treinamento'},
  {id:'origem', label:'Origem', short:'História'},
  {id:'itens', label:'Itens', short:'Equipamento'},
  {id:'resumo', label:'Resumo', short:'Ficha'},
]

const selectedClass = () => CLASSES.find(c => c.id === state.classId)!
const selectedOrigin = () => ORIGINS.find(o => o.id === state.originId)
const selectedWeapon = () => WEAPONS.find(w => w.id === state.weaponId)!

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!))
}

function iconForClass(id: string) {
  return {atirador:'⌁', canalizador:'✦', hibrido:'◈', vanguardista:'⬟', ciborgue:'◉'}[id] ?? '◆'
}

function render() {
  const c = selectedClass()
  const w = selectedWeapon()
  const d = derived(c, state, w)
  app.innerHTML = `
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,#17100b_0%,#09090b_40%,#09090b_100%)]">
      <header class="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/88 backdrop-blur-xl">
        <div class="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <a href="#" class="flex items-center gap-3" data-reset>
            <div class="grid size-10 place-items-center rounded-xl border border-amber-700/40 bg-amber-500/5 text-xs font-black text-amber-300">F&A</div>
            <div>
              <div class="text-sm font-black uppercase tracking-[.12em]">Ferro & Arcano</div>
              <div class="text-[11px] text-zinc-500">Criador de Personagem • v1.4b</div>
            </div>
          </a>
          <div class="hidden items-center gap-3 text-xs text-zinc-500 md:flex">
            <span>Autosave local</span><span class="size-1 rounded-full bg-emerald-400"></span><span>Regras orientadas a dados</span>
          </div>
        </div>
      </header>

      <div class="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[235px_minmax(0,1fr)_290px]">
        ${renderSidebar(d)}
        <main class="min-w-0 px-4 py-6 lg:px-8 lg:py-9">
          ${renderProgress()}
          ${renderStep(d)}
        </main>
        ${renderSheet(d)}
      </div>
    </div>
  `
  bind()
}

function renderSidebar(d: ReturnType<typeof derived>) {
  return `
    <aside class="hidden border-r border-zinc-800/80 lg:block">
      <div class="sticky top-[66px] p-5">
        <div class="mb-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Criação</div>
          <div class="mt-2 text-sm font-bold">${escapeHtml(state.name || 'Personagem sem nome')}</div>
          <div class="mt-1 text-xs text-zinc-500">${escapeHtml(selectedClass().name)} • Nível ${state.level}</div>
        </div>
        <div class="space-y-1">
          ${steps.map((s,i)=>`
            <button data-step="${s.id}" class="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${activeStep===s.id?'border border-amber-700/40 bg-amber-400/8 text-amber-100':'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'}">
              <span class="grid size-7 place-items-center rounded-lg border text-[10px] font-bold ${activeStep===s.id?'border-amber-700/40 bg-amber-500/10':'border-zinc-800 bg-zinc-900'}">${i+1}</span>
              <span class="min-w-0"><span class="block text-sm font-semibold">${s.label}</span><span class="block text-[10px] text-zinc-600">${s.short}</span></span>
            </button>`).join('')}
        </div>
        <div class="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <div class="text-xs font-bold">Dica do sistema</div>
          <p class="mt-2 text-xs leading-5 text-zinc-500">Passe o mouse sobre uma classe, atributo ou propriedade para ver a explicação antes de escolher.</p>
        </div>
      </div>
    </aside>
  `
}

function renderProgress() {
  const index = steps.findIndex(s => s.id === activeStep)
  return `
    <div class="mb-8 flex items-center justify-between">
      <div>
        <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Etapa ${index+1} de ${steps.length}</div>
        <h1 class="mt-1 text-3xl font-black tracking-tight lg:text-4xl">${steps[index].label}</h1>
      </div>
      <div class="flex gap-1">
        ${steps.map((s,i)=>`<span class="h-1.5 w-5 rounded-full ${i<=index?'bg-amber-400':'bg-zinc-800'}"></span>`).join('')}
      </div>
    </div>
  `
}

function renderStep(d: ReturnType<typeof derived>) {
  switch(activeStep){
    case 'conceito': return renderConcept()
    case 'classe': return renderClassStep()
    case 'atributos': return renderAttributes(d)
    case 'pericias': return renderSkills()
    case 'origem': return renderOrigin()
    case 'itens': return renderItems(d)
    case 'resumo': return renderSummary(d)
  }
}

function renderConcept() {
  return `
    <section class="grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
      <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 lg:p-8">
        <div class="text-xs font-bold text-zinc-400">Comece pelo que define o personagem</div>
        <h2 class="mt-2 text-2xl font-black">Quem é essa pessoa?</h2>
        <p class="mt-2 max-w-xl text-sm leading-6 text-zinc-500">Você não precisa conhecer todas as regras para começar. O criador apresenta apenas o que importa em cada etapa.</p>
        <div class="mt-7 grid gap-4">
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Nome</span>
            <input data-field="name" value="${escapeHtml(state.name)}" placeholder="Ex.: Kael Voss" class="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-600/60 focus:ring-4 focus:ring-amber-500/10">
          </label>
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Conceito</span>
            <textarea data-field="concept" rows="4" placeholder="Ex.: ex-soldado que caça máquinas corrompidas..." class="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-600/60 focus:ring-4 focus:ring-amber-500/10">${escapeHtml(state.concept)}</textarea>
          </label>
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Nível inicial</span>
            <select data-field="level" class="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none">
              ${Array.from({length:14},(_,i)=>`<option value="${i+1}" ${state.level===i+1?'selected':''}>Nível ${i+1}</option>`).join('')}
            </select>
          </label>
        </div>
      </div>
      <div class="rounded-3xl border border-amber-700/20 bg-amber-500/5 p-6 lg:p-8">
        <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Sugestão</div>
        <h3 class="mt-2 text-xl font-bold">Construa pela função, não pelos números.</h3>
        <p class="mt-3 text-sm leading-6 text-zinc-400">Escolha primeiro como você quer jogar. Depois o builder mostra quais atributos, perícias, Origem e equipamento reforçam esse conceito.</p>
        <div class="mt-6 rounded-2xl border border-amber-700/20 bg-zinc-950/35 p-4 text-sm leading-6 text-zinc-400">A interface recalcula PV, VA, Defesa e recurso conforme cada escolha. Nenhuma etapa “reseta” escolhas anteriores.</div>
      </div>
      ${navButtons()}
    </section>`
}

function renderClassStep() {
  return `
    <section>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${CLASSES.map(c=>`
          <button data-class="${c.id}" class="group relative rounded-3xl border p-5 text-left transition ${state.classId===c.id?'border-amber-700/50 bg-amber-400/7':'border-zinc-800 bg-zinc-900/55 hover:border-zinc-700'}"
            title="${escapeHtml(c.summary)}">
            <div class="flex items-start justify-between gap-3">
              <div class="grid size-11 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950 text-lg text-amber-300">${iconForClass(c.id)}</div>
              ${state.classId===c.id?'<span class="rounded-full border border-emerald-700/30 bg-emerald-500/8 px-2 py-1 text-[10px] font-bold text-emerald-300">Selecionada</span>':''}
            </div>
            <div class="mt-5 text-xl font-black">${c.name}</div>
            <div class="mt-1 text-xs font-bold text-zinc-500">${c.identity}</div>
            <p class="mt-4 text-sm leading-6 text-zinc-400">${c.summary}</p>
            <div class="mt-5 grid grid-cols-2 gap-2 text-xs">
              <div class="rounded-xl bg-zinc-950/70 p-3"><span class="block text-zinc-600">Atributos-chave</span><b class="mt-1 block">${c.keyAttributes.join(' • ')}</b></div>
              <div class="rounded-xl bg-zinc-950/70 p-3"><span class="block text-zinc-600">Recurso</span><b class="mt-1 block">${c.resource}</b></div>
            </div>
            <div class="mt-4 text-xs text-amber-300 opacity-80">Passe o mouse para ler o resumo completo ↗</div>
          </button>`).join('')}
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
        <div class="text-xs font-bold">Classe atual</div>
        <div class="mt-1 text-lg font-black">${selectedClass().name}</div>
        <p class="mt-2 text-sm text-zinc-500">${selectedClass().suggestion}</p>
      </div>
      ${navButtons()}
    </section>`
}

function renderAttributes(d: ReturnType<typeof derived>) {
  const keys = Object.keys(ATTRIBUTES) as AbilityScoreName[]
  return `
    <section>
      <div class="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
          <div class="flex items-center justify-between gap-3">
            <div><div class="text-xs font-bold text-zinc-500">Distribuição inicial</div><h2 class="mt-1 text-xl font-black">10 pontos para gastar</h2></div>
            <div class="rounded-2xl border border-amber-700/30 bg-amber-500/7 px-4 py-3 text-right">
              <span class="block text-[10px] uppercase tracking-widest text-zinc-500">Restante</span>
              <strong class="text-2xl text-amber-300">${d.attributeRemaining}</strong>
            </div>
          </div>
          <div class="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
            <table class="w-full text-left text-sm">
              <thead class="bg-zinc-950/80 text-[10px] uppercase tracking-wider text-zinc-500"><tr><th class="px-4 py-3">Atributo</th><th class="px-4 py-3">Valor</th><th class="px-4 py-3">Custo</th><th class="px-4 py-3">Ação</th></tr></thead>
              <tbody>
                ${keys.map(k=>{
                  const v=state.attributes[k]
                  return `<tr class="border-t border-zinc-800">
                    <td class="px-4 py-4"><div class="flex items-center gap-3" title="${ATTRIBUTES[k].description}"><span class="grid size-8 place-items-center rounded-lg bg-zinc-950 text-amber-300">${ATTRIBUTES[k].icon}</span><div><div class="font-bold">${ATTRIBUTES[k].label}</div><div class="text-[11px] text-zinc-600">${k}</div></div></div></td>
                    <td class="px-4 py-4"><span class="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 font-black">${v}</span></td>
                    <td class="px-4 py-4"><span class="text-zinc-400">${ATTRIBUTE_COST[v]}</span></td>
                    <td class="px-4 py-4"><div class="flex gap-2"><button data-attr-minus="${k}" class="grid size-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-800">−</button><button data-attr-plus="${k}" ${v>=CREATION_MAX_ATTRIBUTE?'disabled':''} class="grid size-9 place-items-center rounded-xl border border-amber-800/30 bg-amber-500/7 text-amber-200 hover:bg-amber-500/12 disabled:cursor-not-allowed disabled:opacity-30">+</button></div></td>
                  </tr>`}).join('')}
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <StatCard label="PV Máximo" value="${d.pv}" hint="${selectedClass().name}" icon="♥"/>
          <StatCard label="VA de fogo" value="${d.va}" hint="10 + FOC + bônus da arma" icon="⌁"/>
          <StatCard label="Defesa" value="${d.defense}" hint="valor calculado pelo motor" icon="◈"/>
          <StatCard label="${selectedClass().resource}" value="${d.resourceMax}" hint="limite pelo atributo-chave" icon="✦"/>
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Como funciona o custo</div><p class="mt-2 text-xs leading-5 text-zinc-500">0→0, 1→1, 2→2, 3→4, 4→7. O limite de criação é 4 por atributo.</p></div>
        </div>
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-500">As métricas da coluna lateral são recalculadas imediatamente. O ponto de entrada das fórmulas fica isolado no motor para não espalhar regra pela interface.</div>
      ${navButtons()}
    </section>`
}

function StatCard({label,value,hint,icon}:{label:string,value:string|number,hint:string,icon:string}) {
  return `<div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="flex items-start justify-between"><div><div class="text-xs font-bold text-zinc-500">${label}</div><div class="mt-1 text-3xl font-black">${value}</div></div><span class="grid size-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-950 text-amber-300">${icon}</span></div><div class="mt-2 text-[11px] text-zinc-600">${hint}</div></div>`
}

function renderSkills() {
  const c=selectedClass()
  const options=Array.from(new Set([c.mandatorySkill,...c.skills]))
  return `
  <section class="space-y-5">
    <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
      <div class="flex items-end justify-between"><div><div class="text-xs font-bold text-zinc-500">Treinamento</div><h2 class="mt-1 text-xl font-black">Escolha suas perícias de Classe</h2></div><div class="text-xs text-zinc-500">${state.trainedSkills.length}/4 escolhidas</div></div>
      <div class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        ${options.map(skill=>{
          const mandatory=skill===c.mandatorySkill
          const checked=state.trainedSkills.includes(skill)
          return `<label title="${mandatory?'Perícia obrigatória da Classe.':'Uma das opções disponíveis para esta Classe.'}" class="cursor-pointer rounded-2xl border p-4 transition ${checked?'border-amber-700/40 bg-amber-500/6':'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'}">
            <div class="flex items-center gap-3"><input data-skill="${escapeHtml(skill)}" type="checkbox" ${checked?'checked':''} ${mandatory?'disabled':''} class="size-4 accent-amber-500"><div><div class="text-sm font-bold">${skill}</div><div class="mt-1 text-[10px] uppercase tracking-wider ${mandatory?'text-amber-300':'text-zinc-600'}">${mandatory?'Obrigatória':'Disponível'}</div></div></div>
          </label>`
        }).join('')}
      </div>
      <div class="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs leading-5 text-zinc-500">Criação oficial: 1 perícia obrigatória + 3 escolhas da lista da Classe.</div>
    </div>
    <div class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div class="text-xs font-bold">Nota</div><p class="mt-2 text-xs leading-5 text-zinc-500">O criador preserva os nomes oficiais das 19 perícias. Nenhuma perícia é inventada durante a construção.</p>
    </div>
    ${navButtons()}
  </section>`
}

function renderOrigin() {
  return `
  <section>
    <div class="grid gap-4 md:grid-cols-2">
      ${ORIGINS.map(o=>{
        const selected=state.originId===o.id
        return `<button data-origin="${o.id}" class="rounded-3xl border p-5 text-left transition ${selected?'border-amber-700/50 bg-amber-400/7':'border-zinc-800 bg-zinc-900/55 hover:border-zinc-700'}">
          <div class="flex items-start justify-between gap-3"><div><div class="text-xl font-black">${o.name}</div><div class="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">Origem</div></div>${selected?'<span class="rounded-full border border-emerald-700/30 px-2 py-1 text-[10px] font-bold text-emerald-300">Selecionada</span>':''}</div>
          <p class="mt-4 text-sm leading-6 text-zinc-400">${o.general}</p>
          <div class="mt-4 rounded-2xl bg-zinc-950/65 p-4"><div class="text-[10px] font-black uppercase tracking-widest text-amber-300">Manifestação — ${selectedClass().name}</div><p class="mt-2 text-xs leading-5 text-zinc-500">${o.classManifestations[selectedClass().id]}</p></div>
          <div class="mt-4 text-xs text-zinc-600">Sugestão: ${o.idea}</div>
        </button>`
      }).join('')}
    </div>
    ${navButtons()}
  </section>`
}

function renderItems(d: ReturnType<typeof derived>) {
  const w=selectedWeapon()
  return `
  <section>
    <div class="grid gap-5 xl:grid-cols-[1fr_310px]">
      <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
        <div class="flex items-end justify-between"><div><div class="text-xs font-bold text-zinc-500">Arma principal</div><h2 class="mt-1 text-xl font-black">Escolha seu equipamento inicial</h2></div><div class="text-xs text-zinc-500">${WEAPONS.length} armas carregadas</div></div>
        <div class="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
          <table class="w-full min-w-[760px] text-left text-xs">
            <thead class="bg-zinc-950/80 text-[10px] uppercase tracking-wider text-zinc-500"><tr><th class="px-4 py-3">Arma</th><th class="px-4 py-3">Dano</th><th class="px-4 py-3">Alcance</th><th class="px-4 py-3">Munição</th><th class="px-4 py-3">Crítico</th><th class="px-4 py-3">Falha</th><th class="px-4 py-3">Recuo</th></tr></thead>
            <tbody>
              ${WEAPONS.map(item=>`<tr data-weapon="${item.id}" class="cursor-pointer border-t border-zinc-800 hover:bg-zinc-950 ${state.weaponId===item.id?'bg-amber-500/5':''}">
                <td class="px-4 py-4 font-bold">${item.name}${state.weaponId===item.id?' <span class="text-amber-300">●</span>':''}</td><td class="px-4 py-4">${item.damage}</td><td class="px-4 py-4">${item.range}m</td><td class="px-4 py-4">${item.ammo}</td><td class="px-4 py-4">${item.crit}</td><td class="px-4 py-4">${item.failure}</td><td class="px-4 py-4">${item.recoil}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${w.note?`<div class="mt-4 rounded-2xl border border-red-900/40 bg-red-500/5 p-4 text-xs text-red-200">${w.note}</div>`:''}
      </div>
      <div class="space-y-4">
        <StatCard label="VA atual" value="${d.va}" hint="${w.name} • bônus de arma ${w.vaBonus >= 0?'+':''}${w.vaBonus}" icon="⌁"/>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Arma selecionada</div><div class="mt-2 text-lg font-black">${w.name}</div><div class="mt-1 text-xs text-zinc-600">${w.damage} • ${w.range}m • ${w.ammo} munições</div></div>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Regra de Falha</div><p class="mt-2 text-xs leading-5 text-zinc-500">Falha é tratada como condição de uso/ambiente e segue as regras específicas da arma; não é uma falha aleatória automática por ataque.</p></div>
      </div>
    </div>
    ${navButtons()}
  </section>`
}

function renderSummary(d: ReturnType<typeof derived>) {
  const o=selectedOrigin()
  const c=selectedClass()
  return `
  <section class="space-y-5">
    <div class="grid gap-5 xl:grid-cols-[1fr_340px]">
      <div class="space-y-5">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Ficha</div>
          <div class="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h2 class="text-3xl font-black">${escapeHtml(state.name||'Personagem sem nome')}</h2><p class="mt-1 text-sm text-zinc-500">${escapeHtml(state.concept||'Sem conceito definido')} • Nível ${state.level}</p></div><span class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs font-bold">${c.name}</span></div>
          <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><StatCard label="PV" value="${d.pv}" hint="máximo" icon="♥"/><StatCard label="VA" value="${d.va}" hint="arma de fogo" icon="⌁"/><StatCard label="Defesa" value="${d.defense}" hint="derivada" icon="◈"/><StatCard label="Recurso" value="${d.resourceMax}" hint="máximo" icon="✦"/></div>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Atributos</div><div class="mt-4 grid grid-cols-5 gap-2">${(Object.keys(state.attributes) as AbilityScoreName[]).map(k=>`<div title="${ATTRIBUTES[k].description}" class="rounded-2xl border border-zinc-800 bg-zinc-950 p-3 text-center"><span class="block text-[10px] text-zinc-600">${k}</span><strong class="text-lg">${state.attributes[k]}</strong></div>`).join('')}</div></div>
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Origem</div><div class="mt-2 text-lg font-black">${o?.name||'Não escolhida'}</div><p class="mt-2 text-xs leading-5 text-zinc-500">${o?.general||'Escolha uma Origem para completar a identidade.'}</p></div>
        </div>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Perícias treinadas</div><div class="mt-3 flex flex-wrap gap-2">${state.trainedSkills.length?state.trainedSkills.map(s=>`<span class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300">${s}</span>`).join(''):'<span class="text-xs text-zinc-600">Nenhuma selecionada.</span>'}</div></div>
      </div>
      <aside class="rounded-3xl border border-amber-700/20 bg-amber-500/5 p-6">
        <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Checklist</div>
        <div class="mt-4 space-y-3 text-sm">
          ${[
            ['Conceito',!!state.name || !!state.concept],
            ['Classe',!!state.classId],
            ['Atributos',d.attributeRemaining===0],
            ['Perícias',state.trainedSkills.length===4],
            ['Origem',!!state.originId],
            ['Equipamento',!!state.weaponId]
          ].map(([label,ok])=>`<div class="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"><span>${label}</span><span class="${ok?'text-emerald-300':'text-zinc-600'}">${ok?'✓':'—'}</span></div>`).join('')}
        </div>
        <button data-export class="mt-5 w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-300">Exportar ficha JSON</button>
        <button data-copy class="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-bold hover:bg-zinc-900">Copiar resumo</button>
      </aside>
    </div>
    ${navButtons()}
  </section>`
}

function navButtons() {
  const i=steps.findIndex(s=>s.id===activeStep)
  return `<div class="mt-6 flex flex-wrap justify-between gap-3">
    <button data-prev ${i===0?'disabled':''} class="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3 text-sm font-bold text-zinc-400 hover:bg-zinc-900 disabled:opacity-30">← Anterior</button>
    <button data-next ${i===steps.length-1?'disabled':''} class="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-black text-zinc-950 hover:bg-amber-300 disabled:opacity-30">Próxima etapa →</button>
  </div>`
}

function renderSheet(d: ReturnType<typeof derived>) {
  return `
  <aside class="border-t border-zinc-800/80 bg-zinc-950/40 lg:border-l lg:border-t-0">
    <div class="sticky top-[66px] p-5">
      <div class="text-[10px] font-black uppercase tracking-[.16em] text-zinc-600">Ficha em tempo real</div>
      <div class="mt-3 rounded-3xl border border-zinc-800 bg-zinc-900/65 p-5">
        <div class="text-sm font-bold">${escapeHtml(state.name || 'Personagem sem nome')}</div>
        <div class="mt-1 text-xs text-zinc-500">${selectedClass().name} • ${selectedOrigin()?.name || 'Sem Origem'}</div>
        <div class="mt-5 grid grid-cols-2 gap-2">
          <MiniStat label="PV" value="${d.pv}"/><MiniStat label="VA" value="${d.va}"/>
          <MiniStat label="Def" value="${d.defense}"/><MiniStat label="PA" value="3"/>
        </div>
        <div class="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><div class="text-[10px] uppercase tracking-widest text-zinc-600">Recurso</div><div class="mt-1 font-black">${selectedClass().resource}: ${d.resourceMax}</div></div>
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/45 p-5">
        <div class="text-xs font-bold">Escolhas atuais</div>
        <div class="mt-3 space-y-2 text-xs text-zinc-500">
          <div class="flex justify-between"><span>Classe</span><b class="text-zinc-300">${selectedClass().name}</b></div>
          <div class="flex justify-between"><span>Origem</span><b class="text-zinc-300">${selectedOrigin()?.name || '—'}</b></div>
          <div class="flex justify-between"><span>Arma</span><b class="text-zinc-300">${selectedWeapon().name}</b></div>
          <div class="flex justify-between"><span>Atributos gastos</span><b class="text-zinc-300">${d.attributeSpent}/10</b></div>
        </div>
      </div>
    </div>
  </aside>`
}

function MiniStat({label,value}:{label:string,value:string}) {
  return `<div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-3"><span class="block text-[10px] uppercase tracking-widest text-zinc-600">${label}</span><b class="mt-1 block text-lg">${value}</b></div>`
}

function bind() {
  document.querySelectorAll<HTMLElement>('[data-step]').forEach(el=>{
    el.addEventListener('click',()=>{ activeStep=el.dataset.step as StepId; render() })
  })
  document.querySelectorAll<HTMLElement>('[data-class]').forEach(el=>el.addEventListener('click',()=>{
    state.classId=el.dataset.class!
    const c=selectedClass()
    state.trainedSkills=[c.mandatorySkill]
    state.originId=''
    render()
  }))
  document.querySelectorAll<HTMLElement>('[data-origin]').forEach(el=>el.addEventListener('click',()=>{state.originId=el.dataset.origin!;render()}))
  document.querySelectorAll<HTMLElement>('[data-weapon]').forEach(el=>el.addEventListener('click',()=>{state.weaponId=el.dataset.weapon!;render()}))
  document.querySelectorAll<HTMLButtonElement>('[data-attr-plus]').forEach(el=>el.addEventListener('click',()=>{state.attributes=increaseAttribute(state.attributes,el.dataset.attrPlus as AbilityScoreName);render()}))
  document.querySelectorAll<HTMLButtonElement>('[data-attr-minus]').forEach(el=>el.addEventListener('click',()=>{state.attributes=decreaseAttribute(state.attributes,el.dataset.attrMinus as AbilityScoreName);render()}))
  document.querySelectorAll<HTMLInputElement>('[data-skill]').forEach(el=>el.addEventListener('change',()=>{
    const skill=el.dataset.skill!
    if(skill===selectedClass().mandatorySkill) return
    if(el.checked && state.trainedSkills.length<4) state.trainedSkills=[...state.trainedSkills,skill]
    if(!el.checked) state.trainedSkills=state.trainedSkills.filter(s=>s!==skill)
    render()
  }))
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[data-field]').forEach(el=>el.addEventListener('input',()=>{
    const key=el.dataset.field as keyof CharacterState
    if(key==='level') state.level=Number(el.value)
    else (state[key] as string)=el.value
    render()
  }))
  document.querySelector<HTMLButtonElement>('[data-prev]')?.addEventListener('click',()=>{
    const i=steps.findIndex(s=>s.id===activeStep); if(i>0){activeStep=steps[i-1].id;render()}
  })
  document.querySelector<HTMLButtonElement>('[data-next]')?.addEventListener('click',()=>{
    const i=steps.findIndex(s=>s.id===activeStep); if(i<steps.length-1){activeStep=steps[i+1].id;render()}
  })
  document.querySelector<HTMLElement>('[data-reset]')?.addEventListener('click',e=>{e.preventDefault();location.reload()})
  document.querySelector<HTMLButtonElement>('[data-export]')?.addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'})
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${(state.name||'personagem').replace(/\s+/g,'-').toLowerCase()}.json`;a.click();URL.revokeObjectURL(a.href)
  })
  document.querySelector<HTMLButtonElement>('[data-copy]')?.addEventListener('click',async()=>{
    const c=selectedClass(),o=selectedOrigin(),w=selectedWeapon(),d=derived(c,state,w)
    const text=`${state.name||'Personagem'} — ${c.name} — Nível ${state.level}\nPV ${d.pv} • VA ${d.va} • Defesa ${d.defense}\nAtributos: ${Object.entries(state.attributes).map(([k,v])=>`${k} ${v}`).join(' • ')}\nOrigem: ${o?.name||'—'}\nArma: ${w.name}`
    await navigator.clipboard?.writeText(text)
    const btn=document.querySelector<HTMLButtonElement>('[data-copy]');if(btn){const old=btn.textContent;btn.textContent='Resumo copiado ✓';setTimeout(()=>btn.textContent=old,1200)}
  })
}

render()
