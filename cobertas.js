// cobertas.js
// Domínio: Cobertas — dados técnicos e operacionais (ES6 POO)

class Cobertas {
  constructor() {
    this.ultimaAtualizacao = '2025-06-03';
    this.polietileno = {
      gramatura: 200,
      unidade: 'g/m²',
      custo: 20,
      fatorCostura: 1.10,
      aplicacao: 'reta',
      observacao: 'Tela padrão para cobertura modular, pode ser substituída por impermeável conforme projeto.'
    };
    this.impermeavel = {
      restricao: 'sem tração linear',
      suporte: 'arcos metálicos',
      fixacao: 'vigas calha',
      vigaExtra: true,
      aplicacao: 'permanente ou exposta à chuva',
      custo: null,
      gramatura: null,
      observacao: 'Necessita arcos metálicos e vigas calha para fixação. Não pode ser esticada em linha reta.'
    };
    this.logica = {
      polietileno: {
        formula: 'area * custo * fatorCostura',
        descricao: 'Área da cobertura multiplicada pelo custo por m² e pelo fator de costura.'
      },
      impermeavel: {
        arcosPorArea: 'area / espacamentoArcos',
        espacamentoArcos: 0.25,
        vigasCalha: '1 entre cada dois arcos + 2 nas extremidades',
        ilhosPorPerimetro: 0.25,
        parafusosPorIlhos: 1,
        formula: 'arcos, vigas calha, ilhós e parafusos somados conforme parâmetros e preços médios',
        descricao: 'Cálculo modular: arcos metálicos, vigas calha, ilhós e parafusos conforme área e perímetro.'
      }
    };
  }
}

export const cobertas = new Cobertas();
