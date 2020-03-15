function toTitleCase(str: string) {
  return str.replace(
      /\w\S*/g,
      function(txt: string) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

export class MenuItem {
  nome: string;
  descricao: string;
  categoria: string;
  icone: string;
  rota: string;

  get pasta(): string {
    return toTitleCase(this.rota.replace('-',' ')).replace(' ', '');
  }

  constructor(
    _nome: string,
    _descricao: string,
    _categoria: string,
    _icone: string,
    _rota: string
  ) {
    this.nome = _nome;
    this.descricao = _descricao;
    this.categoria = _categoria;
    this.icone = _icone;
    this.rota = _rota;
  }
}
