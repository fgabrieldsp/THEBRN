# JUNÇÃO DE TODOS OS ARQUIVOS DE BACKUP DA PASTA THEBRAIN

  

---

  


Template Base - Referência Modelo

  

Estrutura Geral

- Template sem interface visível

- Núcleo técnico e estrutural

  

Arquivos

- metadados.xml

- metadados.md

- mapa_codigo.md

- controle_versao.md

- comece_aqui.md

- engine.js

- index.html

  

ESTRUTURAS

Ferro

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Altura dos pilares: 2,10 m

- Dimensão da vaga: 2,50 × 5,00 m

Perfis Tubulares Disponíveis:

- Tubo 100×100×3 mm: 9,17 kg/m — perímetro 0,40 m

- Tubo 100×100×2 mm: 6,17 kg/m — perímetro 0,40 m

- Tubo 100×100×1,5 mm: 4,59 kg/m — perímetro 0,40 m

- Tubo 80×40×2 mm: 4,11 kg/m — perímetro 0,24 m

- Tubo 60×40×2 mm: 3,15 kg/m — perímetro 0,20 m

- Tubo 50×30×2 mm: 2,50 kg/m — perímetro 0,16 m

Outros materiais:

- Perfil U 50×30×1.5 mm: 2,72 kg/m — R$40/kg

- Perfil U 50×30×1.2 mm: 2,24 kg/m — R$38/kg

- Cantoneira 1": 1,45 kg/m

- Chapa de base: 4 mm (10×10 cm), R$30

Tratamento:

- Galvanização (opcional): R$7,50/kg

- Pintura (primer + PU): Primer: R$10/m², PU: R$20/m², Ou valor consolidado: R$2,20/kg

Perda estimada: 5% sobre total linear

  

Eucalipto

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Bitolas: 12 cm, 14 cm, 16 cm, 18 cm

- Peso linear: 12–22 kg/m

- Custo por tora: R$40

- Tratamentos: Antifungo: R$3,00/m, Usinagem: R$4,00/m, Lixamento: R$2,00/m, Osmocolor: R$5,00/m

  

ACESSÓRIOS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Componentes Gerais

- Ilhós: R$ 0,63 por unidade (galvanizado padrão; inox sob demanda)

- Mão francesa: 2 por pilar (padrão), até 4 em F/F, até 3 em L/L; +4 parafusos por unidade (2 por vértice)

- Parafusos e arruelas: 1 por ilhós + 4 por mão francesa; Valor unitário padrão inox: R$ 1,00 cada

- Kit de fixação: todo inox, exceto ilhós — estimado R$ 1,00/unidade por componente

- Viga Calha: R$ 0,80 por unidade estimada (ferro galvanizado ou inox sob demanda)

- Arcos Metálicos: R$ 0,80 por unidade estimada (valor médio ajustável por projeto) 1 a cada 250 mm (galvanizado, inox opcional)

- Viga Calha: perfil metálico que conecta arcos e serve para fixação da tela impermeável

- Arcos Metálicos: utilizados como estrutura curva para sustentar telas impermeáveis

Componentes Específicos para Cúpulas

- Cabos de aço: utilizados para tracionamento das cobertas tipo cúpula. Diâmetro padrão: 4 mm. Preço estimado: R$ 2,00/m linear.

- Grimpple G: dispositivo metálico importado que conecta e tensiona as pontas dos cabos de aço. Compatível com cabos de 3 mm a 4 mm. Preço estimado: R$ 4,50/unidade.

- Arcos da cúpula: semelhantes aos arcos metálicos padrão, mas adaptados para estruturas curvas completas. Valor médio estimado: R$ 1,20/unidade (ajustável).

- Tartaruga: peça central da cúpula, com 4 encaixes que conectam os tubos/arcos da cobertura. Aplicável em ferro, madeira ou paredes. Valor estimado: R$ 12,00/unidade.

  

COBERTAS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Tela de Polietileno (padrão)

- Gramatura: 200 g/m²

- Custo: R$20/m²

- Fator de costura: 1,10

Tela Impermeável (nova)

- Não pode ser esticada em linha reta (sem tração linear)

- Necessita de arcos metálicos como suporte

- Fixação feita em vigas calha — perfis que conectam dois arcos consecutivos

- Em projetos com múltiplos arcos, utiliza-se uma viga calha adicional nas extremidades

- Aplicação ideal para coberturas permanentes ou expostas à chuva

- Custo e gramatura ainda não definidos (ajustável por projeto)

  

Parâmetros Padrão - Logística

- Logística base: R$2,00/kg

- Pode ser ajustada por distância, número de viagens, tipo de veículo, hospedagem, burocracia e complexidade logística

  

Parâmetros Financeiros

- BDI: 40%

- Imposto: 15%

- Simples: R$2,00/kg

- Avançado: distância, visitas, viagens, veículos, hospedagem, burocracia

  

Lógicas de Cálculo

Todas as fórmulas abaixo foram revisadas e estão preparadas para aplicação direta, simulação modular e leitura futura por inteligência artificial. Cada lógica respeita as dinâmicas reais de montagem, especialmente para projetos com vagas ímpares, blocos mistos ou áreas de geometria irregular.

Para cada cenário (estrutura nova, serviço, cobertura ou análise de área), o sistema se adapta ao input do usuário para gerar modulação ideal e cálculo preciso. A lógica está otimizada para crescer junto com a experiência real de obra.

Visão Geral

Todas as fórmulas e operações seguem critérios modulares. Os valores são multiplicados por quantidade, escalados conforme o tipo de estrutura, cobertura e cenário do projeto (reforma, expansão, nova montagem). Para lidar com irregularidades (vagas ímpares, espaços não harmônicos, blocos mistos), o sistema aplica lógicas de compensação nos módulos e gera alertas ao usuário.

Estrutura

- Peso total de perfis = comprimento (m) × peso específico (kg/m)

- Custo da estrutura = peso total × custo/kg

- Pintura = área superficial estimada × (custo primer + PU)

- Perda técnica = aplica-se fator padrão de 5% sobre o peso linear

- Acessórios = soma por ilhós, mãos francesas e parafusos (com valores fixos)

- Logística = peso total × R$/kg logístico

Cobertura

- Tela polietileno = área × custo_m² × fator de costura (padrão 1,10)

- Tela impermeável: Arcos metálicos = área / espaçamento médio (parâmetro ajustável); Vigas calha = 1 entre cada dois arcos + 2 nas extremidades; Ilhós = perímetro da tela dividido por 0,25 m (250 mm padrão); Parafusos inox = 1 por ilhós; Custo = soma de todos os itens acima com seus preços médios

Serviço e Manutenção

- Módulo ou m² = base de custo × quantidade × complexidade

- Equipe técnica = dias × pessoas × (diária + alimentação + hospedagem)

- Transporte = distância × custo/km + pedágio

- Extras e peças novas = conforme carrinho de peças por módulo

Cálculo Final (Orçamento Executivo)

- Subtotal = estrutura + cobertura + serviço + logística + acessórios + extras

- Margens e Encargos: Imposto (15%), BDI (40%), Lucro mínimo (parametrizável)

- Total Final = subtotal + margens aplicadas

O sistema futuro poderá recalcular tudo em tempo real conforme o tipo de entrada (área, vagas, serviço parcial) e sugerir alternativas otimizadas automaticamente.

  

Modulação

A modulação é o "coração" de todo o sistema. Ela define a lógica de composição estrutural, quantidade de braços, pilares e cobertas por módulo, e impacta diretamente o peso, custo, esforço de montagem, material, acessório e tempo de execução.

Ferro

O modelo Santo Dumont Reto é considerado o nosso produto mais avançado:

- Apresenta acabamento superior, com telas bem tensionadas

- Utiliza perfis robustos, altamente resistentes à corrosão

- Excelente estética e durabilidade

- Pilar simples: até 4 vagas (em regime de exceção)

- Pilar duplo: até 6 vagas (padrão), podendo chegar até 8 vagas em projetos especiais

- Pilar simples: 1 braço

- Pilar duplo: 2 braços

- Módulo 2 pilares simples: até 3 vagas

- Módulo 2 pilares duplos: até 6 vagas

Eucalipto 4P

- 4 pilares por módulo

- L/L: lado a lado

- F/F: frente a frente

Eucalipto T

- Pilar central robusto (bitola 14/16)

