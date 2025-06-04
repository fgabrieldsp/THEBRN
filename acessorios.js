// acessorios.js
// Domínio: Acessórios e componentes gerais (ES6 POO)

class Acessorios {
  constructor() {
    // ...todos os acessórios e lógica...
    this.ilhos = {
      preco: 0.63,
      unidade: 'unidade',
      material: 'galvanizado',
      inoxOpcional: true,
      observacao: 'padrão galvanizado; inox sob demanda'
    };
    this.maoFrancesa = {
      quantidadePorPilar: 2,
      maxPorPilarF_F: 4,
      maxPorPilarL_L: 3,
      parafusosPorUnidade: 4,
      parafusosPorVertice: 2
    };
    this.parafusosArruelas = {
      porIlhos: 1,
      porMaoFrancesa: 4,
      precoInox: 1.00,
      unidade: 'unidade',
      material: 'inox'
    };
    this.kitFixacao = {
      material: 'inox',
      preco: 1.00,
      unidade: 'unidade',
      observacao: 'todo inox, exceto ilhós'
    };
    this.vigaCalha = {
      preco: 0.80,
      unidade: 'unidade',
      material: 'ferro galvanizado',
      inoxOpcional: true,
      funcao: 'perfil metálico que conecta arcos e serve para fixação da tela impermeável'
    };
    this.arcosMetálicos = {
      preco: 0.80,
      unidade: 'unidade',
      espacamento: 0.25,
      material: 'galvanizado',
      inoxOpcional: true,
      funcao: 'estrutura curva para sustentar telas impermeáveis'
    };
    this.componentesCupula = {
      cabosAco: {
        diametro: 4,
        preco: 2.00,
        unidade: 'm',
        funcao: 'tracionamento das cobertas tipo cúpula'
      },
      grimppleG: {
        compatibilidade: '3-4mm',
        preco: 4.50,
        unidade: 'unidade',
        funcao: 'dispositivo metálico que conecta e tensiona cabos de aço'
      },
      arcosCupula: {
        preco: 1.20,
        unidade: 'unidade',
        funcao: 'arcos adaptados para estruturas curvas completas'
      },
      tartaruga: {
        preco: 12.00,
        unidade: 'unidade',
        funcao: 'peça central da cúpula, conecta tubos/arcos da cobertura'
      }
    };
    this.logica = {
      ilhosPorPerimetro: 0.25,
      parafusoPorIlhos: 1,
      parafusoPorMaoFrancesa: 4,
      maoFrancesaPorPilarPadrao: 2,
      maoFrancesaPorPilarF_F: 4,
      maoFrancesaPorPilarL_L: 3,
      arcosPorEspacamento: 0.25,
      vigaCalhaPorArcos: '1 entre cada dois arcos + 2 nas extremidades'
    };
  }
}

export const acessorios = new Acessorios();
