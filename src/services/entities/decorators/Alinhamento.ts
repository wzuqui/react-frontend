import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IAlinhamento {
  [key: string]: 'center' | 'left' | 'right';
}

export const Alinhamento = (valor: 'center' | 'left' | 'right'): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Alinhamento', destino, propriedade, valor)
  };
};

export function Alinhamentos<T>(entity: new () => T) {
  return Reflect.getMetadata('Alinhamento', entity) as IAlinhamento;
}
