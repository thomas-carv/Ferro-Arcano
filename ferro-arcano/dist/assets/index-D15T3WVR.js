(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const b={CON:{label:"Constituição",description:"PV, Fortitude, resistência física e tolerância arcana.",icon:"♥"},CONH:{label:"Conhecimento",description:"Tecnologia, investigação, medicina, teoria arcana e Exaustão Máxima.",icon:"✦"},FOC:{label:"Foco",description:"Precisão balística, concentração e execução do minijogo arcano.",icon:"◎"},FOR:{label:"Força",description:"Combate corpo a corpo, manobras físicas e carga.",icon:"◆"},REF:{label:"Reflexo",description:"Esquiva, mobilidade, iniciativa e furtividade.",icon:"↯"}},g=[0,1,2,4,7],k=4,z=[{id:"atirador",name:"Atirador",identity:"Distância • Precisão • Controle Balístico",color:"amber",summary:"Especialista em combate à distância, controle de linhas de tiro e pressão balística.",keyAttributes:["FOC","REF"],startingHp:28,hpPerLevel:4,resource:"Pontos de Precisão",resourceMax:e=>3+e.FOC,mandatorySkill:"Armas de Fogo",skills:["Percepção/Prontidão","Furtividade","Pilotagem","Intuição","Prestidigitação"],suggestion:"FOC aumenta diretamente o VA de armas de fogo. REF ajuda a sobreviver e se reposicionar.",levels:{1:"Pontos de Precisão + Olho Clínico",2:"Mira Estável",3:"Disparo Rápido",4:"Ajuste de Balística",5:"Cadência Operacional",6:"Respiro Tático",7:"Disparo de Penetração",8:"Fogo de Supressão",9:"Postura do Caçador",10:"Mestria Balística"},trailNames:["Franco-Atirador","Pistoleiro Tático","Caçador Arcano"]},{id:"canalizador",name:"Canalizador",identity:"Conjuração • Controle • Manipulação Arcana",color:"sky",summary:"Converte teoria e sintonia arcana em conjurações, barreiras e controle do campo.",keyAttributes:["CONH","CON"],startingHp:24,hpPerLevel:3,resource:"Pontos de Sintonia",resourceMax:e=>3+e.CONH,mandatorySkill:"Sintonia Arcana",skills:["Simbologia & Runas","História Arcana","Tecnologia & Sistemas","Medicina de Combate","Investigação"],suggestion:"CONH alimenta a Sintonia e amplia a capacidade de lidar com magia; CON melhora sua sustentação.",levels:{1:"Ajuste Fino + Fluxo Contínuo",2:"Mente Expandida",3:"Emanação Rúnica de Repulsão",4:"Barreira de Éter",5:"Sintonia Rúnica",6:"Recalibração Mental",7:"Foco de Concentração Extrema",8:"Modulação de Amplitude",9:"Mente Inviolável",10:"Domínio da Ruptura Arcana"},trailNames:["Arcanista Elemental","Manipulador Espacial","Taumaturgo de Sobrecarga"]},{id:"hibrido",name:"Híbrido",identity:"Tecnologia • Arcano • Flexibilidade",color:"violet",summary:"Une tecnologia e arcano para alternar entre tiro, combate próximo e suporte técnico.",keyAttributes:["CONH","FOC"],startingHp:30,hpPerLevel:4,resource:"Cargas do Núcleo",resourceMax:e=>3,mandatorySkill:"Armas de Fogo",skills:["Tecnologia & Sistemas","Briga/Corpo a Corpo","Sintonia Arcana","Medicina de Combate","Atletismo"],suggestion:"CONH sustenta a parte tecnológica/arcana; FOC mantém sua precisão e concentração.",levels:{1:"Munição Encantada",2:"Sintonia Tecno-Mágica",3:"Adaptabilidade de Sistemas",4:"Golpe Arcano-Infuso",5:"Sobrecarga do Núcleo",6:"Malha de Tecido Rúnico",7:"Recarga Sincronizada",8:"Emissão de Campo Estático",9:"Reciclagem de Energia",10:"Injeção de Éter Medicinal"},trailNames:["Engenheiro Arcano","Lâmina/Gatilho Rúnico","Infiltrador"]},{id:"vanguardista",name:"Vanguardista",identity:"Linha de frente • Proteção • Absorção",color:"red",summary:"A linha de frente. Aguenta pressão, protege aliados e converte impacto em resposta.",keyAttributes:["CON","FOR"],startingHp:36,hpPerLevel:5,resource:"Inflexibilidade",resourceMax:e=>5+e.CON,mandatorySkill:"Briga/Corpo a Corpo",skills:["Fortitude","Atletismo","Imposição","Armas de Fogo","Medicina de Combate","Tecnologia & Sistemas"],suggestion:"CON aumenta muito sua durabilidade; FOR reforça o papel de combate próximo.",levels:{1:"Inflexibilidade + Blindagem Biológica",2:"Postura Imóvel",3:"Provocação Tática",4:"Pele de Ferro Aprimorada",5:"Retaliação de Impacto",6:"Interceptação Balística",7:"Escudo de Absorção Absoluta",8:"Ancoragem Territorial",9:"Vigor Inextinguível",10:"Baluarte Supremo do Ferro"},trailNames:["Bastião","Demolidor","Guardião Rúnico"]},{id:"ciborgue",name:"Ciborgue",identity:"Caça Mecânica • Adaptação Corporal • Destruição de Sistemas",color:"cyan",summary:"Predador tecnológico capaz de analisar sistemas, adaptar o corpo e explorar pontos fracos.",keyAttributes:["CON","FOC"],startingHp:32,hpPerLevel:4,resource:"Pontos de Protocolo (PP)",resourceMax:e=>3+e.FOC,mandatorySkill:"Tecnologia & Sistemas",skills:["Armas de Fogo","Briga/Corpo a Corpo","Fortitude","Investigação","Atletismo","Percepção/Prontidão"],suggestion:"FOC aumenta seus PP e também o VA de armas de fogo; CON sustenta sua adaptação corporal.",levels:{1:"Pontos de Protocolo + Visão de Sistema",2:"Corpo Aumentado",3:"Ponto Fraco",4:"Interface de Combate",5:"Protocolo Antimaterial",6:"Reparação de Campo",7:"Caçador de Máquinas",8:"Sobrecarga de Protocolo",9:"Arsenal Integrado",10:"Arquitetura de Combate"},trailNames:["Samurai Cibernético","Arsenal de Combate","Caçador de Máquinas"]}],C=[{id:"soldado",name:"Soldado",general:"Treinamento Militar: escolha Fortitude ou Imposição; treinamento/experiência se já for treinado.",classManifestations:{atirador:"Disciplina de Combate: escolha uma categoria de arma; 1/rodada, +1 VA no primeiro ataque com ela.",canalizador:"Concentração Militar: 1/rodada, após conjuração bem-sucedida, reduza em 10 a Exaustão gerada, mínimo 0.",hibrido:"Transição de Combate: 1/rodada, após habilidade que consuma Cargas, +1 VA no próximo ataque até o fim do turno.",vanguardista:"Formação de Combate: 1/rodada, quando seria deslocado/empurrado/Caído, 1 PA reduz o deslocamento em 3m ou evita Caído.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Boa para personagens com treinamento formal, disciplina e presença de combate."},{id:"artesao",name:"Artesão",general:"Conhecimento Técnico: Tecnologia & Sistemas ou Investigação; treinamento/experiência se já for treinado.",classManifestations:{atirador:"Modificação de Armamento: 1/Descanso Curto, 6 PA; escolha modificações. Mira: a primeira vez que Mirar no turno, o benefício de Mirar não custa PA.",canalizador:"Aprimoramento Arcano: 1/Descanso Curto, 6 PA; eleve a raridade de um item arcano por 2 rodadas, até o máximo.",hibrido:"Infusão do Núcleo: 1/Descanso Curto, 6 PA; escolha Potência, Regeneração, Resistência, Precisão, Mobilidade, Proteção Arcana, Fortificação ou Canalização para um equipamento.",vanguardista:"Reforço Estrutural: 1/Descanso Curto, 6 PA; barreira/escudo +10 PV/+2 RD; cobertura pode subir uma categoria até Pesada.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Para quem quer transformar equipamento em parte central da ficha."},{id:"medico",name:"Médico",general:"Formação Médica: Medicina de Combate; treinamento/experiência se já for treinado.",classManifestations:{atirador:"Socorro de Combate: 1/rodada, aliado adjacente que sofreu dano desde o fim do seu último turno; 1 PA recupera 1d6 PV.",canalizador:"Medicina Arcana: quando sua conjuração recupera PV, o alvo recupera +1d6 PV.",hibrido:"Estimulante Tecno-Arcano: 1/Descanso Curto, 2 PA; criatura adjacente recupera 2d6 PV.",vanguardista:"Médico de Linha: 1/Descanso Curto, quando aliado adjacente chega a 0 PV, 1 Reação mantém o alvo em 1 PV.",ciborgue:"Tecno-Cura: ao completar Descanso Curto, recebe 3 Tecno-Curas. 1 PA usa uma em criatura adjacente para recuperar 2d6 PV; em Ciborgue, recupera também 1 PP."},idea:"Excelente para grupos que precisam de sustentação sem transformar o personagem em uma classe médica."},{id:"investigador",name:"Investigador",general:"Olhar Investigativo: treinamento/experiência em Investigação.",classManifestations:{atirador:"Identificação de Alvo: 1/rodada, alvo observado por pelo menos 1 rodada; +1 VA.",canalizador:"Leitura Arcana: +2 para identificar magia, efeito ou proteção; sucesso revela função ofensiva, defensiva, utilitária ou de controle.",hibrido:"Análise de Sistemas: +2 Tecnologia & Sistemas para identificar, analisar ou desativar tecnologia, drones, eletrônicos e sistemas automatizados.",vanguardista:"Leitura do Campo: no início do combate, escolha uma criatura percebida; até o fim da primeira rodada, +2 Defesa contra ela.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Boa para personagens de leitura de campo e investigação técnica."},{id:"criminoso",name:"Criminoso",general:"Conhecimento das Ruas: treinamento/experiência em Furtividade.",classManifestations:{atirador:"Saque Ilegal: 1/rodada, sacar/trocar arma compatível com Acesso Rápido sem PA.",canalizador:"Ritual Clandestino: conjurar sem linha de visão hostil; +1 resultado do minijogo.",hibrido:"Gambiarra: 1/rodada ao usar equipamento/acessório/modificação, +1 VA ou +1 Defesa até o início do próximo turno.",vanguardista:"Intimidação Brutal: após acerto corpo a corpo, 1 PA; alvo testa Imposição contra sua Defesa; falha = Assustado até início do próximo turno.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Para quem prefere improviso, infiltração e soluções fora do protocolo."},{id:"pesquisador-arcano",name:"Pesquisador Arcano",general:"Estudos Arcanos: escolha História Arcana ou Simbologia & Runas; treinamento/experiência se já for treinado.",classManifestations:{atirador:"Munição Rúnica: 1/Descanso Curto, prepara munição especial para uma arma em quantidade igual à capacidade.",canalizador:"Teoria do Fluxo: 1/rodada após minijogo bem-sucedido, ignore 1 erro extra sofrido.",hibrido:"Sincronização Arcana: ao gastar Cargas, +2 no próximo teste de Sintonia Arcana até o fim do próximo turno.",vanguardista:"Runas de Proteção: 1/Descanso Curto, toque uma criatura; +3 RD mágico por 2 rodadas.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Ideal para quem quer que teoria e estudo sejam parte da identidade."},{id:"sobrevivente",name:"Sobrevivente",general:"Sobrevivência: treinamento/experiência em Fortitude.",classManifestations:{atirador:"Instinto de Sobrevivência: com metade do PV ou menos, +1 VA.",canalizador:"Concentração sob Pressão: com metade do PV ou menos, +2 Fortitude para manter conjuração.",hibrido:"Núcleo de Emergência: com metade do PV ou menos, primeira habilidade/rodada que gaste Carga concede +1 Defesa até o início do próximo turno.",vanguardista:"Não Cair: 1/rodada, quando um efeito faria você ficar Caído, 1 PA permanece de pé.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Para personagens definidos por resistência, adaptação e instinto."},{id:"mercenario",name:"Mercenário",general:"Treinamento Operacional: escolha Armas de Fogo ou Briga/Corpo a Corpo; treinamento/experiência se já treinado.",classManifestations:{atirador:"Contrato de Abate: no primeiro ataque da cena, escolha Alvo Prioritário; 1/rodada +1 VA contra ele.",canalizador:"Operação Precisa: conjuração de alvo único recebe +1 resultado do minijogo.",hibrido:"Equipamento de Missão: após Descanso Completo, escolha arma/equipamento; até o próximo Descanso Completo, +1 VA ou +1 Defesa.",vanguardista:"Contrato de Proteção: início do combate, escolha aliado; enquanto a até 3m, +1 Defesa e +1 RD físico.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Funciona bem para personagens profissionais, pragmáticos e preparados."},{id:"atleta",name:"Atleta",general:"Condicionamento: treinamento/experiência em Atletismo.",classManifestations:{atirador:"Movimento e Tiro: 1/rodada, após ataque com arma de fogo, 1 PA move 3m sem ataque de oportunidade.",canalizador:"Concentração Física: quando sofrer dano durante conjuração, +2 no próximo Fortitude para manter.",hibrido:"Mobilidade Integrada: 1/rodada, após habilidade que gaste Carga, move 3m sem PA.",vanguardista:"Investida: após mover pelo menos 6m em linha reta em direção a uma criatura e fazer ataque corpo a corpo no mesmo turno, +2 VA.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Para quem quer mobilidade, físico e presença atlética na ficha."},{id:"operador",name:"Operador",general:"Operações Táticas: escolha Tecnologia & Sistemas ou Percepção/Prontidão; treinamento/experiência se já treinado.",classManifestations:{atirador:"Aquisição de Alvo: usando visão/acessório, +1 VA no primeiro ataque após aquisição.",canalizador:"Interface Arcana: usando equipamento mágico/tecnológico como parte da conjuração, +1 resultado do minijogo.",hibrido:"Integração de Sistemas: Tecnologia & Sistemas pode operar/reparar/modificar tecnologia que normalmente exija outra perícia, +2 no teste.",vanguardista:"Plataforma Defensiva: 1/rodada enquanto adjacente a cobertura/barreira/equipamento defensivo, +1 Defesa.",ciborgue:"Manifestação Ciborgue — em consolidação."},idea:"Para personagens táticos, operadores de campo e usuários de tecnologia."}],f=[{id:"pistola",name:"Pistola",kind:"leve",damage:"1d4",range:12,ammo:12,crit:"18×2",failure:6,recoil:0,vaBonus:0},{id:"revolver",name:"Revólver",kind:"leve",damage:"1d6",range:12,ammo:6,crit:"17×2",failure:3,recoil:1,vaBonus:0},{id:"smg",name:"Submetralhadora",kind:"leve",damage:"1d6",range:12,ammo:30,crit:"19×2",failure:15,recoil:2,vaBonus:0},{id:"espingarda",name:"Espingarda",kind:"leve",damage:"2d6",range:6,ammo:6,crit:"16×2",failure:3,recoil:2,vaBonus:0},{id:"fuzil",name:"Fuzil",kind:"longa",damage:"1d10",range:18,ammo:20,crit:"18×2",failure:10,recoil:2,vaBonus:0},{id:"fuzil-atirador",name:"Fuzil de Atirador",kind:"longa",damage:"1d12",range:24,ammo:10,crit:"17×2",failure:5,recoil:2,vaBonus:0},{id:"sniper",name:"Sniper",kind:"longa",damage:"1d20",range:36,ammo:5,crit:"16×2",failure:2,recoil:3,vaBonus:0},{id:"metralhadora",name:"Metralhadora",kind:"longa",damage:"1d8",range:18,ammo:40,crit:"19×2",failure:20,recoil:4,vaBonus:0},{id:"escopeta-devastadora",name:"Escopeta Devastadora",kind:"leve",damage:"3d6",range:6,ammo:4,crit:"16×2",failure:2,recoil:3,vaBonus:0,note:"Impacto Massivo: até 3m, REF CD 15 ou Caído."}],P={CON:0,CONH:0,FOC:0,FOR:0,REF:0};function $(e){return Object.values(e).reduce((a,o)=>a+g[o],0)}function A(e){return 10-$(e)}function M(e,a,o){return e.startingHp+a.CON*(e.id==="vanguardista"?9:e.id==="ciborgue"?8:e.id==="hibrido"?7:e.id==="atirador"?6:5)+Math.max(0,o-1)*(e.hpPerLevel+a.CON)}function h(e,a){return 10+e.FOC+a.vaBonus}function q(e){return 10+e.CON}function y(e,a,o){return{pv:M(e,a.attributes,a.level),va:(e.id==="atirador"||e.id==="hibrido"||e.id==="ciborgue",h(a.attributes,o)),defense:q(a.attributes),resourceMax:e.resourceMax(a.attributes),attributeSpent:$(a.attributes),attributeRemaining:A(a.attributes)}}function O(e,a){const o=e[a];if(o>=4)return!1;const i=g[o+1]-g[o];return A(e)>=i}function E(e,a){return O(e,a)?{...e,[a]:e[a]+1}:e}function I(e,a){return e[a]<=0?e:{...e,[a]:e[a]-1}}const j=document.querySelector("#app"),t={name:"",concept:"",level:1,classId:"atirador",originId:"",trailId:"",attributes:{...P},trainedSkills:[],weaponId:"pistola",equipmentIds:[]};let l="conceito";const d=[{id:"conceito",label:"Conceito",short:"Identidade"},{id:"classe",label:"Classe",short:"Função"},{id:"atributos",label:"Atributos",short:"Base"},{id:"pericias",label:"Perícias",short:"Treinamento"},{id:"origem",label:"Origem",short:"História"},{id:"itens",label:"Itens",short:"Equipamento"},{id:"resumo",label:"Resumo",short:"Ficha"}],n=()=>z.find(e=>e.id===t.classId),x=()=>C.find(e=>e.id===t.originId),v=()=>f.find(e=>e.id===t.weaponId);function m(e){return e.replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function F(e){return{atirador:"⌁",canalizador:"✦",hibrido:"◈",vanguardista:"⬟",ciborgue:"◉"}[e]??"◆"}function c(){const e=n(),a=v(),o=y(e,t,a);j.innerHTML=`
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
        ${w()}
        <main class="min-w-0 px-4 py-6 lg:px-8 lg:py-9">
          ${R()}
          ${N(o)}
        </main>
        ${U(o)}
      </div>
    </div>
  `,G()}function w(e){return`
    <aside class="hidden border-r border-zinc-800/80 lg:block">
      <div class="sticky top-[66px] p-5">
        <div class="mb-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Criação</div>
          <div class="mt-2 text-sm font-bold">${m(t.name||"Personagem sem nome")}</div>
          <div class="mt-1 text-xs text-zinc-500">${m(n().name)} • Nível ${t.level}</div>
        </div>
        <div class="space-y-1">
          ${d.map((a,o)=>`
            <button data-step="${a.id}" class="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${l===a.id?"border border-amber-700/40 bg-amber-400/8 text-amber-100":"text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"}">
              <span class="grid size-7 place-items-center rounded-lg border text-[10px] font-bold ${l===a.id?"border-amber-700/40 bg-amber-500/10":"border-zinc-800 bg-zinc-900"}">${o+1}</span>
              <span class="min-w-0"><span class="block text-sm font-semibold">${a.label}</span><span class="block text-[10px] text-zinc-600">${a.short}</span></span>
            </button>`).join("")}
        </div>
        <div class="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <div class="text-xs font-bold">Dica do sistema</div>
          <p class="mt-2 text-xs leading-5 text-zinc-500">Passe o mouse sobre uma classe, atributo ou propriedade para ver a explicação antes de escolher.</p>
        </div>
      </div>
    </aside>
  `}function R(){const e=d.findIndex(a=>a.id===l);return`
    <div class="mb-8 flex items-center justify-between">
      <div>
        <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Etapa ${e+1} de ${d.length}</div>
        <h1 class="mt-1 text-3xl font-black tracking-tight lg:text-4xl">${d[e].label}</h1>
      </div>
      <div class="flex gap-1">
        ${d.map((a,o)=>`<span class="h-1.5 w-5 rounded-full ${o<=e?"bg-amber-400":"bg-zinc-800"}"></span>`).join("")}
      </div>
    </div>
  `}function N(e){switch(l){case"conceito":return T();case"classe":return V();case"atributos":return L(e);case"pericias":return B();case"origem":return D();case"itens":return H(e);case"resumo":return _(e)}}function T(){return`
    <section class="grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
      <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 lg:p-8">
        <div class="text-xs font-bold text-zinc-400">Comece pelo que define o personagem</div>
        <h2 class="mt-2 text-2xl font-black">Quem é essa pessoa?</h2>
        <p class="mt-2 max-w-xl text-sm leading-6 text-zinc-500">Você não precisa conhecer todas as regras para começar. O criador apresenta apenas o que importa em cada etapa.</p>
        <div class="mt-7 grid gap-4">
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Nome</span>
            <input data-field="name" value="${m(t.name)}" placeholder="Ex.: Kael Voss" class="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-600/60 focus:ring-4 focus:ring-amber-500/10">
          </label>
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Conceito</span>
            <textarea data-field="concept" rows="4" placeholder="Ex.: ex-soldado que caça máquinas corrompidas..." class="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none transition focus:border-amber-600/60 focus:ring-4 focus:ring-amber-500/10">${m(t.concept)}</textarea>
          </label>
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Nível inicial</span>
            <select data-field="level" class="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none">
              ${Array.from({length:14},(e,a)=>`<option value="${a+1}" ${t.level===a+1?"selected":""}>Nível ${a+1}</option>`).join("")}
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
      ${p()}
    </section>`}function V(){return`
    <section>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${z.map(e=>`
          <button data-class="${e.id}" class="group relative rounded-3xl border p-5 text-left transition ${t.classId===e.id?"border-amber-700/50 bg-amber-400/7":"border-zinc-800 bg-zinc-900/55 hover:border-zinc-700"}"
            title="${m(e.summary)}">
            <div class="flex items-start justify-between gap-3">
              <div class="grid size-11 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950 text-lg text-amber-300">${F(e.id)}</div>
              ${t.classId===e.id?'<span class="rounded-full border border-emerald-700/30 bg-emerald-500/8 px-2 py-1 text-[10px] font-bold text-emerald-300">Selecionada</span>':""}
            </div>
            <div class="mt-5 text-xl font-black">${e.name}</div>
            <div class="mt-1 text-xs font-bold text-zinc-500">${e.identity}</div>
            <p class="mt-4 text-sm leading-6 text-zinc-400">${e.summary}</p>
            <div class="mt-5 grid grid-cols-2 gap-2 text-xs">
              <div class="rounded-xl bg-zinc-950/70 p-3"><span class="block text-zinc-600">Atributos-chave</span><b class="mt-1 block">${e.keyAttributes.join(" • ")}</b></div>
              <div class="rounded-xl bg-zinc-950/70 p-3"><span class="block text-zinc-600">Recurso</span><b class="mt-1 block">${e.resource}</b></div>
            </div>
            <div class="mt-4 text-xs text-amber-300 opacity-80">Passe o mouse para ler o resumo completo ↗</div>
          </button>`).join("")}
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
        <div class="text-xs font-bold">Classe atual</div>
        <div class="mt-1 text-lg font-black">${n().name}</div>
        <p class="mt-2 text-sm text-zinc-500">${n().suggestion}</p>
      </div>
      ${p()}
    </section>`}function L(e){const a=Object.keys(b);return`
    <section>
      <div class="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
          <div class="flex items-center justify-between gap-3">
            <div><div class="text-xs font-bold text-zinc-500">Distribuição inicial</div><h2 class="mt-1 text-xl font-black">10 pontos para gastar</h2></div>
            <div class="rounded-2xl border border-amber-700/30 bg-amber-500/7 px-4 py-3 text-right">
              <span class="block text-[10px] uppercase tracking-widest text-zinc-500">Restante</span>
              <strong class="text-2xl text-amber-300">${e.attributeRemaining}</strong>
            </div>
          </div>
          <div class="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
            <table class="w-full text-left text-sm">
              <thead class="bg-zinc-950/80 text-[10px] uppercase tracking-wider text-zinc-500"><tr><th class="px-4 py-3">Atributo</th><th class="px-4 py-3">Valor</th><th class="px-4 py-3">Custo</th><th class="px-4 py-3">Ação</th></tr></thead>
              <tbody>
                ${a.map(o=>{const i=t.attributes[o];return`<tr class="border-t border-zinc-800">
                    <td class="px-4 py-4"><div class="flex items-center gap-3" title="${b[o].description}"><span class="grid size-8 place-items-center rounded-lg bg-zinc-950 text-amber-300">${b[o].icon}</span><div><div class="font-bold">${b[o].label}</div><div class="text-[11px] text-zinc-600">${o}</div></div></div></td>
                    <td class="px-4 py-4"><span class="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 font-black">${i}</span></td>
                    <td class="px-4 py-4"><span class="text-zinc-400">${g[i]}</span></td>
                    <td class="px-4 py-4"><div class="flex gap-2"><button data-attr-minus="${o}" class="grid size-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-800">−</button><button data-attr-plus="${o}" ${i>=k?"disabled":""} class="grid size-9 place-items-center rounded-xl border border-amber-800/30 bg-amber-500/7 text-amber-200 hover:bg-amber-500/12 disabled:cursor-not-allowed disabled:opacity-30">+</button></div></td>
                  </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <StatCard label="PV Máximo" value="${e.pv}" hint="${n().name}" icon="♥"/>
          <StatCard label="VA de fogo" value="${e.va}" hint="10 + FOC + bônus da arma" icon="⌁"/>
          <StatCard label="Defesa" value="${e.defense}" hint="valor calculado pelo motor" icon="◈"/>
          <StatCard label="${n().resource}" value="${e.resourceMax}" hint="limite pelo atributo-chave" icon="✦"/>
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Como funciona o custo</div><p class="mt-2 text-xs leading-5 text-zinc-500">0→0, 1→1, 2→2, 3→4, 4→7. O limite de criação é 4 por atributo.</p></div>
        </div>
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-500">As métricas da coluna lateral são recalculadas imediatamente. O ponto de entrada das fórmulas fica isolado no motor para não espalhar regra pela interface.</div>
      ${p()}
    </section>`}function B(){const e=n(),a=Array.from(new Set([e.mandatorySkill,...e.skills]));return`
  <section class="space-y-5">
    <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
      <div class="flex items-end justify-between"><div><div class="text-xs font-bold text-zinc-500">Treinamento</div><h2 class="mt-1 text-xl font-black">Escolha suas perícias de Classe</h2></div><div class="text-xs text-zinc-500">${t.trainedSkills.length}/4 escolhidas</div></div>
      <div class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        ${a.map(o=>{const i=o===e.mandatorySkill,r=t.trainedSkills.includes(o);return`<label title="${i?"Perícia obrigatória da Classe.":"Uma das opções disponíveis para esta Classe."}" class="cursor-pointer rounded-2xl border p-4 transition ${r?"border-amber-700/40 bg-amber-500/6":"border-zinc-800 bg-zinc-950/40 hover:border-zinc-700"}">
            <div class="flex items-center gap-3"><input data-skill="${m(o)}" type="checkbox" ${r?"checked":""} ${i?"disabled":""} class="size-4 accent-amber-500"><div><div class="text-sm font-bold">${o}</div><div class="mt-1 text-[10px] uppercase tracking-wider ${i?"text-amber-300":"text-zinc-600"}">${i?"Obrigatória":"Disponível"}</div></div></div>
          </label>`}).join("")}
      </div>
      <div class="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs leading-5 text-zinc-500">Criação oficial: 1 perícia obrigatória + 3 escolhas da lista da Classe.</div>
    </div>
    <div class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div class="text-xs font-bold">Nota</div><p class="mt-2 text-xs leading-5 text-zinc-500">O criador preserva os nomes oficiais das 19 perícias. Nenhuma perícia é inventada durante a construção.</p>
    </div>
    ${p()}
  </section>`}function D(){return`
  <section>
    <div class="grid gap-4 md:grid-cols-2">
      ${C.map(e=>{const a=t.originId===e.id;return`<button data-origin="${e.id}" class="rounded-3xl border p-5 text-left transition ${a?"border-amber-700/50 bg-amber-400/7":"border-zinc-800 bg-zinc-900/55 hover:border-zinc-700"}">
          <div class="flex items-start justify-between gap-3"><div><div class="text-xl font-black">${e.name}</div><div class="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">Origem</div></div>${a?'<span class="rounded-full border border-emerald-700/30 px-2 py-1 text-[10px] font-bold text-emerald-300">Selecionada</span>':""}</div>
          <p class="mt-4 text-sm leading-6 text-zinc-400">${e.general}</p>
          <div class="mt-4 rounded-2xl bg-zinc-950/65 p-4"><div class="text-[10px] font-black uppercase tracking-widest text-amber-300">Manifestação — ${n().name}</div><p class="mt-2 text-xs leading-5 text-zinc-500">${e.classManifestations[n().id]}</p></div>
          <div class="mt-4 text-xs text-zinc-600">Sugestão: ${e.idea}</div>
        </button>`}).join("")}
    </div>
    ${p()}
  </section>`}function H(e){const a=v();return`
  <section>
    <div class="grid gap-5 xl:grid-cols-[1fr_310px]">
      <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 lg:p-7">
        <div class="flex items-end justify-between"><div><div class="text-xs font-bold text-zinc-500">Arma principal</div><h2 class="mt-1 text-xl font-black">Escolha seu equipamento inicial</h2></div><div class="text-xs text-zinc-500">${f.length} armas carregadas</div></div>
        <div class="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
          <table class="w-full min-w-[760px] text-left text-xs">
            <thead class="bg-zinc-950/80 text-[10px] uppercase tracking-wider text-zinc-500"><tr><th class="px-4 py-3">Arma</th><th class="px-4 py-3">Dano</th><th class="px-4 py-3">Alcance</th><th class="px-4 py-3">Munição</th><th class="px-4 py-3">Crítico</th><th class="px-4 py-3">Falha</th><th class="px-4 py-3">Recuo</th></tr></thead>
            <tbody>
              ${f.map(o=>`<tr data-weapon="${o.id}" class="cursor-pointer border-t border-zinc-800 hover:bg-zinc-950 ${t.weaponId===o.id?"bg-amber-500/5":""}">
                <td class="px-4 py-4 font-bold">${o.name}${t.weaponId===o.id?' <span class="text-amber-300">●</span>':""}</td><td class="px-4 py-4">${o.damage}</td><td class="px-4 py-4">${o.range}m</td><td class="px-4 py-4">${o.ammo}</td><td class="px-4 py-4">${o.crit}</td><td class="px-4 py-4">${o.failure}</td><td class="px-4 py-4">${o.recoil}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
        ${a.note?`<div class="mt-4 rounded-2xl border border-red-900/40 bg-red-500/5 p-4 text-xs text-red-200">${a.note}</div>`:""}
      </div>
      <div class="space-y-4">
        <StatCard label="VA atual" value="${e.va}" hint="${a.name} • bônus de arma ${a.vaBonus>=0?"+":""}${a.vaBonus}" icon="⌁"/>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Arma selecionada</div><div class="mt-2 text-lg font-black">${a.name}</div><div class="mt-1 text-xs text-zinc-600">${a.damage} • ${a.range}m • ${a.ammo} munições</div></div>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Regra de Falha</div><p class="mt-2 text-xs leading-5 text-zinc-500">Falha é tratada como condição de uso/ambiente e segue as regras específicas da arma; não é uma falha aleatória automática por ataque.</p></div>
      </div>
    </div>
    ${p()}
  </section>`}function _(e){const a=x(),o=n();return`
  <section class="space-y-5">
    <div class="grid gap-5 xl:grid-cols-[1fr_340px]">
      <div class="space-y-5">
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Ficha</div>
          <div class="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h2 class="text-3xl font-black">${m(t.name||"Personagem sem nome")}</h2><p class="mt-1 text-sm text-zinc-500">${m(t.concept||"Sem conceito definido")} • Nível ${t.level}</p></div><span class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs font-bold">${o.name}</span></div>
          <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><StatCard label="PV" value="${e.pv}" hint="máximo" icon="♥"/><StatCard label="VA" value="${e.va}" hint="arma de fogo" icon="⌁"/><StatCard label="Defesa" value="${e.defense}" hint="derivada" icon="◈"/><StatCard label="Recurso" value="${e.resourceMax}" hint="máximo" icon="✦"/></div>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Atributos</div><div class="mt-4 grid grid-cols-5 gap-2">${Object.keys(t.attributes).map(i=>`<div title="${b[i].description}" class="rounded-2xl border border-zinc-800 bg-zinc-950 p-3 text-center"><span class="block text-[10px] text-zinc-600">${i}</span><strong class="text-lg">${t.attributes[i]}</strong></div>`).join("")}</div></div>
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Origem</div><div class="mt-2 text-lg font-black">${a?.name||"Não escolhida"}</div><p class="mt-2 text-xs leading-5 text-zinc-500">${a?.general||"Escolha uma Origem para completar a identidade."}</p></div>
        </div>
        <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5"><div class="text-xs font-bold">Perícias treinadas</div><div class="mt-3 flex flex-wrap gap-2">${t.trainedSkills.length?t.trainedSkills.map(i=>`<span class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300">${i}</span>`).join(""):'<span class="text-xs text-zinc-600">Nenhuma selecionada.</span>'}</div></div>
      </div>
      <aside class="rounded-3xl border border-amber-700/20 bg-amber-500/5 p-6">
        <div class="text-[10px] font-black uppercase tracking-[.16em] text-amber-300">Checklist</div>
        <div class="mt-4 space-y-3 text-sm">
          ${[["Conceito",!!t.name||!!t.concept],["Classe",!!t.classId],["Atributos",e.attributeRemaining===0],["Perícias",t.trainedSkills.length===4],["Origem",!!t.originId],["Equipamento",!!t.weaponId]].map(([i,r])=>`<div class="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"><span>${i}</span><span class="${r?"text-emerald-300":"text-zinc-600"}">${r?"✓":"—"}</span></div>`).join("")}
        </div>
        <button data-export class="mt-5 w-full rounded-2xl bg-amber-400 px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-300">Exportar ficha JSON</button>
        <button data-copy class="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-bold hover:bg-zinc-900">Copiar resumo</button>
      </aside>
    </div>
    ${p()}
  </section>`}function p(){const e=d.findIndex(a=>a.id===l);return`<div class="mt-6 flex flex-wrap justify-between gap-3">
    <button data-prev ${e===0?"disabled":""} class="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3 text-sm font-bold text-zinc-400 hover:bg-zinc-900 disabled:opacity-30">← Anterior</button>
    <button data-next ${e===d.length-1?"disabled":""} class="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-black text-zinc-950 hover:bg-amber-300 disabled:opacity-30">Próxima etapa →</button>
  </div>`}function U(e){return`
  <aside class="border-t border-zinc-800/80 bg-zinc-950/40 lg:border-l lg:border-t-0">
    <div class="sticky top-[66px] p-5">
      <div class="text-[10px] font-black uppercase tracking-[.16em] text-zinc-600">Ficha em tempo real</div>
      <div class="mt-3 rounded-3xl border border-zinc-800 bg-zinc-900/65 p-5">
        <div class="text-sm font-bold">${m(t.name||"Personagem sem nome")}</div>
        <div class="mt-1 text-xs text-zinc-500">${n().name} • ${x()?.name||"Sem Origem"}</div>
        <div class="mt-5 grid grid-cols-2 gap-2">
          <MiniStat label="PV" value="${e.pv}"/><MiniStat label="VA" value="${e.va}"/>
          <MiniStat label="Def" value="${e.defense}"/><MiniStat label="PA" value="3"/>
        </div>
        <div class="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><div class="text-[10px] uppercase tracking-widest text-zinc-600">Recurso</div><div class="mt-1 font-black">${n().resource}: ${e.resourceMax}</div></div>
      </div>
      <div class="mt-5 rounded-3xl border border-zinc-800 bg-zinc-900/45 p-5">
        <div class="text-xs font-bold">Escolhas atuais</div>
        <div class="mt-3 space-y-2 text-xs text-zinc-500">
          <div class="flex justify-between"><span>Classe</span><b class="text-zinc-300">${n().name}</b></div>
          <div class="flex justify-between"><span>Origem</span><b class="text-zinc-300">${x()?.name||"—"}</b></div>
          <div class="flex justify-between"><span>Arma</span><b class="text-zinc-300">${v().name}</b></div>
          <div class="flex justify-between"><span>Atributos gastos</span><b class="text-zinc-300">${e.attributeSpent}/10</b></div>
        </div>
      </div>
    </div>
  </aside>`}function G(){document.querySelectorAll("[data-step]").forEach(e=>{e.addEventListener("click",()=>{l=e.dataset.step,c()})}),document.querySelectorAll("[data-class]").forEach(e=>e.addEventListener("click",()=>{t.classId=e.dataset.class;const a=n();t.trainedSkills=[a.mandatorySkill],t.originId="",c()})),document.querySelectorAll("[data-origin]").forEach(e=>e.addEventListener("click",()=>{t.originId=e.dataset.origin,c()})),document.querySelectorAll("[data-weapon]").forEach(e=>e.addEventListener("click",()=>{t.weaponId=e.dataset.weapon,c()})),document.querySelectorAll("[data-attr-plus]").forEach(e=>e.addEventListener("click",()=>{t.attributes=E(t.attributes,e.dataset.attrPlus),c()})),document.querySelectorAll("[data-attr-minus]").forEach(e=>e.addEventListener("click",()=>{t.attributes=I(t.attributes,e.dataset.attrMinus),c()})),document.querySelectorAll("[data-skill]").forEach(e=>e.addEventListener("change",()=>{const a=e.dataset.skill;a!==n().mandatorySkill&&(e.checked&&t.trainedSkills.length<4&&(t.trainedSkills=[...t.trainedSkills,a]),e.checked||(t.trainedSkills=t.trainedSkills.filter(o=>o!==a)),c())})),document.querySelectorAll("[data-field]").forEach(e=>e.addEventListener("input",()=>{const a=e.dataset.field;a==="level"?t.level=Number(e.value):t[a]=e.value,c()})),document.querySelector("[data-prev]")?.addEventListener("click",()=>{const e=d.findIndex(a=>a.id===l);e>0&&(l=d[e-1].id,c())}),document.querySelector("[data-next]")?.addEventListener("click",()=>{const e=d.findIndex(a=>a.id===l);e<d.length-1&&(l=d[e+1].id,c())}),document.querySelector("[data-reset]")?.addEventListener("click",e=>{e.preventDefault(),location.reload()}),document.querySelector("[data-export]")?.addEventListener("click",()=>{const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download=`${(t.name||"personagem").replace(/\s+/g,"-").toLowerCase()}.json`,a.click(),URL.revokeObjectURL(a.href)}),document.querySelector("[data-copy]")?.addEventListener("click",async()=>{const e=n(),a=x(),o=v(),i=y(e,t,o),r=`${t.name||"Personagem"} — ${e.name} — Nível ${t.level}
PV ${i.pv} • VA ${i.va} • Defesa ${i.defense}
Atributos: ${Object.entries(t.attributes).map(([u,S])=>`${u} ${S}`).join(" • ")}
Origem: ${a?.name||"—"}
Arma: ${o.name}`;await navigator.clipboard?.writeText(r);const s=document.querySelector("[data-copy]");if(s){const u=s.textContent;s.textContent="Resumo copiado ✓",setTimeout(()=>s.textContent=u,1200)}})}c();
