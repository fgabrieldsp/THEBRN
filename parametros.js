// parametros.js
// Parâmetros padrão do sistema em modelo ES6 POO singleton

class Parametros {
  constructor() {
    // ...todos os parâmetros do objeto original...
    this.logistica = {
      base: 2.00,
      unidade: 'kg',
      ajuste: [
        'distância', 'viagens', 'veículo', 'hospedagem', 'burocracia', 'complexidade'
      ],
      avancado: [
        'distância', 'visitas', 'viagens', 'veículos', 'hospedagem', 'burocracia'
      ]
    };
    this.financeiro = {
      bdi: 0.40,
      imposto: 0.15,
      simples: 2.00,
      unidade: 'kg',
      avancado: [
        'distância', 'visitas', 'viagens', 'veículos', 'hospedagem', 'burocracia'
      ],
      margens: {
        imposto: 0.15,
        bdi: 0.40,
        lucroMinimo: null
      }
    };
    this.modulacao = {
      perdaTecnica: 0.05,
      fatorCostura: 1.10,
      espacamentoArcos: 0.25,
      ilhosPorPerimetro: 0.25,
      parafusoPorIlhos: 1,
      maoFrancesaPorPilarPadrao: 2,
      maoFrancesaPorPilarF_F: 4,
      maoFrancesaPorPilarL_L: 3
    };
    this.cobertas = {
      polietileno: {
        gramatura: 200,
        custo: 20,
        fatorCostura: 1.10
      },
      impermeavel: {
        restricao: 'sem tração linear',
        suporte: 'arcos metálicos',
        fixacao: 'vigas calha',
        vigaExtra: true,
        aplicacao: 'permanente ou exposta à chuva',
        custo: null,
        gramatura: null
      }
    };
    this.acessorios = {
      ilhos: { preco: 0.63, unidade: 'unidade', material: 'galvanizado', inoxOpcional: true },
      maoFrancesa: { quantidadePorPilar: 2, maxF: 4, maxL: 3, parafusosPorUnidade: 4 },
      parafusosArruelas: { porIlhos: 1, porMaoFrancesa: 4, precoInox: 1.00 },
      kitFixacao: { material: 'inox', preco: 1.00 },
      vigaCalha: { preco: 0.80, unidade: 'unidade', material: 'ferro galvanizado', inoxOpcional: true },
      arcosMetálicos: { preco: 0.80, unidade: 'unidade', espacamento: 0.25, material: 'galvanizado', inoxOpcional: true },
      componentesCupula: {
        cabosAco: { diametro: 4, preco: 2.00, unidade: 'm' },
        grimppleG: { compatibilidade: '3-4mm', preco: 4.50, unidade: 'unidade' },
        arcosCupula: { preco: 1.20, unidade: 'unidade' },
        tartaruga: { preco: 12.00, unidade: 'unidade' }
      }
    };
    this.ferro = {
      alturaPilar: 2.10,
      dimensaoVaga: { largura: 2.5, comprimento: 5.0 },
      perfisTubulares: [
        { tipo: '100x100x3', peso: 9.17, perimetro: 0.40 },
        { tipo: '100x100x2', peso: 6.17, perimetro: 0.40 },
        { tipo: '100x100x1.5', peso: 4.59, perimetro: 0.40 },
        { tipo: '80x40x2', peso: 4.11, perimetro: 0.24 },
        { tipo: '60x40x2', peso: 3.15, perimetro: 0.20 },
        { tipo: '50x30x2', peso: 2.50, perimetro: 0.16 }
      ],
      outrosMateriais: [
        { tipo: 'Perfil U 50x30x1.5', peso: 2.72, precoKg: 40 },
        { tipo: 'Perfil U 50x30x1.2', peso: 2.24, precoKg: 38 },
        { tipo: 'Cantoneira 1"', peso: 1.45 },
        { tipo: 'Chapa de base 4mm', dimensao: '10x10cm', preco: 30 }
      ],
      tratamento: {
        galvanizacao: 7.50,
        pintura: { primer: 10, pu: 20, consolidado: 2.20 }
      }
    };
    this.eucalipto = {
      bitolas: [12, 14, 16, 18],
      pesoLinear: { min: 12, max: 22, unidade: 'kg/m' },
      custoPorTora: 40,
      tratamentos: {
        antifungo: 3.00,
        usinagem: 4.00,
        lixamento: 2.00,
        osmocolor: 5.00
      }
    };
  }
  // Métodos utilitários podem ser adicionados aqui se necessário
}

export const parametros = new Parametros();
