(() => {
  'use strict'

  const chapters = [
    {
      id: 'lore', number: '00', title: 'O Universo de Ferro & Arcano', lead: 'O mundo que aprendeu a não tocar no desconhecido, o tabu do Arcano, a ascensão do Ferro e a guerra nas sombras.', blocks: [
        ['O Mundo que Aprendeu a Não Tocar no Desconhecido', 'A humanidade sempre acreditou que o mundo possuía regras: a água corria para baixo, o fogo consumia o que encontrava, a matéria ocupava espaço e a vida nascia, crescia e morria. Durante séculos, cada descoberta científica parecia aproximar a humanidade de uma compreensão completa da realidade.<br><br>Então havia o <strong>Arcano</strong>.<br>Ele sempre esteve aqui. Antes das cidades, antes das máquinas, antes das primeiras civilizações e antes mesmo de existirem palavras para descrevê-lo. O Arcano não foi criado, não foi descoberto e não foi concedido por deuses. Ele simplesmente existe. E essa talvez seja a coisa mais assustadora sobre ele.'],
        ['O Arcano Não Obedece', 'Sacerdotes o interpretaram como manifestação divina, filósofos tentaram transformá-lo em conhecimento e cientistas tentaram reproduzi-lo em condições controladas. Todos estavam parcialmente errados. O Arcano não possui a estabilidade que a razão espera da natureza: ele é selvagem, imprevisível e instável. Duas pessoas tentando o mesmo efeito colhem manifestações completamente diferentes.<br><br>E existe uma verdade que a humanidade demorou tempo demais para aceitar: <strong>todo ser humano possui acesso ao Arcano</strong>. Não existem escolhidos, nem famílias destinadas, nem bênção divina. Qualquer um pode tentar tocar a trama arcana — e qualquer um pode perder o controle. Cada cidadão carrega dentro de si uma arma de destruição em massa em potencial.'],
        ['O Maior Tabu da Humanidade', 'Com o passar das eras, usar o Arcano deixou de ser uma demonstração de poder e passou a ser um alerta de perigo público. A sociedade moderna não baniu necessariamente a magia: ela simplesmente aprendeu a temê-la e evitá-la a todo custo.<br><br>Aquele que decide estudá-lo é vigiado; aquele que o conjura é denunciado. Um homem que salva uma criança usando uma manifestação arcana pode ser chamado de herói pelas câmeras, mas também será rotulado de irresponsável pelas autoridades. A humanidade não deixou de acreditar no Arcano: <strong>ela passou a ter pavor dele</strong>.'],
        ['O Ferro: A Alternativa Construída', 'Diante daquilo que não podia controlar, a humanidade construiu sua alternativa: <strong>O Ferro</strong>. Se a magia exigia talento e risco, máquinas operavam seguindo código e engrenagens. Se uma pessoa corria risco de entrar em colapso ao manipular energia, uma máquina podia ser forjada para executar o trabalho com fria precisão.<br><br>Próteses mecânicas superaram membros naturais, implantes transformaram corpos em plataformas tecnológicas e inteligências artificiais passaram a gerir cidades inteiras. O Ferro encontrou seu lugar como alternativa indispensável:<br><br><i>"O Arcano oferece poder sem garantias. O Ferro oferece poder construído para oferecer garantias."</i>'],
        ['A Terra Que Sobreviveu', 'O futuro de Ferro & Arcano não se passa em outro planeta nem em uma galáxia distante: é a mesma Terra. Os mesmos continentes, oceanos e nações históricas — Brasil, Estados Unidos, Japão, China, Alemanha, Rússia e tantas outras.<br><br>As grandes cidades cresceram verticalmente em quilômetros de altura, onde prédios abrigam verdadeiras cidades em seus interiores, hologramas disputam espaço publicitário e o tráfego aéreo é controlado por malhas sintéticas. Mas a estabilidade civil é apenas uma fachada sobre um abismo corporativo.'],
        ['A Era das Giga Empresas', 'Os governos ainda existem oficialmente, presidentes discursam e leis são votadas. Mas, com o avanço tecnológico e econômico, certas megacorporações cresceram além de qualquer escala conhecida: as <strong>Giga Empresas</strong>.<br><br>Elas controlam energia, comunicação, transporte, saúde, segurança, arcanotecnologia e defesa. Não precisaram abolir os governos: aprenderam a operar através deles. Uma decisão tomada em uma sala corporativa em São Paulo, Nova York ou Tóquio afeta milhões de vidas antes que o Estado consiga sequer reagir.'],
        ['As Novas Guerras & Espionagem Privada', 'As maiores guerras do mundo moderno raramente começam com tanques cruzando fronteiras abertas. As verdadeiras guerras são econômicas e clandestinas. Uma empresa descobre uma tecnologia; a concorrente precisa roubá-la. Uma pesquisa ameaça um monopólio; laboratórios precisam desaparecer em "acidentes controlados".<br><br>As disputas começam com funcionários sequestrados, servidores infiltrados, patentes hackeadas e campanhas de desinformação. As Giga Empresas não lutam abertamente: <strong>lutam através de operadores especializados, mercenários e equipes de extração</strong>.'],
        ['O Brasil, a BRAVIA e a BRASA', 'Entre as potências globais ergue-se o Brasil — gigantesco, diverso e profundamente redefinido pela arcanotecnologia. A principal força econômica do país é a <strong>BRAVIA</strong>, gigante que controla matriz energética, infraestrutura, biocombustíveis e defesa.<br><br>Para proteger seus segredos e agir onde as leis não alcançam, a Bravia mantém a <strong>BRASA (Brigada de Reconhecimento, Análise, Segurança e Ações)</strong> — sua lendária divisão de inteligência privada. Seus operadores investigam concorrentes, recuperam patentes e contêm surtos arcanos sob um juramento inquebrável:<br><br><blockquote style="border-left:3px solid #fbbf24; padding-left:12px; margin:8px 0; color:#fcd34d;">"Enquanto houver cobra fumando, haverá BRASA."</blockquote>'],
        ['A Humanidade Brinca de Deus: Os Monstros', 'A biologia dos animais nunca foi feita para suportar o Arcano. Isso não impediu a curiosidade humana: corporações expuseram espécimes a infusões forçadas de energia mágica, combinadas com implantes cibernéticos e edição genética.<br><br>O resultado foi o nascimento de aberrações biotecnológicas que nunca deveriam existir. Em Ferro & Arcano, muitos monstros não são feras mitológicas que despertaram: são armas biológicas descartadas, cobaias que escaparam e experimentos que funcionaram bem demais — até deixarem de obedecer.'],
        ['Corpos Além do Humano', 'Não existem outras raças inteligentes no cenário: existe apenas a humanidade. Porém, o conceito de corpo humano foi completamente transformado. Próteses avançadas, chassis de titânio, moduladores de voz e hologramas subdérmicos permitem que as pessoas reconstruam sua própria estética.<br><br>Alguns escolhem parecer quase inteiramente biológicos; outros se tornam titãs de cromo e engrenagens. Mas sob qualquer carcaça tecnológica ou blindagem rígida, continua existindo a mesma centelha humana vulnerável.'],
        ['O Fogo Cruzado nas Sombras', 'No centro dessa engrenagem estão pessoas tentando sobreviver: atiradores de aluguel, canalizadores clandestinos que desafiam o tabu, vanguardistas blindados, ciborgues caçadores e híbridos de laboratório.<br><br>Uma missão nunca é apenas uma investigação de rotina. Um desaparecimento esconde uma patente roubada, e um monstro no esgoto é a assinatura de uma megacorporação rival. E nas frestas da realidade, o Arcano continua sussurrando... instável e eterno.']
      ]
    },
    {
      id: 'corps', number: '01', title: 'Dossiê das Giga Empresas & Inteligência', lead: 'O tabuleiro geopolítico com as 20 potências corporativas dominantes e suas agências clandestinas de espionagem.', blocks: [
        ['🇧🇷 Brasil · BRAVIA | BRASA', '<strong>Giga Empresa:</strong> BRAVIA<br><strong>Setor de Inteligência:</strong> BRASA — Brigada de Reconhecimento, Análise, Segurança e Ações.<br><strong>Setores:</strong> Energia, infraestrutura, arcanotecnologia pesada, transporte e defesa territorial.<br><strong>Lema de Campo:</strong> <i>"Enquanto houver cobra fumando, haverá BRASA."</i><br><br>A maior corporação da América Latina mantém megacomplexos verticais e laboratórios de contenção. A BRASA é reverenciada pela letalidade em ambientes hostis, combate em selva e guerra assimétrica.'],
        ['🇺🇸 Estados Unidos · VALOR | VANT', '<strong>Giga Empresa:</strong> VALOR<br><strong>Setor de Inteligência:</strong> VANT — Vigilância, Análise e Neutralização Tática.<br><strong>Setores:</strong> Balística avançada, inteligência artificial tática, drones hipersônicos e satélites de monitoramento éter.<br><br>O gigante norte-americano comanda a indústria de armamentos de maior precisão do mundo. O VANT coordena esquadrões de ataque cirúrgico e monitoramento em tempo real em qualquer ponto do globo.'],
        ['🇨🇳 China · TIANLONG | LONGA', '<strong>Giga Empresa:</strong> TIANLONG<br><strong>Setor de Inteligência:</strong> LONGA — Liga de Operações, Neutralização e Gestão Avançada.<br><strong>Setores:</strong> Computação quântica rúnica, manufatura pesada, redes neurais e ferrovias maglev continentais.<br><br>A Tianlong ("Dragão Celestial") opera em simbiose com o Estado. A LONGA é uma teia invisível de vigilância massiva capaz de antecipar e erradicar dissidências corporativas antes de seu nascimento.'],
        ['🇯🇵 Japão · KAGE | SHIN', '<strong>Giga Empresa:</strong> KAGE<br><strong>Setor de Inteligência:</strong> SHIN — Seção de Inteligência e Neutralização.<br><strong>Setores:</strong> Microcibernética de luxo, camuflagem termo-óptica, lâminas tecno-arcanas e automação autônoma.<br><br>Com tecnologia refinada até a perfeição microscópica, a KAGE produz os implantes neurais mais cobiçados do mercado. A SHIN é especialista em infiltrações silenciosas e eliminação sem vestígios.'],
        ['🇩🇪 Alemanha · EISENWERK | WOLF', '<strong>Giga Empresa:</strong> EISENWERK<br><strong>Setor de Inteligência:</strong> WOLF — Wehr Operations, Logistik und Feldaufklärung.<br><strong>Setores:</strong> Metalurgia de ligas reforçadas, exoesqueletos industriais, blindagens de combate e maquinário pesado.<br><br>Representando a máxima expressão do Ferro, a Eisenwerk fabrica veículos e armaduras impenetráveis. A WOLF atua como uma matilha de contraespionagem implacável e reconhecimento blindado.'],
        ['🇫🇷 França · LUMIÈRE | OMBRE', '<strong>Giga Empresa:</strong> LUMIÈRE<br><strong>Setor de Inteligência:</strong> OMBRE — Organisation de Monitoring, Búsqueda, Reconnaissance et Extraction.<br><strong>Setores:</strong> Bioestética cibernética, teoria rúnica clássica, diplomacia corporativa e redes de satélites ópticos.<br><br>A Lumière dita as tendências de sofisticação e implantes de alta sociedade. Nas sombras dos salões requintados, a OMBRE intercepta segredos e financia golpes em empresas concorrentes.'],
        ['🇬🇧 Reino Unido · CROWN | BLACK', '<strong>Giga Empresa:</strong> CROWN<br><strong>Setor de Inteligência:</strong> BLACK — Bureau for Liaison, Analysis, Covert Knowledge.<br><strong>Setores:</strong> Mercados financeiros globais, criptografia quântica, inteligência acústica e rotas navais automatizadas.<br><br>A Crown administra os fluxos de crédito e capitais que financiam o mundo corporativo. O Bureau BLACK guarda registros seculares de linhagens e arquivos confidenciais sobre todas as outras Giga Empresas.'],
        ['🇷🇺 Rússia · ZVEZDA | VOLK', '<strong>Giga Empresa:</strong> ZVEZDA<br><strong>Setor de Inteligência:</strong> VOLK — Vigilância, Operações, Logística e Komando.<br><strong>Setores:</strong> Mineração subterrânea de éter, reatores criogênicos, ciborgues pesados de ruptura e armas antimaterial.<br><br>A Zvezda domina as reservas energéticas do norte gelado. A divisão armada VOLK é conhecida pela brutalidade sem precedentes: quando entram em campo, instalações inteiras são apagadas do mapa.'],
        ['🇮🇳 Índia · VEDA | NETRA', '<strong>Giga Empresa:</strong> VEDA<br><strong>Setor de Inteligência:</strong> NETRA — National Espionage, Tracking and Reconnaissance Agency.<br><strong>Setores:</strong> Redes de dados biométricos, arcanofarmacologia, neuroprocessadores e modelos preditivos.<br><br>A Veda comanda a maior infraestrutura de pesquisa biofarmacêutica e processamento da Ásia. A NETRA utiliza algoritmos preditivos capazes de calcular movimentações de mercado e rotas de contrabando.'],
        ['🇮🇹 Itália · AURELIA | CORVO', '<strong>Giga Empresa:</strong> AURELIA<br><strong>Setor de Inteligência:</strong> CORVO — Centro Operativo de Reconhecimento, Vigilância e Operações.<br><strong>Setores:</strong> Veículos ultrarrápidos de indução arcana, balística personalizada e engenharia aeroespacial.<br><br>A Aurelia transforma velocidade e letalidade em arte. Seus carros de interceptação cruzam rodovias magnéticas, enquanto os agentes do CORVO executam extrações em alta velocidade.'],
        ['🇨🇦 Canadá · NORTHSTAR | FROST', '<strong>Giga Empresa:</strong> NORTHSTAR<br><strong>Setor de Inteligência:</strong> FROST — Federal Reconnaissance and Operations Security Taskforce.<br><strong>Setores:</strong> Radares de rastreamento sub-éter, patrulha ártica e contenção de vazamentos energéticos nas calotas polares.'],
        ['🇦🇺 Austrália · SOUTHERN CROSS | DINGO', '<strong>Giga Empresa:</strong> SOUTHERN CROSS<br><strong>Setor de Inteligência:</strong> DINGO — Directorate of Intelligence, Neutralization and Global Operations.<br><strong>Setores:</strong> Rastreamento em desertos extremos, caça a quimeras fugitivas e exploração mineral profunda.'],
        ['🇰🇷 Coreia do Sul · HAN | GWI', '<strong>Giga Empresa:</strong> HAN<br><strong>Setor de Inteligência:</strong> GWI — Global Reconnaissance & Watch Intelligence.<br><strong>Setores:</strong> Conexões neurais de latência zero, telas táteis holográficas, guerra cibernética e drones autônomos de combate.'],
        ['🇲🇽 México · QUETZAL | ÁGUILA', '<strong>Giga Empresa:</strong> QUETZAL<br><strong>Setor de Inteligência:</strong> ÁGUILA — Agência de Gestão, Investigação, Vigilância e Ações.<br><strong>Setores:</strong> Redes de logística subterrânea, engenharia sísmica, balística pesada e operações contra cartéis clandestinos.'],
        ['🇮🇩 Indonésia · GARUDA | NAGA', '<strong>Giga Empresa:</strong> GARUDA<br><strong>Setor de Inteligência:</strong> NAGA — National Analysis, Guard and Assessment.<br><strong>Setores:</strong> Defesa arquipelágica, plataformas offshore de refino de éter e segurança de cabos submarinos.'],
        ['🇸🇦 Arábia Saudita · SABAA | RIMAL', '<strong>Giga Empresa:</strong> SABAA<br><strong>Setor de Inteligência:</strong> RIMAL — Reconnaissance, Intelligence, Monitoring and Action Legion.<br><strong>Setores:</strong> Fortalezas corporativas no deserto, refino tecno-arcano de alta pressão e regimentos privados de elite.'],
        ['🇿🇦 África do Sul · UBUNTU | MAMBA', '<strong>Giga Empresa:</strong> UBUNTU<br><strong>Setor de Inteligência:</strong> MAMBA — Monitoring, Analysis, Management and Black Actions.<br><strong>Setores:</strong> Mineração de minerais raros para núcleos arcanos, veículos blindados de savana e segurança de depósitos profundos.'],
        ['🇹🇷 Turquia · AYYILDIZ | BOZKURT', '<strong>Giga Empresa:</strong> AYYILDIZ<br><strong>Setor de Inteligência:</strong> BOZKURT — Bureau of Operations, Zero-Knowledge, Reconnaissance and Tactical Operations.<br><strong>Setores:</strong> Hub logístico Eurásia, rotas comerciais terrestres e redes de operações de inteligência zero-knowledge.'],
        ['🇦🇷 Argentina · PLATA | CONDOR', '<strong>Giga Empresa:</strong> PLATA<br><strong>Setor de Inteligência:</strong> CONDOR — Comando de Operaciones, Neutralización, Defensa, Observación y Reconocimiento.<br><strong>Setores:</strong> Monitoramento aeroespacial do hemisfério sul, agricultura mecanizada massiva e telecomunicações austrais.'],
        ['🇪🇸 Espanha · IBERIA | LANCE', '<strong>Giga Empresa:</strong> IBERIA<br><strong>Setor de Inteligência:</strong> LANCE — Logística, Análisis, Neutralización, Contraespionaje y Extracción.<br><strong>Setores:</strong> Portos marítimos de alta segurança, estaleiros navais automatizados e redes de contraespionagem do Mediterrâneo.'],
        ['Tabela Consolidada das 20 Giga Empresas', 'Lista completa para referência rápida em mesa:<br><br>' +
          '• 🇧🇷 <strong>Brasil:</strong> BRAVIA · Inteligência: <strong>BRASA</strong><br>' +
          '• 🇺🇸 <strong>Estados Unidos:</strong> VALOR · Inteligência: <strong>VANT</strong><br>' +
          '• 🇨🇳 <strong>China:</strong> TIANLONG · Inteligência: <strong>LONGA</strong><br>' +
          '• 🇯🇵 <strong>Japão:</strong> KAGE · Inteligência: <strong>SHIN</strong><br>' +
          '• 🇩🇪 <strong>Alemanha:</strong> EISENWERK · Inteligência: <strong>WOLF</strong><br>' +
          '• 🇫🇷 <strong>França:</strong> LUMIÈRE · Inteligência: <strong>OMBRE</strong><br>' +
          '• 🇬🇧 <strong>Reino Unido:</strong> CROWN · Inteligência: <strong>BLACK</strong><br>' +
          '• 🇷🇺 <strong>Rússia:</strong> ZVEZDA · Inteligência: <strong>VOLK</strong><br>' +
          '• 🇮🇳 <strong>Índia:</strong> VEDA · Inteligência: <strong>NETRA</strong><br>' +
          '• 🇮🇹 <strong>Itália:</strong> AURELIA · Inteligência: <strong>CORVO</strong><br>' +
          '• 🇨🇦 <strong>Canadá:</strong> NORTHSTAR · Inteligência: <strong>FROST</strong><br>' +
          '• 🇦🇺 <strong>Austrália:</strong> SOUTHERN CROSS · Inteligência: <strong>DINGO</strong><br>' +
          '• 🇰🇷 <strong>Coreia do Sul:</strong> HAN · Inteligência: <strong>GWI</strong><br>' +
          '• 🇲🇽 <strong>México:</strong> QUETZAL · Inteligência: <strong>ÁGUILA</strong><br>' +
          '• 🇮🇩 <strong>Indonésia:</strong> GARUDA · Inteligência: <strong>NAGA</strong><br>' +
          '• 🇸🇦 <strong>Arábia Saudita:</strong> SABAA · Inteligência: <strong>RIMAL</strong><br>' +
          '• 🇿🇦 <strong>África do Sul:</strong> UBUNTU · Inteligência: <strong>MAMBA</strong><br>' +
          '• 🇹🇷 <strong>Turquia:</strong> AYYILDIZ · Inteligência: <strong>BOZKURT</strong><br>' +
          '• 🇦🇷 <strong>Argentina:</strong> PLATA · Inteligência: <strong>CONDOR</strong><br>' +
          '• 🇪🇸 <strong>Espanha:</strong> IBERIA · Inteligência: <strong>LANCE</strong>']
      ]
    },
    {
      id: 'core', number: '02', title: 'O Núcleo do Sistema', lead: 'A base técnica que rege a realidade física e de desenvolvimento em Ferro & Arcano.', blocks: [
        ['Atributos Fundamentais', 'O sistema conta com 5 atributos fundamentais que definem todas as capacidades da sua personagem:<br><br>• <strong>CON (Constituição):</strong> Sustenta seus PV (Pontos de Vida), testes de Fortitude, resistência física e tolerância ao desgaste arcano.<br>• <strong>CONH (Conhecimento):</strong> Rege tecnologia e sistemas, investigação, medicina de combate, teoria arcana e sua Exaustão Máxima.<br>• <strong>FOC (Foco):</strong> Rege sua precisão balística, concentração e adiciona tempo inicial ao minijogo arcano.<br>• <strong>FOR (Força):</strong> Aplica-se ao combate corpo a corpo, manobras físicas e capacidade de carga.<br>• <strong>REF (Reflexo):</strong> Controla sua Esquiva, mobilidade, iniciativa e agilidade geral.'],
        ['Distribuição na Criação', 'Todos os atributos começam em <strong>0</strong>. Você recebe <strong>10 pontos</strong> para distribuir livremente, com um limite de <strong>máximo 4</strong> pontos em qualquer atributo. Os custos de compra são progressivos:<br><br>• Atributo 0 → custo 0<br>• Atributo 1 → custo 1<br>• Atributo 2 → custo 2<br>• Atributo 3 → custo 4<br>• Atributo 4 → custo 7.'],
        ['Perícias Oficiais', 'Existem <strong>19 perícias oficiais</strong> no sistema. O treinamento concede um bônus de <strong>+2</strong>. Na criação, você recebe 1 perícia obrigatória da sua Classe e mais 3 escolhas livres da lista da Classe, totalizando 4 perícias treinadas.<br><br><i>Regra de teste fora de combate:</i> Rola-se <strong>1d20 + Atributo</strong> OU <strong>1d20 + Perícia Treinada</strong>, o que for maior (nunca ambos combinados).<br><br><strong>Lista completa por atributo chave:</strong><br>• <strong>CON:</strong> Fortitude, Tolerância Arcana.<br>• <strong>CONH:</strong> Simbologia & Runas, História Arcana, Tecnologia & Sistemas, Medicina de Combate, Investigação.<br>• <strong>FOC:</strong> Armas de Fogo, Percepção / Prontidão, Intuição, Sintonia Arcana.<br>• <strong>FOR:</strong> Briga / Corpo a Corpo, Atletismo, Imposição.<br>• <strong>REF:</strong> Esquiva, Acrobacia, Furtividade, Pilotagem, Prestidigitação.<br><br>'],
        ['Valores Derivados', 'Os valores de sobrevivência e ação do personagem são calculados da seguinte forma:<br><br>• <strong>Pontos de Ação (PA):</strong> 3 por turno.<br>• <strong>Reação:</strong> 1 por rodada.<br>• <strong>Deslocamento Base:</strong> 9 metros.<br>• <strong>Defesa Estática:</strong> 10 + CON + Proteção + Modificadores.<br>• <strong>Exaustão Máxima:</strong> CON × 15 + CONH × 10.'],
        ['Economia de Ações', 'Em combate, os Pontos de Ação (PA) ditam o ritmo de cada turno:<br><br>• <strong>Movimento até 9m:</strong> 1 PA.<br>• <strong>Ataque ou Disparo:</strong> 2 PA.<br>• <strong>Conjurar Magia:</strong> 2 PA.<br>• <strong>Recarregar Arma:</strong> 1 PA.<br>• <strong>Levantar de Caído:</strong> 1 PA.<br>• <strong>Corrida (até 18m):</strong> 3 PA.<br><br>O movimento de 9m pode ser dividido livremente antes, durante ou após a realização de outras ações.'],
        ['Descansos', 'Recuperação de recursos em campo:<br><br>• <strong>Descanso Curto (30 minutos):</strong> Recupera 20 de Exaustão, 1d10 + CON pontos de vida (PV) e recarrega recursos de Classe específicos.<br>• <strong>Descanso Completo (8 horas):</strong> Restaura completamente seus PV e Exaustão, reinicia os recursos de Classe e reduz 1 ponto de Colapso acumulado.<br><br>Você só pode realizar um máximo de <strong>2 Descansos Curtos</strong> antes de ser obrigado a realizar um Descanso Completo.'],
        ['Progressão e Níveis (1 a 14)', 'A progressão não utiliza XP convencional, sendo baseada em <strong>Pontos de Missão (PM)</strong>:<br>• <strong>1 PM:</strong> Conclusão da missão principal + objetivos secundários.<br>• <strong>0,5 PM:</strong> Apenas missão principal concluída.<br>• <strong>0 PM:</strong> Falha completa na missão.<br><br>A cada <strong>3 PM acumulados</strong>, consome-se os pontos e o personagem sobe 1 nível (máximo nível 14). Não existe multiclasse. A Trilha escolhida no nível 10 se torna permanente. Os atributos aumentam nos níveis pares (2, 4, 6, 8, 10, 14).']
      ]
    },
    {
      id: 'combat', 
      number: '03', 
      title: 'Combate e Balística', 
      lead: 'Regras de engajamento, armas de fogo, posicionamento e condições de sobrevivência.',
       blocks: [
        ['Resolução de Ataques',
           'A precisão e a letalidade dependem do tipo de engajamento:<br><br>• <strong>Armas de Fogo (Distância):</strong><br>VA (Valor de Ataque) = 10 + FOC + bônus da arma + modificadores.<br>• <strong>Corpo a Corpo (Físico):</strong><br>VA = 10 + FOR + Briga/Corpo a Corpo + bônus da arma + modificadores.<br><br>'],
        ['Resolução de Defesa', 
          'A Defesa estática é de 10 + CON + Proteção. No entanto, o defensor pode gastar sua <strong>Reação</strong> da rodada para realizar uma Esquiva ativa, rolando:<br><strong>1d20 + REF + Esquiva</strong>.<br>Para anular ou evitar o ataque, o resultado final da Esquiva deve igualar ou superar o VA final obtido pelo atacante.'],
        ['Acertos Críticos', 
          'Cada arma de fogo ou corpo a corpo possui sua própria margem de crítico (ex.: 18×2). Se o VA final do seu ataque alcançar ou superar a margem crítica da arma, realiza-se um acerto Crítico.<br><br><strong>Passo a passo da resolução:</strong><br>1. Rola-se os dados de dano base da arma.<br>2. Multiplica-se apenas os dados de dano pelo multiplicador do crítico.<br>3. Adiciona-se os modificadores e bônus fixos de dano.<br>4. Subtrai-se a RD (Redução de Dano) do alvo.'],
        ['Cobertura de Campo', 
          'Posicionamento e coberturas aumentam a Defesa do alvo contra ataques à distância. Os bônus não acumulam:<br><br>• <strong>Nenhuma:</strong> +0 Defesa.<br>• <strong>Leve:</strong> +2 Defesa.<br>• <strong>Pesada:</strong> +4 Defesa.<br>• <strong>Total:</strong> O alvo não pode ser selecionado como alvo direto de ataques que exijam linha de visão.'],
        ['Dano, PV e Estabilização', 
          'A RD (Redução de Dano) física ou mágica do alvo é aplicada subtraindo o dano sofrido (com dano mínimo de 1, exceto quando alguma habilidade anular o dano).<br><br>• <strong>0 PV:</strong> Ao cair para 0 PV, o personagem fica Caído e Incapacitado. Um aliado adjacente pode gastar <strong>2 PA</strong> e realizar um teste de <strong>Medicina de Combate CD 15</strong> para estabilizá-lo.'],
        ['Dano Massivo', 
          'Se um único ataque sofrido reduzir os pontos de vida do personagem a um valor negativo igual ou superior ao seu PV Máximo (ex.: PV Máximo 30, cair para -30 PV ou menos), o personagem sofre morte instantânea de forma permanente.'],
        ['Falha de Armas', 
          'A Falha não é uma quebra automática ou chance aleatória de estragar a arma. Ela é um acúmulo de desgaste desencadeado por fatores ambientais adversos (chuva forte, lama, poça de água, areia, etc.).<br><br>• <strong>Mecânica:</strong> Sob condições de Falha, cada disparo é contado. Ao atingir o limite de Falha da arma, ela emperra.<br>• <strong>Desemperrar (1 PA):</strong> Remove o emperramento, mas a arma permanece sob a condição de Falha.<br>• <strong>Limpar (3 PA):</strong> Exige um teste de <strong>Armas de Fogo CD 10</strong> bem-sucedido para remover a condição de Falha da arma.'],
        ['Disparos Gratuitos', 
          'Quando uma habilidade ou efeito de classe concede um disparo "gratuito", este disparo não consome Pontos de Ação (PA) e não assume automaticamente as penalidades normais de rajada, mas a munição correspondente ainda é consumida.'],
        ['Rajada Parcial e Total', 
        '• <strong>Rajada Parcial (2 PA):</strong> Utiliza um único valor de VA, aplicando o Recuo correspondente da arma e consumindo a munição extra declarada.<br>' +
        '• <strong>Rajada Total:</strong> Consome toda a munição declarada para gerar múltiplos dados de dano que são distribuídos em área ou cone. O dano bruto gerado é dividido igualmente entre todos os alvos válidos na área antes da aplicação de RDs individuais.'
      ],
      ['Recuo',
        'O Recuo é uma penalidade fixa aplicada a ataques com múltiplos disparos, essa penalidade é aplicada ao seu VA.' +

        '• Disparo normal: não sofre penalidade de Recuo.' +
        '• Rajada: aplica o Recuo da arma uma única vez ao VA da ação.' +
        '• Rajada Total: aplica o Recuo da arma uma única vez ao VA da ação.' +
        '• O Recuo não é aplicado por cada tiro individual.'
      ],
        ['Catálogo de Armas de Fogo', 'Estatísticas oficiais de armas (Dano | Alcance | Munição | Crítico |Recuo| Falha):<br><br>' +
          '• <strong>Pistola:</strong> 1d4 | Alcance 12m | Cap. 12 | Crítico 18×2 | 0 |Falha 6<br>' +
          '• <strong>Revólver:</strong> 1d6 | Alcance 12m | Cap. 6 | Crítico 17×2 | 1 |Falha 3<br>' +
          '• <strong>Submetralhadora:</strong> 1d6 | Alcance 12m | Cap. 30 | Crítico 19×2 | 2 |Falha 15<br>' +
          '• <strong>Espingarda:</strong> 2d6 | Alcance 6m | Cap. 6 | Crítico 16×2 | 2 |Falha 3<br>' +
          '• <strong>Fuzil:</strong> 1d10 | Alcance 18m | Cap. 20 | Crítico 18×2 | 2 |Falha 10<br>' +
          '• <strong>Fuzil de Atirador:</strong> 1d12 | Alcance 24m | Cap. 10 | Crítico 17×2 | 2 |Falha 5<br>' +
          '• <strong>Sniper:</strong> 1d20 | Alcance 36m | Cap. 5 | Crítico 16×2 | 3 |Falha 2<br>' +
          '• <strong>Metralhadora:</strong> 1d8 | Alcance 18m | Cap. 40 | Crítico 19×2 | 4 |Falha 20<br>' +
          '• <strong>Escopeta Devastadora:</strong> 3d6 | Alcance 6m | Cap. 4 | Crítico 16×2 | 3 |Falha 2 (Efeito Impacto Massivo: a até 3m de distância, força um teste de Reflexo CD 15 ou o alvo cai na condição Caído).'],
        ['Catálogo de Armas Corpo a Corpo', 'Estatísticas oficiais de armas (Dano | Tipo/Categoria | Crítico | Propriedade ):<br><br>' +
          '• <strong>Faca Tática:</strong> 1d4 | Perfurante  | Crítico 17×2  | Leve: pode ser empunhada junto a outra arma Leve  <br>' +
          '• <strong>Canivete:</strong> 1d4 | Perfurante  | Crítico 18×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
          '• <strong>Cassetete:</strong> 1d6 |  Contundente  | Crítico 18×2  | Não Letal: pode causar dano não letal <br>' +
          '• <strong>Bastão Retrátil:</strong> 1d6 | Contundente | Crítico 17×2  | Tática: +1 Defesa enquanto empunhado <br>' +
          '• <strong>Pé de Cabra:</strong> 1d6 |  Contundente  | Crítico 19×2  | Improvisada: +2 dano contra objetos e barreiras <br>' +
          '• <strong>Machete:</strong> 1d8 | Cortante   | Crítico 18×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
          '• <strong>Machado de Combate:</strong> 1d10 | Cortante  | Crítico 18×2  | Brutal: +1 dano contra alvos com metade dos PV ou menos <br>' +
          '• <strong>Espada Curta:</strong> 1d8 | Perfurante  | Crítico 17×2  | Leve: pode ser empunhada junto a outra arma Leve <br>' +
          '• <strong>Espada Longa:</strong> 1d10 | Cortante | Crítico 18×2  | Versátil: pode ser usada com uma ou duas mãos; com duas mãos, +1 dano <br>' +
          '• <strong>Katana:</strong> 1d10 | Cortante | Crítico 17×2 | Precisão: +1 VA no primeiro ataque corpo a corpo do turno .']
      ]
    },
    {
      id: 'equipment',
      number: '04',
      title: 'Equipamentos e Acessórios',
      lead: 'Em uma guerra, as unicas coisas que importam são as armas que tenhos e os coletes que usamos ',
      blocks: [
        ['Equipamentos Defensivos',
          'Equipamentos defensivos são somados à sua Defesa natural, enquanto a Redução de Dano (RD) reduz o dano sofrido.<br><br>' +

          'A lista de equipamentos defensivos:<br><br>' +

          '• <strong>Roupa Tática:</strong> Defesa +0 | RD Física +0<br>' +
          '• <strong>Colete Leve:</strong> Defesa +1 | RD Física +2<br>' +
          '• <strong>Colete Médio:</strong> Defesa +2 | RD Física +4<br>' +
          '• <strong>Colete Pesado:</strong> Defesa +4 | RD Física +6<br>' +
          '• <strong>Armadura Rígida:</strong> Defesa +6 | RD Física +8<br>' +
          '• <strong>Escudo Leve:</strong> Defesa +1 | RD Física +0<br>' +
          '• <strong>Escudo Pesado:</strong> Defesa +2 | RD Física +0'],
        ['Equipamentos Medicos',
          'Equipamentos em sua maioria precisa da pericia "medicina em combate" para ter maior eficiencia'+

          'A lista de equipamentos medicos:<br><br>' +

          '• <strong>Kit Médico:</strong> +2 Medicina de Combate<br>' +
          '• <strong>Injeção Estimulante:</strong> Recupera 1d8 PV; -1 Defesa até o início do próximo turno<br>' +
          '• <strong>Kit de Trauma:</strong> Permite usar Medicina de Combate a até 3 m<br>'
      ],
      ['Acessorios para armas',
        'Acessórios de armas são componentes instalados em uma arma para aprimorar seu desempenho, aumentar sua versatilidade ou adaptá-la a diferentes situações de combate. Cada acessório fornece um benefício específico e pode modificar características como VA, alcance, Recuo ou capacidade da arma.' +
        'A lista de acessórios:<br><br>' +
        '• <strong>Mira Red Dot:</strong> +1 VA em ataques realizados contra alvos a até 12 m.<br>' +
        '• <strong>Mira Telescópica:</strong> +2 VA em ataques realizados contra alvos a partir de 12 m.<br>' +
        '• <strong>Supressor:</strong> Reduz o ruído do disparo. Criaturas que estejam fora da Linha de Visão sofrem –2 em testes para localizar o atirador.<br>' +
        '• <strong>Cano Reforçado:</strong> Aumenta o alcance da arma em +3 m.<br>' +
        '• <strong>Empunhadura Tática:</strong> Reduz o Recuo da arma em 1.<br>' +
        '• <strong>Bipé:</strong> Enquanto estiver parado, recebe +1 VA ao atacar com uma arma com 24m ou mais de alcance.<br>' +
        '• <strong>Carregador Estendido:</strong> Aumenta a capacidade de munição em 50%, arredondando para baixo.<br>'
      ],
      ['Acessorios magicos',
        'Acessórios mágicos são instrumentos desenvolvidos para auxiliar a manipulação do Arcano. Eles podem reduzir os efeitos da Exaustão, facilitar a execução de uma conjuração ou aumentar a potência das magias.' +
        'A lista para acessórios mágicos:<br><br>' +
        '• <strong>Grimório:</strong> Uma vez por descanso, reduz pela metade a Exaustão de uma magia de até 3º Círculo.<br>' +
        '• <strong>Anel Rúnico:</strong> Uma vez por conjuração, ignora 1 erro do minigame.<br>' +
        '• <strong>Varinha:</strong> Concede +1,5 s ao tempo inicial do minigame.<br>' +
        '• <strong>Cajado:</strong> Concede +1 dano por dado em magias de dano.<br>' 
      ],
      ]
    },
    {
      id: 'magic', number: '05', title: 'Magia e Minijogo Arcano', lead: 'A mecânica da Tranca Arcana, os sete círculos, falhas de conjuração, sobrecarga e colapso.', blocks: [
        ['O Minijogo de Runas', 'Conjurar magias custa <strong>2 PA</strong> e inicia o minijogo da Tranca Arcana. A Exaustão correspondente deve ser paga obrigatoriamente no início da ação. Cada ponto no atributo FOC (Foco) do conjurador adiciona <strong>+1,5 segundos</strong> ao limite de tempo inicial da resolução. Cada runa concluída corretamente na tela equivale a 1 acerto. Cada acerto recupera até 4 segundos de tempo (sem superar o tempo inicial) e acelera a rotação dos anéis restantes em +25% cumulativos.'],
        ['Os Sete Círculos Arcanos', 'Requisitos e dados de efeito de acordo com a potência da magia:<br><br>' +
          '• <strong>1º Círculo:</strong> Custo: 10 Exaustão | Tempo: 8s | Erros tolerados: 7 | Runas: 1 | Dado de Dano: d4<br>' +
          '• <strong>2º Círculo:</strong> Custo: 18 Exaustão | Tempo: 8s | Erros tolerados: 6 | Runas: 2 | Dado de Dano: d6<br>' +
          '• <strong>3º Círculo:</strong> Custo: 28 Exaustão | Tempo: 8s | Erros tolerados: 5 | Runas: 3 | Dado de Dano: d8<br>' +
          '• <strong>4º Círculo:</strong> Custo: 40 Exaustão | Tempo: 8s | Erros tolerados: 4 | Runas: 4 | Dado de Dano: d10<br>' +
          '• <strong>5º Círculo:</strong> Custo: 55 Exaustão | Tempo: 8s | Erros tolerados: 3 | Runas: 5 | Dado de Dano: d12<br>' +
          '• <strong>6º Círculo:</strong> Custo: 75 Exaustão | Tempo: 4s | Erros tolerados: 2 | Runas: 6 | Dado de Dano: d20<br>' +
          '• <strong>7º Círculo:</strong> Custo: 100 Exaustão | Tempo: 4s | Erros tolerados: 1 | Runas: 7 | Dado de Dano: d100'],
        ['Falhas na Conjuração', 'Caso o tempo do minijogo expire (chegue a 0) ou você cometa erros além do limite tolerado pelo Círculo, a magia <strong>ainda é conjurada</strong>, utilizando os acertos obtidos até o momento. No entanto, o conjurador deve rolar <strong>1d3 na Tabela de Falhas</strong> para aplicar o efeito negativo imediato:<br><br>' +
          '• <strong>1 - Exaustão Dobrada:</strong> O conjurador sofre o dobro do custo original de Exaustão da magia.<br>' +
          '• <strong>2 - FireBack:</strong> O conjurador sofre imediatamente 1d6 de dano mágico por Círculo da magia.<br>' +
          '• <strong>3 - Degradação de Cátedra:</strong> O dado de dano/efeito da magia desce um estágio (ex.: d10 para d8). Se o dado já for d4, remove-se um dado de efeito completo.'],
        ['Sobrecarga de Energia', 'A Exaustão do conjurador pode ficar negativa (abaixo de 0). O <strong>Limite de Sobrecarga</strong> seguro é igual a <strong>-10% da Exaustão Máxima</strong> (ex.: se a Exaustão Máxima for 100, o limite negativo seguro é -10). Conjurar enquanto já estiver abaixo deste limite seguro gera pontos de Colapso direto na personagem:<br><br>' +
          '<strong>Excedente</strong> = custo da magia − valor absoluto do limite negativo.<br>' +
          '<strong>Colapso gerado</strong> = excedente ÷ Círculo da magia (arredondado para cima).'],

        ['Faixas de Colapso', 'Pontos de Colapso acumulados geram sequelas e perigos físicos extremos de acordo com a faixa:<br><br>' +
          '• <strong>0:</strong> Estado Normal.<br>' +
          '• <strong>1–4 (Sequela Simples):</strong> Recebe penalidades em testes físicos devido a quebras de integridade biológica ou modificações leves na estrutura do corpo.<br>' +
          '• <strong>5–9 (Sequela Crítica):</strong> Penalidades graves de locomoção, exaustão acelerada e danos crônicos aos sistemas vitais.<br>' +
          '• <strong>10 (Detonação Arcana):</strong> O personagem é instantaneamente desintegrado em uma violenta explosão de éter, causando 10d100 de dano mágico em uma área de 20 a 50 metros. Não há ressurreição por meios normais.'
        ],
        ['Tempo Real em Jogo', 'Nenhum efeito ou duração de magia no Ferro & Arcano é medido em minutos ou horas de tempo real fora de combate. Todos os efeitos duram em turnos, rodadas ou cenas. Os únicos componentes baseados em tempo real do sistema são as regras estruturais de recuperação: <strong>Descanso Curto (30 minutos)</strong> e <strong>Descanso Completo (8 horas)</strong>. O minijogo arcano possui sua própria escala temporal de segundos que não deve ser convertida para combate.'

        ],
        ['Sequelas do Arcano',
          'O arcano é algo instavel e perigoso, porem uma das poucas coisas que se tem um padrão são as marcas que ele deixa naqueles que abusam de sua sorte<br><br>' +
          'O Colapso Arcano deixa marcas físicas, mentais e energéticas que permanecem enquanto o personagem não recuperar sua estabilidade. Role 1d20 e consulte na tabela o numero correspondente, ou escolha por conta propria o fardo que vai carregar<br><br>' +
          'Tabela de Colapso<br>' +
            '• <strong> 1 Vascularização Rúnica <strong> Sequela Simples: As veias brilham em condições de pouca luz. –2 em Furtividade.</strong>  Sequela Critica:Recebe -4 em furtividade e inimigos recebem +2 em percepção contra voce.<br><br>' +
            '• <strong>  2 Necrose Elemental  <strong> Sequela Simples:–1,5 s no tempo inicial do minigame de conjuração. </strong>  Sequela Critica:–1,5 s no tempo inicial do minigame de conjuração.. <br><br>' +
            '•  <strong>  3 Cegueira Parcial de Mana  <strong> Sequela Simples:–2 em testes de Percepção. </strong>  Sequela Critica:Recebe -6 em Percepção/Esquiva . <br><br>' +
            '•  <strong>  4 Sangramento Estelar <strong> Sequela Simples:Ao realizar uma conjuração forçada, sofre um dado de dano a mais de FireBack . </strong>  Sequela Critica:Ao realizar uma conjuração forçada,recebe o dano de FireBack em todo caso <br><br>' +
            '•  <strong>  5 Voz Ecoante <strong> Sequela Simples:Você não pode usar Furtividade enquanto conjura. </strong>  Sequela Critica:Criaturas recebem +2 nos testes para localizar ou antecipar suas conjurações. <br><br>' +
            '•  <strong>  6 Chama Interna <strong> Sequela Simples:Você sofre 2 dano de fogo quando conjurar uma magia. </strong>  Sequela Critica:Você sofre +1d6 dano de fogo e fica com o status queimado. <br><br>' +
            '•  <strong>  7 Rigidez Muscular <strong> Sequela Simples:–2 em Esquiva. </strong>  Sequela Critica:–3 m de Movimento. <br><br>' +
            '•  <strong>  8 Cicatriz de Descarga <strong> Sequela Simples:Você sofre +2 de dano elétrico, inclusive de magias proprias com esse elemento. </strong>  Sequela Critica:Você sofre +1d6 dano elétrico. <br><br>' +
            '•  <strong>  9 Ressonância Eletrônica <strong> Sequela Simples:Ao tocar em uma arma, ela apresenta falha. </strong>  Sequela Critica:Durante uma conjuração, armas e equipamentos a até 1,5 m sofrem interferência por 1 rodada, perdendo seus efeitos, bonus e entrando em falha. <br><br>' +
            '•  <strong>  10 Tremores nas Mãos <strong> Sequela Simples:O limite de erros do minigame é reduzido em 1. </strong>  Sequela Critica:O limite é reduzido em 2, mas nunca pode ficar abaixo de 1 erro. <br><br>' +
            '•  <strong>  11 Atrofia do Foco <strong> Sequela Simples:O bônus de FOC no tempo inicial do minigame passa a fornecer apenas +1 s. </strong>  Sequela Critica:FOC não fornece tempo adicional ao minigame. <br><br>' +
            '•  <strong>  12 Sombra Desincronizada <strong> Sequela Simples:Ataques corpo a corpo contra você recebem +2 VA. </strong>  Sequela Critica:Além disso, esses ataques causam +1d6 dano. <br><br>' +
            '•  <strong>  13 Dependência de Mana <strong> Sequela Simples:Um Descanso Curto recupera apenas 10 Exaustão. </strong>  Sequela Critica:Um Descanso Curto recupera apenas 5 Exaustão. <br><br>' +
            '•  <strong>  14 Pele de Vidro <strong> Sequela Simples:Você sofre +2 dano físico. </strong>  Sequela Critica:Você sofre +1d6 dano físico adicional. <br><br>' +
            '•  <strong>  15 Instabilidade Elemental <strong> Sequela Simples:Cada falha no minigame causa 1d4 dano em você. </strong>  Sequela Critica:Cada falha causa 1d8 dano em você e 1d4 dano em criaturas adjacentes.. <br><br>' +
            '•  <strong>  16 Audição Espectral <strong> Sequela Simples:–2 em Percepção/Prontidão. </strong>  Sequela Critica:Ruído intenso causa –2 s no tempo inicial da sua próxima conjuração. <br><br>' +
            '•  <strong>  17 Eco de Conjuração <strong> Sequela Simples:Sua conjuração deixa um rastro arcano perceptível por Sintonia Arcana durante 3 rodadas CD 10. </strong>  Sequela Critica:O rastro permanece por 6 rodadas e passa a ter CD 5. <br><br>' +
            '•  <strong>  18 Cristalização Nervosa <strong> Sequela Simples:Recebe 1d4 de dano gelido adicional  </strong>  Sequela Critica:Recebe 3d4 de dano gelido adicional de todas as origens. <br><br>' +
            '•  <strong>  19 Pulso Arcano <strong> Sequela Simples:Voce se torna prioridade para magias de alvo unico inimigas em um raio de 3m  </strong>  Sequela Critica:Magias desviadas para voce recebem +2 VA . <br><br>' +
            '•  <strong>  20 Marca do Abismo <strong> Sequela Simples:Suas próprias magias causam +2 dano por Círculo contra você. </strong>  Sequela Critica:A margem de Detonação Arcana é reduzida de 10 para 8 Colapsos. <br><br>'
        ],
      ]
    },
    {
      id: 'classes', number: '06', title: 'Classes e Habilidades', lead: 'As sete classes oficiais de Ferro & Arcano, suas identidades táticas e o avanço de habilidades de nível 1 a 10.', classes: [
        ['Atirador', 'Especialista em distância, precisão balística e controle de área.', ['Olho Clínico', 'Mira Estável', 'Disparo Rápido', 'Ajuste de Balística', 'Cadência Operacional', 'Respiro Tático', 'Disparo de Penetração', 'Fogo de Supressão', 'Postura do Caçador', 'Mestria Balística']],
        ['Canalizador', 'Manipulador das energias etéreas e riscos arcanos.', ['Ajuste Fino + Fluxo Contínuo', 'Mente Expandida', 'Emanação Rúnica de Repulsão', 'Barreira de Éter', 'Sintonia Rúnica', 'Recalibração Mental', 'Foco de Concentração Extrema', 'Modulação de Amplitude', 'Mente Inviolável', 'Domínio da Ruptura Arcana']],
        ['Híbrido', 'A fusão tática entre a técnica mecânica e a força arcana.', ['Munição Encantada + Sintonia Tecno-Mágica', 'Adaptabilidade de Sistemas', 'Golpe Arcano-Infuso', 'Sobrecarga do Núcleo', 'Malha de Tecido Rúnico', 'Recarga Sincronizada', 'Emissão de Campo Estático', 'Reciclagem de Energia', 'Injeção de Éter Medicinal', 'Síntese Absoluta do Ferro & Arcano']],
        ['Vanguardista', 'A linha de frente, a barreira física que sustenta a equipe.', ['Inflexibilidade + Blindagem Biológica', 'Postura Imóvel', 'Provocação Tática', 'Pele de Ferro Aprimorada', 'Retaliação de Impacto', 'Interceptação Balística', 'Escudo de Absorção Absoluta', 'Ancoragem Territorial', 'Vigor Inextinguível', 'Baluarte Supremo do Ferro']],
        ['Ciborgue', 'O ápice da integração máquina-homem, focado em análise, adaptação e destruição.', ['Pontos de Protocolo + Visão de Sistema', 'Corpo Aumentado', 'Ponto Fraco', 'Interface de Combate', 'Protocolo Antimaterial', 'Reparação de Campo', 'Caçador de Máquinas', 'Sobrecarga de Protocolo', 'Arsenal Integrado', 'Arquitetura de Combate']],
        ['Vetor', 'Especialista em controle de movimento e disrupção cinética. Manipula trajetórias, empurra, freia e redireciona forças para dominar o campo de batalha.', ['Impulso Vetorial', 'Roubo de Impulso', 'Âncora Vetorial', 'Passo Vetorial', 'Conservação de Momentum', 'Corte de Movimento', 'Ruptura de Equilíbrio', 'Vetor Residual', 'Campo Vetorial', 'Domínio Vetorial']],
        ['Mediador Arcano', 'Especialista em suporte e regulação arcana. Não conjura magias ofensivas: mantém aliados estáveis, redistribui Exaustão, amplia conjurações alheias e protege o grupo do colapso.', ['Mediar Fluxo', 'Âncora Arcana', 'Partilha de Exaustão', 'Campo Harmônico', 'Intercessão Arcana', 'Purga Ressonante', 'Extensão de Harmonia', 'Rede de Equilíbrio', 'Margem de Segurança', 'Convergência Arcana']]
      ]
    },
    {
      id: 'origins', number: '07', title: 'Origens e Manifestações', lead: 'As dez origens do cenário e como seus benefícios se adaptam de acordo com a Classe selecionada.', blocks: [
        ['Soldado', '<strong>Geral (Treinamento Militar):</strong> Concede treinamento na perícia Fortitude ou Imposição. Caso já possua o treinamento, recebe especialização (+2).<br><br>' +
          '• <strong>Atirador (Disciplina de Combate):</strong> Escolha uma categoria de arma de fogo. 1/rodada, recebe +1 VA no primeiro ataque realizado com ela no turno.<br>' +
          '• <strong>Canalizador (Concentração Militar):</strong> 1/rodada, ao conjurar uma magia com sucesso, reduz em 10 a Exaustão gerada (respeitando o mínimo de 0).<br>' +
          '• <strong>Híbrido (Transição de Combate):</strong> 1/rodada, após usar uma habilidade que consuma Cargas do Núcleo, ganha +1 VA no próximo ataque até o fim do turno.<br>' +
          '• <strong>Vanguardista (Formação de Combate):</strong> 1/rodada, quando sofrer um efeito que o moveria ou deixaria Caído, pode gastar 1 PA para reduzir o deslocamento em 3m ou evitar ficar Caído.<br>' +
          '• <strong>Ciborgue (Formação de Combate):</strong> 1/rodada, quando sofrer um ataque de criatura tecnológica ou inimigo Marcado, recebe +1 Defesa contra o próximo ataque desse alvo até seu próximo turno.<br>' +
          '• <strong>Vetor (Disciplina de Avanço):</strong> 1/rodada, após mover voluntariamente pelo menos 3 m, recebe +1 Defesa contra o primeiro ataque feito contra você antes do início do seu próximo turno.<br>' +
          '• <strong>Mediador Arcano (Coordenação de Combate):</strong> 1/rodada, ao usar habilidade de suporte em aliado voluntário, concede +1 VA ao aliado beneficiado no próximo ataque dele.'],
        ['Artesão', '<strong>Geral (Conhecimento Técnico):</strong> Concede treinamento em Tecnologia & Sistemas ou Investigação. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Modificação de Armamento):</strong> 1/Descanso Curto (6 PA); instala modificações. Na primeira vez que usar Mirar no turno, a ação não consome PA.<br>' +
          '• <strong>Canalizador (Aprimoramento Arcano):</strong> 1/Descanso Curto (6 PA); eleva em um estágio a raridade de um item arcano por 2 rodadas.<br>' +
          '• <strong>Híbrido (Infusão do Núcleo):</strong> 1/Descanso Curto (6 PA); escolhe uma infusão (Precisão, Potência, Regeneração, etc.) temporária para um equipamento.<br>' +
          '• <strong>Vanguardista (Reforço Estrutural):</strong> 1/Descanso Curto (6 PA); concede +10 PV/+2 RD a uma barreira/escudo ou sobe categoria de cobertura até Pesada.<br>' +
          '• <strong>Ciborgue (Manutenção de Campo):</strong> 1/Descanso Curto; realiza reparos em si ou equipamento: recupera 2d8 PV, remove Falha de arma, conserta item ou +1 Defesa.<br>' +
          '• <strong>Vetor (Contrapeso Personalizado):</strong> Durante Descanso Curto, calibra equipamento próprio. 1/rodada, quando habilidade de Vetor mover você mesmo, aumenta o deslocamento em +1,5 m.<br>' +
          '• <strong>Mediador Arcano (Calibração de Foco):</strong> 1/Descanso Curto; ajusta foco de aliado. No próximo sucesso de magia dele, o aliado recupera +5 Exaustão adicional.'],
        ['Médico', '<strong>Geral (Formação Médica):</strong> Concede treinamento na perícia Medicina de Combate. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Socorro de Combate):</strong> 1/rodada, gasta 1 PA para curar em 1d6 PV um aliado adjacente que tenha sofrido dano nesta rodada.<br>' +
          '• <strong>Canalizador (Medicina Arcana):</strong> Sempre que uma conjuração sua recuperar pontos de vida, o alvo recupera um adicional de +1d6 PV.<br>' +
          '• <strong>Híbrido (Estimulante Tecno-Arcano):</strong> 1/Descanso Curto (2 PA); cura uma criatura adjacente em 2d6 PV.<br>' +
          '• <strong>Vanguardista (Médico de Linha):</strong> 1/Descanso Curto, quando um aliado adjacente chegar a 0 PV, pode usar 1 Reação para mantê-lo com 1 PV.<br>' +
          '• <strong>Ciborgue (Tecno-Cura):</strong> Ao completar um Descanso Curto, recebe 3 cargas de Tecno-Cura (máx 3). Gasta 1 PA para usar uma carga em alvo adjacente e recuperar 2d6 PV; se for Ciborgue, restaura também 1 PP.<br>' +
          '• <strong>Vetor (Leitura Biomecânica):</strong> 1/rodada, criatura em movimento sob Condição física fazendo teste de REF contra habilidade de Vetor sua sofre –1 no teste.<br>' +
          '• <strong>Mediador Arcano (Estabilização Bio-Arcana):</strong> Sempre que uma habilidade sua de Mediador recuperar Exaustão de um aliado, esse aliado também recupera 1d6 PV.'],
        ['Investigador', '<strong>Geral (Olhar Investigativo):</strong> Concede treinamento em Investigação. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Identificação de Alvo):</strong> 1/rodada, contra alvo observado por pelo menos 1 rodada, recebe +1 VA.<br>' +
          '• <strong>Canalizador (Leitura Arcana):</strong> Recebe +2 para identificar magias ou efeitos ativos; sucesso revela se a função é ofensiva, defensiva ou controle.<br>' +
          '• <strong>Híbrido (Análise de Sistemas):</strong> Recebe +2 em Tecnologia & Sistemas para identificar, analisar ou desativar robôs, drones e sistemas eletrônicos.<br>' +
          '• <strong>Vanguardista (Leitura do Campo):</strong> No início do combate, escolhe uma criatura percebida; recebe +2 Defesa contra ela até o fim da primeira rodada.<br>' +
          '• <strong>Ciborgue (Leitura Estrutural):</strong> Observar criatura tecnológica por 1 turno garante +2 em Tecnologia & Sistemas contra ela. Identifica Fraqueza, Defesa, Mobilidade, Armamento ou Sensores.<br>' +
          '• <strong>Vetor (Previsão de Trajetória):</strong> Após observar criatura por pelo menos 1 turno, 1/rodada o primeiro teste de REF dela contra habilidade de Vetor sua sofre –2 REF.<br>' +
          '• <strong>Mediador Arcano (Leitura de Fluxo):</strong> Recebe +2 em Sintonia Arcana para identificar condições arcanas ativas, sobrecargas ou pontos de colapso em criaturas a até 9 m.'],
        ['Criminoso', '<strong>Geral (Conhecimento das Ruas):</strong> Concede treinamento em Furtividade. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Saque Ilegal):</strong> 1/rodada, sacar ou trocar armas compatíveis com Acesso Rápido custa 0 PA.<br>' +
          '• <strong>Canalizador (Ritual Clandestino):</strong> Ao conjurar sem linha de visão de inimigos, ganha +1 de resultado de acerto no minijogo.<br>' +
          '• <strong>Híbrido (Gambiarra):</strong> 1/rodada ao interagir com modificação ou equipamento, ganha +1 VA ou +1 Defesa até o início de seu próximo turno.<br>' +
          '• <strong>Vanguardista (Intimidação Brutal):</strong> Ao acertar corpo a corpo, 1 PA força o alvo a testar Imposição contra sua Defesa; falha aplica Assustado por 1 rodada.<br>' +
          '• <strong>Ciborgue (Invasão Improvisada):</strong> 1/rodada, usa Tecnologia & Sistemas em máquinas/fechaduras/eletrônicos. Se o alvo estiver Marcado, recebe +2 no teste.<br>' +
          '• <strong>Vetor (Rota de Fuga):</strong> 1/rodada, depois de causar deslocamento forçado ou interromper o movimento de criatura hostil, move 1,5 m sem gastar PA e sem provocar OA.<br>' +
          '• <strong>Mediador Arcano (Canal Invisível):</strong> Suas habilidades de suporte direcionadas a aliados não quebram sua Furtividade, caso esteja furtivo.'],
        ['Pesquisador Arcano', '<strong>Geral (Estudos Arcanos):</strong> Concede treinamento em História Arcana ou Simbologia & Runas. Se já possuir, recebe especialização.<br><br>' +
          '• <strong>Atirador (Munição Rúnica):</strong> 1/Descanso Curto; prepara munição especial rúnica em quantidade igual à capacidade do carregador da arma.<br>' +
          '• <strong>Canalizador (Teoria do Fluxo):</strong> 1/rodada, após minijogo de runas bem-sucedido, permite ignorar 1 erro adicional cometido.<br>' +
          '• <strong>Híbrido (Sincronização Arcana):</strong> Ao gastar Cargas do Núcleo, ganha +2 no próximo teste de Sintonia Arcana realizado até o fim do próximo turno.<br>' +
          '• <strong>Vanguardista (Runas de Proteção):</strong> 1/Descanso Curto; concede +3 RD mágica a um aliado tocado durante 2 rodadas.<br>' +
          '• <strong>Ciborgue (Interface Tecno-Arcana):</strong> 1/rodada ao analisar máquina arcana, escolhe +2 Tecnologia ou +2 Sintonia. Se identificar corretamente, recupera 1 PP.<br>' +
          '• <strong>Vetor (Geometria Etérea):</strong> 1/rodada, criatura sob efeito arcano falhando em REF contra Vetor aumenta o deslocamento forçado em +1,5 m.<br>' +
          '• <strong>Mediador Arcano (Ressonância Teórica):</strong> Ao usar habilidade que reduza ganho de Colapso de aliado, pode gastar 1 PA para conceder +2 no próximo teste de Tolerância Arcana dele.'],
        ['Sobrevivente', '<strong>Geral (Sobrevivência):</strong> Concede treinamento em Fortitude. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Instinto de Sobrevivência):</strong> Enquanto estiver com metade ou menos do seu PV Máximo, recebe +1 VA.<br>' +
          '• <strong>Canalizador (Concentração sob Pressão):</strong> Com metade ou menos do seu PV Máximo, recebe +2 em Fortitude para manter conjurações.<br>' +
          '• <strong>Híbrido (Núcleo de Emergência):</strong> Com metade ou menos do seu PV, gastar Carga concede +1 Defesa até o início do seu próximo turno.<br>' +
          '• <strong>Vanguardista (Não Cair):</strong> 1/rodada, quando sofrer um efeito que o deixaria Caído, gastar 1 PA permite permanecer de pé.<br>' +
          '• <strong>Ciborgue (Instinto de Preservação):</strong> Com metade ou menos do seu PV Máximo, recebe +1 Defesa e +1 Fortitude contra máquinas/construtos. 1/rodada ao ser atingido por elas, move 1,5m sem OA.<br>' +
          '• <strong>Vetor (Instinto de Evasão):</strong> Com metade ou menos de PV, 1/rodada, criatura hostil entrando a até 3m voluntariamente, gasta Reação para mover 3m sem OA.<br>' +
          '• <strong>Mediador Arcano (Reserva de Emergência):</strong> Com metade ou menos dos PV máximos, 1/rodada, usar habilidade de Mediador em si ou aliado adjacente custa 1 Harmonia a menos (mín 0).'],
        ['Mercenário', '<strong>Geral (Treinamento Operacional):</strong> Concede treinamento em Armas de Fogo ou Briga/Corpo a Corpo. Se já possuir, recebe especialização.<br><br>' +
          '• <strong>Atirador (Contrato de Abate):</strong> No primeiro ataque da cena, escolhe um Alvo Prioritário; recebe 1/rodada +1 VA contra ele.<br>' +
          '• <strong>Canalizador (Operação Precisa):</strong> Conjurações de alvo único recebem +1 de resultado de acerto no minijogo.<br>' +
          '• <strong>Híbrido (Equipamento de Missão):</strong> Após Descanso Completo, escolhe um equipamento para receber +1 VA ou +1 Defesa até o próximo Descanso Completo.<br>' +
          '• <strong>Vanguardista (Contrato de Proteção):</strong> No início do combate, escolhe um aliado; enquanto estiver a até 3m dele, concede +1 Defesa e +1 RD física.<br>' +
          '• <strong>Ciborgue (Contrato de Caça):</strong> Primeiro ataque contra criatura tecnológica na cena a designa como Alvo Contratado. 1/rodada +1 VA contra ela. Se destruí-la, recupera 1 PP.<br>' +
          '• <strong>Vetor (Alvo de Interceptação):</strong> No início do combate, escolhe uma criatura como Alvo Contratado. 1/rodada, primeiro deslocamento forçado causado nele aumenta em +1,5 m.<br>' +
          '• <strong>Mediador Arcano (Contrato de Suporte):</strong> Início do combate, designa um aliado como Alvo Prioritário. Habilidades de Mediador nele ganham +3 m de alcance.'],
        ['Atleta', '<strong>Geral (Condicionamento):</strong> Concede treinamento na perícia Atletismo. Caso já possua, recebe especialização.<br><br>' +
          '• <strong>Atirador (Movimento e Tiro):</strong> 1/rodada, após disparo, gastar 1 PA permite se mover por 3 metros sem provocar Ataques de Oportunidade.<br>' +
          '• <strong>Canalizador (Concentração Física):</strong> Ao sofrer dano durante conjuração, recebe +2 no próximo teste de Fortitude para manter a magia ativa.<br>' +
          '• <strong>Híbrido (Mobilidade Integrada):</strong> 1/rodada, após usar habilidade que gaste Carga, permite mover-se 3m gastando 0 PA.<br>' +
          '• <strong>Vanguardista (Investida):</strong> Se mover pelo menos 6 metros em linha reta em direção a um inimigo antes de atacar corpo a corpo, recebe +2 VA.<br>' +
          '• <strong>Ciborgue (Servomotores Adaptados):</strong> Concede bônus passivo de +2 Atletismo e +1,5m de deslocamento. 1/rodada, após ataque corpo a corpo, move 3m sem gastar PA.<br>' +
          '• <strong>Vetor (Arranque Cinético):</strong> Após mover-se voluntariamente pelo menos 6 m no turno, a próxima habilidade de Vetor até o fim do turno ganha +3 m de alcance.<br>' +
          '• <strong>Mediador Arcano (Respiração Sincronizada):</strong> 1/rodada, se tiver se movido pelo menos 3 m no turno, sua próxima habilidade de Mediador custa 1 PA a menos (mín 1 PA).'],
        ['Operador', '<strong>Geral (Operações Táticas):</strong> Concede treinamento em Tecnologia & Sistemas ou Percepção / Prontidão. Se já treinado, recebe especialização.<br><br>' +
          '• <strong>Atirador (Aquisição de Alvo):</strong> Usando visores ou miras, recebe +1 VA no primeiro ataque realizado após a aquisição do alvo.<br>' +
          '• <strong>Canalizador (Interface Arcana):</strong> Ao usar focos integrados ou equipamentos de controle de éter, recebe +1 de resultado no minijogo.<br>' +
          '• <strong>Híbrido (Integração de Sistemas):</strong> Tecnologia & Sistemas pode ser usada para operar, hackear ou consertar no lugar de outras perícias (+2 no teste).<br>' +
          '• <strong>Vanguardista (Plataforma Defensiva):</strong> 1/rodada enquanto estiver adjacente a uma barreira ou cobertura, recebe +1 Defesa.<br>' +
          '• <strong>Ciborgue (Protocolo Tático):</strong> 1/rodada após analisar máquina, escolhe entre +1 VA, +1 Defesa ou +2 Tecnologia até seu próximo turno. Se Marcado, escolhe dois benefícios.<br>' +
          '• <strong>Vetor (Mapeamento Vetorial):</strong> Ao usar sensor, visor ou sistema de mira, primeira habilidade de Vetor usada contra o alvo na rodada ganha +3 m de alcance.<br>' +
          '• <strong>Mediador Arcano (Coordenação de Sincronia):</strong> 1/rodada, ao conceder tempo ou reduzir Exaustão de um aliado, aquele aliado pode mover-se 1,5 m livre sem provocar OA.']
      ]
    }
  ]

  const nav = document.querySelector('#book-nav')
  const content = document.querySelector('#wiki-content')
  const search = document.querySelector('#wiki-search')
  const details = []
  const addDetail = (title, body, kicker = 'Regra detalhada') => { details.push({ title, body, kicker }); return details.length - 1 }

  const classMechanics = {
    'Atirador': [
      { name: 'Olho Clínico', desc: '<strong>Pontos de Precisão + Olho Clínico (Nível 1):</strong> +2 VA contra alvos a 9m ou mais. Limite de Pontos de Precisão é 3 + FOC. Gerados ao: gastar 1 PA em Mirar, terminar o turno sem se mover, ou crítico com arma longa (máx. 1/rodada de cada fonte). Recupera tudo no Descanso Curto.' },
      { name: 'Mira Estável', desc: '<strong>Mira Estável (Nível 2):</strong> Recebe +2 VA contra alvos que estejam em Cobertura Leve, contanto que essa cobertura esteja a até 9 metros do Atirador.' },
      { name: 'Disparo Rápido', desc: '<strong>Disparo Rápido (Nível 3):</strong> Custo: 2 PA + 1 Ponto de Precisão. Realiza um segundo disparo em sequência imediata, sendo este disparo gratuito e sem a penalidade normal de -1 VA.' },
      { name: 'Ajuste de Balística', desc: '<strong>Ajuste de Balística (Nível 4):</strong> Concede +3 metros ao alcance efetivo de suas armas de fogo.' },
      { name: 'Cadência Operacional', desc: '<strong>Cadência Operacional (Nível 5):</strong> 1 vez por rodada, permite recarregar uma arma leve ou trocar um carregador descartável gastando 0 PA.' },
      { name: 'Respiro Tático', desc: '<strong>Respiro Tático (Nível 6):</strong> Custo: 1 PA. Permite se mover por até 3 metros sem provocar Ataques de Oportunidade.' },
      { name: 'Disparo de Penetração', desc: '<strong>Disparo de Penetração (Nível 7):</strong> Custo: 2 PA + 1 Ponto de Precisão. O próximo disparo ignora até 4 pontos de RD física do alvo.' },
      { name: 'Fogo de Supressão', desc: '<strong>Fogo de Supressão (Nível 8):</strong> Custo: 3 PA + 2 Pontos de Precisão. Cria um cone de supressão de 9 metros. Alvos devem passar em teste de Reflexo (CD 15) ou sofrerão -2 VA e terão seu movimento reduzido pela metade.' },
      { name: 'Postura do Caçador', desc: '<strong>Postura do Caçador (Nível 9):</strong> Ao usar uma arma longa apoiada ou com bipé, o personagem não sofre a penalidade padrão de ataque por estar na condição Caído.' },
      { name: 'Mestria Balística', desc: '<strong>Mestria Balística (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Atirador:<br><br>• <strong>Franco-Atirador:</strong> Focado em tiros de elite de longa distância e perfuração profunda.<br>• <strong>Pistoleiro Tático:</strong> Focado em sequências rápidas com pistolas e alta mobilidade.<br>• <strong>Caçador Arcano:</strong> Especializado em caçar magos e silenciar habilidades mágicas com munição modificada.' }
    ],
    'Canalizador': [
      { name: 'Ajuste Fino', desc: '<strong>Ajuste Fino + Fluxo Contínuo (Nível 1):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Permite ignorar 1 erro cometido no minijogo ou cancelar a condição Flinch. O Fluxo Contínuo reduz a velocidade pós-acerto para 10%.' },
      { name: 'Mente Expandida', desc: '<strong>Mente Expandida (Nível 2):</strong> Adiciona +1,5 segundos ao tempo inicial disponível para a resolução do minijogo arcano.' },
      { name: 'Emanação Rúnica', desc: '<strong>Emanação Rúnica de Repulsão (Nível 3):</strong> Custo: 2 PA + 1 Ponto de Sintonia + 10 de Exaustão. Causa 2d6 de dano de força e empurra criaturas adjacentes por até 3 metros.' },
      { name: 'Barreira de Éter', desc: '<strong>Barreira de Éter (Nível 4):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Cria um escudo de proteção com 20 + CONH de PV temporários, com duração de 1 rodada.' },
      { name: 'Sintonia Rúnica', desc: '<strong>Sintonia Rúnica (Nível 5):</strong> Conjurações de 1º e 2º Círculo exigem 1 runa a menos para serem concluídas (respeitando o mínimo de 1 runa).' },
      { name: 'Recalibração Mental', desc: '<strong>Recalibração Mental (Nível 6):</strong> Custo: 1 PA + 1 Ponto de Sintonia. Permite recuperar imediatamente 10 pontos de Exaustão.' },
      { name: 'Foco de Concentração', desc: '<strong>Foco de Concentração Extrema (Nível 7):</strong> Concede um bônus de +4 em testes de Fortitude para manter uma conjuração ativa sob adversidades ou danos.' },
      { name: 'Modulação de Amplitude', desc: '<strong>Modulação de Amplitude (Nível 8):</strong> Custo: 2 PA + 2 Pontos de Sintonia. Eleva o dado de dano de uma conjuração em 1 estágio (ex.: d6 para d8).' },
      { name: 'Mente Inviolável', desc: '<strong>Mente Inviolável (Nível 9):</strong> O Canalizador torna-se completamente imune à condição Assustado provocada por magias, dominação, encanto ou sono mágico.' },
      { name: 'Domínio da Ruptura', desc: '<strong>Domínio da Ruptura Arcana (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Canalizador:<br><br>• <strong>Arcanista Elemental:</strong> Especialista em canalizar e amplificar danos de fogo, frio e eletricidade.<br>• <strong>Manipulador Espacial:</strong> Focado em distorções dimensionais, teletransportes táticos e controle de área.<br>• <strong>Taumaturgo de Sobrecarga:</strong> Mestre em assumir riscos extremos para conjurações ultra-potentes e purgar colapsos.' }
    ],
    'Híbrido': [
      { name: 'Munição Encantada', desc: '<strong>Munição Encantada + Sintonia Tecno-Mágica (Nível 1):</strong> Custo: 1 PA + 1 Carga. Seu próximo ataque recebe +1d6 de dano arcano. <br><br><i>Regra de Cargas do Núcleo:</i> Somente habilidades marcadas como Tecnologia ou Arcano geram Cargas (máx 3). Usar uma de cada na mesma rodada gera +1 Carga.' },
      { name: 'Adaptabilidade', desc: '<strong>Adaptabilidade de Sistemas (Nível 2):</strong> Permite utilizar o atributo Conhecimento (CONH) no lugar de Força (FOR) para o uso de armas pesadas ou modificações mecânicas.' },
      { name: 'Golpe Arcano-Infuso', desc: '<strong>Golpe Arcano-Infuso (Nível 3):</strong> Custo: 2 PA + 1 Carga. Desfere um ataque que causa +1d8 de dano arcano adicional.' },
      { name: 'Sobrecarga do Núcleo', desc: '<strong>Sobrecarga do Núcleo (Nível 4):</strong> Custo: 1 PA + 1 Carga. Concede +2 de margem de acerto crítico para o próximo ataque realizado.' },
      { name: 'Malha de Tecido Rúnico', desc: '<strong>Malha de Tecido Rúnico (Nível 5):</strong> Concede +2 de RD física e mágica contra danos de fogo, eletricidade e arcano.' },
      { name: 'Recarga Sincronizada', desc: '<strong>Recarga Sincronizada (Nível 6):</strong> Custo: 1 PA + 1 Carga. Permite recarregar uma arma como parte da mesma ação.' },
      { name: 'Emissão de Campo Estático', desc: '<strong>Emissão de Campo Estático (Nível 7):</strong> Custo: 2 PA + 1 Carga. Emite uma descarga em área de 4 metros, causando 2d6 de dano elétrico e reduzindo em 1 os PA dos alvos no próximo turno.' },
      { name: 'Reciclagem de Energia', desc: '<strong>Reciclagem de Energia (Nível 8):</strong> 1 vez por rodada, ao sofrer dano elétrico ou arcano, recupera imediatamente 5 pontos de Exaustão.' },
      { name: 'Injeção de Éter Medicinal', desc: '<strong>Injeção de Éter Medicinal (Nível 9):</strong> Custo: 1 PA + 1 Carga. Cura 2d10 + CON pontos de vida (PV) do usuário ou de um aliado adjacente.' },
      { name: 'Síntese Absoluta', desc: '<strong>Síntese Absoluta do Ferro & Arcano (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Híbrido:<br><br>• <strong>Engenheiro Arcano:</strong> Mestre em drones táticos, torres e defesas móveis.<br>• <strong>Lâmina/Gatilho Rúnico:</strong> Alterna entre ataques de proximidade com espadas rúnicas e disparos, criando combos devastadores.<br>• <strong>Infiltrador:</strong> Focado em camuflagem óptica, furtividade extrema e hologramas.' }
    ],
    'Vanguardista': [
      { name: 'Blindagem Biológica', desc: '<strong>Inflexibilidade + Blindagem Biológica (Nível 1):</strong> Concede um bônus passivo de +2 em testes de Fortitude. O limite máximo de pontos de Inflexibilidade é 5 + CON.' },
      { name: 'Postura Imóvel', desc: '<strong>Postura Imóvel (Nível 2):</strong> O Vanguardista torna-se completamente imune a efeitos de deslocamento forçado causados por inimigos.' },
      { name: 'Provocação Tática', desc: '<strong>Provocação Tática (Nível 3):</strong> Custo: 1 PA. Força os inimigos em uma área de até 4 metros a preferirem atacar o Vanguardista como alvo prioritário.' },
      { name: 'Pele de Ferro', desc: '<strong>Pele de Ferro Aprimorada (Nível 4):</strong> Concede +2 de Defesa contra ataques à distância e +2 de RD física.' },
      { name: 'Retaliação de Impacto', desc: '<strong>Retaliação de Impacto (Nível 5):</strong> Custo: 1 Ponto de Inflexibilidade. Causa 1d8 de dano ao atacante ao conseguir bloquear ou absorver um ataque.' },
      { name: 'Interceptação Balística', desc: '<strong>Interceptação Balística (Nível 6):</strong> Custo: Reação + 1 Ponto de Inflexibilidade. Protege um aliado adjacente e reduz o dano transferido em 5.' },
      { name: 'Escudo de Absorção', desc: '<strong>Escudo de Absorção Absoluta (Nível 7):</strong> Custo: 2 PA + 2 Pontos de Inflexibilidade. Anula completamente o dano do próximo ataque físico ou explosivo sofrido.' },
      { name: 'Ancoragem Territorial', desc: '<strong>Ancoragem Territorial (Nível 8):</strong> Custo: 1 PA + 2 Pontos de Inflexibilidade. Concede +4 de RD física, impedindo o Vanguardista de se mover voluntariamente até seu próximo turno.' },
      { name: 'Vigor Inextinguível', desc: '<strong>Vigor Inextinguível (Nível 9):</strong> Ao chegar a 0 PV, permite que o Vanguardista permaneça consciente e agindo normalmente por mais 1 rodada.' },
      { name: 'Baluarte Supremo', desc: '<strong>Baluarte Supremo do Ferro (Nível 10):</strong> Libera a escolha permanente de uma das Trilhas do Vanguardista:<br><br>• <strong>Bastião:</strong> Escudo vivo impenetrável, capaz de estender cúpulas protetoras para aliados.<br>• <strong>Demolidor:</strong> Focado em quebrar armaduras, causar tremores mecânicos e desferir abalos brutais.<br>• <strong>Guardião Rúnico:</strong> Funde runas de proteção e absorve energia mágica dos inimigos para carregar defesas.' }
    ],
    'Ciborgue': [
      { name: 'Visão de Sistema', program: 'Custo: 1 PP. Recebe +2 em testes de Percepção / Prontidão e visualiza assinaturas térmicas por 3 rodadas.', sobrecarga: '<strong>Scanner Tático:</strong> Revela fraquezas estruturais ocultas do alvo, garantindo +1 na margem de crítico contra ele.' },
      { name: 'Corpo Aumentado', program: 'Custo: 1 PP. Ativa servomotores garantindo +1 em Força (FOR) ou Constituição (CON) por 3 rodadas.', sobrecarga: '<strong>Overdrive Motorizado:</strong> Concede adicionalmente +3 metros de deslocamento durante a ativação.' },
      { name: 'Ponto Fraco', program: 'Custo: 1 PP. Adiciona +1d6 de dano de precisão contra alvos Marcados por 3 rodadas.', sobrecarga: '<strong>Ponto Fraco Supremo:</strong> Eleva o dano extra para +2d6 e ignora a RD física do alvo.' },
      { name: 'Interface de Combate', program: 'Custo: 1 PP. Otimiza o tempo de resposta, garantindo +1 de Iniciativa e +1,5m de movimento por 3 rodadas.', sobrecarga: '<strong>Protocolo de Assalto:</strong> Concede imediatamente +1 PA em seu próximo turno.' },
      { name: 'Protocolo Antimaterial', program: 'Custo: 1 PP. Seus ataques causam +1d6 de dano contra máquinas, construtos e barreiras por 3 rodadas.', sobrecarga: '<strong>Protocolo Antimaterial Supremo:</strong> Eleva o dano extra contra essas ameaças para +2d6.' },
      { name: 'Reparação de Campo', program: 'Custo: 1 PP. Restaura 1d10 + CON pontos de vida (PV) do próprio Ciborgue.', sobrecarga: '<strong>Reparação Total:</strong> Restaura o dobro de PV e remove 1 condição física negativa ativa (como Queimando ou Congelado).' },
      { name: 'Caçador de Máquinas', program: 'Custo: 1 PP. Concede +2 em testes de Tecnologia & Sistemas e jogadas de ataque contra máquinas por 3 rodadas.', sobrecarga: '<strong>Caçador de Máquinas Supremo:</strong> Eleva o bônus para +4 e permite realizar um ataque gratuito contra a máquina ao hackeá-la.' },
      { name: 'Sobrecarga de Protocolo', program: 'Custo: 1 PP. Sobrecarrega o núcleo para conceder +1 PA neste turno.', sobrecarga: '<strong>Sobrecarga de Protocolo Supremo:</strong> Concede +2 PA neste turno, ao custo de sofrer 1d6 de dano térmico no final da rodada.' },
      { name: 'Arsenal Integrado', program: 'Custo: 1 PP. Integra uma de suas armas de fogo ao próprio corpo por 3 rodadas, reduzindo o seu Recuo a 0.', sobrecarga: '<strong>Arsenal Integrado Supremo:</strong> O ataque integrado ignora cobertura leve e concede +1 de dano por dado rolado.' },
      { name: 'Arquitetura de Combate', program: 'O Ciborgue consolida seus sistemas integrados e se prepara para a especialização de sua arquitetura tática avançada.', sobrecarga: '<strong>Arquitetura de Elite:</strong> Libera a escolha de uma das Trilhas permanentes do Ciborgue (Samurai Cibernético, Arsenal de Combate ou Caçador de Máquinas). No nível 10, os Protocolos de Classe tornam-se passivos permanentes, e as Sobrecargas de cada Protocolo passam a agir como novos Protocolos Ativos Independentes (1 PA + 1 PP).' }
    ]
  }

  const classTrails = {
    'Atirador': [
      {
        name: 'Franco-Atirador',
        identity: 'Longo alcance · precisão extrema · perfuração',
        abilities: [
          { name: 'Tiro de Elite', type: 'Passiva', cost: '', desc: 'Com rifles ou armas longas: +2 VA contra alvos a 12 m ou mais. Se não tiver se movido desde o início do turno, recebe +1 VA adicional. Um Crítico com arma longa recupera 1 Precisão (máx. 1/rodada).' },
          { name: 'Balística Extrema', type: 'Passiva', cost: '', desc: 'Ignora penalidade de alcance e pode atingir até o dobro do alcance efetivo da arma.' },
          { name: 'Tiro Perfurante', type: 'Ativa', cost: '2 PA + 2 Precisão', desc: 'Ignora Cobertura Leve e Pesada; atravessa até 10 cm de concreto ou 5 cm de aço; ignora até 6 RD Física. Após atravessar o obstáculo, sofre –2 VA. Não atravessa Cobertura Total além desses limites.' },
          { name: 'Assinatura Fantasma', type: 'Passiva', cost: '', desc: 'Atacando de Cobertura Total ou Furtividade, o disparo não revela automaticamente sua posição. Para localizá-lo, o inimigo precisa obter dois sucessos separados de Percepção contra Furtividade: o primeiro descobre a direção e o segundo a localização exata.' },
          { name: 'Abate em Cadeia', type: 'Suprema', cost: '2 PA + 2 Precisão', desc: 'Se o disparo eliminar o alvo ou causar Crítico, realiza imediatamente um segundo disparo gratuito contra outro alvo visível. O segundo disparo não pode gerar outro Abate em Cadeia.' }
        ]
      },
      {
        name: 'Pistoleiro Tático',
        identity: 'Mobilidade · armas leves · pressão contínua',
        abilities: [
          { name: 'Saque Instintivo', type: 'Passiva', cost: '', desc: 'Sacar, guardar ou trocar entre até duas armas leves custa 0 PA. A primeira troca no turno concede +1 VA no próximo ataque com a arma recém-equipada.' },
          { name: 'Movimento de Combate', type: 'Passiva', cost: '', desc: 'Após mover pelo menos 3 m com arma leve, recebe +2 Esquiva até o início do próximo turno. Uma vez por rodada, pode sair de engajamento sem Ataque de Oportunidade.' },
          { name: 'Rajada de Varredura', type: 'Ativa', cost: '2 PA + 1 Precisão', desc: 'Cone de 6 m contra até 3 criaturas, uma vez cada. Cada acerto usa os dados normais de dano da arma utilizada.' },
          { name: 'Flanqueamento Letal', type: 'Passiva', cost: '', desc: 'Ataques de arma leve contra alvo Engajado com um aliado recebem +1d8 perfurante.' },
          { name: 'Descarregar o Pente', type: 'Suprema', cost: '3 PA + 3 Precisão', desc: 'Escolhe uma criatura e consome toda a munição restante da arma leve equipada. Cada munição gera um disparo consecutivo no mesmo turno com acerto automático. Dano normal da arma com crítico. Contra alvos com condição negativa, ignora RD.' }
        ]
      },
      {
        name: 'Caçador Arcano',
        identity: 'Rastreio mágico · contra-magia · caça etérea',
        abilities: [
          { name: 'Munição Anti-Éter', type: 'Passiva', cost: '', desc: 'A cada disparo, escolha dano físico ou arcano. Uma vez por rodada, ao causar dano arcano, pode gastar 1 Precisão para revelar a proteção mágica temporária do alvo por 1 rodada.' },
          { name: 'Rastreio Etéreo', type: 'Passiva', cost: '', desc: 'Detecta energia mágica em até 15 m. Recebe +4 em Percepção/Prontidão e Sintonia Arcana para rastrear magia. Percebe invisibilidade, ilusões, barreiras e rastros mágicos recentes.' },
          { name: 'Projétil Rastreador', type: 'Ativa', cost: '2 PA + 1 Precisão', desc: 'Primeiro projétil ignora Cobertura Leve/Pesada. Se acertar, o segundo disparo é gratuito, persegue e acerta automaticamente causando dano arcano (mitigado por RD do alvo + RD da cobertura).' },
          { name: 'Selo de Interrupção', type: 'Passiva', cost: '', desc: 'Ao acertar um conjurador preparando magia, cancela a preparação e aumenta o desgaste da próxima conjuração.' },
          { name: 'Disparo de Anulação', type: 'Suprema', cost: '2 PA + 3 Precisão', desc: 'Contra criatura: 3d10 arcano e encerra 1 efeito mágico sustentado. Contra barreira ou invocação: 6d10 arcano direto nos PV da estrutura (sem Esquiva).' }
        ]
      }
    ],
    'Canalizador': [
      {
        name: 'Arcanista Elemental',
        identity: 'Elementos · controle de área · efeitos de status',
        abilities: [
          { name: 'Infusão Elemental', type: 'Passiva', cost: '', desc: 'Aplica efeito elemental por magia: Fogo (Queimando), Gelo (Lentificado), Raio (–1 PA no próximo turno), Terra (–2 Defesa), Ar (empurra 2m), Sombra (–2 Percepção), Luz (+2 Defesa aliado), Arcano (+5 Exaustão recuperada), Cura (+1d6 PV).' },
          { name: 'Domínio Elemental', type: 'Passiva', cost: '', desc: '+3 m na área de ação das magias de área.' },
          { name: 'Reação Elemental', type: 'Ativa', cost: '2 PA + 1 Sintonia', desc: 'Efeito ampliado: Fogo (+2d6), Gelo (Imobilizado), Raio (sem Reação), Terra (Caído), Ar (empurra 3m), Sombra (Cego), Luz (cura 2d6), Arcano (ignora 5 RD Mágica), Cura (remove Caído, Assustado ou Lentificado).' },
          { name: 'Ruptura Elemental', type: 'Passiva', cost: '', desc: 'Alvos atingidos por sua magia perdem 3 RD correspondente ao elemento por 2 rodadas.' },
          { name: 'Inscrição Dupla & Canalização Cruzada', type: 'Suprema', cost: 'Passiva', desc: 'Antes do minijogo, escolha 2 Runas Prioritárias. Cada ocorrência delas conta como acerto automático mesmo fora da sequência original.' }
        ]
      },
      {
        name: 'Manipulador Espacial',
        identity: 'Teleporte · dobra dimensional · controle gravítico',
        abilities: [
          { name: 'Passo Etéreo', type: 'Passiva', cost: '', desc: '+3 m de deslocamento e ignora terreno difícil enquanto conjura.' },
          { name: 'Salto Espacial', type: 'Ativa', cost: '1 PA + 1 Sintonia', desc: 'Teleporta até 12 m para ponto visível e desocupado, sem provocar Ataques de Oportunidade.' },
          { name: 'Transposição Tática', type: 'Ativa', cost: '2 PA + 2 Sintonia', desc: 'Troca a posição de duas criaturas a até 15 m. Alvo hostil pode realizar REF contra CD 15 para evitar.' },
          { name: 'Distorção Refratária', type: 'Reação', cost: '1 Reação + 1 Sintonia', desc: 'Aplica –3 VA contra ataque à distância direto direcionado a você.' },
          { name: 'Fenda Gravitacional', type: 'Suprema', cost: '3 PA + 3 Sintonia + 20 Exaustão', desc: 'Fenda a até 18 m com área de 8 m por 2 rodadas. Causa 4d10 de força e puxa 4 m; 2d10 no início do turno; atordoa criaturas no centro. Fenda possui 20 PV e Defesa 12.' }
        ]
      },
      {
        name: 'Taumaturgo de Sobrecarga',
        identity: 'Risco extremo · sobrecarga · potência devastadora',
        abilities: [
          { name: 'Potência da Ruptura', type: 'Passiva', cost: '', desc: 'Enquanto a Exaustão estiver abaixo de 0, suas magias causam +2 dano por Círculo.' },
          { name: 'Conjuração de Risco', type: 'Ativa', cost: '1 Sintonia', desc: 'Permite lançar magia mesmo sem Exaustão suficiente, pagando toda a Exaustão restante e ganhando +2 Colapso.' },
          { name: 'Tolerância Extrema', type: 'Passiva', cost: '', desc: 'Seu limite seguro de Sobrecarga é ampliado em +5 Exaustão.' },
          { name: 'Purga Violenta', type: 'Ativa', cost: '2 PA + 2 Sintonia', desc: 'Pode queimar até 30 de Exaustão restante. Para cada 5 de Exaustão gastos, causa 1d10 em cone de 6 m.' },
          { name: 'Além do Limite', type: 'Suprema', cost: 'Passiva (1/Descanso Completo)', desc: 'Ao atingir 10 de Colapso, evita a Detonação Arcana e recupera 50% da Exaustão Máxima mantendo 10 Colapso.' }
        ]
      }
    ],
    'Híbrido': [
      {
        name: 'Engenheiro Arcano',
        identity: 'Drones · torres automatizadas · suporte técnico',
        abilities: [
          { name: 'Módulos Aprimorados de Campo', type: 'TECNOLOGIA • Passiva', cost: '', desc: 'Acessórios, miras, supressores e modificações em armas do grupo recebem +1 em suas estatísticas padrão.' },
          { name: 'Forja de Campo Expressa', type: 'TECNOLOGIA • Ativa', cost: '1 PA', desc: 'Usa sucata/metal para reparar armadura ou colete destruído ou destravar arma emperrada instantaneamente.' },
          { name: 'Deploy de Drone Tático', type: 'TECNOLOGIA • Ativa', cost: '2 PA', desc: 'Lança drone com +15 PV temporários de escudo a um aliado ou fogo de suporte (1d8 por rodada).' },
          { name: 'Bateria Eletrostática do Drone', type: 'TECNOLOGIA • Passiva', cost: '', desc: 'Enquanto o drone estiver ativo, aliados a até 3 m recuperam Exaustão no início da rodada.' },
          { name: 'Automação de Torre Pesada', type: 'Suprema', cost: '3 PA', desc: 'Transforma o drone em torre pesada fixa. Realiza 2 disparos por rodada (2d10 cada) durante 3 turnos.' }
        ]
      },
      {
        name: 'Lâmina/Gatilho Rúnico',
        identity: 'Combate fluido · lâminas energizadas · combos corpo a corpo e fogo',
        abilities: [
          { name: 'Cadência Alternada', type: 'TECNOLOGIA • Passiva', cost: '', desc: 'Acerto corpo a corpo Cortante concede +2 VA no próximo disparo de fogo no turno. Acerto de fogo concede +2 VA no próximo golpe Cortante.' },
          { name: 'Esgrima Balística', type: 'TECNOLOGIA • Passiva', cost: '', desc: 'Com arma Cortante e arma leve, pode usar FOC + Pontaria no VA corpo a corpo e FOR + Briga nos ataques à distância da arma leve.' },
          { name: 'Combo Integrado à Queima-Roupa', type: 'TECNOLOGIA • Ativa', cost: '2 PA', desc: 'Ataque corpo a corpo Cortante e disparo na mesma sequência. Aciona Cadência Alternada e adiciona +1d10 de dano crítico.' },
          { name: 'Parry Energizado de Repulsão', type: 'ARCANO • Reação', cost: '1 Reação', desc: 'Bloqueia ataque corpo a corpo hostil e causa 2d6 de dano elétrico ao atacante.' },
          { name: 'Execução Devastadora em Cadeia', type: 'Suprema', cost: '3 PA + 3 Cargas', desc: 'Metade do deslocamento livre sem terreno difícil, encadeando ataques contra alvos visíveis a até 3 m do anterior. Causa 1d12 por alvo marcado.' }
        ]
      },
      {
        name: 'Infiltrador',
        identity: 'Camuflagem óptica · emboscada · assassinato fantasma',
        abilities: [
          { name: 'Camuflagem Rúnica', type: 'ARCANO • Passiva', cost: '', desc: 'Enquanto imóvel em cobertura, é indetectável por sensores tecnológicos, térmicos e auras arcanas.' },
          { name: 'Passos de Espectro', type: 'ARCANO • Passiva', cost: '', desc: 'Mover-se na zona de engajamento inimiga não provoca Ataques de Oportunidade nem disparos de reação.' },
          { name: 'Emboscada Perfurante', type: 'TECNOLOGIA • Ativa', cost: '2 PA', desc: 'Ataque surpresa vindo de Furtividade ignora coletes e armadura balística, levando a RD balística do alvo para 0.' },
          { name: 'Holograma de Distração Tática', type: 'TECNOLOGIA • Ativa', cost: '1 PA', desc: 'Cria cópia holográfica espacial; inimigos próximos gastam ações e ataques contra o holograma falso.' },
          { name: 'Deslocamento Sombra & Execução', type: 'Suprema', cost: 'ARCANO • 3 PA', desc: 'Deixa ilusão e teleporta às costas do alvo a até 10 m. Ataque provoca Crítico automático com multiplicador triplicado.' }
        ]
      }
    ],
    'Vanguardista': [
      {
        name: 'Bastião',
        identity: 'Fortaleza inamovível · cúpulas protetoras · defesa territorial',
        abilities: [
          { name: 'Muralha Viva', type: 'Passiva', cost: '', desc: 'Em Cobertura ou com escudo: +3 RD Física. Se estático no turno, +2 Defesa adicional.' },
          { name: 'Ancoragem de Esquadrão', type: 'Passiva', cost: '', desc: 'Aliados adjacentes recebem +2 Defesa contra tiros e imunidade a Empurrado/Caído.' },
          { name: 'Cúpula de Proteção', type: 'Ativa', cost: '2 PA + 2 Inflexibilidade', desc: 'Cúpula com 40 PV, Defesa 12, RD 4 Física/Mágica em raio de 3 m por 2 rodadas, bloqueando ataques externos.' },
          { name: 'Redistribuição de Impacto', type: 'Passiva', cost: '', desc: 'Quando cúpula ou escudo absorver 5+ de dano em um ataque, recupera 1 Inflexibilidade.' },
          { name: 'Fortaleza Inexpugnável', type: 'Suprema', cost: '2 PA + 3 Inflexibilidade', desc: 'Até próximo turno: +5 Defesa, +5 RD Física/Balística, imune a Caído; aliados adjacentes recebem +3 RD.' }
        ]
      },
      {
        name: 'Demolidor',
        identity: 'Quebra de armaduras · ondas de choque · destruição de estruturas',
        abilities: [
          { name: 'Especialista em Demolição', type: 'Passiva', cost: '', desc: 'Dobra dados contra estruturas/escudos; ignora 3 RD de estruturas; destruir proteção dá +1d8 no alvo atrás; espingarda não gasta munição.' },
          { name: 'Abalo Brutal', type: 'Passiva', cost: '', desc: 'Acerto físico aplica –2 Defesa e –2 REF até próximo turno. Crítico causa Caído.' },
          { name: 'Impacto Sísmico', type: 'Ativa', cost: '3 PA + 2 Inflexibilidade', desc: 'Ponto a até 6 m com raio de 5 m: causa 3d10 físico; REF CD 15 ou Caído. Estruturas sofrem dano dobrado.' },
          { name: 'Triturador de Proteções', type: 'Passiva', cost: '1 Inflexibilidade', desc: 'Reduz RD Física do alvo em 3 por 2 rodadas. Próximo tiro de espingarda ganha +1d8 (ou +2d8 em crítico).' },
          { name: 'Onda de Demolição', type: 'Suprema', cost: '2 PA + 3 Inflexibilidade', desc: 'Linha de 12 m × 2 m causando 4d12 físico (REF CD 15 ou Atordoado). Coberturas destruídas geram tiros gratuitos de espingarda com +2d10 ignorando 6 RD.' }
        ]
      },
      {
        name: 'Guardião Rúnico',
        identity: 'Absorção mágica · auras protetoras · reflexão de feitiços',
        abilities: [
          { name: 'Escudo Rúnico', type: 'Passiva', cost: '', desc: 'Com 1+ Inflexibilidade, concede +3 RD Mágica a si e aliados adjacentes. Detecta magia sustentada a até 6 m.' },
          { name: 'Retaliação Arcana', type: 'Reação', cost: '1 Reação + 1 Inflexibilidade', desc: 'Ao sofrer dano mágico, reduz em 10 e causa 1d8 arcano ao atacante.' },
          { name: 'Sifão Rúnico', type: 'Ativa', cost: '2 PA + 2 Inflexibilidade', desc: 'Aliado a 6 m ganha +5 RD Mágica por 2 rodadas. Absorver 5+ dano recupera 1 Inflexibilidade.' },
          { name: 'Vínculo Guardião', type: 'Passiva', cost: '', desc: 'Assume metade do dano mágico sofrido por aliado a até 3 m e ganha 1 Inflexibilidade (1/rodada).' },
          { name: 'Espelho do Caos', type: 'Suprema', cost: 'Reação + 3 Inflexibilidade', desc: 'Teste oposto de CONH + Sintonia Arcana reflete feitiço direcionado hostil de volta ao conjurador.' }
        ]
      }
    ],
    'Ciborgue': [
      {
        name: 'Samurai Cibernético',
        identity: 'Duelo • Precisão • Execução (Programas Passivos & Sobrecargas Ativas 1 PA + 1 PP)',
        abilities: [
          { name: 'Nível 10 — Lâmina de Precisão', type: 'Passiva', cost: '', desc: 'Escolha arma cortante como Lâmina Principal: +2 VA, +1d6 dano e não sofre penalidade por Caído.' },
          { name: 'Nível 11 — Leitura do Duelo', type: 'Passiva', cost: '', desc: 'Apenas um inimigo a até 3 m: +2 Defesa e +2 Esquiva. Sem outros inimigos a 6 m: +1 VA adicional.' },
          { name: 'Nível 12 — IAIDO', type: 'Ativa', cost: '2 PA + 1 PP', desc: 'Em alvo Marcado: único ataque do turno com Lâmina Principal dobra todos os dados de dano antes da RD.' },
          { name: 'Nível 13 — Caminho do Corte', type: 'Passiva', cost: '', desc: 'Após acertar criatura no turno, próximo ataque recebe +1 VA e +1d8 de dano.' },
          { name: 'Nível 14 — Forma Final: Último Duelo', type: 'Suprema', cost: '3 PA + 2 PP', desc: 'Zona de Duelo de 6 m sem interferência externa; golpe com Lâmina causa derrota imediata. Vitória recupera PV perdidos, 1 PA, +2 VA e +2 Defesa por 3 rodadas.' }
        ]
      },
      {
        name: 'Arsenal de Combate',
        identity: 'Armadura • Armamento • Potência (Programas Passivos & Sobrecargas Ativas 1 PA + 1 PP)',
        abilities: [
          { name: 'Nível 10 — Armadura de Combate', type: 'Passiva', cost: '', desc: '+3 Defesa, +3 RD física/balística e +3 m de deslocamento permanente.' },
          { name: 'Nível 11 — Vetor Aéreo', type: 'Passiva', cost: '', desc: 'Pequenos deslocamentos aéreos sem dano de queda, ignora terreno comum e recebe +2 Acrobacia.' },
          { name: 'Nível 12 — Fluxo de Armas', type: 'Ativa', cost: '2 PA + 1 PP', desc: 'Segundo ataque no turno com outra arma com +2 VA. Se ambos acertarem: +2d6 de dano extra.' },
          { name: 'Nível 13 — Núcleo de Armamento', type: 'Passiva', cost: '', desc: 'Escolha 2 sistemas integrados: Canhão de Pulso (2d8 elétrico, 12m), Míssil Guiado (2d6 explosivo, área 2m), Lâmina Energizada (1d10 elétrico) ou Repulsor (1d10 força, empurra 3m).' },
          { name: 'Nível 14 — Forma Final: Ironheart', type: 'Suprema', cost: '3 PA + 2 PP', desc: 'Por 3 rodadas: Voo, +4 Defesa, +4 RD, +3 VA, +2d6 dano, +6 m deslocamento. Disparo de Barragem Total (3d10 + 2d8) contra até 3 alvos a 18 m. Sofre 10 Exaustão ao fim.' }
        ]
      },
      {
        name: 'Caçador de Máquinas',
        identity: 'Sabotagem • Invasão • Controle (Programas Passivos & Sobrecargas Ativas 1 PA + 1 PP)',
        abilities: [
          { name: 'Nível 10 — Interface Hostil & Invasão Forçada', type: 'Passiva / Ativa', cost: '2 PA + 1 PP', desc: '+2 Tecnologia & Sistemas e +2 VA contra máquinas analisadas. Invasão Forçada aplica Interferido (-2 VA, -2 Defesa, -1 PA) até o próximo turno.' },
          { name: 'Nível 11 — Rede de Combate', type: 'Passiva', cost: '', desc: 'Aliado causando dano à máquina na interface recupera 1 PP para você (1 vez por rodada).' },
          { name: 'Nível 12 — Sequestro de Sistema', type: 'Ativa', cost: '2 PA + 1 PP', desc: 'Teste de Tecnologia contra máquina a até 9 m: assume controle temporário para atacar, desligar ou mover.' },
          { name: 'Nível 13 — Arquitetura Inversa', type: 'Passiva', cost: '', desc: 'Ao destruir máquina sob interface: escolha recuperar 1 PP, mover 3 m ou recuperar 1 PA (1/rodada).' },
          { name: 'Nível 14 — Forma Final: Domínio Mecânico', type: 'Suprema', cost: '3 PA + 2 PP', desc: 'Rede de 12 m com até 3 interfaces ativas por 3 rodadas. +2 VA contra alvos conectados. Encerramento assume controle de até 3 máquinas e sofre 8 Exaustão.' }
        ]
      }
    ]
  };

  // As duas novas classes usam o catálogo oficial consolidado em new-classes.js
  if (Array.isArray(window.FerroArcanoNewClasses)) {
    for (const entry of window.FerroArcanoNewClasses) {
      classMechanics[entry.name] = entry.powers;
      classTrails[entry.name] = entry.trails;
      const chapter = chapters.find(chapter => chapter.id === 'classes');
      const item = chapter && chapter.classes.find(item => item[0] === entry.name);
      if (item) {
        item[2] = entry.powers.map(power => power.name);
        item[1] = entry.card[3];
      }
    }
  }

  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))
  const normalize = value => String(value).replace(/<[^>]*>/g, ' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const includes = (value, query) => normalize(JSON.stringify(value)).includes(query)
  function filterChapter(chapter, query) {
    if (!query || includes([chapter.title, chapter.lead], query)) return chapter
    if (chapter.classes) {
      const classes = chapter.classes.filter(item => includes([item, classMechanics[item[0]], classTrails[item[0]], (window.FerroArcanoNewClasses || []).find(entry => entry.name === item[0])?.intro], query))
      return classes.length ? { ...chapter, classes } : null
    }
    const blocks = (chapter.blocks || []).filter(block => includes(block, query))
    return blocks.length ? { ...chapter, blocks } : null
  }
  const classId = name => 'classe-' + normalize(name).replace(/[^a-z0-9]+/g, '-')
  const sectionId = (chapterId, title, index) => `${chapterId}-${String(index + 1).padStart(2, '0')}-${normalize(title).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
  const initialTargetId = location.hash.slice(1)
  let activeChapterId = chapters.find(chapter => chapter.id === initialTargetId || chapterSections(chapter).some(section => section.id === initialTargetId))?.id || chapters[0].id
  let activeOriginClass = 'all'
  let chapterObserver = null
  let subsectionObserver = null

  function chapterSections(chapter) {
    if (chapter.classes) return chapter.classes.map(item => ({ id: classId(item[0]), title: item[0] }))
    return (chapter.blocks || []).map((block, index) => ({ id: sectionId(chapter.id, block[0], index), title: block[0] }))
  }

  function renderNav() {
    nav.innerHTML = chapters.map(chapter => {
      const active = chapter.id === activeChapterId
      const subsections = chapterSections(chapter)
      return `<div class="nav-group${active ? ' active' : ''}" data-chapter="${chapter.id}">
        <a class="chapter-link${active ? ' active' : ''}" href="#${chapter.id}" aria-expanded="${active}"><span class="chapter-link-label"><b>${chapter.number}</b>${chapter.title}</span><span class="chapter-chevron">${active ? '−' : '+'}</span></a>
        <div class="chapter-subnav"${active ? '' : ' hidden'}>${subsections.map((section, index) => `<a class="sub-link" href="#${section.id}"><span>${String(index + 1).padStart(2, '0')}</span>${section.title}</a>`).join('')}</div>
      </div>`
    }).join('')
  }

  function parseOrigin(block) {
    const body = block[1]
    const general = body.match(/<strong>Geral \((.*?)\):<\/strong>\s*([\s\S]*?)(?:<br><br>|$)/)
    const manifestations = []
    const pattern = /•\s*<strong>(.*?) \((.*?)\):<\/strong>\s*([\s\S]*?)(?=<br>|$)/g
    let match
    while ((match = pattern.exec(body))) {
      manifestations.push({ className: match[1], name: match[2], description: match[3].trim() })
    }
    return {
      name: block[0],
      generalName: general?.[1] || 'Benefício geral',
      generalDescription: general?.[2]?.trim() || '',
      manifestations
    }
  }

  function renderOrigins(chapter) {
    const origins = chapter.blocks.map(parseOrigin)
    const classNames = [...new Set(origins.flatMap(origin => origin.manifestations.map(item => item.className)))]
    const filters = ['all', ...classNames].map(className => {
      const label = className === 'all' ? 'Todas as Classes' : className
      return `<button type="button" class="origin-filter${activeOriginClass === className ? ' active' : ''}" data-origin-class="${esc(className)}" aria-pressed="${activeOriginClass === className}">${esc(label)}</button>`
    }).join('')

    const entries = origins.map((origin, index) => `<article class="origin-entry" id="${sectionId(chapter.id, origin.name, index)}">
      <header class="origin-heading"><span class="section-index">${chapter.number}.${String(index + 1).padStart(2, '0')}</span><div><p>Origem</p><h4>${origin.name}</h4></div></header>
      <div class="origin-general"><span>Benefício geral</span><div><h5>${origin.generalName}</h5><p>${origin.generalDescription}</p></div></div>
      <div class="manifestation-list" aria-label="Manifestações de ${origin.name}">
        ${origin.manifestations.map(item => `<section class="manifestation-row" data-manifestation-class="${esc(item.className)}">
          <div class="manifestation-class">${esc(item.className)}</div>
          <div><h5>${esc(item.name)}</h5><p>${item.description}</p></div>
        </section>`).join('')}
      </div>
    </article>`).join('')

    return `<section class="wiki-chapter origins-chapter" id="${chapter.id}">
      <div class="chapter-heading"><span class="chapter-number">${chapter.number}</span><h3>${chapter.title}</h3></div>
      <p class="chapter-lead">${chapter.lead}</p>
      <aside class="origin-primer"><span>Como funciona</span><p>Escolha uma Origem durante a criação. Você recebe o <strong>benefício geral</strong> dela e também a <strong>Manifestação correspondente à sua Classe</strong>. A Manifestação adapta a mesma história ao papel tático da personagem.</p></aside>
      <div class="origin-filter-panel"><div><span>Filtrar manifestações</span><strong id="origin-filter-status">Exibindo todas as Classes</strong></div><div class="origin-filters" role="group" aria-label="Filtrar manifestações por Classe">${filters}</div></div>
      <div class="origin-directory" aria-label="Índice de Origens">${origins.map((origin, index) => `<a href="#${sectionId(chapter.id, origin.name, index)}"><span>${String(index + 1).padStart(2, '0')}</span>${origin.name}</a>`).join('')}</div>
      <div class="origin-flow">${entries}</div>
    </section>`
  }

  function renderChapter(chapter) {
    if (chapter.id === 'origins') return renderOrigins(chapter)
    const blocks = chapter.blocks ? `<div class="rule-flow">${chapter.blocks.map((block, index) => `<article class="rule-section" id="${sectionId(chapter.id, block[0], index)}"><span class="section-index">${chapter.number}.${String(index + 1).padStart(2, '0')}</span><div class="rule-copy"><h4>${block[0]}</h4><div>${block[1]}</div></div></article>`).join('')}</div>` : ''

    const classEntries = chapter.classes ? chapter.classes.map(item => {
      const mechanics = classMechanics[item[0]] || [];
      const newClass = (window.FerroArcanoNewClasses || []).find(entry => entry.name === item[0]);
      const trails = classTrails[item[0]] || [];

      const trailsHtml = trails.length ? `
        <div class="trail-section" style="margin-top:24px; border-top:1px solid #3f3f46; padding-top:16px;">
          <h5 style="color:#fbbf24; font-size:15px; margin-bottom:12px; letter-spacing:0.02em;">Trilhas de Especialização · ${item[0]} (Níveis 10 ao 14)</h5>
          <div class="trail-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
            ${trails.map(tr => `
              <div class="trail-box" style="background:rgba(255,255,255,0.02); border:1px solid rgba(245,158,11,0.25); border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:8px;">
                <div style="border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:6px;">
                  <strong style="color:#fcd34d; font-size:14px;">${tr.name}</strong>
                  ${tr.identity ? `<small style="display:block; color:#a1a1aa; font-size:11px; margin-top:2px;">${tr.identity}</small>` : ''}
                </div>
                <div style="display:flex; flex-direction:column; gap:6px;">
                  ${tr.abilities.map((ab, abIdx) => {
                    const detailIdx = addDetail(`${tr.name} · N${10 + abIdx} · ${ab.name}`, `<strong>${ab.cost ? ab.cost + ' · ' : ''}${ab.type}</strong><br><br>${ab.desc}`, 'Habilidade de Trilha');
                    return `<button type="button" class="power" data-detail="${detailIdx}" style="padding:6px 0; font-size:11px; grid-template-columns: 24px 1fr;">
                      <span class="power-level" style="font-size:10px;">N${10 + abIdx}</span>
                      <div>
                        <b style="color:#f4f4f5; display:block;">${ab.name} <small style="color:#fbbf24; font-weight:normal;">(${ab.type}${ab.cost ? ' · ' + ab.cost : ''})</small></b>
                        <span style="color:#a1a1aa; font-size:10px; line-height:1.4; display:block; margin-top:2px;">${ab.desc}</span>
                      </div>
                    </button>`;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      return `<article class="class-entry" id="${classId(item[0])}">
        <h4>${item[0]}</h4>
        <p class="class-meta">${item[1]}</p>
        ${newClass ? `<div class="class-reference">${newClass.intro.map(([title, body], index) => `<details${index === 0 ? " open" : ""}><summary>${title}</summary><p>${body}</p></details>`).join("")}</div>` : ""}
        <div class="power-list">${item[2].map((power, index) => {
        const mechanic = mechanics[index];
        let body = 'Poder de Classe.';
        if (mechanic) {
          if (item[0] === 'Ciborgue') {
            body = `<strong>Protocolo (Ativo):</strong> ${mechanic.program || mechanic.protocol}<br><strong>Sobrecarga:</strong> ${mechanic.sobrecarga}`;
          } else {
            body = mechanic.desc || mechanic || 'Poder de Classe.';
          }
        }
        const detail = addDetail(`${item[0]} · Nível ${index + 1} · ${power}`, body, 'Poder de Classe');
        return `<button class="power" data-detail="${detail}">
            <span class="power-level">${index + 1}</span>
            <span class="power-name">${power}</span>
            <span class="power-desc">${body}</span><span class="power-hint">Ler regra completa ↗</span>
          </button>`
      }).join('')}</div>
        ${trailsHtml}
      </article>`
    }).join('') : ''

    return `<section class="wiki-chapter" id="${chapter.id}"><div class="chapter-heading"><span class="chapter-number">${chapter.number}</span><h3>${chapter.title}</h3></div><p class="chapter-lead">${chapter.lead}</p>${blocks}${classEntries}</section>`
  }

  const detailDialog = window.FerroArcanoUI.dialog(document.querySelector('#detail-layer'), closeDetail)
  function render() {
    details.length = 0
    const query = normalize(search.value.trim())
    const visible = chapters.map(chapter => filterChapter(chapter, query)).filter(Boolean)
    content.innerHTML = visible.length ? visible.map(renderChapter).join('') : '<p class="search-empty">Nenhuma regra encontrada. Tente um nome de habilidade, classe ou recurso.</p>'
    document.querySelector('#search-status').textContent = query ? `${visible.length} capítulo(s) com resultados` : 'Todos os capítulos · busque também sem acentos'
    renderNav()
    applyOriginFilter()
    bindSectionTracking()
  }

  function applyOriginFilter() {
    const rows = content.querySelectorAll('[data-manifestation-class]')
    rows.forEach(row => { row.hidden = activeOriginClass !== 'all' && row.dataset.manifestationClass !== activeOriginClass })
    content.querySelectorAll('.origin-filter').forEach(button => {
      const active = button.dataset.originClass === activeOriginClass
      button.classList.toggle('active', active)
      button.setAttribute('aria-pressed', String(active))
    })
    const status = content.querySelector('#origin-filter-status')
    if (status) status.textContent = activeOriginClass === 'all' ? 'Exibindo todas as Classes' : `Exibindo apenas ${activeOriginClass}`
  }

  function scrollToTarget(targetId, behavior = 'smooth') {
    const targetChapter = chapters.find(chapter => chapter.id === targetId || chapterSections(chapter).some(section => section.id === targetId))
    if (targetChapter) setActiveChapter(targetChapter.id)
    const target = document.getElementById(targetId)
    if (!target) return
    target.scrollIntoView({ behavior, block: 'start' })
  }

  function setActiveChapter(chapterId) {
    if (!chapterId || chapterId === activeChapterId) return
    activeChapterId = chapterId
    nav.querySelectorAll('.nav-group').forEach(group => {
      const active = group.dataset.chapter === chapterId
      group.classList.toggle('active', active)
      const link = group.querySelector('.chapter-link')
      link.classList.toggle('active', active)
      link.setAttribute('aria-expanded', String(active))
      group.querySelector('.chapter-chevron').textContent = active ? '−' : '+'
      group.querySelector('.chapter-subnav').hidden = !active
    })
  }
  function collapseActiveChapter(group) {
    group.classList.remove('active')
    const link = group.querySelector('.chapter-link')
    link.classList.remove('active')
    link.setAttribute('aria-expanded', 'false')
    group.querySelector('.chapter-chevron').textContent = '+'
    group.querySelector('.chapter-subnav').hidden = true
  }
  function expandActiveChapter(group) {
    group.classList.add('active')
    const link = group.querySelector('.chapter-link')
    link.classList.add('active')
    link.setAttribute('aria-expanded', 'true')
    group.querySelector('.chapter-chevron').textContent = '−'
    group.querySelector('.chapter-subnav').hidden = false
  }
  function bindSectionTracking() {
    chapterObserver?.disconnect()
    subsectionObserver?.disconnect()
    chapterObserver = new IntersectionObserver(() => {
      const marker = Math.min(window.innerHeight * .22, 160)
      const sections = [...content.querySelectorAll('.wiki-chapter')]
      const current = sections.find(section => {
        const rect = section.getBoundingClientRect()
        return rect.top <= marker && rect.bottom > marker
      }) || sections.sort((a, b) => Math.abs(a.getBoundingClientRect().top - marker) - Math.abs(b.getBoundingClientRect().top - marker))[0]
      if (current) setActiveChapter(current.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, .15, .5] })
    content.querySelectorAll('.wiki-chapter').forEach(section => chapterObserver.observe(section))
    subsectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible) return
      nav.querySelectorAll('.sub-link').forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${visible.target.id}`))
    }, { rootMargin: '-20% 0px -68% 0px', threshold: [0, .2] })
    content.querySelectorAll('.rule-section, .class-entry').forEach(section => subsectionObserver.observe(section))
  }
  function openDetail(index) {
    const detail = details[index]
    if (!detail) return
    document.querySelector('#detail-kicker').textContent = detail.kicker
    document.querySelector('#detail-title').textContent = detail.title
    document.querySelector('#detail-body').innerHTML = `<p>${detail.body}</p>`
    detailDialog.open()
  }
  function closeDetail() { detailDialog.close() }
  nav.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]')
    if (!anchor) return
    event.preventDefault()
    const targetId = decodeURIComponent(anchor.getAttribute('href').slice(1))
    const group = event.target.closest('.nav-group')
    const chapterLink = event.target.closest('.chapter-link')
    if (group && chapterLink) {
      if (group.dataset.chapter === activeChapterId && group.classList.contains('active')) collapseActiveChapter(group)
      else if (group.dataset.chapter === activeChapterId) expandActiveChapter(group)
      else setActiveChapter(group.dataset.chapter)
    }
    if (search.value) { search.value = ''; render() }
    history.pushState(null, '', `#${targetId}`)
    if (!chapterLink || group.dataset.chapter !== activeChapterId || group.classList.contains('active')) requestAnimationFrame(() => scrollToTarget(targetId))
  })
  document.querySelector('#clear-search').addEventListener('click', () => { search.value = ''; render(); search.focus() })
  render()
  if (initialTargetId) {
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToTarget(initialTargetId, 'auto')))
    window.setTimeout(() => scrollToTarget(initialTargetId, 'auto'), 180)
  }
  search.addEventListener('input', render)
  content.addEventListener('click', event => {
    const filter = event.target.closest('[data-origin-class]')
    if (filter) {
      activeOriginClass = filter.dataset.originClass
      applyOriginFilter()
      return
    }
    const originLink = event.target.closest('.origin-directory a')
    if (originLink) {
      event.preventDefault()
      const targetId = decodeURIComponent(originLink.getAttribute('href').slice(1))
      history.pushState(null, '', `#${targetId}`)
      scrollToTarget(targetId)
      return
    }
    const trigger = event.target.closest('[data-detail]')
    if (trigger) openDetail(Number(trigger.dataset.detail))
  })
  window.addEventListener('hashchange', () => scrollToTarget(location.hash.slice(1), 'auto'))
  document.querySelectorAll('[data-close-detail]').forEach(element => element.addEventListener('click', closeDetail))
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDetail() })
})()
