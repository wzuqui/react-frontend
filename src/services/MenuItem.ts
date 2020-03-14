export class MenuItem {
  nome: string;
  descricao: string;
  categoria: string;
  icone: string;
  constructor(_nome: string, _descricao: string, _categoria: string, _icone: string) {
    this.nome = _nome;
    this.descricao = _descricao;
    this.categoria = _categoria;
    this.icone = _icone;
  }
}
