// relatorio.js
// Domínio: Relatórios, datas e simulações

export const relatorio = {
  datas: {
    ultimaModificacao: null,
    simulacao: null,
    orcamentoEntregue: null,
    execucaoPrevista: null,
    validadeCotacoes: null
  },
  casosDeUso: [
    'Área (m²): sugere módulos, pilares, blocos e estrutura',
    'Quantidade de vagas: distribui módulos e calcula estrutura',
    'Apenas serviço: lógica de manutenção/execução técnica',
    'Apenas tela: lógica de substituição/costura'
  ],
  requisitosFuturos: [
    'Importar/exportar orçamentos (XML)',
    'Emitir relatório técnico detalhado',
    'Emitir relatório executivo',
    'Interface adaptável ao input do usuário'
  ],
  simulacoes: [
    {
      nome: 'Área com 95 m²',
      entrada: '95 m²',
      estrutura: '2 módulos, pilares duplos (ferro), até 96 m²',
      cobertura: 'tela polietileno',
      modelo: 'Santo Dumont Reto',
      relatorio: 'peso total, braços, ilhós, tela, custo, logística, equipe'
    },
    {
      nome: 'Projeto com 7 vagas',
      entrada: '3 + 4 vagas',
      estrutura: '2 blocos, pilares simples e duplos',
      modelo: 'eucalipto 4P (L/L e F/F)'
    },
    {
      nome: 'Apenas serviço',
      entrada: 'módulo danificado de 3 vagas',
      relatorio: 'lixamento, reforço, pintura, transporte, equipe, peças'
    },
    {
      nome: 'Apenas tela',
      entrada: 'substituir cobertura por tela impermeável em arco',
      relatorio: 'arcos metálicos, viga calha, ilhós, parafusos, cabos, grimpple'
    }
  ],
  relatorios: [
    'Resumo geral: pesos, áreas, custos',
    'Blocos: tipo, vagas, área, custo direto',
    'Insumos: lista técnica por material',
    'Financeiro: custos diretos + BDI, impostos, logística'
  ],
  estilo: {
    css: 'Tailwind via CDN',
    layout: 'cards modulares, grid flexível, responsivo'
  }
};