- 1 braço em balanço por pilar (normalmente 2 braços por módulo)

- Cada braço com 5 m de comprimento

- 2 mãos francesas robustas e reforçadas por braço, fabricadas sob medida

- Longarinas também em bitola 14/16

- Separadores em bitola 6/8 ou 8/10

- Estrutura em desenvolvimento para aplicação estética e funcional em grandes áreas

Cúpula (Eucalipto ou Ferro)

- Estrutura montada sem longarinas — os arcos são conectados diretamente aos braços, e estes aos pilares.

- Cada pilar funciona como base para sustentação dos braços e arcos, similar ao modelo Santo Dumont reto (sem separadores nem longarinas).

- Ideal para áreas centrais ou isoladas, com cobertura em formato curvo.

- Aplicável sobre pilares de ferro, madeira ou fixada em paredes.

- Exige alinhamento preciso e suporte de tensão via cabos de aço com grimpple G.

- Pilar simples suporta até 4 vagas padrão (2,50 × 5,00 m)

- Pilar duplo suporta até 8 vagas padrão, sendo a opção mais econômica por metro quadrado de cobertura

  

Inteligência Operacional

Gestão de Datas e Versões

Todo projeto deve conter registros com data de entrada, atualização de preços, vigência de orçamento e fase da obra. Para isso, o sistema deve considerar:

- Data da última modificação no orçamento (ex: revisão de preço de ferro)

- Data da simulação (registro de quando foi feito o estudo de caso)

- Data do orçamento entregue ao cliente

- Data prevista para execução (projeção de cronograma)

- Datas de validade de cotações e listas de materiais (extraídas dos PDFs e registros visuais)

Essas datas serão associadas a cada bloco, simulação e relatório gerado no sistema e salvas no metadato do projeto, para facilitar controle de versão, histórico e auditoria técnica.

Princípios de Design do Sistema

- Princípio Primário: quanto menos o usuário precisar inserir, melhor.

- Princípio Secundário: quanto mais o sistema puder receber, melhor.

Casos de Uso Esperados

1. Tenho uma área (m²): o sistema deve sugerir o número ideal de módulos, pilares, blocos e tipo de estrutura compatível.

2. Tenho a quantidade de vagas: o sistema distribui os módulos automaticamente em blocos separados e calcula o restante.

3. Quero apenas o serviço: utiliza a lógica de serviço e manutenção, sem materiais, apenas execução técnica.

4. Quero apenas tela nova: aciona a lógica de substituição/costura, sem calcular estrutura nem logística.

Requisitos Futuramente Implementáveis

- Importar e exportar orçamentos completos (XML padrão)

- Emitir relatório técnico completo com detalhamento de materiais, pesos, tempo e custo

- Emitir relatório executivo com preço final, impostos, BDI, margem mínima, logística e risco

- Interface adaptável que se ajusta conforme o input do usuário (área, vagas, tipo de projeto)

  

Estudos de Caso (Simulações)

Simulação 1 — Área com 95 m²

- Entrada: 95 m² de espaço útil

- Sistema sugere 2 módulos com pilares duplos (ferro), cobrindo até 96 m²

- Tipo de cobertura: tela polietileno

- Estrutura sugerida: modelo Santo Dumont Reto

- Relatório: peso total, número de braços, ilhós, tela, custo estimado, logística e equipe

Simulação 2 — Projeto com 7 vagas (3 + 4)

- Entrada: duas fileiras separadas (3 em canto, 4 isoladas)

- Sistema divide em 2 blocos, 1 com pilares simples, outro com pilares duplos

- Estrutura sugerida: eucalipto 4P (L/L e F/F)

Simulação 3 — Apenas serviço

- Entrada: módulo danificado de 3 vagas

- Sistema calcula lixamento, reforço, pintura, transporte, equipe técnica e peças sobressalentes

Simulação 4 — Apenas tela

- Entrada: substituir cobertura antiga por tela impermeável em arco

- Sistema calcula: arcos metálicos, viga calha, ilhós, parafusos, cabos e grimpple

  

Relatórios

- Resumo geral: pesos, áreas, custos

- Blocos: tipo, vagas, área, custo direto

- Insumos: lista técnica por material

- Financeiro: custos diretos + BDI, impostos, logística

  

Diretrizes de Estilo (CSS/UI)

- Tailwind via CDN

- Cards modulares com sombra

- Layout responsivo: grid flexível

- Tabelas zebrada, cabeçalho azul escuro

- Contraste branco/azul, fonte sans-serif

- Inputs e sliders estilizados

  

Explicação Completa (Para Leigos e Crianças)

Imagine que estamos montando uma grande construção com peças de montar. Essas peças podem ser feitas de ferro ou madeira de eucalipto. E o que estamos criando aqui é uma calculadora mágica que ajuda os engenheiros a saber quanto material será necessário, quanto vai custar, e como será feita a montagem, o transporte e até a manutenção.

O Que São As Calculadoras?

As calculadoras são pequenos sistemas inteligentes que entendem o que você quer construir e fazem todas as contas automaticamente. Existem cinco tipos principais:

- Calculadora de Ferro (Santo Dumont): usa perfis metálicos, braços de ferro, pintura e cobertura com tela. Ideal para estacionamentos e estruturas modulares temporárias.

- Calculadora de Eucalipto 4P: usa 4 pilares por módulo, feitos de madeira. Muito usada em condomínios e áreas mais rústicas. Pode ter fileiras simples (lado a lado, L/L) ou duplas (frente a frente, F/F).

- Calculadora de Eucalipto T: modelo mais moderno, com 1 pilar central robusto, dois braços em balanço (um por pilar), cada um com 5 m de comprimento. Utiliza mãos francesas reforçadas, longarinas espessas (14/16) e separadores mais finos (6/8 ou 8/10). Ainda está sendo ajustado, mas será ótimo para áreas amplas, com estética e engenharia diferenciadas.

- Calculadora de Serviço e Manutenção: esta versão unifica todos os aprendizados obtidos com as obras de manutenção, recuperação técnica e planejamento logístico de execução. Ela não estima materiais novos, mas quantifica o esforço humano, o serviço técnico, a recuperação estrutural e a substituição de peças, além de contemplar a fabricação de novas telas.

Seu escopo cobre:

- Cadastramento do estado atual das estruturas (Ruim, Muito Ruim, Crítico)

- Definição de área, margem de costura e observações por módulo

- Marcação de serviços como lixamento, pintura, reforço, recuperação, montagem e desmontagem

- Inclusão de peças novas como braços, bases, telas, cabos e ferragens

- Cálculo por módulo ou por metro quadrado (m²), com base em parâmetros realistas

- Transporte, pedágio, hospedagem, diária da equipe e alimentação

- Exportação/Importação XML padronizada para gestão de projetos complexos

A fórmula geral utilizada é:

custo_total = serviço (base × quantidade × complexidade) + equipe (dias × pessoas × [diária + hospedagem + alimentação]) + transporte (distância × km × custo + pedágio) + extras + peças sobressalentes

Essa abordagem é ideal para obras em que há estruturas pré-existentes a serem reformadas, substituições pontuais de componentes e planejamento preciso do esforço humano.

O Que Elas Calculam?

1. Quantos metros de material você vai precisar (ferro ou madeira)

2. Quantos parafusos, ilhós e peças pequenas são necessárias

3. O custo de tudo isso, considerando os preços atualizados

4. O peso total, que ajuda a entender o esforço para transportar e montar

5. Quanto tempo a equipe vai levar para construir tudo

6. Quanto custa o transporte e a logística de levar o material até o cliente

7. Nos modelos HRU e Reforma Técnica, mostram os passos de obra, dias de execução, fases e carga de trabalho humano em detalhes

O Que São os Blocos?

Pense em blocos como "partes" da obra. Às vezes, precisamos dividir um estacionamento ou estrutura modular em partes menores. Cada bloco pode ter um número diferente de vagas (carros), pilares e módulos. A calculadora soma tudo no final!

Por Que Isso é Importante?

Sem essas contas, seria muito fácil gastar mais do que o necessário, errar na compra ou na montagem, ou até ter prejuízo. A calculadora é como um ajudante invisível que pensa em tudo para o engenheiro — inclusive tempo, equipe e transporte.

E o Estilo Visual?

Tudo isso é feito para funcionar num único arquivo, que roda no celular ou computador. O layout é claro, moderno, com cartões (cards) que se organizam sozinhos na tela, botões grandes, e tudo funcionando sem precisar de internet.

