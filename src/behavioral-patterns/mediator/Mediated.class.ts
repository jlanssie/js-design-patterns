import { Mediator } from './IMediator.interface';

/**
 * Class representing a mediated entity in a Mediator pattern.
 * The client interacts with this entity via the mediator.
 */
export abstract class Mediated {
  mediator: Mediator;
  data: any;

  protected constructor(mediator: Mediator, data: any) {
    this.mediator = mediator;
    this.data = data;
  }

  abstract method(data: any): any;
}
