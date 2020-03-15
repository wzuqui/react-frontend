module.exports = {
  types: [
    { value: "feat", name: "feat: Um novo recurso" },
    { value: "fix", name: "fix: Uma correção de bug" },
    { value: "docs", name: "docs: Apenas mudança na documentação" },
    { value: "style", name: "style: Alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente etc.)" },
    { value: "refactor", name: "refactor: Uma alteração de código que não corrige um bug nem adiciona um recurso" },
    { value: "perf", name: "perf: Uma alteração de código que melhora o desempenho" },
    { value: "test", name: "test: Adicionando testes ausentes" },
    { value: "chore", name: "chore: Alterações no processo de construção ou ferramentas auxiliares e bibliotecas como geração de documentação" },
    { value: "revert", name: "revert:   Revert to a commit" },
    { value: "WIP", name: "WIP: Trabalho em progresso" }
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" }
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // ele precisa corresponder ao valor para o tipo de campo. Ex .: 'consertar'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // substituir as mensagens, os padrões são os seguintes
  messages: {
    type: "Selecione o tipo de alteração que você está enviando:",
    scope: "\nIndique o ESCOPO desta alteração (opcional):",
    // used if allowCustomScopes is true
    customScope: "Indique o escopo desta alteração:",
    subject: "Escreva uma descrição curta e IMPERATIVA da mudança:\n",
    body: 'Forneça uma descrição mais detalhada da alteração (opcional). Use "|" para quebrar uma nova linha:\n',
    breaking: "Listar quaisquer ALTERAÇÕES DE QUEBRA (opcional):\n",
    footer: "Liste quaisquer PROBLEMAS FECHADOS por esta alteração (opcional). Por exemplo: #31, #34:\n",
    confirmCommit: "Tem certeza de que deseja prosseguir com o commit acima?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // pule todas as perguntas que você quiser
  skipQuestions: ["body"],

  // limitar o comprimento do assunto
  subjectLimit: 100
  // breaklineChar: '|', // É suportado para os campos corpo e rodapé.
  // footerPrefix: 'PROBLEMAS FECHADOS:'
  // askForBreakingChangeFirst: true, // o padrão é false
};
