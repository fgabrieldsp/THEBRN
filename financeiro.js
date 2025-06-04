// financeiro.js
// Domínio: Cálculos financeiros e orçamentários (ES6 POO)

class Financeiro {
  constructor() {
    this.parametros = {
      bdi: 0.40,
      imposto: 0.15,
      logisticaBase: 2.00,
      simples: 2.00,
      avancado: 'distancia, visitas, viagens, veiculos, hospedagem, burocracia'
    };
    this.formulas = {
      logistica: 'peso_total * preco_logistico_kg',
      cobertura_polietileno: 'area * custo_m2 * fator_costura',
      cobertura_impermeavel: 'arcos = area / espacamento; vigas_calha = 1 entre cada dois arcos + 2 nas extremidades; ilhos = perimetro / 0.25; parafusos = 1 por ilhos; custo = soma dos itens',
      servico_manutencao: 'base_custo * quantidade * complexidade',
      equipe_tecnica: 'dias * pessoas * (diaria + alimentacao + hospedagem)',
      transporte: 'distancia * custo_km + pedagio',
      extras: 'conforme carrinho de peças por módulo',
      subtotal: 'estrutura + cobertura + servico + logistica + acessorios + extras',
      margens: 'subtotal * imposto (15%) + subtotal * BDI (40%) + lucro_minimo (parametrizavel)',
      total_final: 'subtotal + margens'
    };
    this.explicacao = 'Fórmulas e parâmetros para cálculo financeiro e orçamentário, incluindo BDI, imposto, logística, margens e lógica de composição do orçamento executivo. Adaptável a diferentes cenários de entrada (área, vagas, serviço, tela).';
  }
}

export const financeiro = new Financeiro();
