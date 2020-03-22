import { Entity } from './Entity';
import { Icone } from './Icone';

export class Entidade extends Entity {
  apelido!: string;
  foto!: string;

  icone!: Icone;
}
