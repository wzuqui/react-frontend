import { getPath, ObjPathProxy } from 'ts-object-path';
import { pascalCase } from 'change-case';
import { Context } from './Contex';
import DataSource from 'devextreme/data/data_source';
import { Query } from 'devextreme/data/query';
import ODataStore from 'devextreme/data/odata/store';

const pascalCaseEnabled = true;

export type Func<T, TReturn> = (expression: ObjPathProxy<T, T>) => TReturn;
type DataGridColumnAligments = undefined | 'center' | 'left' | 'right';
type DataGridColumnDataTypes =
  | 'string'
  | 'number'
  | 'date'
  | 'boolean'
  | 'object'
  | 'datetime';

interface IDataGridColumnLookup {
  dataSource: any;
  valueExpr: string;
  displayExpr: string;
}

class DataGridColumnLookup<T> implements IDataGridColumnLookup {
  private _store: ODataStore;
  private _key: string;

  valueExpr!: string;
  dataSource!: any[];
  displayExpr!: string;

  constructor(
    entity: { new (): T },
    relationship: keyof T,
    displayExpr: keyof T
  ) {
    this._store = new Context().dataStores[entity.name as string];
    this._key = pascalCase(this._store.key());

    this.valueExpr = this._key;
    this.displayExpr = pascalCase(displayExpr as string);

    (this._store.createQuery({}) as Query)
      .filter([`${relationship}/any(o: o/Excluido Ne true)`])
      .enumerate()
      .then(data => {
        this.dataSource = data;
      });
  }

  calculateCellValue(value: any) {
    return this.dataSource.find(x => x[this._key] === value)[this.displayExpr];
  }
}

class DataGridColumn {
  dataField: string;

  aligment?: DataGridColumnAligments;
  caption?: string;
  dataType?: DataGridColumnDataTypes;
  format?: string;
  cellComponent?: React.ComponentType<any>;
  allowFiltering?: boolean;
  lookup?: IDataGridColumnLookup;

  constructor(dataField: string) {
    this.dataField = pascalCaseEnabled
      ? dataField
          .split('.')
          .map(p => pascalCase(p))
          .join('.')
      : dataField;
  }

  Alignment(aligment: DataGridColumnAligments) {
    this.aligment = aligment;
    return this;
  }

  AllowFiltering(allowFiltering: boolean) {
    this.allowFiltering = allowFiltering;
    return this;
  }

  Caption(caption: string) {
    this.caption = caption;
    return this;
  }

  CellComponent(cellComponent: React.ComponentType<any>) {
    this.cellComponent = cellComponent;
    return this;
  }

  DataType(dataType: DataGridColumnDataTypes) {
    this.dataType = dataType;
    return this;
  }

  Format(format: string) {
    this.format = format;
    return this;
  }

  Lookup<T>(
    entity: { new (): T },
    relationship: keyof T,
    displayExpr: keyof T
  ) {
    this.lookup = new DataGridColumnLookup(entity, relationship, displayExpr);
    return this;
  }
}

class DataGridColumns<T> {
  columns: DataGridColumn[] = [];

  AddFor(expression: (proxy: ObjPathProxy<T, T>) => unknown): DataGridColumn {
    const column = new DataGridColumn(getPath(expression).join('.'));
    this.columns.push(column);
    return column;
  }
}

export class DataGridOptions<T> {
  entity!: new () => T;
  dataSource!: DataSource;
  columns?: DataGridColumn[];

  constructor(entity: { new (): T }) {
    this.entity = entity;
    this.dataSource = Context.CreateDataSource(entity);
  }

  Columns(factory: (columns: DataGridColumns<T>) => void): this {
    const dataGridColumns = new DataGridColumns<T>();
    factory(dataGridColumns);

    this.columns = dataGridColumns.columns;
    this.dataSource.select(this.columns.map(c => c.dataField));
    return this;
  }
}
