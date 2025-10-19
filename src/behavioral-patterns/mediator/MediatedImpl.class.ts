import { Mediated } from './Mediated.class';
import { IMediator } from './IMediator.interface';

/**
 * Class representing a concrete mediated entity in a Mediator pattern.
 * The client interacts with this entity via the mediator.
 */
export class MediatedImpl extends Mediated {
  constructor(mediator: IMediator, data: any) {
    super(mediator, data);
  }

  method(data: any) {
    return { myData: this.data, thirdPartyData: data };
  }
}
