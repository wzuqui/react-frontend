import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IFormatacao {
  [key: string]: string;
}

export const Formatacao = (valor: string): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Formatacao', destino, propriedade, valor);
  };
};

export function Formatacoes<T>(entity: new () => T) {
  return Reflect.getMetadata('Formatacao', entity) as IFormatacao;
}
