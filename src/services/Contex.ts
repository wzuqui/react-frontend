import ODataContext from 'devextreme/data/odata/context';
import ODataStore from 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

export enum keyTypes {
  'String',
  'Int32',
  'Int64',
  'Guid',
  'Boolean',
  'Single',
  'Decimal'
}

export class Context {
  private _context!: ODataContext;

  constructor() {
    this._context = new ODataContext({
      version: 4,
      url: 'http://sistema.ravex.com.br:4000/odata1/',
      entities: {
        Icone: {
          key: 'Id',
          keyType: keyTypes.Int32
        },
        Entidade: {
          key: 'Id',
          keyType: keyTypes.Int32
        }
      },
      beforeSend: (options: {
        url?: string;
        async?: boolean;
        method?: string;
        timeout?: number;
        params?: any;
        payload?: any;
        headers?: any;
      }) => {
        options.headers = {
          authorization:
            'Bearer gCiksdgz5vBqaRcsxVpVioxSwhZ7C3lTj9WhJwIYGdVsTSw7k4Dx7h7o3XMrq6A9gg_1SrzYcE0JGxi_03KHGhNdxJvSFciyavw2JvM6y_O0WWgg55HvJGKyQIqdQBv5M2pfm_h29CI_l5o3WSL856iKJW1sTsGpUBHr9vFTRrRr8l94vVwMs_RRaW3lTk305HegiL2BX5jmVETy9b7znXYAib26TibwrDnZBzqyTjZMZ27kOAsIY-1XfcRrcFitZ91SwFldRAe0dUEN-bpcBSwX8FKgubH4T6FG7mUDInZ0ofAkA3hM2hS2Px57A46IzTjz_htqGRPPO08wHW2pscCOTiRRX6D2YCnrN6IMWFX-ThFQsHIDkU8g7LTuvL5Db2v0m6Fj-BHWGZSQXFciY4EiI6RvhbCe0J7nn47pBFf-pWaVFD9Nju46Rs2_jyb2HgIhDniFi7NeEnKbDADG_nBqayFr13Rp5cbFBjuTHfUcPfiwUKkhjkqtES9Dc4Id',
          idhierarquiaativa: '1',
          idusuario: '5',
          timezone: 'America/Sao_Paulo'
        };
      }
    });
  }

  get Icone() {
    return new DataSource({
      store: this.dataStores.Icone
    });
  }
  get Entidade() {
    return new DataSource({
      store: this.dataStores.Entidade,
      expand: ['Icone']
    });
  }

  public get dataSources() {
    return (this as unknown) as { [key: string]: DataSource };
  }
  public get dataStores() {
    return (this._context as unknown) as { [key: string]: ODataStore };
  }

  public static CreateDataSource<T>(entity: { new (): T }): DataSource {
    const context = new Context();
    const dataSource = context.dataSources[entity.name];

    if (dataSource === undefined) {
      throw Error(`CreateDataSource ${entity.name} not found`);
    }
    return dataSource;
  }
}