Essa é a alma do projeto: ajudar, prever, calcular e organizar — para que o trabalho seja profissional, rápido e inteligente.

  

Glossário

Grimpple: Dispositivo metálico de tensionamento que conecta as pontas dos cabos de aço nas cúpulas. Modelo 'G', compatível com cabos de 3 mm a 4 mm. Permite ajuste de tração com segurança e precisão.

Cúpula: Estrutura de cobertura arqueada com convergência em uma peça central (tartaruga), utilizada com tela impermeável e fixação por cabos de aço.

Tartaruga: Peça central metálica com 4 encaixes, que conecta os tubos de uma cúpula. Permite montar a cobertura sobre pilares de ferro, madeira ou parede.

Cabos de aço: Utilizados para tensionamento ou sustentação de cobertas tipo cúpula, fixados em pontos estratégicos ou nas calhas laterais.

Cobertura: Parte da estrutura responsável pela proteção da área. Pode ser feita com tela de polietileno (reta) ou impermeável (com arcos e vigas calha).

Viga Calha: Elemento metálico que conecta dois arcos e serve como base de fixação para ilhós da tela impermeável. Também pode ser usada nas extremidades.

Arco Metálico: Estrutura curva usada para sustentar telas que não podem ser esticadas em linha reta, como a impermeável.

Reforma Técnica: Modelo de calculadora voltado para recuperação e manutenção de estruturas existentes. Permite marcar serviços como solda, pintura, lixamento e reforço, além de registrar peças extras por módulo. Baseia-se em parâmetros como estado da estrutura (Ruim, Muito Ruim, Crítico), margem de costura e área da tela.

Serviço e Manutenção: Calculadora voltada para recuperação técnica, manutenção e execução de obras com estruturas já existentes. Integra planejamento de equipe, logística, serviços técnicos como solda e pintura, e controle de peças sobressalentes. Substitui e unifica os aprendizados anteriores do modelo HRU.

L/L (Lado a Lado): Configuração em que os módulos são posicionados paralelamente, formando fileiras simples.

F/F (Frente a Frente): Configuração em que os módulos são dispostos com fileiras duplas voltadas uma para a outra, formando um "corredor" de vagas.

HRU: Calculadora de serviço desenvolvida com base na obra do Hospital Regional da Unimed. Foca no custo humano, logístico e operacional de execução de obras. Trabalha com módulos ou área (m²), considerando equipe, transporte, alimentação, hospedagem, ferramentas e itens adicionais.

Módulo: Unidade estrutural que agrupa pilares e braços para cobrir vagas.

Pilar simples: Sustenta um braço em uma única direção.

Pilar duplo: Sustenta dois braços em direções opostas.

Eucalipto 4P: Estrutura com 4 pilares, normalmente usada em fileiras (L/L ou F/F).

Eucalipto T: Estrutura com 1 pilar central, dois braços em balanço (um por pilar), longarinas e separadores. Modelo moderno e robusto.

Bloco: Segmento independente da estrutura total (ex: 12 vagas, 4 pilares).

Tela de cobertura: Material usado para cobrir a área protegida da estrutura (normalmente polietileno).

Ilhós: Peça de fixação metálica inserida em intervalos na tela para permitir amarração.

Fator de costura: Margem adicionada à área da tela para compensar sobreposição e amarração.

PU: Tinta de poliuretano usada como acabamento e proteção.

BDI: Bonificação e Despesas Indiretas – margem aplicada sobre custos diretos para compor o preço final com lucro, riscos e encargos.

  

Controle de Versão

v1.3 — 2025-06-03

- Todos os preços dos materiais foram atualizados com base nas cotações reais recebidas (PDFs Bloco 1).

- Criadas as seções completas de acessórios específicos para estruturas tipo cúpula (grimpple, tartaruga, cabos de aço).

- Ajustadas as lógicas de cálculo da tela impermeável com base nos arcos e vigas calha.

- Adicionado o sistema de Gestão de Datas e Versões para rastreabilidade de preços, orçamentos e simulações.

- Criada seção "Estudos de Caso (Simulações)" com cenários práticos para aplicação real das lógicas do sistema.

- Organizadas as seções em "Estruturas", "Cobertas" e "Acessórios".

- Reforçada a seção de inteligência operacional com princípios de design, casos de uso e objetivos futuros.

v1.2 — 2025-06-03

- Renomeada a calculadora HRU para Serviço e Manutenção, consolidando aprendizados de múltiplos projetos.

- Documentação, explicação e glossário atualizados conforme novo escopo unificado.

- Integração completa da Calculadora de Reforma Técnica ao template.

- Adicionados parâmetros de estado, margem de costura, peças extras, e lógica detalhada por módulo.

- Explicação didática atualizada com esse novo modelo.

- Glossário expandido com entrada "Reforma Técnica".

v1.1 — 2025-06-03

- Integração completa da Calculadora HRU ao template.

- Parâmetros de serviço, equipe, transporte, itens extras e lógica de custo detalhado incorporados.

- Glossário expandido com definição completa do modelo HRU.

v1.0 — 2025-06-03

- Documento-base criado com estrutura unificada de parâmetros e lógicas para todos os modelos.

- Inclusão de todos os perfis estruturais da calculadora Santo Dumont.

- Parametrização de ferro, tela, eucalipto e acessórios.

- Estrutura de modulação (ferro, eucalipto 4P e T) documentada.

- Explicação técnica e didática incorporada para usuários leigos.

- Estilo visual e organização CSS com Tailwind definidos.

- Sumário, glossário e controle de versão implantados.

  

---

  

# Conteúdo de bloco_01.txt

  

Template Base - Referência Modelo

  

Estrutura Geral

- Template sem interface visível

- Núcleo técnico e estrutural

  

Arquivos

- metadados.xml

- metadados.md

- mapa_codigo.md

- controle_versao.md

- comece_aqui.md

- engine.js

- index.html

  

ESTRUTURAS

Ferro

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Altura dos pilares: 2,10 m

- Dimensão da vaga: 2,50 × 5,00 m

Perfis Tubulares Disponíveis:

- Tubo 100×100×3 mm: 9,17 kg/m — perímetro 0,40 m

- Tubo 100×100×2 mm: 6,17 kg/m — perímetro 0,40 m

- Tubo 100×100×1,5 mm: 4,59 kg/m — perímetro 0,40 m

- Tubo 80×40×2 mm: 4,11 kg/m — perímetro 0,24 m

- Tubo 60×40×2 mm: 3,15 kg/m — perímetro 0,20 m

- Tubo 50×30×2 mm: 2,50 kg/m — perímetro 0,16 m

Outros materiais:

- Perfil U 50×30×1.5 mm: 2,72 kg/m — R$40/kg

- Perfil U 50×30×1.2 mm: 2,24 kg/m — R$38/kg

- Cantoneira 1": 1,45 kg/m

- Chapa de base: 4 mm (10×10 cm), R$30

Tratamento:

- Galvanização (opcional): R$7,50/kg

- Pintura (primer + PU): Primer: R$10/m², PU: R$20/m², Ou valor consolidado: R$2,20/kg

Perda estimada: 5% sobre total linear

  

Eucalipto

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Bitolas: 12 cm, 14 cm, 16 cm, 18 cm

- Peso linear: 12–22 kg/m

- Custo por tora: R$40

- Tratamentos: Antifungo: R$3,00/m, Usinagem: R$4,00/m, Lixamento: R$2,00/m, Osmocolor: R$5,00/m

  

ACESSÓRIOS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Componentes Gerais

- Ilhós: R$ 0,63 por unidade (galvanizado padrão; inox sob demanda)

- Mão francesa: 2 por pilar (padrão), até 4 em F/F, até 3 em L/L; +4 parafusos por unidade (2 por vértice)

- Parafusos e arruelas: 1 por ilhós + 4 por mão francesa; Valor unitário padrão inox: R$ 1,00 cada

- Kit de fixação: todo inox, exceto ilhós — estimado R$ 1,00/unidade por componente

- Viga Calha: R$ 0,80 por unidade estimada (ferro galvanizado ou inox sob demanda)

- Arcos Metálicos: R$ 0,80 por unidade estimada (valor médio ajustável por projeto) 1 a cada 250 mm (galvanizado, inox opcional)

