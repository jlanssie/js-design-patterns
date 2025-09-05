import { Factory } from './Factory.class';

/**
 * Class representing an Abstract Factory pattern.
 */
export class AbstractFactory {
  static createFactory(productClass?: any): any {
    return new Factory(productClass);
  }
}
