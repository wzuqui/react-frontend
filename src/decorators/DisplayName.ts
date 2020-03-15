import 'reflect-metadata';

export interface DisplayNameDefinition {
  displayName: string;
  propriedade: string;
}

export const DisplayName = (displayName: string): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    if (!Reflect.hasMetadata('DisplayNames', target.constructor)) {
      Reflect.defineMetadata('DisplayNames', [], target.constructor);
    }
    const displayNames = Reflect.getMetadata(
      'DisplayNames',
      target.constructor
    ) as DisplayNameDefinition[];

    displayNames.push({
      displayName,
      propriedade: propertyKey as string
    });
    Reflect.defineMetadata('DisplayNames', displayNames, target.constructor);
  };
};

export function GetDisplayNames<T>(entity: new () => T) {
  return Reflect.getMetadata(
    'DisplayNames',
     entity
  ) as DisplayNameDefinition[];
}
