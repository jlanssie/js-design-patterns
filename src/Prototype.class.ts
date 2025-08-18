/**
 * Class representing a Prototype pattern.
 */
export class Prototype {
  readonly data: string;

  constructor() {
    this.data = 'I am a prototype value!';
  }

  method(): any {
    return `I am a prototype method!`;
  }
}

export class ExtendedPrototype extends Prototype {
  readonly extendedData: string;

  constructor() {
    super();
    this.extendedData = 'I am an object value!';
  }
}
