import { customObject } from '../customData';

/**
 * Class representing a decorator pattern.
 */
export class Decorator {
  object: any;
  data: any;

  constructor(object: any) {
    this.object = object;
    this.data = { decoratedBy: Decorator.name };
  }

  method = (): any => {
    return customObject;
  };
}
