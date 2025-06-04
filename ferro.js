// ferro.js
// Domínio: Ferro — dados técnicos e operacionais (ES6 POO)

class Ferro {
  constructor() {
    this.ultimaAtualizacao = '2025-06-03';
    this.pilares = {
      altura: 2.10,
      unidade: 'm'
    };
    this.vaga = {
      largura: 2.50,
      comprimento: 5.00,
      unidade: 'm'
    };
    this.perfisTubulares = [
      { tipo: '100x100x3', peso: 9.17, perimetro: 0.40 },
      { tipo: '100x100x2', peso: 6.17, perimetro: 0.40 },
      { tipo: '100x100x1.5', peso: 4.59, perimetro: 0.40 },
      { tipo: '80x40x2', peso: 4.11, perimetro: 0.24 },
      { tipo: '60x40x2', peso: 3.15, perimetro: 0.20 },
      { tipo: '50x30x2', peso: 2.50, perimetro: 0.16 }
    ];
    this.outrosMateriais = [
      { tipo: 'Perfil U 50x30x1.5', peso: 2.72, precoKg: 40 },
      { tipo: 'Perfil U 50x30x1.2', peso: 2.24, precoKg: 38 },
      { tipo: 'Cantoneira 1"', peso: 1.45 },
      { tipo: 'Chapa de base 4mm', dimensao: '10x10cm', preco: 30 }
    ];
    this.tratamento = {
      galvanizacao: 7.50,
      pintura: {
        primer: 10,
        pu: 20,
        consolidado: 2.20
      }
    };
    this.perdaEstimativa = 0.05;
    this.logica = {
      pesoTotal: 'comprimento (m) × peso específico (kg/m)',
      custoEstrutura: 'peso total × custo/kg',
      pintura: 'área superficial × (custo primer + PU)',
      perdaTecnica: '5% sobre peso linear',
      observacao: 'Valores e fórmulas baseados em atualização de 2025-06-03. Perfis, tratamentos e perdas podem ser ajustados conforme projeto.'
    };
  }
}

export const ferro = new Ferro();
