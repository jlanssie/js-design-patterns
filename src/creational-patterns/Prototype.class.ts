import { CustomObject } from '../CustomObject.class';
import { customObject } from '../customData';

/**
 * Class representing a Prototype pattern.
 */
export class ExtendedPrototype extends CustomObject {
  readonly extendedData: any;

  constructor() {
    super();
    this.extendedData = customObject;
  }
}
