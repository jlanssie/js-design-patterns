import { IMediator } from './IMediator.interface';

/**
 * Class representing a mediated entity in a Mediator pattern.
 * The client interacts with this entity via the mediator.
 */
export abstract class Mediated {
  mediator: IMediator;
  data: any;

  protected constructor(mediator: IMediator, data: any) {
    this.mediator = mediator;
    this.data = data;
  }

  abstract method(data: any): any;
}