- Viga Calha: perfil metálico que conecta arcos e serve para fixação da tela impermeável

- Arcos Metálicos: utilizados como estrutura curva para sustentar telas impermeáveis

Componentes Específicos para Cúpulas

- Cabos de aço: utilizados para tracionamento das cobertas tipo cúpula. Diâmetro padrão: 4 mm. Preço estimado: R$ 2,00/m linear.

- Grimpple G: dispositivo metálico importado que conecta e tensiona as pontas dos cabos de aço. Compatível com cabos de 3 mm a 4 mm. Preço estimado: R$ 4,50/unidade.

- Arcos da cúpula: semelhantes aos arcos metálicos padrão, mas adaptados para estruturas curvas completas. Valor médio estimado: R$ 1,20/unidade (ajustável).

- Tartaruga: peça central da cúpula, com 4 encaixes que conectam os tubos/arcos da cobertura. Aplicável em ferro, madeira ou paredes. Valor estimado: R$ 12,00/unidade.

  

COBERTAS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Tela de Polietileno (padrão)

- Gramatura: 200 g/m²

- Custo: R$20/m²

- Fator de costura: 1,10

Tela Impermeável (nova)

- Não pode ser esticada em linha reta (sem tração linear)

- Necessita de arcos metálicos como suporte

- Fixação feita em vigas calha — perfis que conectam dois arcos consecutivos

- Em projetos com múltiplos arcos, utiliza-se uma viga calha adicional nas extremidades

- Aplicação ideal para coberturas permanentes ou expostas à chuva

- Custo e gramatura ainda não definidos (ajustável por projeto)

  

Parâmetros Padrão - Logística

- Logística base: R$2,00/kg

- Pode ser ajustada por distância, número de viagens, tipo de veículo, hospedagem, burocracia e complexidade logística

  

Parâmetros Financeiros

- BDI: 40%

- Imposto: 15%

- Simples: R$2,00/kg

- Avançado: distância, visitas, viagens, veículos, hospedagem, burocracia

  

Lógicas de Cálculo

Todas as fórmulas abaixo foram revisadas e estão preparadas para aplicação direta, simulação modular e leitura futura por inteligência artificial. Cada lógica respeita as dinâmicas reais de montagem, especialmente para projetos com vagas ímpares, blocos mistos ou áreas de geometria irregular.

Para cada cenário (estrutura nova, serviço, cobertura ou análise de área), o sistema se adapta ao input do usuário para gerar modulação ideal e cálculo preciso. A lógica está otimizada para crescer junto com a experiência real de obra.

Visão Geral

Todas as fórmulas e operações seguem critérios modulares. Os valores são multiplicados por quantidade, escalados conforme o tipo de estrutura, cobertura e cenário do projeto (reforma, expansão, nova montagem). Para lidar com irregularidades (vagas ímpares, espaços não harmônicos, blocos mistos), o sistema aplica lógicas de compensação nos módulos e gera alertas ao usuário.

Estrutura

- Peso total de perfis = comprimento (m) × peso específico (kg/m)

- Custo da estrutura = peso total × custo/kg

- Pintura = área superficial estimada × (custo primer + PU)

- Perda técnica = aplica-se fator padrão de 5% sobre o peso linear

- Acessórios = soma por ilhós, mãos francesas e parafusos (com valores fixos)

- Logística = peso total × R$/kg logístico

Cobertura

- Tela polietileno = área × custo_m² × fator de costura (padrão 1,10)

- Tela impermeável: Arcos metálicos = área / espaçamento médio (parâmetro ajustável); Vigas calha = 1 entre cada dois arcos + 2 nas extremidades; Ilhós = perímetro da tela dividido por 0,25 m (250 mm padrão); Parafusos inox = 1 por ilhós; Custo = soma de todos os itens acima com seus preços médios

Serviço e Manutenção

- Módulo ou m² = base de custo × quantidade × complexidade

- Equipe técnica = dias × pessoas × (diária + alimentação + hospedagem)

- Transporte = distância × custo/km + pedágio

- Extras e peças novas = conforme carrinho de peças por módulo

Cálculo Final (Orçamento Executivo)

- Subtotal = estrutura + cobertura + serviço + logística + acessórios + extras

- Margens e Encargos: Imposto (15%), BDI (40%), Lucro mínimo (parametrizável)

- Total Final = subtotal + margens aplicadas

O sistema futuro poderá recalcular tudo em tempo real conforme o tipo de entrada (área, vagas, serviço parcial) e sugerir alternativas otimizadas automaticamente.

  

Modulação

A modulação é o "coração" de todo o sistema. Ela define a lógica de composição estrutural, quantidade de braços, pilares e cobertas por módulo, e impacta diretamente o peso, custo, esforço de montagem, material, acessório e tempo de execução.

Ferro

O modelo Santo Dumont Reto é considerado o nosso produto mais avançado:

- Apresenta acabamento superior, com telas bem tensionadas

- Utiliza perfis robustos, altamente resistentes à corrosão

- Excelente estética e durabilidade

- Pilar simples: até 4 vagas (em regime de exceção)

- Pilar duplo: até 6 vagas (padrão), podendo chegar até 8 vagas em projetos especiais

- Pilar simples: 1 braço

- Pilar duplo: 2 braços

- Módulo 2 pilares simples: até 3 vagas

- Módulo 2 pilares duplos: até 6 vagas

Eucalipto 4P

- 4 pilares por módulo

- L/L: lado a lado

- F/F: frente a frente

Eucalipto T

- Pilar central robusto (bitola 14/16)

- 1 braço em balanço por pilar (normalmente 2 braços por módulo)

- Cada braço com 5 m de comprimento

- 2 mãos francesas robustas e reforçadas por braço, fabricadas sob medida

- Longarinas também em bitola 14/16

- Separadores em bitola 6/8 ou 8/10

- Estrutura em desenvolvimento para aplicação estética e funcional em grandes áreas

Cúpula (Eucalipto ou Ferro)

- Estrutura montada sem longarinas — os arcos são conectados diretamente aos braços, e estes aos pilares.

- Cada pilar funciona como base para sustentação dos braços e arcos, similar ao modelo Santo Dumont reto (sem separadores nem longarinas).

- Ideal para áreas centrais ou isoladas, com cobertura em formato curvo.

- Aplicável sobre pilares de ferro, madeira ou fixada em paredes.

- Exige alinhamento preciso e suporte de tensão via cabos de aço com grimpple G.

- Pilar simples suporta até 4 vagas padrão (2,50 × 5,00 m)

- Pilar duplo suporta até 8 vagas padrão, sendo a opção mais econômica por metro quadrado de cobertura

  

Inteligência Operacional

Gestão de Datas e Versões

Todo projeto deve conter registros com data de entrada, atualização de preços, vigência de orçamento e fase da obra. Para isso, o sistema deve considerar:

- Data da última modificação no orçamento (ex: revisão de preço de ferro)

- Data da simulação (registro de quando foi feito o estudo de caso)

- Data do orçamento entregue ao cliente

- Data prevista para execução (projeção de cronograma)

- Datas de validade de cotações e listas de materiais (extraídas dos PDFs e registros visuais)

Essas datas serão associadas a cada bloco, simulação e relatório gerado no sistema e salvas no metadato do projeto, para facilitar controle de versão, histórico e auditoria técnica.

Princípios de Design do Sistema

- Princípio Primário: quanto menos o usuário precisar inserir, melhor.

- Princípio Secundário: quanto mais o sistema puder receber, melhor.

Casos de Uso Esperados

1. Tenho uma área (m²): o sistema deve sugerir o número ideal de módulos, pilares, blocos e tipo de estrutura compatível.

2. Tenho a quantidade de vagas: o sistema distribui os módulos automaticamente em blocos separados e calcula o restante.

3. Quero apenas o serviço: utiliza a lógica de serviço e manutenção, sem materiais, apenas execução técnica.

4. Quero apenas tela nova: aciona a lógica de substituição/costura, sem calcular estrutura nem logística.

Requisitos Futuramente Implementáveis

- Importar e exportar orçamentos completos (XML padrão)

- Emitir relatório técnico completo com detalhamento de materiais, pesos, tempo e custo

- Emitir relatório executivo com preço final, impostos, BDI, margem mínima, logística e risco

- Interface adaptável que se ajusta conforme o input do usuário (área, vagas, tipo de projeto)

  

