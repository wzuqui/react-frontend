import 'reflect-metadata';

export interface FormatDefinition {
  format: string;
  propriedade: string;
}

export const Format = (Format: string): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    if (!Reflect.hasMetadata('Formats', target.constructor)) {
      Reflect.defineMetadata('Formats', [], target.constructor);
    }
    const Formats = Reflect.getMetadata(
      'Formats',
      target.constructor
    ) as FormatDefinition[];

    Formats.push({
      format: Format,
      propriedade: propertyKey as string
    });
    Reflect.defineMetadata('Formats', Formats, target.constructor);
  };
};

export function GetFormats<T>(entity: new () => T) {
  return Reflect.getMetadata(
    'Formats',
     entity
  ) as FormatDefinition[];
}
