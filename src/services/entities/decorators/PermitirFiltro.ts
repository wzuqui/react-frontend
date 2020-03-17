import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IPermitirFiltro {
  [key: string]: boolean;
}

export const PermitirFiltro = (valor: boolean): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('PermitirFiltro', destino, propriedade, valor);
  };
};

export function PermitirFiltros<T>(entity: new () => T) {
  return Reflect.getMetadata('PermitirFiltro', entity) as IPermitirFiltro;
}
