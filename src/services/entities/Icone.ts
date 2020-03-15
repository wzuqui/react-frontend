import 'reflect-metadata';

import { DisplayName } from '../../decorators/DisplayName';
import { Entity } from './Entity';

export class Icone extends Entity {
  @DisplayName('None')
  nome!: string;

  @DisplayName('Imagem')
  @Template()
  imagem!: string;
}
