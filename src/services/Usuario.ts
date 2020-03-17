import { Menu } from './Menu';
import DataSource from 'devextreme/data/data_source';

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

  obterHistorico() {
    return [
      {
        key: 'Recentes',
        items: [
          Menu.grupoMacro,
          Menu.rota,
          Menu.embarqueEmEquipamento,
          Menu.veiculoTipo,
          Menu.veiculo
        ]
      },
      {
        key: 'Mais acessados',
        items: [
          Menu.mapaMonitoramento,
          Menu.pessoa,
          Menu.regraServidorEmHierarquiaOrganizacional,
          Menu.embarqueEmEquipamento,
          Menu.historicoVeiculo
        ]
      },
      {
        key: 'Favoritos',
        items: [Menu.consultaInstalacao]
      }
    ];
  }

  obterMenu() {
    // TODO fazer implementação de permissões
    const menu = Menu.obterLista();
    return new DataSource({
      key: 'nome',
      group: 'categoria',
      store: menu,
      searchExpr: ['nome', 'descricao', 'categoria', 'icone', 'rota']
    });
  }

  static ativo: Usuario = new Usuario(
    'Willian Luis Zuqui',
    'https://www.googleapis.com/download/storage/v1/b/ravex-169112.appspot.com/o/201804161117595930.jpeg?generation=1523877481189937&alt=media'
  );
}
