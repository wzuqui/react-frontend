export class Usuario {
  private _nome: string;
  private _foto: string;

  /**
   * Getter nome
   * @return {string}
   */
  public get nome(): string {
    return this._nome;
  }

  /**
   * Getter foto
   * @return {string}
   */
  public get foto(): string {
    return this._foto;
  }

  constructor(nome: string, foto: string) {
    this._nome = nome;
    this._foto = foto;
  }

  static ativo: Usuario = new Usuario(
    "Willian Luis Zuqui",
    "https://www.googleapis.com/download/storage/v1/b/ravex-169112.appspot.com/o/201804161117595930.jpeg?generation=1523877481189937&alt=media"
  );
}
