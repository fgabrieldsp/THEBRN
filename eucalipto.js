// eucalipto.js
// Domínio: Eucalipto — dados técnicos e operacionais (ES6 POO)

class Eucalipto {
  constructor() {
    this.ultimaAtualizacao = '2025-06-03';
    this.bitolas = [12, 14, 16, 18];
    this.pesoLinear = { min: 12, max: 22, unidade: 'kg/m' };
    this.custoPorTora = [
      { bitola: 12, comprimento: 3, cotacao: 120 },
      { bitola: 12, comprimento: 5, cotacao: 160.77 },
      { bitola: 14, comprimento: 3, cotacao: null },
      { bitola: 14, comprimento: 5, cotacao: null },
      { bitola: 16, comprimento: 3, cotacao: null },
      { bitola: 16, comprimento: 5, cotacao: null },
      { bitola: 18, comprimento: 3, cotacao: null },
      { bitola: 18, comprimento: 5, cotacao: null }
    ];
    this.custoPadraoPorTora = 40;
    this.tratamentos = {
      antifungo: 3.00,
      usinagem: 4.00,
      lixamento: 2.00,
      osmocolor: 5.00
    };
    this.logica = {
      pesoTotal: 'comprimento (m) × peso linear (kg/m)',
      custoTotal: 'peso total × custo médio por kg',
      custoTratamento: 'comprimento (m) × (antifungo + usinagem + lixamento + osmocolor)',
      observacao: 'Valores de cotação podem ser atualizados conforme mercado e fornecedor.'
    };
  }
}

export const eucalipto = new Eucalipto();
