/**
 * Class representing a Builder pattern.
 */
export class Builder {
  static readonly addKeyValue = (object: any): void => {
    object.data = 'Key-Value added to the object.';
  };

  static readonly addKeyMethod = (object: any): void => {
    object.method = () => {
      console.info('Key-Method added to the object.');
    };
  };
}
