import { myClass } from '../MyClass.class';
import { myObject } from '../myData';

/**
 * Class representing a Prototype pattern.
 */
export class ExtendedPrototype extends myClass {
  readonly extendedData: any;

  constructor() {
    super();
    this.extendedData = myObject;
  }
}
