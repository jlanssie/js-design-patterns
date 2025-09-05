import { myObject } from '../myData';

/**
 * Class representing a Builder pattern.
 */
export class Builder {
  static readonly addKeyValue = (object: any): void => {
    object.data = myObject;
  };

  static readonly addKeyMethod = (object: any): void => {
    object.method = () => {
      return myObject;
    };
  };
}