Estudos de Caso (Simulações)

Simulação 1 — Área com 95 m²

- Entrada: 95 m² de espaço útil

- Sistema sugere 2 módulos com pilares duplos (ferro), cobrindo até 96 m²

- Tipo de cobertura: tela polietileno

- Estrutura sugerida: modelo Santo Dumont Reto

- Relatório: peso total, número de braços, ilhós, tela, custo estimado, logística e equipe

Simulação 2 — Projeto com 7 vagas (3 + 4)

- Entrada: duas fileiras separadas (3 em canto, 4 isoladas)

- Sistema divide em 2 blocos, 1 com pilares simples, outro com pilares duplos

- Estrutura sugerida: eucalipto 4P (L/L e F/F)

Simulação 3 — Apenas serviço

- Entrada: módulo danificado de 3 vagas

- Sistema calcula lixamento, reforço, pintura, transporte, equipe técnica e peças sobressalentes

Simulação 4 — Apenas tela

- Entrada: substituir cobertura antiga por tela impermeável em arco

- Sistema calcula: arcos metálicos, viga calha, ilhós, parafusos, cabos e grimpple

  

Relatórios

- Resumo geral: pesos, áreas, custos

- Blocos: tipo, vagas, área, custo direto

- Insumos: lista técnica por material

- Financeiro: custos diretos + BDI, impostos, logística

  

Diretrizes de Estilo (CSS/UI)

- Tailwind via CDN

- Cards modulares com sombra

- Layout responsivo: grid flexível

- Tabelas zebrada, cabeçalho azul escuro

- Contraste branco/azul, fonte sans-serif

- Inputs e sliders estilizados

  

Explicação Completa (Para Leigos e Crianças)

Imagine que estamos montando uma grande construção com peças de montar. Essas peças podem ser feitas de ferro ou madeira de eucalipto. E o que estamos criando aqui é uma calculadora mágica que ajuda os engenheiros a saber quanto material será necessário, quanto vai custar, e como será feita a montagem, o transporte e até a manutenção.

O Que São As Calculadoras?

As calculadoras são pequenos sistemas inteligentes que entendem o que você quer construir e fazem todas as contas automaticamente. Existem cinco tipos principais:

- Calculadora de Ferro (Santo Dumont): usa perfis metálicos, braços de ferro, pintura e cobertura com tela. Ideal para estacionamentos e estruturas modulares temporárias.

- Calculadora de Eucalipto 4P: usa 4 pilares por módulo, feitos de madeira. Muito usada em condomínios e áreas mais rústicas. Pode ter fileiras simples (lado a lado, L/L) ou duplas (frente a frente, F/F).

- Calculadora de Eucalipto T: modelo mais moderno, com 1 pilar central robusto, dois braços em balanço (um por pilar), cada um com 5 m de comprimento. Utiliza mãos francesas reforçadas, longarinas espessas (14/16) e separadores mais finos (6/8 ou 8/10). Ainda está sendo ajustado, mas será ótimo para áreas amplas, com estética e engenharia diferenciadas.

- Calculadora de Serviço e Manutenção: esta versão unifica todos os aprendizados obtidos com as obras de manutenção, recuperação técnica e planejamento logístico de execução. Ela não estima materiais novos, mas quantifica o esforço humano, o serviço técnico, a recuperação estrutural e a substituição de peças, além de contemplar a fabricação de novas telas.

Seu escopo cobre:

- Cadastramento do estado atual das estruturas (Ruim, Muito Ruim, Crítico)

- Definição de área, margem de costura e observações por módulo

- Marcação de serviços como lixamento, pintura, reforço, recuperação, montagem e desmontagem

- Inclusão de peças novas como braços, bases, telas, cabos e ferragens

- Cálculo por módulo ou por metro quadrado (m²), com base em parâmetros realistas

- Transporte, pedágio, hospedagem, diária da equipe e alimentação

- Exportação/Importação XML padronizada para gestão de projetos complexos

A fórmula geral utilizada é:

custo_total = serviço (base × quantidade × complexidade) + equipe (dias × pessoas × [diária + hospedagem + alimentação]) + transporte (distância × km × custo + pedágio) + extras + peças sobressalentes

Essa abordagem é ideal para obras em que há estruturas pré-existentes a serem reformadas, substituições pontuais de componentes e planejamento preciso do esforço humano.

O Que Elas Calculam?

1. Quantos metros de material você vai precisar (ferro ou madeira)

2. Quantos parafusos, ilhós e peças pequenas são necessárias

3. O custo de tudo isso, considerando os preços atualizados

4. O peso total, que ajuda a entender o esforço para transportar e montar

5. Quanto tempo a equipe vai levar para construir tudo

6. Quanto custa o transporte e a logística de levar o material até o cliente

7. Nos modelos HRU e Reforma Técnica, mostram os passos de obra, dias de execução, fases e carga de trabalho humano em detalhes

O Que São os Blocos?

Pense em blocos como "partes" da obra. Às vezes, precisamos dividir um estacionamento ou estrutura modular em partes menores. Cada bloco pode ter um número diferente de vagas (carros), pilares e módulos. A calculadora soma tudo no final!

Por Que Isso é Importante?

Sem essas contas, seria muito fácil gastar mais do que o necessário, errar na compra ou na montagem, ou até ter prejuízo. A calculadora é como um ajudante invisível que pensa em tudo para o engenheiro — inclusive tempo, equipe e transporte.

E o Estilo Visual?

Tudo isso é feito para funcionar num único arquivo, que roda no celular ou computador. O layout é claro, moderno, com cartões (cards) que se organizam sozinhos na tela, botões grandes, e tudo funcionando sem precisar de internet.

Essa é a alma do projeto: ajudar, prever, calcular e organizar — para que o trabalho seja profissional, rápido e inteligente.

  

Glossário

Grimpple: Dispositivo metálico de tensionamento que conecta as pontas dos cabos de aço nas cúpulas. Modelo 'G', compatível com cabos de 3 mm a 4 mm. Permite ajuste de tração com segurança e precisão.

Cúpula: Estrutura de cobertura arqueada com convergência em uma peça central (tartaruga), utilizada com tela impermeável e fixação por cabos de aço.

Tartaruga: Peça central metálica com 4 encaixes, que conecta os tubos de uma cúpula. Permite montar a cobertura sobre pilares de ferro, madeira ou parede.

Cabos de aço: Utilizados para tensionamento ou sustentação de cobertas tipo cúpula, fixados em pontos estratégicos ou nas calhas laterais.

Cobertura: Parte da estrutura responsável pela proteção da área. Pode ser feita com tela de polietileno (reta) ou impermeável (com arcos e vigas calha).

Viga Calha: Elemento metálico que conecta dois arcos e serve como base de fixação para ilhós da tela impermeável. Também pode ser usada nas extremidades.

Arco Metálico: Estrutura curva usada para sustentar telas que não podem ser esticadas em linha reta, como a impermeável.

Reforma Técnica: Modelo de calculadora voltado para recuperação e manutenção de estruturas existentes. Permite marcar serviços como solda, pintura, lixamento e reforço, além de registrar peças extras por módulo. Baseia-se em parâmetros como estado da estrutura (Ruim, Muito Ruim, Crítico), margem de costura e área da tela.

Serviço e Manutenção: Calculadora voltada para recuperação técnica, manutenção e execução de obras com estruturas já existentes. Integra planejamento de equipe, logística, serviços técnicos como solda e pintura, e controle de peças sobressalentes. Substitui e unifica os aprendizados anteriores do modelo HRU.

L/L (Lado a Lado): Configuração em que os módulos são posicionados paralelamente, formando fileiras simples.

F/F (Frente a Frente): Configuração em que os módulos são dispostos com fileiras duplas voltadas uma para a outra, formando um "corredor" de vagas.

HRU: Calculadora de serviço desenvolvida com base na obra do Hospital Regional da Unimed. Foca no custo humano, logístico e operacional de execução de obras. Trabalha com módulos ou área (m²), considerando equipe, transporte, alimentação, hospedagem, ferramentas e itens adicionais.

Módulo: Unidade estrutural que agrupa pilares e braços para cobrir vagas.

Pilar simples: Sustenta um braço em uma única direção.

Pilar duplo: Sustenta dois braços em direções opostas.

Eucalipto 4P: Estrutura com 4 pilares, normalmente usada em fileiras (L/L ou F/F).

