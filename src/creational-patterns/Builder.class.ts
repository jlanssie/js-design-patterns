import { customData } from '../customData';

/**
 * Class representing a Builder pattern.
 */
export class Builder {
  static readonly addKeyValue = (object: any): void => {
    object.data = customData;
  };

  static readonly addKeyMethod = (object: any): void => {
    object.method = () => {
      return customData;
    };
  };
}
