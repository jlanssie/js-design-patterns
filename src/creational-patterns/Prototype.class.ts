import { MyClass } from '../helpers/MyClass.class';
import { myObject } from '../helpers/myData';

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
