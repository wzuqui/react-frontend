import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IEtiqueta {
  [key: string]: string;
}

export const Etiqueta = (valor: string): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Etiqueta', destino, propriedade, valor);
  };
};

export function Etiquetas<T>(entity: new () => T) {
  return Reflect.getMetadata('Etiqueta', entity) as IEtiqueta;
}
