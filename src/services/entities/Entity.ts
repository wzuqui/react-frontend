import { DisplayName } from '../../decorators/DisplayName';
import { Format } from '../../decorators/Format';
import { Ordem } from '../../decorators/Ordem';

import { GetDisplayNames } from '../../decorators/DisplayName';
import { GetFormats } from '../../decorators/Format';
import { GetOrdems } from '../../decorators/Ordem';

interface IColuna {
  ordem: number;
  etiqueta: string;
  propriedade: string;
  formatacao?: string | undefined;
}

export class Entity {
  @Ordem(999)
  @DisplayName('Identificação')
  id!: number;

  @DisplayName('Criado no servidor')
  @Format('dd/MM/yyyy HH:mm:ss')
  @Ordem(997)
  CriadoDatahora!: Date;

  @DisplayName('Modificado em')
  @Format('dd/MM/yyyy HH:mm:ss')
  @Ordem(998)
  ModificadoDatahora!: Date;

  public static obterColunas<T>(entity: new () => T): IColuna[] {
    const colunas = GetDisplayNames(entity);
    const formatos = Porra(
      GetFormats(entity),
      p => p.propriedade,
      p => p.format
    );
    const ordens = Porra(
      GetOrdems(entity),
      p => p.propriedade,
      p => p.ordem || 0
    );

    return colunas.map(coluna => {
      return {
        ordem: ordens[coluna.propriedade] || 0,
        etiqueta: coluna.displayName,
        propriedade: coluna.propriedade,
        formatacao: formatos[coluna.propriedade]
      } as IColuna;
    }).sort((a, b) => a.ordem - b.ordem);
  }
}

function Porra<T, TValue>(items: T[], grouper: (key: T) => any, mapper: (element: T) => TValue) {
  const retorno = {};

  for(const item of items) {
    Object.assign(retorno, {
      [grouper(item)]: mapper(item)
    });
  }
  return retorno as { [key: string]: TValue };
}