Eucalipto T: Estrutura com 1 pilar central, dois braços em balanço (um por pilar), longarinas e separadores. Modelo moderno e robusto.

Bloco: Segmento independente da estrutura total (ex: 12 vagas, 4 pilares).

Tela de cobertura: Material usado para cobrir a área protegida da estrutura (normalmente polietileno).

Ilhós: Peça de fixação metálica inserida em intervalos na tela para permitir amarração.

Fator de costura: Margem adicionada à área da tela para compensar sobreposição e amarração.

PU: Tinta de poliuretano usada como acabamento e proteção.

BDI: Bonificação e Despesas Indiretas – margem aplicada sobre custos diretos para compor o preço final com lucro, riscos e encargos.

  

Controle de Versão

v1.3 — 2025-06-03

- Todos os preços dos materiais foram atualizados com base nas cotações reais recebidas (PDFs Bloco 1).

- Criadas as seções completas de acessórios específicos para estruturas tipo cúpula (grimpple, tartaruga, cabos de aço).

- Ajustadas as lógicas de cálculo da tela impermeável com base nos arcos e vigas calha.

- Adicionado o sistema de Gestão de Datas e Versões para rastreabilidade de preços, orçamentos e simulações.

- Criada seção "Estudos de Caso (Simulações)" com cenários práticos para aplicação real das lógicas do sistema.

- Organizadas as seções em "Estruturas", "Cobertas" e "Acessórios".

- Reforçada a seção de inteligência operacional com princípios de design, casos de uso e objetivos futuros.

v1.2 — 2025-06-03

- Renomeada a calculadora HRU para Serviço e Manutenção, consolidando aprendizados de múltiplos projetos.

- Documentação, explicação e glossário atualizados conforme novo escopo unificado.

- Integração completa da Calculadora de Reforma Técnica ao template.

- Adicionados parâmetros de estado, margem de costura, peças extras, e lógica detalhada por módulo.

- Explicação didática atualizada com esse novo modelo.

- Glossário expandido com entrada "Reforma Técnica".

v1.1 — 2025-06-03

- Integração completa da Calculadora HRU ao template.

- Parâmetros de serviço, equipe, transporte, itens extras e lógica de custo detalhado incorporados.

- Glossário expandido com definição completa do modelo HRU.

v1.0 — 2025-06-03

- Documento-base criado com estrutura unificada de parâmetros e lógicas para todos os modelos.

- Inclusão de todos os perfis estruturais da calculadora Santo Dumont.

- Parametrização de ferro, tela, eucalipto e acessórios.

- Estrutura de modulação (ferro, eucalipto 4P e T) documentada.

- Explicação técnica e didática incorporada para usuários leigos.

- Estilo visual e organização CSS com Tailwind definidos.

- Sumário, glossário e controle de versão implantados.

  

---

  

# Conteúdo de bloco_01.txt

  

Template Base - Referência Modelo

  

Estrutura Geral

- Template sem interface visível

- Núcleo técnico e estrutural

  

Arquivos

- metadados.xml

- metadados.md

- mapa_codigo.md

- controle_versao.md

- comece_aqui.md

- engine.js

- index.html

  

ESTRUTURAS

Ferro

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Altura dos pilares: 2,10 m

- Dimensão da vaga: 2,50 × 5,00 m

Perfis Tubulares Disponíveis:

- Tubo 100×100×3 mm: 9,17 kg/m — perímetro 0,40 m

- Tubo 100×100×2 mm: 6,17 kg/m — perímetro 0,40 m

- Tubo 100×100×1,5 mm: 4,59 kg/m — perímetro 0,40 m

- Tubo 80×40×2 mm: 4,11 kg/m — perímetro 0,24 m

- Tubo 60×40×2 mm: 3,15 kg/m — perímetro 0,20 m

- Tubo 50×30×2 mm: 2,50 kg/m — perímetro 0,16 m

Outros materiais:

- Perfil U 50×30×1.5 mm: 2,72 kg/m — R$40/kg

- Perfil U 50×30×1.2 mm: 2,24 kg/m — R$38/kg

- Cantoneira 1": 1,45 kg/m

- Chapa de base: 4 mm (10×10 cm), R$30

Tratamento:

- Galvanização (opcional): R$7,50/kg

- Pintura (primer + PU): Primer: R$10/m², PU: R$20/m², Ou valor consolidado: R$2,20/kg

Perda estimada: 5% sobre total linear

  

Eucalipto

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

- Bitolas: 12 cm, 14 cm, 16 cm, 18 cm

- Peso linear: 12–22 kg/m

- Custo por tora: R$40

- Tratamentos: Antifungo: R$3,00/m, Usinagem: R$4,00/m, Lixamento: R$2,00/m, Osmocolor: R$5,00/m

  

ACESSÓRIOS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Componentes Gerais

- Ilhós: R$ 0,63 por unidade (galvanizado padrão; inox sob demanda)

- Mão francesa: 2 por pilar (padrão), até 4 em F/F, até 3 em L/L; +4 parafusos por unidade (2 por vértice)

- Parafusos e arruelas: 1 por ilhós + 4 por mão francesa; Valor unitário padrão inox: R$ 1,00 cada

- Kit de fixação: todo inox, exceto ilhós — estimado R$ 1,00/unidade por componente

- Viga Calha: R$ 0,80 por unidade estimada (ferro galvanizado ou inox sob demanda)

- Arcos Metálicos: R$ 0,80 por unidade estimada (valor médio ajustável por projeto) 1 a cada 250 mm (galvanizado, inox opcional)

- Viga Calha: perfil metálico que conecta arcos e serve para fixação da tela impermeável

- Arcos Metálicos: utilizados como estrutura curva para sustentar telas impermeáveis

Componentes Específicos para Cúpulas

- Cabos de aço: utilizados para tracionamento das cobertas tipo cúpula. Diâmetro padrão: 4 mm. Preço estimado: R$ 2,00/m linear.

- Grimpple G: dispositivo metálico importado que conecta e tensiona as pontas dos cabos de aço. Compatível com cabos de 3 mm a 4 mm. Preço estimado: R$ 4,50/unidade.

- Arcos da cúpula: semelhantes aos arcos metálicos padrão, mas adaptados para estruturas curvas completas. Valor médio estimado: R$ 1,20/unidade (ajustável).

- Tartaruga: peça central da cúpula, com 4 encaixes que conectam os tubos/arcos da cobertura. Aplicável em ferro, madeira ou paredes. Valor estimado: R$ 12,00/unidade.

  

COBERTAS

Última atualização de preços: 2025-06-03 (baseado nos arquivos PDF do Bloco 1)

Tela de Polietileno (padrão)

- Gramatura: 200 g/m²

- Custo: R$20/m²

- Fator de costura: 1,10

Tela Impermeável (nova)

- Não pode ser esticada em linha reta (sem tração linear)

- Necessita de arcos metálicos como suporte

- Fixação feita em vigas calha — perfis que conectam dois arcos consecutivos

- Em projetos com múltiplos arcos, utiliza-se uma viga calha adicional nas extremidades

- Aplicação ideal para coberturas permanentes ou expostas à chuva

- Custo e gramatura ainda não definidos (ajustável por projeto)

  

Parâmetros Padrão - Logística

- Logística base: R$2,00/kg

- Pode ser ajustada por distância, número de viagens, tipo de veículo, hospedagem, burocracia e complexidade logística

  

Parâmetros Financeiros

- BDI: 40%

- Imposto: 15%

- Simples: R$2,00/kg

- Avançado: distância, visitas, viagens, veículos, hospedagem, burocracia

  

Lógicas de Cálculo

Todas as fórmulas abaixo foram revisadas e estão preparadas para aplicação direta, simulação modular e leitura futura por inteligência artificial. Cada lógica respeita as dinâmicas reais de montagem, especialmente para projetos com vagas ímpares, blocos mistos ou áreas de geometria irregular.

Para cada cenário (estrutura nova, serviço, cobertura ou análise de área), o sistema se adapta ao input do usuário para gerar modulação ideal e cálculo preciso. A lógica está otimizada para crescer junto com a experiência real de obra.

Visão Geral

Todas as fórmulas e operações seguem critérios modulares. Os valores são multiplicados por quantidade, escalados conforme o tipo de estrutura, cobertura e cenário do projeto (reforma, expansão, nova montagem). Para lidar com irregularidades (vagas ímpares, espaços não harmônicos, blocos mistos), o sistema aplica lógicas de compensação nos módulos e gera alertas ao usuário.

