import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IOrdem {
  [key: string]: number;
}

export const Ordem = (valor: number): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Ordem', destino, propriedade, valor);
  };
};

export function Ordens<T>(entity: new () => T) {
  return Reflect.getMetadata('Ordem', entity) as IOrdem;
}
