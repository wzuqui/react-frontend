import 'reflect-metadata';
import Imagem from '../../components/Imagem';
import {
  Etiqueta,
  Componente,
  Tipo,
  Alinhamento,
  PermitirFiltro
} from './decorators';
import { Entity } from './Entity';
import { Entidade } from '.';

export class Icone extends Entity {
  @Etiqueta('None')
  @Tipo('string')
  nome!: string;

  @Etiqueta('Imagem')
  @Componente(Imagem)
  @Tipo('string')
  @Alinhamento('center')
  @PermitirFiltro(false)
  imagem!: string;

  @Etiqueta('Criado por')
  criadoPor!: number;

  criadoPorEntidade!: Entidade;
}
