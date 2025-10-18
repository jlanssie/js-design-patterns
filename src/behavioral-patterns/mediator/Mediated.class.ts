import { Mediator } from './IMediator.interface';

export abstract class Mediated {
  mediator: Mediator;
  data: any;

  protected constructor(mediator: Mediator, data: any) {
    this.mediator = mediator;
    this.data = data;
  }

  abstract method(data: any): any;
}
