import {
  Etiqueta,
  Etiquetas,
  Formatacao,
  Formatacoes,
  Ordem,
  Ordens,
  Componentes,
  Tipo,
  Tipos,
  Alinhamento,
  Alinhamentos
} from './decorators';

interface IColuna {
  ordem: number;
  etiqueta: string;
  propriedade: string;
  formatacao?: string | undefined;
  componente?: React.ComponentType<any> | undefined;
  tipo?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime' | undefined;
  alinhamento?: 'center' | 'left' | 'right' | undefined;
}

export class Entity {
  @Ordem(999)
  @Etiqueta('Identificação')
  @Tipo('number')
  id!: number;

  @Ordem(997)
  @Etiqueta('Criado no servidor')
  @Formatacao('dd/MM/yyyy HH:mm:ss')
  @Tipo('datetime')
  @Alinhamento('right')
  criadoDatahora!: Date;

  @Ordem(998)
  @Etiqueta('Modificado em')
  @Formatacao('dd/MM/yyyy HH:mm:ss')
  @Tipo('datetime')
  @Alinhamento('right')
  modificadoDatahora!: Date;

  public static obterColunas<T>(entity: new () => T): IColuna[] {
    const etiquetas = Etiquetas(entity);
    const formatacoes = Formatacoes(entity);
    const ordens = Ordens(entity);
    const componentes = Componentes(entity);
    const tipos = Tipos(entity);
    const alinhamentos = Alinhamentos(entity);

    return Object.entries(etiquetas)
      .map(item => {
        const [propriedade, etiqueta] = item;
        return {
          etiqueta,
          propriedade,
          ordem: ordens[propriedade] || 0,
          formatacao: formatacoes[propriedade],
          componente: componentes[propriedade],
          tipo: tipos[propriedade],
          alinhamento: alinhamentos[propriedade]
        } as IColuna;
      })
      .sort((a, b) => a.ordem - b.ordem);
  }
}
