# THEBRN Framework

## Visão Geral

THEBRN é um framework modular para cálculo, simulação e orçamentação de estruturas metálicas e de madeira, coberturas, acessórios e logística, seguindo rigorosamente o padrão ES6 Modules e POO moderno. O sistema é orientado a objetos, com cada domínio em seu próprio arquivo, facilitando manutenção, expansão e integração.

## Estrutura do Projeto

```
/THEBRN/
│
├── 00-BOOT.MD           # Protocolo de inicialização e ROM do sistema
├── metadados.md         # Manual do framework e metadados operacionais
├── controle_versao.md   # Linha do tempo e histórico de versões
├── parametros.js        # Parâmetros globais centralizados (ES6/POO)
├── modulacao.js         # Lógicas de cálculo e modulação (ES6/POO)
├── ferro.js             # Domínio Ferro (ES6/POO)
├── eucalipto.js         # Domínio Eucalipto (ES6/POO)
├── cobertas.js          # Domínio Cobertas (ES6/POO)
├── acessorios.js        # Domínio Acessórios (ES6/POO)
├── financeiro.js        # Domínio Financeiro (ES6/POO)
├── logistica.js         # Domínio Logística (ES6/POO)
├── estruturas.js        # Estruturas e modulação de sistemas
├── relatorio.js         # Relatórios, datas e simulações
├── .gitignore           # Arquivos e pastas ignorados pelo Git
└── README.md            # Este arquivo
```

## Como Usar

1. **Pré-requisitos:**  
   - Node.js (opcional, para automação ou integração futura)
   - Navegador moderno para uso do sistema via ES6 Modules

2. **Inicialização do Git:**  
   ```
   git init
   git add .
   git commit -m "Inicialização do repositório THEBRN"
   ```

3. **Execução:**  
   - Importe os módulos necessários em seu `main.js` ou arquivo de orquestração.
   - Cada domínio pode ser acessado via import/export padrão ES6.

   ```js
   import { parametros } from './parametros.js';
   import { modulacao } from './modulacao.js';
   // ...outros domínios conforme necessidade
   ```

4. **Padrão de Desenvolvimento:**  
   - Cada domínio é uma classe ES6 exportada como singleton.
   - Não há variáveis globais: todo acesso é via import/export.
   - Estrutura e lógica desacopladas da interface visual.

## Padrões e Diretrizes

- **ES6 Modules**: Importação/exportação explícita entre arquivos.
- **POO Moderna**: Cada domínio é uma classe, instanciada e exportada.
- **Centralização de Parâmetros**: Parâmetros globais em `parametros.js`.
- **Documentação**: Consulte `00-BOOT.MD` e `metadados.md` para regras e histórico.
- **Estilo Visual**: Layout sugerido com Tailwind CSS via CDN (opcional).

## Licença

Projeto privado/sob demanda. Consulte o responsável pelo projeto para detalhes de uso e distribuição.

---

> Para dúvidas sobre funcionamento, consulte o arquivo `00-BOOT.MD` antes de qualquer alteração.
