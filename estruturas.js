// estruturas.js
// Domínio: Estruturas e modulação de sistemas

export const estruturas = {
  ferro: {
    modelo: 'Santo Dumont Reto',
    alturaPilar: 2.10, // metros
    dimensaoVaga: { largura: 2.5, comprimento: 5.0 }, // metros
    perfis: [
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
    tratamentos: {
      galvanizacao: 7.5, // R$/kg
      pintura: { primer: 10, pu: 20, consolidado: 2.2 } // R$/m² ou R$/kg
    },
    perdaLinear: 0.05, // 5%
    pilares: {
      simples: { maxVagas: 4, bracos: 1 },
      duplo: { maxVagas: 8, bracos: 2, padrao: 6 }
    },
    modulos: {
      doisPilaresSimples: 3,
      doisPilaresDuplos: 6
    },
    caracteristicas: [
      'acabamento superior',
      'telas tensionadas',
      'perfis robustos',
      'alta resistência à corrosão',
      'excelente estética e durabilidade'
    ],
    logica: {
      pesoTotal: 'comprimento (m) × peso específico (kg/m)',
      custoEstrutura: 'peso total × custo/kg',
      pintura: 'área superficial × (custo primer + PU)',
      perdaTecnica: '5% sobre peso linear'
    }
  },
  eucalipto4P: {
    pilaresPorModulo: 4,
    tipos: ['L/L', 'F/F'],
    bitolas: [12, 14, 16, 18], // cm
    pesoLinear: { min: 12, max: 22 }, // kg/m
    custoPorTora: 40,
    tratamentos: {
      antifungo: 3.0, // R$/m
      usinagem: 4.0, // R$/m
      lixamento: 2.0, // R$/m
      osmocolor: 5.0 // R$/m
    }
  },
  eucaliptoT: {
    pilarCentral: 'bitola 14/16',
    bracosPorPilar: 1,
    comprimentoBraco: 5, // metros
    unidade: 'm',
    maosFrancesasPorBraco: 2,
    longarinas: 'bitola 14/16',
    separadores: ['6/8', '8/10'],
    descricao: 'estrutura em desenvolvimento para grandes áreas'
  },
  cupula: {
    tipo: ['Eucalipto', 'Ferro'],
    montagem: 'sem longarinas',
    conexao: 'arcos conectados aos braços e pilares',
    aplicacao: ['pilares de ferro', 'madeira', 'paredes'],
    alinhamento: 'preciso',
    suporte: 'cabos de aço com grimpple G',
    pilares: {
      simples: 4,
      duplo: 8
    },
    vagasPadrao: { largura: 2.5, comprimento: 5.0 },
    observacao: 'Ideal para áreas centrais ou isoladas, cobertura curva, exige alinhamento preciso e suporte de tensão.'
  }
};
