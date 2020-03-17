import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface ITipo {
  [key: string]: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
}

export const Tipo = (valor: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Tipo', destino, propriedade, valor)
  };
};

export function Tipos<T>(entity: new () => T) {
  return Reflect.getMetadata('Tipo', entity) as ITipo;
}
