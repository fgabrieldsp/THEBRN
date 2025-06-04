// modulacao.js
// Lógicas de cálculo e modulação (ES6 POO)

class Modulacao {
  constructor() {
    this.formulas = {
      // Estrutura Ferro
      pesoTotalPerfis: '(comprimento_m) * (peso_kg_m)',
      custoEstrutura: '(peso_total) * (custo_kg)',
      pintura: '(area_superficial) * (custo_primer + custo_PU)',
      perdaTecnica: 'peso_linear * 0.05',
      acessorios: 'soma por ilhós, mãos francesas e parafusos (valores fixos)',
      logistica: 'peso_total * preco_logistico_kg',

      // Cobertura Polietileno
      coberturaPolietileno: 'area * custo_m2 * fator_costura',

      // Cobertura Impermeável
      coberturaImpermeavel: 'arcos = area / espacamento; vigas_calha = 1 entre cada dois arcos + 2 nas extremidades; ilhos = perimetro / 0.25; parafusos = 1 por ilhos; custo = soma dos itens',

      // Serviço e Manutenção
      servicoManutencao: 'base_custo * quantidade * complexidade',

      // Equipe Técnica
      equipeTecnica: 'dias * pessoas * (diaria + alimentacao + hospedagem)',

      // Transporte
      transporte: 'distancia * custo_km + pedagio',

      // Extras
      extras: 'conforme carrinho de peças por módulo',

      // Subtotal e Margens
      subtotal: 'estrutura + cobertura + servico + logistica + acessorios + extras',
      margens: 'subtotal * imposto (15%) + subtotal * BDI (40%) + lucro_minimo (parametrizavel)',
      totalFinal: 'subtotal + margens'
    };
    this.parametros = {
      perdaTecnica: 0.05,
      fatorCostura: 1.10,
      espacamentoArcos: 0.25, // metros
      ilhosPorPerimetro: 0.25, // 1 ilhós a cada 0,25m
      parafusoPorIlhos: 1,
      maoFrancesaPorPilarPadrao: 2,
      maoFrancesaPorPilarF_F: 4,
      maoFrancesaPorPilarL_L: 3,
      bdi: 0.40,
      imposto: 0.15,
      logisticaBase: 2.00 // R$/kg
    };
    this.descricao = 'Fórmulas e parâmetros revisados para aplicação direta, simulação modular e leitura futura por IA. Inclui lógica para ferro, eucalipto, cúpula, cobertas, acessórios, serviço, equipe, transporte, extras, subtotal, margens e total final. Adapta-se a cenários de estrutura nova, serviço, cobertura ou análise de área.';
  }
}

export const modulacao = new Modulacao();
