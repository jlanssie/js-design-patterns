import { Mediator } from './Mediator.interface';
import { Mediated } from './Mediated.class';

export class MediatorImpl implements Mediator {
  mediateds: Mediated[];

  constructor() {
    this.mediateds = [];
  }

  addMediated(mediated: Mediated) {
    this.mediateds.push(mediated);
  }

  removeMediated(mediated: Mediated) {
    this.mediateds = this.mediateds.filter((m) => m !== mediated);
  }

  getMediateds() {
    return this.mediateds;
  }

  method(mediated: Mediated, data: any) {
    const result: any[] = [];

    for (const m of this.mediateds) {
      if (m == mediated) {
        result.push(m.method(data));
      }
    }

    return result;
  }
}
