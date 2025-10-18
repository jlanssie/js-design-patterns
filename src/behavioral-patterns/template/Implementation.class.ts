import { Template } from './Template.class';

/**
 * Class representing a concrete implementation of a template in a Template pattern.
 */
export class Implementation extends Template {
  publicMethod(data: any): void {
    this.data = { ...this.data, publicData: data };
  }
}
