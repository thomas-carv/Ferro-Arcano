// Conteúdo dos documentos oficiais de Vetor e Mediador Arcano.
// Compartilhado pela home e pela wiki; preserve limites e exceções das regras.
window.FerroArcanoNewClasses = [
  {
    "id": "vetor",
    "name": "Vetor",
    "card": [
      "vetor",
      "Vetor",
      "Controle · Disrupção",
      "Manipula movimento, impulso e direção para interromper investidas e controlar o campo.",
      "REF, FOC",
      30,
      4,
      "Momento"
    ],
    "intro": [
      [
        "Vetor",
        "<strong>Função:</strong> Controle / Disrupção  <br><strong>Atributos-chave:</strong> REF, FOC  <br><strong>PV Inicial:</strong> 30 + CON × 7  <br><strong>PV por Nível:</strong> 4 + CON  <br><strong>Perícia Obrigatória:</strong> Acrobacia  <br><strong>Escolha 3:</strong> Atletismo; Percepção / Prontidão; Intuição; Furtividade; Pilotagem; Briga / Corpo a Corpo.<br><br>O Vetor domina movimento, impulso e direção.<br><br>Ele não precisa superar um Atirador em dano, um Vanguardista em resistência ou um Canalizador em poder arcano. Sua vantagem está em interferir na maneira como as criaturas se movem e utilizam o espaço.<br><br>Um Vetor pode interromper uma investida, retirar o equilíbrio de um combatente em movimento, impedir deslocamento forçado, controlar zonas de passagem e transformar a velocidade do próprio inimigo em uma vulnerabilidade."
      ],
      [
        "Recurso De Classe — Momento",
        "<strong>Máximo: 3 + REF</strong><br><br>Momento representa a energia cinética que o Vetor percebe, acumula e manipula durante o combate.<br><br><strong>Em Movimento</strong><br><br>Uma criatura que tenha realizado voluntariamente pelo menos <strong>3 m de deslocamento desde o início de seu turno</strong> é considerada <strong>Em Movimento</strong> até o início do próximo turno dela.<br><br><strong>Em Movimento não é uma Condição.</strong><br><br>É apenas um marcador utilizado pelas habilidades do Vetor.<br><br>Não pode ser removido como uma Condição e não produz nenhum efeito sozinho.<br><br><strong>Recuperando Momento</strong><br><br>Uma vez por rodada, recupere <strong>1 Momento</strong> quando ocorrer um dos seguintes eventos:<br><br>• uma criatura visível a até 9 m torna-se Em Movimento;<br>• uma habilidade sua causa pelo menos 3 m de deslocamento forçado em uma criatura.<br><br>As duas fontes compartilham o mesmo limite de <strong>1 Momento recuperado por rodada</strong>.<br><br><strong>Descanso Curto:</strong> recupera todo o Momento."
      ]
    ],
    "powers": [
      {
        "name": "Impulso Vetorial",
        "desc": "<strong>1 PA + 1 Momento</strong><br><br>Escolha uma criatura visível a até <strong>6 m</strong>.<br><br>Você tenta deslocá-la <strong>3 m</strong>, escolhendo empurrá-la ou puxá-la.<br><br><strong>Criatura voluntária:</strong> o deslocamento ocorre automaticamente.<br><br><strong>Criatura hostil:</strong> REF CD 15 evita completamente o deslocamento.<br><br>Esse movimento:<br><br>• não provoca Ataque de Oportunidade;<br>• não atravessa estruturas sólidas;<br>• não atravessa espaços ocupados;<br>• termina no último espaço válido caso os 3 m completos sejam impossíveis."
      },
      {
        "name": "Roubo De Impulso",
        "desc": "<strong>Reação + 1 Momento</strong><br><br>Quando uma criatura <strong>Em Movimento</strong> a até 9 m declarar um ataque, use esta habilidade antes da rolagem de VA.<br><br>O ataque recebe:<br><br><strong>-2 VA.</strong><br><br>Se o ataque errar, você pode imediatamente se mover <strong>1,5 m</strong> sem gastar PA e sem provocar Ataque de Oportunidade.<br><br>O deslocamento do Vetor acontece somente após a resolução do ataque."
      },
      {
        "name": "Âncora Vetorial",
        "desc": "<strong>1 PA + 1 Momento</strong><br><br>Escolha você ou uma criatura voluntária visível a até <strong>6 m</strong>.<br><br>Até o início do seu próximo turno, o alvo:<br><br>• não pode sofrer deslocamento forçado;<br>• não pode ficar Caído por empurrões;<br>• não pode ficar Caído por colisões;<br>• não pode ficar Caído por explosões que causem deslocamento;<br>• não pode ficar Caído por manobras cuja causa seja movimento.<br><br>Âncora Vetorial não impede teleporte e não remove a condição Caído caso o alvo já esteja Caído."
      },
      {
        "name": "Passo Vetorial",
        "desc": "<strong>1 PA + 1 Momento</strong><br><br>Mova-se imediatamente até <strong>6 m</strong>.<br><br>Durante esse deslocamento:<br><br>• ignora terreno difícil;<br>• não provoca Ataque de Oportunidade;<br>• ainda precisa respeitar obstáculos e espaços ocupados.<br><br>Passo Vetorial é movimento voluntário."
      },
      {
        "name": "Conservação De Momentum",
        "desc": "<strong>Passiva</strong><br><br>Uma vez por rodada, quando uma criatura Em Movimento a até 9 m terminar seu turno após ter percorrido pelo menos <strong>6 m durante aquele turno</strong>, você conserva parte do impulso dela.<br><br>A próxima habilidade de Vetor utilizada até o final do seu próximo turno recebe <strong>um</strong> dos seguintes benefícios:<br><br>• <strong>+3 m de alcance</strong>, se possuir alcance;<br>• <strong>+1,5 m de deslocamento forçado</strong>, se causar deslocamento.<br><br>Você escolhe o benefício no momento em que utiliza a habilidade.<br><br>A Conservação de Momentum não acumula. Um novo gatilho apenas renova o benefício."
      },
      {
        "name": "Corte De Movimento",
        "desc": "<strong>Reação + 2 Momento</strong><br><br>Quando uma criatura Em Movimento visível a até <strong>9 m</strong> estiver realizando um deslocamento voluntário, declare esta habilidade antes que o deslocamento termine.<br><br>O movimento restante daquela ação é imediatamente reduzido para <strong>0 m</strong>.<br><br>O PA utilizado para realizar o movimento permanece gasto.<br><br>Corte de Movimento:<br><br>• não desfaz os metros já percorridos;<br>• não interrompe teleporte;<br>• não impede novos movimentos caso a criatura ainda tenha PA para realizá-los."
      },
      {
        "name": "Ruptura De Equilíbrio",
        "desc": "<strong>2 PA + 2 Momento</strong><br><br>Escolha uma criatura Em Movimento a até <strong>9 m</strong>.<br><br>Ela faz <strong>REF CD 15</strong>.<br><br>Em caso de falha, até o início do seu próximo turno:<br><br>• sofre <strong>-2 Defesa</strong>;<br>• não pode utilizar Reação.<br><br>Em caso de sucesso, não sofre efeito.<br><br>A habilidade representa a interrupção brusca do equilíbrio e da distribuição de peso da criatura."
      },
      {
        "name": "Vetor Residual",
        "desc": "<strong>Passiva</strong><br><br>Quando uma criatura falhar em um teste de REF contra uma habilidade de Vetor sua, ela permanece <strong>Vetorialmente Instável</strong> até o início do seu próximo turno.<br><br>Na primeira vez que essa criatura realizar movimento voluntário enquanto estiver Vetorialmente Instável, escolha:<br><br>• reduzir aquele deslocamento em <strong>1,5 m</strong>; ou<br>• mover-se você mesmo <strong>1,5 m</strong> sem PA.<br><br>Uma criatura só pode produzir esse efeito uma vez por aplicação.<br><br>Vetorialmente Instável não é uma Condição e não acumula consigo mesma."
      },
      {
        "name": "Campo Vetorial",
        "desc": "<strong>3 PA + 2 Momento</strong><br><br>Escolha um ponto visível a até <strong>9 m</strong>.<br><br>Crie uma área de <strong>4 m de raio</strong> até o início do seu próximo turno.<br><br>Na primeira vez que cada criatura hostil:<br><br>• entrar voluntariamente na área; ou<br>• iniciar seu turno dentro dela,<br><br>ela faz <strong>REF CD 15</strong>.<br><br>Em caso de falha, escolha:<br><br><strong>Interceptar:</strong> o movimento restante daquela ação torna-se 0 m.<br><br>ou<br><br><strong>Desviar:</strong> mova a criatura 3 m em direção ao centro ou para longe dele.<br><br>Cada criatura pode ser afetada apenas <strong>uma vez por ativação</strong> do Campo Vetorial.<br><br>Criaturas voluntárias escolhidas por você podem atravessar a área normalmente."
      },
      {
        "name": "Domínio Vetorial",
        "desc": "Escolha permanentemente uma Trilha:<br><br><strong>Inércia • Desvio • Colisão</strong><br><br>Receba imediatamente a habilidade 1 da Trilha escolhida."
      }
    ],
    "trails": [
      {
        "name": "Inércia",
        "identity": "Velocidade, aceleração e controle de movimento.",
        "abilities": [
          {
            "name": "Controle De Aceleração",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Sempre que uma criatura hostil falhar em um teste de REF contra uma habilidade sua que cause deslocamento, escolha um dos efeitos:<br><br><strong>Acelerar:</strong> aumente o deslocamento forçado em <strong>3 m</strong>.<br><br><strong>Desacelerar:</strong> o próximo movimento voluntário da criatura antes do início do seu próximo turno é reduzido em <strong>3 m</strong>.<br><br>Escolha apenas um."
          },
          {
            "name": "Aceleração Forçada",
            "type": "Ativa",
            "cost": "1 PA + 1 Momento",
            "desc": "<strong>1 PA + 1 Momento</strong><br><br>Escolha uma criatura Em Movimento a até <strong>9 m</strong>.<br><br>Ela faz REF CD 15.<br><br>Em caso de falha, é imediatamente deslocada <strong>3 m na mesma direção do último trecho do movimento que realizou</strong>.<br><br>Se não houver espaço válido, o deslocamento termina no último ponto possível.<br><br>A habilidade não causa dano por si própria."
          },
          {
            "name": "Zero Inercial",
            "type": "Ativa",
            "cost": "2 PA + 2 Momento",
            "desc": "<strong>2 PA + 2 Momento</strong><br><br>Escolha uma criatura a até <strong>9 m</strong>.<br><br>REF CD 15.<br><br><strong>Falha:</strong> fica <strong>Imobilizada</strong> até o início do seu próximo turno.<br><br><strong>Sucesso:</strong> fica <strong>Lentificada</strong> até o início do seu próximo turno."
          },
          {
            "name": "Conservação Perfeita",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Conservação de Momentum passa a ser ativada quando uma criatura Em Movimento percorrer pelo menos <strong>3 m</strong>, em vez de 6 m.<br><br>Quando consumir o benefício, sua próxima habilidade recebe simultaneamente:<br><br>• +3 m de alcance;<br>• +1,5 m de deslocamento forçado, caso produza deslocamento."
          },
          {
            "name": "Parada Inercial",
            "type": "Suprema",
            "cost": "3 PA + 3 Momento",
            "desc": "<strong>Suprema • 3 PA + 3 Momento</strong><br><br>Escolha um ponto visível a até <strong>9 m</strong>.<br><br>Crie uma zona de <strong>6 m de raio</strong> durante <strong>1 rodada</strong>.<br><br>Criaturas hostis dentro da zona:<br><br>• podem realizar no máximo <strong>3 m de movimento voluntário por turno</strong>;<br>• não podem sofrer mais de <strong>3 m de deslocamento forçado por um único efeito</strong>.<br><br>Teleporte não é afetado.<br><br>Ao sair da área, a criatura deixa imediatamente de sofrer essas restrições."
          }
        ]
      },
      {
        "name": "Desvio",
        "identity": "Trajetórias, projéteis e redirecionamento de ataques.",
        "abilities": [
          {
            "name": "Deflexão",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Uma vez por rodada, quando sofrer um ataque à distância direto, reduza o VA desse ataque em:<br><br><strong>-2.</strong><br><br>Declare o uso antes da rolagem.<br><br>Não afeta áreas, cones ou explosões."
          },
          {
            "name": "Curva Impossível",
            "type": "Ativa",
            "cost": "1 PA + 1 Momento",
            "desc": "<strong>1 PA + 1 Momento</strong><br><br>Escolha o próximo ataque à distância que você realizar antes do fim do turno.<br><br>Esse ataque ignora o <strong>bônus de Defesa</strong> concedido por:<br><br>• Cobertura Leve;<br>• Cobertura Pesada.<br><br>A RD e os PV da cobertura continuam funcionando normalmente.<br><br>Não permite atingir através de Cobertura Total."
          },
          {
            "name": "Troca De Trajetória",
            "type": "Reação",
            "cost": "Reação + 2 Momento",
            "desc": "<strong>Reação + 2 Momento</strong><br><br>Quando um ataque à distância direto for declarado contra você ou uma criatura visível a até <strong>9 m</strong>, use esta habilidade antes da rolagem de VA.<br><br>Escolha outra criatura válida localizada a até <strong>3 m do alvo original</strong>.<br><br>O ataque passa a ser resolvido contra o novo alvo.<br><br>O novo alvo precisa:<br><br>• estar dentro do alcance original do ataque;<br>• possuir linha de efeito válida;<br>• poder ser legalmente atingido pelo ataque.<br><br>Não funciona contra:<br><br>• áreas;<br>• cones;<br>• explosões;<br>• efeitos sem alvo direto."
          },
          {
            "name": "Reflexo Vetorial",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Uma vez por rodada, quando <strong>Troca de Trajetória</strong> fizer um ataque atingir uma criatura hostil a você, recupere:<br><br><strong>1 Momento.</strong><br><br>Além disso, seu próximo movimento antes do fim do próximo turno não provoca Ataque de Oportunidade."
          },
          {
            "name": "Retorno À Origem",
            "type": "Suprema",
            "cost": "Reação + 3 Momento",
            "desc": "<strong>Suprema • Reação + 3 Momento</strong><br><br>Quando um ataque à distância direto for declarado contra você ou um aliado visível a até <strong>9 m</strong>, antes da rolagem de VA, redirecione-o ao próprio atacante.<br><br>O atacante resolve normalmente seu teste de VA contra a própria Defesa.<br><br>Todos os dados, crítico, efeitos adicionais, munição e propriedades do ataque permanecem normais.<br><br>A habilidade não funciona contra:<br><br>• ataques de área;<br>• cones;<br>• linhas;<br>• explosões;<br>• ataques cujo próprio atacante não possa ser atingido pela trajetória redirecionada."
          }
        ]
      },
      {
        "name": "Colisão",
        "identity": "Impacto, obstáculos e colisões entre criaturas.",
        "abilities": [
          {
            "name": "Energia Cinética",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Uma vez por rodada, quando uma criatura Em Movimento sofrer pelo menos <strong>3 m de deslocamento forçado causado por você</strong>, ela sofre:<br><br><strong>1d8 de dano físico.</strong><br><br>Esse dano acontece depois do deslocamento."
          },
          {
            "name": "Quebra De Postura",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Quando uma criatura deslocada por você terminar seu movimento contra uma estrutura sólida, ela fica:<br><br><strong>Vulnerável até o início do seu próximo turno.</strong><br><br>A estrutura precisa impedir fisicamente a continuação do deslocamento."
          },
          {
            "name": "Aríete Vetorial",
            "type": "Ativa",
            "cost": "2 PA + 1 Momento",
            "desc": "<strong>2 PA + 1 Momento</strong><br><br>Mova-se até <strong>6 m em linha reta</strong> até uma criatura.<br><br>Esse movimento não provoca Ataque de Oportunidade.<br><br>Ao terminar, realize imediatamente um ataque corpo a corpo contra ela.<br><br>Em caso de acerto:<br><br>• causa o dano normal do ataque;<br>• causa <strong>+2d8 físico</strong>;<br>• empurra o alvo <strong>3 m</strong>."
          },
          {
            "name": "Ricochete",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Quando uma criatura sofrer deslocamento forçado causado por você e colidir com outra criatura:<br><br>A criatura deslocada encerra o movimento.<br><br>As duas sofrem:<br><br><strong>2d8 físico.</strong><br><br>A criatura atingida faz <strong>REF CD 15</strong>.<br><br>Falha: também é empurrada <strong>3 m</strong> na mesma direção do impacto.<br><br>Uma criatura só pode sofrer dano de Ricochete <strong>uma vez por rodada</strong>."
          },
          {
            "name": "Reação Em Cadeia",
            "type": "Suprema",
            "cost": "3 PA + 3 Momento",
            "desc": "<strong>Suprema • 3 PA + 3 Momento</strong><br><br>Escolha uma criatura a até <strong>6 m</strong>.<br><br>Ela faz REF CD 15.<br><br><strong>Falha</strong><br><br>A criatura é arremessada <strong>6 m</strong>.<br><br>Sempre que colidir durante esse movimento:<br><br><strong>Estrutura sólida:</strong> sofre <strong>2d10 físico</strong> e o movimento termina.<br><br><strong>Outra criatura:</strong> ambas sofrem <strong>2d10 físico</strong>. A criatura atingida faz REF CD 15.<br><br>Se a segunda criatura falhar, ela é lançada <strong>3 m na mesma direção</strong>, podendo atingir uma terceira criatura.<br><br>A corrente pode afetar no máximo:<br><br><strong>3 criaturas.</strong><br><br>Uma criatura não pode ser atingida duas vezes pela mesma Reação em Cadeia.<br><br><strong>Sucesso</strong><br><br>A criatura é deslocada apenas <strong>3 m</strong> e não inicia a corrente de colisões."
          }
        ]
      }
    ],
    "origins": [
      {
        "origin": "Soldado",
        "name": "Disciplina De Avanço",
        "desc": "Uma vez por rodada, depois de se mover voluntariamente pelo menos <strong>3 m</strong>, receba:<br><br><strong>+1 Defesa</strong><br><br>contra o primeiro ataque feito contra você antes do início do seu próximo turno."
      },
      {
        "origin": "Artesão",
        "name": "Contrapeso Personalizado",
        "desc": "Durante um Descanso Curto, escolha uma peça de equipamento vestida por você.<br><br>Enquanto estiver usando essa peça, uma vez por rodada, quando uma habilidade de Vetor mover <strong>você mesmo</strong>, aumente esse movimento em:<br><br><strong>+1,5 m.</strong><br><br>Somente uma peça pode possuir Contrapeso Personalizado por vez."
      },
      {
        "origin": "Médico",
        "name": "Leitura Biomecânica",
        "desc": "Uma vez por rodada, quando uma criatura Em Movimento que esteja sofrendo uma <strong>Condição física</strong> realizar REF contra uma habilidade de Vetor sua, ela sofre:<br><br><strong>-1 no teste de REF.</strong><br><br>Para esta habilidade, contam condições que interfiram fisicamente no corpo, como Caído, Lentificado, Imobilizado ou Sangramento Crítico."
      },
      {
        "origin": "Investigador",
        "name": "Previsão De Trajetória",
        "desc": "Após observar uma criatura durante pelo menos <strong>1 turno completo</strong>, você passa a reconhecer seu padrão de movimento.<br><br>Uma vez por rodada, o primeiro teste de REF dessa criatura contra uma habilidade de Vetor sua sofre:<br><br><strong>-2 REF.</strong><br><br>Você só pode manter uma criatura analisada dessa forma por vez.<br><br>Observar uma nova criatura substitui a anterior."
      },
      {
        "origin": "Criminoso",
        "name": "Rota De Fuga",
        "desc": "Uma vez por rodada, depois que você:<br><br>• causar deslocamento forçado em uma criatura hostil; ou<br>• interromper o movimento dela,<br><br>você pode se mover <strong>1,5 m</strong> sem gastar PA e sem provocar Ataque de Oportunidade."
      },
      {
        "origin": "Pesquisador Arcano",
        "name": "Geometria Etérea",
        "desc": "Uma vez por rodada, quando uma criatura afetada por uma magia ou efeito arcano ativo falhar em um teste de REF contra uma habilidade de Vetor sua, aumente o deslocamento forçado produzido pela habilidade em:<br><br><strong>+1,5 m.</strong><br><br>Se a habilidade não produzir deslocamento, esta manifestação não gera efeito adicional."
      },
      {
        "origin": "Sobrevivente",
        "name": "Instinto De Evasão",
        "desc": "Enquanto estiver com metade ou menos dos PV máximos, uma vez por rodada, quando uma criatura hostil entrar voluntariamente a até <strong>3 m</strong> de você, pode gastar sua:<br><br><strong>Reação</strong><br><br>para mover-se <strong>3 m</strong> sem provocar Ataque de Oportunidade."
      },
      {
        "origin": "Mercenário",
        "name": "Alvo De Interceptação",
        "desc": "No início do combate, escolha uma criatura percebida como seu <strong>Alvo Contratado</strong>.<br><br>Uma vez por rodada, o primeiro deslocamento forçado que você causar nesse alvo aumenta em:<br><br><strong>+1,5 m.</strong><br><br>Você mantém o mesmo alvo até o fim do combate."
      },
      {
        "origin": "Atleta",
        "name": "Arranque Cinético",
        "desc": "Depois de se mover voluntariamente pelo menos <strong>6 m no seu turno</strong>, a próxima habilidade de Vetor utilizada até o fim daquele turno recebe:<br><br><strong>+3 m de alcance.</strong><br><br>Ativa no máximo uma vez por rodada."
      },
      {
        "origin": "Operador",
        "name": "Mapeamento Vetorial",
        "desc": "Quando estiver utilizando um sensor, visor, sistema de aquisição de alvo ou equipamento equivalente para perceber uma criatura, a primeira habilidade de Vetor usada contra ela em cada rodada recebe:<br><br><strong>+3 m de alcance.</strong><br><br>O equipamento precisa ser capaz de detectar a criatura normalmente."
      }
    ]
  },
  {
    "id": "mediador-arcano",
    "name": "Mediador Arcano",
    "card": [
      "mediador-arcano",
      "Mediador Arcano",
      "Suporte · Regulação Arcana",
      "Estabiliza aliados, redistribui Exaustão e amplia conjurações com Harmonia.",
      "CONH, CON",
      26,
      3,
      "Harmonia"
    ],
    "intro": [
      [
        "Mediador Arcano",
        "<strong>Função:</strong> Suporte / Regulação Arcana  <br><strong>Atributos-chave:</strong> CONH, CON  <br><strong>PV Inicial:</strong> 26 + CON × 6  <br><strong>PV por Nível:</strong> 3 + CON  <br><strong>Perícia Obrigatória:</strong> Sintonia Arcana  <br><strong>Escolha 3:</strong> Simbologia &amp; Runas; História Arcana; Tecnologia &amp; Sistemas; Medicina de Combate; Investigação.<br><br>O Mediador Arcano não domina o Arcano da mesma maneira que um Canalizador. Seu talento está em perceber, estabilizar e interligar o fluxo arcano de outras pessoas.<br><br>Enquanto um Canalizador aperfeiçoa a própria conjuração, o Mediador mantém o restante do grupo funcionando: redistribui Exaustão, reduz riscos, sustenta conjuradores e cria vínculos que permitem ao grupo compartilhar recursos."
      ],
      [
        "Habilidades Arcanas De Classe",
        "As habilidades do Mediador são <strong>Habilidades Arcanas de Classe</strong>, mas não são conjurações.<br><br>Portanto, salvo indicação específica:<br><br>• não utilizam o minigame de conjuração;<br>• não possuem Círculo;<br>• não geram Exaustão;<br>• não geram Colapso;<br>• não ativam efeitos que exijam concluir uma conjuração.<br><br>Escolher Mediador Arcano não concede automaticamente acesso a magias convencionais."
      ],
      [
        "Recurso De Classe — Harmonia",
        "<strong>Máximo: 3 + CONH</strong><br><br>Harmonia representa a capacidade do Mediador de entrar em sintonia com as alterações físicas e arcanas das pessoas ao seu redor.<br><br>Uma vez por rodada, recupere <strong>1 Harmonia</strong> quando um aliado a até 9 m:<br><br>• perder PV por uma fonte hostil; ou<br>• pagar Exaustão como custo de uma magia ou habilidade.<br><br>As duas fontes compartilham o mesmo limite de:<br><br><strong>1 Harmonia recuperada por rodada.</strong><br><br><strong>Descanso Curto:</strong> recupera toda a Harmonia."
      ],
      [
        "Regras Do Mediador",
        "<strong>Recuperação de Exaustão</strong><br><br>Uma mesma criatura pode recuperar no máximo:<br><br><strong>20 Exaustão por rodada</strong><br><br>através de habilidades do Mediador Arcano.<br><br><strong>Redução de Colapso</strong><br><br>Duas habilidades do Mediador que reduzam o mesmo ganho de Colapso <strong>não se acumulam</strong>.<br><br>Use apenas a maior redução.<br><br>Nenhuma habilidade do Mediador altera diretamente a margem de Detonação Arcana.<br><br><strong>PA adicional</strong><br><br>Uma mesma criatura pode receber no máximo:<br><br><strong>+1 PA por rodada</strong><br><br>através de habilidades do Mediador.<br><br><strong>Bônus de tempo</strong><br><br>Bônus em segundos concedidos pelo Mediador ao tempo inicial do minigame <strong>não se acumulam entre si</strong>.<br><br>Use o maior."
      ]
    ],
    "powers": [
      {
        "name": "Mediar Fluxo",
        "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha um aliado visível a até <strong>9 m</strong> e um efeito:<br><br><strong>Recuperação</strong><br>O alvo recupera:<br><br><strong>10 Exaustão.</strong><br><br><strong>Estabilização</strong><br>O alvo recebe:<br><br><strong>+2 Fortitude</strong><br><br>até o início do seu próximo turno.<br><br><strong>Preparação</strong><br>A próxima conjuração iniciada pelo alvo até o fim do próximo turno dele recebe:<br><br><strong>+1 segundo ao tempo inicial do minigame.</strong>"
      },
      {
        "name": "Âncora Arcana",
        "desc": "<strong>Reação + 1 Harmonia</strong><br><br>Quando um aliado visível a até <strong>9 m</strong> receber Colapso, reduza o ganho em:<br><br><strong>1, mínimo 1.</strong><br><br>Se o personagem receberia apenas 1 Colapso, ele continua recebendo 1.<br><br>Âncora Arcana não pode impedir uma Detonação causada por um personagem que já esteja em 9 Colapso e receba +1."
      },
      {
        "name": "Partilha De Exaustão",
        "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha você e um aliado a até <strong>9 m</strong>.<br><br>Defina uma criatura como <strong>Doadora</strong> e a outra como <strong>Receptora</strong>.<br><br>Transfira até:<br><br><strong>15 Exaustão.</strong><br><br>A Doadora perde o valor transferido.<br><br>A Receptora recupera exatamente o mesmo valor.<br><br>A Doadora não pode ser reduzida abaixo de <strong>0 Exaustão</strong> através desta habilidade.<br><br>A Receptora nunca ultrapassa sua Exaustão Máxima."
      },
      {
        "name": "Campo Harmônico",
        "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Você cria ao redor de si uma zona de estabilidade até o início do seu próximo turno.<br><br>Você e todos os aliados a até:<br><br><strong>3 m</strong><br><br>recebem:<br><br><strong>+2 Defesa.</strong><br><br>O Campo Harmônico acompanha o Mediador enquanto ele se move.<br><br>Uma criatura recebe o bônus somente enquanto estiver dentro da área.<br><br>Dois Campos Harmônicos não acumulam entre si."
      },
      {
        "name": "Intercessão Arcana",
        "desc": "<strong>2 PA + 2 Harmonia</strong><br><br>Escolha um aliado a até <strong>9 m</strong> antes de ele iniciar uma conjuração.<br><br>Durante essa conjuração:<br><br><strong>o primeiro erro do minigame é ignorado.</strong><br><br>Se outro efeito também permitir ignorar um erro, ele poderá ser utilizado em um erro diferente.<br><br>Duas habilidades nunca anulam o mesmo erro."
      },
      {
        "name": "Purga Ressonante",
        "desc": "<strong>2 PA + 2 Harmonia</strong><br><br>Escolha um aliado a até <strong>9 m</strong>.<br><br>Ele:<br><br><strong>recupera 20 Exaustão</strong><br><br>e pode remover <strong>uma Condição temporária causada diretamente por uma magia ou efeito Arcano</strong>.<br><br>Purga Ressonante não remove:<br><br>• Sequelas;<br>• Sobrecarga;<br>• Colapso."
      },
      {
        "name": "Extensão De Harmonia",
        "desc": "<strong>Passiva</strong><br><br>Habilidades de Mediador com alcance de pelo menos 3 m recebem:<br><br><strong>+3 m de alcance.</strong><br><br>Exemplos:<br><br>6 m → 9 m  <br>9 m → 12 m<br><br>Não aumenta:<br><br>• raios;<br>• áreas;<br>• cones;<br>• linhas.<br><br>Portanto, não aumenta o raio do Campo Harmônico."
      },
      {
        "name": "Rede De Equilíbrio",
        "desc": "<strong>2 PA + 2 Harmonia</strong><br><br>Escolha até <strong>3 aliados</strong> dentro do alcance.<br><br>Cada alvo escolhe individualmente:<br><br><strong>Recuperação</strong><br>Recupera <strong>10 Exaustão</strong>.<br><br><strong>Estabilização</strong><br>Recebe <strong>+2 Fortitude</strong> até o início do seu próximo turno.<br><br><strong>Preparação</strong><br>Recebe <strong>+1 segundo</strong> no tempo inicial da próxima conjuração iniciada até o fim do seu próximo turno."
      },
      {
        "name": "Margem De Segurança",
        "desc": "<strong>Reação + 2 Harmonia</strong><br><br>Quando um aliado a até <strong>9 m que já esteja em Sobrecarga</strong> iniciar uma conjuração, declare esta habilidade antes da resolução.<br><br>Se aquela conjuração gerar Colapso, o ganho máximo será:<br><br><strong>1 Colapso.</strong><br><br>Margem de Segurança não cria Colapso caso a conjuração normalmente não o gerasse.<br><br>Também não altera a margem de Detonação.<br><br>Um personagem com 9 Colapso que receba +1 ainda alcança 10 normalmente."
      },
      {
        "name": "Convergência Arcana",
        "desc": "Escolha permanentemente uma Trilha:<br><br><strong>Estabilizador • Condutor • Ressonante</strong><br><br>Receba imediatamente a habilidade 1 da Trilha."
      }
    ],
    "trails": [
      {
        "name": "Estabilizador",
        "identity": "Controle de falhas e consequências arcanas.",
        "abilities": [
          {
            "name": "Estabilidade Residual",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Quando um aliado recuperar Exaustão através de uma habilidade sua, o próximo custo de Exaustão que ele pagar antes do início do seu próximo turno é reduzido em:<br><br><strong>5, mínimo 0.</strong><br><br>Uma criatura recebe esse benefício no máximo uma vez por rodada."
          },
          {
            "name": "Recalibração De Falha",
            "type": "Reação",
            "cost": "Reação + 1 Harmonia",
            "desc": "<strong>Reação + 1 Harmonia</strong><br><br>Quando um aliado dentro do alcance rolar o <strong>1d3 de Conjuração Forçada</strong>, obrigue-o a rolar novamente.<br><br>O segundo resultado substitui obrigatoriamente o primeiro."
          },
          {
            "name": "Supressão De Sequela",
            "type": "Ativa",
            "cost": "2 PA + 2 Harmonia",
            "desc": "<strong>2 PA + 2 Harmonia</strong><br><br>Escolha um aliado dentro do alcance e uma Sequela que ele possua.<br><br>Até o início do seu próximo turno:<br><br><strong>todos os efeitos mecânicos daquela Sequela ficam suprimidos.</strong><br><br>A Sequela continua existindo.<br><br>Esta habilidade:<br><br>• não reduz Colapso;<br>• não remove a Sequela;<br>• não impede que ela retorne quando a duração terminar."
          },
          {
            "name": "Dissipação De Repique",
            "type": "Reação",
            "cost": "Reação + 2 Harmonia",
            "desc": "<strong>Reação + 2 Harmonia</strong><br><br>Quando um aliado dentro do alcance sofrer dano causado por <strong>Repique Arcano</strong>, reduza o dano pela metade.<br><br>Arredonde para baixo."
          },
          {
            "name": "Campo De Estabilidade",
            "type": "Suprema",
            "cost": "3 PA + 3 Harmonia",
            "desc": "<strong>Suprema • 3 PA + 3 Harmonia</strong><br><br>Escolha um ponto dentro do alcance.<br><br>Crie uma área de:<br><br><strong>6 m de raio</strong><br><br>durante:<br><br><strong>2 rodadas.</strong><br><br>Aliados dentro da área recebem os seguintes benefícios:<br><br><strong>Controle de Exaustão</strong><br>Uma vez por rodada por criatura, o primeiro custo de Exaustão de uma conjuração é reduzido em:<br><br><strong>10, mínimo 0.</strong><br><br>Essa redução acontece antes do cálculo de Colapso.<br><br><strong>Resistência</strong><br>Recebem:<br><br><strong>+2 Tolerância Arcana.</strong><br><br><strong>Controle de Colapso</strong><br>Se uma única conjuração gerar Colapso, o ganho daquela conjuração não pode ultrapassar:<br><br><strong>2 Colapso.</strong><br><br>Se o personagem alcançar 10 Colapso mesmo assim, ocorre Detonação normalmente."
          }
        ]
      },
      {
        "name": "Condutor",
        "identity": "Partilha de Exaustão, PA e recursos de Classe.",
        "abilities": [
          {
            "name": "Ponte De Ação",
            "type": "Ativa",
            "cost": "1 PA + 1 Harmonia",
            "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha um aliado dentro do alcance.<br><br>Ele recebe:<br><br><strong>+1 PA no próximo turno.</strong><br><br>Aplica-se normalmente o limite de +1 PA por rodada proveniente do Mediador."
          },
          {
            "name": "Circuito Compartilhado",
            "type": "Ativa",
            "cost": "1 PA + 1 Harmonia",
            "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha um aliado dentro do alcance.<br><br>Até o início do seu próximo turno, na próxima vez que esse aliado pagar Exaustão, você pode assumir até:<br><br><strong>10 pontos daquele custo.</strong><br><br>Você perde a quantidade assumida.<br><br>O aliado deixa de pagar aquela parcela.<br><br>Sua Exaustão não pode ser reduzida abaixo de 0 dessa forma."
          },
          {
            "name": "Transferência Triangular",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Partilha de Exaustão não precisa mais incluir o Mediador.<br><br>Você pode escolher diretamente:<br><br><strong>dois aliados dentro do alcance.</strong><br><br>Um torna-se Doador e o outro Receptor.<br><br>Todas as demais regras de Partilha de Exaustão continuam normais."
          },
          {
            "name": "Reativação Harmônica",
            "type": "Ativa",
            "cost": "2 PA + 2 Harmonia",
            "desc": "<strong>2 PA + 2 Harmonia</strong><br><br>Escolha um aliado dentro do alcance.<br><br>Ele recupera:<br><br><strong>1 ponto do recurso exclusivo de sua Classe.</strong><br><br>Só funciona com recursos normalmente recuperáveis por Descanso Curto.<br><br>Exemplos incluem Precisão, Sintonia, Inflexibilidade, Momento e outros recursos equivalentes.<br><br>Não pode recuperar Harmonia.<br><br>Cada criatura pode receber Reativação Harmônica apenas:<br><br><strong>1 vez por Descanso Curto.</strong>"
          },
          {
            "name": "Rede Condutora",
            "type": "Suprema",
            "cost": "3 PA + 3 Harmonia",
            "desc": "<strong>Suprema • 3 PA + 3 Harmonia</strong><br><br>Escolha até:<br><br><strong>3 aliados</strong><br><br>dentro do alcance.<br><br>Cada um recebe:<br><br><strong>+1 PA no próximo turno.</strong><br><br>Além disso, até o início do seu próximo turno, quando uma criatura conectada pagar Exaustão, ela pode dividir parte daquele custo entre as demais criaturas da Rede.<br><br>Uma criatura que receber parte do custo de outra não pode ser reduzida abaixo de 0 Exaustão por essa transferência.<br><br>O conjurador original paga normalmente qualquer parcela restante e pode entrar em valores negativos conforme as regras normais de Exaustão."
          }
        ]
      },
      {
        "name": "Ressonante",
        "identity": "Amplificação das conjurações dos aliados.",
        "abilities": [
          {
            "name": "Apoio De Conjuração",
            "type": "Ativa",
            "cost": "1 PA + 1 Harmonia",
            "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha um aliado dentro do alcance.<br><br>A próxima conjuração iniciada por ele até o fim do seu próximo turno recebe:<br><br><strong>+1 segundo no tempo inicial</strong><br><br>e:<br><br><strong>+1d6 em uma única rolagem de dano ou cura.</strong><br><br>Se uma mesma rolagem for aplicada a vários alvos, o +1d6 é adicionado apenas uma vez àquela rolagem."
          },
          {
            "name": "Eco Benigno",
            "type": "Reação",
            "cost": "Reação + 1 Harmonia",
            "desc": "<strong>Reação + 1 Harmonia</strong><br><br>Quando um aliado dentro do alcance concluir uma conjuração com sucesso:<br><br>ele recupera imediatamente:<br><br><strong>5 Exaustão.</strong>"
          },
          {
            "name": "Ressonância De Alcance",
            "type": "Ativa",
            "cost": "1 PA + 1 Harmonia",
            "desc": "<strong>1 PA + 1 Harmonia</strong><br><br>Escolha um aliado dentro do alcance.<br><br>A próxima conjuração dele iniciada até o fim do próximo turno recebe:<br><br><strong>+3 m de alcance</strong><br><br>para determinar o alvo ou ponto de origem.<br><br>Não aumenta:<br><br>• raio;<br>• cone;<br>• linha;<br>• tamanho da área."
          },
          {
            "name": "Eco Harmônico",
            "type": "Passiva",
            "cost": "",
            "desc": "<strong>Passiva</strong><br><br>Uma vez por rodada, quando um aliado beneficiado por uma habilidade sua concluir uma conjuração com sucesso, escolha outro aliado a até:<br><br><strong>3 m do conjurador.</strong><br><br>O segundo aliado recebe:<br><br><strong>+2 Defesa</strong><br><br>até o início do seu próximo turno."
          },
          {
            "name": "Grande Ressonância",
            "type": "Suprema",
            "cost": "3 PA + 3 Harmonia",
            "desc": "<strong>Suprema • 3 PA + 3 Harmonia</strong><br><br>Escolha até:<br><br><strong>3 aliados</strong><br><br>dentro do alcance.<br><br>A próxima conjuração de cada alvo iniciada até o fim do próximo turno dele recebe:<br><br>• <strong>+2 segundos</strong> ao tempo inicial;<br>• <strong>+1d8</strong> em uma única rolagem de dano ou cura;<br>• após a resolução, o conjurador recupera <strong>10 Exaustão</strong>.<br><br>Os bônus em segundos não acumulam com outros bônus do Mediador.<br><br>A recuperação de Exaustão continua respeitando o máximo de 20 por rodada através de habilidades do Mediador."
          }
        ]
      }
    ],
    "origins": [
      {
        "origin": "Soldado",
        "name": "Coordenação De Combate",
        "desc": "Uma vez por rodada, quando você utilizar uma habilidade de Mediador em um aliado, ele recebe:<br><br><strong>+1 VA no próximo ataque</strong><br><br>realizado antes do fim do próximo turno dele.<br><br>O bônus é consumido após o ataque."
      },
      {
        "origin": "Artesão",
        "name": "Calibração De Foco",
        "desc": "Durante um Descanso Curto, escolha um equipamento arcano utilizado por você ou por um aliado.<br><br>Uma vez antes do próximo Descanso Curto, quando uma habilidade sua fizer o portador desse equipamento recuperar Exaustão, ele recupera:<br><br><strong>+5 Exaustão adicionais.</strong><br><br>Apenas um equipamento pode permanecer calibrado por vez."
      },
      {
        "origin": "Médico",
        "name": "Estabilização Bio-Arcana",
        "desc": "Uma vez por rodada, quando uma habilidade sua fizer um aliado recuperar Exaustão, ele também recupera:<br><br><strong>1d6 PV.</strong>"
      },
      {
        "origin": "Investigador",
        "name": "Leitura De Fluxo",
        "desc": "Recebe:<br><br><strong>+2 em testes</strong><br><br>para identificar em uma criatura:<br><br>• Exaustão;<br>• Sobrecarga;<br>• Colapso;<br>• conjurações ativas;<br>• proteções arcanas;<br>• alterações arcanas."
      },
      {
        "origin": "Criminoso",
        "name": "Canal Invisível",
        "desc": "Uma vez por rodada, utilizar uma habilidade de Mediador que não cause dano <strong>não encerra automaticamente sua Furtividade</strong>.<br><br>Outras ações realizadas durante o turno continuam seguindo normalmente as regras de Furtividade."
      },
      {
        "origin": "Pesquisador Arcano",
        "name": "Ressonância Teórica",
        "desc": "Uma vez por rodada, quando utilizar uma habilidade de Mediador em uma criatura que esteja sob um efeito Arcano ativo, reduza o custo de Harmonia da habilidade em:<br><br><strong>1, mínimo 1.</strong>"
      },
      {
        "origin": "Sobrevivente",
        "name": "Reserva De Emergência",
        "desc": "Enquanto estiver com metade ou menos dos seus PV máximos, a primeira habilidade de Mediador utilizada em cada rodada custa:<br><br><strong>-1 Harmonia, mínimo 1.</strong>"
      },
      {
        "origin": "Mercenário",
        "name": "Contrato De Suporte",
        "desc": "No início do combate, escolha um aliado percebido.<br><br>Enquanto utilizar uma habilidade de Mediador que tenha somente esse aliado como alvo, aumente o alcance da habilidade em:<br><br><strong>+3 m.</strong><br><br>O mesmo aliado permanece escolhido até o fim do combate."
      },
      {
        "origin": "Atleta",
        "name": "Respiração Sincronizada",
        "desc": "Depois de se mover voluntariamente pelo menos:<br><br><strong>3 m</strong><br><br>no seu turno, a próxima habilidade de Mediador utilizada até o fim daquele turno recebe:<br><br><strong>+3 m de alcance.</strong><br><br>Ativa no máximo uma vez por rodada."
      },
      {
        "origin": "Operador",
        "name": "Coordenação De Sincronia",
        "desc": "Uma vez por rodada, depois que uma habilidade sua beneficiar um aliado, ele pode imediatamente realizar:<br><br><strong>3 m de movimento voluntário sem gastar PA.</strong><br><br>Esse movimento:<br><br>• respeita terreno normalmente;<br>• pode provocar Ataque de Oportunidade;<br>• não consome o movimento normal do próximo turno do aliado."
      }
    ]
  }
];