Estrutura

- Peso total de perfis = comprimento (m) × peso específico (kg/m)

- Custo da estrutura = peso total × custo/kg

- Pintura = área superficial estimada × (custo primer + PU)

- Perda técnica = aplica-se fator padrão de 5% sobre o peso linear

- Acessórios = soma por ilhós, mãos francesas e parafusos (com valores fixos)

- Logística = peso total × R$/kg logístico

Cobertura

- Tela polietileno = área × custo_m² × fator de costura (padrão 1,10)

- Tela impermeável: Arcos metálicos = área / espaçamento médio (parâmetro ajustável); Vigas calha = 1 entre cada dois arcos + 2 nas extremidades; Ilhós = perímetro da tela dividido por 0,25 m (250 mm padrão); Parafusos inox = 1 por ilhós; Custo = soma de todos os itens acima com seus preços médios

Serviço e Manutenção

- Módulo ou m² = base de custo × quantidade × complexidade

- Equipe técnica = dias × pessoas × (diária + alimentação + hospedagem)

- Transporte = distância × custo/km + pedágio

- Extras e peças novas = conforme carrinho de peças por módulo

Cálculo Final (Orçamento Executivo)

- Subtotal = estrutura + cobertura + serviço + logística + acessórios + extras

- Margens e Encargos: Imposto (15%), BDI (40%), Lucro mínimo (parametrizável)

- Total Final = subtotal + margens aplicadas

O sistema futuro poderá recalcular tudo em tempo real conforme o tipo de entrada (área, vagas, serviço parcial) e sugerir alternativas otimizadas automaticamente.

  

Modulação

A modulação é o "coração" de todo o sistema. Ela define a lógica de composição estrutural, quantidade de braços, pilares e cobertas por módulo, e impacta diretamente o peso, custo, esforço de montagem, material, acessório e tempo de execução.

Ferro

O modelo Santo Dumont Reto é considerado o nosso produto mais avançado:

- Apresenta acabamento superior, com telas bem tensionadas

- Utiliza perfis robustos, altamente resistentes à corrosão

- Excelente estética e durabilidade

- Pilar simples: até 4 vagas (em regime de exceção)

- Pilar duplo: até 6 vagas (padrão), podendo chegar até 8 vagas em projetos especiais

- Pilar simples: 1 braço

- Pilar duplo: 2 braços

- Módulo 2 pilares simples: até 3 vagas

- Módulo 2 pilares duplos: até 6 vagas

Eucalipto 4P

- 4 pilares por módulo

- L/L: lado a lado

- F/F: frente a frente

Eucalipto T

- Pilar central robusto (bitola 14/16)

- 1 braço em balanço por pilar (normalmente 2 braços por módulo)

- Cada braço com 5 m de comprimento

- 2 mãos francesas robustas e reforçadas por braço, fabricadas sob medida

- Longarinas também em bitola 14/16

- Separadores em bitola 6/8 ou 8/10

- Estrutura em desenvolvimento para aplicação estética e funcional em grandes áreas

Cúpula (Eucalipto ou Ferro)

- Estrutura montada sem longarinas — os arcos são conectados diretamente aos braços, e estes aos pilares.

- Cada pilar funciona como base para sustentação dos braços e arcos, similar ao modelo Santo Dumont reto (sem separadores nem longarinas).

- Ideal para áreas centrais ou isoladas, com cobertura em formato curvo.

- Aplicável sobre pilares de ferro, madeira ou fixada em paredes.

- Exige alinhamento preciso e suporte de tensão via cabos de aço com grimpple G.

- Pilar simples suporta até 4 vagas padrão (2,50 × 5,00 m)

- Pilar duplo suporta até 8 vagas padrão, sendo a opção mais econômica por metro quadrado de cobertura

  

Inteligência Operacional

Gestão de Datas e Versões

Todo projeto deve conter registros com data de entrada, atualização de preços, vigência de orçamento e fase da obra. Para isso, o sistema deve considerar:

- Data da última modificação no orçamento (ex: revisão de preço de ferro)

- Data da simulação (registro de quando foi feito o estudo de caso)

- Data do orçamento entregue ao cliente

- Data prevista para execução (projeção de cronograma)

- Datas de validade de cotações e listas de materiais (extraídas dos PDFs e registros visuais)

Essas datas serão associadas a cada bloco, simulação e relatório gerado no sistema e salvas no metadato do projeto, para facilitar controle de versão, histórico e auditoria técnica.

Princípios de Design do Sistema

- Princípio Primário: quanto menos o usuário precisar inserir, melhor.

- Princípio Secundário: quanto mais o sistema puder receber, melhor.

Casos de Uso Esperados

1. Tenho uma área (m²): o sistema deve sugerir o número ideal de módulos, pilares, blocos e tipo de estrutura compatível.

2. Tenho a quantidade de vagas: o sistema distribui os módulos automaticamente em blocos separados e calcula o restante.

3. Quero apenas o serviço: utiliza a lógica de serviço e manutenção, sem materiais, apenas execução técnica.

4. Quero apenas tela nova: aciona a lógica de substituição/costura, sem calcular estrutura nem logística.

Requisitos Futuramente Implementáveis

- Importar e exportar orçamentos completos (XML padrão)

- Emitir relatório técnico completo com detalhamento de materiais, pesos, tempo e custo

- Emitir relatório executivo com preço final, impostos, BDI, margem mínima, logística e risco

- Interface adaptável que se ajusta conforme o input do usuário (área, vagas, tipo de projeto)

  

Estudos de Caso (Simulações)

Simulação 1 — Área com 95 m²

- Entrada: 95 m² de espaço útil

- Sistema sugere 2 módulos com pilares duplos (ferro), cobrindo até 96 m²

- Tipo de cobertura: tela polietileno

- Estrutura sugerida: modelo Santo Dumont Reto

- Relatório: peso total, número de braços, ilhós, tela, custo estimado, logística e equipe

Simulação 2 — Projeto com 7 vagas (3 + 4)

- Entrada: duas fileiras separadas (3 em canto, 4 isoladas)

- Sistema divide em 2 blocos, 1 com pilares simples, outro com pilares duplos

- Estrutura sugerida: eucalipto 4P (L/L e F/F)

Simulação 3 — Apenas serviço

- Entrada: módulo danificado de 3 vagas

- Sistema calcula lixamento, reforço, pintura, transporte, equipe técnica e peças sobressalentes

Simulação 4 — Apenas tela

- Entrada: substituir cobertura antiga por tela impermeável em arco

- Sistema calcula: arcos metálicos, viga calha, ilhós, parafusos, cabos e grimpple

  

Relatórios

- Resumo geral: pesos, áreas, custos

- Blocos: tipo, vagas, área, custo direto

- Insumos: lista técnica por material

- Financeiro: custos diretos + BDI, impostos, logística

  

Diretrizes de Estilo (CSS/UI)

- Tailwind via CDN

- Cards modulares com sombra

- Layout responsivo: grid flexível

- Tabelas zebrada, cabeçalho azul escuro

- Contraste branco/azul, fonte sans-serif

- Inputs e sliders estilizados

  

Explicação Completa (Para Leigos e Crianças)

Imagine que estamos montando uma grande construção com peças de montar. Essas peças podem ser feitas de ferro ou madeira de eucalipto. E o que estamos criando aqui é uma calculadora mágica que ajuda os engenheiros a saber quanto material será necessário, quanto vai custar, e como será feita a montagem, o transporte e até a manutenção.

O Que São As Calculadoras?

As calculadoras são pequenos sistemas inteligentes que entendem o que você quer construir e fazem todas as contas automaticamente. Existem cinco tipos principais:

- Calculadora de Ferro (Santo Dumont): usa perfis metálicos, braços de ferro, pintura e cobertura com tela. Ideal para estacionamentos e estruturas modulares temporárias.

- Calculadora de Eucalipto 4P: usa 4 pilares por módulo, feitos de madeira. Muito usada em condomínios e áreas mais rústicas. Pode ter fileiras simples (lado a lado, L/L) ou duplas (frente a frente, F/F).

