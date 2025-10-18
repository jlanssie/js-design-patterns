import { Mediated } from './Mediated.class';

/**
 * Interface for a mediator in a Mediator pattern.
 */
export interface Mediator {
  method(sender: Mediated, data: any): any;

  addMediated(mediated: Mediated): void;

  removeMediated(mediated: Mediated): void;
}
