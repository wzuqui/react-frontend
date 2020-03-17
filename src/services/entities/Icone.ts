import 'reflect-metadata';
import Imagem from '../../components/Imagem';
import { Etiqueta, Componente, Tipo, Alinhamento } from './decorators';
import { Entity } from './Entity';

export class Icone extends Entity {
  @Etiqueta('None')
  @Tipo('string')
  nome!: string;

  @Etiqueta('Imagem')
  @Componente(Imagem)
  @Tipo('string')
  @Alinhamento('center')
  imagem!: string;
}
