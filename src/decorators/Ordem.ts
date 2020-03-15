import 'reflect-metadata';

export interface OrdemDefinition {
  ordem: number;
  propriedade: string;
}

export const Ordem = (Ordem: number): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    if (!Reflect.hasMetadata('Ordems', target.constructor)) {
      Reflect.defineMetadata('Ordems', [], target.constructor);
    }
    const Ordems = Reflect.getMetadata(
      'Ordems',
      target.constructor
    ) as OrdemDefinition[];

    Ordems.push({
      ordem: Ordem,
      propriedade: propertyKey as string
    });
    Reflect.defineMetadata('Ordems', Ordems, target.constructor);
  };
};

export function GetOrdems<T>(entity: new () => T) {
  return Reflect.getMetadata(
    'Ordems',
     entity
  ) as OrdemDefinition[];
}
