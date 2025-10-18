import { Mediated } from './Mediated.class';
import { Mediator } from './IMediator.interface';

export class MediatedImpl extends Mediated {
  constructor(mediator: Mediator, data: any) {
    super(mediator, data);
  }

  method(data: any) {
    return { myData: this.data, thirdPartyData: data };
  }
}
