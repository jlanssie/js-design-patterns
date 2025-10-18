import { Mediated } from './Mediated.class';

export interface Mediator {
  method(sender: Mediated, data: any): any;

  addMediated(mediated: Mediated): void;

  removeMediated(mediated: Mediated): void;
}
