import { customObject } from '../customData';

/**
 * Class representing a Builder pattern.
 */
export class Builder {
  static readonly addKeyValue = (object: any): void => {
    object.data = customObject;
  };

  static readonly addKeyMethod = (object: any): void => {
    object.method = () => {
      return customObject;
    };
  };
}
