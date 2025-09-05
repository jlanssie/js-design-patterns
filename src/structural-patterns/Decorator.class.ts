import { myObject } from '../myData';

/**
 * Class representing a Decorator pattern.
 */
export class Decorator {
  object: any;
  data: any;

  constructor(object: any) {
    this.object = object;
    this.data = { decoratedBy: Decorator.name };
  }

  method = (): any => {
    return myObject;
  };
}
