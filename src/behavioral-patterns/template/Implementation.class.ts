import { Template } from './Template.class';

/**
 * Class representing a Template for a Template pattern.
 */
export class Implementation extends Template {
  publicMethod(data: any): void {
    this.data = { ...this.data, publicData: data };
  }
}
