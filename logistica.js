// logistica.js
// Domínio: Logística — parâmetros e cálculos (ES6 POO)

class Logistica {
  constructor() {
    this.parametros = {
      precoBaseKg: 2.00,
      unidade: 'kg',
      ajuste: [
        'distância',
        'número de viagens',
        'tipo de veículo',
        'hospedagem',
        'burocracia',
        'complexidade logística'
      ],
      avancado: [
        'distância',
        'visitas',
        'viagens',
        'veículos',
        'hospedagem',
        'burocracia'
      ]
    };
    this.formulas = {
      logistica: 'peso_total * preco_logistico_kg',
      transporte: 'distancia * custo_km + pedagio',
      avancado: 'logistica simples + ajustes por variáveis de projeto'
    };
    this.explicacao = 'Cálculos e parâmetros para logística, transporte, viagens e ajustes conforme variáveis do projeto. Logística base é R$2,00/kg, podendo ser ajustada por distância, viagens, tipo de veículo, hospedagem, burocracia e complexidade logística.';
  }
}

export const logistica = new Logistica();
