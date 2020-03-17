import 'reflect-metadata';
import { RegistraDecoradorPropriedade } from './RegistraDecoradorPropriedade';

export interface IComponente {
  [key: string]: React.ComponentType<any>;
}

export const Componente = (valor: React.ComponentType<any>): PropertyDecorator => {
  return (destino: Object, propriedade: string | symbol) => {
    RegistraDecoradorPropriedade('Componente', destino, propriedade, valor)
  };
};

export function Componentes<T>(entity: new () => T) {
  return Reflect.getMetadata('Componente', entity) as IComponente;
}