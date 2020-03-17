export function RegistraDecoradorPropriedade(nome: string, destino: Object, propriedade: string | symbol, valor: any) {
  if (!Reflect.hasMetadata(nome, destino.constructor)) {
    Reflect.defineMetadata(nome, {}, destino.constructor);
  }
  const valorAtual = Reflect.getMetadata(nome, destino.constructor);
  valorAtual[propriedade] = valor;
  Reflect.defineMetadata(nome, valorAtual, destino.constructor);
}
