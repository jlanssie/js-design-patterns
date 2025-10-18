import { myObject } from '../../helpers/myData';

/**
 * Class representing a Template for a Template pattern.
 */
export abstract class Template {
  data: any;

  templateMethod(data: any) {
    this.#privateMethod();
    this.publicMethod(data);
  }

  #privateMethod() {
    this.data = { ...this.data, privateData: myObject };
  }

  abstract publicMethod(data: any): void;

  getData() {
    return this.data;
  }
}
