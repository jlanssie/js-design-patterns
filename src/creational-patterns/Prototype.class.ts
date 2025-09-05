import { MyClass } from '../MyClass.class';
import { myObject } from '../myData';

/**
 * Class representing a Prototype pattern.
 */
export class ExtendedPrototype extends MyClass {
  readonly extendedData: any;

  constructor() {
    super();
    this.extendedData = myObject;
  }
}