- Calculadora de Eucalipto T: modelo mais moderno, com 1 pilar central robusto, dois braços em balanço (um por pilar), cada um com 5 m de comprimento. Utiliza mãos francesas reforçadas, longarinas espessas (14/16) e separadores mais finos (6/8 ou 8/10). Ainda está sendo ajustado, mas será ótimo para áreas amplas, com estética e engenharia diferenciadas.

- Calculadora de Serviço e Manutenção: esta versão unifica todos os aprendizados obtidos com as obras de manutenção, recuperação técnica e planejamento logístico de execução. Ela não estima materiais novos, mas quantifica o esforço humano, o serviço técnico, a recuperação estrutural e a substituição de peças, além de contemplar a fabricação de novas telas.

Seu escopo cobre:

- Cadastramento do estado atual das estruturas (Ruim, Muito Ruim, Crítico)

- Definição de área, margem de costura e observações por módulo

- Marcação de serviços como lixamento, pintura, reforço, recuperação, montagem e desmontagem

- Inclusão de peças novas como braços, bases, telas, cabos e ferragens

- Cálculo por módulo ou por metro quadrado (m²), com base em parâmetros realistas

- Transporte, pedágio, hospedagem, diária da equipe e alimentação

- Exportação/Importação XML padronizada para gestão de projetos complexos

A fórmula geral utilizada é:

custo_total = serviço (base × quantidade × complexidade) + equipe (dias × pessoas × [diária + hospedagem + alimentação]) + transporte (distância × km × custo + pedágio) + extras + peças sobressalentes

Essa abordagem é ideal para obras em que há estruturas pré-existentes a serem reformadas, substituições pontuais de componentes e planejamento preciso do esforço humano.

O Que Elas Calculam?

1. Quantos metros de material você vai precisar (ferro ou madeira)

2. Quantos parafusos, ilhós e peças pequenas são necessárias

3. O custo de tudo isso, considerando os preços atualizados

4. O peso total, que ajuda a entender o esforço para transportar e montar

5. Quanto tempo a equipe vai levar para construir tudo

6. Quanto custa o transporte e a logística de levar o material até o cliente

7. Nos modelos HRU e Reforma Técnica, mostram os passos de obra, dias de execução, fases e carga de trabalho humano em detalhes

O Que São os Blocos?

Pense em blocos como "partes" da obra. Às vezes, precisamos dividir um estacionamento ou estrutura modular em partes menores. Cada bloco pode ter um número diferente de vagas (carros), pilares e módulos. A calculadora soma tudo no final!

Por Que Isso é Importante?

Sem essas contas, seria muito fácil gastar mais do que o necessário, errar na compra ou na montagem, ou até ter prejuízo. A calculadora é como um ajudante invisível que pensa em tudo para o engenheiro — inclusive tempo, equipe e transporte.

E o Estilo Visual?

Tudo isso é feito para funcionar num único arquivo, que roda no celular ou computador. O layout é claro, moderno, com cartões (cards) que se organizam sozinhos na tela, botões grandes, e tudo funcionando sem precisar de internet.

Essa é a alma do projeto: ajudar, prever, calcular e organizar — para que o trabalho seja profissional, rápido e inteligente.

  

Glossário

Grimpple: Dispositivo metálico de tensionamento que conecta as pontas dos cabos de aço nas cúpulas. Modelo 'G', compatível com cabos de 3 mm a 4 mm. Permite ajuste de tração com segurança e precisão.

Cúpula: Estrutura de cobertura arqueada com convergência em uma peça central (tartaruga), utilizada com tela impermeável e fixação por cabos de aço.

Tartaruga: Peça central metálica com 4 encaixes, que conecta os tubos de uma cúpula. Permite montar a cobertura sobre pilares de ferro, madeira ou parede.

Cabos de aço: Utilizados para tensionamento ou sustentação de cobertas tipo cúpula, fixados em pontos estratégicos ou nas calhas laterais.

Cobertura: Parte da estrutura responsável pela proteção da área. Pode ser feita com tela de polietileno (reta) ou impermeável (com arcos e vigas calha).

Viga Calha: Elemento metálico que conecta dois arcos e serve como base de fixação para ilhós da tela impermeável. Também pode ser usada nas extremidades.

Arco Metálico: Estrutura curva usada para sustentar telas que não podem ser esticadas em linha reta, como a impermeável.

Reforma Técnica: Modelo de calculadora voltado para recuperação e manutenção de estruturas existentes. Permite marcar serviços como solda, pintura, lixamento e reforço, além de registrar peças extras por módulo. Baseia-se em parâmetros como estado da estrutura (Ruim, Muito Ruim, Crítico), margem de costura e área da tela.

Serviço e Manutenção: Calculadora voltada para recuperação técnica, manutenção e execução de obras com estruturas já existentes. Integra planejamento de equipe, logística, serviços técnicos como solda e pintura, e controle de peças sobressalentes. Substitui e unifica os aprendizados anteriores do modelo HRU.

L/L (Lado a Lado): Configuração em que os módulos são posicionados paralelamente, formando fileiras simples.

F/F (Frente a Frente): Configuração em que os módulos são dispostos com fileiras duplas voltadas uma para a outra, formando um "corredor" de vagas.

HRU: Calculadora de serviço desenvolvida com base na obra do Hospital Regional da Unimed. Foca no custo humano, logístico e operacional de execução de obras. Trabalha com módulos ou área (m²), considerando equipe, transporte, alimentação, hospedagem, ferramentas e itens adicionais.

Módulo: Unidade estrutural que agrupa pilares e braços para cobrir vagas.

Pilar simples: Sustenta um braço em uma única direção.

Pilar duplo: Sustenta dois braços em direções opostas.

Eucalipto 4P: Estrutura com 4 pilares, normalmente usada em fileiras (L/L ou F/F).

Eucalipto T: Estrutura com 1 pilar central, dois braços em balanço (um por pilar), longarinas e separadores. Modelo moderno e robusto.

Bloco: Segmento independente da estrutura total (ex: 12 vagas, 4 pilares).

Tela de cobertura: Material usado para cobrir a área protegida da estrutura (normalmente polietileno).

Ilhós: Peça de fixação metálica inserida em intervalos na tela para permitir amarração.

Fator de costura: Margem adicionada à área da tela para compensar sobreposição e amarração.

PU: Tinta de poliuretano usada como acabamento e proteção.

BDI: Bonificação e Despesas Indiretas – margem aplicada sobre custos diretos para compor o preço final com lucro, riscos e encargos.

  

Controle de Versão

v1.3 — 2025-06-03

- Todos os preços dos materiais foram atualizados com base nas cotações reais recebidas (PDFs Bloco 1).

- Criadas as seções completas de acessórios específicos para estruturas tipo cúpula (grimpple, tartaruga, cabos de aço).

- Ajustadas as lógicas de cálculo da tela impermeável com base nos arcos e vigas calha.

- Adicionado o sistema de Gestão de Datas e Versões para rastreabilidade de preços, orçamentos e simulações.

- Criada seção "Estudos de Caso (Simulações)" com cenários práticos para aplicação real das lógicas do sistema.

- Organizadas as seções em "Estruturas", "Cobertas" e "Acessórios".

- Reforçada a seção de inteligência operacional com princípios de design, casos de uso e objetivos futuros.

v1.2 — 2025-06-03

- Renomeada a calculadora HRU para Serviço e Manutenção, consolidando aprendizados de múltiplos projetos.

- Documentação, explicação e glossário atualizados conforme novo escopo unificado.

- Integração completa da Calculadora de Reforma Técnica ao template.

- Adicionados parâmetros de estado, margem de costura, peças extras, e lógica detalhada por módulo.

- Explicação didática atualizada com esse novo modelo.

- Glossário expandido com entrada "Reforma Técnica".

v1.1 — 2025-06-03

- Integração completa da Calculadora HRU ao template.

- Parâmetros de serviço, equipe, transporte, itens extras e lógica de custo detalhado incorporados.

- Glossário expandido com definição completa do modelo HRU.

v1.0 — 2025-06-03

- Documento-base criado com estrutura unificada de parâmetros e lógicas para todos os modelos.

- Inclusão de todos os perfis estruturais da calculadora Santo Dumont.

- Parametrização de ferro, tela, eucalipto e acessórios.

- Estrutura de modulação (ferro, eucalipto 4P e T) documentada.

- Explicação técnica e didática incorporada para usuários leigos.

- Estilo visual e organização CSS com Tailwind definidos.

- Sumário, glossário e controle de versão implantados.

  

---

  